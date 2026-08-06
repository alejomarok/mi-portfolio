"use client"

import { useLanguage, useTranslation } from "@/lib/i18n"
import { Code, Database, Layers, Server, Wrench, type LucideIcon } from "lucide-react"
import PixelCard from "./pixelcard"
import { Badge } from "./ui/badge"
import { skillCategories } from "@/data/skills"
import ScrollReveal from "./scroll-reveal"
import SectionHeading from "./section-heading"

const icons: Record<string, LucideIcon> = {
  "oracle-legacy": Layers,
  backend: Server,
  frontend: Code,
  "databases-cloud": Database,
  languages: Code,
  tools: Wrench,
}

export default function Skills() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section id="skills" className="py-16 md:py-24 bg-surface-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading title={t("skills.title") as string} description={t("skills.description") as string} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 items-stretch">
          {skillCategories.map((category, index) => {
            const Icon = icons[category.id] ?? Code
            return (
              <ScrollReveal key={category.id} delay={Math.min(index, 5) * 50} className="h-full">
                <PixelCard variant="blue" className="h-full">
                  <div className="relative z-10 flex h-full flex-col p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                      <h3 className="text-sm font-semibold leading-snug">{category.title[language]}</h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {category.items.map((item) => (
                        <Badge key={item} variant="secondary" className="text-sm font-normal px-2.5 py-1">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    {category.capabilities && (
                      <div className="mt-auto pt-3 border-t">
                        <p className="text-xs text-muted-foreground mb-1.5">
                          {t("skills.capabilities") as string}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {category.capabilities[language].map((capability) => (
                            <Badge key={capability} variant="outline" className="text-xs font-normal px-2 py-0.5">
                              {capability}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </PixelCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
