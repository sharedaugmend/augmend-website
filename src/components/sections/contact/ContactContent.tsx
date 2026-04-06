"use client"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"

const inquiryTypes = [
  "General Inquiry",
  "Schedule a Demo",
  "Pilot Discussion",
  "Partnership",
  "Media/Press",
  "Other",
]

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Contact</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 max-w-3xl">
            Schedule a Conversation
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-slate">
            Not a sales call. A clinical conversation about your workflow.
          </p>
        </ScrollReveal>
      </Section>

      <Section bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <ScrollReveal>
                <div className="bg-surface-white border border-neutral-border rounded-xl p-12 text-center">
                  <h2 className="text-2xl">Thank you.</h2>
                  <p className="mt-4 text-neutral-slate">
                    We&#39;ll be in touch within one business day.
                  </p>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-body font-bold text-sm text-neutral-near-black mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full h-12 px-4 rounded-lg border border-neutral-border bg-surface-white font-body text-[15px] text-neutral-near-black focus:outline-none focus:border-brand-indigo transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body font-bold text-sm text-neutral-near-black mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full h-12 px-4 rounded-lg border border-neutral-border bg-surface-white font-body text-[15px] text-neutral-near-black focus:outline-none focus:border-brand-indigo transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block font-body font-bold text-sm text-neutral-near-black mb-2">
                        Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        className="w-full h-12 px-4 rounded-lg border border-neutral-border bg-surface-white font-body text-[15px] text-neutral-near-black focus:outline-none focus:border-brand-indigo transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block font-body font-bold text-sm text-neutral-near-black mb-2">
                        Role / Title
                      </label>
                      <input
                        id="role"
                        name="role"
                        type="text"
                        className="w-full h-12 px-4 rounded-lg border border-neutral-border bg-surface-white font-body text-[15px] text-neutral-near-black focus:outline-none focus:border-brand-indigo transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block font-body font-bold text-sm text-neutral-near-black mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      required
                      className="w-full h-12 px-4 rounded-lg border border-neutral-border bg-surface-white font-body text-[15px] text-neutral-near-black focus:outline-none focus:border-brand-indigo transition-colors appearance-none"
                    >
                      <option value="">Select an inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body font-bold text-sm text-neutral-near-black mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-border bg-surface-white font-body text-[15px] text-neutral-near-black leading-relaxed focus:outline-none focus:border-brand-indigo transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary">
                    Send
                  </Button>
                </form>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <ScrollReveal>
              <div className="space-y-6">
                <div>
                  <h3 className="font-body font-bold text-lg">Get in touch</h3>
                  <div className="mt-4 space-y-4">
                    <a
                      href="mailto:info@augmend.health"
                      className="flex items-center gap-3 font-body text-[15px] text-neutral-near-black hover:text-brand-indigo transition-colors"
                    >
                      <Mail className="h-5 w-5 text-brand-indigo shrink-0" strokeWidth={1.5} />
                      info@augmend.health
                    </a>
                    <a
                      href="tel:+16179490128"
                      className="flex items-center gap-3 font-body text-[15px] text-neutral-near-black hover:text-brand-indigo transition-colors"
                    >
                      <Phone className="h-5 w-5 text-brand-indigo shrink-0" strokeWidth={1.5} />
                      (617) 949-0128
                    </a>
                  </div>
                </div>

                <div className="border-t border-neutral-border pt-6">
                  <h4>What to expect</h4>
                  <p className="mt-2 text-neutral-slate text-[15px]">
                    A clinical conversation about your workflow — not a sales pitch. Our team includes clinicians, health economists, and engineers who help adapt the platform to your specialty.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  )
}
