import type { Metadata } from "next"
import Link from "next/link"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import NewsletterSignup from "@/components/ui/NewsletterSignup"
import {
  NEWSLETTER_AUTHOR,
  NEWSLETTER_NAME,
  NEWSLETTER_SECTIONS,
  NEWSLETTER_TAGLINE,
} from "@/data/newsletter"
import { getAllPosts } from "@/content/blog/posts"

export const metadata: Metadata = {
  title: `${NEWSLETTER_NAME} — the AugMend newsletter`,
  description: NEWSLETTER_TAGLINE,
  openGraph: {
    title: `${NEWSLETTER_NAME} — AugMend Health`,
    description: NEWSLETTER_TAGLINE,
    type: "website",
  },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long" })
}

export default function NewsletterPage() {
  const issues = getAllPosts().filter((p) => p.category === "newsletter")

  return (
    <>
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <Link href="/" className="hover:text-brand-indigo transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Newsletter</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-5">
            <SectionLabel>The monthly newsletter</SectionLabel>
            <h1 className="mt-4">{NEWSLETTER_NAME}</h1>
            <p className="mt-6 text-[20px] leading-relaxed text-neutral-slate">{NEWSLETTER_TAGLINE}</p>
            <p className="mt-6 font-body text-sm text-neutral-slate">
              Written by <span className="font-bold text-neutral-near-black">{NEWSLETTER_AUTHOR}</span>.
              One email at the end of each month.
            </p>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-border bg-surface-cream p-8 md:p-10">
              <NewsletterSignup source="newsletter-page" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section bg="cream">
        <ScrollReveal>
          <SectionLabel>In every issue</SectionLabel>
          <h2 className="mt-4 max-w-2xl">Four parts, ten minutes.</h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {NEWSLETTER_SECTIONS.map((s, i) => (
            <ScrollReveal key={s.title}>
              <div className="h-full rounded-xl border border-neutral-border bg-surface-white p-7">
                <span className="font-display text-[28px] text-brand-indigo">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-body font-bold text-lg leading-snug">{s.title}</h3>
                <p className="mt-2 text-[15px] text-neutral-slate">{s.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>Past issues</SectionLabel>
          <h2 className="mt-4">The archive.</h2>
        </ScrollReveal>
        {issues.length === 0 ? (
          <ScrollReveal>
            <div className="mt-10 rounded-xl border border-dashed border-neutral-mist bg-surface-warm-white px-8 py-14 text-center">
              <p className="font-display text-[22px] text-neutral-near-black">The first issue arrives December 1.</p>
              <p className="mt-2 font-body text-neutral-slate">Subscribe above and it will be in your inbox that morning.</p>
            </div>
          </ScrollReveal>
        ) : (
          <ul className="mt-10 divide-y divide-neutral-border border-y border-neutral-border">
            {issues.map((issue) => (
              <li key={issue.slug}>
                <Link
                  href={`/blog/${issue.slug}`}
                  className="group flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:gap-8"
                >
                  <time dateTime={issue.date} className="w-40 shrink-0 font-body text-sm text-neutral-slate">
                    {formatDate(issue.date)}
                  </time>
                  <span>
                    <span className="block font-body font-bold text-lg group-hover:text-brand-indigo transition-colors">
                      {issue.title}
                    </span>
                    <span className="mt-1 block text-[15px] text-neutral-slate">{issue.excerpt}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  )
}
