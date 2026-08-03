"use client"

import React, { createContext, useContext, useState } from "react"
import { cn } from "@/lib/utils"

interface DropdownMenuContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DropdownMenuContext = createContext<DropdownMenuContextValue>({
  open: false,
  onOpenChange: () => {},
})

interface DropdownMenuProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const DropdownMenu = ({ children, open, onOpenChange }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(open || false)

  const handleOpenChange = (next: boolean) => {
    setIsOpen(next)
    onOpenChange?.(next)
  }

  return (
    <DropdownMenuContext.Provider value={{ open: open ?? isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </DropdownMenuContext.Provider>
  )
}

interface DropdownMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const { open, onOpenChange } = useContext(DropdownMenuContext)
    // Cast to a single element type so JSX prop-checking doesn't choke on
    // the div/button union — both render fine at runtime for this trigger.
    const Comp = (asChild ? "div" : "button") as "button"

    return (
      <Comp
        ref={ref as never}
        className={cn(
          "flex cursor-default select-none items-center justify-center rounded-md text-sm font-medium",
          className,
        )}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => onOpenChange(!open)}
        {...props}
      />
    )
  },
)
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end"
}

const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, align = "center", ...props }, ref) => {
    const { open, onOpenChange } = useContext(DropdownMenuContext)

    if (!open) return null

    return (
      <div className="relative z-50">
        <div className="fixed inset-0" onClick={() => onOpenChange(false)} />
        <div
          ref={ref}
          role="menu"
          className={cn(
            "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
            align === "end" ? "right-0" : "left-0",
            className,
          )}
          {...props}
        />
      </div>
    )
  },
)
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="menuitem"
        tabIndex={0}
        className={cn(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground",
          className,
        )}
        {...props}
      />
    )
  },
)
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
  },
)
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator }
