import { NextResponse } from "next/server";
import { contact } from "@/data/contact";

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, vehicle, service, message, website } = body;

  if (website) return NextResponse.json({ ok: true }); // honeypot — silently accept but discard

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: `Contact form is not configured yet. Please call us at ${contact.phone}.` },
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
      { error: `Failed to send your message. Please call us at ${contact.phone}.` },
      { status: 500 }
    );
  }

  const firstName = name.trim().split(" ")[0];
  resend.emails.send({
    from: "Sunflo Detailing <noreply@sunflodetailing.com>",
    to: email,
    subject: "We got your message — Sunflo Detailing",
    text: `Hi ${firstName},\n\nWe got your message and we're on it. Expect to hear from us within 24 hours to discuss your project.\n\nGot questions in the meantime? Call or text us directly at ${contact.phone}.\n\n— Jason & the Sunflo Detailing team`,
  }).catch((err) => console.error("Auto-reply error:", err));

  return NextResponse.json({ ok: true });
}
