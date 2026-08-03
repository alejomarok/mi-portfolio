"use client"

import { useLanguage, useTranslation } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import { FileSearch, Database, Users, Layers, MessagesSquare, type LucideIcon } from "lucide-react"
import { strengths } from "@/data/strengths"

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
    <section id="strengths" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("strengths.title") as string}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t("strengths.subtitle") as string}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {strengths.map((strength) => {
            const Icon = icons[strength.id]
            return (
              <Card key={strength.id} className="h-full">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 mb-4 text-primary" aria-hidden="true" />
                  <h3 className="text-lg font-semibold mb-2">{strength.title[language]}</h3>
                  <p className="text-sm text-muted-foreground">{strength.description[language]}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
