import { createClient } from '@supabase/supabase-js';

// Server-side only — uses the service role key, which bypasses Row
// Level Security. Never import this file from src/ (the frontend
// bundle); it must only run inside /api serverless functions.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    return null;
  }
  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
