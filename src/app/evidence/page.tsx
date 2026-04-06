import type { Metadata } from "next"
import EvidenceContent from "@/components/sections/evidence/EvidenceContent"

export const metadata: Metadata = {
  title: "Evidence",
  description:
    "Peer-reviewed research, registered clinical trials, and active institutional partnerships supporting AugMend Health's clinical data infrastructure.",
  openGraph: {
    title: "Evidence — AugMend Health",
    description: "Peer-reviewed. Independently validated. Actively recruiting.",
    type: "website",
  },
}

export default function EvidencePage() {
  return <EvidenceContent />
}
