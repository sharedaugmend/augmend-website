"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import GlassCard from "@/components/ui/GlassCard"
import { team, type TeamMember } from "@/data/team"
import { advisors, type Advisor } from "@/data/advisors"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const backerLogos = [
  { src: "mit-sandbox.png", alt: "MIT Sandbox" },
  { src: "harvard-health.png", alt: "Harvard HealthLab Accelerator" },
  { src: "harvard-ilab.png", alt: "Harvard iLab" },
  { src: "mit-100k.png", alt: "MIT $100K" },
  { src: "mit-deltav.png", alt: "MIT Delta V" },
  { src: "masschallenge.png", alt: "MassChallenge" },
  { src: "nsf-icorps.png", alt: "NSF I-Corps" },
  { src: "sbxi.png", alt: "SBXI" },
  { src: "aapm.png", alt: "AAPM Innovation Challenge" },
]

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter((p) => /^[A-Z]/.test(p))
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
}

function LeaderCard({ m }: { m: TeamMember }) {
  return (
    <motion.div variants={staggerChild}>
    <GlassCard
      tone="neutral"
      accent="indigo"
      className="group p-7 h-full transition-transform duration-300 hover:-translate-y-1"
      style={{ borderTop: "3px solid #1F1C98", borderLeft: "1px solid rgba(232,228,222,0.85)" }}
    >
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
          initialsOf(m.name)
        )}
        {/* On hover, lift the duotone wash so the photo color shifts toward
            its underlying indigo register — a subtle "warm up" beat */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,28,152,0) 60%, rgba(31,28,152,0.12) 100%)",
          }}
        />
      </div>
      <div className="font-body font-bold text-[18px] text-neutral-near-black">{m.name}</div>
      <div className="font-body font-bold text-[12px] uppercase tracking-[0.05em] text-brand-indigo mt-1">
        {m.title}
      </div>
      {m.credentials && (
        <div className="font-body text-[12px] text-neutral-slate mt-1">{m.credentials}</div>
      )}
      {m.bio && (
        <p className="mt-3 font-body text-[14px] leading-relaxed text-neutral-slate">{m.bio}</p>
      )}
      {m.linkedin && (
        <a
          href={m.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 font-body text-[12px] text-neutral-slate hover:text-brand-indigo transition-colors"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-1.38-.5-2.32-1.74-2.32-.95 0-1.51.64-1.76 1.26-.09.22-.11.53-.11.84v5.82h-3v-11h3v1.5c.4-.6 1.11-1.46 2.7-1.46 1.97 0 3.45 1.29 3.45 4.06v6.9z"/>
          </svg>
          LinkedIn
        </a>
      )}
    </GlassCard>
    </motion.div>
  )
}

function AdvisorCard({ a }: { a: Advisor }) {
  return (
    <motion.div variants={staggerChild}>
    <GlassCard
      tone={a.board === "medical" ? "indigo" : "lime"}
      accent={a.board === "medical" ? "indigo" : "lime"}
      className="group p-6 h-full transition-transform duration-300 hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-4 mb-3">
        <div
          className="rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden relative font-display font-semibold text-brand-indigo"
          style={{
            width: 56,
            height: 56,
            background: "rgba(31,28,152,0.06)",
            border: "1px solid rgba(31,28,152,0.12)",
            fontSize: 18,
          }}
        >
          {a.image ? (
            <Image
              src={a.image}
              alt={a.name}
              fill
              sizes="56px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            initialsOf(a.name)
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-body font-bold text-[15px] text-neutral-near-black leading-tight">
            {a.name}
          </div>
          <div className="font-body text-[12px] text-neutral-slate mt-1">{a.domain}</div>
        </div>
      </div>
      <p className="font-body text-[13px] leading-relaxed text-neutral-slate">{a.bio}</p>
      {a.linkedin && (
        <a
          href={a.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 font-body text-[12px] text-neutral-slate hover:text-brand-indigo transition-colors"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-1.38-.5-2.32-1.74-2.32-.95 0-1.51.64-1.76 1.26-.09.22-.11.53-.11.84v5.82h-3v-11h3v1.5c.4-.6 1.11-1.46 2.7-1.46 1.97 0 3.45 1.29 3.45 4.06v6.9z"/>
          </svg>
          LinkedIn
        </a>
      )}
    </GlassCard>
    </motion.div>
  )
}

export default function TeamContent() {
  const leadership = team
    .filter((m) => m.section === "leadership")
    .sort((a, b) => a.order - b.order)
  const medicalBoard = advisors.filter((a) => a.board === "medical")
  const businessBoard = advisors.filter((a) => a.board === "business")

  return (
    <>
      {/* HERO — matches home/HIW pattern */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "60vh",
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
            src="/images/home/doctor-portrait-cinematic.png"
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
            <Link href="/company/our-story" className="hover:text-white transition-colors">
              Company
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Team</span>
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
              <SectionLabel dark>Team &amp; Leadership</SectionLabel>
              <h1
                className="mt-4 font-display text-white"
                style={{
                  fontSize: "clamp(34px, 4vw, 50px)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                }}
              >
                The team <em className="italic" style={{ fontWeight: 500 }}>behind AugMend.</em>
              </h1>
              <p
                className="font-body mt-5"
                style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255, 255, 255, 0.78)" }}
              >
                Built by people who have worked inside the problem — in clinical care, product development, AI research, and healthcare operations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BACKER STRIP — full 9-logo set */}
      <section className="bg-surface-cream py-7 border-b border-neutral-border">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="flex flex-col items-center gap-4">
            <span className="font-body font-bold text-[11px] uppercase tracking-[0.07em] text-neutral-slate leading-none">
              Backed and accelerated by
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {backerLogos.map((logo) => (
                <Image
                  key={logo.src}
                  src={`/images/logos/${logo.src}`}
                  alt={logo.alt}
                  width={110}
                  height={26}
                  className="h-[26px] w-auto max-w-[110px] object-contain opacity-60 grayscale transition-opacity duration-200 hover:opacity-90"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Team</SectionLabel>
            <h2 className="mt-3 leading-[1.2]">Founders, leadership and team.</h2>
          </ScrollReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {leadership.map((m) => (
              <LeaderCard key={m.name} m={m} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* MEDICAL ADVISORY BOARD */}
      <section
        id="advisors"
        className="relative overflow-hidden py-24 md:py-28 bg-surface-cream"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Advisory Boards</SectionLabel>
            <h2 className="mt-3 leading-[1.2]">Medical Advisory Board</h2>
            <p className="mt-3 max-w-[680px] text-neutral-slate">
              Clinical researchers, physicians, and scientists advising on protocol design, evidence standards, and clinical safety.
            </p>
          </ScrollReveal>
          <div className="mt-10" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {medicalBoard.map((a) => (
              <AdvisorCard key={a.name} a={a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* BUSINESS STRATEGY ADVISORY BOARD */}
      <section
        id="business-advisors"
        className="relative overflow-hidden py-24 md:py-28 bg-surface-warm-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ScrollReveal>
            <SectionLabel>Advisory Boards</SectionLabel>
            <h2 className="mt-3 leading-[1.2]">Business Strategy Advisory Board</h2>
            <p className="mt-3 max-w-[680px] text-neutral-slate">
              Operators, investors, and policy leaders advising on commercial growth, revenue cycle, and organizational strategy.
            </p>
          </ScrollReveal>
          <div className="mt-10" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {businessBoard.map((a) => (
              <AdvisorCard key={a.name} a={a} />
            ))}
          </motion.div>
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
              Join us.
            </h2>
            <p
              className="font-body mx-auto max-w-[640px] mb-9 text-[18px]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              We&rsquo;re building toward a future where every provider has the information they need. If that resonates, we&rsquo;d like to hear from you.
            </p>
            <Button variant="primary" href="/contact" size="large">
              Get in Touch →
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
