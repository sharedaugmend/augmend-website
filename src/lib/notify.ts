/**
 * Posts a plain-text alert to Slack through an incoming webhook (server-only).
 * Env: SLACK_LEADS_WEBHOOK_URL — create one for a private #website-leads channel.
 */

export function slackConfigured() {
  return Boolean(process.env.SLACK_LEADS_WEBHOOK_URL)
}

export async function notifySlack(text: string) {
  const url = process.env.SLACK_LEADS_WEBHOOK_URL
  if (!url) throw new Error("Slack webhook is not configured")
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`Slack webhook failed: ${res.status}`)
}

/** Trim, cap length and strip Slack control characters from user input. */
export function clean(value: unknown, max = 500): string {
  if (typeof value !== "string") return ""
  return value.replace(/[<>]/g, "").trim().slice(0, max)
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 254
}
