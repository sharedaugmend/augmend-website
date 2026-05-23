import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"

/**
 * Global MDX element styling for the AugMend blog.
 *
 * This file is REQUIRED by @next/mdx in the App Router — without it, MDX
 * imports won't render. It maps the plain HTML that markdown compiles to
 * (p, h2, ul, a, …) onto the site's type scale and brand tokens, so every
 * post reads consistently without any per-post styling work.
 *
 * Authors should reach for the <Figure> and <PullQuote> components for images
 * and quotes; the bare `img`/`blockquote` mappings below are sensible
 * fallbacks for raw markdown.
 */
const components: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2 className="scroll-mt-28 mt-14 mb-0 first:mt-0" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="scroll-mt-28 mt-10 mb-0" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="scroll-mt-28 mt-8 mb-0" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p
      className="mt-6 first:mt-0 text-[17px] md:text-[18px] leading-[1.75] text-neutral-near-black"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mt-6 pl-6 list-disc marker:text-brand-indigo space-y-2 text-[17px] md:text-[18px] leading-[1.7]" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mt-6 pl-6 list-decimal marker:text-neutral-slate space-y-2 text-[17px] md:text-[18px] leading-[1.7]" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="pl-1" {...props}>
      {children}
    </li>
  ),
  a: ({ href = "#", children, ...props }) => (
    <Link
      href={href}
      className="text-brand-indigo font-semibold underline underline-offset-2 decoration-brand-indigo/30 hover:decoration-brand-indigo transition-colors"
      {...props}
    >
      {children}
    </Link>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-bold text-neutral-near-black" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-8 border-l-2 border-accent-lime pl-5 font-display italic text-[19px] leading-[1.6] text-neutral-slate"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props) => <hr className="my-12 border-neutral-border" {...props} />,
  // GFM tables — the lightweight native format for tabular data.
  table: ({ children, ...props }) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-neutral-border">
      <table className="w-full border-collapse text-left font-body text-[15px]" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-surface-cream" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border-b border-neutral-border px-4 py-3 font-bold text-neutral-near-black"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="border-b border-neutral-border px-4 py-3 align-top text-neutral-slate"
      {...props}
    >
      {children}
    </td>
  ),
  // Fallback for bare markdown images. Prefer <Figure> in posts.
  img: (props) => (
    <Image
      sizes="(min-width: 768px) 720px, 100vw"
      className="my-8 w-full h-auto rounded-xl border border-neutral-border"
      {...(props as ImageProps)}
    />
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
