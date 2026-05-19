import type { Metadata } from "next"
import PrivacyContent from "@/components/sections/privacy/PrivacyContent"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AugMend Health privacy policy. HIPAA-compliant data handling with end-to-end encryption and zero vendor data retention.",
  openGraph: {
    title: "Privacy Policy — AugMend Health",
    description: "AugMend Health privacy policy.",
    type: "website",
  },
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
