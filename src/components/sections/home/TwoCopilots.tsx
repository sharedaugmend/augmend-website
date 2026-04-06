"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

export default function TwoCopilots() {
  return (
    <Section bg="white" id="architecture" dots>
      <ScrollReveal>
        <SectionLabel>The Architecture</SectionLabel>
        <h2 className="mt-4 max-w-3xl">One for the patient. One for the provider. Working in sequence.</h2>
        <p className="mt-4 max-w-2xl text-neutral-slate">AugMend operates through two AI copilots that close the gap between what patients experience and what care teams can act on.</p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-8 rounded-2xl overflow-hidden">
          <Image
            src="/images/illustrations/text-flow-indigo-1-IMG-04.png"
            alt="Two copilots — scattered patient disclosure flowing into structured clinical intelligence"
            width={1280}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </ScrollReveal>

      <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
        <motion.div variants={staggerChild}>
          <Card className="h-full border-l-2 border-l-accent-lime">
            <h3 className="font-body font-bold text-[22px] leading-tight">Patient Copilot</h3>
            <p className="mt-4 text-neutral-slate">Conducts intake, therapeutic exercises, and longitudinal follow-up through conversational AI sessions. Self-guided. Administered by non-clinical staff. Delivered on any device phone, tablet, or VR headset. Captures biopsychosocial data across up to 39 validated clinical domains across sessions missed by standard assessment.</p>
            <p className="mt-4 font-body text-[15px] italic text-neutral-slate/80">Every session is launched by the care team. Every safety alert routes to a provider. The AI guides disclosure. The provider is always in charge.</p>
          </Card>
        </motion.div>
        <motion.div variants={staggerChild}>
          <Card className="h-full border-l-2 border-l-brand-indigo">
            <h3 className="font-body font-bold text-[22px] leading-tight">Provider Copilot</h3>
            <p className="mt-4 text-neutral-slate">Generates two outputs from every session: a clinical report structured for the provider, and billing documentation mapped to the CPT codes the encounter supports. Exposes risk factors, tracks symptom trajectories across visits, and produces the longitudinal patient picture that no chart review can replicate.</p>
            <p className="mt-4 font-body text-[15px] italic text-neutral-slate/80">The more sessions a patient completes, the more precise both copilots become. Data compounds. The system learns. The clinic&#39;s most valuable asset becomes its patient record: structured, billable, and irreplaceable.</p>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  )
}
