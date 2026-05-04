"use client"

import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"

/**
 * Provider-facing stats only on the home page. Patient stats live on
 * /in-practice — landing page leads with clarity, depth lives in the
 * detailed pages.
 */
const providerStats: { value: string; tone: "indigo" | "orange"; label: string; sub: string }[] = [
  {
    value: "$83+",
    tone: "orange",
    label: "Per session in billable codes, day one.",
    sub: "Under existing CPT codes. Low up-front integration costs.",
  },
  {
    value: "12+",
    tone: "indigo",
    label: "Clinical domains captured per session.",
    sub: "Biopsychosocial, SDOH, history, safety in a single structured report.",
  },
  {
    value: "15+",
    tone: "indigo",
    label: "Minutes saved per encounter.",
    sub: "The provider walks in with full information. Documentation and administrative time drop.",
  },
]

export default function TheProof() {
  return (
    <section id="results" className="relative pt-20 pb-24 md:pb-28 bg-surface-warm-white">
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
        <ScrollReveal>
          <SectionLabel>The Results</SectionLabel>
          <h2
            className="mt-3 max-w-[760px]"
            style={{
              fontSize: "clamp(32px, 3.6vw, 48px)",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.015em",
            }}
          >
            What changes when clinics use AugMend.
          </h2>
          <p className="mt-4 max-w-[680px] text-neutral-slate text-[17px] leading-[1.65]">
            More provider availability, less administrative time lost, a complete clinical picture, billing-ready information from day one. Practice-leader ROI and patient outcomes detailed on the In Practice page.
          </p>
        </ScrollReveal>

        {/* Single horizontal row, no card boxes — MindScript inspiration */}
        <ScrollReveal>
          <div className="mt-14 flex flex-col md:flex-row items-stretch md:items-start divide-y md:divide-y-0">
            {providerStats.map((s, i) => (
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
                    fontSize: "clamp(48px, 6vw, 80px)",
                    fontWeight: 600,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: s.tone === "orange" ? "#E8843A" : "#1F1C98",
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

        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <Button variant="primary" href="/in-practice">
              See it in practice →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
