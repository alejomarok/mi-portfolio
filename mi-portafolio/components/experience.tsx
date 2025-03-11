"use client"

import { useTranslation } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const { t } = useTranslation()

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: t("experience.job1.company"),
      period: t("experience.job1.period"),
      description: t("experience.job1.description"),
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: t("experience.job2.title"),
      company: t("experience.job2.company"),
      period: t("experience.job2.period"),
      description: t("experience.job2.description"),
      skills: ["Node.js", "Express", "MongoDB", "AWS"],
    },
    {
      title: t("experience.job3.title"),
      company: t("experience.job3.company"),
      period: t("experience.job3.period"),
      description: t("experience.job3.description"),
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("experience.title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("experience.description")}</p>
          </div>
        </div>
        <div className="mt-12 space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <Briefcase className="mr-2 h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

