"use client"

import Image from "next/image"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import GlassCard from "@/components/ui/GlassCard"
import ProviderReportVisual from "@/components/ui/ProviderReportVisual"
import PullQuote from "@/components/ui/PullQuote"

export default function TheSolution() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28 bg-surface-cream">
      {/* Soft dot grain — gives the cream surface a hint of texture so cards
          have something to read against. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1' fill='%231F1C98' fill-opacity='0.05'/%3E%3C/svg%3E\")",
          opacity: 0.55,
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
        <ScrollReveal>
          <SectionLabel>The Solution</SectionLabel>
          <h2
            className="mt-3 max-w-[860px]"
            style={{
              fontSize: "clamp(32px, 3.6vw, 48px)",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.015em",
            }}
          >
            A clinical context layer that gives providers the <em className="italic" style={{ fontWeight: 500 }}>whole patient picture.</em>
          </h2>
          <p className="mt-5 text-neutral-slate text-[17px] leading-[1.65] max-w-[760px]">
            The software uses two AI systems that work across the care journey to capture clinical context otherwise missed in visits. Patients go deeper where it matters, and the system remembers everything across sessions. Providers walk in informed; the care team carries less data-capture burden, and clinics better meet revenue cycle objectives.
          </p>
        </ScrollReveal>

        {/* Row 1 — Patient-facing: text left, visual right */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollReveal>
            <div className="max-w-[520px]">
              <div
                className="font-body font-bold text-[12px] uppercase tracking-[0.06em] mb-3"
                style={{ color: "#4a6000" }}
              >
                Patient-facing system
              </div>
              <h3
                className="font-display text-neutral-near-black mb-4"
                style={{ fontSize: "clamp(24px, 2.4vw, 30px)", fontWeight: 500, lineHeight: 1.22 }}
              >
                Self-guided VR sessions, run by non-medical staff.
              </h3>
              <p className="font-body text-[16px] leading-[1.65] text-neutral-slate">
                A non-human AI avatar in a calming VR environment conducts structured intake, follow-up visits, and prescribed exercises. Patients share more — and the system remembers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlassCard
              tone="lime"
              accent="lime"
              className="overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/home/hands-offer-headset.jpg"
                  alt="A patient receives a VR headset from a provider"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Row 2 — Provider-facing: visual left, text right */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollReveal>
            <GlassCard tone="indigo" accent="indigo" className="p-3 sm:p-5 lg:p-7 lg:order-1">
              <ProviderReportVisual className="w-full" />
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-[520px] lg:order-2">
              <div className="font-body font-bold text-[12px] uppercase tracking-[0.06em] text-brand-indigo mb-3">
                Provider-facing system
              </div>
              <h3
                className="font-display text-neutral-near-black mb-4"
                style={{ fontSize: "clamp(24px, 2.4vw, 30px)", fontWeight: 500, lineHeight: 1.22 }}
              >
                Clinical brief and billing-ready report, before the face-to-face visit with a provider.
              </h3>
              <p className="font-body text-[16px] leading-[1.65] text-neutral-slate">
                A structured clinical brief, billing-ready documentation, and cross-session insights — reviewed quickly before the appointment. Every claim links back to the patient&rsquo;s own words.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Pull quote — same frosted-glass treatment used elsewhere on the
            page so quotes read as one consistent voice. */}
        <ScrollReveal>
          <div className="mt-16 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12">
            <PullQuote cite="Trial participant · Boston RCT, n=45">
              &ldquo;For the first time I felt like someone was actually taking the time to listen to my issues and needs.&rdquo;
            </PullQuote>

            <div className="flex flex-wrap gap-4 lg:ml-auto lg:pb-2">
              <Button variant="primary" href="/platform/how-it-works">
                See How It Works →
              </Button>
              <Button variant="secondary" href="/evidence">
                Read the Evidence
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
