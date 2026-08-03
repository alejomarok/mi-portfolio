"use client"

import { X } from "lucide-react"
import { dismissToast, useToasts } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export function Toaster() {
  const toasts = useToasts()

  if (toasts.length === 0) return null

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2"
    >
      {toasts.map((item) => (
        <div
          key={item.id}
          role="status"
          className={cn(
            "relative flex flex-col gap-1 rounded-lg border bg-card p-4 pr-8 text-card-foreground shadow-lg animate-in fade-in slide-in-from-bottom-2",
            item.variant === "destructive" && "border-destructive/50 bg-destructive text-destructive-foreground",
          )}
        >
          <p className="text-sm font-semibold">{item.title}</p>
          {item.description && <p className="text-sm opacity-90">{item.description}</p>}
          <button
            type="button"
            onClick={() => dismissToast(item.id)}
            aria-label="Dismiss notification"
            className="absolute right-2 top-2 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
