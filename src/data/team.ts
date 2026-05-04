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
    image: "/images/team/SachaMoreau.png",
    linkedin: "https://linkedin.com/in/sacha-moreau",
    section: "leadership",
    order: 1,
  },
  {
    name: "Thomas J. Schneider",
    title: "Co-Founder, CEO & General Counsel",
    credentials: "DPhil, Oxford · Harvard Law. DLaws, Deakin",
    bio: "Business restructuring and healthcare operations.",
    image: "/images/team/ThomasSchneider.png",
    linkedin: "https://linkedin.com/in/thomas-schneider-094623246",
    section: "leadership",
    order: 2,
  },
  {
    name: "Aleksy Dojnow",
    title: "Co-Founder, CPO",
    credentials: "MIT",
    bio: "Product development spanning VR, AI, and 3D systems.",
    image: "/images/team/AleksyDojnow.png",
    linkedin: "https://linkedin.com/in/aleksy-dojnow-bb810a13b",
    section: "leadership",
    order: 3,
  },
  {
    name: "Alexandra Therond",
    title: "Co-Founder",
    credentials: "PhD & PsyD, Université du Québec à Montréal",
    bio: "Clinical and experimental psychology with specialization in VR and digital health.",
    image: "/images/team/AlexandraTherond.png",
    linkedin: "https://linkedin.com/in/alexandra-therond-63290391",
    section: "leadership",
    order: 4,
  },
  {
    name: "Mark Ruchman, MD",
    title: "VP Medical Affairs",
    credentials: "Yale Medical School",
    bio: "Clinical validation and provider engagement.",
    image: "/images/team/MarkRuchman.png",
    linkedin: "https://linkedin.com/in/mark-ruchman",
    section: "leadership",
    order: 5,
  },
]
