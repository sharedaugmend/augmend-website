"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import StatCard from "@/components/ui/StatCard"
import Counter from "@/components/ui/Counter"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const references = [
  { id: 1, text: 'CDC, Preventing Chronic Disease. "Trends in Multiple Chronic Conditions Among US Adults, By Life Stage, BRFSS 2013-2023." Published 2025.' },
  { id: 2, text: 'HRSA Bureau of Health Workforce. "HPSA Quarterly Report, Q1 FY2025." December 2024.' },
  { id: 3, text: 'Chandawarkar R, Nadkarni P, Barmash E, et al. "Revenue Cycle Management: The Art and the Science." Plast Reconstr Surg Glob Open. 2024;12(7):e5756.' },
  { id: 4, text: "American Health Information Management Association (AHIMA). Survey on documentation impact on revenue. Cited in MedLearn Publishing, March 2023." },
  { id: 5, text: 'McKinsey & Company. Healthcare revenue cycle efficiency analysis. Cited in Open Practice, December 2023.' },
  { id: 6, text: "Journal of General Internal Medicine. Study on incomplete medical notes and hospital costs. Analysis of 20,000+ hospital admissions." },
]

export default function TheProblem() {
  const [refsOpen, setRefsOpen] = useState(false)

  return (
    <section id="the-gap" className="relative overflow-hidden py-12 md:py-16 xl:py-24" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <SectionLabel>The Gap</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Patients with chronic conditions carry complexity they rarely disclose in a single visit.
          </h2>
          <p className="mt-2 font-display text-xl md:text-2xl text-brand-indigo max-w-2xl">
            We make it easier to get the full picture sooner.
          </p>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            Chronic conditions require data that specialty clinics were never built to capture. Not because providers fail to ask, but because standard clinical assessment was never designed to capture the full breadth of what drives symptoms and outcomes. History, physical and emotional trauma, substance use, psychosocial stressors and determinants, functional limitations. The biopsychosocial complexity that shapes both treatment decisions and billing complexity stays hidden in the limited time frame of the encounter.
          </p>
        </ScrollReveal>

        {/* Image below text, above stats */}
        <ScrollReveal>
          <div className="mt-10 mx-auto max-w-[80%]">
            <Image
              src="/images/illustrations/problem-data-capture.png"
              alt="Data capture gap: sparse versus dense clinical data visualization"
              width={1024}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>

        {/* Stat row 1 */}
        <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          <motion.div variants={staggerChild}>
            <StatCard value={<Counter target={194} suffix=" million" />} label="Americans live with chronic conditions" description="Cancer, chronic pain, diabetes, heart disease, autoimmune disease, whose full complexity has never fit inside a clinical encounter. [1]" accent="indigo" />
          </motion.div>
          <motion.div variants={staggerChild}>
            <StatCard value={<Counter target={122} suffix=" million" />} label="Americans with chronic conditions and behavioral health needs live in shortage areas" description="Mental Health Professional Shortage Areas leave the majority of behavioral health needs in chronic disease populations unaddressed. [2]" accent="orange" />
          </motion.div>
        </motion.div>

        {/* Stat row 2 */}
        <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          <motion.div variants={staggerChild}>
            <StatCard value="5-20%" label="Of annual specialty care revenue lost to incomplete documentation" description="Industry estimates across revenue cycle analyses. Incomplete documentation limits a provider's ability to make fully informed treatment decisions, and prevents billing at the level of care actually delivered. [3][4][5]" accent="lime" />
          </motion.div>
          <motion.div variants={staggerChild}>
            <StatCard value={<Counter prefix="$" target={1386} />} label="Additional hospital costs per patient from incomplete medical notes" description="Associated with a 0.4-day increase in length of stay per admission. Analysis of 20,000+ hospital admissions. [6]" accent="pink" />
          </motion.div>
        </motion.div>

        {/* References */}
        <div className="mt-16">
          <button onClick={() => setRefsOpen(!refsOpen)} className="flex items-center gap-2 font-body text-sm text-neutral-slate hover:text-neutral-near-black transition-colors duration-200">
            <span>References</span>
            <motion.span animate={{ rotate: refsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
            </motion.span>
          </button>
          {refsOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 space-y-2 overflow-hidden">
              {references.map((ref) => (
                <p key={ref.id} className="font-body text-xs text-neutral-slate leading-relaxed">[{ref.id}] {ref.text}</p>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
