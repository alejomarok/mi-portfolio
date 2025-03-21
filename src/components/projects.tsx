"use client"

import { useTranslation } from "@/lib/i18n"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Node.js", "Express", "MongoDB", "React"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "Django", "PostgreSQL", "Docker"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("projects.title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("projects.description")}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("projects.demo")}
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t("projects.code")}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

