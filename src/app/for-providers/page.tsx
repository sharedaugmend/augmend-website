import type { Metadata } from "next"
import ForProvidersContent from "@/components/sections/for-providers/ForProvidersContent"

export const metadata: Metadata = {
  title: "For Providers",
  description:
    "Know your patient before the visit begins. AugMend delivers a structured clinical picture: risk factors, psychosocial context, behavioral health indicators, reviewed in under a minute.",
  openGraph: {
    title: "For Providers — AugMend Health",
    description:
      "Know your patient before the visit begins.",
    type: "website",
  },
}

export default function ForProvidersPage() {
  return <ForProvidersContent />
}
