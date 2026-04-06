import type { Metadata } from "next"
import ContactContent from "@/components/sections/contact/ContactContent"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a conversation with AugMend Health. Not a sales call — a clinical conversation about your workflow.",
  openGraph: {
    title: "Contact — AugMend Health",
    description: "Schedule a conversation with our clinical team.",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactContent />
}
