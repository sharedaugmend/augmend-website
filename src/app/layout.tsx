import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://augmend.health"),
  title: {
    default: "AugMend Health — Clinical Data Collection Services for Specialty Care",
    template: "%s — AugMend Health",
  },
  description:
    "AugMend captures the biopsychosocial data specialty clinics miss, structures it for clinical use, and generates billing documentation.",
  openGraph: {
    siteName: "AugMend Health",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://augmend.health/#organization",
      name: "AugMend Health",
      url: "https://augmend.health",
      description:
        "Clinical data collection services for specialty care. AugMend captures biopsychosocial data, structures it for clinical use, and generates billing documentation.",
      foundingDate: "2023",
      founders: [
        { "@type": "Person", name: "Sacha Moreau" },
        { "@type": "Person", name: "Thomas J. Schneider" },
        { "@type": "Person", name: "Aleksy Dojnow" },
        { "@type": "Person", name: "Alexandra Therond" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@augmend.health",
        telephone: "+1-617-693-5727",
        contactType: "sales",
      },
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://augmend.health/#medicalbusiness",
      name: "AugMend Health",
      url: "https://augmend.health",
      description:
        "Clinical AI infrastructure that captures biopsychosocial data through conversational AI sessions, generates structured clinical reports, and produces billing documentation for specialty care.",
      medicalSpecialty: [
        "Pain Medicine",
        "Behavioral Health",
        "Neurology",
        "Rehabilitation",
        "Oncology Supportive Care",
      ],
      isAcceptingNewPatients: false,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Global duotone filter — applied via filter:url(#duotone-indigo-cream) */}
        <svg
          aria-hidden="true"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        >
          <defs>
            <filter id="duotone-indigo-cream">
              <feColorMatrix
                type="matrix"
                values="0.12 0.11 0.59 0 0  0.11 0.10 0.59 0 0  0.60 0.58 0.93 0 0  0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
