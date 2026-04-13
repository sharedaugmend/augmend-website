"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import { advisors } from "@/data/advisors"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

export default function AdvisorsContent() {
  return (
    <>
      <Section bg="white" padding="large" className="pt-32!" dots>
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/company/our-story" className="hover:text-brand-indigo transition-colors">Company</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Advisory Board</span>
        </nav>
        <ScrollReveal>
          <SectionLabel>Advisory Board</SectionLabel>
          <h1 className="mt-4 max-w-3xl">Clinical expertise, regulatory depth, and institutional credibility.</h1>
          <p className="mt-6 max-w-2xl text-neutral-slate">AugMend's advisory board spans clinical medicine, AI/ML research, regulatory strategy, healthcare economics, and executive leadership at the institutions where this technology will deploy.</p>
        </ScrollReveal>
      </Section>

      <Section bg="cream" dots>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {advisors.map((a) => (
            <motion.div key={a.name} variants={staggerChild} className="bg-surface-white border border-neutral-border rounded-xl p-6 flex items-start gap-5">
              {a.image ? (
                <div className="shrink-0"><Image src={a.image} alt={a.name} width={72} height={72} className="rounded-xl object-cover w-[72px] h-[72px]" /></div>
              ) : (
                <div className="shrink-0 w-[72px] h-[72px] rounded-xl bg-surface-cream flex items-center justify-center">
                  <span className="font-display text-xl text-neutral-mist">{a.name.replace(/^Dr\.\s*/, "").replace(/,.*/, "").split(" ").map((n) => n[0]).join("")}</span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                {a.linkedin ? (
                  <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="font-body font-bold text-lg leading-tight text-brand-indigo hover:underline">{a.name}</a>
                ) : (
                  <h3 className="font-body font-bold text-lg leading-tight">{a.name}</h3>
                )}
                <p className="mt-1 font-body text-sm text-brand-indigo">{a.affiliation}</p>
                {a.domain && <p className="mt-1 font-body text-sm text-neutral-slate">{a.domain}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section bg="indigo">
        <ScrollReveal>
          <h2 className="text-white text-center">Let's talk.</h2>
          <div className="mt-8 flex justify-center"><Button variant="ghost" href="/contact">Schedule a Conversation</Button></div>
        </ScrollReveal>
      </Section>
    </>
  )
}
