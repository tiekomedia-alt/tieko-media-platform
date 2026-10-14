import "server-only";
import { escapeHtml } from "@/lib/email-content";
import { getSalesOffer } from "@/lib/offers";
import { getResendClient, resendFromEmail } from "@/lib/resend";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type PaidOrder = {
  id: string;
  offer_slug: string;
  offer_name: string;
  full_name: string;
  email: string;
  reference: string;
  fulfillment_status: string;
};

function uiUxDeliveryEmail(order: PaidOrder, accessUrl: string) {
  const name = escapeHtml(order.full_name);
  const safeUrl = escapeHtml(accessUrl);
  const reference = escapeHtml(order.reference);

  return `
    <div style="background:#f4f0e7;padding:32px;font-family:Arial,sans-serif;color:#111">
      <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #d8d1c5">
        <div style="background:#252321;color:#fff;padding:28px">
          <p style="margin:0 0 8px;color:#ef7779;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px">Tieko Store / Access confirmed</p>
          <h1 style="margin:0;font-size:30px">Your UI/UX tutorial is ready.</h1>
        </div>
        <div style="padding:28px;font-size:15px;line-height:1.7">
          <p>Hello ${name},</p>
          <p>Flutterwave has confirmed your payment for the Six-Week UI/UX Project Tutorial. Use the button below to open the private learning folder.</p>
          <p style="margin:28px 0"><a href="${safeUrl}" style="display:inline-block;background:#e5252a;color:#fff;padding:14px 20px;text-decoration:none;font-weight:700">Open the tutorial folder</a></p>
          <p><strong>Access conditions:</strong> Your purchase is for individual use. Do not forward, reproduce, resell or redistribute the folder or its contents.</p>
          <p>Save this email. If the button does not open, reply to this message with payment reference <strong>${reference}</strong>.</p>
        </div>
      </div>
    </div>
  `;
}

export async function fulfillPaidOrder(order: PaidOrder) {
  const offer = getSalesOffer(order.offer_slug);

  if (!offer || offer.fulfillment === "manual" || order.fulfillment_status === "fulfilled") {
    return { fulfilled: offer?.fulfillment === "manual" || order.fulfillment_status === "fulfilled" };
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) throw new Error("Order storage is not configured.");

  const { data: claim, error: claimError } = await supabase
    .from("orders")
    .update({ fulfillment_status: "sending", fulfillment_error: null, updated_at: new Date().toISOString() })
    .eq("id", order.id)
    .in("fulfillment_status", ["pending", "failed"])
    .select("id")
    .maybeSingle();

  if (claimError) throw new Error("Order fulfilment could not be claimed.");
  if (!claim) return { fulfilled: false };

  try {
    if (offer.fulfillment !== "ui-ux-drive-access") {
      throw new Error("The digital fulfilment method is not supported.");
    }

    const accessUrl = process.env.UIUX_TUTORIAL_DRIVE_URL;
    if (!accessUrl || !accessUrl.startsWith("https://drive.google.com/")) {
      throw new Error("The tutorial access destination is not configured.");
    }

    const { data, error } = await getResendClient().emails.send({
      from: resendFromEmail,
      to: order.email,
      replyTo: "info@tiekomedia.com",
      subject: "Your Six-Week UI/UX Project Tutorial access",
      html: uiUxDeliveryEmail(order, accessUrl),
    });

    if (error) throw new Error(error.message);

    await supabase
      .from("orders")
      .update({
        fulfillment_status: "fulfilled",
        fulfillment_email_id: data?.id ?? null,
        fulfilled_at: new Date().toISOString(),
        fulfillment_error: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", order.id);

    return { fulfilled: true };
  } catch (error) {
    const message = error instanceof Error ? error.message.slice(0, 500) : "Digital delivery failed.";
    await supabase
      .from("orders")
      .update({ fulfillment_status: "failed", fulfillment_error: message, updated_at: new Date().toISOString() })
      .eq("id", order.id);
    console.error("Paid-order fulfilment failed", { orderId: order.id, message });
    return { fulfilled: false };
  }
}
