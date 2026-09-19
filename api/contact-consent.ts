import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabaseAdmin } from './_lib/supabase.js';

// Called from Contact.tsx after a successful Formspree submission, only
// when the visitor checked the SMS consent box. Just saves them to the
// regular-SMS list — no message is sent immediately from this endpoint.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ ok: false, error: 'Method not allowed' });
      return;
    }

    const { name, phone } = req.body ?? {};
    if (!phone) {
      res.status(400).json({ ok: false, error: 'Missing phone' });
      return;
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      res.status(200).json({ ok: false, reason: 'supabase_not_configured' });
      return;
    }

    const { error } = await supabase
      .from('customers')
      .upsert({ phone, name, source: 'contact_form', sms_consent: true }, { onConflict: 'phone' });

    res.status(200).json({ ok: !error, error: error?.message });
  } catch (err) {
    console.error('contact-consent crashed', err);
    res.status(500).json({ ok: false, reason: 'unexpected_error', error: String(err) });
  }
}
