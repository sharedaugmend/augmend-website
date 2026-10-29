import { NextResponse, type NextRequest } from "next/server"
import { beehiivConfigured, createSubscription } from "@/lib/beehiiv"
import { clean, isEmail } from "@/lib/notify"
import { SUBSCRIBER_COOKIE, cookieOptions, signEmail } from "@/lib/signing"
import { ROLE_OPTIONS } from "@/data/newsletter"

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 })

  // Honeypot: real people never fill this hidden field.
  if (clean(body.website)) return NextResponse.json({ ok: true })

  const email = clean(body.email, 254).toLowerCase()
  const firstName = clean(body.firstName, 80)
  const role = ROLE_OPTIONS.includes(body.role) ? body.role : ""
  const organization = clean(body.organization, 160)
  const source = clean(body.source, 80) || "website"

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  if (!beehiivConfigured()) {
    return NextResponse.json(
      { error: "Sign-up isn't available right now. Please email info@augmend.health." },
      { status: 503 },
    )
  }

  try {
    await createSubscription({
      email,
      referringSite: request.headers.get("referer") ?? undefined,
      source,
      customFields: [
        { name: "First Name", value: firstName },
        { name: "Role", value: role },
        { name: "Organization", value: organization },
      ],
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email info@augmend.health." },
      { status: 502 },
    )
  }

  const res = NextResponse.json({ ok: true })
  try {
    res.cookies.set(SUBSCRIBER_COOKIE, signEmail(email), cookieOptions)
  } catch (err) {
    // Missing signing secret only disables the follow-up survey; the sign-up still counts.
    console.error(err)
  }
  return res
}
