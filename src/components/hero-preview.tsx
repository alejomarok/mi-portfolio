"use client"

import Image from "next/image"
import { useRef, type PointerEvent } from "react"
import { useLanguage } from "@/lib/i18n"

export default function HeroPreview({paused}:{paused:boolean}) {
  const { language } = useLanguage()
  const en = language === "en"
  const stage = useRef<HTMLDivElement>(null)

  function resetTilt() {
    stage.current?.style.setProperty("--preview-x", "0deg")
    stage.current?.style.setProperty("--preview-y", "0deg")
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (paused || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const element = stage.current
    if (!element) return
    const bounds = element.getBoundingClientRect()
    element.style.setProperty("--preview-x", `${(0.5 - (event.clientY - bounds.top) / bounds.height) * 5}deg`)
    element.style.setProperty("--preview-y", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 7}deg`)
  }

  return <div ref={stage} className="hero-preview" data-motion-paused={paused} onPointerMove={move} onPointerLeave={resetTilt}>
    <div className="hero-preview-float">
      <div className="hero-preview-link">
        <Image src="/profile-cutout.png" alt={en ? "Portrait of Alejo Marcó" : "Retrato de Alejo Marcó"} width={1254} height={1254} priority sizes="(max-width: 767px) 90vw, 42vw" className="hero-portrait" />
      </div>
    </div>
  </div>
}
