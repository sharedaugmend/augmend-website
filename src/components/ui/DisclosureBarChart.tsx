"use client"

import { useEffect, useId, useRef, useState } from "react"

type Bar = {
  /** Fill ratio 0-1. */
  target: number
  /** Two-line label rendered under the bar. JSX allowed. */
  label: React.ReactNode
  /** Optional outward tags (4 entries) for the rightmost bar. */
  tags?: string[]
}

interface DisclosureBarChartProps {
  bars: Bar[]
  className?: string
  /** Vertical pixel height of each bar envelope. */
  barHeight?: number
}

const DOT = 5
const GAP = 5
const COLS = 7
const INDIGO = "#1F1C98"
const LIME = "#B8D94E"

/**
 * Composed-of-dots bar chart used in the Problem and Solution sections.
 * Bars fill from 0 to their target ratio when the chart enters the viewport.
 */
export default function DisclosureBarChart({
  bars,
  className = "",
  barHeight = 320,
}: DisclosureBarChartProps) {
  const id = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    if (animated) return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setAnimated(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setAnimated(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [animated])

  const rows = Math.ceil(barHeight / (DOT + GAP)) + 1
  const innerHeight = rows * DOT + (rows - 1) * GAP

  return (
    <div
      ref={containerRef}
      className={`flex items-end gap-10 ${className}`}
      style={{ paddingRight: bars.some((b) => b.tags) ? 220 : 0 }}
    >
      {bars.map((bar, idx) => {
        const fillHeight = animated ? bar.target * barHeight : 0
        const showTags = animated && !!bar.tags
        return (
          <div
            key={`${id}-${idx}`}
            className="flex flex-col items-start gap-3 relative"
          >
            {/* Envelope */}
            <div
              className="relative flex-shrink-0"
              style={{ width: 72, height: barHeight }}
            >
              {/* Inner mask that grows */}
              <div
                className="absolute bottom-0 left-0 w-full overflow-hidden"
                style={{
                  height: fillHeight,
                  transition: "height 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                <div
                  className="absolute bottom-0 left-0 grid"
                  style={{
                    gridTemplateColumns: `repeat(${COLS}, ${DOT}px)`,
                    gap: `${GAP}px`,
                    height: innerHeight,
                  }}
                >
                  {Array.from({ length: rows * COLS }).map((_, i) => (
                    <span
                      key={i}
                      className="block rounded-full"
                      style={{
                        width: DOT,
                        height: DOT,
                        background: (i + 3) % 7 === 0 ? LIME : INDIGO,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Outward tags */}
              {bar.tags && (
                <div
                  className="absolute top-0 bottom-0 pointer-events-none"
                  style={{ left: 72 }}
                >
                  {[0.17, 0.38, 0.6, 0.81].map((pos, ti) => (
                    <div
                      key={ti}
                      className="absolute left-0 flex items-center"
                      style={{
                        bottom: pos * barHeight,
                        opacity: showTags ? 1 : 0,
                        transform: showTags
                          ? "translateX(0)"
                          : "translateX(-6px)",
                        transition:
                          "opacity 0.35s ease, transform 0.35s ease",
                        transitionDelay: showTags
                          ? `${idx * 150 + 1350 + ti * 100}ms`
                          : "0ms",
                      }}
                    >
                      <span
                        className="block rounded-full ml-[3px]"
                        style={{
                          width: 4,
                          height: 4,
                          background: INDIGO,
                          opacity: 0.5,
                        }}
                      />
                      <span
                        className="block"
                        style={{
                          width: 24,
                          height: 1,
                          background:
                            "linear-gradient(to right, rgba(31,28,152,0.4), rgba(31,28,152,0.1))",
                        }}
                      />
                      <span
                        className="font-body text-[12px] text-neutral-near-black pl-[7px] whitespace-nowrap"
                        style={{ opacity: 0.7 }}
                      >
                        {bar.tags?.[ti]}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="font-body font-bold text-[12px] uppercase tracking-[0.04em] text-neutral-slate leading-snug">
              {bar.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
