import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import ProjectCase from "@/components/project-case"

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })) }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  if (!project) return {}
  return {
    title: project.name,
    description: project.shortDescription.es,
    openGraph: {title: `${project.name} — Alejo Marcó`, description:project.shortDescription.es, images: project.image ? [{url:project.image,width:1440,height:1000,alt:project.name}] : []},
  }
}

export default async function ProjectPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug)
  if (!project) notFound()
  const ordered = [...projects].sort((a,b) => a.displayOrder - b.displayOrder)
  const next = ordered[(ordered.findIndex(item => item.slug === slug)+1)%ordered.length]
  return <ProjectCase project={project} next={{name:next.name,slug:next.slug}} />
}
