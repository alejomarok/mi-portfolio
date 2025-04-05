"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import Image from "next/image"
import Waves from "@/components/waves"
import { motion } from "framer-motion"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <Waves
          lineColor="#390099"
          backgroundColor="rgba(255, 255, 255, 0.2)"
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
    
    {/* Parte izquierda (contenido) */}
    <div className="flex flex-col space-y-4 order-1 lg:order-1">
      {/* Nombre + Título */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          {t("hero.name")}
        </h1>
        <p className="text-xl text-muted-foreground">{t("hero.title")}</p>
      </div>
      
      {/* Imagen (sólo visible aquí en mobile) */}
      <div className="block lg:hidden">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-full shadow-xl shadow-indigo-200/50 border border-indigo-100 mx-auto"
        >
          <Image
            src="/profile.png"
            alt="Profile"
            width={400}
            height={400}
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Descripción + botones + redes */}
      <p className="max-w-[600px] text-muted-foreground md:text-xl">
        {t("hero.description")}
      </p>
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

    {/* Imagen en escritorio */}
    <div className="hidden lg:flex items-center justify-center order-2">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full shadow-xl shadow-indigo-200/50 border border-indigo-100"
      >
        <Image
          src="/profile.jpeg"
          alt="Profile"
          width={400}
          height={400}
          className="object-cover"
          priority
        />
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
