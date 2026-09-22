import "server-only";
import type { FlutterwaveTransaction } from "@/lib/flutterwave";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function reconcilePaidOrder(transaction: FlutterwaveTransaction) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("id, amount_subunit, currency, email, status")
    .eq("reference", transaction.tx_ref)
    .single();

  if (orderError || !order) {
    throw new Error("Order could not be found.");
  }

  const paymentMatches =
    transaction.status === "successful" &&
    Math.round(transaction.amount * 100) === order.amount_subunit &&
    transaction.currency === order.currency &&
    transaction.customer.email.toLowerCase() === order.email.toLowerCase();

  if (!paymentMatches) {
    await supabase
      .from("orders")
      .update({
        status: "failed",
        gateway_response: transaction.processor_response ?? "Payment verification mismatch",
        updated_at: new Date().toISOString(),
      })
      .eq("id", order.id)
      .neq("status", "paid");

    return { paid: false, orderId: order.id };
  }

  const { error: updateError } = await supabase
    .from("orders")
    .update({
      status: "paid",
      gateway_transaction_id: String(transaction.id),
      payment_channel: transaction.payment_type,
      gateway_response: transaction.processor_response,
      paid_at: transaction.created_at ?? new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", order.id);

  if (updateError) {
    throw new Error("Order payment status could not be saved.");
  }

  return { paid: true, orderId: order.id };
}
