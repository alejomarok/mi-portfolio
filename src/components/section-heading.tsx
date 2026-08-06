import ScrollReveal from "./scroll-reveal"

interface SectionHeadingProps {
  title: string
  description?: string
  align?: "center" | "left"
}

export default function SectionHeading({ title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <ScrollReveal as="h2" className="text-heading-section font-bold tracking-tight">
        {title}
      </ScrollReveal>
      {description && (
        <ScrollReveal as="p" delay={80} className="text-base text-muted-foreground md:text-lg">
          {description}
        </ScrollReveal>
      )}
    </div>
  )
}
