import type { Metadata } from "next"
import ForClinicsContent from "@/components/sections/for-clinics/ForClinicsContent"

export const metadata: Metadata = {
  title: "For Clinics",
  description:
    "Recover specialty clinic revenue lost to incomplete documentation. AugMend captures biopsychosocial data, generates billing documentation, and starts recovering revenue from day one.",
  openGraph: {
    title: "For Clinics — AugMend Health",
    description:
      "Recover specialty clinic revenue lost to incomplete documentation.",
    type: "website",
  },
}

export default function ForClinicsPage() {
  return <ForClinicsContent />
}
