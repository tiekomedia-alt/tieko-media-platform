# Supabase setup

Supabase stores free-review and consultation submissions before Resend sends notification emails.

## 1. Create the tables

1. Open the Supabase project dashboard.
2. Select **SQL Editor**.
3. Select **New query**.
4. Copy the complete contents of `supabase/migrations/202609210001_create_lead_tables.sql` into the editor.
5. Select **Run**.
6. Open **Table Editor** and confirm that `review_requests` and `booking_requests` exist.

The migration enables Row Level Security and blocks browser users from accessing lead data. Only the server-side secret key can access these tables.

## 2. Add the project credentials

Open the project's **Connect** dialog or API settings and copy:

- Project URL
- Secret key beginning with `sb_secret_`

Add them to `.env.local`:

```text
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SECRET_KEY=sb_secret_xxxxxxxxx
```

Replace both placeholders with the real values. Never commit, publish or send the secret key through chat.
