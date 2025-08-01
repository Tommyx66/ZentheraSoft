import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Exo_2 } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-brand",
  display: "swap",
  preload: true,
})
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body-alt",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zentherasoft.com"),
  title: {
    default: "ZentheraSoft - Innovación Digital Sin Límites | Desarrollo Web & Diseño UX/UI",
    template: "%s | ZentheraSoft",
  },
  description:
    "Transformamos ideas en experiencias digitales extraordinarias. Especialistas en desarrollo full-stack, diseño UX/UI, branding y marketing digital. Tomás Zarriello y Elián crean soluciones web innovadoras con React, Next.js, WordPress y más.",
  keywords: [
    "desarrollo web",
    "diseño UX/UI",
    "React",
    "Next.js",
    "WordPress",
    "branding",
    "marketing digital",
    "full-stack developer",
    "Tomás Zarriello",
    "ZentheraSoft",
    "desarrollo frontend",
    "desarrollo backend",
    "Java",
    "Python",
    "Figma",
    "Photoshop",
    "aplicaciones web",
    "ecommerce",
    "SEO",
    "optimización web",
  ],
  authors: [
    { name: "Tomás Zarriello", url: "https://tomas-zarriello-portfolio.vercel.app/" },
    { name: "ZentheraSoft", url: "https://zentherasoft.com" },
  ],
  creator: "ZentheraSoft - Tomás Zarriello & Elián",
  publisher: "ZentheraSoft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://zentherasoft.com",
    title: "ZentheraSoft - Innovación Digital Sin Límites",
    description:
      "Transformamos ideas en experiencias digitales extraordinarias. Desarrollo full-stack, diseño UX/UI y marketing digital de vanguardia.",
    siteName: "ZentheraSoft",
    images: [
      {
        url: "/images/zentherasoft-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZentheraSoft - Desarrollo Web & Diseño Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZentheraSoft - Innovación Digital Sin Límites",
    description: "Desarrollo full-stack, diseño UX/UI y marketing digital que transforma negocios.",
    images: ["/images/zentherasoft-og-image.jpg"],
    creator: "@zentherasoft",
  },
  alternates: {
    canonical: "https://zentherasoft.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZentheraSoft",
  description: "Especialistas en desarrollo web full-stack, diseño UX/UI, branding y marketing digital",
  url: "https://zentherasoft.com",
  logo: "https://zentherasoft.com/images/zentherasoft-logo-horizontal-light.png",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Tomás Zarriello",
      jobTitle: "Full-Stack Developer & UX/UI Designer",
      url: "https://tomas-zarriello-portfolio.vercel.app/",
    },
    {
      "@type": "Person",
      name: "Elián",
      jobTitle: "Backend Developer & Marketing Strategist",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: [
    "https://github.com/zentherasoft",
    "https://linkedin.com/company/zentherasoft",
    "https://twitter.com/zentherasoft",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Remote",
    addressCountry: "Worldwide",
  },
  serviceArea: {
    "@type": "Place",
    name: "Worldwide",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "WordPress",
    "UX/UI Design",
    "Branding",
    "Digital Marketing",
    "Full-Stack Development",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${exo2.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6761af" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
