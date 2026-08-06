import type { ProjectCoverVariant } from "@/data/types"

const gradients: Record<ProjectCoverVariant, string> = {
  primary: "from-cyan-500/20 via-cyan-400/8 to-background",
  slate: "from-slate-500/20 via-slate-400/8 to-background",
  warm: "from-stone-500/20 via-stone-400/8 to-background",
}

const textColors: Record<ProjectCoverVariant, string> = {
  primary: "text-cyan-700 dark:text-cyan-400",
  slate: "text-slate-600 dark:text-slate-300",
  warm: "text-stone-600 dark:text-stone-300",
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
        className="absolute inset-0 opacity-30"
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
