"use client"

import { useState, type FormEvent } from "react"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"

export default function CtaBlock() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background: "linear-gradient(135deg, #0D0B3E 0%, #2820b8 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1.5' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="text-white" style={{ fontSize: 40, marginBottom: 12 }}>
              Ready to see AugMend<br />in your clinic?
            </h2>
            <p
              className="font-body text-[17px] mb-10"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              We run structured pilots with specialty care practices. Most go live in under four weeks.
            </p>

            {submitted ? (
              <p className="font-display text-[22px] text-white">
                Thank you — we&rsquo;ll be in touch shortly.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col items-center gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="rounded-lg px-[18px] h-12 w-full font-body text-[15px] text-white placeholder:text-white/40 outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  />
                  <input
                    type="text"
                    name="org"
                    placeholder="Organization"
                    className="rounded-lg px-[18px] h-12 w-full font-body text-[15px] text-white placeholder:text-white/40 outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Work email"
                    required
                    className="rounded-lg px-[18px] h-12 w-full font-body text-[15px] text-white placeholder:text-white/40 outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  />
                </div>
                <Button variant="primary" size="large" type="submit">
                  Schedule a Conversation →
                </Button>
                <p
                  className="font-body text-[13px] mt-3"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  We&rsquo;ll be in touch within one business day. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
