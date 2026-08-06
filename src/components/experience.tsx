"use client"

import { useLanguage, useTranslation } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { experience } from "@/data/experience"
import ScrollReveal from "./scroll-reveal"
import SectionHeading from "./section-heading"

export default function Experience() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title={t("experience.title") as string} description={t("experience.description") as string} />

        <div className="mt-12 space-y-10">
          {experience.map((job) => (
            <ScrollReveal key={job.id} as="div" className="relative pl-6 border-l-2 border-primary/30">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" aria-hidden="true" />

              <Card className="overflow-hidden border-border/80">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{job.role[language]}</CardTitle>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground mt-1 text-sm">
                        <span className="flex items-center">
                          <Briefcase className="mr-2 h-4 w-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          {job.location[language]}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{job.period[language]}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{job.summary[language]}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {job.responsibilityGroups.map((group) => (
                      <div key={group.title[language]}>
                        <h4 className="font-semibold mb-2">{group.title[language]}</h4>
                        <ul className="space-y-1.5">
                          {group.items[language].map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">{t("experience.stackLabel") as string}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
