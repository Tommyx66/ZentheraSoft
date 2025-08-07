"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, Sparkles, Zap } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useAnimations, useMotionProps } from "@/components/ui/animation-controls"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { t } = useTranslation()
  const { animationsEnabled } = useAnimations()

  const navigation = [
    { name: t("nav.home"), href: "#hero", icon: "🏠" },
    { name: t("nav.services"), href: "#services", icon: "⚡" },
    { name: t("nav.about"), href: "#about", icon: "👥" },
    { name: t("nav.projects"), href: "#works", icon: "🚀" },
    { name: t("nav.contact"), href: "#contact", icon: "📡" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Detect active section
      const sections = ["hero", "services", "about", "works", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/542239669093?text=Hola, me interesa conocer más sobre sus servicios de desarrollo web",
      "_blank",
    )
  }

  const MotionDiv = animationsEnabled ? motion.div : 'div'
  const MotionButton = animationsEnabled ? motion.button : 'button'

  return (
    <MotionDiv
      {...useMotionProps({
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
      })}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#0c0c1d]/90 backdrop-blur-xl border-b border-[#6761af]/30 shadow-2xl" : "bg-transparent"
      }`}
    >
      {/* Cosmic particles in navbar */}
      {animationsEnabled && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#f8973d] rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <nav className="container mx-auto px-4 py-4 relative z-10" role="navigation" aria-label="Navegación principal">
        <div className="flex items-center justify-between">
          {/* Logo with cosmic glow */}
          <MotionDiv 
            {...useMotionProps({ 
              whileHover: { scale: 1.05 }, 
              whileTap: { scale: 0.95 } 
            })}
          >
            <Link href="#hero" className="flex-shrink-0 relative" onClick={() => handleNavClick("#hero")}>
              <div className="relative">
                <Image
                  src="/images/zentherasoft-logo-square-dark.png"
                  alt="ZentheraSoft - Desarrollo Web Profesional"
                  width={50}
                  height={50}
                  className="h-12 w-12 relative z-10"
                  priority
                />
                {/* Cosmic glow effect */}
                {animationsEnabled && (
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-[#6761af]/40 to-[#f8973d]/40 rounded-full blur-lg -z-10"
                  />
                )}
              </div>
            </Link>
          </MotionDiv>

          {/* Desktop Navigation with cosmic effects */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <MotionDiv
                key={item.name}
                {...useMotionProps({
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: index * 0.1, duration: 0.5 }
                })}
              >
                <MotionButton
                  onClick={() => handleNavClick(item.href)}
                  {...useMotionProps({
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 }
                  })}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                    activeSection === item.href.slice(1)
                      ? "text-white bg-gradient-to-r from-[#6761af]/20 to-[#f8973d]/20 border border-[#f8973d]/50"
                      : "text-[#dcdbdf] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    {item.name}
                  </span>
                  {/* Cosmic hover effect */}
                  {animationsEnabled && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#6761af]/10 to-[#f8973d]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{
                        boxShadow: "0 0 20px rgba(103,97,175,0.3), 0 0 40px rgba(248,151,61,0.2)",
                      }}
                    />
                  )}
                  {/* Active indicator */}
                  {activeSection === item.href.slice(1) && animationsEnabled && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#f8973d] rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </MotionButton>
              </MotionDiv>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <MotionDiv 
              {...useMotionProps({ 
                whileHover: { scale: 1.05 }, 
                whileTap: { scale: 0.95 } 
              })}
            >
              <Button
                onClick={handleWhatsAppClick}
                className="relative bg-gradient-to-r from-[#f8973d] to-[#e8863d] hover:from-[#e8863d] hover:to-[#d87529] text-white font-semibold px-6 py-2 transition-all duration-300 overflow-hidden group"
                style={{
                  boxShadow: "0 4px 15px rgba(248,151,61,0.3), 0 0 20px rgba(248,151,61,0.2)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <Sparkles className="h-3 w-3" />
                  Contactar
                </span>
                {/* Animated background */}
                {animationsEnabled && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6761af] to-[#f8973d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </Button>
            </MotionDiv>
          </div>

          {/* Enhanced Mobile menu button */}
          <MotionButton
            onClick={() => setIsOpen(!isOpen)}
            {...useMotionProps({
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.9 }
            })}
            className="md:hidden p-2 text-[#dcdbdf] hover:text-[#f8973d] transition-colors relative"
            aria-label="Abrir menú de navegación"
          >
            <MotionDiv 
              {...useMotionProps({
                animate: { rotate: isOpen ? 180 : 0 }, 
                transition: { duration: 0.3 }
              })}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </MotionDiv>
            {/* Cosmic glow on mobile button */}
            {animationsEnabled && (
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-[#f8973d]/20 rounded-full blur-md -z-10"
              />
            )}
          </MotionButton>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <MotionDiv
              {...useMotionProps({
                initial: { opacity: 0, height: 0, y: -20 },
                animate: { opacity: 1, height: "auto", y: 0 },
                exit: { opacity: 0, height: 0, y: -20 },
                transition: { duration: 0.4, ease: "easeOut" }
              })}
              className="md:hidden mt-4 bg-[#37356e]/95 backdrop-blur-xl rounded-2xl border border-[#6761af]/30 overflow-hidden"
              style={{
                boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(103,97,175,0.2)",
              }}
            >
              <div className="px-6 py-8 space-y-4 relative">
                {/* Mobile cosmic particles */}
                {animationsEnabled && [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#f8973d] rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
                
                {navigation.map((item, index) => (
                  <MotionButton
                    key={item.name}
                    {...useMotionProps({
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: index * 0.1 }
                    })}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-[#dcdbdf] hover:text-[#f8973d] transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-[#6761af]/10 group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      {item.name}
                      <Zap className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </span>
                  </MotionButton>
                ))}
                
                <MotionDiv
                  {...useMotionProps({
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5 }
                  })}
                  className="pt-4 border-t border-[#6761af]/30"
                >
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-[#f8973d] to-[#e8863d] hover:from-[#e8863d] hover:to-[#d87529] text-white font-semibold py-3 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <Sparkles className="h-3 w-3" />
                      Contactar por WhatsApp
                    </span>
                    {animationsEnabled && (
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-[#6962b2] to-[#f8973d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </Button>
                </MotionDiv>
              </div> 
            </MotionDiv>
          )}
        </AnimatePresence>
      </nav>
    </MotionDiv>
  )
}
