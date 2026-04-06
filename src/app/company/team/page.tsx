import type { Metadata } from "next"
import TeamContent from "@/components/sections/team/TeamContent"

export const metadata: Metadata = {
  title: "Team & Leadership",
  description:
    "Clinicians, engineers, and researchers who built AugMend Health because the system was failing in a specific, documentable way.",
  openGraph: {
    title: "Team & Leadership — AugMend Health",
    description: "Meet the team behind AugMend Health.",
    type: "website",
  },
}

export default function TeamPage() {
  return <TeamContent />
}
