"use client"

import { useLanguage, useTranslation } from "@/lib/i18n"
import { methodologySteps } from "@/data/methodology"

export default function Methodology() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section id="methodology" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("methodology.title") as string}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t("methodology.description") as string}
            </p>
          </div>
        </div>

        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologySteps.map((step, index) => (
            <li key={step.id} className="rounded-lg border bg-card p-5">
              <span className="text-sm font-mono text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-semibold mt-2 mb-1.5">{step.title[language]}</h3>
              <p className="text-sm text-muted-foreground">{step.description[language]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
