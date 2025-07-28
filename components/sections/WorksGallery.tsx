"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    category: "React/Next.js",
    description: "Tienda online con carrito de compras, pagos integrados y panel administrativo.",
    image: "https://via.placeholder.com/400x300?text=E-commerce+Moderno",
    tags: ["Next.js", "Stripe", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Portal Corporativo",
    category: "WordPress",
    description: "Sitio web corporativo con blog, formularios de contacto y área de clientes.",
    image: "https://via.placeholder.com/400x300?text=Portal+Corporativo",
    tags: ["WordPress", "Custom Theme", "WooCommerce"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "App de Gestión",
    category: "React/Next.js",
    description: "Dashboard administrativo para gestión de inventarios y reportes en tiempo real.",
    image: "https://via.placeholder.com/400x300?text=App+de+Gestión",
    tags: ["React", "Chart.js", "API REST"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Identidad Visual Completa",
    category: "Branding",
    description: "Desarrollo de marca completo incluyendo logo, paleta de colores y aplicaciones.",
    image: "https://via.placeholder.com/400x300?text=Identidad+Visual",
    tags: ["Logo Design", "Brand Guidelines", "Print Design"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Plataforma Educativa",
    category: "UX/UI",
    description: "Diseño de interfaz para plataforma de cursos online con experiencia optimizada.",
    image: "https://via.placeholder.com/400x300?text=Plataforma+Educativa",
    tags: ["Figma", "User Research", "Prototyping"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Landing Page Conversión",
    category: "WordPress",
    description: "Página de aterrizaje optimizada para conversión con formularios y analytics.",
    image: "https://via.placeholder.com/400x300?text=Landing+Page",
    tags: ["WordPress", "Conversion Optimization", "A/B Testing"],
    link: "#",
    github: "#",
  },
]

const categories = ["Todos", "React/Next.js", "WordPress", "Branding", "UX/UI"]

export default function WorksGallery() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="works" className="py-20 bg-[#5d5771] bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#dcdbdf] mb-4">Nuestros Trabajos</h2>
          <p className="text-lg text-[#8c8493] max-w-2xl mx-auto mb-8">
            Explora algunos de nuestros proyectos más destacados y descubre cómo podemos ayudarte
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "bg-[#6761af] hover:bg-[#37356e] text-white"
                    : "border-[#6761af] text-[#6761af] hover:bg-[#6761af] hover:text-white"
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#37356e] bg-opacity-50 border-[#6761af] border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "https://via.placeholder.com/400x300"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#6761af] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <Button size="sm" className="bg-white text-[#6761af] hover:bg-gray-100">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Proyecto
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-[#6761af] bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-[#6761af] font-semibold bg-[#6761af] bg-opacity-20 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-[#dcdbdf] text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[#8c8493] text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-[#dcdbdf] bg-[#5d5771] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
