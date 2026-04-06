"use client"

import { motion } from "framer-motion"
import Section from "@/components/layout/Section"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const cards = [
  {
    title: "See it in practice",
    body: "Request a guided session with our clinical team \u2014 patient session, clinical report, billing output, in the context of your specialty.",
    cta: "Request a Demo",
    href: "/contact",
  },
  {
    title: "Estimate your revenue impact",
    body: "Tell us your specialty, patient volume, and payer mix. We\u2019ll model the recovery together.",
    cta: "Request an Analysis",
    href: "/contact",
  },
  {
    title: "Talk to our team",
    body: "Not a sales call. A clinical conversation about your workflow.",
    cta: "Schedule",
    href: "/contact",
  },
]

export default function CtaBlock() {
  return (
    <Section bg="cream" id="cta" dots>
      <ScrollReveal>
        <div className="text-center">
          <span className="font-display font-semibold text-xl tracking-tight text-brand-indigo">
            AugMend Health
          </span>
          <p className="mt-2 font-body text-lg text-neutral-slate">
            Clinical Data Intelligence Platform for Chronic Conditions
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerParent}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={staggerChild}
            className="bg-white rounded-2xl p-8"
          >
            <h3 className="font-body font-bold text-[22px] text-neutral-near-black">
              {card.title}
            </h3>
            <p className="mt-3 font-body text-neutral-slate">
              {card.body}
            </p>
            <div className="mt-6 flex justify-center">
              <Button variant="primary" href={card.href}>
                {card.cta} &rarr;
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
