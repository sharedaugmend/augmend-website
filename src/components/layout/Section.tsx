"use client"

import { type ReactNode } from "react"
import DotPattern from "@/components/ui/DotPattern"

type SectionBg = "warm-white" | "cream" | "white" | "deep-space" | "indigo"
type SectionPadding = "normal" | "large"

interface SectionProps {
  bg?: SectionBg
  padding?: SectionPadding
  className?: string
  children: ReactNode
  id?: string
  dots?: boolean
  divider?: boolean
}

const bgClasses: Record<SectionBg, string> = {
  "warm-white": "bg-surface-warm-white",
  cream: "bg-surface-cream",
  white: "bg-surface-white",
  "deep-space": "bg-brand-deep-space text-white",
  indigo: "bg-brand-indigo text-white",
}

const dotVariant: Record<SectionBg, "cream" | "white" | "dark"> = {
  "warm-white": "white",
  cream: "cream",
  white: "white",
  "deep-space": "dark",
  indigo: "dark",
}

export default function Section({
  bg = "warm-white",
  padding = "normal",
  className = "",
  children,
  id,
  dots = false,
  divider = false,
}: SectionProps) {
  const py = padding === "large" ? "py-20 md:py-24 xl:py-32" : "py-16 md:py-20 xl:py-24"

  return (
    <section id={id} className={`relative overflow-hidden ${bgClasses[bg]} ${py} ${className}`}>
      {divider && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-gradient-to-r from-transparent via-accent-lime to-transparent" />
      )}
      {dots && <DotPattern variant={dotVariant[bg]} />}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">{children}</div>
    </section>
  )
}
