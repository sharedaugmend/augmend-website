"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import EvidenceCard from "@/components/ui/EvidenceCard"
import Counter from "@/components/ui/Counter"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

export default function TheProof() {
  return (
    <section id="evidence" className="relative overflow-hidden bg-brand-deep-space py-12 md:py-16 xl:py-24">
      <Image src="/images/illustrations/dots-deepspace-background.png" alt="" fill className="absolute inset-0 object-cover z-0 opacity-20 pointer-events-none" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <SectionLabel className="!text-accent-lime">Evidence</SectionLabel>
          <h2 className="mt-4 text-white">Peer-reviewed. Independently validated. Actively recruiting.</h2>
        </ScrollReveal>

        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {/* Card 1 */}
          <motion.div variants={staggerChild} className="flex">
            <EvidenceCard
              quote="Patients disclose significantly more through AugMend's conversational AI than through standard web-based assessment."
              citation="Ko et al., Johns Hopkins Bloomberg School of Public Health, 2026"
              className="flex flex-col flex-1"
            >
              <div className="mt-auto pt-4 border-l-2 border-l-accent-lime pl-4">
                <div className="font-display font-bold text-2xl text-white">&beta; = 10.40 (p = .020)</div>
                <div className="mt-1 font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">Additional words per response. VR delivery further deepens engagement.</div>
                <p className="mt-3 font-body text-sm text-white/50">VR responses were 30% longer than web-based responses, with higher amplification ratios for both word count (1.61 vs 1.48) and emotional intensity (5.04 vs 4.49).</p>
              </div>
            </EvidenceCard>
          </motion.div>

          {/* Card 2 - now with stat */}
          <motion.div variants={staggerChild} className="flex">
            <EvidenceCard
              quote="People disclose more when they believe they are interacting with a non-human agent, experiencing less fear of judgment and greater willingness to share sensitive information."
              citation="Lucas et al. (2014), Computers in Human Behavior, USC Institute for Creative Technologies"
              className="flex flex-col flex-1"
            >
              <div className="mt-auto pt-4 border-l-2 border-l-accent-lime pl-4">
                <div className="font-display font-bold text-2xl text-white">p = .04</div>
                <div className="mt-1 font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">Greater emotional diversity when disclosing to non-human agents</div>
              </div>
            </EvidenceCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={staggerChild} className="flex">
            <EvidenceCard
              quote="In preliminary results, VR consistently outperformed desktop questionnaires across all measured domains, with moderate-to-large effect sizes in Core and Overall Experience."
              citation="NCT07336537 · MIT.nano Immersion Lab · Under peer review, Journal of Medical Extended Reality"
              className="flex flex-col flex-1"
            >
              <div className="mt-auto pt-4 border-l-2 border-l-accent-lime pl-4">
                <div className="font-display font-bold text-2xl text-white"><Counter target={100} suffix="%" /></div>
                <div className="mt-1 font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">Preferred future use. Strongest domain: future use (R = 0.81, p = .022).</div>
              </div>
            </EvidenceCard>
          </motion.div>
        </motion.div>

        <ScrollReveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/[0.08] px-4 py-2 font-body text-sm font-bold text-white/80 border border-white/[0.12]">Registered Randomized Controlled Trial</span>
            <span className="font-body text-sm text-white/50">NCT07336537 · n=100 · MIT.nano Immersion Lab · Actively recruiting · Under peer review, Journal of Medical Extended Reality</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
