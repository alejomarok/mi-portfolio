"use client"

import { useTranslation } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t("footer.about.title")}</h3>
            <p className="text-sm text-muted-foreground">{t("footer.about.description")}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t("footer.links.title")}</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#home" className="hover:text-primary">
                {t("nav.home")}
              </a>
              <a href="#skills" className="hover:text-primary">
                {t("nav.skills")}
              </a>
              <a href="#experience" className="hover:text-primary">
                {t("nav.experience")}
              </a>
              <a href="#projects" className="hover:text-primary">
                {t("nav.projects")}
              </a>
              <a href="#contact" className="hover:text-primary">
                {t("nav.contact")}
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t("footer.social.title")}</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:your.email@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

