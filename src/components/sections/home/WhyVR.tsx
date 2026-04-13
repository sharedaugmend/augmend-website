"use client"

import { motion } from "framer-motion"
import { Shield, Focus, MessageCircle, ArrowRight, Star, Globe } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const benefits = [
  { icon: Shield, title: "Privacy & Trust", body: "VR scored 22% higher than web-based AI on privacy and trust measures." },
  { icon: Focus, title: "Focused Engagement", body: "Patients describe VR as calm, focused, and easier to concentrate in." },
  { icon: MessageCircle, title: "Deeper Disclosure", body: "Medical disclosure comfort rated 33% higher in VR than web-based AI." },
  { icon: ArrowRight, title: "Future Use", body: "7 of 8 patients preferred VR for future sessions (r = 0.81, p = .022)." },
  { icon: Star, title: "Preferred Across Domains", body: "VR outperformed web-based AI in 7 of 8 measured experience domains." },
  { icon: Globe, title: "Cultural Sensitivity", body: "VR rated higher for cultural competence and individual identity." },
]

export default function WhyVR() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-white">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_35%] gap-10 lg:gap-14 items-start">
          <div>
            <ScrollReveal>
              <SectionLabel>Why VR</SectionLabel>
              <h2 className="mt-4">Immersion changes what patients are willing to share.</h2>
              <p className="mt-6 text-neutral-slate">
                AugMend works on phone, tablet, and VR headset but VR consistently outperforms every other modality across the dimensions that matter most to clinical data capture. These are findings from our randomized controlled trial.
              </p>
            </ScrollReveal>

            <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
              {benefits.map((b) => (
                <motion.div key={b.title} variants={staggerChild} className="flex items-start gap-3">
                  <b.icon className="h-5 w-5 text-brand-indigo shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="font-body font-bold text-[13px] text-neutral-near-black">{b.title}</p>
                    <p className="mt-0.5 font-body text-[12px] text-neutral-slate leading-relaxed">{b.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <ScrollReveal>
              <blockquote className="mt-8">
                <p className="font-display italic text-lg text-neutral-near-black leading-relaxed">
                  &ldquo;For the first time I felt like someone was actually taking the time to listen to my issues and needs.&rdquo;
                </p>
                <cite className="mt-2 block font-body text-xs not-italic text-neutral-slate">Trial participant, Boston</cite>
              </blockquote>
            </ScrollReveal>
          </div>

          {/* VR video — matched to text height */}
          <ScrollReveal delay={0.1} className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden">
              <video autoPlay muted loop playsInline aria-hidden="true" className="w-full h-auto object-contain" poster="/images/illustrations/VR-experiences-adaptive-3.png">
                <source src="/videos/Vertical-VR-scene.mp4" type="video/mp4" />
              </video>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
