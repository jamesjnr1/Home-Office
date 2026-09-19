import { createClient } from '@supabase/supabase-js';

// Server-side only — uses the service role key, which bypasses Row
// Level Security. Never import this file from src/ (the frontend
// bundle); it must only run inside /api serverless functions.
export function getSupabaseAdmin() {
  // .trim() guards against a stray trailing newline or space picked up
  // when copy-pasting a secret into Vercel's env var UI — that alone is
  // enough to make createClient() throw on an otherwise-correct value.
  const url = process.env.SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !serviceRoleKey) {
    return null;
  }
  try {
    return createClient(url, serviceRoleKey, {
      auth: { persistSession: false },
    });
  } catch (err) {
    console.error('getSupabaseAdmin: createClient failed', err);
    return null;
  }
}
