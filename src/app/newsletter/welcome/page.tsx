import type { Metadata } from "next"
import Section from "@/components/layout/Section"
import WelcomeSurvey from "@/components/sections/newsletter/WelcomeSurvey"

export const metadata: Metadata = {
  title: "You're subscribed",
  robots: { index: false, follow: false },
}

export default function NewsletterWelcomePage() {
  return (
    <Section bg="cream" padding="large" className="pt-32! min-h-[70vh]">
      <WelcomeSurvey />
    </Section>
  )
}
