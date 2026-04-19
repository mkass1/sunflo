import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, vehicle, service, message } = body;

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please call us at (954) 235-6882." },
      { status: 503 }
    );
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL ?? "sunflodetailing@gmail.com";

  const emailText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Vehicle: ${vehicle || "—"}`,
    `Service: ${service || "—"}`,
    `\nMessage:\n${message || "—"}`,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: "Sunflo Contact Form <noreply@sunflodetailing.com>",
    to: toEmail,
    replyTo: email,
    subject: `New Inquiry — ${name}${vehicle ? ` / ${vehicle}` : ""}`,
    text: emailText,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please call us at (954) 235-6882." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
