export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: "clinical-evidence" | "product-updates" | "industry-perspectives" | "press"
  date: string
  image?: string
}

export const blogCategories = {
  "clinical-evidence": "Clinical Evidence",
  "product-updates": "Product Updates",
  "industry-perspectives": "Industry Perspectives",
  press: "Press",
} as const

export const blogPosts: BlogPost[] = [
  {
    slug: "what-patients-withhold",
    title: "What Patients Withhold, and Why It Matters for Your Clinic\u2019s Bottom Line",
    excerpt: "Research shows patients disclose significantly more through conversational AI than standard assessment. Here\u2019s what that means for specialty care documentation and revenue.",
    category: "clinical-evidence",
    date: "2026-04-01",
  },
  {
    slug: "augmend-deploys-montefiore",
    title: "AugMend Deploys at Montefiore Hospital: First Results",
    excerpt: "Our first institutional deployment is live. Early data on provider adoption, patient engagement, and documentation impact across the psychiatry service line.",
    category: "product-updates",
    date: "2026-03-15",
  },
  {
    slug: "ambient-ai-vs-clinical-data",
    title: "Why Ambient AI and Clinical Data Collection Are Not the Same Category",
    excerpt: "Ambient scribes document what happens in the room. AugMend captures what never makes it into the room. The distinction matters for specialty care.",
    category: "industry-perspectives",
    date: "2026-03-01",
  },
]
