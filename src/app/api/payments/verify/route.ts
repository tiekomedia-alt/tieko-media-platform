import { NextResponse } from "next/server";
import { verifyFlutterwaveTransaction } from "@/lib/flutterwave";
import { reconcilePaidOrder } from "@/lib/payment-orders";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const reference = requestUrl.searchParams.get("tx_ref")?.trim() ?? "";
  const transactionId = requestUrl.searchParams.get("transaction_id")?.trim() ?? "";
  const flutterwaveStatus = requestUrl.searchParams.get("status")?.trim() ?? "";
  const destination = new URL("/checkout/confirmation", requestUrl.origin);

  if (
    flutterwaveStatus !== "successful" ||
    !reference ||
    !/^[A-Za-z0-9.=\-]+$/.test(reference) ||
    !/^\d+$/.test(transactionId)
  ) {
    destination.searchParams.set("status", "failed");
    return NextResponse.redirect(destination);
  }

  try {
    const transaction = await verifyFlutterwaveTransaction(transactionId);
    const result = await reconcilePaidOrder(transaction);
    destination.searchParams.set("status", result.paid ? "success" : "failed");
    destination.searchParams.set("reference", reference);
  } catch (error) {
    console.error("Payment verification failed", error);
    destination.searchParams.set("status", "pending");
    destination.searchParams.set("reference", reference);
  }

  return NextResponse.redirect(destination);
}
