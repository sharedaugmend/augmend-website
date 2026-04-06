"use client"

import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function SeeWhatYoureMissing() {
  return (
    <section className="relative overflow-hidden bg-brand-deep-space py-12 md:py-16 xl:py-24">
      <Image
        src="/images/illustrations/running-phrases-indigo-1.png"
        alt=""
        fill
        className="absolute inset-0 object-cover z-0 opacity-30 pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
        <ScrollReveal>
          <h2 className="text-white">See what your intake is missing.</h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto font-body text-lg">
            Our team includes clinicians, health economists, and engineers who help adapt the platform to your workflow.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
