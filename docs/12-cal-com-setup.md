# Cal.com setup

Cal.com provides the live availability calendar on `/book-a-call`. The existing Supabase-backed consultation form remains the fallback until a public Cal.com event link is configured.

## Create the event

1. Create or sign in to a Cal.com individual account.
2. Connect the Google or Outlook calendar that should receive Tieko Media bookings.
3. Create a personal event type named **TIEKO Discovery Call**.
4. Set the duration to **30 minutes**.
5. Choose Google Meet, Zoom or Cal Video as the meeting location.
6. Configure working hours, minimum notice and buffers between meetings.
7. Add useful attendee questions such as organisation, phone number and the service they want to discuss.
8. Save the event and copy its public URL, for example `https://cal.com/username/tieko-discovery-call`.

## Connect the website

Open `.env.local` and add:

```text
NEXT_PUBLIC_CAL_BOOKING_URL=https://cal.com/your-username/tieko-discovery-call
```

Replace the example with the real public event URL. The public booking URL is not a secret and may be shared safely.
