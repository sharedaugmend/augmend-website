"use client"

import { type ReactNode, type CSSProperties } from "react"
import SectionLabel from "@/components/ui/SectionLabel"

interface SectionHeadingProps {
  /** Eyebrow label above the headline (uppercase tracked-out caps). Optional. */
  eyebrow?: ReactNode
  /** Eyebrow tone. `dark` for navy/dark backgrounds. */
  eyebrowDark?: boolean
  /** The headline. Use plain text or include <em> for italic emphasis. */
  children: ReactNode
  /** Subhead body. Optional. */
  subhead?: ReactNode
  /** Max width on the headline for line-length control. Defaults 760. */
  maxWidth?: number
  /** Tailwind utilities for the wrapper. */
  className?: string
  /** Inline overrides on the wrapper. */
  style?: CSSProperties
  /** When true, headline + subhead render in light colors for dark backgrounds. */
  invert?: boolean
}

/**
 * Standardized section eyebrow + headline + subhead block used across pages.
 * Pulls the type scale, weight, line-height, and letter-spacing into one place
 * so home / how-it-works / in-practice / evidence / our-story all read with
 * the same visual rhythm.
 */
export default function SectionHeading({
  eyebrow,
  eyebrowDark,
  children,
  subhead,
  maxWidth = 760,
  className = "",
  style,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={className} style={style}>
      {eyebrow != null && <SectionLabel dark={eyebrowDark}>{eyebrow}</SectionLabel>}
      <h2
        className="mt-3"
        style={{
          fontSize: "clamp(32px, 3.6vw, 48px)",
          fontWeight: 600,
          lineHeight: 1.12,
          letterSpacing: "-0.018em",
          color: invert ? "#fff" : undefined,
          maxWidth,
        }}
      >
        {children}
      </h2>
      {subhead != null && (
        <p
          className="mt-4"
          style={{
            fontSize: 17,
            lineHeight: 1.65,
            color: invert ? "rgba(255,255,255,0.78)" : "#5A5A6E",
            maxWidth: Math.min(maxWidth, 720),
          }}
        >
          {subhead}
        </p>
      )}
    </div>
  )
}
