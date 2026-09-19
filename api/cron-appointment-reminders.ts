import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabaseAdmin } from './_lib/supabase';
import { sendSms } from './_lib/arkesel';
import { appointmentReminderSms } from './_lib/smsTemplates';
import { verifyCron } from './_lib/verifyCron';

// Runs daily (see vercel.json). Ghana has no UTC offset, so "today" in
// UTC is also "today" in Accra — no timezone math needed.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (!verifyCron(req, res)) return;

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      res.status(200).json({ ok: false, reason: 'supabase_not_configured' });
      return;
    }

    const tomorrow = new Date();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    const tomorrowStr = tomorrow.toISOString().slice(0, 10);

    const { data: appointments, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('preferred_date', tomorrowStr)
      .eq('sms_consent', true)
      .eq('reminder_sent', false);

    if (error) {
      res.status(200).json({ ok: false, error: error.message });
      return;
    }

    let sent = 0;
    for (const appt of appointments ?? []) {
      const message = appointmentReminderSms(appt.preferred_date, appt.preferred_time ?? '');
      const result = await sendSms([appt.phone], message);

      await supabase.from('sms_log').insert({
        phone: appt.phone,
        message_type: 'appointment_reminder',
        status: result.ok ? 'sent' : 'failed',
        provider_response: JSON.stringify('providerResponse' in result ? result.providerResponse : result.reason),
      });

      if (result.ok) {
        await supabase.from('appointments').update({ reminder_sent: true }).eq('id', appt.id);
        sent += 1;
      }
    }

    res.status(200).json({ ok: true, checked: appointments?.length ?? 0, sent });
  } catch (err) {
    console.error('cron-appointment-reminders crashed', err);
    res.status(500).json({ ok: false, reason: 'unexpected_error', error: String(err) });
  }
}
