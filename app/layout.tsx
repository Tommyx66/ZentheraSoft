import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Exo_2 } from 'next/font/google'
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import ClientWrapper from "./client.wrapper"

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
    "web development",
    "UX/UI design",
    "digital marketing",
    "responsive design",
    "mobile development",
    "e-commerce solutions",
    "custom websites",
    "web applications",
    "digital transformation",
    "user experience",
    "user interface",
    "modern web design",
    "progressive web apps",
    "API development",
    "database design",
    "cloud solutions",
    "performance optimization",
    "accessibility",
    "conversion optimization",
  ],
  authors: [
    { name: "Tomás Zarriello", url: "https://tomas-zarriello-portfolio.vercel.app/" },
    { name: "ZentheraSoft", url: "https://zentherasoft.com" },
  ],
  creator: "ZentheraSoft - Tomás Zarriello & Elián",
  publisher: "ZentheraSoft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
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
        type: "image/jpeg",
      },
      {
        url: "/images/zentherasoft-logo-square-dark.png",
        width: 400,
        height: 400,
        alt: "ZentheraSoft Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZentheraSoft - Innovación Digital Sin Límites",
    description: "Desarrollo full-stack, diseño UX/UI y marketing digital que transforma negocios.",
    images: ["/images/zentherasoft-og-image.jpg"],
    creator: "@zentherasoft",
    site: "@zentherasoft",
  },
  alternates: {
    canonical: "https://zentherasoft.com",
    languages: {
      "es-ES": "https://zentherasoft.com",
      "en-US": "https://zentherasoft.com/en",
    },
  },
  verification: {
    google: "your-google-verification-code-here",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Web Development & Digital Design Agency",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6761af" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c1d" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ZentheraSoft",
  },
  applicationName: "ZentheraSoft",
  generator: "Next.js",
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-TileColor": "#6761af",
    "msapplication-config": "/browserconfig.xml",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZentheraSoft",
  description: "Especialistas en desarrollo web full-stack, diseño UX/UI, branding y marketing digital",
  url: "https://zentherasoft.com",
  logo: {
    "@type": "ImageObject",
    url: "https://zentherasoft.com/images/zentherasoft-logo-horizontal-light.png",
    width: 300,
    height: 120,
  },
  image: "https://zentherasoft.com/images/zentherasoft-og-image.jpg",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Tomás Zarriello",
      jobTitle: "Full-Stack Developer & UX/UI Designer",
      url: "https://tomas-zarriello-portfolio.vercel.app/",
      sameAs: [
        "https://github.com/Tommyx66",
        "https://linkedin.com/in/tomas-zarriello",
      ],
    },
    {
      "@type": "Person",
      name: "Elián Sandoval",
      jobTitle: "Backend Developer & Marketing Strategist",
      sameAs: [
        "https://github.com/LyonyaD",
        "https://www.linkedin.com/in/elian-antonio-sandoval/",
      ],
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54-223-96690935",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
    areaServed: "Worldwide",
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
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "SEO",
    "E-commerce",
    "Mobile Development",
    "API Development",
    "Database Design",
    "Cloud Solutions",
  ],
  offers: {
    "@type": "Offer",
    name: "Web Development & Digital Design Services",
    description: "Complete digital solutions including web development, UX/UI design, branding, and digital marketing",
    category: "Professional Services",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "10",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${exo2.variable} ${inter.variable}`}>
      <head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
        />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6761af" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/images/zentherasoft-banner-dark.png" as="image" />
        <link rel="preload" href="/images/zentherasoft-logo-square-dark.png" as="image" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Toaster />
      </body>
    </html>
  )
}
