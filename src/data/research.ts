export interface ResearchItem {
  title: string
  authors: string
  venue: string
  year: number
  status: "published" | "under-review" | "in-progress"
  stat?: string
  statLabel?: string
  doi?: string
  trialId?: string
}

export const research: ResearchItem[] = [
  {
    title: "Conversational AI elicits significantly more patient disclosure than standard web-based assessment",
    authors: "Ko et al.",
    venue: "Johns Hopkins Bloomberg School of Public Health",
    year: 2026,
    status: "published",
    stat: "\u03b2 = 10.40 (p = .020)",
    statLabel: "Additional words per response. VR delivery further deepens engagement.",
  },
  {
    title: "VR-delivered assessment increases patient engagement and preference across 7 of 8 measured domains",
    authors: "AugMend Health Research Team",
    venue: "MIT.nano Immersion Lab",
    year: 2026,
    status: "in-progress",
    stat: "100%",
    statLabel: "Preferred future use. Strongest domain: future use (R = 0.81, p = .022).",
    trialId: "NCT07336537",
  },
  {
    title: "People disclose more when they believe they\u2019re interacting with a non-human agent",
    authors: "Lucas et al.",
    venue: "Computers in Human Behavior, USC Institute for Creative Technologies",
    year: 2014,
    status: "published",
  },
]
