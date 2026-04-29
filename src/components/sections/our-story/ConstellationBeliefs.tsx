"use client"

import { motion } from "framer-motion"
import GlassCard from "@/components/ui/GlassCard"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

interface Belief {
  n: string
  body: string
}

interface ConstellationBeliefsProps {
  beliefs: Belief[]
}

/**
 * Belief cards rendered as a sequence — the small indigo accent dot inside
 * each card's 6×6 grid moves to a different position belief-by-belief,
 * suggesting motion across the set without requiring a literal connector.
 *
 * Position progression (6×6 grid, row-major index 0–35):
 *   Belief 01 → top-left
 *   Belief 02 → top-right
 *   Belief 03 → bottom-right
 *   Belief 04 → bottom-left
 */
const dotPositions = [0, 5, 35, 30] // top-left, top-right, bottom-right, bottom-left

export default function ConstellationBeliefs({ beliefs }: ConstellationBeliefsProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerParent}
    >
      {beliefs.map((b, i) => {
        const accentIndex = dotPositions[i % dotPositions.length]
        return (
          <motion.div key={b.n} variants={staggerChild}>
            <GlassCard tone="indigo" accent="indigo" className="p-9 h-full">
              {/* 6×6 dot grid — the indigo accent dot moves to a different
                  position for each belief, suggesting the set is in motion. */}
              <div
                aria-hidden="true"
                className="grid mb-5"
                style={{ gridTemplateColumns: "repeat(6, 4px)", gap: 4, width: "fit-content" }}
              >
                {Array.from({ length: 36 }).map((_, j) => {
                  const isAccent = j === accentIndex
                  return (
                    <span
                      key={j}
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: isAccent ? "#1F1C98" : "#C4CDD5",
                        opacity: isAccent ? 1 : 0.5,
                        boxShadow: isAccent ? "0 0 6px rgba(31,28,152,0.5)" : "none",
                        transition: "background 220ms linear, box-shadow 220ms linear",
                      }}
                    />
                  )
                })}
              </div>
              <div className="font-body font-bold text-[12px] uppercase tracking-[0.06em] text-brand-indigo mb-3">
                {b.n}
              </div>
              <p className="font-body text-[18px] leading-[1.55] text-neutral-near-black">
                {b.body}
              </p>
            </GlassCard>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
