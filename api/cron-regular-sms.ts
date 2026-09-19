import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabaseAdmin } from './_lib/supabase';
import { sendSms } from './_lib/arkesel';
import { weeklyAwarenessSms, monthlyRefillSms } from './_lib/smsTemplates';
import { verifyCron } from './_lib/verifyCron';

function isoWeekNumber(date: Date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

// Runs daily (see vercel.json). Only actually sends on Mondays (weekly
// awareness) and the 1st of the month (monthly refill reminder) —
// idempotent per calendar day, so a retry or a second trigger the same
// day won't double-send.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (!verifyCron(req, res)) return;

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      res.status(200).json({ ok: false, reason: 'supabase_not_configured' });
      return;
    }

    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);
    const isMonday = now.getUTCDay() === 1;
    const isFirstOfMonth = now.getUTCDate() === 1;

    const results: Record<string, unknown> = {};

    if (isMonday) {
      results.weekly = await sendBatch(supabase, 'weekly_awareness', todayStr, weeklyAwarenessSms(isoWeekNumber(now)));
    }
    if (isFirstOfMonth) {
      results.monthly = await sendBatch(supabase, 'monthly_refill', todayStr, monthlyRefillSms());
    }

    res.status(200).json({ ok: true, isMonday, isFirstOfMonth, results });
  } catch (err) {
    console.error('cron-regular-sms crashed', err);
    res.status(500).json({ ok: false, reason: 'unexpected_error', error: String(err) });
  }
}

async function sendBatch(
  supabase: NonNullable<ReturnType<typeof getSupabaseAdmin>>,
  messageType: 'weekly_awareness' | 'monthly_refill',
  todayStr: string,
  message: string
) {
  const { data: alreadySentToday } = await supabase
    .from('sms_log')
    .select('id')
    .eq('message_type', messageType)
    .gte('sent_at', `${todayStr}T00:00:00Z`)
    .limit(1);

  if (alreadySentToday && alreadySentToday.length > 0) {
    return { skipped: 'already_sent_today' };
  }

  const { data: customers } = await supabase
    .from('customers')
    .select('phone')
    .eq('sms_consent', true);

  const phones = (customers ?? []).map((c) => c.phone);
  if (phones.length === 0) {
    return { skipped: 'no_consented_customers' };
  }

  const result = await sendSms(phones, message);

  await supabase.from('sms_log').insert(
    phones.map((phone) => ({
      phone,
      message_type: messageType,
      status: result.ok ? 'sent' : 'failed',
      provider_response: JSON.stringify('providerResponse' in result ? result.providerResponse : result.reason),
    }))
  );

  return { ok: result.ok, recipientCount: phones.length };
}
