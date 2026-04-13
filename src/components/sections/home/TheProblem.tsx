"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import DataCaptureGap from "@/components/ui/DataCaptureGap"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const stats = [
  { value: "60-80%", label: "Of patients have withheld medically relevant information from their clinicians", detail: "Including symptoms, medications, lifestyle factors, mental health concerns, and disagreement with provider recommendations.", ref: "[1]" },
  { value: "~2 hours", label: "Of EHR and clerical work for every 1 hour of patient face time", detail: "The documentation burden consumes provider capacity that should be spent on clinical decision-making and patient care.", ref: "[2]" },
  { value: "86,000", label: "Projected physician shortage by 2036", detail: "Fewer providers serving more patients with increasingly complex needs. The capacity gap is structural and widening.", ref: "[3]" },
  { value: "3-8%", label: "Of net collectible revenue lost to incomplete documentation", detail: "For a specialty provider generating $700K in annual collections, that is $21K-$56K per provider, per year.", ref: "[4][5][6]" },
]

const references = [
  { id: 1, text: 'Levy AG, et al. "Patient Nondisclosure of Medically Relevant Information." JAMA Network Open. 2018.' },
  { id: 2, text: 'AMA Policy Research Perspectives. "Physician time spent on EHR and clerical tasks." 2024.' },
  { id: 3, text: 'AAMC. "Physician Supply and Demand: Projections From 2021 to 2036." March 2024.' },
  { id: 4, text: 'AHIMA. Documentation impact on revenue. MedLearn Publishing, 2023.' },
  { id: 5, text: 'Chandawarkar et al., 2024 in Plastic and Reconstructive Surgery Global Open.' },
  { id: 6, text: 'McKinsey & Company. Healthcare revenue cycle efficiency analysis. Open Practice, 2023.' },
]

function StatCard({ stat }: { stat: typeof stats[number] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-l-2 border-l-brand-indigo pl-4">
      <div className="font-display font-bold text-3xl md:text-4xl leading-tight text-neutral-near-black">{stat.value}</div>
      <button onClick={() => setOpen(!open)} className="mt-2 flex items-start gap-1.5 text-left group" aria-expanded={open}>
        <span className="font-body font-bold text-[13px] uppercase tracking-[0.04em] text-neutral-slate leading-snug">{stat.label}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-neutral-slate shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} strokeWidth={2} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-2 font-body text-[12px] text-neutral-slate leading-relaxed">{stat.detail} <span className="text-neutral-slate">{stat.ref}</span></p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TheProblem() {
  const [refsOpen, setRefsOpen] = useState(false)

  return (
    <section id="the-gap" className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-white">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Two-column: text left, diagram right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">
          <ScrollReveal>
            <SectionLabel>The Gap</SectionLabel>
            <h2 className="mt-4">
              Complex patients with comorbidities require data the system was never designed to capture.
            </h2>
            <div className="mt-6 space-y-4 text-neutral-slate">
              <p>Clinics who treat complex patients with biological, psychological, and social determinants of health require far more time than a standard clinical encounter can allow. Demand and resource limitations leave no room to capture the biopsychosocial depth that drives both treatment decisions and documentation completeness.</p>
              <p>The result is twofold: clinical decisions made with incomplete information, and documentation that cannot support the complexity of patient experience and care delivered. The same gap that limits medical judgment also limits revenue and quality of care.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="hidden lg:flex justify-center">
            <DataCaptureGap />
          </ScrollReveal>
        </div>

        {/* Mobile diagram */}
        <ScrollReveal className="lg:hidden mt-8">
          <DataCaptureGap className="mx-auto" />
        </ScrollReveal>

        {/* Collapsible stat cards */}
        <motion.div className="mt-14 grid grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {stats.map((s) => (
            <motion.div key={s.value} variants={staggerChild}>
              <StatCard stat={s} />
            </motion.div>
          ))}
        </motion.div>

        {/* References */}
        <div className="mt-10">
          <button onClick={() => setRefsOpen(!refsOpen)} aria-expanded={refsOpen} className="flex items-center gap-2 font-body text-xs text-neutral-slate hover:text-neutral-slate transition-colors">
            <span>References</span>
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${refsOpen ? "rotate-180" : ""}`} strokeWidth={2} />
          </button>
          <AnimatePresence>
            {refsOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="mt-3 space-y-1 overflow-hidden">
                {references.map((r) => (
                  <p key={r.id} className="font-body text-[11px] text-neutral-slate leading-relaxed">[{r.id}] {r.text}</p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
