"use client"

import { useEffect, useRef, useState } from "react"
import SectionLabel from "@/components/ui/SectionLabel"

/**
 * Two-column scroll-pinned showcase of the sample clinical report.
 *
 * Layout:
 *   ┌──────────────────────┬───────────────────────┐
 *   │                      │  Header + subhead     │
 *   │  Sample report        │                       │
 *   │  (slowly scrolls       │  Insight pop-ups       │
 *   │   downward inside      │  surface in sequence    │
 *   │   the frame as the     │  as the user scrolls    │
 *   │   user scrolls)        │                         │
 *   │                      │                       │
 *   └──────────────────────┴───────────────────────┘
 *
 * Mechanic:
 *   • Section pins for ~340vh of scroll.
 *   • Inside the frame, the report iframe is translated upward as scroll
 *     progresses, so the user sees the report content travel by — like
 *     reading over a clinician's shoulder while they scroll their screen.
 *   • The right column starts with the heading + subhead, then five insight
 *     callouts surface one-by-one at scroll waypoints. As each new insight
 *     appears, the previous one fades to a smaller "stacked" state at the top
 *     so the chain of insights stays visible.
 */

interface InsightCallout {
  /** Scroll progress 0–1 at which this callout reaches full attention. */
  at: number
  label: string
  value: string
  body: string
  tone: "warn" | "indigo" | "good" | "flag"
}

const callouts: InsightCallout[] = [
  {
    at: 0.18,
    label: "Pain (worst)",
    value: "8 / 10",
    body: "Patient self-report on a narrative VAS, captured across both intake sessions without a clinician present.",
    tone: "warn",
  },
  {
    at: 0.36,
    label: "Risk",
    value: "T1 Low — Monitor",
    body: "Functional safety: right-knee instability on stair descent under load. Patient acknowledged. Programmatic, not diagnostic.",
    tone: "flag",
  },
  {
    at: 0.54,
    label: "Mental health",
    value: "PHQ-8 0%",
    body: "No depression signal. PCS 0%. GAD-7 below threshold. Suicidality denied. Substance-use screening clean.",
    tone: "good",
  },
  {
    at: 0.72,
    label: "Source-linked",
    value: "Every claim",
    body: "Every clinical assertion is dotted-underlined and traces to the patient's own words in the source transcript.",
    tone: "indigo",
  },
  {
    at: 0.88,
    label: "Built for review",
    value: "Two-minute brief",
    body: "Five-bullet rapid review at the top, eleven domains expanding inline below, provider reads what they need, when they need it.",
    tone: "indigo",
  },
]

const toneStyles: Record<InsightCallout["tone"], { accent: string; eyebrow: string }> = {
  warn:   { accent: "#B91C1C", eyebrow: "#B91C1C" },
  flag:   { accent: "#E8843A", eyebrow: "#A06028" },
  good:   { accent: "#5F8C3F", eyebrow: "#5F8C3F" },
  indigo: { accent: "#1F1C98", eyebrow: "#1F1C98" },
}

export default function ReportScrollthrough() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  // The scroll-pinned, translating-iframe choreography is desktop-only —
  // on phones and small tablets it doesn't fit the viewport and the report
  // text is unreadable when scaled. Switch to a static stack below lg.
  // SSR-safe: initial value matches the server (desktop assumption); the
  // useEffect below corrects it after hydration. Initializing from `window`
  // would cause a hydration mismatch.
  const [isDesktop, setIsDesktop] = useState<boolean>(true)
  // Below lg, the static layout uses fully-revealed values without writing state.
  const displayProgress = isDesktop ? progress : 1

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)")
    setIsDesktop(mql.matches)
    const update = () => setIsDesktop(mql.matches)
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!isDesktop) return
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setProgress(1)
      return
    }
    function onScroll() {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) {
        setProgress(rect.top < 0 ? 1 : 0)
        return
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      setProgress(scrolled / total)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [isDesktop])

  // The report content scrolls upward inside its frame. Use a generous range
  // so the iframe content actually travels — the report is long.
  const reportTranslate = -displayProgress * 1800 // px of upward translation

  // Determine the currently-active callout. Anything earlier is "stacked".
  const activeIndex = callouts.findIndex((c, i) => {
    const next = callouts[i + 1]
    return displayProgress >= c.at - 0.06 && (next == null || displayProgress < next.at - 0.06)
  })
  const effectiveActive = activeIndex === -1 ? -1 : activeIndex

  // ── MOBILE / TABLET — static, scannable layout ───────────────────────────
  if (!isDesktop) {
    return (
      <section
        ref={sectionRef}
        aria-label="Sample clinical report"
        className="relative bg-surface-warm-white py-16"
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionLabel>The Output</SectionLabel>
          <h2
            className="mt-3"
            style={{
              fontSize: "clamp(26px, 6vw, 34px)",
              fontWeight: 600,
              lineHeight: 1.18,
              letterSpacing: "-0.015em",
            }}
          >
            The right report format for the right information.
          </h2>
          <p
            className="mt-3 font-body text-neutral-slate"
            style={{ fontSize: 15, lineHeight: 1.6 }}
          >
            Every session generates structured outputs from the same data: a clinical report for review, billing-ready documentation, and the source transcript behind every claim.
          </p>

          {/* Static report preview — scrollable inside its own frame so the
              user can browse without the section taking over the page. */}
          <div
            className="relative mt-8 rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(31, 28, 152, 0.12)",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.7) inset, 0 18px 40px -16px rgba(13,11,62,0.16)",
              background: "#EFE9DA",
              height: 480,
            }}
          >
            <div
              className="flex items-center gap-2 px-3 h-7"
              style={{
                background: "rgba(255, 255, 255, 0.65)",
                borderBottom: "1px solid rgba(31, 28, 152, 0.08)",
              }}
              aria-hidden="true"
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "#E5DECC" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "#E5DECC" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "#E5DECC" }} />
              <span
                className="ml-2 font-body text-[9px] tracking-[0.04em] truncate"
                style={{ color: "#5A5A6E" }}
              >
                augmend.health · admin · john p.
              </span>
            </div>
            <iframe
              src="/samples/redacted-report.html"
              title="Sample clinical report"
              className="w-full border-0 block"
              style={{ height: "calc(100% - 28px)" }}
            />
          </div>
          <p className="mt-3 font-body text-[12px] text-neutral-slate">
            Scroll inside the frame to read the full sample report.
          </p>

          {/* Static stack of all five insights — the desktop crossfade is
              replaced by a scannable list. */}
          <ul className="mt-10 flex flex-col gap-4">
            {callouts.map((c, i) => {
              const t = toneStyles[c.tone]
              return (
                <li
                  key={i}
                  className="rounded-xl px-5 py-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(31, 28, 152, 0.10)",
                    borderLeft: `3px solid ${t.accent}`,
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 2px rgba(13,11,62,0.04), 0 12px 28px -12px rgba(13,11,62,0.12)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div
                      className="font-body font-bold text-[10.5px] uppercase tracking-[0.08em]"
                      style={{ color: t.eyebrow }}
                    >
                      {c.label}
                    </div>
                    <div
                      className="font-body font-bold text-[10.5px] tabular-nums"
                      style={{ color: "rgba(110, 107, 133, 0.7)" }}
                    >
                      {String(i + 1).padStart(2, "0")} / {String(callouts.length).padStart(2, "0")}
                    </div>
                  </div>
                  <div
                    className="font-display mb-1"
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: 1.2,
                      letterSpacing: "-0.012em",
                      color: "#1B1A4A",
                    }}
                  >
                    {c.value}
                  </div>
                  <p
                    className="font-body text-neutral-slate"
                    style={{ fontSize: 13, lineHeight: 1.55 }}
                  >
                    {c.body}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }

  // ── DESKTOP — original scroll-pinned choreography ────────────────────────
  return (
    <section
      ref={sectionRef}
      aria-label="Sample clinical report"
      className="relative bg-surface-warm-white"
      style={{ height: "340vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 h-full items-center py-16 md:py-20">

            {/* LEFT — sample report inside a frosted frame; content scrolls
                upward inside the frame as the user scrolls the page. */}
            <div className="relative h-full max-h-[720px] flex flex-col items-stretch justify-center">
              <div
                className="relative w-full flex-1 rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(31, 28, 152, 0.12)",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.7) inset, 0 24px 60px -20px rgba(13,11,62,0.18)",
                  background: "#EFE9DA",
                }}
              >
                {/* Browser-chrome bar so this reads as "your team's screen" */}
                <div
                  className="absolute top-0 inset-x-0 z-10 flex items-center gap-2 px-4 h-8"
                  style={{
                    background: "rgba(255, 255, 255, 0.65)",
                    borderBottom: "1px solid rgba(31, 28, 152, 0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                  aria-hidden="true"
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E5DECC" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E5DECC" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E5DECC" }} />
                  <span
                    className="ml-3 font-body text-[10px] tracking-[0.04em]"
                    style={{ color: "#5A5A6E" }}
                  >
                    augmend.health · admin · john p. · initial assessment
                  </span>
                </div>

                {/* The translating iframe wrapper — the iframe itself stays
                    1080px tall (taller than the frame) and we translate it
                    upward to reveal the content beneath. */}
                <div
                  className="absolute inset-0 pt-8"
                  style={{
                    transform: `translateY(${reportTranslate}px)`,
                    transition: "transform 80ms linear",
                    willChange: "transform",
                  }}
                >
                  <iframe
                    src="/samples/redacted-report.html"
                    title="Sample clinical report"
                    className="w-full border-0 pointer-events-none block"
                    style={{ height: "2400px" }}
                    scrolling="no"
                    tabIndex={-1}
                  />
                </div>

                {/* Top + bottom soft fades so the translation feels like a
                    moving window rather than a hard cut */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-8 h-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(239,233,218,0.95) 0%, rgba(239,233,218,0) 100%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                  style={{
                    background: "linear-gradient(0deg, rgba(239,233,218,0.95) 0%, rgba(239,233,218,0) 100%)",
                  }}
                />
              </div>
              {/* Progress dots tucked below the report frame */}
              <div className="mt-4 flex items-center gap-2" aria-hidden="true">
                {callouts.map((c, i) => {
                  const active = displayProgress >= c.at - 0.05
                  return (
                    <span
                      key={i}
                      className="h-[3px] rounded-full transition-all duration-300"
                      style={{
                        width: active ? 24 : 12,
                        background: active ? "#1F1C98" : "rgba(31,28,152,0.16)",
                      }}
                    />
                  )
                })}
              </div>
            </div>

            {/* RIGHT — header, subhead, and stack of insight callouts */}
            <div className="relative flex flex-col h-full max-h-[720px] py-2">
              <SectionLabel>The Output</SectionLabel>
              <h2
                className="mt-3"
                style={{
                  fontSize: "clamp(28px, 2.6vw, 36px)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: "-0.015em",
                }}
              >
                The right report format for the right information.
              </h2>
              <p
                className="mt-3 font-body text-neutral-slate"
                style={{ fontSize: 15.5, lineHeight: 1.6 }}
              >
                Every session generates structured outputs from the same data: a clinical report for review, billing-ready documentation, and the source transcript behind every claim. For example, scroll to see what your team reads on day one.
              </p>

              {/* Insight crossfade — only the active callout is visible.
                  When a new waypoint is reached, the prior card slides up and
                  fades out while the new one slides up from below and fades
                  in. No transparency stack, no z-index gymnastics — focus
                  stays on the current insight. The progress dots below the
                  report act as the chain indicator. */}
              <div className="mt-6 relative flex-1 flex flex-col justify-end pb-2">
                {/* Pre-reserve enough vertical space for the tallest card so
                    layout doesn't jump as cards swap */}
                <div className="relative" style={{ minHeight: 200 }}>
                  {callouts.map((c, i) => {
                    const isActive = i === effectiveActive
                    const isPast = effectiveActive > i
                    const isFuture = effectiveActive < i || effectiveActive === -1

                    let translateY = 0
                    let opacity = 0

                    if (isActive) {
                      translateY = 0
                      opacity = 1
                    } else if (isPast) {
                      // Slid up + faded out
                      translateY = -24
                      opacity = 0
                    } else if (isFuture) {
                      // Waiting below
                      translateY = 24
                      opacity = 0
                    }

                    const t = toneStyles[c.tone]

                    return (
                      <div
                        key={i}
                        className="absolute inset-x-0 bottom-0"
                        style={{
                          opacity,
                          transform: `translateY(${translateY}px)`,
                          transition:
                            "opacity 360ms cubic-bezier(0.23,1,0.32,1), transform 360ms cubic-bezier(0.23,1,0.32,1)",
                          pointerEvents: isActive ? "auto" : "none",
                        }}
                      >
                        <div
                          className="rounded-xl px-6 py-5"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid rgba(31, 28, 152, 0.10)",
                            borderLeft: `3px solid ${t.accent}`,
                            boxShadow:
                              "inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 2px rgba(13,11,62,0.04), 0 18px 40px -12px rgba(13,11,62,0.14)",
                          }}
                        >
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <div
                              className="font-body font-bold text-[10.5px] uppercase tracking-[0.08em]"
                              style={{ color: t.eyebrow }}
                            >
                              {c.label}
                            </div>
                            <div
                              className="font-body font-bold text-[10.5px] tabular-nums"
                              style={{ color: "rgba(110, 107, 133, 0.7)" }}
                            >
                              {String(i + 1).padStart(2, "0")} / {String(callouts.length).padStart(2, "0")}
                            </div>
                          </div>
                          <div
                            className="font-display mb-1.5"
                            style={{
                              fontSize: 24,
                              fontWeight: 600,
                              lineHeight: 1.15,
                              letterSpacing: "-0.012em",
                              color: "#1B1A4A",
                            }}
                          >
                            {c.value}
                          </div>
                          <p
                            className="font-body text-neutral-slate"
                            style={{ fontSize: 13.5, lineHeight: 1.55 }}
                          >
                            {c.body}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
