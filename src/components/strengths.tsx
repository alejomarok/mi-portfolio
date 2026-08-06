"use client"

import { useLanguage, useTranslation } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import { FileSearch, Database, Users, Layers, MessagesSquare, type LucideIcon } from "lucide-react"
import { strengths } from "@/data/strengths"
import ScrollReveal from "./scroll-reveal"
import SectionHeading from "./section-heading"

const icons: Record<string, LucideIcon> = {
  "legacy-analysis": FileSearch,
  "oracle-business-logic": Database,
  "technical-leadership": Users,
  "fullstack-product": Layers,
  "functional-understanding": MessagesSquare,
}

export default function Strengths() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section id="strengths" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title={t("strengths.title") as string} description={t("strengths.subtitle") as string} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {strengths.map((strength, index) => {
            const Icon = icons[strength.id]
            return (
              <ScrollReveal key={strength.id} delay={Math.min(index, 4) * 60} className="h-full">
                <Card className="h-full border-border/80 transition-colors hover:border-primary/40">
                  <CardContent className="p-6">
                    <Icon className="h-6 w-6 mb-4 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">{strength.title[language]}</h3>
                    <p className="text-sm text-muted-foreground">{strength.description[language]}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
