"use client"

import Link from "next/link"
import { useEffect, useState, type KeyboardEvent } from "react"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { skillCategories } from "@/data/skills"
import type { Localized } from "@/data/types"
import ScrollReveal from "./scroll-reveal"

const categories = ["databases-cloud", "backend", "frontend", "languages", "ai", "oracle-legacy", "tools"].map(id => skillCategories.find(category => category.id === id)!)
const englishItems: Record<string,string> = {"Autenticación":"Authentication", "Autorización":"Authorization", "Integraciones externas":"External integrations", "Diseño responsivo":"Responsive design", "Reportes QRP":"QRP reports", "Sistemas Legacy":"Legacy systems", "Testing de APIs":"API testing", "Análisis funcional":"Functional analysis", "Documentación técnica":"Technical documentation"}
const labels: Record<string, Localized<string>> = {
  frontend: {es:"Frontend",en:"Frontend"}, languages:{es:"Lenguajes",en:"Languages"},
  backend:{es:"Backend",en:"Backend"}, "databases-cloud":{es:"Bases de datos",en:"Databases"}, ai:{es:"IA en mi trabajo",en:"AI in my work"},
  "oracle-legacy":{es:"Oracle y legacy",en:"Oracle & legacy"}, tools:{es:"Herramientas",en:"Tools"},
}
const evidence: Record<string, {text:Localized<string>;href:string;link:Localized<string>}> = {
  frontend: {text:{es:"Identidad visual, componentes reutilizables y recorridos responsive. Del catálogo a los formularios y paneles privados.",en:"Visual identity, reusable components, and responsive journeys. From catalogs to forms and private dashboards."},href:"/proyectos/chaioboutique",link:{es:"Aplicado en Chaioboutique",en:"Applied in Chaioboutique"}},
  languages: {text:{es:"JavaScript y TypeScript en productos web. SQL y PL/SQL para entender y transformar los datos que los sostienen.",en:"JavaScript and TypeScript in web products. SQL and PL/SQL to understand and transform the data behind them."},href:"/proyectos/gamaan",link:{es:"Aplicado en GAMAAN",en:"Applied in GAMAAN"}},
  backend: {text:{es:"APIs, autenticación e integraciones para conectar la interfaz con los procesos reales del negocio.",en:"APIs, authentication, and integrations connecting the interface to real business processes."},href:"/proyectos/pactum",link:{es:"Aplicado en Pactum",en:"Applied in Pactum"}},
  "databases-cloud": {text:{es:"SQL y PL/SQL en sistemas empresariales: consultas, procedimientos, funciones y paquetes. En la web, PostgreSQL con Prisma y Firestore para modelar información y sostener los procesos de gestión.",en:"SQL and PL/SQL in enterprise systems: queries, procedures, functions, and packages. On the web, PostgreSQL with Prisma and Firestore to model data and support management workflows."},href:"/#experience",link:{es:"Mi experiencia con datos",en:"My database experience"}},
  ai: {text:{es:"Uso Codex y Claude para explorar ideas y buscar soluciones viables a problemas complicados. El contexto del negocio y el criterio técnico guían qué propuestas llevo al código.",en:"I use Codex and Claude to explore ideas and find practical solutions to difficult problems. Business context and technical judgment guide which suggestions I take into the code."},href:"/#about",link:{es:"Mi forma de resolver problemas",en:"How I approach problems"}},
  "oracle-legacy": {text:{es:"Ingeniería inversa, lógica de negocio y modernización gradual de aplicaciones con décadas de historia.",en:"Reverse engineering, business logic, and gradual modernization of applications with decades of history."},href:"/#experience",link:{es:"Mi experiencia profesional",en:"My professional experience"}},
  tools: {text:{es:"Del análisis funcional a la revisión de código: herramientas y prácticas para colaborar, probar y mantener un producto.",en:"From functional analysis to code review: tools and practices for collaborating, testing, and maintaining a product."},href:"/#experience",link:{es:"Cómo trabajo en equipo",en:"How I work with a team"}},
}

export default function Skills() {
  const { language } = useLanguage()
  const [active, setActive] = useState("databases-cloud")
  useEffect(() => {
    const sync = () => {
      const value = new URLSearchParams(window.location.search).get("stack")
      setActive(categories.some(c => c.id === value) ? value! : "databases-cloud")
    }
    sync()
    window.addEventListener("popstate",sync)
    return () => window.removeEventListener("popstate",sync)
  }, [])
  function select(id: string) {
    setActive(id)
    const url = new URL(window.location.href)
    url.searchParams.set("stack",id)
    window.history.replaceState(null,"",url)
  }
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index:number) {
    let next = index
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index+1)%categories.length
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index-1+categories.length)%categories.length
    else if (event.key === "Home") next = 0
    else if (event.key === "End") next = categories.length-1
    else return
    event.preventDefault()
    select(categories[next].id)
    document.getElementById(`stack-tab-${categories[next].id}`)?.focus()
  }
  return <section id="skills" className="skills-section section-space" aria-labelledby="skills-heading">
    <div className="page-frame">
      <div className="section-heading-row">
        <ScrollReveal><h2 id="skills-heading">{language === "en" ? "My stack, in context" : "Mi stack, en contexto"}</h2></ScrollReveal>
        <ScrollReveal delay={80}><p>{language === "en" ? "Explore the tools.\nSee where I put them to work." : "Explorá las herramientas.\nMirá dónde las pongo en práctica."}</p></ScrollReveal>
      </div>
      <div className="stack-layout">
        <div role="tablist" aria-label={language === "en" ? "Technical skills" : "Habilidades técnicas"} className="stack-tabs">
          {categories.map((category,index) => <button key={category.id} id={`stack-tab-${category.id}`} type="button" role="tab" aria-selected={active === category.id} aria-controls={`stack-panel-${category.id}`} tabIndex={active === category.id ? 0 : -1} onClick={() => select(category.id)} onKeyDown={event => onKeyDown(event,index)}>{labels[category.id][language]}<ArrowUpRight size={18} aria-hidden="true" /></button>)}
        </div>
        <div className="stack-panels">
          {categories.map(category => <div key={category.id} role="tabpanel" id={`stack-panel-${category.id}`} aria-labelledby={`stack-tab-${category.id}`} hidden={active !== category.id} tabIndex={0} className="stack-panel">
            <h3>{labels[category.id][language]}</h3>
            <ul className="skill-words">{category.items.map(item => <li key={item} translate="no">{language === "en" ? englishItems[item] || item : item}</li>)}</ul>
            {category.capabilities ? <p className="stack-capabilities">{category.capabilities[language].join(" · ")}</p> : null}
            <p className="stack-evidence">{evidence[category.id].text[language]}</p>
            <Link className="text-link" href={evidence[category.id].href}>{evidence[category.id].link[language]}<ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>)}
        </div>
      </div>
      <noscript><style>{".stack-panel[hidden]{display:block;margin-top:48px}.stack-tabs{display:none}"}</style></noscript>
    </div>
  </section>
}
