/**
 * Minimal beehiiv API v2 client (server-only).
 * Env: BEEHIIV_API_KEY (required). BEEHIIV_PUBLICATION_ID overrides the
 * Mending Healthcare publication ID below (not a secret).
 * Custom fields used here must exist in beehiiv first: "First Name", "Role",
 * "Organization", "Specialty", "Biggest Problem", "Timeline", "Survey Notes".
 */

const BASE = process.env.BEEHIIV_API_BASE || "https://api.beehiiv.com/v2"

type CustomField = { name: string; value: string }

function config() {
  const key = process.env.BEEHIIV_API_KEY
  const pub = process.env.BEEHIIV_PUBLICATION_ID || "pub_1048bce6-5498-4203-a0c0-1e9b51c145c5"
  if (!key || !pub) return null
  return { key, pub }
}

export function beehiivConfigured() {
  return config() !== null
}

async function call(path: string, method: "POST" | "PUT", body: unknown) {
  const cfg = config()
  if (!cfg) throw new Error("beehiiv is not configured")
  const res = await fetch(`${BASE}/publications/${cfg.pub}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${cfg.key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  })
  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`beehiiv ${method} ${path} failed: ${res.status} ${text.slice(0, 300)}`)
  }
  return res.json().catch(() => ({}))
}

export async function createSubscription(input: {
  email: string
  customFields: CustomField[]
  referringSite?: string
  /** Where on the site they signed up (footer, newsletter-page, blog:<slug>…). */
  source?: string
}) {
  return call("/subscriptions", "POST", {
    email: input.email,
    reactivate_existing: false,
    send_welcome_email: true,
    utm_source: "augmend.health",
    utm_medium: "website",
    utm_campaign: input.source,
    referring_site: input.referringSite,
    custom_fields: input.customFields.filter((f) => f.value),
  })
}

export async function updateSubscriptionFields(email: string, customFields: CustomField[]) {
  return call(`/subscriptions/by_email/${encodeURIComponent(email)}`, "PUT", {
    custom_fields: customFields.filter((f) => f.value),
  })
}
