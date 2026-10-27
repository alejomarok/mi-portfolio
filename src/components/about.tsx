"use client"

import { useLanguage } from "@/lib/i18n"
import ScrollReveal from "./scroll-reveal"

export default function About() {
  const { language } = useLanguage()
  const en = language === "en"
  return <section id="about" className="about-section section-space page-frame" aria-labelledby="about-heading">
    <ScrollReveal className="about-heading"><h2 id="about-heading">{en ? "Full Stack. Business depth." : "Full Stack. Profundidad de negocio."}</h2></ScrollReveal>
    <div className="about-layout">
      <ScrollReveal className="about-specialties"><div><h3>{en ? "Data that makes it work" : "Datos que hacen funcionar todo"}</h3><p>{en ? "Oracle, SQL, and PL/SQL in business-critical systems. Queries, procedures, functions, and packages; PostgreSQL and Firebase in web products." : "Oracle, SQL y PL/SQL en sistemas críticos. Consultas, procedimientos, funciones y paquetes; PostgreSQL y Firebase en productos web."}</p></div><div><h3>{en ? "AI as a thinking partner" : "IA para explorar soluciones"}</h3><p>{en ? "I use Codex and Claude to explore ideas and find practical approaches to complex problems, weighing each suggestion against the project’s context." : "Uso Codex y Claude para obtener ideas y encontrar soluciones viables a problemas complejos, contrastando las propuestas con el contexto del proyecto."}</p></div></ScrollReveal>
      <div className="about-story">
        <ScrollReveal><p className="statement">{en ? "A good system brings order to the work behind it." : "Un buen sistema ordena el trabajo que hay detrás."}</p></ScrollReveal>
        <ScrollReveal delay={75}><p>{en ? "I’m Alejo, a developer based in Córdoba. I connect interfaces, APIs, authentication, and data to build management systems around what a business needs: organize information, control access, and make each process easier to follow." : "Soy Alejo, desarrollador en Córdoba. Conecto interfaces, APIs, autenticación y datos para construir sistemas de gestión alrededor de lo que necesita un negocio: organizar información, controlar accesos y hacer que cada proceso sea más claro."}</p></ScrollReveal>
        <ScrollReveal delay={140}><p>{en ? "Since 2023, I’ve combined development and technical leadership at Recursos Informáticos. I analyze business rules, solve production incidents, and modernize systems with decades of history. That experience shapes how I build with React, Next.js, TypeScript, and Node.js today." : "Desde 2023 combino desarrollo y liderazgo técnico en Recursos Informáticos. Analizo reglas de negocio, resuelvo incidentes de producción y modernizo sistemas con décadas de historia. Esa experiencia acompaña lo que construyo hoy con React, Next.js, TypeScript y Node.js."}</p></ScrollReveal>
        <ScrollReveal delay={200}><dl className="about-facts"><div><dt>{en ? "Focus" : "Enfoque"}</dt><dd>{en ? "Full Stack & management systems" : "Full Stack y sistemas de gestión"}</dd></div><div><dt>{en ? "Based in" : "Ubicación"}</dt><dd>Córdoba, Argentina</dd></div><div><dt>{en ? "English" : "Inglés"}</dt><dd>{en ? "Intermediate" : "Intermedio"}</dd></div></dl></ScrollReveal>
      </div>
    </div>
  </section>
}
