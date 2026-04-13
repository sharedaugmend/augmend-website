import { type ReactNode } from "react"

interface CardProps {
  className?: string
  children: ReactNode
}

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`bg-surface-white border border-neutral-border rounded-xl p-8 shadow-sm transition-all duration-150 hover:shadow-md hover:-translate-y-px ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
    >
      {children}
    </div>
  )
}
