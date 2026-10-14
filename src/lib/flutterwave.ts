import "server-only";
import { createHash } from "node:crypto";

const flutterwaveApiUrl = "https://api.flutterwave.com/v3";

type FlutterwaveEnvelope<T> = {
  status: string;
  message: string;
  data: T;
};

export type FlutterwaveTransaction = {
  id: number;
  tx_ref: string;
  status: string;
  amount: number;
  charged_amount: number;
  currency: string;
  payment_type: string | null;
  processor_response: string | null;
  created_at: string;
  customer: {
    email: string;
  };
};

function getSecretKey() {
  const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("FLUTTERWAVE_SECRET_KEY is not configured.");
  }

  if (secretKey.startsWith("FLWPUBK")) {
    throw new Error(
      "FLUTTERWAVE_SECRET_KEY contains a public key. Replace it with a Flutterwave secret key (FLWSECK_TEST-… or FLWSECK-…).",
    );
  }

  if (!secretKey.startsWith("FLWSECK")) {
    throw new Error("FLUTTERWAVE_SECRET_KEY is not a valid Flutterwave secret key.");
  }

  return secretKey;
}

function createPayloadHash(input: {
  amount: string;
  currency: string;
  email: string;
  reference: string;
}) {
  const hashedSecretKey = createHash("sha256").update(getSecretKey(), "utf8").digest("hex");
  const value = `${input.amount}${input.currency}${input.email}${input.reference}${hashedSecretKey}`;
  return createHash("sha256").update(value, "utf8").digest("hex");
}

async function flutterwaveRequest<T>(path: string, init?: RequestInit) {
  const response = await fetch(`${flutterwaveApiUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getSecretKey()}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });
  const result = (await response.json()) as FlutterwaveEnvelope<T>;

  if (!response.ok || result.status !== "success") {
    throw new Error(result.message || "Flutterwave request failed.");
  }

  return result.data;
}

export function initializeFlutterwavePayment(input: {
  email: string;
  fullName: string;
  phone: string;
  amountSubunit: number;
  currency: string;
  reference: string;
  redirectUrl: string;
  orderId: string;
  offerSlug: string;
  offerName: string;
}) {
  const amount = String(input.amountSubunit / 100);

  return flutterwaveRequest<{ link: string }>("/payments", {
    method: "POST",
    body: JSON.stringify({
      tx_ref: input.reference,
      amount,
      currency: input.currency,
      redirect_url: input.redirectUrl,
      customer: {
        email: input.email,
        name: input.fullName,
        phonenumber: input.phone,
      },
      customizations: {
        title: "Tieko Media",
        description: input.offerName,
      },
      meta: {
        order_id: input.orderId,
        offer_slug: input.offerSlug,
      },
      configurations: {
        session_duration: 20,
        max_retry_attempt: 3,
      },
      payload_hash: createPayloadHash({
        amount,
        currency: input.currency,
        email: input.email,
        reference: input.reference,
      }),
    }),
  });
}

export function verifyFlutterwaveTransaction(transactionId: string) {
  if (!/^\d+$/.test(transactionId)) {
    throw new Error("Invalid Flutterwave transaction ID.");
  }

  return flutterwaveRequest<FlutterwaveTransaction>(
    `/transactions/${encodeURIComponent(transactionId)}/verify`,
  );
}

export function getFlutterwaveWebhookSecret() {
  const secretHash = process.env.FLUTTERWAVE_SECRET_HASH;

  if (!secretHash || secretHash.length < 16) {
    throw new Error("FLUTTERWAVE_SECRET_HASH is not configured.");
  }

  return secretHash;
}
