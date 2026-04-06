export interface Advisor {
  name: string
  affiliation: string
  domain: string
  image?: string
  category: "clinical" | "technical" | "business" | "regulatory"
}

export const advisors: Advisor[] = [
  {
    name: "Dr. Michael Kritzer-Cheren",
    affiliation: "MGH / Harvard Medical School",
    domain: "Neuropsychiatry, neuromodulation",
    image: "/images/advisors/Mike Instructor Photo - Michael Kritzer.jpeg",
    category: "clinical",
  },
  {
    name: "Dr. Min Lang",
    affiliation: "MGH / BWH / Harvard Medical School",
    domain: "Neuroradiology, XR, AI",
    category: "clinical",
  },
  {
    name: "Dr. Soo Jeong Youn",
    affiliation: "Reliant Medical Group / OptumCare / Harvard",
    domain: "Implementation science",
    category: "clinical",
  },
  {
    name: "Dr. Hilary Weingarden",
    affiliation: "HabitAware / Harvard",
    domain: "Digital mental health",
    image: "/images/advisors/HilaryWeingarden.jpeg",
    category: "clinical",
  },
  {
    name: "Dr. Jessica Jackson",
    affiliation: "Mental Health America / FDA DHAC",
    domain: "Regulatory, clinical AI governance",
    image: "/images/advisors/Dr. Jessica Jackson 2024 - Jessica Jackson.jpg",
    category: "regulatory",
  },
  {
    name: "Dr. Christine Palermo",
    affiliation: "Encore Consulting / Former CommonSpirit",
    domain: "Revenue cycle management",
    category: "business",
  },
  {
    name: "Dr. Roger Ferguson Jr.",
    affiliation: "Alphabet / MSK / Former Federal Reserve",
    domain: "Institutional governance",
    image: "/images/advisors/RogerFergusonJr.jpg",
    category: "business",
  },
  {
    name: "Dr. Jeffrey Gold",
    affiliation: "USC Keck / Former AppliedVR / Limbix",
    domain: "Pediatric pain, VR therapeutics",
    image: "/images/advisors/Dr. Jeffrey Gold VR Symposium Oct 2019 copy.jpg",
    category: "clinical",
  },
  {
    name: "Dr. Christopher Robinson",
    affiliation: "Johns Hopkins / Harvard",
    domain: "Pain medicine, AI",
    image: "/images/advisors/Christopher Robinson BW.jpeg",
    category: "clinical",
  },
  {
    name: "Dr. Mahnaz Maddah",
    affiliation: "Broad Institute",
    domain: "ML, clinical data modeling",
    image: "/images/advisors/MahnazMaddah_BW.jpg",
    category: "technical",
  },
  {
    name: "Dr. Francesco Onorati",
    affiliation: "Takeda / Former Empatica",
    domain: "Digital health, wearables, AI",
    image: "/images/advisors/Francesco Onorati.jpeg",
    category: "technical",
  },
  {
    name: "Genevieve Paquette",
    affiliation: "Vincer / Former Level Ex / Medscape",
    domain: "AI + healthcare startups",
    image: "/images/advisors/GenevievePquette_BW.jpeg",
    category: "business",
  },
  {
    name: "Jeff Herrmann",
    affiliation: "Launchpad Venture Group / Hub Angels",
    domain: "Technology investing",
    image: "/images/advisors/Jeff Herrmann Launchpad copy.jpg",
    category: "business",
  },
  {
    name: "Jorge Cortell",
    affiliation: "TECH-Tokyo / Former Harvard Innovation Labs",
    domain: "Biotech/MedTech VC",
    image: "/images/advisors/JorgeCortell_BW.jpg",
    category: "business",
  },
  {
    name: "Michael Madon",
    affiliation: "ABCorp / Former U.S. Treasury",
    domain: "Intelligence, security, governance",
    image: "/images/advisors/MichaelMadon_BW.jpeg",
    category: "business",
  },
]
