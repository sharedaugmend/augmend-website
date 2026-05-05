"use client"

const domains = [
  "Presenting concern",
  "Medical history",
  "Medications",
  "Mental health",
  "Function",
  "Social context",
  "Safety",
]

/**
 * Stylized clinical-report card. Domains are trimmed to a representative set
 * with a small "and more — configured by your clinic at onboarding." note
 * underneath, so the visual is readable at-a-glance.
 */
export default function ProviderReportVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(14px) saturate(120%)",
        WebkitBackdropFilter: "blur(14px) saturate(120%)",
        border: "1px solid rgba(232,228,222,0.85)",
        boxShadow: "0 24px 60px -20px rgba(13,11,62,0.18)",
      }}
      aria-hidden="true"
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-border"
        style={{ background: "rgba(250,248,245,0.85)" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="rounded-sm"
            style={{
              width: 14,
              height: 14,
              background: "#1F1C98",
            }}
          />
          <span className="font-body font-bold text-[12px] uppercase tracking-[0.06em] text-brand-indigo">
            Clinical brief + detailed report
          </span>
        </div>
        <span className="font-body text-[11px] text-neutral-slate tabular-nums">
          M.R., 58 · Visit 03
        </span>
      </div>

      {/* Domain rows */}
      <ul className="divide-y divide-neutral-border">
        {domains.map((d, i) => {
          const width = 38 + ((i * 13) % 50)
          const flagged = i === 5 || i === 6 // Social context, Safety
          return (
            <li key={d} className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3">
              <div className="flex items-center gap-2 w-[42%] sm:w-[44%] flex-shrink-0 min-w-0">
                <span
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: 6,
                    height: 6,
                    background: flagged ? "#E8843A" : "#1F1C98",
                  }}
                />
                <span className="font-body text-[12px] sm:text-[13px] text-neutral-near-black truncate">
                  {d}
                </span>
              </div>
              <div className="flex-1 h-2 rounded-full bg-neutral-border/60 overflow-hidden min-w-0">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${width}%`,
                    background: flagged
                      ? "linear-gradient(to right, #E8843A, #f0a86c)"
                      : "linear-gradient(to right, #1F1C98, #5750c8)",
                  }}
                />
              </div>
              <span className="font-body text-[11px] text-neutral-slate tabular-nums w-9 sm:w-10 text-right flex-shrink-0">
                {width}%
              </span>
            </li>
          )
        })}
      </ul>

      {/* "And more" disclaimer — softer styling, hints that the domain set is
          configurable per clinic. */}
      <div
        className="px-4 sm:px-6 py-3 border-t border-neutral-border flex items-center gap-2"
        style={{ background: "rgba(245,240,232,0.45)" }}
      >
        <span
          className="rounded-full flex-shrink-0"
          style={{ width: 6, height: 6, background: "#C4CDD5" }}
        />
        <span className="font-body text-[12px] text-neutral-slate italic">
          and more — configured by your clinic at onboarding.
        </span>
      </div>

      {/* Footer summary chip */}
      <div
        className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-t border-neutral-border"
        style={{ background: "rgba(245,240,232,0.5)" }}
      >
        <span className="font-body text-[11px] uppercase font-bold tracking-[0.05em] text-neutral-slate">
          Pre-visit summary · 15 sec read
        </span>
        <span
          className="font-body text-[11px] font-bold uppercase tracking-[0.05em] px-2 py-1 rounded"
          style={{ color: "#9a4d12", background: "rgba(232,132,58,0.16)" }}
        >
          2 flags
        </span>
      </div>
    </div>
  )
}
