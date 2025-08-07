"use client"

import { useState, useEffect, ReactNode } from "react"
import LoadingScreen from "@/components/ui/loading-screen"
import { AnimationToggle } from "@/components/ui/animation-controls"
import LanguageToggle from "@/components/ui/language-toggle"
import "@/lib/i18n"

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Precargar recursos críticos
    const preloadResources = async () => {
      const criticalImages = [
        "/images/zentherasoft-banner-dark.png",
        "/images/zentherasoft-logo-square-dark.png",
        "/images/zentherasoft-logo-horizontal-dark.png",
      ]

      const imagePromises = criticalImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = src
        })
      })

      try {
        await Promise.all(imagePromises)
        // Simular tiempo mínimo de carga para mostrar la animación
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (error) {
        console.warn("Some images failed to preload:", error)
      }
    }

    preloadResources()
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <>
      {children}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <LanguageToggle />
      </div>
      <AnimationToggle />
    </>
  )
}
