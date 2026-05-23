import DataCard from "./DataCard"

type Tone = "lime" | "orange" | "muted" | "white"

interface Stat {
  /** The big figure, e.g. "60–80%", "$262B", "194 million". */
  value: string
  /** Supporting line under the figure. */
  label: string
  tone?: Tone
}

interface StatGraphicProps {
  stats: Stat[]
  /** "row" = side-by-side (good for 2–3 comparable stats); "stack" = vertical. */
  layout?: "row" | "stack"
  eyebrow?: string
  cite?: string
  className?: string
}

const toneClass: Record<Tone, string> = {
  lime: "text-accent-lime",
  orange: "text-accent-orange",
  muted: "text-white/40",
  white: "text-white",
}

/** One or more headline statistics rendered natively on a navy card. */
export default function StatGraphic({
  stats,
  layout = "stack",
  eyebrow,
  cite,
  className,
}: StatGraphicProps) {
  const isRow = layout === "row"
  return (
    <DataCard eyebrow={eyebrow} cite={cite} className={className}>
      <div className={isRow ? "grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-6" : "space-y-7"}>
        {stats.map((s, i) => (
          <div key={i}>
            <div
              className={`font-display font-bold leading-[0.92] tracking-[-0.02em] ${toneClass[s.tone ?? "lime"]} ${
                isRow ? "text-[2.75rem] md:text-5xl" : "text-6xl md:text-7xl"
              }`}
            >
              {s.value}
            </div>
            <p className="mt-3 font-body text-[15px] leading-snug text-white/80 md:text-base">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </DataCard>
  )
}
