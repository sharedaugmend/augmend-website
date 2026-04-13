"use client"

import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"

const logos = [
  "HarvardHealthLab-Logo.png",
  "MIT Delta V Logo.png",
  "MIT-100K-logo.png",
  "MassChallenge-logo.png",
  "NSF_ICORPS_Logo.png",
]

export default function TrustBar() {
  return (
    <section className="bg-surface-warm-white py-6 border-b border-neutral-border/50">
      <div className="mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            <span className="font-body text-[12px] text-neutral-mist uppercase tracking-wider">Backed by</span>
            {logos.map((logo) => (
              <Image
                key={logo}
                src={`/images/logos/${logo}`}
                alt={logo.replace(/[-_]/g, " ").replace(".png", "")}
                width={100}
                height={36}
                className="h-7 w-auto object-contain opacity-40 grayscale"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
