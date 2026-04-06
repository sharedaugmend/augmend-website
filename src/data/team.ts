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
    bio: "7 years in product design, environmental psychology, and wellness environment design. Built AugMend\u2019s product architecture from the insight that disclosure conditions, not just questions, determine what patients reveal.",
    image: "/images/team/Sacha-Color copy.png",
    linkedin: "https://linkedin.com/in/sacha-moreau",
    section: "leadership",
    order: 1,
  },
  {
    name: "Thomas J. Schneider",
    title: "Co-Founder, COO, General Counsel & Treasurer",
    credentials: "DPhil & DLaws (Hon), Oxford \u00b7 Harvard College \u00b7 Harvard Law \u00b7 Deakin University",
    bio: "45+ years in business restructuring and healthcare operations. Brings legal, financial, and operational infrastructure to a company building for institutional-grade deployment.",
    image: "/images/team/Thomas_BW.jpg",
    linkedin: "https://linkedin.com/in/thomas-schneider-094623246",
    section: "leadership",
    order: 2,
  },
  {
    name: "Aleksy Dojnow",
    title: "Co-Founder, CPO & Secretary",
    credentials: "MIT",
    bio: "6 years in product development spanning VR, AI, and 3D systems. Designed AugMend\u2019s device-agnostic architecture: the same clinical intelligence across phone, tablet, and headset.",
    image: "/images/team/Alek-BW copy.jpg",
    linkedin: "https://linkedin.com/in/aleksy-dojnow-bb810a13b",
    section: "leadership",
    order: 3,
  },
  {
    name: "Alexandra Therond",
    title: "Co-Founder",
    credentials: "PhD & PsyD, Universit\u00e9 du Qu\u00e9bec \u00e0 Montr\u00e9al",
    bio: "10 years in clinical and experimental psychology with specialization in VR, digital health interventions, and evaluations. Designed the clinical domain architecture and validation framework that structures every AugMend session.",
    image: "/images/team/Alex_BW.jpg",
    linkedin: "https://linkedin.com/in/alexandra-therond-63290391",
    section: "leadership",
    order: 4,
  },
  {
    name: "Dr. Mark Ruchman",
    title: "VP Medical Affairs",
    credentials: "Yale Medical School",
    bio: "Former CMO of Versant Health (MetLife / Fortune 500). 45+ years as clinician and healthcare administrator. Leads AugMend\u2019s clinical validation, institutional relationships, and provider engagement strategy.",
    image: "/images/team/MarkRuchman.jpeg",
    linkedin: "https://linkedin.com/in/mark-ruchman",
    section: "leadership",
    order: 5,
  },
]
