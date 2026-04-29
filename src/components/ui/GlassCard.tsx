"use client"

import { type ElementType, type ReactNode, type CSSProperties } from "react"

/**
 * Glass tone — picks the fill + border color so the card stays consistent
 * with whatever section it's sitting in. The "frosted" feel is the same
 * across tones; only the color of the glass changes.
 */
export type GlassTone =
  | "neutral" // warm white surface, default site card
  | "cream" // sits on cream — slightly warmer
  | "dark" // sits on deep-space — translucent white
  | "indigo" // provider-facing accent (indigo wash)
  | "lime" // patient-facing accent (lime wash)
  | "orange" // ROI / system-tone accent

// Each tone defines its own glass-like surface. The `background` uses a soft
// vertical gradient to mimic the way real frosted glass picks up light from
// above. An inner highlight (top hairline) and softened drop shadow give the
// card a touch of dimension on cream and white surfaces alike.
const toneStyle: Record<
  GlassTone,
  { background: string; border: string; shadow: string }
> = {
  neutral: {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0.55) 100%)",
    border: "1px solid rgba(232, 228, 222, 0.9)",
    shadow:
      "inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 2px rgba(13,11,62,0.04), 0 14px 36px -10px rgba(13,11,62,0.10)",
  },
  cream: {
    background:
      "linear-gradient(180deg, rgba(255, 252, 246, 0.78) 0%, rgba(255, 252, 246, 0.5) 100%)",
    border: "1px solid rgba(232, 228, 222, 0.85)",
    shadow:
      "inset 0 1px 0 rgba(255,255,255,0.65), 0 1px 2px rgba(13,11,62,0.04), 0 14px 36px -10px rgba(13,11,62,0.08)",
  },
  dark: {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.04) 100%)",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    shadow:
      "inset 0 1px 0 rgba(255,255,255,0.06), 0 14px 36px -10px rgba(0,0,0,0.35)",
  },
  indigo: {
    background:
      "linear-gradient(180deg, rgba(228, 237, 248, 0.78) 0%, rgba(213, 222, 240, 0.45) 100%)",
    border: "1px solid rgba(31, 28, 152, 0.14)",
    shadow:
      "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(13,11,62,0.04), 0 14px 36px -10px rgba(31,28,152,0.12)",
  },
  lime: {
    background:
      "linear-gradient(180deg, rgba(234, 244, 200, 0.78) 0%, rgba(218, 232, 168, 0.45) 100%)",
    border: "1px solid rgba(184, 217, 78, 0.36)",
    shadow:
      "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(13,11,62,0.04), 0 14px 36px -10px rgba(74,96,0,0.10)",
  },
  orange: {
    background:
      "linear-gradient(180deg, rgba(253, 232, 216, 0.82) 0%, rgba(247, 218, 196, 0.5) 100%)",
    border: "1px solid rgba(232, 132, 58, 0.30)",
    shadow:
      "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(13,11,62,0.04), 0 14px 36px -10px rgba(232,132,58,0.12)",
  },
}

interface GlassCardProps {
  /** Content. */
  children: ReactNode
  /** Glass tone — match to the surrounding section. */
  tone?: GlassTone
  /** Optional accent color for a 3px left border. */
  accent?: "indigo" | "lime" | "orange" | "none"
  /** Tag override (article, li, blockquote, etc.). Defaults to div. */
  as?: ElementType
  /** Tailwind utility classes for layout/typography. */
  className?: string
  /** Inline styles to merge with the glass tokens. */
  style?: CSSProperties
}

const accentColor: Record<NonNullable<GlassCardProps["accent"]>, string | undefined> = {
  indigo: "#1F1C98",
  lime: "#B8D94E",
  orange: "#E8843A",
  none: undefined,
}

/**
 * Frosted-glass card surface. Use everywhere a card lives — stat cards, quote
 * cards, journey cards, advisor cards. Keeps the visual language consistent.
 */
export default function GlassCard({
  children,
  tone = "neutral",
  accent = "none",
  as,
  className = "",
  style,
}: GlassCardProps) {
  const Component = as ?? "div"
  const t = toneStyle[tone]
  const accentBorder = accentColor[accent]

  return (
    <Component
      className={`rounded-2xl ${className}`}
      style={{
        background: t.background,
        border: t.border,
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        boxShadow: t.shadow,
        ...(accentBorder ? { borderLeft: `3px solid ${accentBorder}` } : null),
        ...style,
      }}
    >
      {children}
    </Component>
  )
}
