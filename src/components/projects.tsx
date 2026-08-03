"use client"

import { useState, type ReactNode } from "react"
import { useLanguage, useTranslation } from "@/lib/i18n"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink, Github, ImageOff, Info } from "lucide-react"
import { projects } from "@/data/projects"
import type { ProjectItem } from "@/data/types"
import ProjectCover from "@/components/project-cover"

function ProjectCard({ project }: { project: ProjectItem }) {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const detailsId = `project-details-${project.id}`

  const detailRows: { label: string; content: ReactNode }[] = [
    { label: t("projects.problem") as string, content: project.problem[language] },
    { label: t("projects.solution") as string, content: project.solution[language] },
    { label: t("projects.users") as string, content: project.users[language] },
    { label: t("projects.role") as string, content: project.role[language] },
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
    <Card className="overflow-hidden flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <ProjectCover name={project.name} variant={project.coverVariant} />
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-background/80 px-2 py-1 text-xs text-muted-foreground backdrop-blur">
          <ImageOff className="h-3 w-3" />
          {t("projects.screenshotPending") as string}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{project.name}</CardTitle>
          <Badge variant="outline">{project.year}</Badge>
        </div>
        <CardDescription>{project.subtitle[language]}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <Badge variant="secondary">{project.category[language]}</Badge>
        <p className="text-sm text-muted-foreground">{project.shortDescription[language]}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        {expanded && (
          <div id={detailsId} className="pt-4 mt-4 border-t space-y-4">
            {detailRows.map((row) => (
              <div key={row.label}>
                <h4 className="text-sm font-semibold mb-1">{row.label}</h4>
                <div className="text-sm text-muted-foreground">{row.content}</div>
              </div>
            ))}
            {project.contentNote && (
              <div className="flex gap-2 rounded-md border border-dashed p-3 text-xs text-muted-foreground">
                <Info className="h-4 w-4 shrink-0" />
                <span>
                  <strong>{t("projects.contentPending") as string}:</strong> {project.contentNote[language]}
                </span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={detailsId}
        >
          <ChevronDown className={`mr-2 h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          {expanded ? (t("projects.hideDetails") as string) : (t("projects.viewDetails") as string)}
        </Button>
        {project.liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {t("projects.demo") as string}
            </a>
          </Button>
        )}
        {project.repositoryUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t("projects.code") as string}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  const sorted = [...projects].sort((a, b) => a.displayOrder - b.displayOrder)

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("projects.title") as string}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t("projects.description") as string}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
