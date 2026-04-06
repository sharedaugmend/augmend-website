"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Activity, Brain, Stethoscope, HeartPulse, Ribbon } from "lucide-react"
import Link from "next/link"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const serviceLines = [
  { icon: Activity, label: "Pain Medicine" },
  { icon: Brain, label: "Behavioral Health" },
  { icon: Stethoscope, label: "Neurology" },
  { icon: HeartPulse, label: "Rehabilitation" },
  { icon: Ribbon, label: "Oncology Supportive Care" },
]

const complianceCards = [
  {
    items: ["HIPAA Compliant", "End-to-end encryption", "BAAs with all providers"],
  },
  {
    items: ["SOC 2 Type 2 (in progress)", "AWS hosted", "Quarterly access reviews"],
  },
  {
    items: ["No FDA Clearance Required", "21st Century Cures Act exempt", "Bills under existing codes"],
  },
]

const populationCards = [
  {
    title: "Population Management",
    body: "Identify high-risk patients before they escalate. Comorbidity clusters, SDOH burden, and treatment non-response patterns revealed across your chronic disease population \u2014 not at the point of acute admission, but across the full longitudinal record. Resource allocation, early intervention, and quality metric reporting grounded in structured evidence.",
  },
  {
    title: "Clinical Research Revenue",
    body: "A structured, longitudinal biopsychosocial dataset is precisely what clinical researchers need for investigator-initiated trials, pharma partnerships, and NIH grant submissions. AugMend\u2019s data architecture was designed from day one for patient stratification, phenotyping, and treatment response analysis. Your research programs inherit the infrastructure.",
  },
  {
    title: "Value-Based Care Performance",
    body: "SDOH documentation and longitudinal outcome tracking are foundational to shared savings contracts, ACO performance measurement, and CMMI model participation. AugMend structures this data at the point of patient contact \u2014 every session, every domain \u2014 producing audit-ready documentation payers and CMS require without a separate infrastructure build.",
  },
]

export default function ForHealthSystemsContent() {
  return (
    <>
      {/* Hero — dark */}
      <Section bg="deep-space" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-white/50">
          <a href="/" className="hover:text-white/80 transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-white/80">For Health Systems</span>
        </nav>

        <ScrollReveal>
          <SectionLabel className="!text-accent-lime">For Enterprise</SectionLabel>
          <h1 className="mt-4 max-w-3xl text-white">
            Clinical AI infrastructure that scales across service lines.
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Deploy across pain medicine, behavioral health, neurology, rehabilitation, and oncology supportive care — same platform, same data architecture, same billing pathway.
          </p>
        </ScrollReveal>
      </Section>

      {/* Service Lines */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>Service Lines</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            One architecture. Any specialty.
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {serviceLines.map((sl) => (
            <motion.div
              key={sl.label}
              variants={staggerChild}
              className="flex flex-col items-center gap-3 rounded-xl border border-neutral-border bg-surface-white p-6 text-center"
            >
              <sl.icon className="h-8 w-8 text-brand-indigo" strokeWidth={1.5} />
              <span className="font-body font-bold text-sm text-neutral-near-black">{sl.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal>
          <p className="mt-8 max-w-2xl text-neutral-slate">
            The domain library is configurable per service line. The assessment engine, report generation, billing documentation, and safety monitoring are the same infrastructure regardless of specialty. Deploy once, configure per clinic.
          </p>
        </ScrollReveal>
      </Section>

      {/* Integration */}
      <Section bg="cream">
        <ScrollReveal>
          <SectionLabel>Integration</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Plugs into what you already run.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/illustrations/EHR-Redox-AugMend.png"
              alt="Integration diagram: EHR to Redox to AugMend data flow"
              width={1280}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-8 max-w-2xl text-neutral-slate">
            HL7 FHIR-compatible interfaces. EHR integration via Redox. Open API for population health dashboards and analytics. AugMend creates net-new patient data and delivers it through standard interfaces into your existing infrastructure. Nothing needs to be removed for AugMend to be added.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {complianceCards.map((card, i) => (
            <motion.div key={i} variants={staggerChild}>
              <Card className="h-full">
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-indigo shrink-0" />
                      <span className="font-body text-neutral-near-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal>
          <div className="mt-8">
            <Link
              href="/trust-security"
              className="font-body font-bold text-[15px] text-brand-indigo hover:underline"
            >
              See full Trust &amp; Security details →
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* Population Intelligence */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>Population Intelligence</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            A proprietary clinical dataset your health system builds with every session.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            Every intake, check-in, interval assessment, and care engagement event contributes to a structured, longitudinal data asset that no competitor can replicate without equivalent time at scale. AugMend data is captured in structured format from the first session — SDOH, biopsychosocial complexity, symptom trajectories, treatment response patterns, care engagement — not extracted or cleaned retroactively from unstructured notes. That distinction matters for what the data can do.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {populationCards.map((card) => (
            <motion.div key={card.title} variants={staggerChild}>
              <Card className="h-full">
                <h4>{card.title}</h4>
                <p className="mt-3 text-neutral-slate">{card.body}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal>
          <p className="mt-8 max-w-2xl text-neutral-slate italic">
            The data compounds. The longer it runs, the more irreplaceable it becomes — as a clinical asset, a research resource, and a competitive advantage in payer contract negotiations.
          </p>
        </ScrollReveal>
      </Section>

      {/* CTA Bar with blurred background */}
      <section className="relative overflow-hidden bg-brand-indigo py-12 md:py-16 xl:py-24">
        <Image src="/images/illustrations/swirling-phrases-dots.png" alt="" fill className="absolute inset-0 object-cover z-0 opacity-30 blur-[4px] pointer-events-none" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
          <ScrollReveal>
            <h2 className="text-white">Schedule an enterprise conversation.</h2>
            <div className="mt-8 flex justify-center">
              <Button variant="ghost" href="/contact">Contact Our Team</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
