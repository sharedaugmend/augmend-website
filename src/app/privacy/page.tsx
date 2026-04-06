import type { Metadata } from "next"
import Section from "@/components/layout/Section"

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
  return (
    <Section bg="white" padding="large" className="pt-32!">
      <h1>Privacy Policy</h1>
      <p className="mt-4 text-neutral-slate">Coming soon.</p>
    </Section>
  )
}
