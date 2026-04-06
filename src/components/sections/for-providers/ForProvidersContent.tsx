"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const reportFeatures = [
  {
    title: "Evidence-linked claims",
    body: "Every finding traces to the patient\u2019s own words. Open the transcript or audio for any flagged item.",
  },
  {
    title: "Three report tiers",
    body: "Quick SOAP for check-ins. Detailed Progress for standard visits. Expansive Consult for intake and re-authorization. Same data, different depth. You choose per encounter.",
  },
  {
    title: "Cross-session intelligence",
    body: "The system tracks what\u2019s been covered, what\u2019s changed, and what you directed, including between-visit check-ins and exercise engagement. Follow-ups are 10\u201315 minutes, not full re-assessments. Patients feel known.",
  },
  {
    title: "Confidence markers",
    body: "Uncertain items are flagged. Patient quotes are available for sensitive claims. Trust confident summaries. Verify flagged ones.",
  },
]

export default function ForProvidersContent() {
  return (
    <>
      {/* Hero */}
      <Section bg="cream" padding="large" className="pt-32!" dots>
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">For Providers</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>For Clinicians</SectionLabel>
          <h1 className="mt-4 max-w-3xl">
            Know your patient before the visit begins.
          </h1>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            A structured clinical picture: risk factors, psychosocial context, functional status, behavioral health indicators, reviewed in under a minute. Before the first question is asked. Updated between visits. Building with every session.
          </p>
        </ScrollReveal>
      </Section>

      {/* What You Receive */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>What You Receive</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            A report that reads like a thorough intake, without the 45 minutes.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: mock report */}
          <ScrollReveal>
            <div className="bg-surface-white border border-neutral-border rounded-xl p-8 shadow-sm">
              <div className="space-y-4">
                <div>
                  <p className="font-body font-bold text-sm uppercase tracking-[0.05em] text-neutral-slate">Page 1</p>
                  <p className="mt-1 text-neutral-slate">
                    Patient summary (1–3 sentences), risk flags, score trends (last 2–3 points + delta), flagged items
                  </p>
                </div>
                <div className="border-t border-neutral-border pt-4">
                  <p className="font-body font-bold text-sm uppercase tracking-[0.05em] text-neutral-slate">Page 2+</p>
                  <p className="mt-1 text-neutral-slate">
                    Per-domain findings, medication table, standardized scores, patient quotes for sensitive items
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: feature callouts */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {reportFeatures.map((feature) => (
              <motion.div key={feature.title} variants={staggerChild}>
                <h4>{feature.title}</h4>
                <p className="mt-2 text-neutral-slate">{feature.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* What Changes */}
      <Section bg="warm-white">
        <ScrollReveal>
          <SectionLabel>What Changes</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Your time shifts from collecting to deciding.
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h3 className="font-body font-bold text-[22px]">Without AugMend</h3>
              <p className="mt-4 text-neutral-slate">
                Current intakes yield partial history. Documentation reflects what the provider had time to ask. Complex patients are under-coded. Follow-ups restart the clock.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full border-l-2 border-l-brand-indigo">
              <h3 className="font-body font-bold text-[22px]">With AugMend</h3>
              <p className="mt-4 text-neutral-slate">
                A comprehensive clinical picture collected before you walk in. Between-visit check-ins and exercises keep the record current. Documentation reflects what the patient actually carries. Follow-ups build on what&#39;s already known.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <ScrollReveal>
          <blockquote className="mt-16 max-w-2xl mx-auto text-center">
            <p className="font-display italic text-xl md:text-2xl text-neutral-near-black leading-relaxed">
              &ldquo;I really just want to be like a curious med student to gather as much information as possible and then be able to report back.&rdquo;
            </p>
            <cite className="mt-4 block font-body text-sm not-italic text-neutral-slate">
              - Psychiatrist, Montefiore Hospital, on what he needs from CAS before each visit
            </cite>
          </blockquote>
        </ScrollReveal>
      </Section>

      {/* CTA Bar with blurred background */}
      <section className="relative overflow-hidden bg-brand-indigo py-12 md:py-16 xl:py-24">
        <Image src="/images/illustrations/swirling-phrases-dots.png" alt="" fill className="absolute inset-0 object-cover z-0 opacity-30 blur-[4px] pointer-events-none" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
          <ScrollReveal>
            <h2 className="text-white">See what the clinical report looks like.</h2>
            <div className="mt-8 flex justify-center">
              <Button variant="ghost" href="/contact">Request a Sample Report</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
