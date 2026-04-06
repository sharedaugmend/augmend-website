"use client"

import { motion } from "framer-motion"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { research } from "@/data/research"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const statusStyles = {
  published: { label: "Published", color: "bg-accent-lime" },
  "under-review": { label: "Under Review", color: "bg-accent-orange" },
  "in-progress": { label: "In Progress", color: "bg-brand-indigo" },
}

export default function EvidenceContent() {
  return (
    <>
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Evidence</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>Evidence</SectionLabel>
          <h1 className="mt-4 max-w-3xl">
            Peer-reviewed. Independently validated. Actively recruiting.
          </h1>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            AugMend&#39;s clinical evidence base spans peer-reviewed publications, registered clinical trials, and active institutional partnerships. Every claim on this site traces to a specific study, dataset, or trial registration.
          </p>
        </ScrollReveal>
      </Section>

      <Section bg="cream">
        <ScrollReveal>
          <SectionLabel>Our Research</SectionLabel>
        </ScrollReveal>

        <motion.div
          className="mt-8 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {research.map((item) => {
            const status = statusStyles[item.status]
            return (
              <motion.div key={item.title} variants={staggerChild}>
                <Card className={`border-l-2 ${item.status === "published" ? "border-l-accent-lime" : "border-l-brand-indigo"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`h-2 w-2 rounded-full ${status.color}`} />
                    <span className="font-body font-bold text-xs uppercase tracking-[0.05em] text-neutral-slate">
                      {status.label}
                    </span>
                    <span className="font-body text-xs text-neutral-slate">· {item.year}</span>
                    {item.trialId && (
                      <span className="font-body text-xs text-neutral-slate">· {item.trialId}</span>
                    )}
                  </div>
                  <h3 className="font-body font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="mt-2 font-body text-sm text-neutral-slate">
                    {item.authors}, {item.venue}
                  </p>
                  {item.stat && (
                    <div className="mt-4 border-l-2 border-l-accent-lime pl-4">
                      <div className="font-display font-bold text-xl text-neutral-near-black">{item.stat}</div>
                      <div className="mt-1 font-body text-xs text-neutral-slate uppercase tracking-[0.05em]">{item.statLabel}</div>
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section bg="indigo">
        <ScrollReveal>
          <h2 className="text-white text-center">
            Interested in the evidence behind AugMend?
          </h2>
          <p className="mt-4 text-white/80 text-center max-w-2xl mx-auto">
            Our team can walk you through the research, trial data, and clinical validation supporting the platform.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="ghost" href="/contact">
              Schedule a Conversation
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
