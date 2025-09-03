"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslation } from "react-i18next"
import { useAnimations, useMotionProps } from "@/components/ui/animation-controls"
import Recaptcha, { type RecaptchaRef } from "@/components/ui/recaptcha"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor ingresa un email válido"),
  phone: z.string().optional(),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type FormData = z.infer<typeof formSchema>

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const { toast } = useToast()
  const { t } = useTranslation()
  const { animationsEnabled } = useAnimations()
  const recaptchaRef = useRef<RecaptchaRef>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Verificar reCAPTCHA si está disponible
      let finalToken = recaptchaToken
      
      if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        if (!finalToken) {
          toast({
            title: t("contact.error"),
            description: "Por favor completa la verificación reCAPTCHA",
            variant: "destructive",
          })
          setIsSubmitting(false)
          return
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken: finalToken,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: t("contact.success"),
          description: t("contact.successDesc"),
        })
        reset()
        setRecaptchaToken(null)
        if (recaptchaRef.current) {
          recaptchaRef.current.resetRecaptcha()
        }
      } else {
        throw new Error(result.error || "Error al enviar el mensaje")
      }
    } catch (error: any) {
      console.error("Error enviando formulario:", error)
      toast({
        title: t("contact.error"),
        description: error.message || t("contact.errorDesc"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const MotionDiv = animationsEnabled ? motion.div : 'div'

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#0c0c1d] to-[#37356e] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-[#f8973d] rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-[#6761af] rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          {...useMotionProps({
            variants: containerVariants,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true }
          })}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <MotionDiv 
            {...useMotionProps({ variants: itemVariants })} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-brand">
              {t("contact.title")}
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-body-alt">
              {t("contact.description")}
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <MotionDiv 
              {...useMotionProps({ variants: itemVariants })} 
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 font-brand">
                  {t("contact.info")}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#f8973d]/20 rounded-lg">
                      <Mail className="h-6 w-6 text-[#f8973d]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{t("contact.email")}</p>
                      <a
                        href="mailto:contacto@zentherasoft.com"
                        className="text-white/80 hover:text-[#f8973d] transition-colors"
                      >
                        contacto@zentherasoft.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#6761af]/20 rounded-lg">
                      <Phone className="h-6 w-6 text-[#6761af]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{t("contact.phone")}</p>
                      <div className="text-white/80">
                        <a href="tel:+542239669093" className="hover:text-[#6761af] transition-colors block">
                          +54 (223) 96690935
                        </a>
                        <a href="tel:+5491130894694" className="hover:text-[#6761af] transition-colors block">
                          +54 9 011 3089-4694 
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#f8973d]/20 rounded-lg">
                      <MapPin className="h-6 w-6 text-[#f8973d]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Ubicación</p>
                      <p className="text-white/80">Remoto - Worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#f8973d]/10 to-[#6761af]/10 rounded-xl border border-[#f8973d]/20">
                  <h4 className="text-white font-bold mb-3 font-brand">
                    {t("contact.consultation")}
                  </h4>
                  <p className="text-white/80 text-sm mb-4">
                    {t("contact.consultationDesc")}
                  </p>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://wa.me/5491130894695?text=Hola, me gustaria obtener informacion sobre sus servicios, por favor",
                        "_blank" // Actualizacion de numero empresarial, y texto.
                      )
                    }
                    className="w-full bg-[#f8973d] hover:bg-[#e8863d] text-white font-semibold"
                  >
                    {t("contact.schedule")}
                  </Button>
                </div>
              </div>
            </MotionDiv>

            {/* Contact Form */}
            <MotionDiv {...useMotionProps({ variants: itemVariants })}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6 font-brand">
                  {t("contact.form")}
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white font-medium">
                        {t("contact.name")} *
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f8973d]"
                        placeholder={t("placeholders.name")}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white font-medium">
                        {t("contact.email")} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f8973d]"
                        placeholder={t("placeholders.email")}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-white font-medium">
                        {t("contact.phone")}
                      </Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6761af]"
                        placeholder={t("placeholders.phone")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-white font-medium">
                        {t("contact.subject")} *
                      </Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6761af]"
                        placeholder={t("placeholders.subject")}
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white font-medium">
                      {t("contact.message")} *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f8973d] resize-none"
                      placeholder={t("placeholders.message")}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* reCAPTCHA - Solo mostrar si hay site key */}
                  {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                    <div className="py-4">
                      <Recaptcha
                        ref={recaptchaRef}
                        siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        theme="dark"
                        size="normal"
                        onChange={handleRecaptchaChange}
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !recaptchaToken)}
                    className="w-full bg-gradient-to-r from-[#f8973d] to-[#6761af] hover:from-[#e8863d] hover:to-[#5a4f9e] text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t("contact.send")}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

export default ContactForm
