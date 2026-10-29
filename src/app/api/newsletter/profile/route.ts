import { NextResponse, type NextRequest } from "next/server"
import { beehiivConfigured, updateSubscriptionFields } from "@/lib/beehiiv"
import { clean } from "@/lib/notify"
import { SUBSCRIBER_COOKIE, verifyToken } from "@/lib/signing"
import {
  PROBLEM_OPTIONS,
  SPECIALTY_OPTIONS,
  TIMELINE_OPTIONS,
  WARM_TIMELINES,
} from "@/data/newsletter"

function pick(value: unknown, options: string[]) {
  return typeof value === "string" && options.includes(value) ? value : ""
}

export async function POST(request: NextRequest) {
  let email: string | null = null
  try {
    email = verifyToken(request.cookies.get(SUBSCRIBER_COOKIE)?.value)
  } catch (err) {
    console.error(err)
  }
  if (!email) {
    return NextResponse.json(
      { error: "This link has expired. Thanks for subscribing — you're all set." },
      { status: 401 },
    )
  }

  const body = await request.json().catch(() => ({}))
  const specialty = pick(body.specialty, SPECIALTY_OPTIONS)
  const problem = pick(body.problem, PROBLEM_OPTIONS)
  const timeline = pick(body.timeline, TIMELINE_OPTIONS)
  const notes = clean(body.notes, 600)

  if (!specialty && !problem && !timeline && !notes) {
    return NextResponse.json({ error: "Please answer at least one question." }, { status: 400 })
  }

  if (!beehiivConfigured()) {
    return NextResponse.json({ error: "Thanks — you're subscribed. The survey is offline right now." }, { status: 503 })
  }

  try {
    await updateSubscriptionFields(email, [
      { name: "Specialty", value: specialty },
      { name: "Biggest Problem", value: problem },
      { name: "Timeline", value: timeline },
      { name: "Survey Notes", value: notes },
    ])
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Your answers didn't save. You're still subscribed." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true, warm: WARM_TIMELINES.has(timeline) })
}
