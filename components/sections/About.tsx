"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, ExternalLink, Code, Palette, TrendingUp } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useAnimations, useMotionProps } from "@/components/ui/animation-controls"

export default function About() {
  const { t } = useTranslation()
  const { animationsEnabled } = useAnimations()

  const teamMembers = [
    {
      name: t("about.team.tomas.name"),
      role: t("about.team.tomas.role"),
      description: t("about.team.tomas.description"),
      image: "/images/tomas-zarriello.webp",
      portfolio: "https://tomas-zarriello-portfolio.vercel.app/",
      github: "https://github.com/Tommyx66",
      linkedin: "https://linkedin.com/in/tomas-zarriello",
      skills: t("about.team.tomas.skills", { returnObjects: true }),
      achievements: t("about.team.tomas.achievements", { returnObjects: true }),
    },
    {
      name: t("about.team.elian.name"),
      role: t("about.team.elian.role"),
      description: t("about.team.elian.description"),
      image: "/images/elian-sandoval.jpeg",
      portfolio: "#", // Pendiente
      github: "https://github.com/LyonyaD",
      linkedin: "https://www.linkedin.com/in/elian-antonio-sandoval/",
      skills: t("about.team.elian.skills", { returnObjects: true }),
      achievements: t("about.team.elian.achievements", { returnObjects: true }),
    },
  ]

  const MotionDiv = animationsEnabled ? motion.div : 'div'

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#0c0c1d] via-[#1a0b2e] to-[#0c0c1d] relative overflow-hidden"
    >
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated cosmic dust */}
        {animationsEnabled && [...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#6761af] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
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
            className="absolute top-20 right-20 w-[700px] h-[700px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(248,151,61,0.6) 0%, rgba(248,151,61,0.2) 40%, transparent 70%)",
              filter: "blur(100px)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 25,
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
            {t("about.title")}
          </MotionDiv>
          <MotionDiv
            {...useMotionProps({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 }
            })}
            className="text-xl text-[#dcdbdf] max-w-4xl mx-auto leading-relaxed"
          >
            {t("about.description")}
          </MotionDiv>
        </MotionDiv>

        {/* Enhanced team members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <MotionDiv
              key={member.name}
              {...useMotionProps({
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: index * 0.3 },
                whileHover: { scale: 1.02 }
              })}
            >
              <Card className="bg-gradient-to-br from-[#37356e]/60 to-[#1a0b2e]/60 border-[#6761af]/30 hover:border-[#f8973d]/60 transition-all duration-500 overflow-hidden backdrop-blur-sm group relative h-full">
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

                <CardContent className="p-8 relative z-10">
                  {/* Enhanced profile section */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                    <MotionDiv
                      {...useMotionProps({ whileHover: { scale: 1.05 } })}
                      className="relative"
                    >
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#f8973d]/50 relative">
                        <Image
                          src={
                            member.image ||
                            "/placeholder.svg?height=128&width=128&query=developer+portrait"
                           || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                      {/* Enhanced glow effect */}
                      {animationsEnabled && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#6761af]/30 to-[#f8973d]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />
                      )}
                    </MotionDiv>
                    <div className="text-center md:text-left flex-1">
                      <MotionDiv
                        className="text-2xl font-bold text-white mb-2 font-brand"
                        {...useMotionProps({ whileHover: { scale: 1.05 } })}
                      >
                        {member.name}
                      </MotionDiv>
                      <p className="text-[#f8973d] font-semibold mb-4 text-lg">
                        {member.role}
                      </p>
                      <p className="text-[#dcdbdf] leading-relaxed mb-6">
                        {member.description}
                      </p>
                      {/* Enhanced social links */}
                      <div className="flex justify-center md:justify-start gap-4">
                        <MotionDiv
                          {...useMotionProps({
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.9 }
                          })}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#6761af] text-[#6761af] hover:bg-[#6761af] hover:text-white bg-transparent transition-all duration-300"
                            asChild
                          >
                            <Link href={member.portfolio} target="_blank">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              {t("about.labels.portfolio")}
                            </Link>
                          </Button>
                        </MotionDiv>
                        <MotionDiv
                          {...useMotionProps({
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.9 }
                          })}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#f8973d] text-[#f8973d] hover:bg-[#f8973d] hover:text-white bg-transparent p-2 transition-all duration-300"
                            asChild
                          >
                            <Link href={member.github} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </MotionDiv>
                        <MotionDiv
                          {...useMotionProps({
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.9 }
                          })}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#6761af] text-[#6761af] hover:bg-[#6761af] hover:text-white bg-transparent p-2 transition-all duration-300"
                            asChild
                          >
                            <Link href={member.linkedin} target="_blank">
                              <Linkedin className="h-4 w-4" />
                            </Link>
                          </Button>
                        </MotionDiv>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced skills */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4 font-brand text-lg">
                      {t("about.labels.techTools")}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {member.skills.map((skill, skillIndex) => (
                        <MotionDiv
                          key={skill}
                          {...useMotionProps({
                            initial: { opacity: 0, scale: 0 },
                            whileInView: { opacity: 1, scale: 1 },
                            transition: { delay: skillIndex * 0.1 },
                            whileHover: { scale: 1.1, y: -2 }
                          })}
                          className="px-4 py-2 bg-gradient-to-r from-[#6761af]/20 to-[#f8973d]/20 text-[#dcdbdf] text-sm rounded-full border border-[#6761af]/30 hover:border-[#f8973d]/50 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </MotionDiv>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-4 font-brand text-lg">
                      {t("about.labels.specialties")}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {member.achievements.map((achievement, achIndex) => (
                        <MotionDiv
                          key={achIndex}
                          {...useMotionProps({
                            initial: { opacity: 0, x: -20 },
                            whileInView: { opacity: 1, x: 0 },
                            transition: { delay: achIndex * 0.1 },
                            whileHover: { scale: 1.05, x: 5 }
                          })}
                          className="text-[#dcdbdf] text-sm flex items-center gap-3 p-2 rounded-lg hover:bg-[#6761af]/10 transition-all duration-300"
                        >
                          {achievement}
                        </MotionDiv>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* Enhanced company values */}
        <MotionDiv
          {...useMotionProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 }
          })}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Code,
                title: t("about.values.code.title"),
                description: t("about.values.code.description"),
              },
              {
                icon: Palette,
                title: t("about.values.design.title"),
                description: t("about.values.design.description"),
              },
              {
                icon: TrendingUp,
                title: t("about.values.growth.title"),
                description: t("about.values.growth.description"),
              },
            ].map((value, index) => (
              <MotionDiv
                key={value.title}
                {...useMotionProps({
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: index * 0.2 },
                  whileHover: { scale: 1.05, y: -10 }
                })}
                className="text-center group relative"
              >
                <MotionDiv
                  className="p-6 bg-gradient-to-br from-[#6761af]/20 to-[#f8973d]/20 rounded-2xl w-fit mx-auto mb-6 border border-[#6761af]/30 group-hover:border-[#f8973d]/50 transition-all duration-300 relative"
                  {...useMotionProps({
                    whileHover: {
                      boxShadow:
                        "0 10px 40px rgba(103,97,175,0.3), 0 0 60px rgba(248,151,61,0.2)",
                    }
                  })}
                >
                  <value.icon className="h-10 w-10 text-[#f8973d]" />
                  {/* Cosmic particles around icons */}
                  {animationsEnabled && [...Array(6)].map((_, i) => (
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
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </MotionDiv>
                <h3 className="text-white font-bold text-xl mb-4 font-brand group-hover:text-[#f8973d] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-[#dcdbdf] leading-relaxed">
                  {value.description}
                </p>
              </MotionDiv>
            ))}
          </div>

          {/* Enhanced ZentheraSoft Logo */}
          <MotionDiv
            {...useMotionProps({
              initial: { opacity: 0, scale: 2.9 },
              whileInView: { opacity: 0.9, scale: 3 },
              transition: { duration: 0.8, delay: 0.5 },
              whileHover: { scale: 3.1 }
            })}
            className="mt-28 w-full"
          >
            <div className="relative">
              <Image
                src="/images/zentherasoft-banner-medium.png"
                alt="ZentheraSoft Logo"
                width={1200}
                height={800}
                className="h-24 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              {/* Logo glow effect */}
              {animationsEnabled && (
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#6761af]/20 to-[#f8973d]/20 rounded-xl blur-xl -z-10"
                />
              )}
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  )
}
