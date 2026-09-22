import { createHmac, timingSafeEqual } from "node:crypto";
import {
  getFlutterwaveWebhookSecret,
  type FlutterwaveTransaction,
  verifyFlutterwaveTransaction,
} from "@/lib/flutterwave";
import { reconcilePaidOrder } from "@/lib/payment-orders";

type FlutterwaveWebhook = {
  event?: string;
  data?: FlutterwaveTransaction;
};

export async function POST(request: Request) {
  const rawBody = await request.text();
  const suppliedSignature = request.headers.get("flutterwave-signature") ?? "";
  const legacySignature = request.headers.get("verif-hash") ?? "";

  try {
    const secretHash = getFlutterwaveWebhookSecret();
    const expectedSignature = createHmac("sha256", secretHash)
      .update(rawBody)
      .digest("base64");

    function signaturesMatch(value: string, expected: string) {
      const valueBuffer = Buffer.from(value, "utf8");
      const expectedBuffer = Buffer.from(expected, "utf8");
      return valueBuffer.length === expectedBuffer.length && timingSafeEqual(valueBuffer, expectedBuffer);
    }

    if (!signaturesMatch(suppliedSignature, expectedSignature) && !signaturesMatch(legacySignature, secretHash)) {
      return new Response("Invalid signature", { status: 401 });
    }

    const payload = JSON.parse(rawBody) as FlutterwaveWebhook;

    if (payload.event === "charge.completed" && payload.data?.id) {
      const verifiedTransaction = await verifyFlutterwaveTransaction(String(payload.data.id));
      await reconcilePaidOrder(verifiedTransaction);
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Flutterwave webhook failed", error);
    return new Response("Webhook processing failed", { status: 500 });
  }
}
