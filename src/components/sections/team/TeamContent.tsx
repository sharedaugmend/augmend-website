"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import { team } from "@/data/team"
import { advisors } from "@/data/advisors"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const acceleratorLogos = [
  "HarvardHealthLab-Logo.png", "MIT Delta V Logo.png", "MIT-100K-logo.png",
  "MassChallenge-logo.png", "NSF_ICORPS_Logo.png", "SBXI-logo.png", "Sandbox-Logo.png",
]

const allMembers = team.sort((a, b) => a.order - b.order)

export default function TeamContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-cream">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_40%]">
          <div className="pt-28 pb-16 md:pt-32 md:pb-24 xl:pb-32 px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
            <nav className="mb-8 font-body text-sm text-neutral-slate">
              <Link href="/" className="hover:text-brand-indigo transition-colors">Home</Link><span className="mx-2">/</span>
              <Link href="/company/our-story" className="hover:text-brand-indigo transition-colors">Company</Link><span className="mx-2">/</span>
              <span className="text-neutral-near-black">Team</span>
            </nav>
            <ScrollReveal>
              <SectionLabel>Our Team</SectionLabel>
              <h1 className="mt-4">The team behind AugMend.</h1>
            </ScrollReveal>
          </div>
          <div className="relative hidden lg:block min-h-[450px]">
            <Image src="/images/illustrations/VR-experiences-adaptive-3.png" alt="Patient in VR session" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Accelerator logos — same bg as leadership (white) */}
      <section className="relative overflow-hidden py-8 bg-surface-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <p className="font-body font-bold text-sm uppercase tracking-[0.05em] text-neutral-slate text-center">Backed and accelerated by</p>
          </ScrollReveal>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {acceleratorLogos.map((logo) => (
              <Image key={logo} src={`/images/logos/${logo}`} alt={logo.replace(/[-_]/g, " ").replace(".png", "")} width={120} height={48} className="h-10 w-auto object-contain opacity-70" />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership — white background */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-white">
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <ScrollReveal><SectionLabel>Leadership</SectionLabel></ScrollReveal>
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {allMembers.map((m) => (
            <motion.div key={m.name} variants={staggerChild}>
              <div className="bg-surface-white border border-neutral-border rounded-xl p-6 h-full flex flex-col sm:flex-row gap-4 shadow-sm transition-[transform,box-shadow] duration-150 hover:shadow-md hover:-translate-y-px" style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {m.image ? (
                  <div className="shrink-0"><Image src={m.image} alt={m.name} width={80} height={80} className="rounded-xl object-cover w-[80px] h-[80px] transition-transform duration-200 hover:scale-[1.02]" /></div>
                ) : (
                  <div className="shrink-0 w-[80px] h-[80px] rounded-xl bg-surface-cream flex items-center justify-center">
                    <span className="font-display text-2xl text-neutral-mist">{m.name.split(" ").map((n) => n[0]).join("")}</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-body font-bold text-base leading-tight">{m.name}</h3>
                  <p className="mt-0.5 font-body text-xs text-accent-orange">{m.title}{m.credentials ? ` | ${m.credentials}` : ""}</p>
                  <p className="mt-2 text-neutral-slate text-[13px] leading-relaxed">{m.bio}</p>
                  {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-body text-xs text-brand-indigo hover:underline">LinkedIn &rarr;</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

      {/* Advisory Board — cream bg for visual break from Leadership */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-cream" id="advisory-board">
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <SectionLabel>Advisory Board</SectionLabel>
          <p className="mt-4 max-w-2xl text-neutral-slate">Clinical expertise, regulatory depth, and institutional credibility.</p>
        </ScrollReveal>
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {advisors.map((a) => (
            <motion.div key={a.name} variants={staggerChild} className="bg-surface-white border border-neutral-border rounded-xl p-4 flex items-start gap-4">
              {a.image ? (
                <div className="shrink-0"><Image src={a.image} alt={a.name} width={64} height={64} className="rounded-lg object-cover w-[64px] h-[64px]" /></div>
              ) : (
                <div className="shrink-0 w-[64px] h-[64px] rounded-lg bg-surface-cream flex items-center justify-center">
                  <span className="font-display text-lg text-neutral-mist">{a.name.replace(/,.*/, "").split(" ").map((n) => n[0]).join("")}</span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-body font-bold text-sm leading-tight">{a.name}</h3>
                <p className="mt-0.5 font-body text-xs text-accent-orange">{a.affiliation}</p>
                {a.domain && <p className="font-body text-[11px] text-neutral-slate">{a.domain}</p>}
                {a.bio && <p className="mt-1.5 font-body text-[12px] text-neutral-slate leading-relaxed">{a.bio}</p>}
                {a.linkedin && <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-block font-body text-[11px] text-brand-indigo hover:underline">LinkedIn &rarr;</a>}
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

    </>
  )
}
