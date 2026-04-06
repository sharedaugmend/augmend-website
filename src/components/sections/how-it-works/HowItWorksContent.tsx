"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Brain, RefreshCw, Clock, Settings2, Smartphone, Timer, ShieldCheck,
  Laptop, Lock, Server, FileCheck, UserCheck, Eye, AlertTriangle,
} from "lucide-react"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const systems = [
  { number: "01", name: "The Collection System: Anamnesis", status: "LIVE", statusColor: "bg-accent-lime", body: "Conducts structured patient assessments across clinical domains configured by your clinic. Sessions run before or between visits, on any device, without requiring provider time. Produces two simultaneous outputs: a clinical report and billing-optimized documentation." },
  { number: "02", name: "The Exercise System: Anodyne", status: "IN DEVELOPMENT", statusColor: "bg-accent-orange", body: "Closes the loop Anamnesis opens. A library of clinician-validated therapeutic exercises and educational modules, prescribed by your providers, personalized to what each patient disclosed, delivered on any device. Each completed module is a billable encounter." },
  { number: "03", name: "The Report System: Summa", status: "ROADMAP", statusColor: "bg-neutral-mist", body: "Transforms the longitudinal data Anamnesis and Anodyne generate into population-level intelligence: symptom trajectories, treatment response patterns, SDOH distribution, structured for value-based care contracts, payer audits, and clinical research." },
]

const sessionFeatures = [
  { icon: RefreshCw, title: "Adapts in real time", body: "The session adjusts based on what the patient discloses. Stable symptoms receive brief confirmation. Newly expressed issues receive structured depth collection, the kind of follow-through a time-pressured intake cannot provide." },
  { icon: Brain, title: "Remembers every session", body: "Each session begins where the last one ended. The system references what the patient has already shared, tracks what has changed, and never asks a patient to repeat themselves." },
  { icon: Settings2, title: "Configured by your clinic", body: "The clinical domains the system covers, and the depth to which it explores each one, are configured by your clinical team for your patient population." },
  { icon: Smartphone, title: "Any device", body: "Phone, tablet, or VR headset. Same structured outputs regardless of delivery platform. VR produces the highest disclosure rates and adds physiological signal that text-based intake cannot capture." },
  { icon: Timer, title: "15-45 minutes, no provider time consumed", body: "Sessions run with non-clinical staff assistance. No provider involvement until the report is ready for review." },
  { icon: ShieldCheck, title: "Safety monitoring throughout", body: "Every session includes structured safety screening. The system flags risk indicators at the moment of disclosure and routes alerts directly to the supervising clinician." },
]

const sessionTypes = [
  { title: "Intake Sessions (Sessions 1-3, 30-45 min)", body: "Each intake session covers configured clinical domains in breadth and depth, going deeper when significant issues appear, carrying uncovered domains forward to the next session. Default report: Expansive Consult." },
  { title: "Check-In Sessions (Ongoing, 10-15 min)", body: "Changes-focused. Medication updates, symptom shifts, new concerns. Follow-ups take 10-15 minutes because the baseline has already been established. Default report: Detailed Progress or Quick SOAP." },
  { title: "Between-Visit Sessions (Interval monitoring)", body: "Assessments, prescribed exercises, and standardized score tracking that run between appointments. Changes are summarized for the provider before the next visit. Supports Remote Therapeutic Monitoring billing." },
]

const reportTiers = [
  { title: "Quick SOAP", body: "For check-in sessions and brief follow-ups. Changes since last visit, medication updates, flagged items, current risk status. Reviewable in under a minute." },
  { title: "Detailed Progress", body: "For standard progress visits. Domain-level findings, symptom trajectory, medication table, standardized scores with trend lines, supporting patient quotes." },
  { title: "Expansive Consult", body: "For initial intake and insurance re-authorization. Complete biopsychosocial picture across all assessed domains. Written in the language of medical decision-making." },
]

const workflowSteps = [
  { number: "01", title: "Configure and launch", body: "Your clinical team configures the domain set and session parameters through the Admin Portal. Sessions are launched per patient." },
  { number: "02", title: "Review the pre-encounter brief", body: "Before each visit, the provider receives a structured summary: current session findings, risk flags, standardized score trends, and items flagged for attention. Reviewable in under a minute." },
  { number: "03", title: "Review, edit, and sign off", body: "After the visit, the provider reviews the full clinical report. Low-confidence claims are flagged for explicit review. The provider can accept, edit, or reject any element before sign-off." },
  { number: "04", title: "Billing documentation, ready to process", body: "The billing report is generated from the same session data, written in CPT-ready language, mapped to the codes the care supports. Your billing team receives documentation ready for processing from the first session." },
]

const safetyCards = [
  { title: "Continuous safety screening", body: "Every session includes structured safety screening from the first question to the last. A brief screen runs in every session; if anything is positive, deeper structured assessment follows. Risk alerts route directly to the supervising clinician in real time." },
  { title: "Evidence-linked claims", body: "Every finding in the clinical report is linked to the specific patient exchange that produced it. Providers can open the source transcript or audio for any claim. Uncertain items are explicitly marked for provider review." },
  { title: "Clinician-controlled at every step", body: "Sessions are launched by clinical staff, not patients. Domain configuration is controlled by the clinical team. Reports require explicit provider sign-off before finalization. No content enters the clinical record without the provider's review and approval." },
]

const deploymentFeatures = [
  { icon: UserCheck, text: "Non-clinical staff administer patient sessions" },
  { icon: Clock, text: "1-3 hours staff training for VR headset setup" },
  { icon: Server, text: "Encrypted cloud infrastructure on AWS" },
  { icon: Lock, text: "HIPAA-compliant, BAAs with all partners" },
  { icon: FileCheck, text: "SOC 2 Type 2 in progress" },
  { icon: Laptop, text: "Smartphone delivery requires no hardware" },
]

export default function HowItWorksContent() {
  return (
    <>
      {/* Hero - dark with background image */}
      <section className="relative overflow-hidden py-16 md:py-24 xl:py-32 pt-32!">
        <Image src="/images/illustrations/dots-indigo-background.png" alt="" fill className="absolute inset-0 object-cover z-0 pointer-events-none" aria-hidden />
        <div className="absolute inset-0 bg-[#0D0B3E]/70 z-[1]" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <nav className="mb-8 font-body text-sm text-white/50">
            <a href="/" className="hover:text-white/80 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/platform/how-it-works" className="hover:text-white/80 transition-colors">Platform</a>
            <span className="mx-2">/</span>
            <span className="text-white/80">How It Works</span>
          </nav>
          <ScrollReveal>
            <SectionLabel className="!text-accent-lime">The Platform</SectionLabel>
            <h1 className="mt-4 max-w-3xl text-white">One platform. Three systems. Designed to work in sequence.</h1>
            <p className="mt-6 max-w-2xl text-white/70">AugMend integrates into your clinic's workflow before, during, and between visits, capturing structured patient data, generating clinical and billing outputs, and personalizing care between appointments.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="ghost" href="/contact">See the Platform in Action</Button>
              <Button variant="ghost" href="/contact">Schedule a Conversation</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 1: Three Systems - light cards on cream bg */}
      <Section bg="cream" dots>
        <ScrollReveal>
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="mt-4 max-w-3xl">Three systems. Each one builds on what came before.</h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">AugMend is not a single tool. It is three systems, each with a distinct clinical job, designed to compound in value as they work together over time.</p>
        </ScrollReveal>
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {systems.map((sys, i) => (
            <motion.div key={sys.number} variants={staggerChild}>
              <div className="bg-brand-deep-space rounded-2xl p-8 h-full relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`h-2.5 w-2.5 rounded-full ${sys.statusColor}`} />
                  <span className="font-body font-bold text-xs uppercase tracking-[0.05em] text-white/60">{sys.status}</span>
                </div>
                <h3 className="font-body font-bold text-[20px] leading-tight text-white">{sys.number} – {sys.name}</h3>
                <p className="mt-4 text-white/70 text-[15px]">{sys.body}</p>
                {i < systems.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-neutral-mist text-2xl">&rarr;</div>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Section 2: Assessment - dark bg */}
      <section className="relative overflow-hidden py-12 md:py-16 xl:py-24">
        <Image src="/images/illustrations/dots-indigo-background.png" alt="" fill className="absolute inset-0 object-cover z-0 pointer-events-none" aria-hidden />
        <div className="absolute inset-0 bg-[#0D0B3E]/80 z-[1]" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <SectionLabel className="!text-accent-lime">The Assessment</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-white">A conversation designed for disclosure, not just documentation.</h2>
            <p className="mt-6 max-w-2xl text-white/70">The core of Anamnesis is a self-guided conversational AI session that patients complete on a phone, tablet, or VR headset. The session is not a form. It is an adaptive dialogue that follows the patient's disclosures, goes deeper when conditions warrant, and builds a progressively more complete clinical picture across visits.</p>
          </ScrollReveal>
          <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            {sessionFeatures.map((f) => (
              <motion.div key={f.title} variants={staggerChild} className="flex items-start gap-4">
                <f.icon className="h-6 w-6 text-accent-lime shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white">{f.title}</h4>
                  <p className="mt-2 text-white/70">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Session Types - cream bg */}
      <section className="relative overflow-hidden py-12 md:py-16 xl:py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <Image src="/images/illustrations/dots-cream-background.png" alt="" fill className="absolute inset-0 object-cover z-0 opacity-15 pointer-events-none" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <SectionLabel>Session Types</SectionLabel>
            <h2 className="mt-4 max-w-3xl">Intake. Check-in. Between visits. Each session has a job.</h2>
            <p className="mt-6 max-w-2xl text-neutral-slate">AugMend sessions are not all the same. The system adapts its scope and depth to the stage of care.</p>
          </ScrollReveal>
          <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            {sessionTypes.map((type) => (
              <motion.div key={type.title} variants={staggerChild}>
                <Card className="h-full border-t-2 border-t-brand-indigo">
                  <h4>{type.title}</h4>
                  <p className="mt-3 text-neutral-slate text-[15px]">{type.body}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Provider Workflow */}
      <Section bg="white" dots>
        <ScrollReveal>
          <SectionLabel>Provider Workflow</SectionLabel>
          <h2 className="mt-4 max-w-3xl">Every clinical decision stays with the provider.</h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">AugMend is not an autonomous clinical tool. It is infrastructure that prepares the ground for better provider decisions, and then gets out of the way.</p>
        </ScrollReveal>
        <motion.div className="mt-12 space-y-8 max-w-3xl" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {workflowSteps.map((step) => (
            <motion.div key={step.number} variants={staggerChild} className="flex gap-6">
              <span className="shrink-0 font-display font-bold text-4xl text-brand-indigo/20">{step.number}</span>
              <div>
                <h4>{step.title}</h4>
                <p className="mt-2 text-neutral-slate">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why VR */}
      <Section bg="cream" dots>
        <ScrollReveal>
          <SectionLabel>Why VR</SectionLabel>
          <h2 className="mt-4 max-w-3xl">Immersion Changes What Patients Share</h2>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden"><Image src="/images/illustrations/VR-experiences-adaptive-3.png" alt="VR immersive therapeutic environment" width={640} height={480} className="w-full h-auto object-cover" /></div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden"><Image src="/images/illustrations/VR-experiences-adaptive-2.png" alt="VR clinical assessment session" width={640} height={480} className="w-full h-auto object-cover" /></div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="mt-8 max-w-2xl space-y-4 text-neutral-slate">
            <p>Standard clinical intake happens in environments shaped by time pressure, social judgment, and institutional formality. VR removes those barriers. In a controlled immersive environment, patients engage longer, disclose more, and report greater comfort sharing sensitive information.</p>
            <p>AugMend's VR sessions adapt in real time to what the patient discloses. The conversational AI selects relevant follow-up inquiries based on individual responses rather than administering a fixed questionnaire.</p>
            <p>Preliminary results from our registered randomized controlled trial (NCT07336537, MIT.nano Immersion Lab) show VR consistently outperforming desktop questionnaires across usability, engagement, and overall experience domains.</p>
            <p>The same conversational AI runs on phone, tablet, and web. VR is the highest-fidelity option for patients and use cases where deeper engagement matters most.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="mt-12 bg-[#0D0B3E] rounded-2xl p-8">
            <p className="font-display italic text-lg text-white/90 leading-relaxed">"VR showed higher median ratings than desktop across several domains, with moderate-to-large effect sizes in Core and Overall Experience."</p>
            <p className="mt-3 font-body text-sm text-white/60">Murnane et al., Journal of Medical Extended Reality, 2026 (under peer review). NCT07336537.</p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Why Non-Human Avatars */}
      <Section bg="white" dots>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/illustrations/robot-avatar-blue.png" alt="AugMend non-human conversational avatar" width={640} height={640} className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <SectionLabel>The Interface</SectionLabel>
            <h2 className="mt-4 max-w-xl">Why a Non-Human Avatar</h2>
            <div className="mt-6 space-y-4 text-neutral-slate">
              <p>Decades of research in human-computer interaction show that people disclose more to agents they perceive as non-human. The absence of a human face removes the fear of judgment, social desirability bias, and the self-editing that shapes every clinical encounter.</p>
              <p>AugMend's conversational avatar is deliberately non-human. It creates psychological distance from the clinical relationship while maintaining the warmth and responsiveness of a guided conversation.</p>
              <p>In our trial data, AI-mediated responses showed significantly higher emotional intensity (p &lt; .001) and greater emotional diversity (p = .04) compared to equivalent responses in other modalities.</p>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="mt-12 bg-[#0D0B3E] rounded-2xl p-8">
            <p className="font-display italic text-lg text-white/90 leading-relaxed">"People disclose more when they believe they are interacting with a non-human agent, experiencing less fear of judgment and greater willingness to share sensitive information."</p>
            <p className="mt-3 font-body text-sm text-white/60">Lucas et al. (2014), Computers in Human Behavior, USC Institute for Creative Technologies</p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Output / Report Tiers */}
      <Section bg="cream" dots>
        <ScrollReveal>
          <SectionLabel>The Output</SectionLabel>
          <h2 className="mt-4 max-w-3xl">Three report tiers. One session. The right depth for every encounter.</h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">Every Anamnesis session generates two simultaneous outputs from the same session data: a clinical report structured for provider review, and billing documentation mapped to the CPT codes the encounter supports.</p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/illustrations/three-report-tiers.png" alt="Three report tiers: Quick SOAP, Detailed Progress, Expansive Consult" width={280} height={373} className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            {reportTiers.map((tier) => (
              <motion.div key={tier.title} variants={staggerChild}>
                <h4 className="text-lg">{tier.title}</h4>
                <p className="mt-2 text-neutral-slate text-[15px] leading-snug">{tier.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <ScrollReveal>
          <p className="mt-8 text-neutral-slate italic text-[15px] max-w-2xl">Every finding traces to the patient's own words. Open the source transcript for any flagged item. Uncertain claims are marked for provider review.</p>
        </ScrollReveal>
      </Section>

      {/* Safety */}
      <Section bg="deep-space">
        <ScrollReveal>
          <SectionLabel className="!text-accent-lime">Safety Design</SectionLabel>
          <h2 className="mt-4 text-white max-w-3xl">The AI suggests. The provider decides. Every time.</h2>
          <p className="mt-6 max-w-2xl text-white/70">AugMend does not interpret clinical data, render diagnoses, or generate treatment recommendations. Every session runs under the supervision of a licensed clinician. Every output requires provider review before it enters the clinical record.</p>
        </ScrollReveal>
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {safetyCards.map((card) => (
            <motion.div key={card.title} variants={staggerChild}>
              <div className="bg-white/[0.06] rounded-2xl p-8 border-l-2 border-l-accent-lime h-full">
                <h4 className="text-white">{card.title}</h4>
                <p className="mt-3 text-white/70 text-[15px]">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Deployment */}
      <Section bg="white" dots>
        <ScrollReveal>
          <SectionLabel>Deployment</SectionLabel>
          <h2 className="mt-4 max-w-3xl">Operational in weeks. No new infrastructure required.</h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">AugMend is designed to deploy into existing clinic workflows, not to replace them.</p>
        </ScrollReveal>
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          <motion.div variants={staggerChild}>
            <h4>Any device. Same outputs.</h4>
            <p className="mt-3 text-neutral-slate">CAS sessions run on a smartphone link, clinic tablet, or Meta Quest 3 VR headset. The clinical intelligence layer is identical regardless of delivery device.</p>
          </motion.div>
          <motion.div variants={staggerChild}>
            <h4>Plugs into what you run.</h4>
            <p className="mt-3 text-neutral-slate">HL7 FHIR-compatible interfaces. EHR integration via Redox, 2-3 week setup. No FDA clearance required. AugMend bills under CPT codes your practice already uses, from the first session.</p>
          </motion.div>
        </motion.div>
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {deploymentFeatures.map((f) => (
            <motion.div key={f.text} variants={staggerChild} className="flex items-start gap-4">
              <f.icon className="h-6 w-6 text-brand-indigo shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="font-body text-neutral-near-black">{f.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-indigo py-12 md:py-16 xl:py-24">
        <Image src="/images/illustrations/lines-of-text-dots.png" alt="" fill className="absolute inset-0 object-cover z-0 opacity-25 blur-[4px] pointer-events-none" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <h2 className="text-white text-center">See how it fits your workflow.</h2>
            <p className="mt-4 text-white/80 text-center max-w-2xl mx-auto font-body text-lg">Our clinical team will walk you through the platform in the context of your specialty, patient population, and existing tools.</p>
          </ScrollReveal>
          <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            <motion.div variants={staggerChild} className="bg-white rounded-2xl p-8">
              <h3 className="font-body font-bold text-[22px] text-neutral-near-black">Request a guided session</h3>
              <p className="mt-3 text-neutral-slate">A walkthrough of the platform built around your specialty and patient workflow.</p>
              <div className="mt-6"><Button variant="primary" href="/contact">Request a Demo &rarr;</Button></div>
            </motion.div>
            <motion.div variants={staggerChild} className="bg-white rounded-2xl p-8">
              <h3 className="font-body font-bold text-[22px] text-neutral-near-black">See a sample clinical report</h3>
              <p className="mt-3 text-neutral-slate">Review a de-identified report from an actual patient session: clinical tier and billing tier.</p>
              <div className="mt-6"><Button variant="primary" href="/contact">Request a Sample Report &rarr;</Button></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
