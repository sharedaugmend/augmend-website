"use client"

import { type ReactNode } from "react"

type AccentColor = "indigo" | "lime" | "orange" | "pink"

interface StatCardProps {
  value: ReactNode
  label: string
  description?: string
  accent?: AccentColor
  className?: string
}

const accentBorderClasses: Record<AccentColor, string> = {
  indigo: "border-l-brand-indigo",
  lime: "border-l-accent-lime",
  orange: "border-l-accent-orange",
  pink: "border-l-accent-pink",
}

export default function StatCard({
  value,
  label,
  description,
  accent,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`${accent ? `border-l-2 ${accentBorderClasses[accent]} pl-6` : ""} ${className}`}
    >
      <div className="font-display font-bold text-5xl leading-[1.1] tracking-[-0.03em] text-neutral-near-black">
        {value}
      </div>
      <div className="mt-2 font-body font-bold text-sm uppercase tracking-[0.05em] text-neutral-slate">
        {label}
      </div>
      {description && (
        <p className="mt-3 font-body text-[15px] leading-relaxed text-neutral-slate">
          {description}
        </p>
      )}
    </div>
  )
}
