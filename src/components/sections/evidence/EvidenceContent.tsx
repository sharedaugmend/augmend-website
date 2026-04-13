"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const founderPubs = [
  { authors: "Moreau S, Therond A, et al.", title: "Virtual Reality in Acute and Chronic Pain Medicine: An Updated Review.", venue: "Current Pain and Headache Reports, 28(9):893-928, 2024.", doi: "https://doi.org/10.1007/s11916-024-01246-2" },
  { authors: "Mazzolenis MV, Mourra GN, Moreau S, ... Therond A.", title: "The Role of Virtual Reality and Artificial Intelligence in Cognitive Pain Therapy.", venue: "Current Pain and Headache Reports, 28(9):881-892, 2024.", doi: "https://doi.org/10.1007/s11916-024-01270-2" },
  { authors: "Cerda IH, Therond A, Moreau S, Robinson CL.", title: "Telehealth and Virtual Reality Technologies in Chronic Pain Management.", venue: "Current Pain and Headache Reports, 28:83-94, 2024.", doi: "https://doi.org/10.1007/s11916-023-01205-3" },
  { authors: "Pan A, Moreau S, ... Therond A.", title: "The Role of Virtual Reality in Chronic Pain and Loneliness.", venue: "J Med Extended Reality, 2(1):142-159, 2025.", doi: "https://doi.org/10.1089/jmedxr.2024.0063" },
  { authors: "Schroeder AH, Bogie BJM, Rahman TT, Therond A, et al.", title: "VR Interventions to Improve Psychosocial Functioning in Psychosis: Systematic Review.", venue: "JMIR Mental Health, 9(2):e28502, 2022.", doi: "https://doi.org/10.2196/28502" },
  { authors: "Therond A, et al.", title: "Efficacy of Cognitive Remediation in Depression: Systematic Review and Meta-Analysis.", venue: "J Affective Disorders, 287:164-173, 2021.", doi: "https://pubmed.ncbi.nlm.nih.gov/33631438/" },
]

export default function EvidenceContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-cream">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_40%]">
          <div className="pt-28 pb-16 md:pt-32 md:pb-24 xl:pb-32 px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-10">
            <nav className="mb-8 font-body text-sm text-neutral-slate">
              <Link href="/" className="hover:text-brand-indigo transition-colors">Home</Link><span className="mx-2">/</span><span className="text-neutral-near-black">Evidence</span>
            </nav>
            <ScrollReveal>
              <SectionLabel>Evidence</SectionLabel>
              <h1 className="mt-4 max-w-3xl">Peer-reviewed. Independently validated.</h1>
            </ScrollReveal>
          </div>
          <div className="relative hidden lg:block min-h-[450px]">
            <Image src="/images/illustrations/hand-data-points.png" alt="Data visualization" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Our Publications — merged AugMend Research + Founder Pubs, dark bg */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-brand-deep-space">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/images/illustrations/dots-indigo-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal><SectionLabel dark>Our Publications</SectionLabel></ScrollReveal>

          {/* AugMend platform research */}
          <ScrollReveal>
            <p className="mt-6 text-white/60 text-sm">Research conducted using AugMend&apos;s platform and clinical methodology.</p>
          </ScrollReveal>
          <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            <motion.div variants={staggerChild}>
              <div className="bg-white/[0.07] border border-white/[0.08] rounded-xl p-8 h-full">
                <h3 className="font-body font-bold text-lg text-white">Increased disclosure through conversational AI</h3>
                <p className="mt-2 text-white/60 text-sm">Ko et al., Johns Hopkins Bloomberg School of Public Health, 2026.</p>
                <div className="mt-4 border-l-2 border-l-accent-lime pl-4">
                  <div className="font-display font-bold text-3xl text-accent-lime">&beta; = 10.40</div>
                  <p className="mt-1 font-body font-bold text-xs uppercase tracking-wider text-white/70">Additional words per response (p = .020)</p>
                </div>
                <p className="mt-4 text-white/70 text-[14px]">Patients disclose significantly more through AugMend&apos;s conversational AI than through standard web-based assessment. VR delivery further deepens engagement.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerChild}>
              <div className="bg-white/[0.07] border border-white/[0.08] rounded-xl p-8 h-full">
                <h3 className="font-body font-bold text-lg text-white">Patient preference for VR-based assessment</h3>
                <p className="mt-2 text-white/60 text-sm">NCT07336537 · MIT.nano Immersion Lab · Under peer review.</p>
                <div className="mt-4 border-l-2 border-l-accent-lime pl-4">
                  <div className="font-display font-bold text-3xl text-accent-lime">100%</div>
                  <p className="mt-1 font-body font-bold text-xs uppercase tracking-wider text-white/70">Preferred future use (7/8 domains, r = 0.81, p = .022)</p>
                </div>
                <p className="mt-4 text-white/70 text-[14px]">VR outperformed standard digital assessment across 7 of 8 measured preference domains.</p>
                <p className="mt-3 font-body text-xs text-white/60">Registered RCT · n=45 · MIT.nano Immersion Lab</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Founder publications */}
          <ScrollReveal>
            <p className="mt-14 text-white/60 text-sm">Peer-reviewed research by AugMend&apos;s co-founders in VR, pain, and mental health.</p>
          </ScrollReveal>
          <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            {founderPubs.map((pub, i) => (
              <motion.div key={i} variants={staggerChild}>
                <div className="bg-white/[0.07] border border-white/[0.08] rounded-xl p-5 h-full">
                  <p className="font-body text-xs text-white/50">{pub.authors}</p>
                  <h4 className="mt-1 text-[14px] leading-snug text-white">{pub.title}</h4>
                  <p className="mt-1 font-body text-xs italic text-white/50">{pub.venue}</p>
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-body text-xs text-accent-lime hover:underline">View publication &rarr;</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Third-Party Publications — dots-cream bg at very low opacity */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-cream">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/illustrations/dots-cream-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <div className="max-w-2xl">
            <SectionLabel>Third-Party Publications</SectionLabel>
            <div className="mt-4 bg-surface-white border border-neutral-border rounded-xl p-6">
              <p className="font-body text-xs text-neutral-mist uppercase tracking-wider font-bold">Independent research</p>
              <p className="mt-2 font-body text-sm text-neutral-slate">Lucas GM, Gratch J, King A, Morency LP. &ldquo;It&apos;s only a computer: Virtual humans increase willingness to disclose.&rdquo; Computers in Human Behavior, 37:94-100, 2014.</p>
              <p className="mt-2 text-neutral-slate text-[13px] italic">People disclose more when they believe they are interacting with a non-human agent, experiencing less fear of judgment and greater willingness to share sensitive information.</p>
            </div>
            <p className="mt-4 font-body text-xs text-neutral-mist">Additional supporting literature will be added as the evidence base expands.</p>
          </div>
        </ScrollReveal>
        </div>
      </section>

    </>
  )
}
