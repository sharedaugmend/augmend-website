"use client"

import { useEffect, useRef } from "react"

interface FloatingDotBarProps {
  /** Bar fill ratio 0–1. Animated transitions are handled by the parent. */
  fill: number
  /** Hue ratio 0–1: how much of the fill should appear in the accent color
   *  (lime, the "new information surfaced by this tool"). The remainder is
   *  rendered in indigo (existing disclosure). */
  accentRatio?: number
  /** Bar width in pixels. */
  width?: number
  /** Bar height in pixels. */
  height?: number
  /** Optional label rendered under the bar. */
  label?: React.ReactNode
  /** Aria label. */
  ariaLabel?: string
  /** Visual variant — "light" for cream surfaces, "dark" for navy surfaces. */
  variant?: "light" | "dark"
}

const INDIGO = "#1F1C98"
const INDIGO_LIGHT = "#A4B0FF"
const LIME = "#B8D94E"

/**
 * Outline rectangle filled with small drifting dots — visually echoes the
 * homepage hero's particle field. The bar fills bottom-up; "accent" dots are
 * rendered when a new tool surfaces additional information beyond what the
 * patient discloses on their own.
 *
 * Animation is canvas-based to keep DPR sharp and stay at 60fps even with a
 * few hundred dots per bar.
 */
export default function FloatingDotBar({
  fill,
  accentRatio = 0,
  width = 150,
  height = 420,
  label,
  ariaLabel,
  variant = "light",
}: FloatingDotBarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fillRef = useRef(0)
  const accentRef = useRef(0)
  const animRef = useRef<number>(0)

  // Imperative refs so the animation loop sees the latest target without
  // tearing down between renders.
  const targetFill = fill
  const targetAccent = accentRatio

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      fillRef.current = targetFill
      accentRef.current = targetAccent
    }

    // Generate a stable cloud of dots once. Density is high enough that the
    // *cloud itself* reads as a bar — outline becomes secondary. Capped to
    // keep the per-frame cost reasonable on slower machines (≤6k dots total
    // across four bars at 60fps is fine).
    const area = width * height
    const DOT_COUNT = Math.min(1400, Math.round(area * 0.022))
    type Dot = { x: number; y: number; phase: number; amp: number; freq: number; tier: number; r: number }
    const dots: Dot[] = []
    for (let i = 0; i < DOT_COUNT; i++) {
      dots.push({
        x: 4 + Math.random() * (width - 8),
        y: 4 + Math.random() * (height - 8),
        phase: Math.random() * Math.PI * 2,
        amp: 0.4 + Math.random() * 1.2,
        freq: 0.0008 + Math.random() * 0.0014,
        // Tier 0–1: which dots belong to "first to fill" (low tier) vs "added later"
        tier: Math.random(),
        r: 0.7 + Math.random() * 0.9,
      })
    }

    const isDark = variant === "dark"
    const baseDot = isDark ? INDIGO_LIGHT : INDIGO
    const outlineColor = isDark
      ? "rgba(255, 255, 255, 0.10)"
      : "rgba(31, 28, 152, 0.10)"
    const innerWash = isDark
      ? "rgba(255, 255, 255, 0.02)"
      : "rgba(31, 28, 152, 0.015)"

    let t = 0
    function draw() {
      // Ease toward target
      fillRef.current += (targetFill - fillRef.current) * 0.06
      accentRef.current += (targetAccent - accentRef.current) * 0.06
      t += 16

      ctx!.clearRect(0, 0, width, height)

      // Soft outline — much lighter than before; the dot density now does the
      // visual work of defining the bar.
      ctx!.strokeStyle = outlineColor
      ctx!.lineWidth = 1
      const r = 10
      ctx!.beginPath()
      ctx!.moveTo(r, 0.5)
      ctx!.lineTo(width - r, 0.5)
      ctx!.quadraticCurveTo(width - 0.5, 0.5, width - 0.5, r)
      ctx!.lineTo(width - 0.5, height - r)
      ctx!.quadraticCurveTo(width - 0.5, height - 0.5, width - r, height - 0.5)
      ctx!.lineTo(r, height - 0.5)
      ctx!.quadraticCurveTo(0.5, height - 0.5, 0.5, height - r)
      ctx!.lineTo(0.5, r)
      ctx!.quadraticCurveTo(0.5, 0.5, r, 0.5)
      ctx!.stroke()

      // Subtle inner wash so the rectangle still reads when empty
      ctx!.fillStyle = innerWash
      ctx!.fillRect(1, 1, width - 2, height - 2)

      // Fill threshold — only dots whose y is within the filled portion show.
      const fillTop = height - fillRef.current * height
      const accentThreshold = accentRef.current

      for (const d of dots) {
        if (d.y < fillTop) continue
        const drift = Math.sin(d.phase + t * d.freq) * d.amp
        const x = d.x + drift
        const y = d.y + Math.cos(d.phase + t * d.freq * 0.7) * d.amp * 0.6
        const isAccent = d.tier > 1 - accentThreshold
        ctx!.fillStyle = isAccent ? LIME : baseDot
        // Soft fade-in along the top edge so newly-revealed dots don't pop in
        const fadeBand = 24
        const distFromTop = d.y - fillTop
        const alpha = distFromTop < fadeBand ? distFromTop / fadeBand : 1
        ctx!.globalAlpha = Math.max(0, Math.min(1, alpha))
        ctx!.beginPath()
        ctx!.arc(x, y, d.r, 0, Math.PI * 2)
        ctx!.fill()
      }
      ctx!.globalAlpha = 1

      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => cancelAnimationFrame(animRef.current)
  }, [targetFill, targetAccent, width, height, variant])

  const labelColor =
    variant === "dark" ? "rgba(255,255,255,0.78)" : "var(--color-neutral-slate, #6B7B8D)"

  return (
    <div className="flex flex-col items-start gap-3" role="figure" aria-label={ariaLabel}>
      <canvas
        ref={canvasRef}
        style={{ width, height, display: "block" }}
        aria-hidden="true"
      />
      {label != null && (
        <div
          className="font-body font-bold text-[12px] uppercase tracking-[0.04em] leading-snug"
          style={{ color: labelColor }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
