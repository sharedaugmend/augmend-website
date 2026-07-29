export interface TeamMember {
  name: string
  title: string
  credentials?: string
  image?: string
  linkedin?: string
  section: "leadership" | "extended"
  order: number
}

export const team: TeamMember[] = [
  {
    name: "Sacha Moreau",
    title: "Co-Founder",
    credentials: "MIT MA Architecture & Planning",
    image: "/images/team/SachaMoreau.png",
    linkedin: "https://linkedin.com/in/sacha-moreau",
    section: "leadership",
    order: 1,
  },
  {
    name: "Thomas J. Schneider",
    title: "Co-Founder, CEO & General Counsel",
    credentials: "Oxford DPhil · Harvard Law JD · Deakin LLD (hon.)",
    image: "/images/team/ThomasSchneider.png",
    linkedin: "https://linkedin.com/in/thomas-schneider-094623246",
    section: "leadership",
    order: 2,
  },
  {
    name: "Aleksy Dojnow",
    title: "Co-Founder, CPO",
    credentials: "MIT M.Arch",
    image: "/images/team/AleksyDojnow.png",
    linkedin: "https://linkedin.com/in/aleksy-dojnow-bb810a13b",
    section: "leadership",
    order: 3,
  },
  {
    name: "Alexandra Thérond",
    title: "Co-Founder and Clinical Advisor",
    credentials: "UQÀM PhD & PsyD (candidate, expected June 2027)",
    image: "/images/team/AlexandraTherond.png",
    linkedin: "https://linkedin.com/in/alexandra-therond-63290391",
    section: "leadership",
    order: 4,
  },
  {
    name: "Mark Ruchman, MD",
    title: "Chief Medical Officer",
    credentials: "Yale MD",
    image: "/images/team/MarkRuchman.jpg",
    linkedin: "https://linkedin.com/in/mark-ruchman",
    section: "leadership",
    order: 5,
  },
  {
    name: "Raysha Hutchins",
    title: "Chief Operations Officer",
    credentials: "Harvard MPH · Illinois State MBA & MS",
    image: "/images/team/RayshaHutchins.png",
    linkedin: "https://www.linkedin.com/in/rayshahutch/",
    section: "leadership",
    order: 6,
  },
  {
    name: "Randy Maldonado, LCSW",
    title: "Senior Therapist",
    credentials: "Fordham MSW",
    image: "/images/team/RandyMaldonado.jpg",
    linkedin: "https://www.linkedin.com/in/randymaldonadolcsw",
    section: "leadership",
    order: 7,
  },
  {
    name: "Hyunseok Hwang",
    title: "Senior Developer",
    credentials: "Stanford BS Computer Science",
    image: "/images/team/HyunseokHwang.png",
    linkedin: "https://www.linkedin.com/in/hyunseok-hwang/",
    section: "leadership",
    order: 8,
  },
  {
    name: "Chanapa \"Gift\" Kerdlapee",
    title: "Senior Technical Artist",
    credentials: "SCAD BFA",
    image: "/images/team/ChanapaGiftKerdlapee.jpg",
    linkedin: "https://www.linkedin.com/in/chanapakerd/",
    section: "leadership",
    order: 9,
  },
  {
    name: "Lucas De Paula Mari",
    title: "Senior DevOps",
    credentials: "UNESP BEng Mechanical Engineering",
    image: "/images/team/LucasDePaulaMari.png",
    linkedin: "https://www.linkedin.com/in/lucas-mari-119951118/",
    section: "leadership",
    order: 10,
  },
]
