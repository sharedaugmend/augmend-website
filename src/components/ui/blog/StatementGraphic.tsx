import DataCard from "./DataCard"

interface StatementGraphicProps {
  /** The statement (white). */
  lead: string
  /** Optional trailing fragment rendered in lime, after the lead. */
  emphasis?: string
  /** Optional smaller lime line beneath (e.g. "AugMend — the clinical context layer"). */
  footnote?: string
  eyebrow?: string
  className?: string
}

/**
 * A large typographic statement on a navy card — editorial punctuation.
 *
 * Text comes in via props (not children) on purpose: MDX wraps element
 * children in a styled <p>, which would both nest invalidly and override the
 * card's light-on-dark color. Rendering the statement in a <div> here keeps it
 * white-on-navy and avoids the nested-<p> hydration error.
 */
export default function StatementGraphic({
  lead,
  emphasis,
  footnote,
  eyebrow,
  className,
}: StatementGraphicProps) {
  return (
    <DataCard eyebrow={eyebrow} className={className}>
      <div
        className="font-display text-[1.6rem] font-semibold leading-[1.2] text-white md:text-[2rem]"
        style={{ textWrap: "balance" }}
      >
        {lead}
        {emphasis && <span className="text-accent-lime"> {emphasis}</span>}
      </div>
      {footnote && (
        <p className="mt-4 font-body text-[15px] text-accent-lime md:text-base">{footnote}</p>
      )}
    </DataCard>
  )
}
