"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import type { ProjectItem } from "@/data/types"
import { site } from "@/data/site"
import ScrollReveal from "./scroll-reveal"
import ClientLogo from "./client-logo"
import ProjectPresentation from "./project-presentation"

export default function ProjectCase({project,next}:{project:ProjectItem;next:{name:string;slug:string}}) {
  const { language } = useLanguage()
  const en = language === "en"
  return <main id="main-content" className={`case-page case-${project.slug}`}>
    <div className="page-frame case-intro">
      <Link href="/#projects" className="text-link"><ArrowLeft size={17} aria-hidden="true"/>{en ? "All projects" : "Todos los proyectos"}</Link>
      <div className={`case-title-row project-${project.slug}`}><ClientLogo project={project} /><div><h1 translate="no">{project.name}</h1><p className="case-subtitle">{project.discipline?.[language]}</p></div></div>
      <p className="case-lead">{project.shortDescription[language]}</p>
      <dl className="case-facts"><div><dt>{en ? "My contribution" : "Mi aporte"}</dt><dd>{project.contribution?.[language]}</dd></div><div><dt>{en ? "Technology" : "Tecnología"}</dt><dd>{project.previewStack?.join(" · ")}</dd></div></dl>
    </div>
    <div className={`case-cover project-${project.slug}`}><div className="case-cover-inner"><ProjectPresentation project={project} language={language} priority /></div></div>
    <div className="page-frame case-body">
      <div className="case-two-columns">
        <ScrollReveal><h2>{en ? "The challenge" : "El desafío"}</h2><p>{project.problem[language]}</p></ScrollReveal>
        <ScrollReveal delay={90}><h2>{en ? "The solution" : "La solución"}</h2><p>{project.solution[language]}</p></ScrollReveal>
      </div>
      <section className="case-management" aria-labelledby="management-heading">
        <ScrollReveal><h2 id="management-heading">{en ? "The management behind the website" : "La gestión detrás de la web"}</h2></ScrollReveal>
        <ol className="case-workflow" aria-label={en ? "Main management workflow" : "Circuito principal de gestión"}>{project.workflow[language].map((step,index) => <li key={step}><span aria-hidden="true">{index+1}</span><p>{step}</p></li>)}</ol>
        <div className="management-modules">{project.managementModules[language].map((module,index) => <ScrollReveal key={module.title} delay={index*75}><h3>{module.title}</h3><p>{module.description}</p></ScrollReveal>)}</div>
      </section>
      <section className="case-role" aria-labelledby="role-heading"><ScrollReveal><h2 id="role-heading">{en ? "What I built" : "Qué construí"}</h2><p>{project.role[language]}</p></ScrollReveal><ScrollReveal delay={90}><h3>{en ? "Who it serves" : "Para quién"}</h3><p>{project.users[language]}</p></ScrollReveal></section>
      <section className="case-features" aria-labelledby="features-heading"><h2 id="features-heading">{en ? "What the system supports" : "Qué permite gestionar"}</h2><ul>{project.features[language].map((feature,index) => <ScrollReveal as="li" key={feature} delay={Math.min(index,5)*50}>{feature}</ScrollReveal>)}</ul></section>
      <div className="case-two-columns"><ScrollReveal><h2>{en ? "Architecture" : "Arquitectura"}</h2><p>{project.architecture[language]}</p></ScrollReveal><ScrollReveal delay={90}><h2>{en ? "Key decisions" : "Decisiones clave"}</h2><p>{project.challenges[language]}</p></ScrollReveal></div>
      <section className="case-technologies" aria-labelledby="technology-heading"><h2 id="technology-heading">{en ? "The stack" : "El stack"}</h2><ul className="skill-words">{project.technologies.map(tech => <li key={tech} translate="no">{tech}</li>)}</ul></section>
      <section className="case-outcome" aria-labelledby="value-heading"><h2 id="value-heading">{en ? "What it delivers" : "Qué aporta"}</h2><p className="statement">{project.value[language]}</p><a className="button button-ink" href={`mailto:${site.email}?subject=${encodeURIComponent(`${en ? "Let’s talk about" : "Hablemos de"} ${project.name}`)}`}>{en ? "Talk about this project" : "Hablemos del proyecto"}<ArrowUpRight size={18} aria-hidden="true"/></a></section>
      <nav className="next-project" aria-label={en ? "More projects" : "Más proyectos"}><Link href="/#projects">{en ? "All projects" : "Todos los proyectos"}</Link><Link href={`/proyectos/${next.slug}`}>{next.name}<ArrowUpRight size={28} aria-hidden="true"/></Link></nav>
    </div>
  </main>
}
