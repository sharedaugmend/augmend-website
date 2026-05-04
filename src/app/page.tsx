import type { Metadata } from "next"
import HomeContent from "@/components/sections/home/HomeContent"

export const metadata: Metadata = {
  title: "AugMend Health — Clinical Data Collection Services for Specialty Care",
  description:
    "Capture the full biopsychosocial complexity of chronic conditions, elevate care quality, simplify workflow. AugMend produces structured clinical reports and billing documentation from patient reported data.",
  openGraph: {
    title: "AugMend Health — Clinical Data Collection Services for Specialty Care",
    description:
      "Capture the full biopsychosocial complexity of chronic conditions, elevate care quality, simplify workflow.",
    type: "website",
  },
}

export default function Home() {
  return <HomeContent />
}
