"use client"

import { useLanguage } from "@/lib/i18n"
import { certifications } from "@/data/certifications"
import ScrollReveal from "./scroll-reveal"

export default function Education() {
  const { language } = useLanguage()
  const en = language === "en"
  return <section id="education" className="education-section section-space" aria-labelledby="education-heading"><div className="page-frame education-layout">
    <ScrollReveal><h2 id="education-heading">{en ? "Learn. Then build." : "Aprender y aplicar"}</h2><p className="education-intro">{en ? "Training at Coderhouse, Udemy, and EducaciónIT. Continuous learning applied to real products." : "Formación en Coderhouse, Udemy y EducaciónIT. Aprendizaje continuo aplicado a productos reales."}</p><div className="degree"><h3>{en ? "Social Communication" : "Comunicación Social"}</h3><p>{en ? "Bachelor’s degree in progress, Universidad Nacional de Córdoba." : "Licenciatura en curso, Universidad Nacional de Córdoba."}</p></div></ScrollReveal>
    <ul className="education-list">{certifications.map((cert,index) => <ScrollReveal as="li" key={cert.id} delay={index*60}><span>{cert.title[language]}</span></ScrollReveal>)}</ul>
  </div></section>
}
