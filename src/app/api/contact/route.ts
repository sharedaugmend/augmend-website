import { NextResponse, type NextRequest } from "next/server"
import { clean, isEmail, notifySlack, slackConfigured } from "@/lib/notify"

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 })

  // Honeypot: real people never fill this hidden field.
  if (clean(body.website)) return NextResponse.json({ ok: true })

  const name = clean(body.name, 120)
  const email = clean(body.email, 254)
  const organization = clean(body.organization, 160)
  const role = clean(body.role, 120)
  const inquiry = clean(body.inquiry, 60)
  const message = clean(body.message, 4000)

  if (!name || !isEmail(email) || !message) {
    return NextResponse.json(
      { error: "Please add your name, a valid email and a message." },
      { status: 400 },
    )
  }

  if (!slackConfigured()) {
    return NextResponse.json(
      { error: "Our form is offline. Please email info@augmend.health." },
      { status: 503 },
    )
  }

  try {
    await notifySlack(
      [
        `New website inquiry (${inquiry || "General"})`,
        `${name} <${email}>`,
        [role, organization].filter(Boolean).join(", "),
        "",
        message,
      ]
        .filter((l) => l !== undefined)
        .join("\n"),
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Your message didn't go through. Please email info@augmend.health." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
