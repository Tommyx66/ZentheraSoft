"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#0c0c1d] border-t border-[#37356e] border-opacity-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/hero-tech-bg.png"
          alt="Tech background"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/zentherasoft-logo-horizontal-dark.png"
                alt="ZentheraSoft Logo"
                width={300}
                height={120}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-[#8c8493] mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-[#6761af] text-[#6761af] hover:bg-[#6761af] hover:text-white p-2 bg-transparent"
                asChild
              >
                <Link href="https://github.com/zentherasoft" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-[#6761af] text-[#6761af] hover:bg-[#6761af] hover:text-white p-2 bg-transparent"
                asChild
              >
                <Link href="https://linkedin.com/company/zentherasoft" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-[#f8973d] text-[#f8973d] hover:bg-[#f8973d] hover:text-white p-2 bg-transparent"
                asChild
              >
                <Link href="https://twitter.com/zentherasoft" target="_blank">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-[#f8973d] text-[#f8973d] hover:bg-[#f8973d] hover:text-white p-2 bg-transparent"
                asChild
              >
                <Link href="https://instagram.com/zentherasoft" target="_blank">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#dcdbdf] font-semibold text-lg mb-4 font-brand">
              {t("footer.services")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-[#8c8493] hover:text-[#6761af] transition-colors"
                >
                  {t("footerServices.reactNextjs")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#8c8493] hover:text-[#6761af] transition-colors"
                >
                  {t("footerServices.wordpress")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#8c8493] hover:text-[#f8973d] transition-colors"
                >
                  {t("footerServices.branding")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#8c8493] hover:text-[#f8973d] transition-colors"
                >
                  {t("footerServices.uxui")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-[#8c8493] hover:text-[#6761af] transition-colors"
                >
                  {t("footerServices.consulting")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#dcdbdf] font-semibold text-lg mb-4 font-brand">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#f8973d]" />
                <Link
                  href="mailto:contacto@zentherasoft.com"
                  className="text-[#8c8493] hover:text-[#f8973d] transition-colors"
                >
                  contacto@zentherasoft.com
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#f8973d]" />
                <div>
                  <Link
                    href="tel:+542239669093"
                    className="text-[#8c8493] hover:text-[#f8973d] transition-colors block"
                  >
                    +54 (223) 96690935
                  </Link>
                  <Link
                    href="tel:+5491130894694"
                    className="text-[#8c8493] hover:text-[#f8973d] transition-colors block"
                  >
                    +54 9 011 3089-4694
                  </Link>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#f8973d]" />
                <span className="text-[#8c8493]">Remoto - Worldwide</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-[#dcdbdf] font-medium mb-3 font-brand">
                {t("footer.hours")}
              </h4>
              <p className="text-[#8c8493] text-sm whitespace-pre-line">
                {t("footer.hoursDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#37356e] border-opacity-50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8c8493] text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ZentheraSoft. {t("footer.rights")}
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-[#8c8493] hover:text-[#6761af] text-sm transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="#"
                className="text-[#8c8493] hover:text-[#6761af] text-sm transition-colors"
              >
                {t("footer.terms")}
              </Link>
              <Link
                href="#"
                className="text-[#8c8493] hover:text-[#f8973d] text-sm transition-colors"
              >
                {t("footer.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
