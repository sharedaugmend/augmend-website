"use client"

import { type ReactNode, type CSSProperties } from "react"

type PullQuoteVariant = "dark" | "light"

interface PullQuoteProps {
  /** The quoted text. */
  children: ReactNode
  /** Attribution. Rendered uppercase eyebrow under the quote. Omit for an unattributed pull quote. */
  cite?: string
  /** "dark" sits on dark backgrounds (default — matches home WhyVR + TheSolution). "light" sits on cream/warm-white. */
  variant?: PullQuoteVariant
  /** Tailwind utility classes for layout. */
  className?: string
  /** Inline overrides. */
  style?: CSSProperties
  /** Optional max-width override. */
  maxWidth?: number
}

/**
 * Standardized blockquote treatment used across the site.
 *
 * Visual contract:
 *   • Frosted glass surface (background + saturated blur)
 *   • Lime accent border on the left (3px)
 *   • Inset 1px top highlight for dimension
 *   • Italic display type for the quote, uppercase tracking-wide attribution
 */
export default function PullQuote({
  children,
  cite,
  variant = "dark",
  className = "",
  style,
  maxWidth = 640,
}: PullQuoteProps) {
  const isDark = variant === "dark"

  return (
    <blockquote
      className={`rounded-xl px-7 py-6 relative ${className}`}
      style={{
        background: isDark ? "rgba(13, 11, 62, 0.92)" : "rgba(255, 255, 255, 0.65)",
        color: isDark ? "#fff" : "#1B1A4A",
        border: isDark
          ? "1px solid rgba(67,61,129,0.45)"
          : "1px solid rgba(232, 228, 222, 0.9)",
        borderLeft: "3px solid #B8D94E",
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        boxShadow: isDark
          ? "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -20px rgba(0,0,0,0.45)"
          : "0 1px 0 rgba(255,255,255,0.7) inset, 0 14px 36px -10px rgba(13,11,62,0.10)",
        maxWidth,
        ...style,
      }}
    >
      <p
        className="font-display italic leading-[1.5]"
        style={{ fontSize: 17 }}
      >
        {children}
      </p>
      {cite && (
        <cite className="block mt-3 not-italic">
          <span
            className="font-body font-bold uppercase tracking-[0.05em]"
            style={{
              fontSize: 11,
              color: isDark ? "rgba(255,255,255,0.65)" : "rgba(110, 107, 133, 0.95)",
            }}
          >
            {cite}
          </span>
        </cite>
      )}
    </blockquote>
  )
}
