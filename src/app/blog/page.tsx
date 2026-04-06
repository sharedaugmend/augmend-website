import type { Metadata } from "next"
import BlogContent from "@/components/sections/blog/BlogContent"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Clinical evidence, product updates, and perspectives on the future of specialty care infrastructure from AugMend Health.",
  openGraph: {
    title: "Blog — AugMend Health",
    description: "Insights from the field.",
    type: "website",
  },
}

export default function BlogPage() {
  return <BlogContent />
}
