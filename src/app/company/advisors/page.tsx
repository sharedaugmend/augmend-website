import type { Metadata } from "next"
import AdvisorsContent from "@/components/sections/advisors/AdvisorsContent"

export const metadata: Metadata = {
  title: "Advisory Board",
  description:
    "AugMend Health's advisory board spans clinical medicine, AI/ML research, regulatory strategy, healthcare economics, and executive leadership.",
  openGraph: {
    title: "Advisory Board — AugMend Health",
    description: "Clinical expertise, regulatory depth, and institutional credibility.",
    type: "website",
  },
}

export default function AdvisorsPage() {
  return <AdvisorsContent />
}
