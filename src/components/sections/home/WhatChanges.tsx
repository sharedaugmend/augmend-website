"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import StatCard from "@/components/ui/StatCard"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

export default function WhatChanges() {
  return (
    <>
      <Section bg="warm-white" id="the-shift" dots>
        <ScrollReveal>
          <SectionLabel>The Shift</SectionLabel>
          <h2 className="mt-4">Know more. Document better. Bill accurately.</h2>
        </ScrollReveal>

        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4>Deeper data</h4>
              <p className="mt-3 text-neutral-slate">Conversational AI that adapts to each patient: going deeper where it matters, remembering what&#39;s been said, building on every prior session. Patients disclose what they wouldn&#39;t say in person. AI-mediated responses show significantly higher emotional intensity and diversity — not just more words, but more of what matters clinically.</p>
              <div className="mt-8">
                <StatCard value={<>&beta; = 10.40</>} label="Additional words per response vs. standard assessment (p = .020)" accent="indigo" />
              </div>
              <p className="mt-3 font-body text-sm text-brand-indigo">See the evidence ↓</p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4>Better documentation</h4>
              <p className="mt-3 text-neutral-slate">Three report tiers from the same session data. SOAP notes, medication tables, review of systems, standardized scores with trends. Every claim linked to the patient&#39;s own words.</p>
              <div className="mt-8">
                <StatCard value="< 1 min" label="Provider review time per pre-encounter brief" accent="lime" />
              </div>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4>Recovered revenue</h4>
              <p className="mt-3 text-neutral-slate">Billing documentation mapped to CPT codes at the complexity your care actually delivers. Multiple reimbursement pathways from a single session. No new billing infrastructure. No FDA clearance required.</p>
              <div className="mt-8">
                <StatCard value="Day 1" label="Revenue recovery under existing CPT codes from the first session" accent="orange" />
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Full-width visual break before Evidence */}
      <div className="w-full">
        <Image
          src="/images/illustrations/the-shift-woman-dots.png"
          alt="Point-cloud figure — the clinical picture emerging from structured data"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority={false}
        />
      </div>
    </>
  )
}
