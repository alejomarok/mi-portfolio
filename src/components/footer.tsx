"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
import { site, socialLinks } from "@/data/site"
import BrandMark from "./brand-mark"

export default function Footer() {
  const { language } = useLanguage()
  const en = language === "en"
  return <footer className="site-footer">
    <div className="page-frame">
      <div className="footer-top"><p>{en ? "Clear processes.\nSoftware built with context." : "Procesos claros.\nSoftware con contexto."}</p><nav aria-label={en ? "Social profiles" : "Perfiles sociales"}>{socialLinks.filter(link => link.icon !== "mail").map(link => <a key={link.icon} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}<a href={en ? site.resumeEnUrl : site.resumeUrl} download>{en ? "Download CV" : "Descargar CV"}</a></nav><Link href="/#home" className="back-to-top">{en ? "Back to top ↑" : "Volver arriba ↑"}</Link></div>
      <div className="footer-identity"><BrandMark /><p className="footer-name" translate="no">Alejo Marcó</p></div>
      <div className="footer-bottom"><p>Córdoba, Argentina</p><p>© {new Date().getFullYear()} Alejo Marcó</p></div>
    </div>
  </footer>
}
