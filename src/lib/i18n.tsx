"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Locale } from "@/data/types"

const translations = {
  es: {
    hero: {
      title: "Líder Técnico y Desarrollador de Software",
      description:
        "Construyo, mantengo y modernizo software de negocio crítico, combinando Oracle PL/SQL, experiencia en sistemas legacy y desarrollo Full Stack moderno.",
      contact: "Contactar",
      projects: "Ver Proyectos",
      resume: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Análisis, desarrollo y liderazgo técnico sobre sistemas reales",
      paragraphs: [
        "Soy desarrollador y analista técnico, con base en Córdoba, Argentina. Desde 2023 trabajo en Recursos Informáticos, donde combino desarrollo, análisis técnico, liderazgo y modernización sobre aplicaciones empresariales.",
        "Estoy acostumbrado a trabajar con reglas de negocio complejas y con sistemas de producción que acumulan décadas de lógica. Me muevo entre base de datos, backend, frontend, relevamiento de requerimientos, testing y soporte, y disfruto entender cómo funciona un sistema antes de proponer cambios.",
        "En paralelo, construyo productos modernos con React, Next.js, Node.js y Firebase. Me interesa seguir creciendo en roles de backend, Full Stack, Oracle, modernización de sistemas o liderazgo técnico.",
      ],
      quickFacts: {
        title: "Datos rápidos",
        role: { label: "Rol actual", value: "Líder Técnico / Analista Programador" },
        company: { label: "Empresa", value: "Recursos Informáticos" },
        location: { label: "Ubicación", value: "Córdoba, Argentina" },
        since: { label: "En el rol desde", value: "2023" },
      },
      downloadCV: "Descargar CV",
    },
    strengths: {
      title: "Fortalezas Clave",
      subtitle: "Lo que aporto más allá de una lista de tecnologías",
    },
    experience: {
      title: "Experiencia Profesional",
      description: "Mi trayectoria técnica y de liderazgo en sistemas de negocio críticos.",
      stackLabel: "Stack principal",
    },
    projects: {
      title: "Proyectos Destacados",
      description: "Productos que diseñé y construí de punta a punta, fuera de mi trabajo en Recursos Informáticos.",
      viewDetails: "Ver detalle",
      hideDetails: "Ocultar detalle",
      demo: "Demo en Vivo",
      code: "Ver Código",
      problem: "Problema",
      solution: "Solución",
      users: "Usuarios",
      role: "Mi rol",
      features: "Funcionalidades principales",
      architecture: "Arquitectura",
      challenges: "Desafíos",
      value: "Valor entregado",
      technologies: "Tecnologías",
      screenshotPending: "Captura pendiente de agregar",
      contentPending: "Contenido a confirmar",
    },
    skills: {
      title: "Expertise Técnico",
      description: "Tecnologías organizadas según mi perfil profesional real, no una lista plana de logos.",
      capabilities: "Práctica profesional",
    },
    methodology: {
      title: "Cómo Trabajo",
      description: "El proceso que sigo para entender un problema y resolverlo sin romper lo que ya funciona.",
    },
    education: {
      title: "Certificaciones y Formación Complementaria",
      description: "Formación complementaria a mis tres años de experiencia profesional en Recursos Informáticos.",
    },
    contact: {
      title: "Contáctame",
      description: "¿Tenés una oportunidad, un proyecto o una consulta técnica? Escribime.",
      form: {
        title: "Enviar un Mensaje",
        description: "Completá el formulario y te respondo a la brevedad.",
        name: "Nombre",
        email: "Correo Electrónico",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
      },
      info: {
        title: "Información de Contacto",
        description: "También podés contactarme directamente por estos canales.",
        email: "Correo Electrónico",
        location: "Ubicación",
      },
      success: {
        title: "¡Mensaje enviado!",
        message: "Gracias por escribirme. Te voy a responder a la brevedad.",
      },
      error: {
        title: "Error",
        message: "Hubo un error al enviar tu mensaje. Probá de nuevo o escribime directamente por email.",
      },
    },
    footer: {
      about: {
        title: "Acerca de",
        description:
          "Desarrollador y analista técnico enfocado en sistemas de negocio, modernización de aplicaciones legacy y desarrollo Full Stack.",
      },
      links: { title: "Enlaces Rápidos" },
      social: { title: "Redes" },
      copyright: "Todos los derechos reservados.",
    },
  },
  en: {
    hero: {
      title: "Technical Lead & Software Developer",
      description:
        "I build, maintain, and modernize business-critical software, combining Oracle PL/SQL, legacy-system expertise, and modern Full Stack development.",
      contact: "Contact Me",
      projects: "View Projects",
      resume: "Download Résumé",
    },
    about: {
      title: "About Me",
      subtitle: "Analysis, development, and technical leadership on real systems",
      paragraphs: [
        "I'm a developer and technical analyst based in Córdoba, Argentina. Since 2023 I've worked at Recursos Informáticos, where I combine development, technical analysis, leadership, and modernization on enterprise applications.",
        "I'm used to working with complex business rules and production systems that have accumulated decades of logic. I move between database, backend, frontend, requirements gathering, testing, and support, and I enjoy understanding how a system works before proposing changes.",
        "In parallel, I build modern products with React, Next.js, Node.js, and Firebase. I'm interested in continuing to grow in backend, Full Stack, Oracle, system modernization, or technical leadership roles.",
      ],
      quickFacts: {
        title: "Quick facts",
        role: { label: "Current role", value: "Technical Lead / Analyst Programmer" },
        company: { label: "Company", value: "Recursos Informáticos" },
        location: { label: "Location", value: "Córdoba, Argentina" },
        since: { label: "In this role since", value: "2023" },
      },
      downloadCV: "Download Résumé",
    },
    strengths: {
      title: "Key Strengths",
      subtitle: "What I bring beyond a list of technologies",
    },
    experience: {
      title: "Professional Experience",
      description: "My technical and leadership track record on business-critical systems.",
      stackLabel: "Core stack",
    },
    projects: {
      title: "Featured Projects",
      description: "Products I designed and built end to end, outside of my work at Recursos Informáticos.",
      viewDetails: "View details",
      hideDetails: "Hide details",
      demo: "Live Demo",
      code: "View Code",
      problem: "Problem",
      solution: "Solution",
      users: "Users",
      role: "My role",
      features: "Main features",
      architecture: "Architecture",
      challenges: "Challenges",
      value: "Value delivered",
      technologies: "Technologies",
      screenshotPending: "Screenshot still needed",
      contentPending: "Content to confirm",
    },
    skills: {
      title: "Technical Expertise",
      description: "Technologies organized around my real professional profile, not a flat wall of logos.",
      capabilities: "Professional practice",
    },
    methodology: {
      title: "How I Work",
      description: "The process I follow to understand a problem and solve it without breaking what already works.",
    },
    education: {
      title: "Certifications & Additional Training",
      description: "Complementary training alongside my three years of professional experience at Recursos Informáticos.",
    },
    contact: {
      title: "Contact Me",
      description: "Have an opportunity, a project, or a technical question? Reach out.",
      form: {
        title: "Send a Message",
        description: "Fill out the form and I'll get back to you shortly.",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
      },
      info: {
        title: "Contact Information",
        description: "You can also reach me directly through these channels.",
        email: "Email",
        location: "Location",
      },
      success: {
        title: "Message sent!",
        message: "Thanks for reaching out. I'll get back to you shortly.",
      },
      error: {
        title: "Error",
        message: "There was an error sending your message. Try again or email me directly.",
      },
    },
    footer: {
      about: {
        title: "About",
        description:
          "Developer and technical analyst focused on business systems, legacy application modernization, and Full Stack development.",
      },
      links: { title: "Quick Links" },
      social: { title: "Social" },
      copyright: "All rights reserved.",
    },
  },
} as const

type Translations = typeof translations
type TranslationValue = string | readonly string[]

type LanguageContextType = {
  language: Locale
  setLanguage: (lang: Locale) => void
  t: (key: string) => TranslationValue
}

const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
  t: () => "",
})

type LanguageProviderProps = {
  children: ReactNode
}

function resolve(dict: unknown, keys: string[]): TranslationValue | undefined {
  let value: unknown = dict
  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key]
    } else {
      return undefined
    }
  }
  return value as TranslationValue
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Locale>("es")

  useEffect(() => {
    const saved = localStorage.getItem("language")
    if (saved === "es" || saved === "en") {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): TranslationValue => {
    const keys = key.split(".")
    const value = resolve(translations[language], keys)
    if (value !== undefined) return value
    const fallback = resolve(translations.es, keys)
    return fallback !== undefined ? fallback : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const useTranslation = () => {
  const { t } = useContext(LanguageContext)
  if (!t) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return { t }
}

export type { Translations }
