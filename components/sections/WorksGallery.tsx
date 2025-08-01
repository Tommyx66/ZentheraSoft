"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "TaskFlow - Gestión de Proyectos",
    category: "React/Next.js",
    description:
      "Aplicación completa de gestión de proyectos con autenticación, dashboard interactivo y colaboración en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    link: "https://tomas-zarriello-portfolio.vercel.app/",
    github: "https://github.com/tomaszarriello",
  },
  {
    id: 2,
    title: "EcoShop - E-commerce Sostenible",
    category: "WordPress",
    description:
      "Tienda online especializada en productos ecológicos con sistema de puntos de fidelidad y blog integrado.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
    tags: ["WordPress", "WooCommerce", "Custom Theme", "SEO"],
    link: "https://tomas-zarriello-portfolio.vercel.app/",
    github: "https://github.com/tomaszarriello",
  },
  {
    id: 3,
    title: "FinanceTracker - Dashboard Financiero",
    category: "React/Next.js",
    description:
      "Dashboard para seguimiento de finanzas personales con gráficos interactivos y análisis predictivo.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    tags: ["React", "Chart.js", "API Integration", "PWA"],
    link: "https://tomas-zarriello-portfolio.vercel.app/",
    github: "https://github.com/tomaszarriello",
  },
  {
    id: 4,
    title: "BrandCraft - Identidad Visual",
    category: "Branding",
    description:
      "Desarrollo completo de identidad visual para startup tecnológica, incluyendo logo, paleta y aplicaciones.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&crop=center",
    tags: ["Branding", "Logo Design", "Figma", "Illustrator"],
    link: "https://tomas-zarriello-portfolio.vercel.app/",
    github: "#",
  },
  {
    id: 5,
    title: "LearnHub - Plataforma Educativa",
    category: "UX/UI",
    description:
      "Diseño UX/UI completo para plataforma de cursos online con enfoque en experiencia de aprendizaje.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
    tags: ["Figma", "User Research", "Prototyping", "Design System"],
    link: "https://tomas-zarriello-portfolio.vercel.app/",
    github: "#",
  },
  {
    id: 6,
    title: "RestaurantPro - Sistema de Gestión",
    category: "Full-Stack",
    description:
      "Sistema completo de gestión para restaurantes con POS, inventario y análisis de ventas.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    link: "#",
    github: "#",
  },
];

const categories = [
  "Todos",
  "React/Next.js",
  "WordPress",
  "Branding",
  "UX/UI",
  "Full-Stack",
];

export default function WorksGallery() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="works"
      className="py-20 bg-gradient-to-br from-[#0c0c1d] via-[#1a0b2e] to-[#0c0c1d] relative overflow-hidden"
    >
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated cosmic dust */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#f8973d] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.3, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 7,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-brand"
            style={{
              textShadow: "0 0 30px rgba(103,97,175,0.5)",
            }}
          >
            Nuestro{" "}
            <span className="text-transparent bg-gradient-to-r from-[#6761af] to-[#f8973d] bg-clip-text">
              Universo
            </span>{" "}
            Creativo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#dcdbdf] max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Te mostramos una selección de proyectos donde aplicamos lo que mejor
            sabemos hacer: diseño claro, desarrollo funcional y atención a los
            detalles.
          </motion.p>

          {/* Enhanced category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category
                      ? "bg-gradient-to-r from-[#f8973d] to-[#e8863d] hover:from-[#e8863d] hover:to-[#d87529] text-white border-none"
                      : "border-[#6761af] text-[#6761af] hover:bg-[#6761af] hover:text-white bg-transparent"
                  } transition-all duration-300 font-brand relative overflow-hidden group`}
                >
                  <span className="relative z-10">{category}</span>
                  {activeCategory !== category && (
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-[#6761af]/20 to-[#f8973d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#37356e]/60 to-[#1a0b2e]/60 border-[#6761af]/30 hover:border-[#f8973d]/60 transition-all duration-500 group overflow-hidden h-full backdrop-blur-sm relative">
                {/* Enhanced cosmic glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#6761af]/10 to-[#f8973d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  whileHover={{
                    scale: 1.1,
                    boxShadow:
                      "0 0 50px rgba(103,97,175,0.3), 0 0 100px rgba(248,151,61,0.2)",
                  }}
                />

                {/* Enhanced project image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#37356e]/80 via-transparent to-transparent" />

                  {/* Enhanced overlay with buttons */}
                  <div className="absolute inset-0 bg-[#f8973d]/0 group-hover:bg-[#f8973d]/90 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex space-x-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          size="sm"
                          className="bg-white text-[#6761af] hover:bg-gray-100 font-brand shadow-lg"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver Proyecto
                          </a>
                        </Button>
                      </motion.div>

                      {project.github !== "#" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-[#6761af] bg-transparent shadow-lg"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Código
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Cosmic particles on hover */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <CardContent className="p-6 relative z-10">
                  {/* Category badge */}
                  <div className="mb-3">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="text-xs text-white font-semibold bg-gradient-to-r from-[#f8973d] to-[#e8863d] px-3 py-1 rounded-full font-brand"
                    >
                      {project.category}
                    </motion.span>
                  </div>

                  <motion.h3
                    className="text-white text-xl font-semibold mb-3 font-brand group-hover:text-[#f8973d] transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-[#dcdbdf] text-sm mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Enhanced tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-xs text-[#dcdbdf] bg-[#5d5771]/50 hover:bg-[#6761af]/30 px-3 py-1 rounded-full transition-all duration-300 cursor-default border border-[#6761af]/20 hover:border-[#f8973d]/40"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-[#a1a1b5] italic max-w-xl mx-auto my-6 leading-relaxed text-center"
        >
          Los proyectos visualizados aquí son diseños conceptuales, prototipos
          de marca y soluciones desarrolladas como demostraciones de nuestras
          capacidades creativas y técnicas. No representan trabajos reales con
          clientes, sino representaciones orientadas a exploración UI/UX e
          innovación visual.
        </motion.p>
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-[#dcdbdf] mb-6"
            whileHover={{ scale: 1.02 }}
          >
            ¿Tienes un proyecto en mente? ¡Hagámoslo realidad juntos!
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-[#6761af] to-[#f8973d] hover:from-[#5a4f9e] hover:to-[#e8863d] text-white px-8 py-3 font-brand text-lg shadow-lg"
            >
              Iniciar Proyecto
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
