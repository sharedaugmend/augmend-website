import type { Metadata } from "next"
import TrustSecurityContent from "@/components/sections/trust-security/TrustSecurityContent"

export const metadata: Metadata = {
  title: "Trust, Security & AI Governance",
  description:
    "Enterprise-grade security for clinical AI infrastructure. HIPAA compliant, end-to-end encryption, zero data retention with AI vendors.",
  openGraph: {
    title: "Trust, Security & AI Governance — AugMend Health",
    description: "Enterprise-grade security for clinical AI infrastructure.",
    type: "website",
  },
}

export default function TrustSecurityPage() {
  return <TrustSecurityContent />
}
