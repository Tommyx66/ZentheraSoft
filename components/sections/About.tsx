import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0c0c1d]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#dcdbdf] mb-6">
              Sobre <span className="text-[#6761af]">Nosotros</span>
            </h2>
            <p className="text-lg text-[#8c8493] mb-8 leading-relaxed">
              Somos un equipo de 2 freelancers especializados en desarrollo web y diseño digital. Con años de
              experiencia, nos enfocamos en crear soluciones que no solo se ven increíbles, sino que también funcionan
              perfectamente.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#6761af] bg-opacity-20 rounded-lg">
                  <Users className="h-6 w-6 text-[#6761af]" />
                </div>
                <div>
                  <h3 className="text-[#dcdbdf] font-semibold mb-2">Equipo Especializado</h3>
                  <p className="text-[#8c8493] text-sm">
                    Desarrollador full-stack y diseñador UX/UI trabajando en perfecta sincronía.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#6761af] bg-opacity-20 rounded-lg">
                  <Target className="h-6 w-6 text-[#6761af]" />
                </div>
                <div>
                  <h3 className="text-[#dcdbdf] font-semibold mb-2">Enfoque en Resultados</h3>
                  <p className="text-[#8c8493] text-sm">
                    Cada proyecto está diseñado para generar impacto y cumplir objetivos específicos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#6761af] bg-opacity-20 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-[#6761af]" />
                </div>
                <div>
                  <h3 className="text-[#dcdbdf] font-semibold mb-2">Innovación Constante</h3>
                  <p className="text-[#8c8493] text-sm">
                    Siempre actualizados con las últimas tendencias y tecnologías del mercado.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-[#6761af] hover:bg-[#37356e] text-white px-8 py-3">Conoce Más Sobre Nosotros</Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://via.placeholder.com/600x500?text=Equipo+ZentheraSoft+trabajando"
                alt="Equipo ZentheraSoft trabajando"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#6761af] rounded-lg opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6761af] bg-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
