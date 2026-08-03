"use client"

import { useLanguage, useTranslation } from "@/lib/i18n"
import { GraduationCap } from "lucide-react"
import { certifications } from "@/data/certifications"

export default function Education() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("education.title") as string}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t("education.description") as string}
            </p>
          </div>
        </div>

        <ul className="mx-auto mt-10 max-w-2xl space-y-3">
          {certifications.map((cert) => (
            <li key={cert.id} className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3">
              <GraduationCap className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
              <span className="font-medium">{cert.title[language]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
