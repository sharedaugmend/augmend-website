"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ClipboardCheck,
  HeadphonesIcon,
  FileText,
  Eye,
  Stethoscope,
  CheckCircle2,
  ShieldCheck,
  Clock4,
  HeartPulse,
  Brain,
  TrendingUp,
  Building2,
  CalendarClock,
  Receipt,
  Database,
  Lock,
} from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import GlassCard from "@/components/ui/GlassCard"
import BlurredBackdrop from "@/components/ui/BlurredBackdrop"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

type Owner = "patient" | "system" | "provider"

const journey: {
  num: string
  owner: Owner
  stage: string
  purpose: string
  detail: string
  image?: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}[] = [
  {
    num: "01",
    owner: "patient",
    stage: "Before visit",
    purpose: "Pre-session survey, digital consent, OTP issuance.",
    detail:
      "The clinician authors the session plan of the appointment. Patient receives the consent flow and a one-time access code in advance.",
    image: "/images/in-practice/consent.jpg",
    icon: ClipboardCheck,
  },
  {
    num: "02",
    owner: "patient",
    stage: "Arrival & setup",
    purpose: "Patient checks in at clinic. Admin hands off the headset and runs a pre-check.",
    detail:
      "Non-clinical staff complete a 90-second pre-flight: hardware fit, audio levels, and session ID. The patient is in immersion before the room is even ready.",
    image: "/images/in-practice/setup.jpg",
    icon: HeadphonesIcon,
  },
  {
    num: "03",
    owner: "patient",
    stage: "VR intake session",
    purpose: "Patient converses with the avatar across 11 clinical domains; VR exercise if prescribed.",
    detail:
      "The non-human avatar conducts a structured biopsychosocial conversation. Adaptive depth-collection on new disclosures. Continuous safety screening behind the scenes.",
    image: "/images/home/avatar-robot-2.jpg",
    icon: Brain,
  },
  {
    num: "04",
    owner: "system",
    stage: "Post-VR & report generation",
    purpose: "Transcript processed; clinical report, 15-second pre-visit summary, and flags generated.",
    detail:
      "Every claim is linked back to the originating exchange in the transcript.",
    image: "/images/illustrations/data-compounds-chart.jpg",
    icon: FileText,
  },
  {
    num: "05",
    owner: "provider",
    stage: "Provider pre-visit review",
    purpose: "Clinician reads the 15-second summary",
    detail:
      "Two-minute structured brief surfaced to the provider's existing EHR view. Walk into the room with the full clinical picture already in mind.",
    image: "/images/in-practice/provider-review.jpg",
    icon: Eye,
  },
  {
    num: "06",
    owner: "provider",
    stage: "In-room visit",
    purpose: "Clinician anchors the visit on the report, clarifies with the patient, annotates inline.",
    detail:
      "The conversation is no longer information-gathering — it is shared decision-making. Annotations attach directly to the report.",
    image: "/images/in-practice/in-room.jpg",
    icon: Stethoscope,
  },
  {
    num: "07",
    owner: "provider",
    stage: "Post-visit sign-off",
    purpose: "Clinician finalizes, signs off; report locks and EHR copy-paste path activates.",
    detail:
      "Billing-ready documentation is pre-populated and mapped to existing CPT codes. Provider review takes minutes, not the rest of the day.",
    image: "/images/in-practice/sign-off.jpg",
    icon: CheckCircle2,
  },
]

const ownerStyle: Record<
  Owner,
  { label: string; color: string; bg: string; bar: string; chipBg: string }
> = {
  patient: {
    label: "Patient",
    color: "#4a6000",
    bg: "rgba(234,244,200,0.4)",
    bar: "#B8D94E",
    chipBg: "rgba(184,217,78,0.2)",
  },
  system: {
    label: "System",
    color: "#9a4d12",
    bg: "rgba(253,232,216,0.5)",
    bar: "#E8843A",
    chipBg: "rgba(232,132,58,0.16)",
  },
  provider: {
    label: "Provider",
    color: "#1F1C98",
    bg: "rgba(228,237,248,0.4)",
    bar: "#1F1C98",
    chipBg: "rgba(31,28,152,0.1)",
  },
}

const providerBenefits = [
  {
    icon: Clock4,
    title: "More face time, less keyboard time",
    body:
      "15+ minutes back per encounter. The brief replaces the unstructured interview. The face-to-face visit becomes diagnosis and shared decision-making.",
  },
  {
    icon: HeartPulse,
    title: "Decision confidence",
    body:
      "Every claim trace to the source transcript. Flagged items are explicit. Providers know what is solid and what to verify with the patient.",
  },
  {
    icon: Brain,
    title: "Cognitive load offloaded",
    body:
      "12+ clinical domains pre-organized: meds, history, function, SDOH, safety, prior treatment. The provider walks in with the picture, not a blank page.",
  },
  {
    icon: ShieldCheck,
    title: "Burnout pressure relieved",
    body:
      "Documentation drops from hours to minutes per encounter. The afternoon ends with the patients, not with the EHR.",
  },
]

const leaderBenefits = [
  {
    icon: Receipt,
    title: "$83+ per session, day one",
    body:
      "Generated under existing CPT codes. No new billing infrastructure. Revenue realized from the first completed session.",
  },
  {
    icon: TrendingUp,
    title: "Higher-level E/M support",
    body:
      "Structured biopsychosocial complexity is the basis for higher-level coding. The complexity is now documented, evidenced, and provider signed.",
  },
  {
    icon: CalendarClock,
    title: "Four steps to live",
    body:
      "Contract → hardware → trained staff → first patient session. Pace varies by clinic; most reach steady-state shortly after their first sessions.",
  },
  {
    icon: Building2,
    title: "Quality metrics improve alongside revenue",
    body:
      "Structured SDOH, PROMs, and intake data. The type of data high quality care already requires, generated as a byproduct of our solution.",
  },
]

const safetyCards = [
  {
    title: "Continuous safety screening",
    body:
      "Every session may include structured safety screening from the first question to the last, tailored to provider preferences. Risk indicators route to the supervising clinician at the time of disclosure.",
  },
  {
    title: "Evidence-linked claims",
    body:
      "Every finding trace to the source transcript and audio. Providers can open the originating exchange for any claim. Uncertain items are explicitly flagged for review.",
  },
  {
    title: "Clinician-controlled, effortlessly",
    body:
      "The clinical team owns the plan. Sessions launch under remote supervision of a licensed clinician. Sign-off is required before anything enters the record. Configurable in minutes, not added to provider workflow.",
  },
]

const integrationBadges = [
  "Redox Integrations",
  "MEDITECH",
  "FHIR-compliant APIs",
]

const complianceBadges = [
  { label: "HIPAA compliant", icon: Lock },
  { label: "SOC 2 Type II", icon: ShieldCheck },
  { label: "End-to-end encryption", icon: Database },
  { label: "BAA available", icon: FileText },
]

const timeline = [
  { day: "Step 1", body: "Contract signed. Hardware purchased." },
  { day: "Step 2", body: "Staff trained. System configured. EHR connected." },
  { day: "Step 3", body: "First patient sessions. First reports. First revenue." },
  { day: "Step 4", body: "Full workflow running. All session types active." },
]

export default function InPracticeContent() {
  return (
    <>
      {/* PAGE HERO */}
      {/* HERO — matches home/HIW pattern */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "70vh",
          paddingTop: 64,
          background:
            "linear-gradient(130deg, #070619 0%, #0c0a3e 55%, #181070 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 pointer-events-none z-[1]"
          style={{
            width: "55%",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 14%, rgba(0,0,0,0.6) 36%, black 64%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 14%, rgba(0,0,0,0.6) 36%, black 64%)",
          }}
        >
          <Image
            src="/images/home/doctor-patient-scene.jpg"
            alt=""
            fill
            sizes="55vw"
            priority
            className="object-cover"
            style={{
              objectPosition: "32% 22%",
              opacity: 0.78,
              mixBlendMode: "luminosity",
              filter: "hue-rotate(190deg) saturate(0.4) brightness(0.85)",
            }}
          />
        </div>

        <div
          className="relative z-[2] py-16 md:py-20 pointer-events-none"
          style={{
            marginLeft: "max(1.5rem, calc((100vw - 1280px)/2 + 1.5rem))",
            paddingRight: "1.5rem",
            width: "min(calc(100vw - 3rem), max(440px, 52vw))",
            maxWidth: 720,
          }}
        >
          <nav className="font-body text-sm mb-6 pointer-events-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">In Practice</span>
          </nav>
          <ScrollReveal>
            <div
              className="rounded-3xl relative"
              style={{
                background: "rgba(7, 6, 25, 0.42)",
                backdropFilter: "blur(20px) saturate(130%)",
                WebkitBackdropFilter: "blur(20px) saturate(130%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow:
                  "0 0 60px 30px rgba(7, 6, 25, 0.35), 0 30px 60px -20px rgba(0, 0, 0, 0.6)",
                padding: "44px 56px",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 62%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.5) 100%)",
                maskImage:
                  "radial-gradient(ellipse at center, black 62%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.5) 100%)",
              }}
            >
              <SectionLabel dark>In Practice</SectionLabel>
              <h1
                className="mt-4 font-display text-white"
                style={{
                  fontSize: "clamp(34px, 4vw, 50px)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                }}
              >
                An integrated software solution for <em className="italic" style={{ fontWeight: 500 }}>patients, providers, and practice leaders.</em>
              </h1>
              <p
                className="font-body mt-5"
                style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255, 255, 255, 0.78)" }}
              >
                AugMend fits inside the workflows clinics already have. No new staff. No new billing systems. A structured session before the face-to-face patient-provider encounter. A report is waiting when the provider first walks in. A report can be addended by the provider after the visit and is ready to submit for billing.
              </p>
            </div>
            <div className="relative z-[3] mt-6 flex flex-wrap gap-4 pointer-events-auto">
              <Button variant="primary" href="/contact" size="large">
                Start a Pilot →
              </Button>
              <Button variant="frosted" href="/platform/how-it-works" size="large">
                See How It Works
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE 7-STEP WORKFLOW — compact glass cards, colored owner tags do
          the visual work. Subtle blurred photographic backdrop, no
          decorative side images. */}
      <section
        id="journey"
        className="relative overflow-hidden py-20 md:py-24 bg-surface-cream"
      >
        <BlurredBackdrop
          src="/images/home/doctor-patient-scene.jpg"
          tone="cream"
          imageOpacity={0.22}
          position="center 30%"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>The Workflow</SectionLabel>
            <h2 className="mt-3 leading-[1.2] max-w-[760px]">
              One pilot. Seven stages. From the patient&rsquo;s pre-visit consent to the clinician&rsquo;s sign-off.
            </h2>
            <p className="mt-4 max-w-[680px] text-neutral-slate">
              The journey runs from the patient through the system into the provider. Each stage names its owner, its purpose, and how long it takes.
            </p>
          </ScrollReveal>

          {/* Vertical timeline — flowing gradient connector traces the
              patient → system → provider color story. Cards are tighter so all
              7 stages read in one sweep. */}
          <motion.ol
            className="mt-12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {journey.map((step, i) => {
              const s = ownerStyle[step.owner]
              const Icon = step.icon
              const tone =
                step.owner === "patient" ? "lime" : step.owner === "system" ? "orange" : "indigo"
              const accent = tone
              const isLast = i === journey.length - 1
              return (
                <motion.li
                  key={step.num}
                  variants={staggerChild}
                  className="relative pl-12 md:pl-16 mb-3 last:mb-0"
                >
                  {/* Connector — runs from this circle's center down to the
                      next circle's center. Skipped on the last step so the
                      line doesn't extend past the 07 circle. */}
                  {!isLast && (
                    <>
                      <div
                        aria-hidden="true"
                        className="absolute w-[2px] rounded-full z-[0]"
                        style={{
                          left: 15,
                          top: 28,
                          bottom: -24,
                          background:
                            "linear-gradient(to bottom, rgba(31,28,152,0.35), rgba(31,28,152,0.35))",
                        }}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute w-[12px] rounded-full z-[0]"
                        style={{
                          left: 10,
                          top: 28,
                          bottom: -24,
                          background: "rgba(31,28,152,0.18)",
                          filter: "blur(8px)",
                        }}
                      />
                    </>
                  )}
                  <div
                    className="absolute left-0 top-3 flex items-center justify-center rounded-full font-body font-bold text-[12px] tabular-nums z-[2]"
                    style={{
                      width: 32,
                      height: 32,
                      background: s.bar,
                      color: step.owner === "patient" ? "#1A1A1A" : "#fff",
                      boxShadow: `0 4px 12px ${
                        step.owner === "patient"
                          ? "rgba(74,96,0,0.22)"
                          : step.owner === "system"
                            ? "rgba(232,132,58,0.28)"
                            : "rgba(31,28,152,0.28)"
                      }`,
                      border: "2px solid #FAF8F5",
                    }}
                  >
                    {step.num}
                  </div>

                  <GlassCard
                    tone={tone}
                    accent={accent}
                    className="p-5 md:p-6 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center flex-wrap gap-3 mb-2">
                      <span
                        className="inline-flex items-center gap-1.5 font-body font-bold text-[10.5px] uppercase tracking-[0.06em] px-2.5 py-1 rounded-full"
                        style={{ background: s.chipBg, color: s.color }}
                      >
                        <Icon className="h-3 w-3" strokeWidth={2} />
                        {s.label}
                      </span>
                      <span className="font-body font-bold text-[11.5px] uppercase tracking-[0.05em] text-neutral-slate">
                        {step.stage}
                      </span>
                    </div>
                    <h4 className="font-body font-bold text-[16px] mb-1">{step.purpose}</h4>
                    <p className="font-body text-[14px] leading-[1.55] text-neutral-slate">
                      {step.detail}
                    </p>
                  </GlassCard>
                </motion.li>
              )
            })}
          </motion.ol>
        </div>
      </section>

      {/* FOR PATIENTS — patient-side outcomes (moved here from home so the
          home page leads with clarity and the depth lives where readers
          come for it). */}
      <section id="patients" className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>For Patients</SectionLabel>
            <h2 className="mt-3 leading-[1.2] max-w-[680px]">
              When patients use AugMend, they share more, more honestly.
            </h2>
            <p className="mt-4 max-w-[680px] text-neutral-slate">
              The same conversation a patient finds hard to have face-to-face becomes possible in immersion. The numbers below come from our randomized controlled trial.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-start divide-y md:divide-y-0">
              {[
                {
                  value: "100%",
                  label: "Patient preference for VR-based assessment.",
                  sub: "Across the Boston RCT, every participant preferred VR-based sessions over standard intakes when offered both.",
                },
                {
                  value: "β=10.40",
                  label: "More words disclosed per response.",
                  sub: "Patients say more, more honestly surfacing clinical information that standard intakes consistently misses.",
                },
                {
                  value: "Day 1",
                  label: "Provider sees the full picture.",
                  sub: "The first session gives the care team context that previously took months of clinical relationship to build.",
                },
              ].map((s, i) => (
                <div
                  key={s.value}
                  className="flex-1 flex flex-col items-center text-center px-6 md:px-8 py-4"
                  style={{
                    borderLeft: i > 0 ? "1px solid rgba(31,28,152,0.10)" : undefined,
                  }}
                >
                  <div
                    className="font-display tabular-nums"
                    style={{
                      fontSize: "clamp(40px, 5vw, 64px)",
                      fontWeight: 600,
                      letterSpacing: "-0.035em",
                      lineHeight: 1,
                      color: "#1F1C98",
                    }}
                  >
                    {s.value}
                  </div>
                  <p
                    className="mt-4 font-body text-neutral-near-black"
                    style={{ fontSize: 15, fontWeight: 500, maxWidth: 240 }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="mt-2 font-body text-neutral-slate"
                    style={{ fontSize: 13, lineHeight: 1.55, maxWidth: 240 }}
                  >
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOR PROVIDERS — clinical-care benefits */}
      <section id="providers" className="relative overflow-hidden py-24 md:py-28 bg-surface-cream">
        <BlurredBackdrop src="/images/home/provider-cinematic.jpg" tone="cream" imageOpacity={0.22} position="center 25%" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>For Providers</SectionLabel>
            <h2 className="mt-3 leading-[1.2] max-w-[680px]">
              Restructure what happens before you walk in the room.
            </h2>
            <p className="mt-4 max-w-[680px] text-neutral-slate">
              The provider workflow stays the same minus the parts that drained it. Diagnosis and shared decision-making, with the documentation already in hand.
            </p>
          </ScrollReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {providerBenefits.map((b) => (
              <motion.div key={b.title} variants={staggerChild}>
                <GlassCard tone="indigo" accent="indigo" className="p-7 h-full">
                  <b.icon className="h-7 w-7 text-brand-indigo mb-4" strokeWidth={1.5} />
                  <h4 className="font-body font-bold text-[17px] mb-2">{b.title}</h4>
                  <p className="font-body text-[15px] leading-relaxed text-neutral-slate">{b.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOR PRACTICE LEADERS — operational + economic benefits, visually distinct from providers */}
      <section id="practice-leaders" className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white">
        <BlurredBackdrop src="/images/home/doctor-portrait-cinematic.jpg" tone="warm-white" imageOpacity={0.30} position="center 30%" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>For Practice Leaders</SectionLabel>
            <h2 className="mt-3 leading-[1.2] max-w-[680px]">
              Revenue from day one, with the billing infrastructure you already have.
            </h2>
            <p className="mt-4 max-w-[680px] text-neutral-slate">
              No new staff. No new billing systems. AugMend slots into the existing workflow and starts producing structured documentation — and structured revenue — from the first session.
            </p>
          </ScrollReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {leaderBenefits.map((b, i) => (
              <motion.div key={b.title} variants={staggerChild}>
                <GlassCard
                  tone={i === 0 ? "orange" : "neutral"}
                  accent={i === 0 ? "orange" : "indigo"}
                  className="p-7 h-full"
                >
                  <b.icon
                    className="h-7 w-7 mb-4"
                    strokeWidth={1.5}
                    style={{ color: i === 0 ? "#E8843A" : "#1F1C98" }}
                  />
                  <h4 className="font-body font-bold text-[17px] mb-2">{b.title}</h4>
                  <p className="font-body text-[15px] leading-relaxed text-neutral-slate">{b.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SAFETY DESIGN — moved here from How It Works */}
      <section
        id="safety"
        className="relative overflow-hidden py-24 md:py-28 bg-brand-deep-space"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel dark>Safety Design</SectionLabel>
            <h2 className="mt-3 leading-[1.2] text-white max-w-[680px]">
              The AI guides. The provider decides. <em className="italic">Every time.</em>
            </h2>
            <p className="mt-4 max-w-[680px]" style={{ color: "rgba(255,255,255,0.7)" }}>
              AugMend does not interpret clinical data, render diagnoses, or generate treatment recommendations. Every session runs under the remote supervision of a licensed clinician. Every output requires provider review before it enters the clinical record.
            </p>
          </ScrollReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {safetyCards.map((c) => (
              <motion.div key={c.title} variants={staggerChild}>
                <GlassCard tone="dark" accent="lime" className="p-7 h-full">
                  <h4 className="font-body font-bold text-[17px] text-white mb-2">{c.title}</h4>
                  <p
                    className="font-body text-[15px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                  >
                    {c.body}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEPLOYMENT & INTEGRATION — expanded */}
      <section id="deployment" className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Deployment & Integration</SectionLabel>
            <h2 className="mt-3 leading-[1.2] max-w-[680px]">
              We integrate with your existing tools.
            </h2>
            <p className="mt-4 max-w-[680px] text-neutral-slate">
              AugMend can integrate with major EHRs over FHIR-compliant APIs as well as scribes or other existing tools. Patient data stays inside your existing infrastructure. HIPAA-compliant from day one and SOC 2 Type II available. The deployment runs in four steps; pace varies clinic to clinic.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: badges */}
            <ScrollReveal>
              <h3 className="font-body font-bold text-[16px] mb-4 text-neutral-near-black">
                EHR connectivity
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {integrationBadges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-2 font-body font-bold text-[13px] px-4 py-2.5 rounded-lg"
                    style={{
                      background: "rgba(31,28,152,0.06)",
                      border: "1px solid rgba(31,28,152,0.12)",
                      color: "#1F1C98",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h3 className="font-body font-bold text-[16px] mb-4 text-neutral-near-black">
                Compliance & security
              </h3>
              <div className="flex flex-wrap gap-3">
                {complianceBadges.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-2 font-body font-bold text-[13px] px-4 py-2.5 rounded-lg"
                    style={{
                      background: "rgba(26,107,26,0.05)",
                      border: "1px solid rgba(26,107,26,0.2)",
                      color: "#1a6b1a",
                    }}
                  >
                    <c.icon className="h-4 w-4" strokeWidth={2} />
                    {c.label}
                  </span>
                ))}
              </div>

              <p className="mt-6 font-body text-[14px] text-neutral-slate leading-relaxed max-w-[520px]">
                Hardware is managed by non-clinical staff. AugMend provides the setup guide, the training, and the technical support. The clinical team configures sessions and signs reports — nothing else.
              </p>
            </ScrollReveal>

            {/* Right: timeline */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl bg-white border border-neutral-border p-10">
                <p className="font-display text-[22px] font-normal text-neutral-near-black leading-[1.3] mb-7">
                  From contract to first<br />patient session.
                </p>
                <ol className="flex flex-col gap-0">
                  {timeline.map((t, i) => (
                    <li
                      key={t.day}
                      className={`flex gap-4 py-4 items-center ${i < timeline.length - 1 ? "border-b border-neutral-border" : ""}`}
                    >
                      <span
                        className="font-display font-semibold text-brand-indigo flex-shrink-0"
                        style={{ fontSize: 20, width: 80 }}
                      >
                        {t.day}
                      </span>
                      <span className="font-body text-[15px] text-neutral-slate">{t.body}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-24 md:py-28"
        style={{ background: "linear-gradient(135deg, #0D0B3E 0%, #1F1C98 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2
              className="text-white mb-4"
              style={{ fontSize: 40 }}
            >
              Start a structured pilot.
            </h2>
            <p
              className="font-body mx-auto max-w-[600px] mb-9 text-[18px]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              We work with specialty care practices. The deployment runs in four steps — pace varies clinic to clinic.
            </p>
            <Button variant="primary" href="/contact" size="large">
              Schedule a Conversation →
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
