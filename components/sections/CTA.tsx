"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone } from "lucide-react"

export default function CTA() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hola, me interesa agendar una consulta gratuita", "_blank")
  }

  const handleEmailClick = () => {
    window.open("mailto:contacto@zentherasoft.com?subject=Consulta sobre servicios", "_blank")
  }

  const handlePhoneClick = () => {
    window.open("tel:+1234567890", "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-[#6761af] to-[#37356e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white opacity-20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para llevar tu proyecto al siguiente nivel?
          </h2>
          <p className="text-lg md:text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos transformar tu idea en una realidad digital exitosa.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <MessageCircle className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
              <p className="text-white text-opacity-80 text-sm mb-4">Respuesta inmediata</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white w-full" onClick={handleWhatsAppClick}>
                Chatear Ahora
              </Button>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <Mail className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-white text-opacity-80 text-sm mb-4">Propuesta detallada</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#6761af] w-full bg-transparent"
                onClick={handleEmailClick}
              >
                Enviar Email
              </Button>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <Phone className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Llamada</h3>
              <p className="text-white text-opacity-80 text-sm mb-4">Consulta personalizada</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#6761af] w-full bg-transparent"
                onClick={handlePhoneClick}
              >
                Llamar Ahora
              </Button>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4">Consulta Gratuita de 30 Minutos</h3>
            <p className="text-white text-opacity-90 mb-6">
              Hablemos sobre tu proyecto sin compromiso. Te ayudamos a definir la mejor estrategia digital.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#6761af] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
