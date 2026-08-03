"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage, useTranslation } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"
import { navigation } from "@/data/site"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState("#home")
  const { language } = useLanguage()
  const { t } = useTranslation()

  useEffect(() => {
    setMounted(true)
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center space-x-2">
          <span className="text-lg font-bold tracking-tight">Alejo Marcó</span>
        </Link>

        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
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

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 md:hidden">
          <nav
            className="container flex flex-col gap-4 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium py-2 transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                {item.label[language]}
              </Link>
            ))}
            <Button asChild onClick={toggleMenu}>
              <Link href="#contact">{t("hero.contact") as string}</Link>
            </Button>
            <div className="flex items-center justify-between mt-2 pt-4 border-t">
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
          </nav>
        </div>
      )}
    </header>
  )
}
