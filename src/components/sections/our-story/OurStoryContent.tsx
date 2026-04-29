"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import GlassCard from "@/components/ui/GlassCard"
import ConstellationBeliefs from "@/components/sections/our-story/ConstellationBeliefs"
import { team } from "@/data/team"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const todayItems = [
  "Providers lack the information they need to make the best clinical decisions.",
  "Patients don't feel heard. Critical information never surfaces.",
  "Clinics lose revenue on work they've already done but can't document.",
  "Quality of care suffers — not from lack of skill, but lack of information.",
]

const vrPoints: { num: string; body: string }[] = [
  {
    num: "I",
    body:
      "VR uses metaphor and storytelling — tools humanity has evolved to respond to. That is not a feature. It is a fundamental property of the medium.",
  },
  {
    num: "II",
    body:
      "It is learning by doing. Not information delivered at a screen, but experience lived in a space. That difference changes what patients share and what they retain.",
  },
  {
    num: "III",
    body:
      "It engages the body, not just the mind. The sense of spatial presence activates the same cognitive and emotional systems that shape how patients disclose, process, and cope.",
  },
]

const beliefs = [
  {
    n: "Belief 01",
    body:
      "We believe patients hold important information for medical decision-making, and the system should not get in the way of providers' ability to collect it.",
  },
  {
    n: "Belief 02",
    body:
      "We believe psychological safety is not a luxury in clinical care. It is a prerequisite, and it can be built with technology.",
  },
  {
    n: "Belief 03",
    body:
      "We believe AI should not sit between patient and provider. It should clear the way for care that is actually tailored to the person receiving it.",
  },
  {
    n: "Belief 04",
    body:
      "We believe patient and provider data exchanges should be protected first, and that both should be the agents in how that data serves care quality and delivery.",
  },
]

export default function OurStoryContent() {
  const founders = team
    .filter((m) => m.section === "leadership" && m.order <= 4)
    .sort((a, b) => a.order - b.order)

  return (
    <>
      {/* HERO — matches home/HIW pattern: dark gradient + break-out + frosted card */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "70vh",
          paddingTop: 64,
          background:
            "linear-gradient(130deg, #070619 0%, #0c0a3e 55%, #181070 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 pointer-events-none z-[1]"
          style={{
            width: "55%",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 14%, rgba(0,0,0,0.6) 36%, black 64%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 14%, rgba(0,0,0,0.6) 36%, black 64%)",
          }}
        >
          <Image
            src="/images/home/doctor-patient-scene.png"
            alt=""
            fill
            sizes="55vw"
            priority
            className="object-cover"
            style={{
              objectPosition: "32% 22%",
              opacity: 0.78,
              mixBlendMode: "luminosity",
              filter: "hue-rotate(190deg) saturate(0.4) brightness(0.85)",
            }}
          />
        </div>

        <div
          className="relative z-[2] py-16 md:py-20 pointer-events-none"
          style={{
            marginLeft: "max(1.5rem, calc((100vw - 1280px)/2 + 1.5rem))",
            paddingRight: "1.5rem",
            width: "min(calc(100vw - 3rem), max(440px, 52vw))",
            maxWidth: 720,
          }}
        >
          <nav className="font-body text-sm mb-6 pointer-events-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Our Story</span>
          </nav>
          <ScrollReveal>
            <div
              className="rounded-3xl relative"
              style={{
                background: "rgba(7, 6, 25, 0.42)",
                backdropFilter: "blur(20px) saturate(130%)",
                WebkitBackdropFilter: "blur(20px) saturate(130%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow:
                  "0 0 60px 30px rgba(7, 6, 25, 0.35), 0 30px 60px -20px rgba(0, 0, 0, 0.6)",
                padding: "44px 56px",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 62%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.5) 100%)",
                maskImage:
                  "radial-gradient(ellipse at center, black 62%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.5) 100%)",
              }}
            >
              <SectionLabel dark>How We Came To Be</SectionLabel>
              <h1
                className="mt-4 font-display text-white"
                style={{
                  fontSize: "clamp(34px, 4vw, 50px)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                }}
              >
                There used to be a time when providers had <em className="italic" style={{ fontWeight: 500 }}>all the time in the world.</em>
              </h1>
              <p
                className="font-body mt-5"
                style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255, 255, 255, 0.78)" }}
              >
                Providers got to know their patient — to hear their woes, heal their wounds, the mind and the body — because they saw the full picture. They knew how their patients lived.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TODAY — narrative bridge from the hero into the research finding */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-surface-warm-white border-b border-neutral-border">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <div className="font-body font-bold text-[14px] uppercase tracking-[0.06em] text-neutral-slate mb-5">
              Today
            </div>
            <ul className="flex flex-col gap-3.5 max-w-[760px]">
              {todayItems.map((t) => (
                <li key={t} className="flex gap-4 items-start">
                  <span className="font-display text-brand-indigo text-[20px] leading-none mt-1 flex-shrink-0">
                    —
                  </span>
                  <span className="font-body text-[16px] leading-relaxed text-neutral-near-black">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* THE RESEARCH FINDING / HOW WE CAME TO BE — with VR points + provider image */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-stretch">
            <div>
              <ScrollReveal>
                <SectionLabel>The Research Finding</SectionLabel>
                <h2 className="mt-3 leading-[1.2]">
                  AugMend started with a finding that changed how we saw the problem.
                </h2>
                <div className="mt-5 space-y-4 text-neutral-slate">
                  <p>
                    Virtual reality leads to improved patient engagement and outcomes compared to screen-based alternatives — especially for patients with mental health conditions. Patients were more willing to share, more present in the experience, and more honest about what they were going through.
                  </p>
                  <p>
                    At the same time, the providers treating these patients had almost no time with them. What little time they had was consumed by documentation, not care. Critical information was never making it to notes. Clinics were losing revenue on work that was genuinely being done but never truly captured.
                  </p>
                  <p>
                    We saw these as the same problem. Sacha Moreau, Aleksy Dojnow, Alexandra Thérond, and Thomas Schneider brought product development, clinical psychology, healthcare operations, and technology together to solve it.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-10 space-y-5">
                  <div className="font-body font-bold text-[12px] uppercase tracking-[0.05em] text-neutral-slate">
                    Why VR specifically
                  </div>
                  {vrPoints.map((p) => (
                    <div key={p.num} className="flex gap-5 items-start">
                      <div
                        className="font-display flex-shrink-0 text-brand-indigo"
                        style={{ fontSize: 28, fontStyle: "italic", lineHeight: 1 }}
                      >
                        {p.num}
                      </div>
                      <p className="font-body text-[16px] leading-relaxed text-neutral-near-black max-w-[560px]">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Image stretches to match the height of the text+VR-points
                column on the left so the section's top and bottom align. */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden">
              <Image
                src="/images/our-story/research-finding-hands.png"
                alt="Vintage-style photograph of a person's hands holding a patient chart"
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXTENDING THE PROVIDER'S REACH — bridges from research finding to
          beliefs. Captures the core thesis: support providers when they're
          unavailable without redesigning the care journey. */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white border-t border-neutral-border">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <SectionLabel>Why We Built It This Way</SectionLabel>
              <h2 className="mt-3 leading-[1.15] max-w-[760px]" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 600 }}>
                Extending provider reach <em className="italic">without adding to provider burden.</em>
              </h2>
              <div className="mt-5 space-y-4 text-neutral-slate">
                <p>
                  The clinic is full of tools that support a provider <em>during</em> the visit. The harder problem is what happens <em>between</em> visits — when patients need attention but providers are stretched, and when the time for thorough information collection simply isn&rsquo;t there.
                </p>
                <p>
                  We built AugMend to extend a provider&rsquo;s reach in a safe, structured way: surface the clinical context they need, capture the conversations they don&rsquo;t have time for, and bring insights to the care journey that previously took months of clinical relationship to build.
                </p>
                <p>
                  We did not redesign the care journey. We did not ask clinics to swap their EHR or change the tools their providers were used to working with. AugMend fits into the existing infrastructure as a thin software layer — one that augments capability rather than displacing it.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <GlassCard tone="indigo" accent="indigo" className="p-8">
                <div className="font-body font-bold text-[11px] uppercase tracking-[0.08em] text-brand-indigo mb-4">
                  Three commitments
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="font-body font-bold text-[15px] text-neutral-near-black mb-1">
                      Augment, don&rsquo;t displace
                    </div>
                    <p className="font-body text-[14px] leading-[1.55] text-neutral-slate">
                      The provider keeps every clinical decision. AugMend handles the prep work, not the call.
                    </p>
                  </li>
                  <li>
                    <div className="font-body font-bold text-[15px] text-neutral-near-black mb-1">
                      Fit the workflow that exists
                    </div>
                    <p className="font-body text-[14px] leading-[1.55] text-neutral-slate">
                      No new EHR, no new staff, no new billing system. The clinic that runs today runs tomorrow — with more time and better information.
                    </p>
                  </li>
                  <li>
                    <div className="font-body font-bold text-[15px] text-neutral-near-black mb-1">
                      Reach beyond the appointment
                    </div>
                    <p className="font-body text-[14px] leading-[1.55] text-neutral-slate">
                      Capture context before the visit. Hold continuity between visits. Surface what the next encounter actually needs.
                    </p>
                  </li>
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHO WE ARE — belief cards (no bullet feel) */}
      <section id="who-we-are" className="relative overflow-hidden py-24 md:py-28 bg-surface-cream">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="mt-3 leading-[1.2] max-w-[680px]">
              Four beliefs that shape every decision we make.
            </h2>
          </ScrollReveal>
          <div className="mt-12">
            <ConstellationBeliefs beliefs={beliefs} />
          </div>
        </div>
      </section>

      {/* WHAT WE'RE BUILDING — dark section, VR chamber breaks out to right edge */}
      <section
        id="building"
        className="relative overflow-hidden py-24 md:py-28"
        style={{ background: "#0D0B3E" }}
      >
        {/* Break-out chamber image — bleeds to right viewport edge */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-0 bottom-0 right-0 pointer-events-none"
          style={{ width: "44vw" }}
        >
          <div className="relative h-full overflow-hidden">
            <Image
              src="/images/home/vr-chamber.png"
              alt=""
              fill
              sizes="44vw"
              className="object-cover"
              style={{ objectPosition: "30% center" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(13,11,62,1) 0%, rgba(13,11,62,0.85) 8%, rgba(13,11,62,0) 30%)",
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="lg:max-w-[58%]">
            <ScrollReveal>
              <SectionLabel dark>What We&rsquo;re Building</SectionLabel>
              <h2 className="mt-3 leading-[1.2] text-white">
                Self-guided AI-supported patient sessions, deployed across clinic and home settings.
              </h2>
              <div className="mt-5 space-y-4" style={{ color: "rgba(255,255,255,0.72)" }}>
                <p>
                  We collect the information providers need — during, before, and between visits — without requiring a provider to be present. That information collection is only the beginning. We use that data to build experiences that help patients feel heard, learn to cope with their conditions, and receive precision support that is shaped by what they actually shared.
                </p>
                <p>
                  The outputs support medical decision-making, treatment delivery, and revenue cycle management. The technology is embedded in the care workflow, not bolted on top of it.
                </p>
                <p>
                  We are following this vision across chronic care specialties, starting with pain and behavioral health — because these are the specialties where the disclosure gap is widest, the documentation burden is heaviest, and the revenue opportunity is most immediate.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button variant="primary" href="/platform/how-it-works">
                  See the Platform →
                </Button>
                <Button variant="ghost" href="/company/team">
                  Meet the Team
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FOUNDING TEAM */}
      <section id="founding-team" className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>The Founding Team</SectionLabel>
            <h2 className="mt-3 leading-[1.2] max-w-[680px]">
              Built by people who have worked inside the problem.
            </h2>
          </ScrollReveal>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {founders.map((m) => {
              const initials = m.name
                .split(" ")
                .filter((p) => /^[A-Z]/.test(p))
                .map((p) => p[0])
                .slice(0, 2)
                .join("")
              return (
                <motion.div key={m.name} variants={staggerChild}>
                  <GlassCard tone="neutral" className="group p-7 h-full transition-transform duration-300 hover:-translate-y-1">
                    <div
                      className="rounded-xl mb-5 flex items-center justify-center font-display font-semibold text-brand-indigo overflow-hidden relative"
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        background: "rgba(31,28,152,0.06)",
                        border: "1px solid rgba(31,28,152,0.12)",
                        fontSize: 32,
                      }}
                    >
                      {m.image ? (
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="(min-width: 1024px) 280px, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      ) : (
                        initials
                      )}
                    </div>
                    <div className="font-body font-bold text-[18px] text-neutral-near-black">
                      {m.name}
                    </div>
                    <div className="font-body font-bold text-[12px] uppercase tracking-[0.05em] text-brand-indigo mt-1">
                      {m.title}
                    </div>
                    {m.bio && (
                      <p className="mt-3 font-body text-[14px] leading-relaxed text-neutral-slate">
                        {m.bio}
                      </p>
                    )}
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <Button variant="secondary" href="/company/team">
                Meet the Full Team →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-24 md:py-28"
        style={{ background: "linear-gradient(135deg, #0D0B3E 0%, #1F1C98 100%)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-white mb-4" style={{ fontSize: 40 }}>
              Work with us.
            </h2>
            <p
              className="font-body mx-auto max-w-[640px] mb-9 text-[18px]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              We partner with specialty care practices, health systems, and clinical researchers building toward the same vision.
            </p>
            <Button variant="primary" href="/contact" size="large">
              Schedule a Conversation →
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
