import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  const { service, email, message } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // No key configured yet — log and succeed so the form works in dev.
  if (!resend) {
    console.info("[contact] (no RESEND_API_KEY)", { service, email, message });
    return NextResponse.json({ ok: true, dev: true });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "hello@revdev.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New contact${service ? ` — ${service}` : ""}`,
    text: `Service: ${service ?? "-"}\nEmail: ${email}\n\n${message ?? ""}`,
  });

  if (error) {
    console.error("[contact] resend error", error);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
