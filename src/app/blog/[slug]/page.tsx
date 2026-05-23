import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import BrandedCover from "@/components/ui/BrandedCover"
import Button from "@/components/ui/Button"
import { blogCategories, DEFAULT_AUTHOR } from "@/data/blog"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/content/blog/posts"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

// Only slugs returned above are valid; anything else 404s.
export const dynamicParams = false

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — AugMend Health`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [{ url: post.cover.src }] : undefined,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { default: Article } = await post.load()
  const related = getRelatedPosts(slug)
  const author = post.author ?? DEFAULT_AUTHOR

  return (
    <>
      {/* Header */}
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <Link href="/" className="hover:text-brand-indigo transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-brand-indigo transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">{blogCategories[post.category]}</span>
        </nav>

        <ScrollReveal>
          <div className="mx-auto max-w-[760px]">
            <SectionLabel>{blogCategories[post.category]}</SectionLabel>
            <h1 className="mt-4">{post.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-sm text-neutral-slate">
              <span className="font-bold text-neutral-near-black">{author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.readingMinutes ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingMinutes} min read</span>
                </>
              ) : null}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Cover */}
      <Section bg="white" className="py-0!">
        <ScrollReveal>
          <div className="mx-auto max-w-[960px] overflow-hidden rounded-2xl border border-neutral-border">
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              {post.cover ? (
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="object-cover"
                />
              ) : (
                <BrandedCover
                  title={post.title}
                  category={post.category}
                  slug={post.slug}
                  className="absolute inset-0 h-full w-full"
                />
              )}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Body */}
      <Section bg="white" padding="large" className="pt-12!">
        <article className="mx-auto max-w-[720px]">
          <Article />
        </article>

        {/* Back link */}
        <div className="mx-auto mt-16 max-w-[720px] border-t border-neutral-border pt-8">
          <Link
            href="/blog"
            className="font-body font-bold text-sm text-brand-indigo hover:text-brand-deep-space transition-colors"
          >
            ← All posts
          </Link>
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section bg="cream">
          <ScrollReveal>
            <SectionLabel>Keep reading</SectionLabel>
            <h2 className="mt-4 mb-10">More from the field.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((rel) => (
              <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
                  {rel.cover ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={rel.cover}
                        alt={rel.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <BrandedCover
                      title={rel.title}
                      category={rel.category}
                      slug={rel.slug}
                      compact
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <span className="mt-3 block font-body font-bold text-xs uppercase tracking-[0.05em] text-brand-indigo">
                  {blogCategories[rel.category]}
                </span>
                <h3 className="mt-1 font-body font-bold text-base leading-tight group-hover:text-brand-indigo transition-colors">
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section bg="deep-space" padding="large">
        <ScrollReveal>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-white">Ready to see AugMend in your clinic?</h2>
            <p className="mt-4 font-body text-[17px] text-white/60">
              We run structured pilots with specialty care practices. Most go live in under four weeks.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/#contact" variant="primary" size="large">
                Schedule a Conversation →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
