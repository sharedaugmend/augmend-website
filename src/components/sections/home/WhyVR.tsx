"use client"

import { useEffect, useRef } from "react"
import SectionLabel from "@/components/ui/SectionLabel"
import Button from "@/components/ui/Button"
import PullQuote from "@/components/ui/PullQuote"

/**
 * Full-screen scroll-through video section. As the user scrolls through it,
 * the video stays sticky behind a darkening overlay; the Why-VR copy fades
 * in over the top.
 *
 * Overlay + copy are driven imperatively via refs inside a rAF-throttled
 * scroll handler rather than React state. The gradient itself is painted
 * once at max alpha (0.6a/a/0.85a with a=0.8) and darkened purely via
 * `opacity`, which is compositor-only — so scrolling never triggers a
 * fullscreen repaint of the background over the playing video. Because the
 * scale is uniform across all three stops, `opacity = overlayAlpha / 0.8`
 * reproduces the exact same per-pixel color as the old per-frame gradient
 * string did.
 */
export default function WhyVR() {
  const sectionRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const applyProgress = (progress: number) => {
      // Overlay darkens as the reader scrolls, so the copy stays readable.
      const overlayAlpha = 0.40 + progress * 0.40 // 0.40 → 0.80
      // Copy fades in early and stays visible across the full pinned section
      // (no late-stage fade-out — the header was disappearing before the
      // section had finished scrolling on smaller laptops).
      const copyOpacity = Math.min(1, Math.max(0, (progress - 0.05) * 2.4))
      const copyTranslate = (1 - copyOpacity) * 20

      if (overlayRef.current) {
        overlayRef.current.style.opacity = String(overlayAlpha / 0.8)
      }
      if (copyRef.current) {
        copyRef.current.style.opacity = String(copyOpacity)
        copyRef.current.style.transform = `translateY(${copyTranslate}px)`
      }
    }

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      applyProgress(1)
      return
    }

    function computeProgress() {
      const el = sectionRef.current
      if (!el) return 0
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) {
        return rect.top < 0 ? 1 : 0
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      return scrolled / total
    }

    let rafId = 0
    let pending = false
    function onScroll() {
      if (pending) return
      pending = true
      rafId = requestAnimationFrame(() => {
        pending = false
        applyProgress(computeProgress())
      })
    }

    applyProgress(computeProgress())
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

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
        {/* Progressive dark overlay for readability. Painted once at max
            alpha; darkened via opacity (compositor-only, no repaint) instead
            of re-stringifying the gradient every scroll frame. */}
        <div
          ref={overlayRef}
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,11,62,0.48) 0%, rgba(13,11,62,0.80) 50%, rgba(13,11,62,0.68) 100%)",
            opacity: 0.5,
          }}
        />

        {/* Foreground copy. Padding tightens at smaller heights so the header
            doesn't get clipped on a 13-inch laptop. */}
        <div className="relative z-10 h-full flex items-center py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] w-full px-6 md:px-12">
            <div
              ref={copyRef}
              className="max-w-[640px]"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
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
                Immersion in VR environments changes what patients are willing to share.
              </h2>
              <p
                className="mt-4"
                style={{ color: "rgba(255,255,255,0.82)", fontSize: 16, lineHeight: 1.6 }}
              >
                VR creates a space where patients feel genuinely heard, not observed or judged. The non-human avatar removes the social performance that shapes what patients say face-to-face. Study after study confirms that patients disclose more, more honestly, in VR than in standard patient data collection processes.
              </p>
              <p
                className="mt-3"
                style={{ color: "rgba(255,255,255,0.78)", fontSize: 15.5, lineHeight: 1.6 }}
              >
                VR is not a screen. It uses metaphor, spatial presence, and embodied interaction, tools that human cognition has evolved to respond to. The environment and avatar are designed by practicing medical professionals.
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
