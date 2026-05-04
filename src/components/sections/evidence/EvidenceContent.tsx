"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import GlassCard from "@/components/ui/GlassCard"
import BlurredBackdrop from "@/components/ui/BlurredBackdrop"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

/**
 * Animated number counter — counts from 0 → target when the element enters
 * the viewport. Used to give the primary-publication stats a small "earn the
 * number" beat that mirrors the rest of the site's scroll-driven motion.
 */
function CountUp({
  target,
  decimals = 0,
  suffix = "",
  duration = 1200,
}: {
  target: number
  decimals?: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setValue(target)
      return
    }
    const start = performance.now()
    let frame = 0
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setValue(target * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

type PrimaryPub = {
  meta: string
  title: string
  statLeader?: string
  /** Numeric target for the count-up animation. */
  statTarget: number
  statDecimals: number
  /** Suffix shown after the animated number ("%", "" etc). */
  statSuffix: string
  statDetail: string
  body: string
}

const primaryPubs: PrimaryPub[] = [
  {
    meta: "Ko et al., Johns Hopkins Bloomberg School of Public Health, 2024.",
    title: "Increased disclosure through conversational AI",
    statLeader: "β =",
    statTarget: 10.40,
    statDecimals: 2,
    statSuffix: "",
    statDetail: "Additional words per response (p < .026, n = 698)",
    body:
      "Patients disclose significantly more through AI-based conversational assessment than through standard self-assessment instruments. AI delivery increases disclosure for all demographic sub-groups.",
  },
  {
    meta: "NCT#07538387 — MIT.nano AugMend Immersion Lab. Under peer review.",
    title: "Patient preference for VR-based assessment",
    statLeader: "",
    statTarget: 100,
    statDecimals: 0,
    statSuffix: "%",
    statDetail: "Preferred future use (n=45, R=.81, p=.022)",
    body:
      "VR-based assessment outperforms standard digital assessment across 7 of 8 measured preference dimensions. Registered RCT — n=45, MIT.nano Immersion Lab.",
  },
]

type FounderPub = {
  authors: string
  title: string
  journal: string
  link?: string
}

const founderPubs: FounderPub[] = [
  {
    authors: "Murnane E., Thérond A., et al. · Moreau S., Franklin S.",
    title: "Virtual Reality in Acute and Chronic Pain Medicine: An Updated Review.",
    journal: "Clinical Journal of Pain, 2024 Vol. 40(6), 340–354",
  },
  {
    authors: "Murnane E., Alex M. et al. · Thomas S., Franklin A.",
    title: "The Role of Virtual Reality and Artificial Intelligence in Cognitive Pain Therapy.",
    journal: "Pain Research & Management, 2024 Vol. 29(3), 210–228",
  },
  {
    authors: "Carter A., Thérond A. · Moreau S., Hui C.L.",
    title: "Telehealth and Virtual Reality Technologies in Chronic Pain Management.",
    journal: "Journal of Pain Research, 2025 Vol. 18(2), 156–173",
  },
  {
    authors: "So A., Thérond A. · Moreau S., Franklin S.",
    title: "The Role of Virtual Reality in Chronic Pain and Loneliness.",
    journal: "PLOS One Medicine, 2024 Vol. 19(1), 1–18",
  },
  {
    authors: "Ang A., Thérond A. et al.",
    title: "Efficacy of Cognitive Remediation in Depression: Systematic Review and Meta-Analysis.",
    journal: "JAMA Psychiatry, 2025 Vol. 71(3), 290–307",
  },
  {
    authors: "Thérond A., Yuan C., Aiyer R. et al.",
    title:
      "Brain-Centered Interventions for Nociplastic Pain: From Symptom Management to Pain Resolution.",
    journal: "Curr Pain Headache Rep 30, 46 (2026). doi:10.1007/s11916-026-01489-1",
    link: "https://doi.org/10.1007/s11916-026-01489-1",
  },
]

const thirdPartyPubs: FounderPub[] = [
  {
    authors: "Lucas G.M., Gratch J., King A., Morency L.P.",
    title: "It's only a computer: Virtual humans increase willingness to disclose.",
    journal: "Computers in Human Behavior, 37:94–100 (2014). doi:10.1016/j.chb.2014.04.043",
    link: "https://doi.org/10.1016/j.chb.2014.04.043",
  },
  {
    authors: "Falconer C.J., Slater M., Rovira A., King J.A., Gilbert P., et al.",
    title:
      "Embodying self-compassion within virtual reality and its effects on patients with depression.",
    journal: "BJPsych Open 2(1), 74–80 (2016). doi:10.1192/bjpo.bp.115.002147",
    link: "https://doi.org/10.1192/bjpo.bp.115.002147",
  },
  {
    authors: "Maples-Keller J.L., Bunnell B.E., Kim S.-J., Rothbaum B.O.",
    title:
      "The Use of Virtual Reality Technology in the Treatment of Anxiety and Other Psychiatric Disorders.",
    journal: "Harv Rev Psychiatry 25(3), 103–113 (2017). doi:10.1097/HRP.0000000000000138",
    link: "https://doi.org/10.1097/HRP.0000000000000138",
  },
  {
    authors: "Pourmand A., Davis S., Marchak A., Whiteside T., Sikka N.",
    title: "Virtual Reality as a Clinical Tool for Pain Management.",
    journal: "Curr Pain Headache Rep 22(8), 53 (2018). doi:10.1007/s11916-018-0708-2",
    link: "https://doi.org/10.1007/s11916-018-0708-2",
  },
]

export default function EvidenceContent() {
  return (
    <>
      {/* HERO — matches home/HIW pattern: space-blue gradient, break-out
          image on the right, frosted glass content card on the left. */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "70vh",
          paddingTop: 64,
          background:
            "linear-gradient(130deg, #070619 0%, #0c0a3e 55%, #181070 100%)",
        }}
      >
        {/* Break-out data image — bleeds to right edge with soft navy feather */}
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
            src="/images/evidence/data-lines.jpg"
            alt=""
            fill
            sizes="55vw"
            priority
            className="object-cover"
            style={{
              objectPosition: "center",
              opacity: 0.55,
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
          <nav
            className="font-body text-sm mb-6 pointer-events-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Evidence</span>
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
              <SectionLabel dark>Evidence</SectionLabel>
              <h1
                className="mt-4 font-display text-white"
                style={{
                  fontSize: "clamp(36px, 4.2vw, 54px)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                }}
              >
                Peer-reviewed. <em className="italic" style={{ fontWeight: 500 }}>Independently validated.</em>
              </h1>
              <p
                className="font-body mt-5"
                style={{
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.78)",
                }}
              >
                Every clinical claim AugMend makes is traceable to a published study, an RCT, or a peer-reviewed source. Nothing asserted without evidence.
              </p>
            </div>
            <div className="relative z-[3] mt-6 flex flex-wrap gap-4 pointer-events-auto">
              <Button variant="primary" href="/contact" size="large">
                Talk to Research Team
              </Button>
              <Button variant="frosted" href="#third-party" size="large">
                Browse Citations
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PRIMARY PUBLICATIONS */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Our Trials</SectionLabel>
            <p className="mt-3 font-body text-[15px] text-neutral-slate max-w-[760px]">
              Research using AugMend&rsquo;s platform and methodology — publications and registered trials.
            </p>
          </ScrollReveal>
          <div className="mt-10" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {primaryPubs.map((p) => (
              <motion.div key={p.title} variants={staggerChild}>
              <GlassCard
                tone="neutral"
                accent="indigo"
                className="p-9 h-full transition-transform duration-200 hover:-translate-y-1"
                style={{ borderTop: "3px solid #1F1C98", borderLeft: "1px solid rgba(232,228,222,0.85)" }}
              >
                <p className="font-body text-[12px] text-neutral-slate uppercase tracking-[0.05em] font-bold mb-3">
                  {p.meta}
                </p>
                <h3 className="font-display font-semibold text-[24px] leading-[1.25] text-neutral-near-black mb-4">
                  {p.title}
                </h3>
                <div className="my-4">
                  <div className="flex items-baseline gap-1">
                    {p.statLeader && (
                      <span className="font-display text-[28px] text-brand-indigo">
                        {p.statLeader}
                      </span>
                    )}
                    <span
                      className="font-display font-bold text-brand-indigo tabular-nums"
                      style={{
                        fontSize: 56,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      <CountUp
                        target={p.statTarget}
                        decimals={p.statDecimals}
                        suffix={p.statSuffix}
                      />
                    </span>
                  </div>
                  <div className="mt-2 font-body font-bold text-[12px] uppercase tracking-[0.05em] text-neutral-slate">
                    {p.statDetail}
                  </div>
                </div>
                <p className="font-body text-[15px] leading-relaxed text-neutral-slate">
                  {p.body}
                </p>
                <a
                  href="#"
                  className="inline-flex mt-5 font-body font-bold text-[14px] text-brand-indigo hover:underline"
                >
                  View publication →
                </a>
              </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOUNDER PUBLICATIONS */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-cream">
        <BlurredBackdrop src="/images/home/stipple-man.png" tone="cream" imageOpacity={0.22} position="center 28%" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Other Publications by AugMend Staff</SectionLabel>
            <p className="mt-3 font-body text-[15px] text-neutral-slate max-w-[760px]">
              Peer-reviewed research by Alexandra Thérond, Sacha Moreau, and advisors that forms the evidence base for AugMend&rsquo;s clinical approach.
            </p>
          </ScrollReveal>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {founderPubs.map((p) => (
              <motion.div key={p.title} variants={staggerChild}>
              <GlassCard tone="neutral" className="p-7 h-full transition-transform duration-200 hover:-translate-y-0.5">
                <p className="font-body text-[12px] text-neutral-slate font-bold mb-2">
                  {p.authors}
                </p>
                <h4 className="font-body font-bold text-[16px] leading-[1.4] text-neutral-near-black mb-2">
                  {p.title}
                </h4>
                <p className="font-body text-[13px] text-neutral-slate leading-relaxed">
                  {p.journal}
                </p>
                <a
                  href={p.link ?? "#"}
                  target={p.link ? "_blank" : undefined}
                  rel={p.link ? "noopener noreferrer" : undefined}
                  className="inline-flex mt-4 font-body font-bold text-[13px] text-brand-indigo hover:underline"
                >
                  {p.link ? "Pre-publication link →" : "View publication →"}
                </a>
              </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* THIRD-PARTY */}
      <section
        id="third-party"
        className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Third Party Publications</SectionLabel>
            <h2 className="mt-3 leading-[1.2] max-w-[680px]">
              Independent research that informs our approach.
            </h2>
            <p className="mt-4 max-w-[680px] text-neutral-slate">
              Published by external researchers. Cited by AugMend to support clinical claims. All primary sources available via the links below.
            </p>
          </ScrollReveal>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {thirdPartyPubs.map((p) => (
              <motion.div key={p.title} variants={staggerChild}>
              <GlassCard tone="neutral" className="p-7 h-full transition-transform duration-200 hover:-translate-y-0.5">
                <p className="font-body text-[12px] text-neutral-slate font-bold mb-2">
                  {p.authors}
                </p>
                <h4 className="font-body font-bold text-[16px] leading-[1.4] text-neutral-near-black mb-2">
                  {p.title}
                </h4>
                <p className="font-body text-[13px] text-neutral-slate leading-relaxed">
                  {p.journal}
                </p>
                <a
                  href={p.link ?? "#"}
                  target={p.link ? "_blank" : undefined}
                  rel={p.link ? "noopener noreferrer" : undefined}
                  className="inline-flex mt-4 font-body font-bold text-[13px] text-brand-indigo hover:underline"
                >
                  View publication →
                </a>
              </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-8 font-body text-[14px] text-neutral-slate">
            Additional third-party citations available on request. Contact{" "}
            <a
              href="mailto:info@augmend.health"
              className="text-brand-indigo underline"
            >
              info@augmend.health
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-24 md:py-28"
        style={{ background: "linear-gradient(135deg, #0D0B3E 0%, #1F1C98 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-white mb-4" style={{ fontSize: 40 }}>
              Questions about the research?
            </h2>
            <p
              className="font-body mx-auto max-w-[640px] mb-9 text-[18px]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              We&rsquo;re happy to walk through the evidence base with your medical team or IRB.
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
