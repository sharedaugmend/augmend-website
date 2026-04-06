"use client"

import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import SectionLabel from "@/components/ui/SectionLabel"

export default function TheSolution() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 xl:py-24" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="mt-4 max-w-xl">
              Elevate Care Quality, Simplify Your Workflow.
            </h2>
            <p className="mt-6 text-neutral-slate max-w-2xl">
              Patients with chronic conditions carry biopsychosocial complexity the current healthcare system was never designed to capture. AugMend captures it through conversational AI sessions configured by providers that produce structured clinical reports and billing documentation, from intake to exit. Consults can now start with a relationship, focused discussion and decisions, not history-taking and ticking boxes. Providers use their expertise on the patient, not on paperwork.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Image
              src="/images/illustrations/the-solution-full-picture.png"
              alt="The full clinical picture, structured data emerging from patient conversations"
              width={640}
              height={480}
              className="w-full h-auto"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
