"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Languages, Globe } from 'lucide-react'
import { useTranslation } from "react-i18next"
import { useAnimations } from "./animation-controls"

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const { animationsEnabled } = useAnimations()
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  if (!isClient) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="border-[#6761af]/30 text-[#dcdbdf] hover:bg-[#6761af]/20 hover:text-white bg-transparent backdrop-blur-sm transition-all duration-300"
      >
        <Globe className="h-4 w-4 mr-1 sm:mr-2" />
        <span className="text-lg mr-1">🇪🇸</span>
        <span className="hidden xs:inline">ES</span>
      </Button>
    )
  }

  const MotionDiv = animationsEnabled ? motion.div : 'div'
  const MotionButton = animationsEnabled ? motion.button : 'button'

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="sm"
        className="border-[#6761af]/30 text-[#dcdbdf] hover:bg-[#6761af]/20 hover:text-white bg-transparent backdrop-blur-sm transition-all duration-300 min-w-[60px] sm:min-w-[80px]"
      >
        <Globe className="h-4 w-4 mr-1 sm:mr-2" />
        <span className="text-lg mr-1">{currentLanguage.flag}</span>
        <span className="hidden xs:inline text-xs sm:text-sm">{currentLanguage.code.toUpperCase()}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            {...(animationsEnabled && {
              initial: { opacity: 0, y: -10, scale: 0.95 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: -10, scale: 0.95 },
              transition: { duration: 0.2 }
            })}
            className="absolute top-full mt-2 right-0 bg-[#37356e]/95 backdrop-blur-xl rounded-lg border border-[#6761af]/30 shadow-2xl overflow-hidden z-50 min-w-[140px] sm:min-w-[160px]"
          >
            {languages.map((lang) => (
              <MotionButton
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                {...(animationsEnabled && {
                  whileHover: { backgroundColor: "rgba(103, 97, 175, 0.2)" },
                  whileTap: { scale: 0.98 }
                })}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left flex items-center gap-2 sm:gap-3 transition-colors duration-200 text-sm sm:text-base ${
                  i18n.language === lang.code
                    ? 'bg-[#6761af]/20 text-[#f8973d]'
                    : 'text-[#dcdbdf] hover:bg-[#6761af]/10 hover:text-white'
                }`}
              >
                <span className="text-base sm:text-lg">{lang.flag}</span>
                <span className="font-medium truncate">{lang.name}</span>
                {i18n.language === lang.code && (
                  <div className="ml-auto w-2 h-2 bg-[#f8973d] rounded-full flex-shrink-0" />
                )}
              </MotionButton>
            ))}
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  )
}
