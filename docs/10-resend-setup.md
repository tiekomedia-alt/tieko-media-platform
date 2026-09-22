# Resend setup

The website sends free-review and consultation requests through server-only API routes.

## Required environment variables

Create `.env.local` in the project root and add:

```text
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=onboarding@resend.dev
LEADS_TO_EMAIL=tiekomedia@gmail.com
```

Replace `re_xxxxxxxxx` with a newly generated Resend API key. Never commit or share the real key.

`onboarding@resend.dev` is suitable for initial testing with the email address associated with the Resend account. After verifying a Tieko Media sending domain, change `RESEND_FROM_EMAIL` to the approved address.
