// Sends SMS via Arkesel (https://sms.arkesel.com/api/v2/sms/send).
// Server-side only — the API key must never reach the frontend bundle.
//
// Until ARKESEL_API_KEY and ARKESEL_SENDER_ID are set (the sender ID
// needs NCA approval in the Arkesel dashboard first), this returns
// `{ ok: false, reason: 'not_configured' }` instead of pretending to
// send — callers must not report success to a customer/log unless
// `ok` is actually true.
export type SendSmsResult =
  | { ok: true; providerResponse: unknown }
  | { ok: false; reason: 'not_configured' | 'send_failed'; providerResponse?: unknown };

export async function sendSms(recipients: string[], message: string): Promise<SendSmsResult> {
  const apiKey = process.env.ARKESEL_API_KEY;
  const sender = process.env.ARKESEL_SENDER_ID;

  if (!apiKey || !sender || recipients.length === 0) {
    return { ok: false, reason: 'not_configured' };
  }

  try {
    const res = await fetch('https://sms.arkesel.com/api/v2/sms/send', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sender, message, recipients }),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      return { ok: false, reason: 'send_failed', providerResponse: data };
    }
    return { ok: true, providerResponse: data };
  } catch (err) {
    return { ok: false, reason: 'send_failed', providerResponse: String(err) };
  }
}
