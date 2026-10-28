import type { Metadata } from "next"
import Link from "next/link"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import NewsletterCallout from "@/components/sections/newsletter/NewsletterCallout"
import { BOOKING_URL } from "@/data/newsletter"

export const metadata: Metadata = {
  title: "Getting started",
  description:
    "What it takes to bring AugMend into your clinic: four stages from a first conversation to your first patient session.",
  openGraph: {
    title: "Getting started with AugMend",
    description: "Four stages from a first conversation to your first patient session.",
    type: "website",
  },
}

const STAGES = [
  {
    title: "See it for yourself",
    who: "Your clinical lead and the person who signs off",
    items: [
      "A 20-minute call about your workflow and the patients you see",
      "Try a session yourself, in the headset or on the web",
      "Review a sample report alongside the patient's own words",
    ],
  },
  {
    title: "Shape the pilot",
    who: "Clinical lead and practice manager, with our clinical team",
    items: [
      "Which patients take part, and who doesn't",
      "What success looks like, agreed in writing before you start",
      "Weekly volume, pilot length and which exercise modules to include",
      "Who reviews each report's risk section, and how quickly",
    ],
  },
  {
    title: "Approvals",
    who: "Compliance, IT and, for research sites, your IRB",
    items: [
      "Business associate agreement and services agreement",
      "Security review: we supply the questionnaire answers, data-flow diagram and subprocessor list",
      "AI governance review where your organization requires one",
      "For research, IRB approval, with our consent addendum template",
    ],
  },
  {
    title: "Go live",
    who: "Your coordinator and IT contact, with us on site or on a call",
    items: [
      "Two Meta Quest 3 headsets, set up with us",
      "Wi-Fi access for the headsets and a private, seated room",
      "Staff trained on fitting the headset and starting a session",
      "A test session on your own headset before the first patient",
    ],
  },
]

const FIT = [
  "Specialty outpatient care: pain medicine, PM&R, psychiatry, neuropsychology, TMS or ketamine",
  "A clinician who reviews every report before it's used in care",
  "A private room where a patient can sit for 30 minutes",
  "English-speaking patients (the language of the current version)",
]

export default function GettingStartedPage() {
  return (
    <>
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <Link href="/" className="hover:text-brand-indigo transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Getting started</span>
        </nav>
        <ScrollReveal>
          <SectionLabel>Getting started</SectionLabel>
          <h1 className="mt-4 max-w-3xl">From first conversation to first patient.</h1>
          <p className="mt-6 max-w-2xl text-[20px] leading-relaxed text-neutral-slate">
            AugMend is VR software for patient-reported data collection and self-management exercises,
            supporting in-clinic visits from intake to exit. Here is what bringing it into your clinic involves.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={BOOKING_URL} variant="primary" size="large">Book a 20-minute call</Button>
            <Button href="/platform/how-it-works" variant="secondary" size="large">How it works</Button>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="cream">
        <ol className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {STAGES.map((stage, i) => (
            <ScrollReveal key={stage.title}>
              <li className="h-full rounded-xl border border-neutral-border bg-surface-white p-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[32px] text-brand-indigo">{i + 1}</span>
                  <h2 className="text-[26px]">{stage.title}</h2>
                </div>
                <p className="mt-2 font-body text-sm font-bold uppercase tracking-[0.05em] text-neutral-slate">
                  {stage.who}
                </p>
                <ul className="mt-5 space-y-3">
                  {stage.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[16px] text-neutral-near-black">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </Section>

      <Section bg="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionLabel>Is it a fit?</SectionLabel>
            <h2 className="mt-4">AugMend works best when you have:</h2>
            <ul className="mt-6 space-y-4">
              {FIT.map((f) => (
                <li key={f} className="flex gap-3 text-[17px]">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-indigo" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-neutral-slate">
              Not sure? That&#39;s what the first call is for.{" "}
              <Link href={BOOKING_URL} className="text-brand-indigo underline underline-offset-4">Book 20 minutes</Link>{" "}
              or <Link href="/contact" className="text-brand-indigo underline underline-offset-4">send us a note</Link>.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <NewsletterCallout source="getting-started" />
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}
