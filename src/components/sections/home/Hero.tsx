"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Button from "@/components/ui/Button"
import ParticleFlow from "@/components/ui/ParticleFlow"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-indigo">
      <ParticleFlow className="absolute inset-0 w-full h-full z-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pt-32 pb-24 md:pt-40 md:pb-32 pointer-events-none">
        <div className="max-w-3xl">
          <div
            className="rounded-2xl px-6 py-6 md:px-8 md:py-8"
            style={{
              background: "rgba(31, 28, 152, 0.8)",
              boxShadow: "0 0 60px 30px rgba(31, 28, 152, 0.75)",
            }}
          >
            <h1 className="font-display font-semibold text-[32px] md:text-[42px] xl:text-[56px] leading-[1.1] tracking-[-0.02em] text-white">
              Augmenting clinic capabilities. Mending the gap in patient data.
            </h1>
            <p className="mt-5 font-body text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl">
              Capture the full biopsychosocial picture of your patients through self-guided AI sessions before and between visits. The output data is summarized to support during clinical encounters, and optimized for billing after the visit to save time, improve care quality and recover missed revenue.
            </p>
          </div>

          <div className="relative z-20 mt-8 flex flex-wrap gap-4 pointer-events-auto">
            <Button variant="lime" href="/contact" size="large">
              Schedule a Conversation
            </Button>
            <Button variant="ghost" href="/platform/how-it-works" size="large">
              See How It Works
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-white/60" strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}
