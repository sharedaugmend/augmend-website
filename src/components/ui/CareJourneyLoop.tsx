"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stages = [
  {
    label: "Self-Guided Session",
    sub: "Patient-facing",
    desc: "Raw biopsychosocial data",
    position: "top",
  },
  {
    label: "Structured Analysis",
    sub: "Platform",
    desc: "Organized clinical picture",
    position: "right",
  },
  {
    label: "Reports Delivered",
    sub: "Provider + Billing",
    desc: "Clinical insights + billing docs",
    position: "bottom",
  },
  {
    label: "Longitudinal Intelligence",
    sub: "Continuous",
    desc: "Compounding patient record",
    position: "left",
  },
]

export default function CareJourneyLoop({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Position each stage around a circle
  const positions = [
    { x: "50%", y: "2%", tx: "-50%", ty: "0" },    // top
    { x: "88%", y: "42%", tx: "-50%", ty: "-50%" },  // right
    { x: "50%", y: "82%", tx: "-50%", ty: "0" },     // bottom
    { x: "12%", y: "42%", tx: "-50%", ty: "-50%" },  // left
  ]

  return (
    <div ref={ref} className={`relative max-w-xl mx-auto ${className}`} style={{ aspectRatio: "1/1" }}>
      {/* Central circle with arrows */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" fill="none">
        {/* Circular path */}
        <circle cx="200" cy="200" r="120" stroke="#E8E4DE" strokeWidth="2" strokeDasharray="8 6" />

        {/* Directional arrows on the circle */}
        {[45, 135, 225, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180
          const x = 200 + 120 * Math.cos(rad)
          const y = 200 + 120 * Math.sin(rad)
          const tangent = angle + 90
          const tRad = (tangent * Math.PI) / 180
          return (
            <motion.polygon
              key={angle}
              points="-4,-6 4,0 -4,6"
              fill="#1F1C98"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
              transition={{ delay: 0.5 + angle / 500 }}
              transform={`translate(${x},${y}) rotate(${tangent})`}
            />
          )
        })}

        {/* Center label */}
        <text x="200" y="195" textAnchor="middle" className="font-body" fill="#1F1C98" fontSize="13" fontWeight="700">
          Continuous
        </text>
        <text x="200" y="212" textAnchor="middle" className="font-body" fill="#6B7B8D" fontSize="11">
          Care Loop
        </text>
      </svg>

      {/* Stage cards positioned around the circle */}
      {stages.map((stage, i) => (
        <motion.div
          key={stage.label}
          className="absolute w-[140px]"
          style={{
            left: positions[i].x,
            top: positions[i].y,
            transform: `translate(${positions[i].tx}, ${positions[i].ty})`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
        >
          <div className="bg-surface-white border border-neutral-border rounded-lg p-3 text-center shadow-sm">
            <p className="font-body font-bold text-[12px] text-neutral-near-black leading-tight">{stage.label}</p>
            <p className="font-body text-[10px] text-brand-indigo font-bold uppercase tracking-wider mt-1">{stage.sub}</p>
            <p className="font-body text-[11px] text-neutral-slate mt-1">{stage.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
