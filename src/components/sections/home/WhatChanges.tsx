"use client"

import { motion } from "framer-motion"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import StatCard from "@/components/ui/StatCard"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

export default function WhatChanges() {
  return (
    <>
      <section id="the-shift" className="relative overflow-hidden bg-surface-white py-12 md:py-16 xl:py-24">
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <SectionLabel>The Shift</SectionLabel>
            <h2 className="mt-4">Know more. Document better. Bill comprehensively.</h2>
          </ScrollReveal>

          <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            <motion.div variants={staggerChild}>
              <Card className="h-full">
                <h4>Deeper data</h4>
                <p className="mt-3 text-neutral-slate">Patients disclose what they would not say in a rushed face-to-face visit. The system captures biopsychosocial complexity across sessions, going deeper where it matters, carrying forward everything that has been said.</p>
                <div className="mt-8">
                  <StatCard value="60-80%" label="Of patients withhold medically relevant information in standard visits" accent="indigo" />
                </div>
                <p className="mt-3 font-body text-sm text-brand-indigo">See the evidence ↓</p>
              </Card>
            </motion.div>
            <motion.div variants={staggerChild}>
              <Card className="h-full">
                <h4>Better documentation</h4>
                <p className="mt-3 text-neutral-slate">Every session produces a clinical report for the provider and a billing-ready report for revenue cycle management. Detailed intake reports for new patients. SOAP notes for follow-ups. Medication tables, standardized scores with trends, patient quotes for sensitive items. Every claim linked to the patient's own words.</p>
                <div className="mt-8">
                  <StatCard value="Under 1 min" label="Provider review time per pre-encounter brief" accent="lime" />
                </div>
              </Card>
            </motion.div>
            <motion.div variants={staggerChild}>
              <Card className="h-full">
                <h4>Recovered revenue</h4>
                <p className="mt-3 text-neutral-slate">Billing documentation mapped to CPT codes at the complexity your care actually delivers. Multiple reimbursement pathways from a single session. No new billing infrastructure. Bills under existing codes from the first session.</p>
                <div className="mt-8">
                  <StatCard value="Day 1" label="Revenue recovery under existing CPT codes" accent="orange" />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </>
  )
}
