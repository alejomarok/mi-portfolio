"use client"

import { useEffect, useState } from "react"

export interface ToastInput {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

export interface ToastItem extends ToastInput {
  id: string
}

type Listener = (items: ToastItem[]) => void

let toasts: ToastItem[] = []
const listeners = new Set<Listener>()

function emit() {
  listeners.forEach((listener) => listener(toasts))
}

export function dismissToast(id: string) {
  toasts = toasts.filter((item) => item.id !== id)
  emit()
}

export function toast({ title, description, variant = "default" }: ToastInput) {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`
  toasts = [...toasts, { id, title, description, variant }]
  emit()
  setTimeout(() => dismissToast(id), 6000)
  return id
}

export function useToasts() {
  const [state, setState] = useState<ToastItem[]>(toasts)

  useEffect(() => {
    listeners.add(setState)
    return () => {
      listeners.delete(setState)
    }
  }, [])

  return state
}
