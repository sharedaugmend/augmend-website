import type { Metadata } from "next"
import OurStoryContent from "@/components/sections/our-story/OurStoryContent"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "AugMend Health was founded at MIT by a team of researchers, clinicians, and engineers who saw the same structural failure from different angles.",
  openGraph: {
    title: "Our Story — AugMend Health",
    description: "The visit that never had enough time.",
    type: "website",
  },
}

export default function OurStoryPage() {
  return <OurStoryContent />
}
