import { type ReactNode } from "react"

interface EvidenceCardProps {
  quote: string
  citation: string
  children?: ReactNode
  className?: string
}

export default function EvidenceCard({
  quote,
  citation,
  children,
  className = "",
}: EvidenceCardProps) {
  return (
    <div
      className={`bg-white/[0.06] rounded-2xl p-8 ${className}`}
    >
      <blockquote className="font-display italic text-xl leading-relaxed text-white">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite className="mt-4 block font-body text-sm not-italic text-white/70">
        {citation}
      </cite>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
