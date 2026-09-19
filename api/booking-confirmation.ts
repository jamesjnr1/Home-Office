import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabaseAdmin } from './_lib/supabase';
import { sendSms } from './_lib/arkesel';
import { bookingConfirmationSms } from './_lib/smsTemplates';

// Called from BookAppointment.tsx after a successful Formspree submission.
// Best-effort: the booking's real confirmation is the Formspree email:
// this only adds the appointment to Supabase (so a reminder can be sent
// the day before) and sends a confirmation SMS if the customer opted in.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ ok: false, error: 'Method not allowed' });
      return;
    }

    const { name, phone, reason, preferredDate, preferredTime, smsConsent } = req.body ?? {};
    if (!name || !phone || !reason) {
      res.status(400).json({ ok: false, error: 'Missing required fields' });
      return;
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      res.status(200).json({ ok: false, reason: 'supabase_not_configured' });
      return;
    }

    const { data: appointment, error: insertError } = await supabase
      .from('appointments')
      .insert({
        name,
        phone,
        reason,
        preferred_date: preferredDate || null,
        preferred_time: preferredTime || null,
        sms_consent: Boolean(smsConsent),
      })
      .select()
      .single();

    if (insertError) {
      res.status(200).json({ ok: false, reason: 'db_insert_failed', error: insertError.message });
      return;
    }

    if (smsConsent) {
      await supabase.from('customers').upsert(
        { phone, name, source: 'booking_form', sms_consent: true },
        { onConflict: 'phone' }
      );

      const message = bookingConfirmationSms(name, reason, preferredDate || 'your requested date', preferredTime || '');
      const result = await sendSms([phone], message);

      await supabase.from('sms_log').insert({
        phone,
        message_type: 'booking_confirmation',
        status: result.ok ? 'sent' : 'failed',
        provider_response: JSON.stringify('providerResponse' in result ? result.providerResponse : result.reason),
      });

      if (result.ok) {
        await supabase.from('appointments').update({ confirmation_sent: true }).eq('id', appointment.id);
      }

      res.status(200).json({ ok: result.ok, reason: result.ok ? undefined : result.reason });
      return;
    }

    res.status(200).json({ ok: true, smsSkipped: 'no_consent' });
  } catch (err) {
    console.error('booking-confirmation crashed', err);
    res.status(500).json({ ok: false, reason: 'unexpected_error', error: String(err) });
  }
}
