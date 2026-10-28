"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/Button"
import { NEWSLETTER_NAME, ROLE_OPTIONS } from "@/data/newsletter"

interface NewsletterSignupProps {
  /** "dark" for deep-space backgrounds (footer), "light" for cream/white sections. */
  tone?: "light" | "dark"
  /** Compact = email + role only, laid out in one row (footer). */
  compact?: boolean
  /** Where the sign-up happened, for the Slack alert (e.g. "footer", "blog:<slug>"). */
  source: string
  className?: string
}

export default function NewsletterSignup({
  tone = "light",
  compact = false,
  source,
  className = "",
}: NewsletterSignupProps) {
  const router = useRouter()
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle")
  const [error, setError] = useState("")

  const dark = tone === "dark"
  const field = `w-full h-12 px-4 rounded-lg border font-body text-[15px] focus:outline-none transition-colors ${
    dark
      ? "border-white/15 bg-white/[0.06] text-white placeholder:text-white/40 focus:border-accent-lime"
      : "border-neutral-border bg-surface-white text-neutral-near-black placeholder:text-neutral-slate/70 focus:border-brand-indigo"
  }`
  const label = `block font-body font-bold text-sm mb-2 ${dark ? "text-white/80" : "text-neutral-near-black"}`

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setError("")
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || "Something went wrong.")
      form.reset()
      setStatus("idle")
      router.push("/newsletter/welcome")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  const honeypot = (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  )

  const roleSelect = (id: string) => (
    <select id={id} name="role" required defaultValue="" className={`${field} appearance-none`}>
      <option value="" disabled>
        {compact ? "Your role" : "Select your role"}
      </option>
      {ROLE_OPTIONS.map((r) => (
        <option key={r} value={r} className="text-neutral-near-black">
          {r}
        </option>
      ))}
    </select>
  )

  const errorLine =
    status === "error" ? (
      <p role="alert" className={`mt-3 font-body text-sm ${dark ? "text-accent-orange" : "text-semantic-danger"}`}>
        {error}
      </p>
    ) : null

  const privacy = (
    <p className={`mt-3 font-body text-xs ${dark ? "text-white/45" : "text-neutral-slate"}`}>
      One email a month. Unsubscribe in one click. We never share your details.
    </p>
  )

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className={`relative ${className}`} aria-label={`Subscribe to ${NEWSLETTER_NAME}`}>
        {honeypot}
        <div className="flex flex-col gap-3 md:flex-row">
          <label htmlFor={`nl-email-${source}`} className="sr-only">Email</label>
          <input
            id={`nl-email-${source}`}
            name="email"
            type="email"
            required
            placeholder="Work email"
            autoComplete="email"
            className={`${field} md:flex-[1.4]`}
          />
          <label htmlFor={`nl-role-${source}`} className="sr-only">Role</label>
          <div className="md:flex-1">{roleSelect(`nl-role-${source}`)}</div>
          <Button type="submit" variant={dark ? "lime" : "primary"} disabled={status === "sending"} className="shrink-0">
            {status === "sending" ? "Subscribing…" : "Subscribe"}
          </Button>
        </div>
        {errorLine}
        {privacy}
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`relative space-y-5 ${className}`} aria-label={`Subscribe to ${NEWSLETTER_NAME}`}>
      {honeypot}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor={`nl-first-${source}`} className={label}>First name</label>
          <input id={`nl-first-${source}`} name="firstName" type="text" autoComplete="given-name" className={field} />
        </div>
        <div>
          <label htmlFor={`nl-email-${source}`} className={label}>Work email</label>
          <input id={`nl-email-${source}`} name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor={`nl-role-${source}`} className={label}>Role</label>
          {roleSelect(`nl-role-${source}`)}
        </div>
        <div>
          <label htmlFor={`nl-org-${source}`} className={label}>Organization</label>
          <input id={`nl-org-${source}`} name="organization" type="text" autoComplete="organization" className={field} />
        </div>
      </div>
      <div>
        <Button type="submit" variant={dark ? "lime" : "primary"} disabled={status === "sending"} className="w-full md:w-auto">
          {status === "sending" ? "Subscribing…" : `Subscribe to ${NEWSLETTER_NAME}`}
        </Button>
        {errorLine}
        {privacy}
      </div>
    </form>
  )
}
