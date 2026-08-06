"use client"

import { useLanguage, useTranslation } from "@/lib/i18n"
import { Database, Server, Layout, FlaskConical, Braces, type LucideIcon } from "lucide-react"
import { certifications } from "@/data/certifications"
import type { CertificationCategory, Localized } from "@/data/types"
import ScrollReveal from "./scroll-reveal"
import SectionHeading from "./section-heading"

const categoryIcons: Record<CertificationCategory, LucideIcon> = {
  database: Database,
  backend: Server,
  frontend: Layout,
  testing: FlaskConical,
  language: Braces,
}

const categoryLabels: Record<CertificationCategory, Localized<string>> = {
  database: { es: "Base de Datos", en: "Database" },
  backend: { es: "Backend", en: "Backend" },
  frontend: { es: "Frontend", en: "Frontend" },
  testing: { es: "Testing", en: "Testing" },
  language: { es: "Lenguaje", en: "Language" },
}

export default function Education() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title={t("education.title") as string} description={t("education.description") as string} />

        <div className="mx-auto mt-10 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, index) => {
            const Icon = categoryIcons[cert.category]
            return (
              <ScrollReveal
                key={cert.id}
                delay={Math.min(index, 6) * 45}
                className={`flex items-start gap-3 rounded-lg border px-4 py-3 transition-colors hover:border-primary/40 ${
                  cert.featured ? "border-primary/25 bg-surface" : "bg-surface/60"
                }`}
              >
                <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium leading-snug">{cert.title[language]}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{categoryLabels[cert.category][language]}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
