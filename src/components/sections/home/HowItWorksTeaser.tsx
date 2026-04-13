"use client"

import { motion } from "framer-motion"
import { RectangleGoggles, Tablet, Smartphone } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import HowItWorksFlow from "@/components/ui/HowItWorksFlow"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const steps = [
  { number: "01", title: "Before the visit", facing: "Patient", time: "15-45 min", what: "Self-guided AI session captures biopsychosocial data across configured clinical domains." },
  { number: "02", title: "Day of the visit", facing: "Provider", time: "<1 min", what: "Structured clinical summary: risk flags, score trends, history, standardized results." },
  { number: "03", title: "After the visit", facing: "Provider", time: "1-5 min", what: "Clinical documentation and billing-ready report mapped to CPT/ICD codes delivered." },
  { number: "04", title: "Between visits", facing: "Patient", time: "10-15 min", what: "Conversational check-ins, progress assessments, and behavioral exercises." },
]

const flowNodes = [
  { label: "Patient session", sub: "VR / Tablet / Phone" },
  { label: "Structured data", sub: "AI processing" },
  { label: "Clinical + billing reports", sub: "Portal / EHR" },
  { label: "Longitudinal record", sub: "Compounds over time" },
]

export default function HowItWorksTeaser() {
  return (
    <>
      <section id="how-it-works" className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-brand-deep-space">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/images/illustrations/dots-indigo-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <SectionLabel dark>How It Works</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-white">One platform across the full care journey.</h2>
          </ScrollReveal>

          {/* Step cards */}
          <motion.div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            {steps.map((s) => (
              <motion.div key={s.number} variants={staggerChild} className="bg-white/[0.07] rounded-xl p-5 border border-white/[0.06]">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-2xl text-accent-lime">{s.number}</span>
                  <span className="font-body text-[10px] font-bold uppercase tracking-wider text-accent-lime">{s.facing}</span>
                </div>
                <h3 className="mt-1 font-body font-bold text-base text-white">{s.title}</h3>
                <p className="mt-2 font-body text-sm text-white/70 leading-relaxed">{s.what}</p>
                <p className="mt-2 font-body font-bold text-xs text-accent-lime">{s.time}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Flow diagram */}
          <div className="mt-6">
            <HowItWorksFlow />
          </div>

          <ScrollReveal>
            <div className="mt-8 flex justify-center">
              <Button variant="ghost" href="/platform/how-it-works">See How It Works &rarr;</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Avatar + Device section — cream bg */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-cream">
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <ScrollReveal>
                <SectionLabel>The Avatar</SectionLabel>
                <h2 className="mt-4">Avatar guided. Same intelligence. Any device.</h2>
                <p className="mt-4 text-neutral-slate">
                  Discover the avatar that guides the conversation with your patients. It doesn't look human for a reason. Patients interact with a non-human conversational avatar, purpose-built to encourage disclosure without triggering the social dynamics of a human face.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-surface-white border border-neutral-border rounded-xl p-4 text-center shadow-sm">
                    <RectangleGoggles className="h-8 w-8 text-brand-indigo mx-auto" strokeWidth={1.5} />
                    <h4 className="mt-2 text-sm">VR headset</h4>
                    <p className="mt-1 text-neutral-slate text-[12px]">Primary in-clinic. Highest engagement and disclosure.</p>
                  </div>
                  <div className="bg-surface-white border border-neutral-border rounded-xl p-4 text-center shadow-sm">
                    <Tablet className="h-8 w-8 text-brand-indigo mx-auto" strokeWidth={1.5} />
                    <h4 className="mt-2 text-sm">Tablet</h4>
                    <p className="mt-1 text-neutral-slate text-[12px]">In-clinic alternative. Same conversational intelligence.</p>
                  </div>
                  <div className="bg-surface-white border border-neutral-border rounded-xl p-4 text-center shadow-sm">
                    <Smartphone className="h-8 w-8 text-brand-indigo mx-auto" strokeWidth={1.5} />
                    <h4 className="mt-2 text-sm">Phone</h4>
                    <p className="mt-1 text-neutral-slate text-[12px]">Remote access. Before and between visits from home.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden">
                <video autoPlay muted loop playsInline aria-hidden="true" className="w-full" poster="/images/illustrations/robot-avatar-blue.png">
                  <source src="/videos/robot-head-movements.mp4" type="video/mp4" />
                </video>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
