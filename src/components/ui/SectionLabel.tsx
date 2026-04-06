interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-body font-bold text-sm uppercase tracking-[0.05em] text-brand-indigo ${className}`}
    >
      {children}
    </span>
  )
}
