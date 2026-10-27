"use client"

import { useRef, useState, type FormEvent } from "react"
import { ArrowUpRight, Check, Copy, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { site, socialLinks } from "@/data/site"
import ScrollReveal from "./scroll-reveal"

export default function Contact({ canSend = false }: { canSend?: boolean }) {
  const { language } = useLanguage()
  const en = language === "en"
  const [status, setStatus] = useState<"idle"|"pending"|"success"|"error"|"draft">("idle")
  const [draftUrl, setDraftUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const feedback = useRef<HTMLParagraphElement>(null)
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "pending") return
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const message = String(data.get("message") || "").trim()
    const url = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio · ${name}`)}&body=${encodeURIComponent(`${name}\n${email}\n\n${message}`)}`
    setDraftUrl(url)
    if (!canSend) {
      setStatus("draft")
      window.location.href = url
      return
    }
    setStatus("pending")
    try {
      const response = await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,email,message})})
      if (!response.ok) throw new Error("Contact request failed")
      setStatus("success")
      form.reset()
    } catch { setStatus("error"); requestAnimationFrame(() => feedback.current?.focus()) }
  }
  async function copyEmail() {
    try { await navigator.clipboard.writeText(site.email); setCopied(true); window.setTimeout(() => setCopied(false),2500) }
    catch { window.location.href = `mailto:${site.email}` }
  }
  return <section id="contact" className="contact-section section-space" aria-labelledby="contact-heading">
    <div className="page-frame contact-layout">
      <div className="contact-copy">
        <ScrollReveal><h2 id="contact-heading">{en ? "Let’s talk about your team" : "Hablemos de tu equipo"}</h2></ScrollReveal>
        <ScrollReveal delay={80}><p className="contact-intro">{en ? "Looking for a Full Stack developer who understands business processes and databases? I’d like to hear what your team needs to solve." : "¿Buscás un desarrollador Full Stack que entienda los procesos de negocio y las bases de datos? Me gustaría conocer qué necesita resolver tu equipo."}</p></ScrollReveal>
        <ScrollReveal delay={140}><div className="email-row"><a href={`mailto:${site.email}`} className="contact-email">{site.email}</a><button onClick={copyEmail} type="button" className="icon-button copy-email" aria-label={copied ? (en ? "Email copied" : "Email copiado") : (en ? "Copy email" : "Copiar email")}>{copied ? <Check size={19} aria-hidden="true"/> : <Copy size={18} aria-hidden="true"/>}</button></div><p className="copy-status" role="status">{copied ? (en ? "Email copied" : "Email copiado") : ""}</p></ScrollReveal>
        <ScrollReveal delay={200}><div className="contact-socials">{socialLinks.filter(link => link.icon !== "mail").map(link => <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer" className="text-link">{link.label}<ArrowUpRight size={16} aria-hidden="true"/></a>)}</div><div className="resume-links"><a href={en ? site.resumeEnUrl : site.resumeUrl} download>{en ? "Download CV · PDF ↓" : "Descargar CV · PDF ↓"}</a><a href={en ? site.resumeEnTextUrl : site.resumeTextUrl} download>{en ? "Plain text version ↓" : "Versión en texto ↓"}</a></div></ScrollReveal>
      </div>
      <ScrollReveal className="contact-form-wrap" delay={100}>
        <form onSubmit={submit} action={`mailto:${site.email}`} method="post" encType="text/plain" className="contact-form">
          <div><label htmlFor="contact-name">{en ? "Your name" : "Tu nombre"}</label><input id="contact-name" name="name" autoComplete="name" maxLength={120} required /></div>
          <div><label htmlFor="contact-email">{en ? "Your email" : "Tu email"}</label><input id="contact-email" name="email" type="email" autoComplete="email" spellCheck={false} maxLength={254} required /></div>
          <div><label htmlFor="contact-message">{en ? "What are you building?" : "¿Qué están construyendo?"}</label><textarea id="contact-message" name="message" rows={4} maxLength={5000} required /></div>
          <button className="button button-ink" type="submit" disabled={status === "pending"}>{status === "pending" ? <><Loader2 className="spinner" size={18} aria-hidden="true"/>{en ? "Sending…" : "Enviando…"}</> : <>{canSend ? (en ? "Send message" : "Enviar mensaje") : (en ? "Open email app" : "Abrir mi correo")}<ArrowUpRight size={18} aria-hidden="true"/></>}</button>
          {!canSend ? <p className="form-note">{en ? "Your email app opens with a ready-to-send draft." : "Se abre tu app de correo con el mensaje preparado."}</p> : null}
          <p ref={feedback} tabIndex={-1} className="form-feedback" role="status" aria-live="polite">
            {status === "success" ? (en ? "Message sent. Thank you for reaching out." : "Mensaje enviado. Gracias por contactarme.") : null}
            {status === "draft" ? (en ? "Continue in your email app to send the message." : "Continuá en tu app de correo para enviar el mensaje.") : null}
            {status === "error" ? (en ? "The message couldn’t be sent. Try again or use email directly." : "No se pudo enviar. Intentá de nuevo o escribime por email.") : null}
            {(status === "draft" || status === "error") && draftUrl ? <> <a href={draftUrl}>{en ? "Open email draft" : "Abrir el borrador"}</a></> : null}
          </p>
        </form>
      </ScrollReveal>
    </div>
  </section>
}
