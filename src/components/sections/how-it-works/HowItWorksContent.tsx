"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { RefreshCw, Settings2, ShieldCheck, ArrowRight, ShieldAlert, Workflow } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import GlassCard from "@/components/ui/GlassCard"
import PullQuote from "@/components/ui/PullQuote"
import BlurredBackdrop from "@/components/ui/BlurredBackdrop"
import ReportScrollthrough from "@/components/sections/how-it-works/ReportScrollthrough"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const conversationFeatures = [
  {
    icon: RefreshCw,
    title: "Adapts in real time",
    body:
      "For intake, a thorough and complete history is collected. For follow-ups, newly expressed symptoms and concerns trigger structured depth collection with detailed follow-through. Stable symptoms previously mentioned receive report confirmation.",
  },
  {
    icon: Settings2,
    title: "Configured by your clinic",
    body:
      "Your team selects the relevant clinical domains for your patient population and clinic needs. Chronic pain, behavioral health, neurology, maternity, oncology supportive care: the assessment architecture changes. The underlying conversational skills and safety system do not.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous safety monitoring",
    body:
      "Every session may include structured safety screening from the first question to the last. Risk indicators are flagged at the moment of disclosure and routed to the supervising clinician. Safety questions override session time limits.",
  },
  {
    icon: ArrowRight,
    title: "Cross-session continuity",
    body:
      "Follow-up sessions build on the prior visit, not on a blank slate. The system tracks what changed, what is stable, and what your team flagged for closer attention.",
  },
]

const vrMetrics = [
  { domain: "Privacy & Trust", vr: "6.0", ai: "4.9", diff: "+22%" },
  { domain: "Medical Disclosure Comfort", vr: "6.67", ai: "5.0", diff: "+33%" },
  { domain: "Future Use & Preference", vr: "6.38", ai: "5.0", diff: "+28%" },
  { domain: "Core Experience", vr: "6.42", ai: "4.92", diff: "+30%" },
  { domain: "Cultural Competence", vr: "6.5", ai: "6.25", diff: "+4%" },
  { domain: "Overall Experience", vr: "6.29", ai: "5.86", diff: "+7%" },
]

const exercises = [
  {
    title: "Relaxation",
    duration: "5–10 min",
    body:
      "Guided breathing, somatic, and grounding exercises delivered in immersive VR.",
  },
  {
    title: "Psychoeducation",
    duration: "5–10 min",
    body:
      "Patients learn evidence-based concepts about their condition. Comprehension is checked.",
  },
  {
    title: "Behavioral activation",
    duration: "15–20 min",
    body:
      "Short structured exercises that rehearse coping skills and target specific patient goals.",
  },
  {
    title: "Pain management",
    duration: "15–20 min",
    body:
      "Distraction-based and reappraisal-based VR experiences that reduce acute pain perception.",
  },
]

export default function HowItWorksContent() {
  return (
    <>
      {/* HERO — matches home hero treatment exactly: feathered image, frosted card with mask gradient, comfortable text width */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(130deg, #070619 0%, #0c0a3e 55%, #181070 100%)",
          paddingTop: 64,
        }}
      >
        {/* Right-side nurse image, raised so face centers with the headline */}
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
            src="/images/how-it-works/hero-woman.png"
            alt=""
            fill
            sizes="55vw"
            className="object-cover"
            style={{
              objectPosition: "32% 20%",
              opacity: 0.78,
              mixBlendMode: "luminosity",
              filter: "hue-rotate(190deg) saturate(0.4) brightness(0.85)",
            }}
            priority
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
          <nav className="font-body text-sm text-white/60 mb-6 pointer-events-auto">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">How It Works</span>
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
              <SectionLabel dark>How It Works</SectionLabel>
              <h1
                className="mt-4 font-display text-white"
                style={{
                  fontSize: "clamp(36px, 4.2vw, 54px)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                }}
              >
                One platform. Designed to work across the <em className="italic" style={{ fontWeight: 500 }}>full care journey.</em>
              </h1>
              <p
                className="font-body mt-5"
                style={{
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.78)",
                }}
              >
                Every component is designed by practicing medical professionals. Every decision controlled by providers.
              </p>
            </div>
            <div className="relative z-[3] mt-6 flex flex-wrap gap-4 pointer-events-auto">
              <Button variant="primary" href="/in-practice" size="large">
                See It in Practice
              </Button>
              <Button variant="frosted" href="/contact" size="large">
                Schedule a Conversation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE CONVERSATION — cards behind the 4 points + vertical video on the right.
          The video stretches to match the full height of the card stack. */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-stretch">
            <div className="flex flex-col">
              <ScrollReveal>
                <SectionLabel>The Conversation</SectionLabel>
                <h2 className="mt-3 leading-[1.2]">
                  Designed by medical experts for disclosure and information collection.
                </h2>
                <p className="mt-4 font-body font-bold text-neutral-slate">
                  15–45 minutes, no provider time consumed
                </p>
              </ScrollReveal>

              <motion.div
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerParent}
              >
                {conversationFeatures.map((f) => (
                  <motion.div key={f.title} variants={staggerChild}>
                    <GlassCard tone="neutral" className="p-6 h-full">
                      <f.icon className="h-6 w-6 text-brand-indigo mb-4" strokeWidth={1.5} />
                      <h4 className="font-body font-bold text-[16px] text-neutral-near-black">
                        {f.title}
                      </h4>
                      <p className="mt-2 font-body text-[14px] leading-relaxed text-neutral-slate">
                        {f.body}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <ScrollReveal delay={0.15} className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden h-full min-h-[640px] relative">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/videos/conversation-robot-vertical.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SESSION TYPES — Data Collection + Exercise groupings (VR Exercises folded in) */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-cream">
        <BlurredBackdrop src="/images/home/vr-chamber.png" tone="cream" imageOpacity={0.25} position="center 40%" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Session Types</SectionLabel>
            <h2 className="mt-3 leading-[1.2]">Each session has a job.</h2>
            <p className="mt-4 max-w-[680px] text-neutral-slate">
              AugMend sessions fall into two families: data-collection sessions that capture patient reported data, and exercise sessions that put care into practice.
            </p>
          </ScrollReveal>

          {/* Data Collection group — image column matched to card stack height,
              video replaces the static avatar image */}
          <ScrollReveal>
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-stretch">
              <div className="flex flex-col">
                <div className="font-body font-bold text-[13px] uppercase tracking-[0.05em] text-brand-indigo border-b border-neutral-border pb-3 mb-6">
                  Data Collection sessions
                </div>
                <div className="space-y-4 flex-1">
                  {[
                    { tag: "Sessions 1–3 · 30–45 min", title: "Intake Sessions", body: "Cover configured clinical domains in breadth and depth." },
                    { tag: "Ongoing · 10–15 min", title: "Follow-up Sessions", body: "Changes-focused. Medication updates, symptom shifts, new concerns." },
                    { tag: "End of treatment · 30–45 min", title: "Exit Interview", body: "Captures the patient's experience of the care episode before they leave." },
                  ].map((c) => (
                    <GlassCard key={c.title} tone="indigo" accent="indigo" className="p-7">
                      <div className="font-body font-bold text-[11px] uppercase tracking-[0.06em] text-neutral-slate mb-1.5">
                        {c.tag}
                      </div>
                      <h4 className="font-body font-bold text-[17px] mb-1.5">{c.title}</h4>
                      <p className="font-body text-[15px] leading-relaxed text-neutral-slate">
                        {c.body}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>
              <GlassCard tone="neutral" className="overflow-hidden flex flex-col">
                <div className="relative flex-1 min-h-[480px]">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/videos/avatar-data-collection.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <p className="font-body text-[13px] text-neutral-slate leading-relaxed">
                    The non-human avatar conducts the conversation. Patients speak; the system listens, adapts, and structures.
                  </p>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>

          {/* Exercise group */}
          <ScrollReveal>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-stretch">
              <GlassCard tone="neutral" className="overflow-hidden order-2 lg:order-1 flex flex-col">
                <div className="relative flex-1 min-h-[520px]">
                  <Image
                    src="/images/how-it-works/exercise-living-room-new.png"
                    alt="A modern living room set up for an at-home VR exercise session"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 35%" }}
                  />
                </div>
                <div className="p-6">
                  <p className="font-body text-[13px] text-neutral-slate leading-relaxed">
                    Provider prescribes; patient practice.
                  </p>
                </div>
              </GlassCard>
              <div className="order-1 lg:order-2 flex flex-col">
                <div className="font-body font-bold text-[13px] uppercase tracking-[0.05em] border-b border-neutral-border pb-3 mb-6" style={{ color: "#4a6000" }}>
                  Exercise sessions
                </div>
                <div className="space-y-4">
                  {exercises.map((ex) => (
                    <GlassCard key={ex.title} tone="lime" accent="lime" className="p-7">
                      <div className="flex items-baseline justify-between gap-3 mb-1.5">
                        <h4 className="font-body font-bold text-[17px]">{ex.title}</h4>
                        <span className="font-body font-bold text-[11px] uppercase tracking-[0.06em] text-neutral-slate shrink-0">
                          {ex.duration}
                        </span>
                      </div>
                      <p className="font-body text-[15px] leading-relaxed text-neutral-slate">
                        {ex.body}
                      </p>
                    </GlassCard>
                  ))}
                </div>
                {/* Promoted governance note — eyebrow + slightly larger body so
                    this load-bearing safety statement isn't lost as a footnote */}
                <div
                  className="mt-6 rounded-xl px-6 py-5"
                  style={{
                    background: "rgba(13, 11, 62, 0.04)",
                    borderLeft: "3px solid #1F1C98",
                  }}
                >
                  <div className="font-body font-bold text-[10.5px] uppercase tracking-[0.08em] text-brand-indigo mb-2">
                    Clinical governance
                  </div>
                  <p className="font-body text-[14.5px] leading-[1.6] text-neutral-near-black">
                    The provider makes every clinical prescription decision. Non-medical staff manage the headset; the <strong>clinician owns the plan</strong>.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE OUTPUT — scroll-pinned showcase of the actual sample report */}
      <ReportScrollthrough />

      {/* WHY VR — break-out image treatment: the photo extends beyond the
          column on the right, breaking the grid line for visual interest */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-white">
        {/* Break-out image — anchored to the right edge of the viewport, not
            constrained to the content column. */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-0 bottom-0 right-0 pointer-events-none"
          style={{ width: "44vw" }}
        >
          <div className="relative h-full overflow-hidden">
            <Image
              src="/images/home/hands-offer-headset.png"
              alt=""
              fill
              sizes="44vw"
              className="object-cover"
              style={{ objectPosition: "30% center" }}
            />
            {/* Soft left-edge feather so the image dissolves into the page */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,252,246,1) 0%, rgba(255,252,246,0.85) 8%, rgba(255,252,246,0) 28%)",
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="lg:max-w-[58%]">
            <ScrollReveal>
              <SectionLabel>Why VR</SectionLabel>
              <h2 className="mt-3 leading-[1.15]" style={{ fontSize: "clamp(30px, 3.4vw, 44px)", fontWeight: 600, letterSpacing: "-0.02em" }}>
                Immersion changes what patients share.
              </h2>
              <div className="mt-5 space-y-4 text-neutral-slate">
                <p>
                  Standard clinical intake happens in environments shaped by time pressure, social judgment, and institutional formality. VR removes those barriers. In a controlled immersive environment, patients engage longer, disclose more, and report greater comfort sharing sensitive information.
                </p>
                <p>
                  Data from our randomized controlled trial shows VR consistently outperforming web-based AI across engagement, disclosure comfort, and overall experience. VR responses were 30% longer. Patients elaborate more when the environment supports it.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full bg-surface-white border border-neutral-border rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-surface-cream">
                      <th className="text-left px-4 py-3 font-body font-bold text-xs uppercase tracking-wider text-neutral-slate">
                        Domain
                      </th>
                      <th className="text-right px-4 py-3 font-body font-bold text-xs uppercase tracking-wider text-neutral-slate">
                        VR
                      </th>
                      <th className="text-right px-4 py-3 font-body font-bold text-xs uppercase tracking-wider text-neutral-slate">
                        Web AI
                      </th>
                      <th className="text-right px-4 py-3 font-body font-bold text-xs uppercase tracking-wider text-brand-indigo">
                        Diff
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vrMetrics.map((m, i) => (
                      <tr key={m.domain} className={i % 2 === 1 ? "bg-surface-cream/50" : ""}>
                        <td className="px-4 py-2.5 font-body text-neutral-near-black text-sm">{m.domain}</td>
                        <td className="px-4 py-2.5 font-body text-right text-neutral-slate text-sm tabular-nums">
                          {m.vr}
                        </td>
                        <td className="px-4 py-2.5 font-body text-right text-neutral-slate text-sm tabular-nums">
                          {m.ai}
                        </td>
                        <td className="px-4 py-2.5 font-body font-bold text-right text-brand-indigo text-sm tabular-nums">
                          {m.diff}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-2 font-body text-[11px] text-neutral-slate">
                  Data from our randomized controlled trial, n=45
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <PullQuote
                className="mt-8"
                cite="Murnane et al., Journal of Medical Extended Reality, 2026"
              >
                &ldquo;VR showed higher median ratings than desktop across several domains, with moderate-to-large effect sizes in Core and Overall Experience.&rdquo;
              </PullQuote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY A NON-HUMAN AVATAR — video instead of image */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-cream">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div
                className="rounded-2xl overflow-hidden bg-white border border-neutral-border max-w-[460px] mx-auto"
                style={{ aspectRatio: "1 / 1" }}
              >
                <video
                  className="w-full h-full object-cover"
                  src="/videos/non-human-avatar.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <SectionLabel>The Interface</SectionLabel>
              <h2 className="mt-3 leading-[1.2]">Why a non-human avatar.</h2>
              <div className="mt-5 space-y-4 text-neutral-slate">
                <p>
                  Research in human-computer interaction shows that people disclose more to agents they perceive as non-human. The absence of a human face removes the fear of judgment, social desirability bias, and the self-editing that shapes every clinical encounter.
                </p>
                <p>
                  AugMend&rsquo;s conversational avatar is deliberately non-human. It creates psychological distance from the clinical relationship while keeping the warmth and responsiveness of a guided conversation. Patients don&rsquo;t perform for it. They speak to it.
                </p>
                <p>
                  The environment and avatar are chosen deliberately by the clinical team, for each patient — to increase comfort, engagement, and disclosure.
                </p>
              </div>
              <PullQuote
                className="mt-7"
                cite="Lucas et al. (2014), Computers in Human Behavior · USC ICT"
              >
                &ldquo;People disclose more when they believe they&rsquo;re interacting with a non-human agent, experiencing less fear of judgment and greater willingness to share sensitive information.&rdquo;
              </PullQuote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* IN-PRACTICE CALLOUTS — replace Safety Design + Deployment & Integration sections */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white border-t border-neutral-border">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>What&rsquo;s next</SectionLabel>
            <h2 className="mt-3 leading-[1.2] max-w-[760px]">
              Safety design and integration live where they belong: <em className="italic">in your clinic.</em>
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/in-practice#safety" className="group block">
              <GlassCard
                tone="indigo"
                accent="indigo"
                className="p-8 h-full transition-all duration-200 group-hover:-translate-y-1"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(13,11,62,0.04), 0 14px 36px -10px rgba(31,28,152,0.12)" }}
              >
                <ShieldAlert className="h-7 w-7 text-brand-indigo mb-5" strokeWidth={1.5} />
                <h3 className="font-body font-bold text-[20px] mb-2">Safety design</h3>
                <p className="font-body text-[15px] leading-relaxed text-neutral-slate">
                  Continuous safety screening, evidence-linked claims, and clinician-controlled sign-off. See how it operates inside your workflow without adding to provider burden.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-body font-bold text-[14px] text-brand-indigo">
                  See it in practice
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </span>
              </GlassCard>
            </Link>

            <Link href="/in-practice#deployment" className="group block">
              <GlassCard
                tone="indigo"
                accent="indigo"
                className="p-8 h-full transition-all duration-200 group-hover:-translate-y-1"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(13,11,62,0.04), 0 14px 36px -10px rgba(31,28,152,0.12)" }}
              >
                <Workflow className="h-7 w-7 text-brand-indigo mb-5" strokeWidth={1.5} />
                <h3 className="font-body font-bold text-[20px] mb-2">Deployment & integration</h3>
                <p className="font-body text-[15px] leading-relaxed text-neutral-slate">
                  Want to see how to get it set up and integrated into your workflow? Most clinics go live in under four weeks. See the full deployment story on the In Practice page.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-body font-bold text-[14px] text-brand-indigo">
                  Integrate it into your workflow
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </span>
              </GlassCard>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-brand-deep-space border-t border-white/[0.08]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-white">See how it fits into your clinic&rsquo;s workflow.</h2>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Button variant="primary" href="/in-practice" size="large">
                See It in Practice →
              </Button>
              <Button variant="frosted" href="/contact" size="large">
                Schedule a Conversation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
