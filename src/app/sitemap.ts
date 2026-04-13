import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://augmend.health"

  const pages = [
    "",
    "/in-practice",
    "/platform/how-it-works",
    "/evidence",
    "/company/our-story",
    "/company/team",
    "/contact",
    "/faq",
    "/blog",
    "/privacy",
    "/terms",
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : page === "/in-practice" ? 0.9 : 0.8,
  }))
}
