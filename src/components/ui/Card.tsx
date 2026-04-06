import { type ReactNode } from "react"

interface CardProps {
  className?: string
  children: ReactNode
}

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`bg-surface-white border border-neutral-border rounded-xl p-8 transition-colors duration-200 hover:border-neutral-slate/30 ${className}`}
    >
      {children}
    </div>
  )
}
