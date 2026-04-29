"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import GlassCard from "@/components/ui/GlassCard"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

/**
 * Two pillars: Intakes + Exercises. Other session types live in the
 * detailed How It Works page; the home teaser keeps the spotlight on the two
 * we have nailed and the patient-journey follow-ons that flow from them.
 */
const pillars = [
  {
    label: "Intakes",
    tone: "indigo" as const,
    accent: "indigo" as const,
    title: "Structured biopsychosocial conversations, before the visit.",
    body:
      "Non-clinical staff launch the session. The AI avatar conducts the intake across the clinical domains your team configured. The provider walks in with a structured brief — ready to act on, not to compile.",
  },
  {
    label: "Exercises",
    tone: "lime" as const,
    accent: "lime" as const,
    title: "Prescribed VR exercises, informed by the patient's own data.",
    body:
      "Relaxation, pain management, psychoeducation. Provider prescribes; patient practices in clinic or at home. Engagement and progress flow back into the next clinical brief.",
  },
]

// Bubble positions are pixel offsets relative to the avatar wrapper. They
// straddle the avatar's silhouette — partly inside the wrapper (overlapping
// the avatar) and partly outside, so they read as floating around it.
const bubbles: { text: string; pos: React.CSSProperties; delay: string }[] = [
  { text: "“pain constant, 4/10”", pos: { top: 16, left: -40 }, delay: "0s" },
  { text: "“sleeps 5 hrs a night”", pos: { top: 90, right: -32 }, delay: "-2s" },
  { text: "“financial stress → anxiety”", pos: { bottom: 80, left: -48 }, delay: "-4s" },
  { text: "“skips doses 3×/week”", pos: { bottom: 18, right: -28 }, delay: "-1s" },
]

export default function HowItWorksTeaser() {
  return (
    // pb-0 + matching pt-0 on TheProof = zero gap. The avatar lives in the
    // right column, items-end aligns it to the bottom of the grid row, so
    // its base sits flush at the seam between this section and Results,
    // creating the "straddling" feel without overlapping content.
    <section
      id="how-it-works"
      className="relative pt-20 md:pt-24 pb-20 bg-surface-warm-white overflow-visible"
    >
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
        <ScrollReveal>
          <SectionLabel>How It Works</SectionLabel>
          <h2
            className="mt-3 max-w-[760px]"
            style={{
              fontSize: "clamp(32px, 3.6vw, 48px)",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.015em",
            }}
          >
            Two things AugMend does best: <em className="italic" style={{ fontWeight: 500 }}>intakes and exercises.</em>
          </h2>
          <p className="mt-4 max-w-[680px] text-neutral-slate text-[17px] leading-[1.65]">
            Each session has a specific job in the patient&rsquo;s care journey. Follow-on sessions track what changes between visits and close out the care episode.
          </p>
        </ScrollReveal>

        {/* Two-column layout:
            • LEFT: Intakes + Exercises cards, then the primary button below.
            • RIGHT: Avatar with floating symptom bubbles, sized so its bottom
              aligns with the bottom of the section. items-end on the grid
              row anchors the avatar to the seam. */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-12 items-end">
          {/* LEFT COLUMN */}
          <div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerParent}
            >
              {pillars.map((p) => (
                <motion.div key={p.label} variants={staggerChild}>
                  <GlassCard tone={p.tone} accent={p.accent} className="p-7 h-full">
                    <div
                      className="font-body font-bold text-[11px] uppercase tracking-[0.06em] mb-3"
                      style={{ color: p.accent === "lime" ? "#4a6000" : "#1F1C98" }}
                    >
                      {p.label}
                    </div>
                    <h3
                      className="font-display text-neutral-near-black mb-3"
                      style={{ fontSize: 21, fontWeight: 500, lineHeight: 1.28 }}
                    >
                      {p.title}
                    </h3>
                    <p className="font-body text-[14.5px] leading-[1.6] text-neutral-slate">
                      {p.body}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            <ScrollReveal>
              <div className="mt-8">
                <Button variant="primary" href="/platform/how-it-works">
                  See full platform overview →
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN — avatar + bubbles. The whole wrapper translates
              down so the avatar straddles into Results, with extra section
              padding to keep the drop-shadow from getting clipped. */}
          <div className="hidden md:flex justify-center pb-10" aria-hidden="true">
            <div
              className="relative"
              style={{
                width: 260,
                height: 320,
                transform: "translateY(40px)",
              }}
            >
              <Image
                src="/images/home/avatar-robot-2.png"
                alt=""
                fill
                sizes="260px"
                className="object-contain"
                style={{
                  filter: "drop-shadow(0 28px 48px rgba(31,28,152,0.22))",
                }}
              />
              {bubbles.map((b, i) => (
                <GlassCard
                  key={i}
                  tone="neutral"
                  className="absolute font-body text-[12px] text-neutral-near-black whitespace-nowrap px-3.5 py-2 z-10"
                  style={{
                    ...b.pos,
                    animation: "bubble-float 6s ease-in-out infinite",
                    animationDelay: b.delay,
                  }}
                >
                  {b.text}
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bubble-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="bubble-float"] { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
