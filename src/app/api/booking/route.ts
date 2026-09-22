import { NextResponse } from "next/server";
import { emailField, emailLayout } from "@/lib/email-content";
import { getResendClient, leadsToEmail, resendFromEmail } from "@/lib/resend";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type BookingRequest = {
  name?: unknown;
  organisation?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  date?: unknown;
  time?: unknown;
  notes?: unknown;
};

function readText(value: unknown, maxLength = 1000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingRequest;
    const submission = {
      name: readText(body.name, 160),
      organisation: readText(body.organisation, 200),
      email: readText(body.email, 254),
      phone: readText(body.phone, 80),
      service: readText(body.service, 120),
      date: readText(body.date, 40),
      time: readText(body.time, 80),
      notes: readText(body.notes, 3000),
    };

    if (Object.values(submission).some((value) => !value)) {
      return NextResponse.json({ error: "Please complete every required field." }, { status: 400 });
    }

    if (!submission.email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const fields = [
      emailField("Name", submission.name),
      emailField("Organisation", submission.organisation),
      emailField("Email", submission.email),
      emailField("Phone / WhatsApp", submission.phone),
      emailField("Service", submission.service),
      emailField("Preferred date", submission.date),
      emailField("Preferred time", submission.time),
      emailField("Discussion notes", submission.notes),
    ].join("");

    const supabase = getSupabaseAdmin();
    let storedId: string | undefined;

    if (supabase) {
      const { data: storedRequest, error: storageError } = await supabase
        .from("booking_requests")
        .insert({
          full_name: submission.name,
          organisation: submission.organisation,
          email: submission.email,
          phone: submission.phone,
          service: submission.service,
          preferred_date: submission.date,
          preferred_time: submission.time,
          notes: submission.notes,
        })
        .select("id")
        .single();

      if (storageError) {
        console.error("Supabase booking storage failed", storageError);
      } else {
        storedId = storedRequest.id;
      }
    }

    const { data, error } = await getResendClient().emails.send({
      from: resendFromEmail,
      to: leadsToEmail,
      replyTo: submission.email,
      subject: `New consultation request: ${submission.organisation}`,
      html: emailLayout("New consultation request", fields),
    });

    if (error) {
      console.error("Resend booking email failed", error);

      if (supabase && storedId) {
        await supabase
          .from("booking_requests")
          .update({ email_status: "failed", email_error: error.message })
          .eq("id", storedId);

        return NextResponse.json({ id: storedId, emailDelivered: false }, { status: 202 });
      }

      return NextResponse.json({ error: "We could not save your request. Please try again." }, { status: 502 });
    }

    if (supabase && storedId) {
      await supabase
        .from("booking_requests")
        .update({ email_status: "sent", resend_email_id: data?.id ?? null })
        .eq("id", storedId);
    }

    return NextResponse.json({ id: storedId ?? data?.id, emailDelivered: true });
  } catch (error) {
    console.error("Booking request failed", error);
    return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 503 });
  }
}
