import { NextResponse } from "next/server";
import { emailField, emailLayout } from "@/lib/email-content";
import { getResendClient, leadsToEmail, resendFromEmail } from "@/lib/resend";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type ReviewRequest = {
  service?: unknown;
  goal?: unknown;
  timeline?: unknown;
  stage?: unknown;
  name?: unknown;
  organisation?: unknown;
  email?: unknown;
  phone?: unknown;
};

function readText(value: unknown, maxLength = 1000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReviewRequest;
    const submission = {
      service: readText(body.service, 120),
      goal: readText(body.goal, 3000),
      timeline: readText(body.timeline, 120),
      stage: readText(body.stage, 160),
      name: readText(body.name, 160),
      organisation: readText(body.organisation, 200),
      email: readText(body.email, 254),
      phone: readText(body.phone, 80),
    };

    if (Object.values(submission).some((value) => !value)) {
      return NextResponse.json({ error: "Please complete every required field." }, { status: 400 });
    }

    if (!submission.email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const fields = [
      emailField("Service", submission.service),
      emailField("Goal", submission.goal),
      emailField("Timeline", submission.timeline),
      emailField("Business stage", submission.stage),
      emailField("Name", submission.name),
      emailField("Organisation", submission.organisation),
      emailField("Email", submission.email),
      emailField("Phone / WhatsApp", submission.phone),
    ].join("");

    const supabase = getSupabaseAdmin();
    let storedId: string | undefined;

    if (supabase) {
      const { data: storedRequest, error: storageError } = await supabase
        .from("review_requests")
        .insert({
          service: submission.service,
          goal: submission.goal,
          timeline: submission.timeline,
          business_stage: submission.stage,
          full_name: submission.name,
          organisation: submission.organisation,
          email: submission.email,
          phone: submission.phone,
        })
        .select("id")
        .single();

      if (storageError) {
        console.error("Supabase review storage failed", storageError);
      } else {
        storedId = storedRequest.id;
      }
    }

    const { data, error } = await getResendClient().emails.send({
      from: resendFromEmail,
      to: leadsToEmail,
      replyTo: submission.email,
      subject: `New free review request: ${submission.organisation}`,
      html: emailLayout("New free review request", fields),
    });

    if (error) {
      console.error("Resend review email failed", error);

      if (supabase && storedId) {
        await supabase
          .from("review_requests")
          .update({ email_status: "failed", email_error: error.message })
          .eq("id", storedId);

        return NextResponse.json({ id: storedId, emailDelivered: false }, { status: 202 });
      }

      return NextResponse.json({ error: "We could not save your request. Please try again." }, { status: 502 });
    }

    if (supabase && storedId) {
      await supabase
        .from("review_requests")
        .update({ email_status: "sent", resend_email_id: data?.id ?? null })
        .eq("id", storedId);
    }

    return NextResponse.json({ id: storedId ?? data?.id, emailDelivered: true });
  } catch (error) {
    console.error("Review request failed", error);
    return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 503 });
  }
}
