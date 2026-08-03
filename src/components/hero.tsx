"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, FileDown, MapPin } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import Image from "next/image"
import Waves from "@/components/waves"
import { motion } from "framer-motion"
import DecryptedText from "./descrypted-text"
import { site, socialLinks } from "@/data/site"

const icons = { github: Github, linkedin: Linkedin, mail: Mail }

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="py-10 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <Waves
          lineColor="#390099"
          backgroundColor="rgba(89, 89, 89, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] lg:gap-12 gap-6 items-start">
          <div className="flex flex-col space-y-4 order-1 lg:order-1">
            <div className="space-y-2">
              <DecryptedText
                text={site.name}
                speed={20}
                maxIterations={20}
                characters="ABCD1234!?"
                className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
              <DecryptedText
                text={String(t("hero.title"))}
                speed={80}
                maxIterations={15}
                characters="!@#%&*ABC123"
                className="text-xl text-muted-foreground revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {site.location.es}
              </p>
            </div>

            <div className="block lg:hidden py-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-full shadow-xl shadow-indigo-200/50 border border-indigo-100 mx-auto"
              >
                <Image src="/profile.jpeg" alt="Alejo Marcó" width={400} height={400} className="object-cover" priority />
              </motion.div>
            </div>

            <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("hero.description") as string}</p>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
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

            <div className="flex gap-4 mt-4">
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
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full shadow-xl shadow-indigo-200/50 border border-indigo-100"
            >
              <Image src="/profile.jpeg" alt="Alejo Marcó" width={400} height={400} className="object-cover" priority />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" asChild>
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
