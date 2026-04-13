import type { Metadata } from "next"
import InPracticeContent from "@/components/sections/in-practice/InPracticeContent"

export const metadata: Metadata = {
  title: "In Practice",
  description:
    "For patients, providers, and practice leaders. One platform that serves all three. See how AugMend works in your specialty.",
  openGraph: {
    title: "How It Works In Practice",
    description: "For patients, providers, and practice leaders.",
    type: "website",
  },
}

export default function InPracticePage() {
  return <InPracticeContent />
}
