"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Button from "@/components/ui/Button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 motion-safe:block hidden"
        aria-hidden
      >
        <source src="/images/hero/Flow Mar 27 2026.mp4" type="video/mp4" />
      </video>
      {/* Static fallback for reduced motion */}
      <div className="absolute inset-0 z-0 motion-safe:hidden bg-brand-deep-space" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0D0B3E]/60 z-[1]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <h1 className="font-display font-semibold text-[32px] md:text-[42px] xl:text-[56px] leading-[1.1] tracking-[-0.02em] text-white">
            Capture the Full Complexity of Chronic Conditions
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" href="/platform/how-it-works" size="large">
              See How It Works
            </Button>
            <Button variant="ghost" href="/contact" size="large">
              Schedule a Conversation
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-white/60" strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}
