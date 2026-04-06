"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import { team } from "@/data/team"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

export default function TeamContent() {
  const leadership = team.filter((m) => m.section === "leadership").sort((a, b) => a.order - b.order)
  const extended = team.filter((m) => m.section === "extended").sort((a, b) => a.order - b.order)

  return (
    <>
      {/* Hero */}
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/company/our-story" className="hover:text-brand-indigo transition-colors">Company</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Team</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>The Team</SectionLabel>
          <h1 className="mt-4 max-w-3xl">
            Clinicians, engineers, and researchers who built this because the system was failing in a specific, documentable way.
          </h1>
        </ScrollReveal>
      </Section>

      {/* Leadership */}
      <Section bg="cream">
        <ScrollReveal>
          <SectionLabel>Leadership</SectionLabel>
        </ScrollReveal>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {leadership.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerChild}
              className="bg-surface-white border border-neutral-border rounded-xl p-8 flex flex-col sm:flex-row gap-6"
            >
              {member.image ? (
                <div className="shrink-0">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.title}`}
                    width={120}
                    height={120}
                    className="rounded-xl object-cover w-[120px] h-[120px]"
                  />
                </div>
              ) : (
                <div className="shrink-0 w-[120px] h-[120px] rounded-xl bg-surface-cream flex items-center justify-center">
                  <span className="font-display text-3xl text-neutral-mist">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-body font-bold text-[22px] leading-tight">{member.name}</h3>
                <p className="mt-1 font-body text-sm text-brand-indigo">
                  {member.title}{member.credentials ? ` | ${member.credentials}` : ""}
                </p>
                <p className="mt-3 text-neutral-slate text-[15px] leading-relaxed">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-body text-sm text-brand-indigo hover:underline"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Extended team */}
      {extended.length > 0 && (
        <Section bg="white">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            {extended.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerChild}
                className="bg-surface-white border border-neutral-border rounded-xl p-8 flex flex-col sm:flex-row gap-6"
              >
                {member.image ? (
                  <div className="shrink-0">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.title}`}
                      width={120}
                      height={120}
                      className="rounded-xl object-cover w-[120px] h-[120px]"
                    />
                  </div>
                ) : (
                  <div className="shrink-0 w-[120px] h-[120px] rounded-xl bg-surface-cream flex items-center justify-center">
                    <span className="font-display text-3xl text-neutral-mist">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-body font-bold text-[22px] leading-tight">{member.name}</h3>
                  <p className="mt-1 font-body text-sm text-brand-indigo">
                    {member.title}{member.credentials ? ` | ${member.credentials}` : ""}
                  </p>
                  <p className="mt-3 text-neutral-slate text-[15px] leading-relaxed">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-body text-sm text-brand-indigo hover:underline"
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}

      {/* CTA */}
      <Section bg="indigo">
        <ScrollReveal>
          <h2 className="text-white text-center">
            Interested in joining the team?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button variant="ghost" href="/contact">
              View Careers
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
