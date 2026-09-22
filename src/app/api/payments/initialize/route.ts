import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { initializeFlutterwavePayment } from "@/lib/flutterwave";
import { getSalesOffer } from "@/lib/offers";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type CheckoutRequest = {
  offerSlug?: unknown;
  fullName?: unknown;
  organisation?: unknown;
  email?: unknown;
  phone?: unknown;
  projectGoal?: unknown;
};

function readText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutRequest;
    const customer = {
      offerSlug: readText(body.offerSlug, 100),
      fullName: readText(body.fullName, 160),
      organisation: readText(body.organisation, 200),
      email: readText(body.email, 254).toLowerCase(),
      phone: readText(body.phone, 80),
      projectGoal: readText(body.projectGoal, 2000),
    };

    if (Object.values(customer).some((value) => !value) || !customer.email.includes("@")) {
      return NextResponse.json({ error: "Please complete every field correctly." }, { status: 400 });
    }

    const offer = getSalesOffer(customer.offerSlug);

    if (!offer || !offer.amountSubunit) {
      return NextResponse.json(
        { error: "This offer is not available for checkout yet." },
        { status: 503 },
      );
    }

    const supabase = getSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json({ error: "Order storage is not configured." }, { status: 503 });
    }

    const reference = `TM-${Date.now()}-${randomUUID().replaceAll("-", "").slice(0, 12)}`;
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        reference,
        offer_slug: offer.slug,
        offer_name: offer.name,
        amount_subunit: offer.amountSubunit,
        currency: offer.currency,
        full_name: customer.fullName,
        organisation: customer.organisation,
        email: customer.email,
        phone: customer.phone,
        project_goal: customer.projectGoal,
      })
      .select("id")
      .single();

    if (orderError || !order) {
      console.error("Order storage failed", orderError);
      return NextResponse.json({ error: "We could not create your order." }, { status: 502 });
    }

    const redirectUrl = new URL("/api/payments/verify", request.url).toString();
    const transaction = await initializeFlutterwavePayment({
      email: customer.email,
      fullName: customer.fullName,
      phone: customer.phone,
      amountSubunit: offer.amountSubunit,
      currency: offer.currency,
      reference,
      redirectUrl,
      orderId: order.id,
      offerSlug: offer.slug,
      offerName: offer.name,
    });

    await supabase
      .from("orders")
      .update({ status: "processing", updated_at: new Date().toISOString() })
      .eq("id", order.id);

    return NextResponse.json({ authorizationUrl: transaction.link, reference });
  } catch (error) {
    console.error("Payment initialization failed", error);
    return NextResponse.json(
      { error: "Secure checkout is temporarily unavailable." },
      { status: 503 },
    );
  }
}
