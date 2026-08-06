"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode, type Ref } from "react"
import { useReducedMotion } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Stagger delay in ms, useful for related siblings (cards, list items). */
  delay?: number
}

export default function ScrollReveal({ children, as: Tag = "div", className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`transition-reveal ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  )
}
