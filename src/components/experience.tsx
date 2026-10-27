"use client"

import { useLanguage } from "@/lib/i18n"
import { experience, professionalHighlights } from "@/data/experience"
import { methodologySteps } from "@/data/methodology"
import ScrollReveal from "./scroll-reveal"

export default function Experience() {
  const { language } = useLanguage()
  const en = language === "en"
  const current = experience[0]
  return <section id="experience" className="experience-section section-space page-frame" aria-labelledby="experience-heading">
    <div className="section-heading-row">
      <ScrollReveal><h2 id="experience-heading">{en ? "Professional experience" : "Experiencia profesional"}</h2></ScrollReveal>
      <ScrollReveal delay={80}><p>{en ? "Business-critical systems.\nReal responsibility in production." : "Sistemas críticos para empresas.\nResponsabilidad real en producción."}</p></ScrollReveal>
    </div>
    <div className="career-list">
      <article className="career-featured" aria-labelledby="employer-heading">
      <div className="career-row">
        <div className="career-content">
          <h3 id="employer-heading" className="career-company">{current.company}</h3><p className="career-position">{current.role[language]}</p>
          <p className="career-period">{en ? "May 2023 — Present · Córdoba, Argentina" : "Mayo 2023 — Actualidad · Córdoba, Argentina"}</p>
          <p>{en ? "I combine technical leadership, development, and functional analysis in enterprise systems used by multiple companies. I work on business rules, Oracle databases, and production workflows, understanding the dependencies behind each change." : "Combino liderazgo técnico, desarrollo y análisis funcional en sistemas empresariales utilizados por distintas compañías. Trabajo sobre reglas de negocio, bases de datos Oracle y procesos de producción, entendiendo las dependencias detrás de cada cambio."}</p>
        </div>
      </div>
      <div className="career-highlights">{professionalHighlights.map((highlight,index) => <ScrollReveal key={highlight.title.es} delay={index*65}><h4>{highlight.title[language]}</h4><p>{highlight.description[language]}</p></ScrollReveal>)}</div>
      <p className="career-stack">Oracle PL/SQL · SQLBase · Centura / OpenText Gupta · React · Git · Jira</p>
          <details className="editorial-details"><summary>{en ? "My work in detail" : "Mi trabajo en detalle"}<span aria-hidden="true">+</span></summary>
            <div className="details-body"><p>{current.summary[language]}</p>{current.responsibilityGroups.map(group => <div key={group.title.es}><h4>{group.title[language]}</h4><ul>{group.items[language].map(item => <li key={item}>{item}</li>)}</ul></div>)}<p>{current.stack.join(" · ")}</p></div>
          </details>
      </article>
      <ScrollReveal className="career-row" delay={80}>
        <div className="career-meta"><p>{en ? "February 2022 — Present" : "Febrero 2022 — Actualidad"}</p><p>{en ? "Freelance & personal projects" : "Freelance y proyectos personales"}</p></div>
        <div className="career-content"><h3>{en ? "Full Stack Developer" : "Desarrollador Full Stack"}</h3><p className="company-name">{en ? "Independent development" : "Desarrollo independiente"}</p><p>{en ? "Management systems, e-commerce, and business applications. I connect interfaces, authentication, databases, and administrative workflows in AutoGlobal, Chaioboutique, GAMAAN, and Pactum, organizing the information and tasks each business needs." : "Sistemas de gestión, e-commerce y aplicaciones de negocio. Conecto interfaces, autenticación, bases de datos y flujos administrativos en AutoGlobal, Chaioboutique, GAMAAN y Pactum, ordenando la información y las tareas que necesita cada negocio."}</p></div>
      </ScrollReveal>
    </div>
    <details className="editorial-details methodology-details"><summary>{en ? "How I approach a project" : "Cómo encaro un proyecto"}<span aria-hidden="true">+</span></summary><ol className="method-list">{methodologySteps.map(step => <li key={step.id}><p className="method-title">{step.title[language]}</p><p>{step.description[language]}</p></li>)}</ol></details>
  </section>
}
