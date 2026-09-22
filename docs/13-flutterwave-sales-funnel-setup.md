# Flutterwave sales funnel setup

Flutterwave is installed as the payment provider for future approved offers, invoices and products. The standalone Media Services funnel uses a free introductory callback request and does not present a fixed-price consultation or direct checkout. Detailed strategy, campaign setup and implementation are paid services scoped after the introductory call.

## 1. Add test configuration

Create or open the Tieko Media Flutterwave account, complete the required business steps and remain in Test Mode. Add these values to `.env.local` and later to the hosting provider:

```text
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-replace_with_your_test_secret_key
FLUTTERWAVE_SECRET_HASH=replace_with_a_long_random_webhook_secret
```

Never add the Flutterwave secret key or webhook secret to a variable beginning with `NEXT_PUBLIC_`.

The Flutterwave API URL is already configured securely in server code. It does not need to be added to `.env.local`.

Flutterwave Standard hosted checkout does not require the encryption key. That credential is used by other integration methods and should not be added unless the payment architecture changes.

If a fixed offer is approved later, its amount must be stored server-side so it cannot be changed by a customer request. Until then, the generic checkout remains safely disabled.

## 2. Run the Supabase migration

Open the Supabase SQL editor and run:

`supabase/migrations/202609210002_create_orders.sql`

This creates the private `orders` table used to verify and reconcile payments.

## 3. Configure the webhook

After the website is deployed, add this webhook URL in Flutterwave:

```text
https://your-live-domain.com/api/payments/webhook
```

Use the same value from `FLUTTERWAVE_SECRET_HASH` as the webhook secret hash in the Flutterwave dashboard. The endpoint supports Flutterwave's HMAC signature and the legacy verification-hash header.

## 4. Test before going live

1. Keep Flutterwave in Test Mode.
2. Open an approved checkout route once a fixed-price offer has been configured.
3. Complete a payment with a Flutterwave test method.
4. Confirm the order changes to `paid` in Supabase.
5. Confirm the callback displays the successful payment page.
6. Only switch to live credentials after the offer, price, refund policy and legal copy are approved.

## Routes

- Standalone funnel: `/mediaservices`
- Future content-session checkout: `/checkout/content-system-session`
- Flutterwave initializer: `/api/payments/initialize`
- Flutterwave callback verifier: `/api/payments/verify`
- Flutterwave webhook: `/api/payments/webhook`
- Payment result: `/checkout/confirmation`
