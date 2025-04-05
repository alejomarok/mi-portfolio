"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslation } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Portfolio</span>
        </Link>

        {/* Mobile menu button with animation */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
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

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Theme toggle and language switcher */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu with solid background */}
      {isMenuOpen && (
  <div className="fixed inset-0 top-16 z-50 md:hidden">
    <nav className="container flex flex-col gap-4 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-lg font-medium py-2 transition-colors hover:text-primary"
          onClick={toggleMenu}
        >
          {item.label}
        </Link>
      ))}
      <div className="flex items-center justify-between mt-4 pt-4 border-t">
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
