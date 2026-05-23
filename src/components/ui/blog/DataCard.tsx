import { type ReactNode } from "react"

interface DataCardProps {
  /** Small uppercase label above the content. */
  eyebrow?: string
  /** Citation line shown at the bottom (e.g. "Levy et al., JAMA Network Open, 2018"). */
  cite?: string
  children: ReactNode
  className?: string
}

/**
 * Deep-space navy frame for native data graphics in blog posts.
 *
 * This is the on-site, text-native equivalent of the marketing agent's
 * carousel cards: instead of shipping a raster image of a statistic, we
 * render the number live so it stays crisp, selectable, and SEO-indexable.
 * Shared frame → consistent look across StatGraphic / StatementGraphic /
 * BarCompareGraphic.
 */
export default function DataCard({ eyebrow, cite, children, className = "" }: DataCardProps) {
  return (
    <div
      className={`relative my-8 overflow-hidden rounded-2xl bg-brand-deep-space px-7 py-9 md:px-10 md:py-11 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1.5' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative z-10">
        {eyebrow && (
          <p className="mb-6 font-body text-[11px] font-bold uppercase tracking-[0.08em] text-white/40">
            {eyebrow}
          </p>
        )}
        {children}
        {cite && <p className="mt-6 font-body text-[12px] leading-relaxed text-white/35">{cite}</p>}
      </div>
    </div>
  )
}
