export interface TeamMember {
  name: string
  title: string
  credentials?: string
  bio: string
  image?: string
  linkedin?: string
  section: "leadership" | "extended"
  order: number
}

export const team: TeamMember[] = [
  {
    name: "Sacha Moreau",
    title: "Co-Founder",
    credentials: "MIT",
    bio: "Product development, design, and environmental psychology.",
    image: "/images/team/Sacha-Color copy.png",
    linkedin: "https://linkedin.com/in/sacha-moreau",
    section: "leadership",
    order: 1,
  },
  {
    name: "Thomas J. Schneider",
    title: "Co-Founder, COO & General Counsel",
    credentials: "DPhil, Oxford \u00b7 Harvard Law",
    bio: "Business restructuring and healthcare operations.",
    image: "/images/team/Thomas_BW.jpg",
    linkedin: "https://linkedin.com/in/thomas-schneider-094623246",
    section: "leadership",
    order: 2,
  },
  {
    name: "Aleksy Dojnow",
    title: "Co-Founder, CPO",
    credentials: "MIT",
    bio: "Product development spanning VR, AI, and 3D systems.",
    image: "/images/team/Alek-BW copy.jpg",
    linkedin: "https://linkedin.com/in/aleksy-dojnow-bb810a13b",
    section: "leadership",
    order: 3,
  },
  {
    name: "Alexandra Therond",
    title: "Co-Founder",
    credentials: "PhD & PsyD, Universit\u00e9 du Qu\u00e9bec \u00e0 Montr\u00e9al",
    bio: "Clinical and experimental psychology with specialization in VR and digital health.",
    image: "/images/team/Alex_BW.jpg",
    linkedin: "https://linkedin.com/in/alexandra-therond-63290391",
    section: "leadership",
    order: 4,
  },
  {
    name: "Mark Ruchman, MD",
    title: "VP Medical Affairs",
    credentials: "Yale Medical School",
    bio: "Former CMO of Versant Health (MetLife / Fortune 500). 45+ years as clinician and healthcare administrator. Leads AugMend's clinical validation, institutional relationships, and provider engagement strategy.",
    image: "/images/team/MarkRuchman.jpeg",
    linkedin: "https://linkedin.com/in/mark-ruchman",
    section: "extended",
    order: 5,
  },
]
