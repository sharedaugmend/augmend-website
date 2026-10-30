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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel>In every issue</SectionLabel>
              <h2 className="mt-4">One email a month. Four things worth opening it for.</h2>
              <p className="mt-6 text-[17px] leading-relaxed text-neutral-slate">
                Written for the medical directors, practice managers and owners who run specialty clinics,
                and who would rather see the evidence than hear the pitch.
              </p>
            </div>
          </ScrollReveal>

          <ol className="lg:col-span-8 divide-y divide-neutral-border border-y border-neutral-border">
            {NEWSLETTER_SECTIONS.map((s, i) => (
              <li key={s.label}>
                <ScrollReveal>
                  <div className="grid grid-cols-[3.5rem_1fr] gap-x-4 py-8 md:grid-cols-[5rem_1fr] md:gap-x-6 md:py-10">
                    <span
                      aria-hidden="true"
                      className="font-display text-[40px] leading-none text-brand-indigo md:text-[52px]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-body font-bold text-[13px] uppercase tracking-[0.05em] text-brand-indigo">
                        {s.label}
                      </p>
                      <h3 className="mt-2 font-body font-bold text-[22px] leading-snug text-neutral-near-black">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-neutral-slate">{s.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
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
