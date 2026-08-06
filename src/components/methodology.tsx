"use client"

import { useLanguage, useTranslation } from "@/lib/i18n"
import { methodologySteps } from "@/data/methodology"
import ScrollReveal from "./scroll-reveal"
import SectionHeading from "./section-heading"

export default function Methodology() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section id="methodology" className="py-16 md:py-24 bg-surface-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading title={t("methodology.title") as string} description={t("methodology.description") as string} />

        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methodologySteps.map((step, index) => (
            <ScrollReveal key={step.id} as="li" delay={Math.min(index, 4) * 50} className="rounded-lg border bg-surface p-5">
              <span className="text-sm font-mono text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-semibold mt-2 mb-1.5">{step.title[language]}</h3>
              <p className="text-sm text-muted-foreground">{step.description[language]}</p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
