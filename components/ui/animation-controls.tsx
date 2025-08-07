"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Settings, Zap, ZapOff } from 'lucide-react'

interface AnimationContextType {
  animationsEnabled: boolean
  toggleAnimations: () => void
  prefersReducedMotion: boolean
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function useAnimations() {
  const context = useContext(AnimationContext)
  if (!context) {
    // Fallback seguro en caso de que el contexto no esté disponible
    return {
      animationsEnabled: false,
      toggleAnimations: () => {},
      prefersReducedMotion: true
    }
  }
  return context
}

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Detectar preferencia del sistema
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    
    // Si el usuario prefiere movimiento reducido, desactivar animaciones por defecto
    if (mediaQuery.matches) {
      setAnimationsEnabled(false)
    }

    // Cargar preferencia guardada
    const savedPreference = localStorage.getItem("animations-enabled")
    if (savedPreference !== null) {
      setAnimationsEnabled(JSON.parse(savedPreference))
    }

    // Escuchar cambios en la preferencia del sistema
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
      if (e.matches) {
        setAnimationsEnabled(false)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleAnimations = () => {
    const newValue = !animationsEnabled
    setAnimationsEnabled(newValue)
    if (isClient) {
      localStorage.setItem("animations-enabled", JSON.stringify(newValue))
    }
  }

  return (
    <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations, prefersReducedMotion }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function AnimationToggle() {
  const { animationsEnabled, toggleAnimations, prefersReducedMotion } = useAnimations()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 p-4 bg-[#37356e]/90 backdrop-blur-xl rounded-2xl border border-[#6761af]/30 shadow-2xl"
          >
            <div className="text-white text-sm mb-3 font-medium">
              Control de Animaciones
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={toggleAnimations}
                size="sm"
                className={`${
                  animationsEnabled
                    ? "bg-gradient-to-r from-[#6761af] to-[#f8973d] text-white"
                    : "bg-[#5d5771] text-[#dcdbdf] hover:bg-[#6761af]"
                } transition-all duration-300`}
              >
                {animationsEnabled ? (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Activadas
                  </>
                ) : (
                  <>
                    <ZapOff className="h-4 w-4 mr-2" />
                    Desactivadas
                  </>
                )}
              </Button>
            </div>
            {prefersReducedMotion && (
              <div className="text-xs text-[#dcdbdf] mt-2 opacity-80">
                Tu sistema prefiere movimiento reducido
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="bg-[#37356e]/90 hover:bg-[#6761af] text-white backdrop-blur-xl border border-[#6761af]/30 shadow-2xl transition-all duration-300"
      >
        <Settings className="h-5 w-5" />
      </Button>
    </div>
  )
}

// Hook para componentes que usan animaciones
export function useMotionProps(props: any = {}) {
  const { animationsEnabled } = useAnimations()
  
  if (!animationsEnabled) {
    return {}
  }
  
  return props
}
