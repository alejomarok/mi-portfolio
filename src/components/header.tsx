"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage, useTranslation } from "@/lib/i18n"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { navigation } from "@/data/site"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState("#home")
  const { language } = useLanguage()
  const { t } = useTranslation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b))
          setActiveHref(`#${topMost.target.id}`)
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock background scroll and allow Escape-to-close while the mobile menu is open.
  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    firstMenuLinkRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  const headerBar = (
    <header
      className={`sticky top-0 z-40 w-full transition-[background-color,box-shadow,border-color] duration-200 ${
        isScrolled
          ? "border-b bg-background/90 shadow-sm backdrop-blur"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center space-x-2">
          <span className="text-lg font-bold tracking-tight">Alejo Marcó</span>
        </Link>

        <div className="flex md:hidden">
          <Button
            ref={menuButtonRef}
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeHref === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label[language]}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button size="sm" asChild>
            <Link href="#contact">{t("hero.contact") as string}</Link>
          </Button>
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )

  // Rendered via portal (not nested inside <header>): the header's
  // `backdrop-blur` establishes a containing block for `position: fixed`
  // descendants (same as `transform`/`filter` would), which was collapsing
  // this panel against the header's own 64px height instead of the
  // viewport. Portaling to <body> sidesteps that entirely.
  const mobilePanel = mounted
    ? createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: "easeOut" }}
              className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-background md:hidden"
            >
              <nav className="container flex flex-col gap-1 px-4 py-6" aria-label="Mobile navigation links">
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    ref={index === 0 ? firstMenuLinkRef : undefined}
                    href={item.href}
                    aria-current={activeHref === item.href ? "page" : undefined}
                    className={`rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-surface-muted hover:text-primary ${
                      activeHref === item.href ? "text-primary" : "text-foreground"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label[language]}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-3" onClick={closeMenu}>
                  <Link href="#contact">{t("hero.contact") as string}</Link>
                </Button>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <LanguageSwitcher />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Toggle theme"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )
    : null

  return (
    <>
      {headerBar}
      {mobilePanel}
    </>
  )
}
