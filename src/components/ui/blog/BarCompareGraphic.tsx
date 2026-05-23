import DataCard from "./DataCard"

type Tone = "lime" | "orange"

interface Bar {
  /** Label shown above the bar, e.g. "1 hr — Patient time". */
  label: string
  /** Fill ratio 0–1, relative to the longest bar. */
  value: number
  tone?: Tone
}

interface BarCompareGraphicProps {
  bars: Bar[]
  /** Optional title above the bars. */
  title?: string
  eyebrow?: string
  cite?: string
  className?: string
}

const fill: Record<Tone, string> = {
  lime: "#B8D94E",
  orange: "#E8843A",
}

/** A simple horizontal bar comparison rendered natively on a navy card. */
export default function BarCompareGraphic({
  bars,
  title,
  eyebrow,
  cite,
  className,
}: BarCompareGraphicProps) {
  return (
    <DataCard eyebrow={eyebrow} cite={cite} className={className}>
      {title && (
        <p className="mb-7 font-display text-xl font-semibold leading-snug text-white md:text-2xl">
          {title}
        </p>
      )}
      <div className="space-y-5">
        {bars.map((b, i) => (
          <div key={i}>
            <p className="mb-2 font-body text-[14px] text-white/80">{b.label}</p>
            <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.max(0, Math.min(1, b.value)) * 100}%`,
                  background: fill[b.tone ?? "lime"],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </DataCard>
  )
}
