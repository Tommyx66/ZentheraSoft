"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor ingresa un email válido"),
  phone: z.string().optional(),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarnos. Te responderemos pronto.",
        });
        reset();
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

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
  };

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-brand">
              ¿Listo para empezar tu{" "}
              <span className="text-transparent bg-gradient-to-r from-[#f8973d] to-[#6761af] bg-clip-text">
                proyecto?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-body-alt">
              Escribinos y vemos juntos cómo llevarlo adelante de forma clara,
              funcional y profesional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 font-brand">
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#f8973d]/20 rounded-lg">
                      <Mail className="h-6 w-6 text-[#f8973d]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
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
                      <p className="text-white font-semibold">Teléfono</p>
                      <a
                        href="tel:+1234567890"
                        className="text-white/80 hover:text-[#6761af] transition-colors"
                      >
                         +54 (223) 96690935 <br></br>
                         +54 9 2266 63-2085
                      </a>
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
                    Consulta Gratuita
                  </h4>
                  <p className="text-white/80 text-sm mb-4">
                    Agenda una consulta gratuita de 30 minutos para discutir tu
                    proyecto sin compromiso.
                  </p>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://wa.me/1234567890?text=Hola, me interesa agendar una consulta gratuita",
                        "_blank"
                      )
                    }
                    className="w-full bg-[#f8973d] hover:bg-[#e8863d] text-white font-semibold"
                  >
                    Agendar Consulta Gratuita
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6 font-brand">
                  Envíanos un Mensaje
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white font-medium">
                        Nombre *
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f8973d]"
                        placeholder="Tu nombre completo"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f8973d]"
                        placeholder="tu@email.com"
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
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6761af]"
                        placeholder=" +1 (234) 567890"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-white font-medium"
                      >
                        Asunto *
                      </Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6761af]"
                        placeholder="¿En qué podemos ayudarte?"
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
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f8973d] resize-none"
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#f8973d] to-[#6761af] hover:from-[#e8863d] hover:to-[#5a4f9e] text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
