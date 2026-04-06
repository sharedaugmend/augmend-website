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
      {/* Hero */}
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/company/our-story" className="hover:text-brand-indigo transition-colors">Company</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Advisors</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>Advisory Board</SectionLabel>
          <h1 className="mt-4 max-w-3xl">
            Clinical expertise, regulatory depth, and institutional credibility.
          </h1>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            AugMend&#39;s advisory board spans clinical medicine, AI/ML research, regulatory strategy, healthcare economics, and executive leadership at the institutions where this technology will deploy.
          </p>
        </ScrollReveal>
      </Section>

      {/* Advisor Grid */}
      <Section bg="cream">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {advisors.map((advisor) => (
            <motion.div
              key={advisor.name}
              variants={staggerChild}
              className="bg-surface-white border border-neutral-border rounded-xl p-6 flex items-start gap-5"
            >
              {advisor.image ? (
                <div className="shrink-0">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={72}
                    height={72}
                    className="rounded-xl object-cover w-[72px] h-[72px]"
                  />
                </div>
              ) : (
                <div className="shrink-0 w-[72px] h-[72px] rounded-xl bg-surface-cream flex items-center justify-center">
                  <span className="font-display text-xl text-neutral-mist">
                    {advisor.name.replace(/^Dr\.\s*/, "").split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-body font-bold text-lg leading-tight">{advisor.name}</h3>
                <p className="mt-1 font-body text-sm text-brand-indigo">{advisor.affiliation}</p>
                <p className="mt-1 font-body text-sm text-neutral-slate">{advisor.domain}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section bg="indigo">
        <ScrollReveal>
          <h2 className="text-white text-center">
            Talk to our team about a clinical partnership.
          </h2>
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
