"use client"

import { Users, FileText } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import Button from "@/components/ui/Button"
import DotPattern from "@/components/ui/DotPattern"
import SolutionLayers from "@/components/ui/SolutionLayers"

export default function TheSolution() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-cream">
      <DotPattern variant="cream" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div>
            <ScrollReveal>
              <SectionLabel>The Solution</SectionLabel>
              <h2 className="mt-4">
                The clinical context layer for chronic and behavioral disorders designed to empower providers with the whole compounding patient picture.
              </h2>
              <p className="mt-6 text-neutral-slate">
                AugMend Health is a patient and provider facing clinical context layer that augments clinic capabilities through two AI agents working across the care journey to capture information otherwise missed in visits. For patients it goes deeper where it matters and remembers everything across sessions. Providers receive the information they need before the encounter, the care team reduces data capture burdens, clinics meet revenue cycle management objectives.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-white border border-neutral-border rounded-xl p-5 shadow-sm transition-all duration-150 hover:shadow-md hover:-translate-y-px" style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-5 w-5 text-brand-indigo" strokeWidth={1.5} />
                    <h4 className="text-sm">Patient-facing agent</h4>
                  </div>
                  <ul className="space-y-1.5 text-neutral-slate text-[13px]">
                    <li>Self-guided AI sessions on phone, tablet, or VR</li>
                    <li>No provider time consumed</li>
                    <li>Biopsychosocial data across configured domains</li>
                  </ul>
                </div>
                <div className="bg-surface-white border border-neutral-border rounded-xl p-5 shadow-sm transition-all duration-150 hover:shadow-md hover:-translate-y-px" style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-5 w-5 text-brand-indigo" strokeWidth={1.5} />
                    <h4 className="text-sm">Provider-facing agent</h4>
                  </div>
                  <ul className="space-y-1.5 text-neutral-slate text-[13px]">
                    <li>Reports via portal or EHR integration</li>
                    <li>Clinical report for decision-making</li>
                    <li>Billing-ready report for revenue cycle</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="mt-6 font-display italic text-lg text-neutral-near-black">
                The consultation starts with a relationship for an informed discussion and providers can focus on treatment decisions.
              </p>
              <div className="mt-6">
                <Button variant="primary" href="/platform/how-it-works">See How It Works &rarr;</Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Dot-density SVG component — fills full section height */}
          <ScrollReveal delay={0.1} className="hidden lg:flex items-center justify-center">
            <div className="w-full h-full flex items-center">
              <SolutionLayers className="w-full" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
