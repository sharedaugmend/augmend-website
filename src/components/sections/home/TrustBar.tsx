"use client"

import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"

const logos = [
  { src: "mit-sandbox.png", alt: "MIT Sandbox" },
  { src: "harvard-health.png", alt: "Harvard HealthLab Accelerator" },
  { src: "harvard-ilab.png", alt: "Harvard iLab" },
  { src: "mit-100k.png", alt: "MIT $100K" },
  { src: "mit-deltav.png", alt: "MIT Delta V" },
  { src: "masschallenge.png", alt: "MassChallenge" },
  { src: "nsf-icorps.png", alt: "NSF I-Corps" },
  { src: "sbxi.png", alt: "SBXI" },
  { src: "aapm.png", alt: "AAPM Innovation Challenge" },
]

export default function TrustBar() {
  return (
    <section className="bg-surface-white py-6 border-b border-neutral-border">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-4">
            <span className="font-body font-bold text-[11px] uppercase tracking-[0.07em] text-neutral-slate leading-none">
              Backed by
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {logos.map((logo) => (
                <Image
                  key={logo.src}
                  src={`/images/logos/${logo.src}`}
                  alt={logo.alt}
                  width={110}
                  height={26}
                  className="h-[26px] w-auto max-w-[110px] object-contain opacity-50 grayscale transition-opacity duration-200 hover:opacity-80"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
