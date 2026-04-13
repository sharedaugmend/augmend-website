interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export default function SectionLabel({ children, className = "", dark = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`block w-6 h-0.5 rounded-full ${dark ? "bg-accent-orange" : "bg-accent-lime"}`} />
      <span className={`font-body font-bold text-[13px] uppercase tracking-[0.05em] ${dark ? "text-accent-lime" : "text-brand-indigo"}`}>
        {children}
      </span>
    </div>
  )
}
