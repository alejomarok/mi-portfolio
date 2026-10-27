"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { projects } from "@/data/projects"
import ScrollReveal from "./scroll-reveal"
import ClientLogo from "./client-logo"
import ProjectPresentation from "./project-presentation"

const orderedProjects = [...projects].sort((a,b) => a.displayOrder - b.displayOrder)

export default function Projects() {
  const { language } = useLanguage()
  const en = language === "en"
  return <section id="projects" className="projects-section" aria-labelledby="projects-heading">
    <div className="page-frame section-heading-row">
      <ScrollReveal><h2 id="projects-heading">{en ? "Clients & projects" : "Clientes y proyectos"}</h2></ScrollReveal>
      <ScrollReveal delay={80}><p>{en ? "Four businesses. Different processes.\nSoftware that connects service and management." : "Cuatro negocios. Distintos procesos.\nSoftware que conecta atención y gestión."}</p></ScrollReveal>
    </div>
    <div className="project-list">
      {orderedProjects.map(project => <article key={project.id} id={`project-${project.slug}`} className={`project-showcase project-${project.slug}`}>
        <div className="page-frame project-layout">
          <ScrollReveal className="project-visual">
            <Link href={`/proyectos/${project.slug}`} className="project-image-link" aria-label={`${en ? "View case study" : "Ver caso"}: ${project.name}`}>
              <ProjectPresentation project={project} language={language} linked />
            </Link>
          </ScrollReveal>
          <ScrollReveal className="project-identity"><ClientLogo project={project} /><div><h3 translate="no">{project.name}</h3><p className="project-discipline">{project.discipline?.[language]}</p></div></ScrollReveal>
          <div className="project-copy">
            <ScrollReveal delay={130}><p className="project-description">{project.shortDescription[language]}</p></ScrollReveal>
            <ScrollReveal delay={190}><p className="project-contribution">{project.contribution?.[language]}</p><ul className="project-stack">{project.previewStack?.map(tech => <li key={tech} translate="no">{tech}</li>)}</ul></ScrollReveal>
            <ScrollReveal delay={250}><Link href={`/proyectos/${project.slug}`} className="case-link">{en ? "Explore the case" : "Explorar el caso"}<ArrowUpRight size={20} aria-hidden="true" /></Link></ScrollReveal>
          </div>
        </div>
      </article>)}
    </div>
  </section>
}
