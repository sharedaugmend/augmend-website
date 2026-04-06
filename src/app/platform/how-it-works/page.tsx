import type { Metadata } from "next"
import HowItWorksContent from "@/components/sections/how-it-works/HowItWorksContent"

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "One platform. Three systems. Designed to work in sequence. AugMend integrates into your clinic's workflow before, during, and between visits.",
  openGraph: {
    title: "How It Works — AugMend Health",
    description:
      "One platform. Three systems. Designed to work in sequence.",
    type: "website",
  },
}

export default function HowItWorksPage() {
  return <HowItWorksContent />
}
