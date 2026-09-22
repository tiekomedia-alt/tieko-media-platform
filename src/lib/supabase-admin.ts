import "server-only";
import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (
    !url ||
    !secretKey ||
    url.includes("your-project") ||
    secretKey.includes("xxxxxxxxx") ||
    secretKey.startsWith("sb_publishable_")
  ) {
    return null;
  }

  return createClient(url, secretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
