"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Smartphone, Clock, ShieldCheck, TrendingUp, Cable, Layers, Inbox, Key, ArrowLeftRight } from "lucide-react"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import StatCard from "@/components/ui/StatCard"
import Button from "@/components/ui/Button"
import WorkflowLoop from "@/components/ui/WorkflowLoop"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const workflowSteps = [
  { number: "01", title: "Configure and launch", body: "Your clinical team configures the domain set and session parameters. Sessions are launched per patient. Non-clinical staff set up the device, the patient completes the session independently." },
  { number: "02", title: "Review the pre-encounter brief", body: "Before each visit, the provider receives a structured summary: current session findings, risk flags, standardized score trends, and flagged items. Under a minute." },
  { number: "03", title: "Review, edit, and sign off", body: "After the visit, the provider reviews the full clinical report. Low-confidence claims are flagged. In-session notes can be reconciled: the system marks what was addressed and adjusts the next session plan accordingly." },
  { number: "04", title: "Billing documentation, ready to process", body: "The billing-ready report is generated from the same session data. Your billing team receives documentation ready for processing under existing codes from the first session." },
]

const deployFeatures = [
  { icon: Smartphone, text: "Phone, tablet, or VR headset, same outputs, any setting" },
  { icon: Clock, text: "15-45 minute self-guided sessions, no provider time consumed" },
  { icon: ShieldCheck, text: "Continuous AI safety monitoring with clinician-in-the-loop" },
  { icon: TrendingUp, text: "Longitudinal tracking, data compounds across visits" },
  { icon: Cable, text: "EHR integration available, in-basket, SSO, or full integration" },
  { icon: Layers, text: "Works alongside your existing digital health tools" },
]

export default function InPracticeContent() {
  return (
    <>
      {/* Hero — image on RIGHT edge-to-edge, text on LEFT */}
      <section className="relative overflow-hidden bg-surface-cream">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_40%]">
          <div className="pt-28 pb-16 md:pt-32 md:pb-24 xl:pb-32 px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-10">
            <nav className="mb-8 font-body text-sm text-neutral-slate">
              <Link href="/" className="hover:text-brand-indigo transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-near-black">In Practice</span>
            </nav>
            <ScrollReveal>
              <SectionLabel>How It Works In Practice</SectionLabel>
              <h1 className="mt-4 max-w-xl">For patients, providers, and practice leaders: one platform that serves all three.</h1>
            </ScrollReveal>
          </div>
          <div className="relative hidden lg:block min-h-[450px]">
            <Image src="/images/illustrations/the-shift-woman-dots.png" alt="Patient data visualization" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Audience tabs */}
      <div className="sticky top-16 z-30 bg-surface-white/90 backdrop-blur-lg border-b border-neutral-border">
        <div className="mx-auto max-w-[1280px] px-6 flex gap-1">
          {[
            { label: "For Patients", id: "patients" },
            { label: "For Providers", id: "providers" },
            { label: "For Practice Leaders", id: "leaders" },
          ].map((tab) => (
            <a key={tab.id} href={`#${tab.id}`} className="px-4 py-3 font-body font-bold text-sm text-neutral-slate hover:text-brand-indigo transition-colors border-b-2 border-transparent hover:border-brand-indigo">
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/* ============ FOR PATIENTS ============ */}
      <section className="relative overflow-hidden bg-surface-cream" id="patients">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_40%]">
          <div className="py-16 md:py-20 xl:py-24 px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-10">
            <ScrollReveal>
              <SectionLabel>For Patients</SectionLabel>
              <h2 className="mt-4">A conversation designed for disclosure by medical professionals, with safety at the forefront.</h2>
              <p className="mt-6 text-neutral-slate">
                Patients complete self-guided AI sessions independently before visits, between visits, or during dedicated in-clinic time. The conversation adapts to what the patient discloses, goes deeper where conditions warrant, and carries forward everything said in prior sessions.
              </p>
              <p className="mt-4 text-neutral-slate">
                Sensitive information is shared in a non-judgmental environment. Between visits, patients complete provider-prescribed behavioral exercises for managing pain, stress, and emotional regulation personalized to what they disclosed.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-8 bg-brand-deep-space rounded-2xl p-6">
                <p className="font-display italic text-base text-white/90">
                  &ldquo;I&apos;ve not yet seen a clinical immersive experience this enjoyable, professional, or advanced. [...] There was great care taken to work with clinicians to create these experiences.&rdquo;
                </p>
                <p className="mt-2 font-body text-xs text-white/50">Beth Savoldelli, XR Impact Network</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative hidden lg:block min-h-[500px]">
            <Image src="/images/illustrations/Person's Profile Mar 27.png" alt="Patient profile visualization" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* ============ FOR PROVIDERS ============ */}
      <Section bg="white" dots id="providers">
        <ScrollReveal>
          <SectionLabel>Provider Workflow</SectionLabel>
          <h2 className="mt-4 max-w-3xl">Every clinical decision stays with the provider.</h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">We put providers at the center to meet their needs by collecting and presenting information that supports decision making and care delivery.</p>
        </ScrollReveal>

        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {workflowSteps.map((s) => (
            <motion.div key={s.number} variants={staggerChild}>
              <Card className="h-full">
                <span className="font-display font-bold text-3xl text-brand-indigo/20">{s.number}</span>
                <h4 className="mt-2">{s.title}</h4>
                <p className="mt-2 text-neutral-slate text-[15px]">{s.body}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* What you receive — NO duplicate report image, cards only */}
        <ScrollReveal>
          <h3 className="mt-16 font-body font-bold text-[22px]">What you receive</h3>
        </ScrollReveal>

        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          <motion.div variants={staggerChild}>
            <Card className="h-full border-t-2 border-t-brand-indigo">
              <h4>Detailed Intake Report</h4>
              <p className="mt-2 text-neutral-slate text-[15px]">Complete biopsychosocial picture for new patients. Supports documentation complexity for higher-level CPT coding.</p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full border-t-2 border-t-brand-indigo">
              <h4>SOAP Note</h4>
              <p className="mt-2 text-neutral-slate text-[15px]">For follow-ups. Changes since last visit, medication updates, flagged items, risk status. Provider selects format per encounter.</p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full border-t-2 border-t-brand-indigo">
              <h4>Billing-Ready Report</h4>
              <p className="mt-2 text-neutral-slate text-[15px]">CPT-ready language, mapped to codes the care supports. Your billing team receives documentation ready for processing.</p>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4 className="text-base">Evidence-linked claims</h4>
              <p className="mt-2 text-neutral-slate text-[15px]">Every finding traces to the patient's own words. Uncertain items are flagged. Trust confident summaries. Verify flagged ones.</p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4 className="text-base">Cross-session intelligence</h4>
              <p className="mt-2 text-neutral-slate text-[15px]">The system tracks what has been covered, what changed, and what the provider directed. Follow-ups build; they don't restart.</p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4 className="text-base">Confidence markers</h4>
              <p className="mt-2 text-neutral-slate text-[15px]">Low-confidence claims are flagged for review. Patient quotes available for sensitive items. The provider has the final say.</p>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* ============ FOR PRACTICE LEADERS ============ */}
      {/* Economics — two-column: text left, stats right */}
      <Section bg="cream" dots id="leaders">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          <div>
            <ScrollReveal>
              <SectionLabel>For Practice Leaders</SectionLabel>
              <h2 className="mt-4">Your clinic is not under-delivering care. It is under-documenting the complexity your providers already manage.</h2>
              <p className="mt-6 text-neutral-slate">Every visit where biopsychosocial complexity goes unrecorded is a visit billed below the care actually delivered. AugMend closes that gap from the first session.</p>
            </ScrollReveal>

            <ScrollReveal>
              <h3 className="mt-10 font-body font-bold text-[22px]">The economics</h3>
              <p className="mt-4 text-neutral-slate">Every session generates reimbursable documentation under CPT codes your billing team already uses. Multiple revenue pathways from a single patient interaction: E/M uplift, behavioral health assessment, chronic care management, all billable by appropriate professionals. No new billing infrastructure. No new codes.</p>
            </ScrollReveal>
          </div>

          {/* Stat cards — stacked on right */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <StatCard value="Multiple" label="Reimbursement pathways per session" description="E/M uplift, behavioral health codes, and chronic care documentation, stacked from one interaction" accent="indigo" />
              <StatCard value="Day 1" label="Revenue recovery begins" description="Bills under existing CPT codes from the first session" accent="lime" />
              <StatCard value="$0" label="New billing infrastructure required" description="Your codes. Your payers. Your existing revenue cycle." accent="orange" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Deployment — dark bg */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-brand-deep-space">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/images/illustrations/dots-indigo-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <SectionLabel dark>Deployment</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-white">Non-clinical staff run it. Providers review it. Revenue follows.</h2>
            <p className="mt-6 max-w-2xl text-white/70">No additional clinical FTEs required. Non-clinical staff initiate patient sessions, set up the device, onboard the patient, and step away. The patient completes the session independently.</p>
          </ScrollReveal>
          <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            {deployFeatures.map((f) => (
              <motion.div key={f.text} variants={staggerChild} className="flex items-start gap-4">
                <f.icon className="h-6 w-6 text-accent-lime shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="font-body text-white">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Workflow loop diagram */}
          <ScrollReveal>
            <div className="mt-12">
              <WorkflowLoop variant="dark" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust & Data Safety — white bg */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-white">
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <SectionLabel>Trust and Data Safety</SectionLabel>
                <p className="mt-4 max-w-2xl text-neutral-slate">
                  AugMend is designed for clinical environments where data governance matters. Our AI is designed with medical providers prioritizing safety with independent models tailored for that purpose.
                </p>
                <p className="mt-3 font-body text-sm text-neutral-slate">HIPAA compliant. SOC 2 for integrations. End-to-end encryption. BAAs with all partners. AWS infrastructure.</p>
              </div>
              <div className="flex-shrink-0">
                <Image src="/images/logos/HIPAA-compliant-logo.png" alt="HIPAA Compliant" width={120} height={120} className="h-24 w-auto object-contain" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Integration — dark bg */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-brand-deep-space">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/images/illustrations/dots-indigo-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <SectionLabel dark>Integration</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-white">Connects to the systems you already use.</h2>
            <p className="mt-6 max-w-2xl text-white/70">AugMend integrates into your existing clinical infrastructure. Three integration tiers depending on your environment:</p>
          </ScrollReveal>

          <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            <motion.div variants={staggerChild}>
              <div className="bg-white/[0.07] rounded-xl p-6 border border-white/[0.06] h-full text-center">
                <Inbox className="h-8 w-8 text-accent-lime mx-auto" strokeWidth={1.5} />
                <h4 className="mt-3 text-white">In-basket delivery</h4>
                <p className="mt-2 text-white/70 text-[15px]">Reports delivered directly to the provider&apos;s EHR inbox. No workflow change required.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerChild}>
              <div className="bg-white/[0.07] rounded-xl p-6 border border-white/[0.06] h-full text-center">
                <Key className="h-8 w-8 text-accent-lime mx-auto" strokeWidth={1.5} />
                <h4 className="mt-3 text-white">SSO authentication</h4>
                <p className="mt-2 text-white/70 text-[15px]">Single sign-on for provider and staff access. Unified login, no separate credentials.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerChild}>
              <div className="bg-white/[0.07] rounded-xl p-6 border border-white/[0.06] h-full text-center">
                <ArrowLeftRight className="h-8 w-8 text-accent-lime mx-auto" strokeWidth={1.5} />
                <h4 className="mt-3 text-white">Full EHR integration</h4>
                <p className="mt-2 text-white/70 text-[15px]">Bidirectional data exchange. Patient records, session data, and documentation flow into and out of your system of record.</p>
              </div>
            </motion.div>
          </motion.div>

          <ScrollReveal>
            <div className="mt-8 text-center">
              <Link href="/platform/how-it-works" className="font-body font-bold text-accent-lime hover:underline text-lg">Learn how the technology works &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
