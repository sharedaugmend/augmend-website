export interface NavLink {
  label: string
  href: string
}

export interface NavDropdownGroup {
  heading?: string
  links: NavLink[]
}

export interface NavItem {
  label: string
  href: string
  dropdown?: NavDropdownGroup[]
}

export const mainNav: NavItem[] = [
  {
    label: "Platform",
    href: "/platform/how-it-works",
    dropdown: [
      {
        links: [
          { label: "How It Works", href: "/platform/how-it-works" },
        ],
      },
      {
        heading: "Use Cases",
        links: [
          { label: "For Clinics", href: "/for-clinics" },
          { label: "For Providers", href: "/for-providers" },
          { label: "For Health Systems", href: "/for-health-systems" },
        ],
      },
    ],
  },
  { label: "Evidence", href: "/evidence" },
  {
    label: "Company",
    href: "/company/our-story",
    dropdown: [
      {
        links: [
          { label: "Our Story", href: "/company/our-story" },
          { label: "Team", href: "/company/team" },
          { label: "Advisors", href: "/company/advisors" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "How It Works", href: "/platform/how-it-works" },
      { label: "For Clinics", href: "/for-clinics" },
      { label: "For Providers", href: "/for-providers" },
      { label: "For Health Systems", href: "/for-health-systems" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/company/our-story" },
      { label: "Team", href: "/company/team" },
      { label: "Advisors", href: "/company/advisors" },
      { label: "Evidence", href: "/evidence" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Trust & Security", href: "/trust-security" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Trust & Security", href: "/trust-security" },
]
