"use client"

import { useState } from "react"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Accordion from "@/components/ui/Accordion"
import { faq, faqCategories, type FaqEntry } from "@/data/faq"

type CategoryKey = FaqEntry["category"]

const allCategories = Object.entries(faqCategories) as [CategoryKey, string][]

export default function FaqContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">("all")

  const filtered = activeCategory === "all"
    ? faq
    : faq.filter((entry) => entry.category === activeCategory)

  return (
    <>
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">FAQ</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>FAQ</SectionLabel>
          <h1 className="mt-4 max-w-3xl">
            Common questions from clinics evaluating AugMend.
          </h1>
        </ScrollReveal>
      </Section>

      <Section bg="cream">
        {/* Category tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg font-body font-bold text-sm transition-colors duration-200 ${
                activeCategory === "all"
                  ? "bg-brand-indigo text-white"
                  : "bg-surface-white border border-neutral-border text-neutral-near-black hover:border-brand-indigo"
              }`}
            >
              All
            </button>
            {allCategories.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-lg font-body font-bold text-sm transition-colors duration-200 ${
                  activeCategory === key
                    ? "bg-brand-indigo text-white"
                    : "bg-surface-white border border-neutral-border text-neutral-near-black hover:border-brand-indigo"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grouped display when "all" is selected */}
        {activeCategory === "all" ? (
          allCategories.map(([key, label]) => {
            const items = faq.filter((e) => e.category === key)
            return (
              <ScrollReveal key={key}>
                <div className="mb-10">
                  <h2 className="text-xl mb-4">{label}</h2>
                  <div className="bg-surface-white border border-neutral-border rounded-xl px-6">
                    <Accordion
                      items={items.map((e) => ({
                        question: e.question,
                        answer: e.answer,
                      }))}
                    />
                  </div>
                </div>
              </ScrollReveal>
            )
          })
        ) : (
          <ScrollReveal>
            <div className="bg-surface-white border border-neutral-border rounded-xl px-6">
              <Accordion
                items={filtered.map((e) => ({
                  question: e.question,
                  answer: e.answer,
                }))}
              />
            </div>
          </ScrollReveal>
        )}
      </Section>
    </>
  )
}
