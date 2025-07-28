"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/1234567890?text=Hola, me interesa conocer más sobre sus servicios de desarrollo web",
      "_blank",
    )
  }

  const handleScrollToWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0c0c1d] via-[#37356e] to-[#0c0c1d] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#6761af] rotate-45"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-[#6761af] rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#6761af] opacity-20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U2KpQuqzg7PFYVy7YUkQ1dUN3bTNvT.png"
              alt="ZentheraSoft Logo"
              width={300}
              height={120}
              className="h-20 w-auto"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#dcdbdf] mb-6 leading-tight">
            ZENTHERA
            <span className="block text-[#6761af]">SOFT</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#8c8493] mb-8 max-w-2xl mx-auto leading-relaxed">
            Creamos experiencias digitales excepcionales con WordPress, React y Next.js. Branding visual y diseño UX/UI
            que impulsan tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-[#6761af] hover:bg-[#37356e] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleScrollToWorks}
              className="border-[#6761af] text-[#6761af] hover:bg-[#6761af] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Ver Nuestros Trabajos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#6761af]">50+</div>
              <div className="text-sm text-[#8c8493]">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#6761af]">2</div>
              <div className="text-sm text-[#8c8493]">Especialistas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#6761af]">100%</div>
              <div className="text-sm text-[#8c8493]">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#6761af]">24/7</div>
              <div className="text-sm text-[#8c8493]">Soporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
