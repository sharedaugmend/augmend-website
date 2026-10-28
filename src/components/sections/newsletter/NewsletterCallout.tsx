import NewsletterSignup from "@/components/ui/NewsletterSignup"
import SectionLabel from "@/components/ui/SectionLabel"
import { NEWSLETTER_NAME, NEWSLETTER_TAGLINE } from "@/data/newsletter"

/** Boxed sign-up used at the end of blog posts and on the getting-started page. */
export default function NewsletterCallout({ source }: { source: string }) {
  return (
    <div className="rounded-2xl border border-neutral-border bg-surface-cream p-8 md:p-10">
      <SectionLabel>The monthly newsletter</SectionLabel>
      <h3 className="mt-3 font-display text-[28px] leading-tight">{NEWSLETTER_NAME}</h3>
      <p className="mt-3 max-w-xl text-neutral-slate">{NEWSLETTER_TAGLINE}</p>
      <NewsletterSignup source={source} className="mt-8" />
    </div>
  )
}
