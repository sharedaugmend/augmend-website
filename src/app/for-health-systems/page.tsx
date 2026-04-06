import type { Metadata } from "next"
import ForHealthSystemsContent from "@/components/sections/for-health-systems/ForHealthSystemsContent"

export const metadata: Metadata = {
  title: "For Health Systems",
  description:
    "Clinical AI infrastructure that scales across service lines. Deploy across pain medicine, behavioral health, neurology, rehabilitation, and oncology supportive care.",
  openGraph: {
    title: "For Health Systems — AugMend Health",
    description:
      "Clinical AI infrastructure that scales across service lines.",
    type: "website",
  },
}

export default function ForHealthSystemsPage() {
  return <ForHealthSystemsContent />
}
