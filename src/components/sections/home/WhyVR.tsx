"use client"

import { useEffect, useRef, useState } from "react"
import SectionLabel from "@/components/ui/SectionLabel"
import Button from "@/components/ui/Button"
import PullQuote from "@/components/ui/PullQuote"

/**
 * Full-screen scroll-through video section. As the user scrolls through it,
 * the video stays sticky behind a darkening overlay; the Why-VR copy fades
 * in over the top.
 */
export default function WhyVR() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0) // 0 → 1 across the section

  useEffect(() => {
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
  }, [])

  // Overlay darkens as the reader scrolls, so the copy stays readable.
  const overlayAlpha = 0.40 + progress * 0.40 // 0.40 → 0.80
  // Copy fades in early and stays visible across the full pinned section
  // (no late-stage fade-out — the header was disappearing before the section
  // had finished scrolling on smaller laptops).
  const copyOpacity = Math.min(1, Math.max(0, (progress - 0.05) * 2.4))
  const copyTranslate = (1 - copyOpacity) * 20

  return (
    <section
      ref={sectionRef}
      aria-label="Why VR"
      className="relative"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Looping background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hands-holding.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        {/* Progressive dark overlay for readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-colors"
          style={{
            background: `linear-gradient(180deg, rgba(13,11,62,${overlayAlpha * 0.6}) 0%, rgba(13,11,62,${overlayAlpha}) 50%, rgba(13,11,62,${overlayAlpha * 0.85}) 100%)`,
          }}
        />

        {/* Foreground copy. Padding tightens at smaller heights so the header
            doesn't get clipped on a 13-inch laptop. */}
        <div className="relative z-10 h-full flex items-center py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] w-full px-6 md:px-12">
            <div
              className="max-w-[640px]"
              style={{
                opacity: copyOpacity,
                transform: `translateY(${copyTranslate}px)`,
                transition: "opacity 250ms linear, transform 250ms linear",
              }}
            >
              <SectionLabel dark>Why VR</SectionLabel>
              <h2
                className="mt-3 leading-[1.15] text-white"
                style={{
                  fontSize: "clamp(30px, 3.4vw, 44px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Immersion changes what patients are willing to share.
              </h2>
              <p
                className="mt-4"
                style={{ color: "rgba(255,255,255,0.82)", fontSize: 16, lineHeight: 1.6 }}
              >
                VR creates a space where patients feel genuinely heard — not observed. The non-human avatar removes the social performance that shapes what patients say face-to-face. Study after study confirms: patients disclose more, more honestly, in VR than in standard clinical intake.
              </p>
              <p
                className="mt-3"
                style={{ color: "rgba(255,255,255,0.78)", fontSize: 15.5, lineHeight: 1.6 }}
              >
                VR is not a screen. It uses metaphor, spatial presence, and embodied interaction — tools that human cognition has evolved to respond to. The environment and avatar are chosen deliberately by the clinical team, for each patient.
              </p>
              <PullQuote
                className="mt-6"
                maxWidth={560}
                cite="Lucas et al., Johns Hopkins Bloomberg School of Public Health, 2014"
              >
                &ldquo;Patients disclose significantly more through AI-based conversational systems than through standard self-assessment instruments.&rdquo;
              </PullQuote>
              <div className="mt-6">
                <Button variant="ghost" href="/evidence">
                  Read the Evidence →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
