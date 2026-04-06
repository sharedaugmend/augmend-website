import type { Metadata } from "next"
import Section from "@/components/layout/Section"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "AugMend Health terms of service for platform usage, data processing, and clinical AI infrastructure.",
  openGraph: {
    title: "Terms of Service — AugMend Health",
    description: "AugMend Health terms of service.",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <Section bg="white" padding="large" className="pt-32!">
      <h1>Terms of Service</h1>
      <p className="mt-4 text-neutral-slate">Coming soon.</p>
    </Section>
  )
}
