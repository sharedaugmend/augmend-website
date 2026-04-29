"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import FloatingDotBar from "@/components/ui/FloatingDotBar"

type StatRef = (typeof stats)[number]

const stats = [
  {
    value: "60–80%",
    label: "Of patients have withheld medically relevant information from their clinicians.",
    detail:
      "Including symptoms, medications, lifestyle factors, mental health concerns, and disagreement with provider recommendations.",
    ref: "[1]",
  },
  {
    value: "~2 hrs",
    label: "Of EHR and clerical work for every 1 hour of patient face time.",
    detail:
      "The documentation burden consumes provider capacity that should be spent on clinical decision-making and patient care.",
    ref: "[2]",
  },
  {
    value: "86,000",
    label: "Projected physician shortage by 2036.",
    detail:
      "Fewer providers serving more patients with increasingly complex needs. The capacity gap is structural and widening.",
    ref: "[3]",
  },
  {
    value: "3–8%",
    label: "Of net collectible revenue lost to incomplete documentation.",
    detail:
      "For a specialty provider generating $700K in annual collections, that is $21K–$56K per provider, per year.",
    ref: "[4][5][6]",
  },
] as const

const references = [
  { id: 1, text: 'Levy AG, et al. "Patient Nondisclosure of Medically Relevant Information." JAMA Network Open. 2018.' },
  { id: 2, text: 'AMA Policy Research Perspectives. "Physician time spent on EHR and clerical tasks." 2024.' },
  { id: 3, text: 'AAMC. "Physician Supply and Demand: Projections From 2021 to 2036." March 2024.' },
  { id: 4, text: "AHIMA. Documentation impact on revenue. MedLearn Publishing, 2023." },
  { id: 5, text: "Chandawarkar et al., 2024 in Plastic and Reconstructive Surgery Global Open." },
  { id: 6, text: "McKinsey & Company. Healthcare revenue cycle efficiency analysis. Open Practice, 2023." },
]

/**
 * Inspiration-2 horizontal stats row — big numbers, thin vertical dividers,
 * inline dropdown chevron for the detail. No card boxes, no padding theatre.
 */
function HorizontalStat({ stat, divider }: { stat: StatRef; divider: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="flex-1 flex flex-col items-start text-left px-2 md:px-3 py-1"
      style={{
        borderLeft: divider ? "1px solid rgba(31,28,152,0.10)" : undefined,
        minWidth: 0,
        // Account for the borderLeft 1px so the value aligns to the left
        // edge of the cell content area without the border eating into it
        paddingLeft: divider ? undefined : 0,
      }}
    >
      <div
        className="font-display text-brand-indigo tabular-nums"
        style={{
          fontSize: "clamp(22px, 2vw, 32px)",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {stat.value}
      </div>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-3 inline-flex items-start gap-1.5 text-left group"
      >
        <span className="font-body text-neutral-slate text-[12.5px] leading-snug">
          {stat.label}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-neutral-slate shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-2 font-body text-[11.5px] text-neutral-slate leading-relaxed">
              {stat.detail} <span className="text-neutral-slate">{stat.ref}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

type Stage = 0 | 1 | 2 | 3 | 4 | 5

/**
 * Sticky-pinned section. As the user scrolls through it, scroll progress maps
 * to a stage 0..5. Each stage reveals one bar (and one bullet of patient context),
 * so the chart and the patient profile fill out together — like a clinical
 * brief is being assembled in real time.
 */
function WhatGetsLeftOut() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [stage, setStage] = useState<Stage>(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setStage(5)
      return
    }

    function onScroll() {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) {
        setStage(rect.top < 0 ? 5 : 0)
        return
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      const p = scrolled / total // 0..1
      // Six stages mapped across 6 evenly-sized scroll buckets.
      const next = Math.min(5, Math.floor(p * 6)) as Stage
      setStage(next)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Bar fills + accent ratios per stage:
  // 0  : nothing
  // 1  : "what patients disclose" (30%, pure indigo)
  // 2  : "what patients experience" (100%, pure indigo) — reveals the gap
  // 3  : "AugMend captures" (70%, ~50% lime accent — the new info AugMend surfaces)
  // 4  : "AugMend + care team" (90%, ~65% lime accent — additional info from care team)
  // 5  : hold — everything settled
  const disclose = stage >= 1 ? 0.3 : 0
  const experience = stage >= 2 ? 1.0 : 0
  const aug = stage >= 3 ? 0.7 : 0
  const augTeam = stage >= 4 ? 0.9 : 0

  // Patient-detail reveal — each step adds one new line.
  const patientLines = [
    { label: "Patient", body: "Maria, 58 — chronic pain. Diabetic." },
    { label: "Disclosed", body: "Tells her provider she is managing." },
    {
      label: "Surfaced by AugMend",
      body: "Lives with her daughter. No car, no access to the pharmacy two miles away.",
      accent: true,
    },
    {
      label: "Care team adds",
      body: "Skips doses. Anxious about the cost. Never mentioned in prior visits.",
      accent: true,
    },
  ]
  const visibleLines = Math.min(stage, patientLines.length)

  return (
    <section ref={sectionRef} className="relative" style={{ height: "320vh" }}>
      <div
        className="sticky top-0 h-screen flex items-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, #1a1660 0%, #0f0c46 45%, #070625 100%)",
        }}
      >
        {/* Top edge fade — softens the hand-off from the warm-white band above. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(252,250,244,0.18) 0%, rgba(252,250,244,0) 100%)",
          }}
        />
        {/* Subtle dot grain so the dark surface doesn't read as flat */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E\")",
            opacity: 0.6,
          }}
        />

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 w-full py-8 md:py-10">
          <ScrollReveal>
            <p
              className="font-body font-bold text-[12px] uppercase tracking-[0.05em] mb-6"
              style={{ color: "rgba(255,255,255,0.62)" }}
            >
              What gets left out of every standard intake
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-10 xl:gap-14 items-stretch">
            {/* Bar chart with floating-dot bars — same height as patient card */}
            <div className="flex items-end gap-4 md:gap-6 justify-between">
              <FloatingDotBar
                variant="dark"
                fill={disclose}
                accentRatio={0}
                height={460}
                width={140}
                label={
                  <>
                    What patients<br />disclose
                  </>
                }
                ariaLabel="What patients disclose: 30%"
              />
              <FloatingDotBar
                variant="dark"
                fill={aug}
                accentRatio={aug ? 0.5 : 0}
                height={460}
                width={140}
                label={
                  <>
                    AugMend<br />captures
                  </>
                }
                ariaLabel="AugMend captures: 70%"
              />
              <FloatingDotBar
                variant="dark"
                fill={augTeam}
                accentRatio={augTeam ? 0.65 : 0}
                height={460}
                width={140}
                label={
                  <>
                    AugMend +<br />care team
                  </>
                }
                ariaLabel="AugMend with care team: 90%"
              />
              <FloatingDotBar
                variant="dark"
                fill={experience}
                accentRatio={0}
                height={460}
                width={140}
                label={
                  <>
                    What patients<br />experience
                  </>
                }
                ariaLabel="What patients experience: 100%"
              />
            </div>

            {/* Animated patient profile — frosted glass on the dark surface,
                same total height as the bar chart. */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                backdropFilter: "blur(20px) saturate(140%)",
                WebkitBackdropFilter: "blur(20px) saturate(140%)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -20px rgba(0,0,0,0.55)",
                borderLeft: "3px solid #B8D94E",
              }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/home/pensive-woman.png"
                  alt="Photorealistic portrait of a pensive woman"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                  style={{
                    filter: "saturate(0.85) contrast(1.02) brightness(0.95)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(7,6,37,0) 60%, rgba(7,6,37,0.55) 100%)",
                  }}
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <p
                  className="font-body font-bold text-[11px] uppercase tracking-[0.06em] mb-4"
                  style={{ color: "#C7DC6F" }}
                >
                  Patient profile · filling out
                </p>
                <ul className="flex flex-col gap-3">
                  {patientLines.map((line, i) => {
                    const visible = i < visibleLines
                    return (
                      <li
                        key={line.label}
                        className="flex flex-col gap-0.5"
                        style={{
                          opacity: visible ? 1 : 0.18,
                          transform: visible ? "translateY(0)" : "translateY(6px)",
                          transition:
                            "opacity 350ms cubic-bezier(0.23,1,0.32,1), transform 350ms cubic-bezier(0.23,1,0.32,1)",
                        }}
                      >
                        <span
                          className="font-body font-bold text-[10px] uppercase tracking-[0.06em]"
                          style={{
                            color: line.accent ? "#C7DC6F" : "rgba(255,255,255,0.55)",
                          }}
                        >
                          {line.label}
                        </span>
                        <span
                          className="font-body text-[14px] leading-snug"
                          style={{
                            color: line.accent ? "#FFFFFF" : "rgba(255,255,255,0.82)",
                            fontWeight: line.accent ? 500 : 400,
                          }}
                        >
                          {line.body}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Tiny progress indicator so people sense the section is "playing" */}
          <div className="mt-8 flex items-center gap-2 max-w-[640px]">
            {[1, 2, 3, 4, 5].map((s) => (
              <span
                key={s}
                aria-hidden="true"
                className="flex-1 h-[2px] rounded-full"
                style={{
                  background:
                    stage >= s ? "#B8D94E" : "rgba(255,255,255,0.12)",
                  transition: "background 240ms ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TheProblem() {
  const [refsOpen, setRefsOpen] = useState(false)

  return (
    <>
      {/* Single unified problem section — text + portrait + stats live together
          so the band reads as one composition rather than three. */}
      <section
        id="the-problem"
        className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20 bg-surface-warm-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10 lg:gap-16 items-start">
            <div>
              <ScrollReveal>
                <SectionLabel>The Problem</SectionLabel>
                <h2
                  className="mt-3"
                  style={{
                    fontSize: "clamp(32px, 3.6vw, 48px)",
                    fontWeight: 600,
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                  }}
                >
                  Doctors used to have time to <em className="italic" style={{ fontWeight: 500 }}>hear the full story.</em>
                </h2>
                <p className="mt-5 text-neutral-slate text-[17px] leading-[1.65]">
                  Today, providers spend more time on documentation than on the conversations that drive diagnosis. Patients hold back. Critical clinical information never surfaces. Clinics leave revenue on the table for work they have already done.
                </p>
                <p className="mt-4 text-neutral-slate text-[17px] leading-[1.65]">
                  The gap is not a failure of care. It is a failure of infrastructure.
                </p>
              </ScrollReveal>

              {/* Stats live directly under the text — same column, same band. */}
              <ScrollReveal delay={0.1}>
                <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-start divide-y md:divide-y-0">
                  {stats.map((s, i) => (
                    <HorizontalStat key={s.value} stat={s} divider={i > 0} />
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setRefsOpen((v) => !v)}
                    aria-expanded={refsOpen}
                    className="inline-flex items-center gap-2 font-body text-xs text-neutral-slate hover:text-neutral-near-black transition-colors"
                  >
                    <span>References</span>
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${refsOpen ? "rotate-180" : ""}`}
                      strokeWidth={2}
                    />
                  </button>
                  <AnimatePresence>
                    {refsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 space-y-1 overflow-hidden text-left"
                      >
                        {references.map((r) => (
                          <p key={r.id} className="font-body text-[11px] text-neutral-slate leading-relaxed">
                            [{r.id}] {r.text}
                          </p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/home/doctor-portrait-cinematic.png"
                alt="Distinguished older clinician in cinematic film-style portrait"
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 -60px 80px -40px rgba(13,11,62,0.18)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky-pinned scroll-driven chart + animated patient profile */}
      <WhatGetsLeftOut />
    </>
  )
}
