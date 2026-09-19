import type { VercelRequest, VercelResponse } from '@vercel/node';

// Vercel Cron Jobs call the route with `Authorization: Bearer <CRON_SECRET>`
// automatically once CRON_SECRET is set as an env var. This stops anyone
// else who finds the URL from triggering a mass SMS send.
export function verifyCron(req: VercelRequest, res: VercelResponse): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    res.status(500).json({ ok: false, error: 'CRON_SECRET not configured' });
    return false;
  }
  if (req.headers.authorization !== `Bearer ${secret}`) {
    res.status(401).json({ ok: false, error: 'Unauthorized' });
    return false;
  }
  return true;
}
