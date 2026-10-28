"use client"

import { useState } from "react"
import Link from "next/link"
import Button from "@/components/ui/Button"
import SectionLabel from "@/components/ui/SectionLabel"
import {
  BOOKING_URL,
  NEWSLETTER_NAME,
  PROBLEM_OPTIONS,
  SPECIALTY_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/data/newsletter"

type Question = { name: "specialty" | "problem" | "timeline"; legend: string; options: string[] }

const QUESTIONS: Question[] = [
  { name: "specialty", legend: "What's your specialty?", options: SPECIALTY_OPTIONS },
  { name: "problem", legend: "Which of these costs your clinic the most time?", options: PROBLEM_OPTIONS },
  { name: "timeline", legend: "Are you looking at new intake or patient-data tools?", options: TIMELINE_OPTIONS },
]

export default function WelcomeSurvey() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [warm, setWarm] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const notes = new FormData(e.currentTarget).get("notes")
    try {
      const res = await fetch("/api/newsletter/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, notes }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || "Something went wrong.")
      setWarm(Boolean(json.warm))
      setStatus("done")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  return (
    <div className="mx-auto max-w-[720px]">
      <SectionLabel>You&#39;re subscribed</SectionLabel>
      <h1 className="mt-4 text-[40px] md:text-[48px]">Welcome to {NEWSLETTER_NAME}.</h1>
      <p className="mt-4 text-[18px] text-neutral-slate">
        Check your inbox for a welcome email. The next issue arrives at the end of the month.
      </p>

      {status === "done" ? (
        <div className="mt-10 rounded-2xl border border-neutral-border bg-surface-white p-8 md:p-10">
          <h2 className="text-[28px]">Thank you. That helps us write for you.</h2>
          {warm ? (
            <>
              <p className="mt-3 text-neutral-slate">
                Since you&#39;re looking now, here&#39;s what getting started with AugMend involves, or book
                20 minutes with Sacha directly.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={BOOKING_URL} variant="primary">Book a 20-minute call</Button>
                <Button href="/getting-started" variant="secondary">How getting started works</Button>
              </div>
            </>
          ) : (
            <p className="mt-3 text-neutral-slate">
              In the meantime, read <Link href="/blog" className="text-brand-indigo underline underline-offset-4">our latest writing</Link>.
            </p>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-neutral-border bg-surface-white p-8 md:p-10">
          <h2 className="text-[26px]">Three quick questions (optional)</h2>
          <p className="mt-2 text-[15px] text-neutral-slate">
            So each issue is useful to you. Takes about 20 seconds.
          </p>

          {QUESTIONS.map((q) => (
            <fieldset key={q.name} className="mt-8">
              <legend className="font-body font-bold text-[17px] text-neutral-near-black">{q.legend}</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {q.options.map((opt) => {
                  const selected = answers[q.name] === opt
                  return (
                    <label
                      key={opt}
                      className={`cursor-pointer rounded-lg border px-4 py-2.5 font-body text-[15px] transition-colors ${
                        selected
                          ? "border-brand-indigo bg-brand-indigo text-white"
                          : "border-neutral-border bg-surface-warm-white text-neutral-near-black hover:border-brand-indigo"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.name}
                        value={opt}
                        checked={selected}
                        onChange={() => setAnswers((a) => ({ ...a, [q.name]: opt }))}
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  )
                })}
              </div>
            </fieldset>
          ))}

          <div className="mt-8">
            <label htmlFor="notes" className="block font-body font-bold text-[17px] text-neutral-near-black">
              Anything you&#39;d like us to write about?
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              maxLength={600}
              className="mt-3 w-full rounded-lg border border-neutral-border bg-surface-warm-white px-4 py-3 font-body text-[15px] focus:border-brand-indigo focus:outline-none resize-none"
            />
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button type="submit" variant="primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send answers"}
            </Button>
            <Link href="/blog" className="font-body text-sm text-neutral-slate hover:text-brand-indigo">
              Skip for now
            </Link>
          </div>
          {status === "error" && (
            <p role="alert" className="mt-4 font-body text-sm text-semantic-danger">{error}</p>
          )}
        </form>
      )}
    </div>
  )
}
