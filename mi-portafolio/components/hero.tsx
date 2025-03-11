"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import Image from "next/image"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{t("hero.name")}</h1>
              <p className="text-xl text-muted-foreground">{t("hero.title")}</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("hero.description")}</p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <a href="#contact">{t("hero.contact")}</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">{t("hero.projects")}</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" asChild>
            <a href="#skills" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

