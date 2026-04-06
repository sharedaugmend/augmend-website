"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Counter from "@/components/ui/Counter"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

export default function OurStoryContent() {
  return (
    <>
      {/* Hero quote — dark */}
      <Section bg="deep-space" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-white/50">
          <a href="/" className="hover:text-white/80 transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/company/our-story" className="hover:text-white/80 transition-colors">Company</a>
          <span className="mx-2">/</span>
          <span className="text-white/80">Our Story</span>
        </nav>

        <blockquote className="max-w-3xl">
          <p className="font-display italic text-2xl md:text-3xl xl:text-4xl leading-relaxed text-white">
            &ldquo;The time I meet with my patient is the most important part of my day — that&#39;s when their bodies tell me everything, and during that time I aspire to give them my full attention.&rdquo;
          </p>
          <cite className="mt-6 block font-body text-sm not-italic text-white/50">
            — Grandpa, MD, PhD
          </cite>
        </blockquote>
      </Section>

      {/* The Visit That Never Had Enough Time */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>The Visit That Never Had Enough Time</SectionLabel>
          <div className="mt-6 max-w-2xl space-y-6">
            <p className="font-display italic text-xl text-neutral-near-black leading-relaxed">
              Somewhere in a specialty clinic today, a provider has very little time. They know it isn&#39;t enough. The patient knows it isn&#39;t enough. And yet this is how medicine works: one constrained window, repeated across a lifetime of chronic illness, trying to compress everything into a form that fits.
            </p>
            <p className="text-neutral-slate">
              The provider asks for support. The patient describes a limited set of symptoms. But there is a complex history underneath — a trauma, a job lost, a history of substance use, a relationship that fell apart, a fear they have never said out loud to anyone in a white coat. That detailed story never makes it into the chart.
            </p>
            <p className="text-neutral-slate">
              Not because the provider doesn&#39;t care. Because the system was never designed to create the conditions to capture the full story.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* What We Set Out to Build */}
      <section className="relative overflow-hidden bg-surface-cream py-12 md:py-16 xl:py-24">
        <Image src="/images/illustrations/man-portrait-cream-1.png" alt="" fill className="absolute inset-0 object-cover z-0 opacity-15 pointer-events-none" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <SectionLabel>What We Set Out to Build</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            A system that listens the way a visit never could.
          </h2>
          <div className="mt-6 max-w-2xl space-y-6">
            <p className="text-neutral-slate">
              AugMend Health was founded at MIT by a team of researchers, clinicians, and engineers who saw the same structural failure from different angles: the clinical encounter is a point in time. Fifteen or twenty minutes, once every few weeks or months, trying to capture everything that has happened since the last visit. The provider guesses. The patient simplifies. The documentation reflects a fraction of the truth.
            </p>
            <p className="text-neutral-slate">
              We didn&#39;t build a better form. We built the infrastructure to make the visit itself more honest and productive by surrounding it with patient-guided data collection ��� before, after, and between appointments, on any device, through a conversational AI designed for the disclosure conditions standard assessment was never built to create.
            </p>
          </div>
        </ScrollReveal>
        </div>
      </section>

      {/* The Founding Insight */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>The Founding Insight</SectionLabel>
          <div className="mt-6 max-w-2xl space-y-6">
            <p className="font-display italic text-xl text-neutral-near-black leading-relaxed">
              Research is clear: people disclose sensitive information to AI-driven digital environments at significantly higher rates than to clinicians face-to-face. The stigma lifts. The truth is captured. And when you structure what you collect for billing compliance from the moment of capture, the documentation problem and the revenue problem close together. One session. Two outputs. Neither one a compromise.
            </p>
            <p className="text-neutral-slate">
              That insight became three systems — Anamnesis for listening, Anodyne for education, Summa for understanding at scale — designed from the beginning to compound in value with every session. The architecture was always building toward a dataset that no competitor can replicate without equivalent time.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Traction */}
      <Section bg="deep-space">
        <ScrollReveal>
          <SectionLabel className="!text-accent-lime">Traction</SectionLabel>
          <h2 className="mt-4 text-white">Where we are today.</h2>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          <motion.div variants={staggerChild}>
            <div className="border-l-2 border-l-accent-lime pl-6">
              <div className="font-display font-bold text-5xl leading-[1.1] tracking-[-0.03em] text-white">
                <Counter target={10} />
              </div>
              <div className="mt-2 font-body font-bold text-sm uppercase tracking-[0.05em] text-white/60">
                Institutions
              </div>
              <p className="mt-3 font-body text-[15px] text-white/50">
                Validating the platform across specialty pain, behavioral health, oncology
              </p>
            </div>
          </motion.div>
          <motion.div variants={staggerChild}>
            <div className="border-l-2 border-l-accent-lime pl-6">
              <div className="font-display font-bold text-5xl leading-[1.1] tracking-[-0.03em] text-white">
                <Counter target={250} suffix="+" />
              </div>
              <div className="mt-2 font-body font-bold text-sm uppercase tracking-[0.05em] text-white/60">
                Demos Completed
              </div>
              <p className="mt-3 font-body text-[15px] text-white/50">
                Specialty clinics, health systems, and research institutions
              </p>
            </div>
          </motion.div>
          <motion.div variants={staggerChild}>
            <div className="border-l-2 border-l-accent-lime pl-6">
              <div className="font-display font-bold text-5xl leading-[1.1] tracking-[-0.03em] text-white">
                RCT
              </div>
              <div className="mt-2 font-body font-bold text-sm uppercase tracking-[0.05em] text-white/60">
                Registered Randomized Controlled Trial
              </div>
              <p className="mt-3 font-body text-[15px] text-white/50">
                NCT07336537 · Actively recruiting
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Closing statement */}
      <Section bg="white">
        <ScrollReveal>
          <blockquote className="max-w-[720px] mx-auto text-center">
            <p className="font-display italic text-xl md:text-2xl text-neutral-near-black leading-relaxed">
              The current system is destroying hope on both sides of the hospital aisle. We are building the infrastructure to restore it.
            </p>
          </blockquote>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" href="/company/team">
              Meet the Team →
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
