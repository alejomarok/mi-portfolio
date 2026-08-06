"use client"

import { useState, type ReactNode } from "react"
import { useLanguage, useTranslation } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink, Github, ImageOff, Info } from "lucide-react"
import { projects } from "@/data/projects"
import type { ProjectItem } from "@/data/types"
import ProjectCover from "@/components/project-cover"
import ScrollReveal from "@/components/scroll-reveal"
import SectionHeading from "@/components/section-heading"

function ProjectCaseStudy({ project, reversed }: { project: ProjectItem; reversed: boolean }) {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const detailsId = `project-details-${project.id}`

  const detailRows: { label: string; content: ReactNode }[] = [
    { label: t("projects.problem") as string, content: project.problem[language] },
    { label: t("projects.solution") as string, content: project.solution[language] },
    { label: t("projects.users") as string, content: project.users[language] },
    {
      label: t("projects.features") as string,
      content: (
        <ul className="list-disc pl-5 space-y-1">
          {project.features[language].map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      ),
    },
    { label: t("projects.architecture") as string, content: project.architecture[language] },
    { label: t("projects.challenges") as string, content: project.challenges[language] },
    { label: t("projects.value") as string, content: project.value[language] },
  ]

  return (
    <ScrollReveal
      as="article"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start rounded-xl border bg-surface p-5 sm:p-8"
    >
      <div className={`relative aspect-video overflow-hidden rounded-lg border ${reversed ? "lg:order-2" : ""}`}>
        <ProjectCover name={project.name} variant={project.coverVariant} />
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-md bg-background/85 px-2 py-1 text-xs text-muted-foreground backdrop-blur">
          <ImageOff className="h-3 w-3" aria-hidden="true" />
          {t("projects.screenshotPending") as string}
        </div>
      </div>

      <div className={`flex flex-col ${reversed ? "lg:order-1" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="secondary">{project.category[language]}</Badge>
          <Badge variant="outline">{project.year}</Badge>
        </div>

        <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
        <p className="text-muted-foreground mt-1">{project.subtitle[language]}</p>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{project.shortDescription[language]}</p>

        <p className="mt-4 text-sm">
          <span className="font-semibold">{t("projects.role") as string}: </span>
          <span className="text-muted-foreground">{project.role[language]}</span>
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        {expanded && (
          <div id={detailsId} className="mt-6 pt-6 border-t space-y-5">
            {detailRows.map((row) => (
              <div key={row.label}>
                <h4 className="text-sm font-semibold mb-1">{row.label}</h4>
                <div className="text-sm text-muted-foreground leading-relaxed">{row.content}</div>
              </div>
            ))}
            {project.contentNote && (
              <div className="flex gap-2 rounded-md border border-dashed p-3 text-xs text-muted-foreground">
                <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  <strong>{t("projects.contentPending") as string}:</strong> {project.contentNote[language]}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-6">
          <Button
            variant="outline"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-controls={detailsId}
            className="w-full sm:w-auto"
          >
            <ChevronDown className={`mr-2 h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            {expanded ? (t("projects.hideDetails") as string) : (t("projects.viewDetails") as string)}
          </Button>
          {project.liveUrl && (
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                {t("projects.demo") as string}
              </a>
            </Button>
          )}
          {project.repositoryUrl && (
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                {t("projects.code") as string}
              </a>
            </Button>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  const sorted = [...projects].sort((a, b) => a.displayOrder - b.displayOrder)

  return (
    <section id="projects" className="py-16 md:py-24 bg-surface-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading title={t("projects.title") as string} description={t("projects.description") as string} />
        <div className="space-y-8 mt-12">
          {sorted.map((project, index) => (
            <ProjectCaseStudy key={project.id} project={project} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
