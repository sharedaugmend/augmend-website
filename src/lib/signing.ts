/**
 * Signs the subscriber's email into a short-lived httpOnly cookie so the
 * welcome survey can only update the person who just signed up.
 * Env: NEWSLETTER_SIGNING_SECRET (any long random string).
 */
import { createHmac, timingSafeEqual } from "node:crypto"

export const SUBSCRIBER_COOKIE = "am_nl_sub"
const MAX_AGE_SECONDS = 60 * 60 * 24 // one day to answer the survey

function secret() {
  const s = process.env.NEWSLETTER_SIGNING_SECRET
  if (!s) throw new Error("NEWSLETTER_SIGNING_SECRET is not set")
  return s
}

export function signEmail(email: string) {
  const payload = Buffer.from(JSON.stringify({ e: email, t: Date.now() })).toString("base64url")
  const sig = createHmac("sha256", secret()).update(payload).digest("base64url")
  return `${payload}.${sig}`
}

export function verifyToken(token: string | undefined): string | null {
  if (!token) return null
  const [payload, sig] = token.split(".")
  if (!payload || !sig) return null
  const expected = createHmac("sha256", secret()).update(payload).digest("base64url")
  const a = Buffer.from(sig)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null
  try {
    const { e, t } = JSON.parse(Buffer.from(payload, "base64url").toString())
    if (typeof e !== "string" || Date.now() - t > MAX_AGE_SECONDS * 1000) return null
    return e
  } catch {
    return null
  }
}

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: MAX_AGE_SECONDS,
}
