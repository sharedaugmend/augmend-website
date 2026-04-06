import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://augmend.health"

  const pages = [
    "",
    "/for-clinics",
    "/for-providers",
    "/for-health-systems",
    "/platform/how-it-works",
    "/company/our-story",
    "/company/team",
    "/company/advisors",
    "/evidence",
    "/contact",
    "/faq",
    "/trust-security",
    "/blog",
    "/privacy",
    "/terms",
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : page.startsWith("/for-") ? 0.9 : 0.8,
  }))
}
