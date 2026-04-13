"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

export default function TheProof() {
  return (
    <section id="results" className="relative overflow-hidden bg-brand-deep-space py-16 md:py-20 xl:py-24">
      <Image src="/images/illustrations/dots-deepspace-background.png" alt="" fill className="absolute inset-0 object-cover z-0 opacity-20 pointer-events-none" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <SectionLabel dark>The Results</SectionLabel>
          <h2 className="mt-4 text-white">What changes when patients use AugMend.</h2>
        </ScrollReveal>

        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {/* Card 1: More Information */}
          <motion.div variants={staggerChild} className="flex">
            <div className="bg-white/[0.06] rounded-2xl p-8 flex flex-col flex-1">
              <p className="font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">More Information Captured</p>
              <div className="mt-4 border-l-2 border-l-accent-lime pl-4">
                <div className="font-display font-bold text-3xl text-white">&beta; = 10.40</div>
                <div className="mt-1 font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">Additional words per response compared to standard assessment</div>
              </div>
              <p className="mt-4 text-white/70 text-[15px] flex-1">
                Patients disclose significantly more through AugMend's conversational AI than through standard web-based tools. VR delivery deepens this further: VR responses were 30% longer than web-based AI (44 vs 34 words per response) with 12% longer session durations.
              </p>
              <p className="mt-4 font-body text-xs text-white/60">Ko et al., Johns Hopkins Bloomberg School of Public Health, 2026</p>
            </div>
          </motion.div>

          {/* Card 2: Richer Clinical Picture */}
          <motion.div variants={staggerChild} className="flex">
            <div className="bg-white/[0.06] rounded-2xl p-8 flex flex-col flex-1">
              <p className="font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">Richer Clinical Picture</p>
              <div className="mt-4 border-l-2 border-l-accent-lime pl-4">
                <div className="font-display font-bold text-3xl text-white">5&times;</div>
                <div className="mt-1 font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">Emotional amplification ratio in VR sessions</div>
              </div>
              <p className="mt-4 text-white/70 text-[15px] flex-1">
                VR patients expressed five times the emotional intensity of the question itself. That means the system surfaces psychosocial depth such as fear, frustration, grief, or hope that a scored questionnaire cannot capture. Responses also showed significantly greater emotional diversity across clinical categories.
              </p>
              <p className="mt-4 font-body text-xs text-white/60">Data from our randomized controlled trial</p>
            </div>
          </motion.div>

          {/* Card 3: Patients Choose It */}
          <motion.div variants={staggerChild} className="flex">
            <div className="bg-white/[0.06] rounded-2xl p-8 flex flex-col flex-1">
              <p className="font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">Patients Choose It</p>
              <div className="mt-4 border-l-2 border-l-accent-lime pl-4">
                <div className="font-display font-bold text-3xl text-white">87%</div>
                <div className="mt-1 font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">Patients preferred VR for future use over web-based AI</div>
              </div>
              <p className="mt-4 text-white/70 text-[15px] flex-1">
                VR outperformed standard desktop questionnaires with large effect sizes in core experience (r = 0.44), overall experience (r = 0.45), and engagement (r = 0.55). Cybersickness did not diminish patient impressions: those who experienced mild cybersickness still rated VR positively.
              </p>
              <p className="mt-4 font-body text-xs text-white/60">Data from our randomized controlled trial</p>
            </div>
          </motion.div>
        </motion.div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link href="/evidence" className="font-body font-bold text-sm text-accent-lime hover:underline">
              See full evidence and publications &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
