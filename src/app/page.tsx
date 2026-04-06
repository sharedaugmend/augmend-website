import type { Metadata } from "next"
import HomeContent from "@/components/sections/home/HomeContent"

export const metadata: Metadata = {
  title: "AugMend Health — Clinical Data Infrastructure for Specialty Care",
  description:
    "Capture the full complexity of chronic conditions, elevate care quality, simplify your workflow. AugMend produces structured clinical reports and billing documentation from the first session.",
  openGraph: {
    title: "AugMend Health — Clinical Data Infrastructure for Specialty Care",
    description:
      "Capture the full complexity of chronic conditions, elevate care quality, simplify your workflow.",
    type: "website",
  },
}

export default function Home() {
  return <HomeContent />
}
