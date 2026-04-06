"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const steps = [
  {
    number: "01",
    title: "Before the visit",
    body: "The patient completes a self-guided conversational AI session on phone, tablet or in VR. Biopsychosocial data captured across clinical domains configured by your clinic. 15-45 minutes. The AI uses adaptive questioning, selecting relevant follow-up inquiries based on individual responses.",
  },
  {
    number: "02",
    title: "During the visit",
    body: "The provider reviews a structured clinical summary: risk flags, score trends, psychosocial context, and the patient's own words, in under a minute. The appointment starts with decisions, not history-taking.",
  },
  {
    number: "03",
    title: "After the visit",
    body: "Two structured outputs from every session: a clinical report in the format the encounter calls for, and billing documentation mapped to the CPT codes the care actually delivered.",
  },
  {
    number: "04",
    title: "Between visits",
    body: "Patients complete interval check-ins, progress assessments, and provider-prescribed exercises, personalized to what they disclosed. The system tracks what changed and presents a summary before the next encounter.",
  },
]

export default function HowItWorksTeaser() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-16 md:py-24 xl:py-32">
      <Image
        src="/images/illustrations/dots-indigo-background.png"
        alt=""
        fill
        className="absolute inset-0 object-cover z-0 pointer-events-none"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#0D0B3E]/80 z-[1]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <SectionLabel className="!text-accent-lime">How It Works</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-white">Before, during, after, and between visits: one platform across the full care journey.</h2>
        </ScrollReveal>

        {/* Step cards - horizontal on desktop, stacked on mobile */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerChild}
              className="bg-white/[0.08] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06]"
            >
              <span className="font-display font-bold text-4xl text-accent-lime/40">{step.number}</span>
              <h3 className="mt-2 font-body font-bold text-lg text-white">{step.title}</h3>
              <p className="mt-3 font-body text-[15px] text-white/70 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image below steps */}
        <ScrollReveal>
          <div className="mt-12 rounded-2xl overflow-hidden">
            <Image
              src="/images/illustrations/text-flow-indigo-1-IMG-06.png"
              alt="Four-step clinical journey, data flowing from scattered to structured"
              width={1280}
              height={480}
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-8 font-body text-lg text-white/70 text-center">Same intelligence. Any device. Phone, tablet, or VR headset.</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="ghost" href="/platform/how-it-works">See How It Works</Button>
            <Button variant="ghost" href="/contact">Schedule a Conversation</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
