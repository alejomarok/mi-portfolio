"use client"

import { useTranslation } from "@/lib/i18n"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import SectionHeading from "./section-heading"
import { site } from "@/data/site"

export default function About() {
  const { t } = useTranslation()
  const paragraphs = t("about.paragraphs") as unknown as readonly string[]
  const quickFacts = [
    { label: t("about.quickFacts.role.label") as string, value: t("about.quickFacts.role.value") as string },
    { label: t("about.quickFacts.company.label") as string, value: t("about.quickFacts.company.value") as string },
    { label: t("about.quickFacts.location.label") as string, value: t("about.quickFacts.location.value") as string },
    { label: t("about.quickFacts.since.label") as string, value: t("about.quickFacts.since.value") as string },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-surface-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading title={t("about.title") as string} description={t("about.subtitle") as string} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-start">
          <ScrollReveal as="div" className="relative overflow-hidden rounded-lg border">
            <Image
              src="/profile.jpeg"
              alt="Alejo Marcó"
              width={600}
              height={600}
              className="object-cover w-full h-full transition-transform img-hover"
            />
          </ScrollReveal>

          <div className="space-y-6">
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <ScrollReveal key={index} as="p" delay={index * 60} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {paragraph}
                </ScrollReveal>
              ))}
            </div>

            <div className="rounded-lg border bg-surface p-5">
              <h3 className="text-sm font-semibold mb-3">{t("about.quickFacts.title") as string}</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Button asChild>
              <a href={site.resumeUrl} download>
                <FileDown className="mr-2 h-4 w-4" />
                {t("about.downloadCV") as string}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
