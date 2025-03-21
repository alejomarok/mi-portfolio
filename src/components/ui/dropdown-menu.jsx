"use client"

import React, { createContext, useContext, useState } from "react"
import { cn } from "../../lib/utils"

const DropdownMenuContext = createContext({})

const DropdownMenu = ({ children, open, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(open || false)

  const handleOpenChange = (open) => {
    setIsOpen(open)
    onOpenChange?.(open)
  }

  return (
    <DropdownMenuContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </DropdownMenuContext.Provider>
  )
}

const DropdownMenuTrigger = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const { open, onOpenChange } = useContext(DropdownMenuContext)
  const Comp = asChild ? "div" : "button" 

  return (
    <Comp
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center justify-center rounded-md text-sm font-medium",
        className,
      )}
      onClick={() => onOpenChange(!open)}
      {...props}
    />
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef(({ className, align = "center", ...props }, ref) => {
    const { open, onOpenChange } = useContext(DropdownMenuContext) // Aquí se obtiene el contexto
  
    if (!open) return null
  
    return (
      <div className="relative z-50">
        <div
          className="fixed inset-0"
          onClick={() => onOpenChange(false)} // Llamamos a onOpenChange directamente aquí
        />
        <div
          ref={ref}
          className={cn(
            "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
            align === "end" ? "right-0" : "left-0",
            className,
          )}
          {...props}
        />
      </div>
    )
  })
  DropdownMenuContent.displayName = "DropdownMenuContent"
  

const DropdownMenuItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground",
        className,
      )}
      {...props}
    />
  )
})
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
})
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator }

