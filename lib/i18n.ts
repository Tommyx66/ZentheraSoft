import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  es: {
    translation: {
      // Navigation
      nav: {
        home: "Inicio",
        services: "Servicios",
        about: "Nosotros",
        projects: "Proyectos",
        contact: "Contacto"
      },
      // Hero Section
      hero: {
        title: "Innovación Digital",
        subtitle: "Sin Límites!",
        description: "Transformamos ideas en experiencias digitales extraordinarias. Donde la tecnología se encuentra con la creatividad para crear el futuro.",
        cta: "Comenzar Proyecto",
        explore: "Explorar Proyectos",
        stats: {
          projects: "Proyectos Completados",
          specialists: "Especialistas Creativos",
          support: "Soporte Dedicado"
        }
      },
      // Services
      services: {
        title: "Nuestros Servicios",
        description: "Usamos tecnología actual y diseño funcional para crear soluciones digitales que se adapten a las necesidades de cada proyecto.",
        fullstack: {
          title: "Desarrollo Full-Stack",
          description: "Aplicaciones web completas con React, Next.js, Node.js y bases de datos modernas. Desde el frontend hasta el backend."
        },
        wordpress: {
          title: "Desarrollo WordPress",
          description: "Sitios web profesionales con WordPress, temas personalizados, plugins y optimización completa para SEO."
        },
        design: {
          title: "Diseño UX/UI & Branding",
          description: "Diseño de interfaces intuitivas, experiencias de usuario excepcionales e identidades visuales completas."
        },
        marketing: {
          title: "Marketing Digital & Ventas",
          description: "Estrategias de marketing digital, optimización de conversiones y sistemas de ventas automatizados."
        }
      },
      // About
      about: {
        title: "Los Arquitectos del Futuro Digital",
        description: "Somos un dúo dinámico que combina desarrollo técnico avanzado con estrategias de negocio innovadoras. Creamos soluciones digitales completas que no solo funcionan perfectamente, sino que también impulsan el crecimiento empresarial.",
        values: {
          code: {
            title: "Código de Élite",
            description: "Desarrollamos con las mejores prácticas, código limpio y arquitecturas escalables que perduran en el tiempo."
          },
          design: {
            title: "Diseño Visionario",
            description: "Creamos interfaces que no solo se ven increíbles, sino que generan conversiones y engagement real."
          },
          growth: {
            title: "Crecimiento Garantizado",
            description: "Cada proyecto está diseñado estratégicamente para impulsar el crecimiento y maximizar el ROI de nuestros clientes."
          }
        },
        // Team Members
        team: {
          tomas: {
            name: "Tomás Zarriello",
            role: "Full-Stack Developer & UX/UI Designer",
            description: "Desarrollador full-stack y diseñador UX/UI con experiencia en React, Next.js, Node.js y herramientas de diseño como Figma, Photoshop e Illustrator. Me especializo en crear aplicaciones web escalables con interfaces excepcionales.",
            skills: ["React", "Next.js", "TypeScript", "Node.js", "Figma", "Photoshop", "Illustrator", "UX/UI Design"],
            achievements: [
              "💻 Desarrollo full-stack completo",
              "🎨 Diseño UX/UI profesional",
              "⚡ Especialista en performance",
              "🚀 Proyectos web modernos"
            ]
          },
          elian: {
            name: "Elian Sandoval",
            role: "Backend Developer & Marketing Strategist",
            description: "Especialista en desarrollo backend con Java y Python, y estrategias de marketing digital. Me enfoco en crear sistemas robustos y escalables, además de impulsar el crecimiento de negocios a través del marketing y ventas digitales.",
            skills: ["Java", "Python", "Marketing Digital", "SEO/SEM", "Ventas", "Analytics", "Backend APIs", "Databases"],
            achievements: [
              "☕ Desarrollo backend robusto",
              "📈 Estrategias de marketing",
              "💰 Optimización de ventas",
              "📊 Análisis de datos"
            ]
          }
        },
        labels: {
          portfolio: "Portfolio",
          techTools: "Tecnologías & Herramientas",
          specialties: "Especialidades"
        }
      },
      // Works
      works: {
        title: "Nuestro Universo Creativo",
        description: "Te mostramos una selección de proyectos donde aplicamos lo que mejor sabemos hacer: diseño claro, desarrollo funcional y atención a los detalles.",
        cta: "¿Tienes un proyecto en mente? ¡Hagámoslo realidad juntos!",
        startProject: "Iniciar Proyecto",
        viewProject: "Ver Proyecto",
        code: "Código",
        disclaimer: "Los proyectos visualizados aquí son diseños conceptuales, prototipos de marca y soluciones desarrolladas como demostraciones de nuestras capacidades creativas y técnicas.",
        categories: {
          all: "Todos",
          reactNextjs: "React/Next.js",
          wordpress: "WordPress",
          branding: "Branding",
          uxui: "UX/UI",
          fullstack: "Full-Stack"
        },
        projects: {
          taskflow: {
            title: "TaskFlow - Gestión de Proyectos",
            description: "Aplicación completa de gestión de proyectos con autenticación, dashboard interactivo y colaboración en tiempo real."
          },
          ecoshop: {
            title: "EcoShop - E-commerce Sostenible",
            description: "Tienda online especializada en productos ecológicos con sistema de puntos de fidelidad y blog integrado."
          },
          financetracker: {
            title: "FinanceTracker - Dashboard Financiero",
            description: "Dashboard para seguimiento de finanzas personales con gráficos interactivos y análisis predictivo."
          },
          brandcraft: {
            title: "BrandCraft - Identidad Visual",
            description: "Desarrollo completo de identidad visual para startup tecnológica, incluyendo logo, paleta y aplicaciones."
          },
          learnhub: {
            title: "LearnHub - Plataforma Educativa",
            description: "Diseño UX/UI completo para plataforma de cursos online con enfoque en experiencia de aprendizaje."
          },
          restaurantpro: {
            title: "RestaurantPro - Sistema de Gestión",
            description: "Sistema completo de gestión para restaurantes con POS, inventario y análisis de ventas."
          }
        }
      },
      // Contact
      contact: {
        title: "¿Listo para empezar tu proyecto?",
        description: "Escribinos y vemos juntos cómo llevarlo adelante de forma clara, funcional y profesional.",
        info: "Información de Contacto",
        form: "Envíanos un Mensaje",
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado!",
        successDesc: "Gracias por contactarnos. Te responderemos pronto.",
        error: "Error",
        errorDesc: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.",
        consultation: "Consulta Gratuita",
        consultationDesc: "Agenda una consulta gratuita de 30 minutos para discutir tu proyecto sin compromiso.",
        schedule: "Agendar Consulta Gratuita"
      },
      // Footer
      footer: {
        description: "Especialistas en desarrollo web y diseño digital. Creamos soluciones que impulsan tu negocio hacia el éxito.",
        services: "Servicios",
        contact: "Contacto",
        hours: "Horarios de Atención",
        hoursDesc: "Lunes a Viernes: 9:00 - 18:00\nSábados: 10:00 - 14:00",
        rights: "Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        cookies: "Cookies"
      },
      // Loading
      loading: {
        title: "Cargando Experiencia"
      },
      // Animations
      animations: {
        title: "Control de Animaciones",
        enabled: "Activadas",
        disabled: "Desactivadas",
        systemPreference: "Tu sistema prefiere movimiento reducido"
      },
      // Contact form placeholders
      placeholders: {
        name: "Tu nombre completo",
        email: "tu@email.com",
        phone: "+1 (234) 567890",
        subject: "¿En qué podemos ayudarte?",
        message: "Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
      },
      // Footer services
      footerServices: {
        reactNextjs: "Desarrollo React/Next.js",
        wordpress: "Desarrollo WordPress",
        branding: "Branding Visual",
        uxui: "Diseño UX/UI",
        consulting: "Consultoría Digital"
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },
      // Hero Section
      hero: {
        title: "Digital Innovation",
        subtitle: "Without Limits!",
        description: "We transform ideas into extraordinary digital experiences. Where technology meets creativity to create the future.",
        cta: "Start Project",
        explore: "Explore Projects",
        stats: {
          projects: "Completed Projects",
          specialists: "Creative Specialists",
          support: "Dedicated Support"
        }
      },
      // Services
      services: {
        title: "Our Services",
        description: "We use current technology and functional design to create digital solutions that adapt to the needs of each project.",
        fullstack: {
          title: "Full-Stack Development",
          description: "Complete web applications with React, Next.js, Node.js and modern databases. From frontend to backend."
        },
        wordpress: {
          title: "WordPress Development",
          description: "Professional websites with WordPress, custom themes, plugins and complete SEO optimization."
        },
        design: {
          title: "UX/UI Design & Branding",
          description: "Intuitive interface design, exceptional user experiences and complete visual identities."
        },
        marketing: {
          title: "Digital Marketing & Sales",
          description: "Digital marketing strategies, conversion optimization and automated sales systems."
        }
      },
      // About
      about: {
        title: "The Architects of the Digital Future",
        description: "We are a dynamic duo that combines advanced technical development with innovative business strategies. We create complete digital solutions that not only work perfectly, but also drive business growth.",
        values: {
          code: {
            title: "Elite Code",
            description: "We develop with best practices, clean code and scalable architectures that stand the test of time."
          },
          design: {
            title: "Visionary Design",
            description: "We create interfaces that not only look incredible, but generate real conversions and engagement."
          },
          growth: {
            title: "Guaranteed Growth",
            description: "Every project is strategically designed to drive growth and maximize ROI for our clients."
          }
        },
        // Team Members
        team: {
          tomas: {
            name: "Tomás Zarriello",
            role: "Full-Stack Developer & UX/UI Designer",
            description: "Full-stack developer and UX/UI designer with experience in React, Next.js, Node.js and design tools like Figma, Photoshop and Illustrator. I specialize in creating scalable web applications with exceptional interfaces.",
            skills: ["React", "Next.js", "TypeScript", "Node.js", "Figma", "Photoshop", "Illustrator", "UX/UI Design"],
            achievements: [
              "💻 Complete full-stack development",
              "🎨 Professional UX/UI design",
              "⚡ Performance specialist",
              "🚀 Modern web projects"
            ]
          },
          elian: {
            name: "Elian Sandoval",
            role: "Backend Developer & Marketing Strategist",
            description: "Backend development specialist with Java and Python, and digital marketing strategies. I focus on creating robust and scalable systems, as well as driving business growth through digital marketing and sales.",
            skills: ["Java", "Python", "Digital Marketing", "SEO/SEM", "Sales", "Analytics", "Backend APIs", "Databases"],
            achievements: [
              "☕ Robust backend development",
              "📈 Marketing strategies",
              "💰 Sales optimization",
              "📊 Data analysis"
            ]
          }
        },
        labels: {
          portfolio: "Portfolio",
          techTools: "Technologies & Tools",
          specialties: "Specialties"
        }
      },
      // Works
      works: {
        title: "Our Creative Universe",
        description: "We show you a selection of projects where we apply what we do best: clear design, functional development and attention to detail.",
        cta: "Do you have a project in mind? Let's make it happen together!",
        startProject: "Start Project",
        viewProject: "View Project",
        code: "Code",
        disclaimer: "The projects displayed here are conceptual designs, brand prototypes and solutions developed as demonstrations of our creative and technical capabilities.",
        categories: {
          all: "All",
          reactNextjs: "React/Next.js",
          wordpress: "WordPress",
          branding: "Branding",
          uxui: "UX/UI",
          fullstack: "Full-Stack"
        },
        projects: {
          taskflow: {
            title: "TaskFlow - Project Management",
            description: "Complete project management application with authentication, interactive dashboard and real-time collaboration."
          },
          ecoshop: {
            title: "EcoShop - Sustainable E-commerce",
            description: "Online store specialized in ecological products with loyalty points system and integrated blog."
          },
          financetracker: {
            title: "FinanceTracker - Financial Dashboard",
            description: "Dashboard for personal finance tracking with interactive charts and predictive analysis."
          },
          brandcraft: {
            title: "BrandCraft - Visual Identity",
            description: "Complete visual identity development for tech startup, including logo, palette and applications."
          },
          learnhub: {
            title: "LearnHub - Educational Platform",
            description: "Complete UX/UI design for online course platform with focus on learning experience."
          },
          restaurantpro: {
            title: "RestaurantPro - Management System",
            description: "Complete management system for restaurants with POS, inventory and sales analysis."
          }
        }
      },
      // Contact
      contact: {
        title: "Ready to start your project?",
        description: "Write to us and let's see together how to carry it out in a clear, functional and professional way.",
        info: "Contact Information",
        form: "Send us a Message",
        name: "Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent!",
        successDesc: "Thank you for contacting us. We will respond soon.",
        error: "Error",
        errorDesc: "There was a problem sending your message. Please try again.",
        consultation: "Free Consultation",
        consultationDesc: "Schedule a free 30-minute consultation to discuss your project without commitment.",
        schedule: "Schedule Free Consultation"
      },
      // Footer
      footer: {
        description: "Specialists in web development and digital design. We create solutions that drive your business to success.",
        services: "Services",
        contact: "Contact",
        hours: "Business Hours",
        hoursDesc: "Monday to Friday: 9:00 - 18:00\nSaturdays: 10:00 - 14:00",
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookies"
      },
      // Loading
      loading: {
        title: "Loading Experience"
      },
      // Animations
      animations: {
        title: "Animation Controls",
        enabled: "Enabled",
        disabled: "Disabled",
        systemPreference: "Your system prefers reduced motion"
      },
      // Contact form placeholders
      placeholders: {
        name: "Your full name",
        email: "your@email.com",
        phone: "+1 (234) 567890",
        subject: "How can we help you?",
        message: "Tell us about your project, goals and any relevant details..."
      },
      // Footer services
      footerServices: {
        reactNextjs: "React/Next.js Development",
        wordpress: "WordPress Development",
        branding: "Visual Branding",
        uxui: "UX/UI Design",
        consulting: "Digital Consulting"
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  })

export default i18n
