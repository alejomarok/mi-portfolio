import type { ProjectCoverVariant } from "@/data/types"

const gradients: Record<ProjectCoverVariant, string> = {
  indigo: "from-indigo-500/25 via-indigo-400/10 to-background",
  teal: "from-teal-500/25 via-teal-400/10 to-background",
  amber: "from-amber-500/25 via-amber-400/10 to-background",
}

const textColors: Record<ProjectCoverVariant, string> = {
  indigo: "text-indigo-600 dark:text-indigo-400",
  teal: "text-teal-600 dark:text-teal-400",
  amber: "text-amber-600 dark:text-amber-400",
}

export default function ProjectCover({ name, variant }: { name: string; variant: ProjectCoverVariant }) {
  const initials = name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${gradients[variant]}`}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <span className={`relative text-4xl font-bold tracking-tight ${textColors[variant]}`}>{initials}</span>
    </div>
  )
}
