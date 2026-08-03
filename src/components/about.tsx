"use client"

import { useTranslation } from "@/lib/i18n"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <ScrollReveal baseOpacity={0} enableBlur baseRotation={10} blurStrength={15} containerClassName="my-5">
              {t("about.title") as string}
            </ScrollReveal>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("about.subtitle") as string}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/profile.jpeg"
              alt="Alejo Marcó"
              width={600}
              height={600}
              className="object-cover w-full h-full transition-transform img-hover"
            />
          </div>

          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <ScrollReveal key={index} baseOpacity={1} enableBlur baseRotation={10} blurStrength={10} textClassName="text-lg">
                {paragraph}
              </ScrollReveal>
            ))}

            <div>
              <h4 className="text-lg font-semibold mb-3">{t("about.quickFacts.title") as string}</h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6">
              <Button asChild>
                <a href={site.resumeUrl} download>
                  <FileDown className="mr-2 h-4 w-4" />
                  {t("about.downloadCV") as string}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
