"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import { blogPosts, blogCategories, type BlogPost } from "@/data/blog"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

type CategoryKey = BlogPost["category"] | "all"

const allCategories = Object.entries(blogCategories) as [BlogPost["category"], string][]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all")

  const filtered = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Blog</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>Insights</SectionLabel>
          <h1 className="mt-4 max-w-3xl">From the field.</h1>
          <p className="mt-4 max-w-2xl text-neutral-slate">
            Clinical evidence, product updates, and perspectives on the future of specialty care infrastructure.
          </p>
        </ScrollReveal>
      </Section>

      <Section bg="cream">
        {/* Filter bar */}
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          {filtered.map((post) => (
            <motion.div key={post.slug} variants={staggerChild}>
              <Card className="h-full flex flex-col">
                <div className="mb-4 rounded-lg bg-[#F5F0E8]" style={{ aspectRatio: "16/9" }} />
                <span className="font-body font-bold text-xs uppercase tracking-[0.05em] text-brand-indigo">
                  {blogCategories[post.category]}
                </span>
                <h3 className="mt-2 font-body font-bold text-lg leading-tight">{post.title}</h3>
                <p className="mt-2 text-neutral-slate text-[15px] flex-1">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-body text-sm text-neutral-slate">{formatDate(post.date)}</span>
                  <span className="font-body font-bold text-sm text-brand-indigo">Read more →</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
