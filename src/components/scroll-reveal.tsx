"use client"

import { useEffect, useRef, type ElementType, type ReactNode, type Ref } from "react"

interface ScrollRevealProps { children: ReactNode; as?: ElementType; className?: string; delay?: number }

export default function ScrollReveal({ children, as: Tag = "div", className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        node.animate([{ opacity: 0.55, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 760, delay, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" })
        observer.unobserve(node)
      }
    }, { threshold: 0.08 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [delay])
  return <Tag ref={ref as Ref<HTMLElement>} className={className}>{children}</Tag>
}
