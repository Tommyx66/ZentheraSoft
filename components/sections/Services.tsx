"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useAnimations, useMotionProps } from "@/components/ui/animation-controls"

export default function Services() {
  const { t } = useTranslation()
  const { animationsEnabled } = useAnimations()

  const services = [
    {
      icon: Code,
      title: t("services.fullstack.title"),
      description: t("services.fullstack.description"),
      features: ["React & Next.js", "Node.js & APIs", "Bases de datos", "Deployment & DevOps"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Globe,
      title: t("services.wordpress.title"),
      description: t("services.wordpress.description"),
      features: ["Temas personalizados", "Plugins a medida", "WooCommerce", "Optimización SEO"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Palette,
      title: t("services.design.title"),
      description: t("services.design.description"),
      features: ["Diseño UX/UI", "Branding completo", "Prototipos interactivos", "Design systems"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Smartphone,
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      features: ["Marketing digital", "SEO & SEM", "Automatización", "Analytics & reporting"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    },
  ]

  const MotionDiv = animationsEnabled ? motion.div : 'div'

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-[#0c0c1d] via-[#1a0b2e] to-[#0c0c1d] relative overflow-hidden"
    >
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated cosmic dust */}
        {animationsEnabled && [...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#6761af] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Enhanced nebula effects */}
        {animationsEnabled && (
          <motion.div
            className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(248,151,61,0.6) 0%, rgba(248,151,61,0.2) 40%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
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
            {t("services.title")}
          </MotionDiv>
          <MotionDiv
            {...useMotionProps({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 }
            })}
            className="text-xl text-[#dcdbdf] max-w-3xl mx-auto leading-relaxed"
          >
            {t("services.description")}
          </MotionDiv>
        </MotionDiv>

        {/* Enhanced services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              {...useMotionProps({
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: index * 0.2 },
                whileHover: { scale: 1.05, y: -10 }
              })}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#37356e]/60 to-[#1a0b2e]/60 border-[#6761af]/30 hover:border-[#f8973d]/60 transition-all duration-500 h-full overflow-hidden backdrop-blur-sm relative">
                {/* Cosmic glow effect */}
                {animationsEnabled && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6761af]/10 to-[#f8973d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 40px rgba(103,97,175,0.3), 0 0 80px rgba(248,151,61,0.2)",
                    }}
                  />
                )}

                {/* Service image with enhanced effects */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#37356e]/80 via-[#37356e]/40 to-transparent" />
                  
                  {/* Floating icon */}
                  <MotionDiv
                    className="absolute bottom-4 left-4 p-4 bg-gradient-to-r from-[#f8973d]/20 to-[#6761af]/20 rounded-2xl backdrop-blur-sm border border-[#f8973d]/30"
                    {...useMotionProps({
                      whileHover: { scale: 1.1, rotate: 5 }
                    })}
                  >
                    <service.icon className="h-8 w-8 text-[#f8973d]" />
                  </MotionDiv>

                  {/* Cosmic particles on hover */}
                  {animationsEnabled && [...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#f8973d] rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
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

                <CardHeader className="text-center pb-4 relative z-10">
                  <CardTitle className="text-white text-xl font-brand group-hover:text-[#f8973d] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-[#dcdbdf] mb-6 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <MotionDiv
                        key={idx}
                        {...useMotionProps({
                          initial: { opacity: 0, x: -20 },
                          whileInView: { opacity: 1, x: 0 },
                          transition: { delay: idx * 0.1 }
                        })}
                        className="text-sm text-[#dcdbdf] flex items-center group-hover:text-white transition-colors duration-300"
                      >
                        <MotionDiv 
                          className="w-2 h-2 bg-[#f8973d] rounded-full mr-3" 
                          {...useMotionProps({ whileHover: { scale: 1.5 } })}
                        />
                        {feature}
                      </MotionDiv>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
