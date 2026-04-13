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
  { label: "How It Works", href: "/platform/how-it-works" },
  { label: "In Practice", href: "/in-practice" },
  { label: "Evidence", href: "/evidence" },
  {
    label: "Company",
    href: "/company/our-story",
    dropdown: [
      {
        links: [
          { label: "Our Story", href: "/company/our-story" },
          { label: "Team", href: "/company/team" },
        ],
      },
    ],
  },
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
      { label: "In Practice", href: "/in-practice" },
      { label: "Evidence", href: "/evidence" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/company/our-story" },
      { label: "Team", href: "/company/team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Trust & Security", href: "/trust-security" },
]
