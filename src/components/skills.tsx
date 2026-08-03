"use client"

import { useLanguage, useTranslation } from "@/lib/i18n"
import { Code, Database, Layers, Server, Wrench, type LucideIcon } from "lucide-react"
import PixelCard from "./pixelcard"
import { skillCategories } from "@/data/skills"

const icons: Record<string, LucideIcon> = {
  "enterprise-legacy": Layers,
  "databases-cloud": Database,
  languages: Code,
  frontend: Code,
  backend: Server,
  tools: Wrench,
}

export default function Skills() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("skills.title") as string}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t("skills.description") as string}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 justify-items-center">
          {skillCategories.map((category) => {
            const Icon = icons[category.id] ?? Code
            return (
              <PixelCard
                key={category.id}
                variant="blue"
                className="relative overflow-hidden min-h-[320px] sm:min-h-[340px] transform transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4 md:p-6">
                  <Icon className="h-8 w-8 mb-2" aria-hidden="true" />
                  <h3 className="text-lg md:text-xl font-bold mb-3">{category.title[language]}</h3>
                  <ul className="space-y-1 text-sm md:text-base">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </PixelCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
