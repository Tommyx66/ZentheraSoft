"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import WorksGallery from "@/components/sections/WorksGallery"
import Footer from "@/components/sections/Footer"

// Lazy load del formulario de contacto para mejor performance
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), {
  loading: () => (
    <div className="py-20 bg-gradient-to-br from-[#0c0c1d] to-[#37356e] flex items-center justify-center">
      <div className="text-white text-lg">Cargando formulario...</div>
    </div>
  ),
  ssr: false
})

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WorksGallery />
        <Suspense fallback={<div>Cargando...</div>}>
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
