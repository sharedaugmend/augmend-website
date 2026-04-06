"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Brain,
  Gamepad2,
  BarChart3,
  RefreshCw,
  Clock,
  Settings2,
  Smartphone,
  Timer,
  ShieldCheck,
  Laptop,
  Cable,
  Lock,
  Server,
  FileCheck,
  UserCheck,
} from "lucide-react"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

/* ------------------------------------------------------------------ */
/*  Section 1: The Three Systems                                      */
/* ------------------------------------------------------------------ */

const systems = [
  {
    number: "01",
    name: "Anamnesis: The Listening System",
    status: "LIVE",
    statusColor: "bg-accent-lime",
    body: "Conducts structured patient assessments across clinical domains configured by your clinic. Sessions run before or between visits — on any device, without requiring provider time. Produces two simultaneous outputs: a clinical report and billing-optimized documentation.",
  },
  {
    number: "02",
    name: "Anodyne: The Response System",
    status: "IN DEVELOPMENT",
    statusColor: "bg-accent-orange",
    body: "Closes the loop Anamnesis opens. A library of clinician-validated therapeutic exercises and educational modules — prescribed by your providers, personalized to what each patient disclosed, delivered on any device. Each completed module is a billable encounter.",
  },
  {
    number: "03",
    name: "Summa: The Intelligence System",
    status: "ROADMAP",
    statusColor: "bg-neutral-mist",
    body: "Transforms the longitudinal data Anamnesis and Anodyne generate into population-level intelligence — symptom trajectories, treatment response patterns, SDOH distribution — structured for value-based care contracts, payer audits, and clinical research.",
  },
]

/* ------------------------------------------------------------------ */
/*  Section 2: The Patient Session                                    */
/* ------------------------------------------------------------------ */

const sessionFeatures = [
  {
    icon: RefreshCw,
    title: "Adapts in real time",
    body: "The session adjusts based on what the patient discloses. Stable symptoms receive brief confirmation. Newly expressed issues receive structured depth collection — the kind of follow-through a time-pressured intake cannot provide.",
  },
  {
    icon: Brain,
    title: "Remembers every session",
    body: "Each session begins where the last one ended. The system references what the patient has already shared, tracks what has changed, and never asks a patient to repeat themselves. A patient seen for the twelfth time is treated as someone who has been known for twelve sessions.",
  },
  {
    icon: Settings2,
    title: "Configured by your clinic",
    body: "The clinical domains the system covers — and the depth to which it explores each one — are configured by your clinical team for your patient population. Pain medicine, behavioral health, neurology, oncology supportive care: the assessment architecture changes. The underlying system does not.",
  },
  {
    icon: Smartphone,
    title: "Any device",
    body: "Phone, tablet, or VR headset. Same structured outputs regardless of delivery platform. VR produces the highest disclosure rates and adds physiological signal — heart rate, skin conductance — that text-based intake cannot capture. The platform does not require it.",
  },
  {
    icon: Timer,
    title: "15–45 minutes, no provider time consumed",
    body: "Sessions run with non-clinical staff assistance. No provider involvement until the report is ready for review. A 15-minute check-in and a 45-minute initial intake share the same infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Safety monitoring throughout",
    body: "Every session includes structured safety screening. The system flags risk indicators at the moment of disclosure and routes alerts directly to the supervising clinician before the encounter begins. Safety questions override session time limits — if a safety screen is active, the session completes it regardless.",
  },
]

/* ------------------------------------------------------------------ */
/*  Section 3: Session Types                                          */
/* ------------------------------------------------------------------ */

const sessionTypes = [
  {
    title: "Intake Sessions (Sessions 1–3 · 30–45 min)",
    body: "The first phase of care. Each intake session covers configured clinical domains in breadth and depth — going deeper when significant issues appear, carrying uncovered domains forward to the next session. The system recommends transition to check-in mode once the clinical picture is sufficiently complete. Your clinical team confirms the transition. Default report: Expansive Consult.",
  },
  {
    title: "Check-In Sessions (Ongoing · 10–15 min)",
    body: "Changes-focused. Medication updates, symptom shifts, new concerns. The system re-opens a domain if something new appears, applies the same depth collection when warranted, and marks what has been addressed. Follow-ups take 10–15 minutes because the baseline has already been established. Patients are not asked to start over. Default report: Detailed Progress or Quick SOAP.",
  },
  {
    title: "Between-Visit Sessions (Interval monitoring)",
    body: "Assessments, prescribed exercises, and standardized score tracking that run between appointments — keeping the clinical record current between encounters. Changes are summarized for the provider before the next visit. Interval monitoring also supports Remote Therapeutic Monitoring billing for qualifying practices. Contributes to next session pre-encounter brief.",
  },
]

/* ------------------------------------------------------------------ */
/*  Section 4: Report Tiers                                           */
/* ------------------------------------------------------------------ */

const reportTiers = [
  {
    title: "Quick SOAP",
    body: "For check-in sessions and brief follow-ups. Changes since last visit, medication updates, flagged items, current risk status. Reviewable in under a minute.",
  },
  {
    title: "Detailed Progress",
    body: "For standard progress visits. Domain-level findings, symptom trajectory, medication table, standardized scores with trend lines, supporting patient quotes for sensitive claims.",
  },
  {
    title: "Expansive Consult",
    body: "For initial intake and insurance re-authorization. Complete biopsychosocial picture across all assessed domains. Written in the language of medical decision-making. Supports the documentation complexity that higher-level CPT coding requires.",
  },
]

/* ------------------------------------------------------------------ */
/*  Section 5: Provider Workflow                                      */
/* ------------------------------------------------------------------ */

const workflowSteps = [
  {
    number: "01",
    title: "Configure and launch",
    body: "Your clinical team configures the domain set and session parameters for your patient population through the Admin Portal. Sessions are launched per patient — your staff generates access credentials and the patient completes the session independently. No provider time is consumed during the session itself.",
  },
  {
    number: "02",
    title: "Review the pre-encounter brief",
    body: "Before each visit, the provider receives a structured summary: current session findings, risk flags, standardized score trends, and items the session flagged for attention. Reviewable in under a minute. The appointment begins with context the provider would otherwise spend the visit building.",
  },
  {
    number: "03",
    title: "Review, edit, and sign off",
    body: "After the visit, the provider reviews the full clinical report. Low-confidence claims are flagged for explicit review. The provider can accept, edit, or reject any element before sign-off. In-session notes — from scribes or provider dictation — can be pasted in and reconciled automatically: the system marks what was addressed in person, adjusts what to cover in the next session, and updates the plan accordingly.",
  },
  {
    number: "04",
    title: "Billing documentation, ready to process",
    body: "The billing report is generated from the same session data as the clinical report — written in CPT-ready language, mapped to the codes the care supports. It does not need to be derived from the clinical note. Your billing team receives documentation ready for processing under existing codes, from the first session.",
  },
]

/* ------------------------------------------------------------------ */
/*  Section 6: Safety Cards                                           */
/* ------------------------------------------------------------------ */

const safetyCards = [
  {
    title: "Continuous safety screening",
    body: "Every session includes structured safety screening from the first question to the last. The system does not clear patients — it flags indicators. A brief screen runs in every session; if anything is positive, deeper structured assessment follows. Safety questions override session time limits. Risk alerts route directly to the supervising clinician in real time.",
  },
  {
    title: "Evidence-linked claims",
    body: "Every finding in the clinical report is linked to the specific patient exchange that produced it. Providers can open the source transcript or audio for any claim. Uncertain or low-confidence items are explicitly marked for provider review — they are not presented as established findings. The provenance of every claim is traceable.",
  },
  {
    title: "Clinician-controlled at every step",
    body: "Sessions are launched by clinical staff, not patients. Domain configuration is controlled by the clinical team. Reports require explicit provider sign-off before finalization. No content from a session enters the clinical record without the provider\u2019s review and approval. The AI exposes. The clinician decides.",
  },
]

/* ------------------------------------------------------------------ */
/*  Section 7: Deployment Features                                    */
/* ------------------------------------------------------------------ */

const deploymentFeatures = [
  { icon: UserCheck, text: "Non-clinical staff administer patient sessions" },
  { icon: Clock, text: "1–3 hours staff training for VR headset setup" },
  { icon: Server, text: "Encrypted cloud infrastructure on AWS" },
  { icon: Lock, text: "HIPAA-compliant · BAAs with all partners" },
  { icon: FileCheck, text: "SOC 2 Type 2 in progress" },
  { icon: Laptop, text: "Smartphone delivery requires no hardware" },
]

/* ================================================================== */
/*  Component                                                         */
/* ================================================================== */

export default function HowItWorksContent() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-surface-cream py-16 md:py-24 xl:py-32 pt-32!">
        <Image src="/images/illustrations/how-it-works-page-starter.png" alt="" fill className="absolute inset-0 object-cover z-0 opacity-20 pointer-events-none" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/platform/how-it-works" className="hover:text-brand-indigo transition-colors">Platform</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">How It Works</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>The Platform</SectionLabel>
          <h1 className="mt-4 max-w-3xl">
            One platform. Three systems. Designed to work in sequence.
          </h1>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            AugMend integrates into your clinic&#39;s workflow before, during, and between visits — capturing structured patient data, generating clinical and billing outputs, and personalizing care between appointments. Every component is configured by your clinical team. Every decision stays with your providers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">
              See the Platform in Action
            </Button>
            <Button variant="secondary" href="/contact">
              Schedule a Conversation
            </Button>
          </div>
        </ScrollReveal>
        </div>
      </section>

      {/* ---- Section 1: The Three Systems ---- */}
      <Section bg="white" dots>
        <ScrollReveal>
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Three systems. Each one builds on what came before.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            AugMend is not a single tool. It is three systems — each with a distinct clinical job — designed to compound in value as they work together over time. Anamnesis captures the clinical picture. Anodyne closes the loop on it. Summa transforms what accumulates into population-level intelligence. Each system is operational independently. Together, they produce something no single tool can replicate.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {systems.map((sys, i) => (
            <motion.div key={sys.number} variants={staggerChild}>
              <Card className="h-full relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`h-2.5 w-2.5 rounded-full ${sys.statusColor}`} />
                  <span className="font-body font-bold text-xs uppercase tracking-[0.05em] text-neutral-slate">
                    {sys.status}
                  </span>
                </div>
                <h3 className="font-body font-bold text-[22px] leading-tight">
                  {sys.number} — {sys.name}
                </h3>
                <p className="mt-4 text-neutral-slate">{sys.body}</p>
                {i < systems.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-neutral-mist text-2xl">
                    →
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ---- Section 2: The Patient Session ---- */}
      <Section bg="cream">
        <ScrollReveal>
          <SectionLabel>The Assessment</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            A conversation designed for disclosure — not just documentation.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            The core of Anamnesis is a self-guided conversational AI session that patients complete on a phone, tablet, or VR headset — independently, before or between clinic visits. The session is not a form. It is an adaptive dialogue that follows the patient&#39;s disclosures, goes deeper when conditions warrant, and builds a progressively more complete clinical picture across visits.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {sessionFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerChild}
              className="flex items-start gap-4"
            >
              <feature.icon className="h-6 w-6 text-brand-indigo shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4>{feature.title}</h4>
                <p className="mt-2 text-neutral-slate">{feature.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ---- Section 3: Session Types ---- */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>Session Types</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Intake. Check-in. Between visits. Each session has a job.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            AugMend sessions are not all the same. The system adapts its scope and depth to the stage of care — running a thorough adaptive intake across early sessions, shifting to focused check-ins as the clinical picture fills in, and continuing between appointments to keep the record current. Your clinical team controls when each session type is used and what it covers.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {sessionTypes.map((type) => (
            <motion.div key={type.title} variants={staggerChild}>
              <Card className="h-full border-t-2 border-t-brand-indigo">
                <h4>{type.title}</h4>
                <p className="mt-3 text-neutral-slate">{type.body}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ---- Section 4: The Clinical Report ---- */}
      <Section bg="cream">
        <ScrollReveal>
          <SectionLabel>The Output</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Three report tiers. One session. The right depth for every encounter.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            Every Anamnesis session generates two simultaneous outputs from the same session data: a clinical report structured for provider review, and billing documentation mapped to the CPT codes the encounter supports. The clinical report is available in three tiers — selected by the provider based on the type of encounter. Your note reflects the depth of care actually delivered.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mock report */}
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/illustrations/three-report-tiers.png"
                alt="Three report tiers — Quick SOAP, Detailed Progress, Expansive Consult"
                width={640}
                height={853}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Report tiers */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {reportTiers.map((tier) => (
              <motion.div key={tier.title} variants={staggerChild}>
                <h4>{tier.title}</h4>
                <p className="mt-2 text-neutral-slate">{tier.body}</p>
              </motion.div>
            ))}
            <motion.p variants={staggerChild} className="text-neutral-slate italic text-[15px]">
              Every finding traces to the patient&#39;s own words. Open the source transcript for any flagged item. Uncertain claims are marked for provider review — not presented as settled conclusions.
            </motion.p>
          </motion.div>
        </div>
      </Section>

      {/* ---- Section 5: Provider Workflow ---- */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>Provider Workflow</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Every clinical decision stays with the provider. The system handles what it can.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            AugMend is not an autonomous clinical tool. It is infrastructure that prepares the ground for better provider decisions — and then gets out of the way. The provider controls what the system covers, reviews what it produces, and signs off before anything enters the clinical record.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 space-y-8 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {workflowSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerChild}
              className="flex gap-6"
            >
              <div className="shrink-0 flex items-start justify-center">
                <span className="font-display font-bold text-4xl text-brand-indigo/20">
                  {step.number}
                </span>
              </div>
              <div>
                <h4>{step.title}</h4>
                <p className="mt-2 text-neutral-slate">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ---- Section 6: Safety ---- */}
      <Section bg="deep-space">
        <ScrollReveal>
          <SectionLabel className="!text-accent-lime">Safety Design</SectionLabel>
          <h2 className="mt-4 text-white max-w-3xl">
            The AI guides. The provider decides. Every time.
          </h2>
          <p className="mt-6 max-w-2xl text-white/70">
            AugMend does not interpret clinical data, render diagnoses, or generate treatment recommendations. Every session runs under the supervision of a licensed clinician. Every output requires provider review before it enters the clinical record. The system&#39;s job is to collect and structure — not to conclude.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {safetyCards.map((card) => (
            <motion.div key={card.title} variants={staggerChild}>
              <div className="bg-white/[0.06] rounded-2xl p-8 border-l-2 border-l-accent-lime h-full">
                <h4 className="text-white">{card.title}</h4>
                <p className="mt-3 text-white/70">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ---- Section 7: Deployment ---- */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>Deployment</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Operational in weeks. No new infrastructure required.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            AugMend is designed to deploy into existing clinic workflows — not to replace them. Non-clinical staff can run the patient-facing components with minimal training. Integration with your EHR is handled through standard protocols. Nothing needs to be removed for AugMend to be added.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          <motion.div variants={staggerChild}>
            <h4>Any device. Same outputs.</h4>
            <p className="mt-3 text-neutral-slate">
              CAS sessions run on a smartphone link, clinic tablet, or Meta Quest 3 VR headset. Anodyne modules are delivered via VR headset. The clinical intelligence layer — domain coverage, report generation, billing outputs — is identical regardless of delivery device. VR produces richer physiological signal and higher disclosure rates; it is not a requirement.
            </p>
          </motion.div>
          <motion.div variants={staggerChild}>
            <h4>Plugs into what you run.</h4>
            <p className="mt-3 text-neutral-slate">
              HL7 FHIR-compatible interfaces. EHR integration via Redox — 2–3 week setup covering the majority of major EHR systems. No FDA clearance required. No new billing codes needed. AugMend bills under CPT codes your practice already uses, from the first session. Outside the scope of FDA device regulation per 21st Century Cures Act classification.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {deploymentFeatures.map((feature) => (
            <motion.div
              key={feature.text}
              variants={staggerChild}
              className="flex items-start gap-4"
            >
              <feature.icon className="h-6 w-6 text-brand-indigo shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="font-body text-neutral-near-black">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ---- Why VR ---- */}
      <Section bg="cream" dots>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <SectionLabel>Why VR</SectionLabel>
            <h2 className="mt-4 max-w-xl">Immersion Changes What Patients Share</h2>
            <div className="mt-6 space-y-4 text-neutral-slate max-w-2xl">
              <p>Standard clinical intake happens in environments shaped by time pressure, social judgment, and institutional formality. VR removes those barriers. In a controlled immersive environment, patients engage longer, disclose more, and report greater comfort sharing sensitive information.</p>
              <p>AugMend&#39;s VR sessions adapt in real time to what the patient discloses. The conversational AI selects relevant follow-up inquiries based on individual responses rather than administering a fixed questionnaire — going deeper where it matters, moving on where it doesn&#39;t. Every session builds on the last.</p>
              <p>Preliminary results from our registered randomized controlled trial (NCT07336537, MIT.nano Immersion Lab) show VR consistently outperforming desktop questionnaires across usability, engagement, and overall experience domains. Participants described VR sessions as engaging, enjoyable, and helpful to maintaining focus. VR responses were also significantly longer — patients elaborate more when the environment supports it.</p>
              <p>The same conversational AI runs on phone, tablet, and web. VR is the highest-fidelity option for patients and use cases where deeper engagement matters most.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <Image src="/images/illustrations/VR-experiences-adaptive-3.png" alt="VR immersive therapeutic environment — adaptive conversational AI session" width={640} height={480} className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image src="/images/illustrations/VR-experiences-adaptive-2.png" alt="VR clinical assessment — patient engaging with adaptive questionnaire" width={640} height={480} className="w-full h-auto object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-12 bg-[#0D0B3E] rounded-2xl p-8">
            <p className="font-display italic text-lg text-white/90 leading-relaxed">&ldquo;VR showed higher median ratings than desktop across several domains, with moderate-to-large effect sizes in Core and Overall Experience.&rdquo;</p>
            <p className="mt-3 font-body text-sm text-white/60">Murnane et al., Journal of Medical Extended Reality, 2026 (under peer review). NCT07336537.</p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ---- Why Non-Human Avatars ---- */}
      <Section bg="white" dots>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/illustrations/non-human-avatar.png" alt="AugMend non-human conversational avatar — designed for clinical disclosure" width={640} height={640} className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="order-1 lg:order-2">
            <SectionLabel>The Interface</SectionLabel>
            <h2 className="mt-4 max-w-xl">Why a Non-Human Avatar</h2>
            <div className="mt-6 space-y-4 text-neutral-slate max-w-2xl">
              <p>Decades of research in human-computer interaction show that people disclose more to agents they perceive as non-human. The absence of a human face removes the fear of judgment, social desirability bias, and the self-editing that shapes every clinical encounter.</p>
              <p>AugMend&#39;s conversational avatar is deliberately non-human. It creates psychological distance from the clinical relationship while maintaining the warmth and responsiveness of a guided conversation. Patients don&#39;t perform for it. They speak to it.</p>
              <p>This matters most for the information clinicians need and rarely get: trauma history, substance use, psychosocial stressors, and the emotional dimensions of chronic illness. In our trial data, AI-mediated responses showed significantly higher emotional intensity (p &lt; .001) and greater emotional diversity (p = .04) compared to equivalent responses in other modalities — patients are not just saying more, they&#39;re saying what they actually feel.</p>
              <p>The result: a richer, more honest biopsychosocial picture before the provider enters the room.</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-12 bg-[#0D0B3E] rounded-2xl p-8">
            <p className="font-display italic text-lg text-white/90 leading-relaxed">&ldquo;People disclose more when they believe they&#39;re interacting with a non-human agent, experiencing less fear of judgment and greater willingness to share sensitive information.&rdquo;</p>
            <p className="mt-3 font-body text-sm text-white/60">Lucas et al. (2014), Computers in Human Behavior, USC Institute for Creative Technologies</p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ---- Section 8: CTA ---- */}
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
              <div className="mt-6"><Button variant="primary" href="/contact">Request a Demo →</Button></div>
            </motion.div>
            <motion.div variants={staggerChild} className="bg-white rounded-2xl p-8">
              <h3 className="font-body font-bold text-[22px] text-neutral-near-black">See a sample clinical report</h3>
              <p className="mt-3 text-neutral-slate">Review a de-identified report from an actual patient session — clinical tier and billing tier.</p>
              <div className="mt-6"><Button variant="primary" href="/contact">Request a Sample Report →</Button></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
