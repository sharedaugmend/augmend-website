"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"

const steps = [
  {
    number: "01",
    title: "Before the visit",
    body: "The patient completes a self-guided conversational AI session on phone, tablet or in VR. Biopsychosocial data is captured across clinical domains configured by your clinic. No provider time consumed. 15\u201345 minutes. The AI uses adaptive questioning, selecting relevant follow-up inquiries based on individual responses rather than administering all questions to all patients.",
    annotation: "\u201CLast time you mentioned trouble sleeping. Has that changed?\u201D The system remembers. Every session builds on the last keeping providers informed.",
  },
  {
    number: "02",
    title: "During the visit",
    body: "The provider reviews a structured clinical summary \u2014 risk flags, score trends, psychosocial context, and the patient\u2019s own words \u2014 in under a minute. The appointment starts with decisions, not history-taking.",
    annotation: "Pre-encounter brief: status, risks, score trends, flagged items. One page. Under a minute.",
  },
  {
    number: "03",
    title: "After the visit",
    body: "Two structured outputs from every session: a clinical report in the format the encounter calls for, and billing documentation mapped to the CPT codes the care actually delivered.",
    annotation: "Revenue that was invisible before is recovered from the first session.",
  },
  {
    number: "04",
    title: "Between visits",
    body: "Patients complete interval check-ins, progress assessments, and provider-prescribed exercises, personalized to what they disclosed. The system tracks what changed and presents a summary before the next encounter.",
    annotation: "Intake. Progress. Outcomes. Exit. Not a single snapshot \u2014 a continuous clinical relationship.",
  },
]

function MobileSteps() {
  return (
    <div className="lg:hidden space-y-8">
      {steps.map((step, i) => (
        <ScrollReveal key={step.number} delay={i * 0.08}>
          <div className="bg-surface-white border border-neutral-border rounded-xl p-8">
            <span className="font-display font-bold text-4xl text-brand-indigo/20">{step.number}</span>
            <h3 className="mt-2 font-body font-bold text-lg">{step.title}</h3>
            <p className="mt-3 text-neutral-slate">{step.body}</p>
            <p className="mt-4 font-body text-[15px] italic text-brand-indigo/70">{step.annotation}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

function DesktopScrollLocked() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start end", "end start"] })

  const step0Opacity = useTransform(scrollYProgress, [0.05, 0.1, 0.25, 0.32], [0, 1, 1, 0])
  const step1Opacity = useTransform(scrollYProgress, [0.28, 0.35, 0.48, 0.55], [0, 1, 1, 0])
  const step2Opacity = useTransform(scrollYProgress, [0.50, 0.57, 0.70, 0.77], [0, 1, 1, 0])
  const step3Opacity = useTransform(scrollYProgress, [0.72, 0.79, 0.92, 0.95], [0, 1, 1, 1])
  const opacities = [step0Opacity, step1Opacity, step2Opacity, step3Opacity]

  return (
    <div ref={wrapperRef} className="hidden lg:block relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center">
        <div className="mx-auto max-w-[1280px] px-6 w-full">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="relative min-h-[300px]">
              {steps.map((step, i) => (
                <motion.div key={step.number} style={{ opacity: opacities[i] }} className="absolute inset-0 flex flex-col justify-center">
                  <span className="font-display font-bold text-6xl text-brand-indigo/20">{step.number}</span>
                  <h3 className="mt-3 font-body font-bold text-2xl text-neutral-near-black">{step.title}</h3>
                  <p className="mt-4 text-neutral-slate max-w-lg">{step.body}</p>
                  <p className="mt-4 font-body text-[15px] italic text-brand-indigo/70 max-w-lg">{step.annotation}</p>
                </motion.div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/illustrations/text-flow-indigo-1-IMG-06.png"
                alt="Four-step clinical journey — data flowing from scattered to structured"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorksTeaser() {
  return (
    <>
      <Section bg="cream" id="how-it-works" dots>
        <ScrollReveal>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mt-4 max-w-3xl">Before, during, after, and between visits — one platform across the full care journey.</h2>
        </ScrollReveal>
      </Section>

      <div className="bg-surface-cream"><DesktopScrollLocked /></div>

      <Section bg="cream" className="!pt-0">
        <MobileSteps />
        <ScrollReveal>
          <p className="mt-12 font-body text-lg text-neutral-slate text-center">Same intelligence. Any device. Phone, tablet, or VR headset.</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="/platform/how-it-works">See How It Works</Button>
            <Button variant="secondary" href="/contact">Schedule a Conversation</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
