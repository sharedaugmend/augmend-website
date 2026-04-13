"use client"

import Hero from "@/components/sections/home/Hero"
import TrustBar from "@/components/sections/home/TrustBar"
import TheProblem from "@/components/sections/home/TheProblem"
import TheSolution from "@/components/sections/home/TheSolution"
import HowItWorksTeaser from "@/components/sections/home/HowItWorksTeaser"
import WhyVR from "@/components/sections/home/WhyVR"
import TheProof from "@/components/sections/home/TheProof"
import CtaBlock from "@/components/sections/home/CtaBlock"

export default function HomeContent() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TheProblem />
      <TheSolution />
      <HowItWorksTeaser />
      <WhyVR />
      <TheProof />
      <CtaBlock />
    </>
  )
}
