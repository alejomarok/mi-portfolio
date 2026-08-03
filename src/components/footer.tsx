"use client"

import { useTranslation, useLanguage } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { navigation, socialLinks, site } from "@/data/site"

const icons = { github: Github, linkedin: Linkedin, mail: Mail }

export default function Footer() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t("footer.about.title") as string}</h3>
            <p className="text-sm text-muted-foreground">{t("footer.about.description") as string}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t("footer.links.title") as string}</h3>
            <nav className="flex flex-col space-y-2 text-sm" aria-label="Footer navigation">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-primary">
                  {item.label[language]}
                </a>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t("footer.social.title") as string}</h3>
            <div className="flex space-x-2">
              {socialLinks.map((link) => {
                const Icon = icons[link.icon]
                return (
                  <Button key={link.label} variant="ghost" size="icon" asChild>
                    <a
                      href={link.href}
                      target={link.icon === "mail" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {site.name} — {t("footer.copyright") as string}
          </p>
        </div>
      </div>
    </footer>
  )
}
