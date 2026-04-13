"use client"

import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"

export default function CtaBlock() {
  return (
    <section id="cta" className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-brand-deep-space border-t border-white/[0.08]">
      <div className="mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-white">See how AugMend works in your clinic.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="lime" href="/contact" size="large">
                Schedule a Conversation
              </Button>
              <Button variant="ghost" href="/platform/how-it-works" size="large">
                See How It Works
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
