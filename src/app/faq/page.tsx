import type { Metadata } from "next"
import FaqContent from "@/components/sections/faq/FaqContent"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions from clinics evaluating AugMend Health — covering technology, safety, integration, billing, and validation.",
  openGraph: {
    title: "FAQ — AugMend Health",
    description: "Common questions from clinics evaluating AugMend.",
    type: "website",
  },
}

export default function FaqPage() {
  return <FaqContent />
}
