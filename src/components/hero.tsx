"use client"

import { useState } from "react"
import { ArrowDown, ArrowUpRight, Download, Pause, Play } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { site } from "@/data/site"
import HeroPreview from "./hero-preview"
import Waves from "./waves"

export default function Hero() {
  const { language } = useLanguage()
  const en = language === "en"
  const [paused, setPaused] = useState(false)
  return <section id="home" className="hero" data-motion-paused={paused} aria-labelledby="hero-title">
    <div className="hero-background" aria-hidden="true">
      <Waves lineColor="rgba(70, 103, 62, 0.14)" waveAmpX={18} waveAmpY={12} xGap={22} yGap={32} maxCursorMove={55} paused={paused} />
    </div>
    <div className="page-frame hero-content">
    <div className="hero-layout">
      <div className="hero-copy">
        <div className="hero-intro"><p className="hero-role enter">{site.role[language]}</p></div>
        <h1 id="hero-title" className="hero-name" translate="no"><span>Alejo Marcó</span></h1>
        <p className="hero-support enter">{en ? "I turn complex business processes into useful software. From React and Next.js to APIs, databases, and the management behind every screen." : "Convierto procesos de negocio complejos en software útil. De React y Next.js a las APIs, las bases de datos y la gestión detrás de cada pantalla."}</p>
        <p className="hero-employer enter">{en ? "Currently a Technical Lead at " : "Actualmente, líder técnico en "}<a href="#experience">Recursos Informáticos<ArrowUpRight size={16} aria-hidden="true" /></a></p>
        <div className="hero-actions enter">
          <a href="#experience" className="button button-accent">{en ? "Experience" : "Experiencia"}<ArrowDown size={18} aria-hidden="true" /></a>
          <a href={en ? site.resumeEnUrl : site.resumeUrl} download className="text-link">{en ? "Download CV" : "Descargar CV"}<Download size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <HeroPreview paused={paused} />
    </div>
    <div className="hero-bottom enter">
      <p>Córdoba, Argentina</p>
      <button className="hero-motion-control" type="button" aria-pressed={paused} aria-label={paused ? (en ? "Resume movement" : "Activar movimiento") : (en ? "Pause movement" : "Pausar movimiento")} onClick={() => setPaused(value => !value)}>
        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        <span>{paused ? (en ? "Resume" : "Activar") : (en ? "Pause" : "Pausar")}</span>
      </button>
      <nav aria-label={en ? "Professional profile" : "Perfil profesional"}><a href="https://www.linkedin.com/in/alejo-marcó-3ba973221" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a></nav>
    </div>
    </div>
    <noscript><style>{".hero-preview-float{animation:none!important}.hero-motion-control{display:none}"}</style></noscript>
  </section>
}
