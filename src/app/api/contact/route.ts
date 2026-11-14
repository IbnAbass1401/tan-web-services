import { NextResponse } from "next/server";

const oneLine = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

const block = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r\n/g, "\n").trim().slice(0, max) : "";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people never fill this hidden field. Bots do.
  if (oneLine(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = oneLine(body.name, 100);
  const email = oneLine(body.email, 200);
  const org = oneLine(body.org, 120);
  const service = oneLine(body.service, 100);
  const details = block(body.details, 2000);

  if (!name || !emailOk(email) || !service || !details) {
    return NextResponse.json(
      { error: "Please fill in every required field with a valid email." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "TAN Web Services <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: "Email is not set up yet. Please use WhatsApp instead." },
      { status: 503 }
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    org ? `Business or school: ${org}` : null,
    `Interested in: ${service}`,
    "",
    details,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name}: ${service}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return NextResponse.json(
        { error: "We could not send your message. Please try WhatsApp instead." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Resend request failed", err);
    return NextResponse.json(
      { error: "We could not send your message. Please try WhatsApp instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}