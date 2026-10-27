"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/i18n"
import { navigation } from "@/data/site"
import BrandMark from "./brand-mark"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const { resolvedTheme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const en = language === "en"
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus() }
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [open])
  return <header className="site-header">
    <a href="#main-content" className="skip-link">{en ? "Skip to content" : "Ir al contenido"}</a>
    <div className="page-frame header-inner">
      <Link href="/" className="wordmark" aria-label={en ? "Alejo Marcó, home" : "Alejo Marcó, inicio"} onClick={() => setOpen(false)}><BrandMark /></Link>
      <nav className="desktop-nav" aria-label={en ? "Main navigation" : "Navegación principal"}>
        {navigation.map(item => <Link key={item.href} href={`/${item.href}`}>{item.label[language]}</Link>)}
      </nav>
      <div className="header-actions">
        <button className="language-button" onClick={() => setLanguage(en ? "es" : "en")} aria-label={en ? "Cambiar a español" : "Switch to English"}>
          <span lang="es" className={!en ? "selected-language" : ""}>ES</span><span aria-hidden="true">/</span><span lang="en" className={en ? "selected-language" : ""}>EN</span>
        </button>
        <button className="icon-button theme-toggle" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label={en ? "Toggle color theme" : "Cambiar tema de color"}>
          <Sun className="sun-icon" size={18} aria-hidden="true" /><Moon className="moon-icon" size={18} aria-hidden="true" />
        </button>
        <Link className="header-contact" href="/#contact">{en ? "Let’s talk" : "Hablemos"}</Link>
        <button ref={toggle} className="icon-button mobile-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? (en ? "Close menu" : "Cerrar menú") : (en ? "Open menu" : "Abrir menú")} onClick={() => setOpen(!open)}>
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
    </div>
    {open ? <nav id="mobile-navigation" className="mobile-navigation page-frame" aria-label={en ? "Mobile navigation" : "Navegación móvil"}>
      {navigation.map(item => <Link key={item.href} href={`/${item.href}`} onClick={() => setOpen(false)}>{item.label[language]}</Link>)}
      <Link href="/#contact" onClick={() => setOpen(false)}>{en ? "Let’s talk" : "Hablemos"}</Link>
    </nav> : null}
  </header>
}
