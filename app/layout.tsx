import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZentheraSoft - Desarrollo Web Profesional",
  description:
    "Especialistas en desarrollo web con WordPress, React/Next.js, branding visual y diseño UX/UI. Creamos experiencias digitales excepcionales.",
  keywords: "desarrollo web, WordPress, React, Next.js, branding, UX/UI, diseño web",
  authors: [{ name: "ZentheraSoft" }],
  openGraph: {
    title: "ZentheraSoft - Desarrollo Web Profesional",
    description: "Especialistas en desarrollo web con WordPress, React/Next.js, branding visual y diseño UX/UI.",
    type: "website",
    locale: "es_ES",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
