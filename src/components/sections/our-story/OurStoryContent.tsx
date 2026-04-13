"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import { team } from "@/data/team"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

export default function OurStoryContent() {
  const founders = team.filter((m) => m.section === "leadership" && m.order <= 4).sort((a, b) => a.order - b.order)

  return (
    <>
      {/* 2.1 How We Came To Be — cream bg, image right edge-to-edge */}
      <section className="relative overflow-hidden bg-surface-cream">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_40%]">
          <div className="pt-28 pb-16 md:pt-32 md:pb-24 xl:pb-32 px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-10">
            <nav className="mb-8 font-body text-sm text-neutral-slate">
              <Link href="/" className="hover:text-brand-indigo transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/company/our-story" className="hover:text-brand-indigo transition-colors">Company</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-near-black">Our Story</span>
            </nav>
            <ScrollReveal>
              <SectionLabel>How We Came To Be</SectionLabel>
              <div className="mt-4 space-y-6">
                <p className="text-neutral-near-black text-lg md:text-xl leading-relaxed">
                  AugMend started with a research finding. Virtual reality leads to improved patient engagement and outcomes compared to screen-based alternatives, especially for patients with mental health conditions. Patients were more willing to share, more present in the experience, and more honest about what they were going through.
                </p>
                <p className="text-neutral-slate">
                  At the same time, the providers treating these patients had almost no time with them. What little time they had was consumed by documentation, not care. Critical information was never making it into the room. Clinics were losing revenue on work that was genuinely being done but never fully captured.
                </p>
                <p className="text-neutral-slate">
                  We saw these as the same problem. Sacha Moreau, Aleksy Dojnow, Alexandra Therond, and Thomas Schneider brought product development, clinical psychology, healthcare operations, and technology together to solve it.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="relative hidden lg:block min-h-[500px]">
            <Image src="/images/illustrations/a-world-of-data.png" alt="Data visualization" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* 2.2 Who We Are — dark bg, full width, no image */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-brand-deep-space">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/images/illustrations/dots-indigo-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <SectionLabel dark>Who We Are</SectionLabel>
            <div className="mt-4 max-w-3xl space-y-6">
              <p className="text-white/80">
                We believe patients hold important information for medical decision-making, and the system should not get in the way of providers&apos; ability to collect it.
              </p>
              <p className="text-white/80">
                We believe psychological safety is not a luxury in clinical care. It is a prerequisite, and it can be built with technology.
              </p>
              <p className="text-white/80">
                We believe AI should not sit between patient and provider. It should fit adaptively throughout the care journey, clearing the way for care that is actually tailored to the person receiving it.
              </p>
              <p className="text-white/80">
                We believe patient and provider data exchanges should be protected first, and that both should be the agents in how that data serves care quality and delivery.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2.3 What We're Building — cream bg, man-portrait image right edge-to-edge */}
      <section className="relative overflow-hidden bg-surface-cream">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_35%]">
          <div className="py-16 md:py-20 xl:py-24 px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-10">
            <ScrollReveal>
              <SectionLabel>What We&apos;re Building</SectionLabel>
              <div className="mt-4 space-y-6">
                <p className="text-neutral-slate">
                  Self-guided, AI-supported patient sessions deployed across clinic and home settings that collect the information providers need before, during, and between visits, without requiring a provider to be present. But information collection is only the beginning. We use that information to build experiences that help patients feel heard, learn how to cope with their conditions, and receive precision support that is shaped by what they actually shared.
                </p>
                <p className="text-neutral-slate">
                  The outputs support medical decision-making, treatment delivery, and revenue cycle management. The technology is embedded in the care workflow, not bolted on top of it.
                </p>
                <p className="text-neutral-slate">
                  We are following this vision across chronic care specialties, starting with pain and behavioral health. Billable technology that unifies patient data, improves outcomes, and makes sure providers are not leaving money on the table.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="relative hidden lg:block min-h-[400px]">
            <Image src="/images/illustrations/man-portrait-cream-1.png" alt="Patient portrait in dot-grid style" fill className="object-cover object-top" />
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <Section bg="white" dots>
        <ScrollReveal>
          <SectionLabel>The Founding Team</SectionLabel>
        </ScrollReveal>
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {founders.map((m) => (
            <motion.div key={m.name} variants={staggerChild} className="flex flex-col sm:flex-row gap-6">
              {m.image && (
                <div className="shrink-0">
                  <Image src={m.image} alt={m.name} width={100} height={100} className="rounded-xl object-cover object-top w-[100px] h-[100px]" />
                </div>
              )}
              <div>
                <h3 className="font-body font-bold text-lg">{m.name}</h3>
                <p className="mt-1 font-body text-sm text-accent-orange">{m.title}{m.credentials ? ` | ${m.credentials}` : ""}</p>
                <p className="mt-2 text-neutral-slate text-[15px]">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <ScrollReveal>
          <div className="mt-8">
            <Button variant="primary" href="/company/team">Meet the full team &rarr;</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
