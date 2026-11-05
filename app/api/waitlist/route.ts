import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const interest = typeof body?.interest === "string" ? body.interest.slice(0, 80) : "";

  // Honeypot: bots fill the hidden field, people don't.
  if (body?.company_website) return NextResponse.json({ ok: true });

  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const entry = { email, interest, createdAt: new Date().toISOString() };
  const webhook = process.env.WAITLIST_WEBHOOK_URL;

  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[waitlist] WAITLIST_WEBHOOK_URL not set; sign-up not stored:", entry);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "The waitlist isn't open yet. Please try again soon." }, { status: 503 });
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  }).catch(() => null);

  if (!res?.ok) {
    return NextResponse.json({ error: "We couldn't add you right now. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
