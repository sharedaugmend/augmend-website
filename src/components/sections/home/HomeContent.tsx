"use client"

import Hero from "@/components/sections/home/Hero"
import TheProblem from "@/components/sections/home/TheProblem"
import TheSolution from "@/components/sections/home/TheSolution"
import HowItWorksTeaser from "@/components/sections/home/HowItWorksTeaser"
import TwoCopilots from "@/components/sections/home/TwoCopilots"
import WhatChanges from "@/components/sections/home/WhatChanges"
import TheProof from "@/components/sections/home/TheProof"
import SeeWhatYoureMissing from "@/components/sections/home/SeeWhatYoureMissing"
import CtaBlock from "@/components/sections/home/CtaBlock"

export default function HomeContent() {
  return (
    <>
      <Hero />
      <TheProblem />
      <TheSolution />
      <HowItWorksTeaser />
      <TwoCopilots />
      <WhatChanges />
      <TheProof />
      <SeeWhatYoureMissing />
      <CtaBlock />
    </>
  )
}
