"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, FileDown, MapPin } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import Image from "next/image"
import Waves from "@/components/waves"
import { motion, useReducedMotion } from "framer-motion"
import { useTheme } from "next-themes"
import DecryptedText from "./descrypted-text"
import { site, socialLinks } from "@/data/site"

const icons = { github: Github, linkedin: Linkedin, mail: Mail }

export default function Hero() {
  const { t } = useTranslation()
  const { resolvedTheme } = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const waveColor = resolvedTheme === "dark" ? "hsl(189 70% 60% / 0.3)" : "hsl(189 70% 30% / 0.25)"

  const photoAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: "easeOut" },
      }

  return (
    <section id="home" className="py-12 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <Waves
          lineColor={waveColor}
          backgroundColor="transparent"
          waveSpeedX={0.012}
          waveSpeedY={0.006}
          waveAmpX={24}
          waveAmpY={12}
          friction={0.92}
          tension={0.008}
          maxCursorMove={100}
          xGap={16}
          yGap={40}
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px] lg:gap-12 gap-8 items-start">
          <div className="flex flex-col space-y-5 order-1 lg:order-1">
            <div className="space-y-3">
              <DecryptedText
                text={site.name}
                speed={20}
                maxIterations={20}
                characters="ABCD1234!?"
                className="text-heading-hero font-bold tracking-tight"
                parentClassName="all-letters"
                encryptedClassName="encrypted text-muted-foreground"
              />
              <DecryptedText
                text={String(t("hero.title"))}
                speed={80}
                maxIterations={15}
                characters="!@#%&*ABC123"
                className="text-lg text-muted-foreground md:text-xl"
                parentClassName="all-letters block"
                encryptedClassName="encrypted text-muted-foreground/60"
              />
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {site.location.es}
              </p>
            </div>

            <div className="block lg:hidden py-4">
              <motion.div
                {...photoAnimation}
                className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-full border shadow-lg mx-auto"
              >
                <Image src="/profile.jpeg" alt="Alejo Marcó" width={400} height={400} className="object-cover" priority />
              </motion.div>
            </div>

            <p className="max-w-[600px] text-muted-foreground md:text-lg leading-relaxed">
              {t("hero.description") as string}
            </p>

            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <a href="#contact">{t("hero.contact") as string}</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">{t("hero.projects") as string}</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={site.resumeUrl} download>
                  <FileDown className="mr-2 h-4 w-4" />
                  {t("hero.resume") as string}
                </a>
              </Button>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((link) => {
                const Icon = icons[link.icon]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.icon === "mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <Button variant="ghost" size="icon">
                      <Icon className="h-5 w-5" />
                    </Button>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center order-2">
            <motion.div
              {...photoAnimation}
              className="relative aspect-square w-full max-w-[380px] overflow-hidden rounded-full border shadow-lg"
            >
              <Image src="/profile.jpeg" alt="Alejo Marcó" width={400} height={400} className="object-cover" priority />
            </motion.div>
          </div>
        </div>

        <div className="hidden sm:flex justify-center mt-14">
          <Button variant="ghost" size="icon" asChild>
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
