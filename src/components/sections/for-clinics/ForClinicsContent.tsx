"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Smartphone, Clock, ShieldCheck, TrendingUp, Cable, Layers } from "lucide-react"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import StatCard from "@/components/ui/StatCard"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const features = [
  { icon: Smartphone, text: "Phone, tablet, or VR headset \u2014 same outputs, any setting" },
  { icon: Clock, text: "15\u201345 minute self-guided sessions, no provider time consumed" },
  { icon: ShieldCheck, text: "Continuous AI safety monitoring with clinician-in-the-loop" },
  { icon: TrendingUp, text: "Longitudinal tracking \u2014 data compounds across visits" },
  { icon: Cable, text: "EHR integration via Redox \u2014 2\u20133 week setup" },
  { icon: Layers, text: "Works alongside your existing digital health tools" },
]

export default function ForClinicsContent() {
  return (
    <>
      <Section bg="white" padding="large" className="pt-32!" dots>
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">For Clinics</span>
        </nav>
        <ScrollReveal>
          <SectionLabel>For Practice Leaders</SectionLabel>
          <h1 className="mt-4 max-w-3xl">Your clinic isn&#39;t under-delivering care. It&#39;s under-documenting the complexity your providers already manage.</h1>
          <p className="mt-6 max-w-2xl text-neutral-slate">It&#39;s not the providers who fall short \u2014 it&#39;s the system they work within. Every visit where biopsychosocial complexity goes unrecorded is a visit billed below the care actually delivered. AugMend closes that gap, from the first session forward.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">Schedule a Conversation</Button>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="cream" dots>
        <ScrollReveal>
          <SectionLabel>The Economics</SectionLabel>
          <h2 className="mt-4 max-w-3xl">Revenue you&#39;re already earning \u2014 just not capturing.</h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">Every AugMend session generates reimbursable documentation under CPT codes your billing team already uses. Multiple revenue pathways from a single patient interaction \u2014 E/M office codes, behavioral health assessment, chronic care management, all billable by appropriate professionals using one platform. No new billing infrastructure. No new codes needed.</p>
        </ScrollReveal>
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          <motion.div variants={staggerChild}><StatCard value="Multiple" label="Reimbursement pathways per session" description="E/M uplift, behavioral health codes, and chronic care documentation \u2014 stacked from one interaction" accent="indigo" /></motion.div>
          <motion.div variants={staggerChild}><StatCard value="Day 1" label="Revenue recovery begins" description="Bills under existing CPT codes from the first session" accent="lime" /></motion.div>
          <motion.div variants={staggerChild}><StatCard value="$0" label="New billing infrastructure required" description="Your codes. Your payers. Your existing revenue cycle." accent="orange" /></motion.div>
        </motion.div>
      </Section>

      <Section bg="white" dots>
        <ScrollReveal>
          <SectionLabel>Deployment</SectionLabel>
          <h2 className="mt-4 max-w-3xl">Non-clinical staff run it. Providers review it. Revenue follows.</h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">No additional clinical FTEs required. Non-clinical staff administer patient sessions. The system generates reports and billing documentation your providers review before the encounter, your billing team processes the codes. AugMend integrates into the workflow you already have.</p>
        </ScrollReveal>
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {features.map((feature) => (
            <motion.div key={feature.text} variants={staggerChild} className="flex items-start gap-4">
              <feature.icon className="h-6 w-6 text-brand-indigo shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="font-body text-neutral-near-black">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <ScrollReveal>
          <div className="mt-12 rounded-2xl overflow-hidden">
            <Image src="/images/illustrations/who-runs-it-flow.png" alt="Deployment flow \u2014 non-clinical staff to patient to provider review" width={1280} height={400} className="w-full h-auto object-cover" />
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="warm-white" dots>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <ScrollReveal>
            <SectionLabel>Over Time</SectionLabel>
            <h2 className="mt-4 max-w-3xl">A care relationship that compounds.</h2>
            <p className="mt-6 text-neutral-slate">Every session \u2014 intake, check-in, interval assessment, prescribed exercise \u2014 adds to a longitudinal patient record. Symptom trajectories, treatment response patterns, psychosocial changes, exercise engagement \u2014 visible across visits and between them. The system remembers what each patient said, tracks what changed, and presents what the provider needs before the next encounter. The longer you use it, the more complete the clinical picture and the more defensible the documentation.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/illustrations/data-compounds-chart.png" alt="Data compounding over sessions \u2014 longitudinal clinical picture growing richer" width={320} height={560} className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
        </div>
        {/* Mobile: show image below */}
        <ScrollReveal className="lg:hidden mt-8">
          <div className="rounded-2xl overflow-hidden">
            <Image src="/images/illustrations/data-compounds-chart.png" alt="Data compounding over sessions" width={640} height={400} className="w-full h-auto object-cover" />
          </div>
        </ScrollReveal>
      </Section>

      {/* Quote */}
      <Section bg="white" dots>
        <ScrollReveal>
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="font-display italic text-xl md:text-2xl text-neutral-near-black leading-relaxed">
              &ldquo;I wasn&#39;t a believer in VR until I tried your technology.&rdquo;
            </p>
            <cite className="mt-4 block font-body text-sm not-italic text-neutral-slate">
              \u2014 Anesthesiologist, Boston Health System
            </cite>
          </blockquote>
        </ScrollReveal>
      </Section>

      {/* CTA Bar with blurred background */}
      <section className="relative overflow-hidden bg-brand-indigo py-12 md:py-16 xl:py-24">
        <Image src="/images/illustrations/swirling-phrases-dots.png" alt="" fill className="absolute inset-0 object-cover z-0 opacity-30 blur-[4px] pointer-events-none" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
          <ScrollReveal>
            <h2 className="text-white">Model the revenue impact for your clinic.</h2>
            <div className="mt-8 flex justify-center">
              <Button variant="ghost" href="/contact">Schedule a Conversation</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
