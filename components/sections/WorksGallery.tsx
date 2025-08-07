"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useAnimations, useMotionProps } from "@/components/ui/animation-controls"

export default function WorksGallery() {
  const { t } = useTranslation()
  const { animationsEnabled } = useAnimations()
  const [activeCategory, setActiveCategory] = useState(t("works.categories.all"))

  const projects = [
    {
      id: 1,
      title: t("works.projects.taskflow.title"),
      category: t("works.categories.reactNextjs"),
      description: t("works.projects.taskflow.description"),
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      link: "https://tomas-zarriello-portfolio.vercel.app/",
      github: "https://github.com/tomaszarriello",
    },
    {
      id: 2,
      title: t("works.projects.ecoshop.title"),
      category: t("works.categories.wordpress"),
      description: t("works.projects.ecoshop.description"),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      tags: ["WordPress", "WooCommerce", "Custom Theme", "SEO"],
      link: "https://tomas-zarriello-portfolio.vercel.app/",
      github: "https://github.com/tomaszarriello",
    },
    {
      id: 3,
      title: t("works.projects.financetracker.title"),
      category: t("works.categories.reactNextjs"),
      description: t("works.projects.financetracker.description"),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      tags: ["React", "Chart.js", "API Integration", "PWA"],
      link: "https://tomas-zarriello-portfolio.vercel.app/",
      github: "https://github.com/tomaszarriello",
    },
    {
      id: 4,
      title: t("works.projects.brandcraft.title"),
      category: t("works.categories.branding"),
      description: t("works.projects.brandcraft.description"),
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center",
      tags: ["Branding", "Logo Design", "Figma", "Illustrator"],
      link: "https://tomas-zarriello-portfolio.vercel.app/",
      github: "#",
    },
    {
      id: 5,
      title: t("works.projects.learnhub.title"),
      category: t("works.categories.uxui"),
      description: t("works.projects.learnhub.description"),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      tags: ["Figma", "User Research", "Prototyping", "Design System"],
      link: "https://tomas-zarriello-portfolio.vercel.app/",
      github: "#",
    },
    {
      id: 6,
      title: t("works.projects.restaurantpro.title"),
      category: t("works.categories.fullstack"),
      description: t("works.projects.restaurantpro.description"),
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
      link: "#",
      github: "#",
    },
  ]

  const categories = [
    t("works.categories.all"),
    t("works.categories.reactNextjs"),
    t("works.categories.wordpress"),
    t("works.categories.branding"),
    t("works.categories.uxui"),
    t("works.categories.fullstack"),
  ]

  const filteredProjects =
    activeCategory === t("works.categories.all")
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const MotionDiv = animationsEnabled ? motion.div : 'div'

  return (
    <section
      id="works"
      className="py-20 bg-gradient-to-br from-[#0c0c1d] via-[#1a0b2e] to-[#0c0c1d] relative overflow-hidden"
    >
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated cosmic dust */}
        {animationsEnabled && [...Array(40)].map((_, i) => (
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
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced section header */}
        <MotionDiv
          {...useMotionProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 }
          })}
          className="text-center mb-16"
        >
          <MotionDiv
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-brand"
            style={{
              textShadow: "0 0 30px rgba(103,97,175,0.5)",
            }}
          >
            {t("works.title")}
          </MotionDiv>
          <MotionDiv
            {...useMotionProps({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 }
            })}
            className="text-xl text-[#dcdbdf] max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {t("works.description")}
          </MotionDiv>
          {/* Enhanced category filter */}
          <MotionDiv
            {...useMotionProps({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.4 }
            })}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <MotionDiv
                key={category}
                {...useMotionProps({
                  initial: { opacity: 0, scale: 0 },
                  whileInView: { opacity: 1, scale: 1 },
                  transition: { delay: index * 0.1 },
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 }
                })}
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
                  {activeCategory !== category && animationsEnabled && (
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-[#6761af]/20 to-[#f8973d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Button>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              {...useMotionProps({
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: index * 0.1 },
                whileHover: { scale: 1.03, y: -10 }
              })}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#37356e]/60 to-[#1a0b2e]/60 border-[#6761af]/30 hover:border-[#f8973d]/60 transition-all duration-500 group overflow-hidden h-full backdrop-blur-sm relative">
                {/* Enhanced cosmic glow */}
                {animationsEnabled && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6761af]/10 to-[#f8973d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    whileHover={{
                      scale: 1.1,
                      boxShadow:
                        "0 0 50px rgba(103,97,175,0.3), 0 0 100px rgba(248,151,61,0.2)",
                    }}
                  />
                )}

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
                      <MotionDiv
                        {...useMotionProps({
                          initial: { scale: 0 },
                          whileHover: { scale: 1.1 },
                          whileTap: { scale: 0.9 }
                        })}
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
                            {t("works.viewProject")}
                          </a>
                        </Button>
                      </MotionDiv>
                      {project.github !== "#" && (
                        <MotionDiv
                          {...useMotionProps({
                            initial: { scale: 0 },
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.9 }
                          })}
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
                              {t("works.code")}
                            </a>
                          </Button>
                        </MotionDiv>
                      )}
                    </div>
                  </div>
                  {/* Cosmic particles on hover */}
                  {animationsEnabled && [...Array(12)].map((_, i) => (
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
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <CardContent className="p-6 relative z-10">
                  {/* Category badge */}
                  <div className="mb-3">
                    <MotionDiv
                      {...useMotionProps({ whileHover: { scale: 1.05 } })}
                      className="text-xs text-white font-semibold bg-gradient-to-r from-[#f8973d] to-[#e8863d] px-3 py-1 rounded-full font-brand inline-block"
                    >
                      {project.category}
                    </MotionDiv>
                  </div>
                  <MotionDiv
                    {...useMotionProps({ whileHover: { scale: 1.02 } })}
                    className="text-white text-xl font-semibold mb-3 font-brand group-hover:text-[#f8973d] transition-colors duration-300"
                  >
                    {project.title}
                  </MotionDiv>
                  <p className="text-[#dcdbdf] text-sm mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>
                  {/* Enhanced tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <MotionDiv
                        key={tag}
                        {...useMotionProps({
                          initial: { opacity: 0, scale: 0 },
                          whileInView: { opacity: 1, scale: 1 },
                          transition: { delay: tagIndex * 0.1 },
                          whileHover: { scale: 1.1, y: -2 }
                        })}
                        className="text-xs text-[#dcdbdf] bg-[#5d5771]/50 hover:bg-[#6761af]/30 px-3 py-1 rounded-full transition-all duration-300 cursor-default border border-[#6761af]/20 hover:border-[#f8973d]/40"
                      >
                        {tag}
                      </MotionDiv>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          {...useMotionProps({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 }
          })}
          className="text-sm text-[#a1a1b5] italic max-w-xl mx-auto my-6 leading-relaxed text-center"
        >
          {t("works.disclaimer")}
        </MotionDiv>

        {/* Call to action */}
        <MotionDiv
          {...useMotionProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.5 }
          })}
          className="text-center mt-16"
        >
          <MotionDiv
            {...useMotionProps({ whileHover: { scale: 1.02 } })}
            className="text-lg text-[#dcdbdf] mb-6"
          >
            {t("works.cta")}
          </MotionDiv>
          <MotionDiv 
            {...useMotionProps({ 
              whileHover: { scale: 1.05 }, 
              whileTap: { scale: 0.95 } 
            })}
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-[#6761af] to-[#f8973d] hover:from-[#5a4f9e] hover:to-[#e8863d] text-white px-8 py-3 font-brand text-lg shadow-lg"
            >
              {t("works.startProject")}
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  )
}
