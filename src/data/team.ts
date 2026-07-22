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
    title: "Chief Medical Officer",
    credentials: "Yale Medical School",
    bio: "Clinical validation and provider engagement.",
    image: "/images/team/MarkRuchman.jpg",
    linkedin: "https://linkedin.com/in/mark-ruchman",
    section: "leadership",
    order: 5,
  },
  {
    name: "Raysha Hutchins",
    title: "Director of Engineering",
    credentials: "MPH, Harvard · MBA & MS, Illinois State",
    bio: "Data science, predictive modeling, and analytics engineering.",
    image: "/images/team/RayshaHutchins.png",
    linkedin: "https://www.linkedin.com/in/rayshahutch/",
    section: "leadership",
    order: 6,
  },
  {
    name: "Randy Maldonado, LCSW",
    title: "Senior Therapist",
    credentials: "MSW, Fordham University",
    bio: "Trauma-informed clinical care and bilingual therapy.",
    image: "/images/team/RandyMaldonado.jpg",
    linkedin: "https://www.linkedin.com/in/randymaldonadolcsw",
    section: "leadership",
    order: 7,
  },
  {
    name: "Hyunseok Hwang",
    title: "Senior Developer",
    credentials: "Stanford",
    bio: "Human-computer interaction and product engineering.",
    image: "/images/team/HyunseokHwang.png",
    linkedin: "https://www.linkedin.com/in/hyunseok-hwang/",
    section: "leadership",
    order: 8,
  },
  {
    name: "Chanapa \"Gift\" Kerdlapee",
    title: "Senior Technical Artist",
    credentials: "BFA, SCAD",
    bio: "Immersive 3D environments and VR art direction.",
    image: "/images/team/ChanapaGiftKerdlapee.jpg",
    linkedin: "https://www.linkedin.com/in/chanapakerd/",
    section: "leadership",
    order: 9,
  },
  {
    name: "Lucas De Paula Mari",
    title: "Senior DevOps",
    credentials: "UNESP",
    bio: "Platform engineering and cloud infrastructure.",
    image: "/images/team/LucasDePaulaMari.png",
    linkedin: "https://www.linkedin.com/in/lucas-mari-119951118/",
    section: "leadership",
    order: 10,
  },
]
