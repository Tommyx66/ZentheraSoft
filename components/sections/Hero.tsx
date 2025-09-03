"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Play, Sparkles } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useAnimations, useMotionProps } from "@/components/ui/animation-controls"

export default function Hero() {
  const { t } = useTranslation()
  const { animationsEnabled } = useAnimations()

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5491130894695?text=Hola, me gustaria obtener informacion sobre sus servicios, por favor",
      "_blank",
    )
  }

  const handleScrollToWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const MotionDiv = animationsEnabled ? motion.div : 'div'

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Enhanced Galactic Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c1d] via-[#1a0b2e] via-[#16213e] to-[#0f3460]" />
        
        {/* Animated stars */}
        {animationsEnabled && [...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Enhanced cosmic elements */}
        {animationsEnabled && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(103,97,175,0.4) 0%, rgba(103,97,175,0.1) 50%, transparent 100%)",
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-80 h-80 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(248,151,61,0.5) 0%, rgba(248,151,61,0.1) 50%, transparent 100%)",
              }}
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 0.7, 1],
                rotate: [360, 0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}

        {/* Enhanced cosmic particles */}
        {animationsEnabled && [...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: i % 3 === 0 ? "#6761af" : i % 3 === 1 ? "#f8973d" : "#ffffff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Enhanced Banner Logo */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-0">
          <MotionDiv
            {...useMotionProps({
              initial: { opacity: 0, y: -150, scale: 0.5 },
              animate: { opacity: 1, y: 0, scale: 1 },
              transition: { duration: 2, ease: "easeOut" }
            })}
            className="flex justify-center mb-8"
          >
            <div className="relative max-w-6xl w-full">
              <Image
                src="/images/zentherasoft-banner-dark.png"
                alt="ZentheraSoft - Developers & Designers"
                width={1200}
                height={300}
                className="w-full h-auto"
                priority
              />
              {/* Enhanced glow effect */}
              {animationsEnabled && (
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#6761af]/30 via-[#f8973d]/30 to-[#6761af]/30 rounded-2xl blur-2xl -z-10"
                />
              )}
            </div>
          </MotionDiv>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-30">
        <MotionDiv
          {...useMotionProps({
            variants: containerVariants,
            initial: "hidden",
            animate: "visible"
          })}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Main Heading */}
          <MotionDiv
            {...useMotionProps({ variants: itemVariants })}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight font-brand"
            style={{
              textShadow: "0 0 30px rgba(103,97,175,0.5), 0 0 60px rgba(248,151,61,0.3)",
            }}
          >
            <span className="block text-transparent bg-gradient-to-r from-[#6761af] via-[#f8973d] to-[#6761af] bg-clip-text">
              {t("hero.title")}
            </span>
            <span className="block text-transparent bg-gradient-to-r from-[#f8973d] via-[#6761af] to-[#f8973d] bg-clip-text">
              {t("hero.subtitle")}
            </span>
          </MotionDiv>

          {/* Enhanced Subtitle */}
          <MotionDiv
            {...useMotionProps({ variants: itemVariants })}
            className="text-xl md:text-2xl lg:text-3xl text-[#dcdbdf] mb-12 max-w-4xl mx-auto leading-relaxed font-body-alt"
            style={{
              textShadow: "0 0 20px rgba(220,219,223,0.3)",
            }}
          >
            {t("hero.description")}
          </MotionDiv>

          {/* Enhanced CTA Buttons */}
          <MotionDiv
            {...useMotionProps({ variants: itemVariants })}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <MotionDiv 
              {...useMotionProps({ 
                whileHover: { scale: 1.05 }, 
                whileTap: { scale: 0.95 } 
              })}
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-[#f8973d] to-[#e8863d] hover:from-[#e8863d] hover:to-[#d87529] text-white px-12 py-6 text-xl font-bold transition-all duration-300 font-brand shadow-2xl relative overflow-hidden group"
                style={{
                  boxShadow: "0 0 40px rgba(248,151,61,0.4), 0 15px 35px rgba(0,0,0,0.3)",
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  <Sparkles className="h-5 w-5" />
                  {t("hero.cta")}
                </span>
                {animationsEnabled && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6761af] to-[#f8973d]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Button>
            </MotionDiv>
            
            <MotionDiv 
              {...useMotionProps({ 
                whileHover: { scale: 1.05 }, 
                whileTap: { scale: 0.95 } 
              })}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleScrollToWorks}
                className="border-2 border-[#6761af] text-[#6761af] hover:bg-[#6761af] hover:text-white px-12 py-6 text-xl font-bold transition-all duration-300 bg-transparent font-brand backdrop-blur-sm relative overflow-hidden group"
                style={{
                  boxShadow: "0 0 30px rgba(103,97,175,0.3)",
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="h-6 w-6" />
                  {t("hero.explore")}
                  <ArrowRight className="h-6 w-6" />
                </span>
                {animationsEnabled && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6761af]/20 to-[#f8973d]/20"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Button>
            </MotionDiv>
          </MotionDiv>

          {/* Enhanced Stats */}
          <MotionDiv 
            {...useMotionProps({ variants: itemVariants })} 
            className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-4xl mx-auto"
          >
            {[
              { number: "6+", label: t("hero.stats.projects"), icon: "🚀" },
              { number: "2", label: t("hero.stats.specialists"), icon: "👨‍💻" },
              { number: "24/7", label: t("hero.stats.support"), icon: "🛡️" },
            ].map((stat, index) => (
              <MotionDiv
                key={stat.label}
                {...useMotionProps({
                  initial: { scale: 0, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { delay: 2 + index * 0.2, duration: 0.8 },
                  whileHover: { scale: 1.1 }
                })}
                className="text-center group relative"
              >
                <MotionDiv
                  className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#f8973d] to-[#6761af] bg-clip-text font-brand mb-2"
                  style={{
                    textShadow: "0 0 20px rgba(248,151,61,0.5)",
                  }}
                  {...useMotionProps({
                    whileHover: { scale: 1.2, rotate: 5 }
                  })}
                >
                  {stat.number}
                </MotionDiv>
                <div className="text-lg text-[#dcdbdf] font-medium flex items-center justify-center gap-2">
                  <span className="text-2xl">{stat.icon}</span>
                  {stat.label}
                </div>
                {/* Enhanced glow effect */}
                {animationsEnabled && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6761af]/10 to-[#f8973d]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 30px rgba(103,97,175,0.3), 0 0 60px rgba(248,151,61,0.2)",
                    }}
                  />
                )}
              </MotionDiv>
            ))}
          </MotionDiv>

          {/* Enhanced Scroll Indicator */}
          {animationsEnabled && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-12 border-2 border-[#6761af] rounded-full flex justify-center relative"
                style={{
                  boxShadow: "0 0 20px rgba(103,97,175,0.4), 0 0 40px rgba(248,151,61,0.2)",
                }}
              >
                <motion.div
                  animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-4 bg-gradient-to-b from-[#f8973d] to-[#6761af] rounded-full mt-2"
                />
                {/* Enhanced cosmic trail */}
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-4 bg-gradient-to-r from-[#6761af]/20 to-[#f8973d]/20 rounded-full blur-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </MotionDiv>
      </div>
    </section>
  )
}
