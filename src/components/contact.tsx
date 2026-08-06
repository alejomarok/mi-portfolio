"use client"

import type React from "react"
import { useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send, Loader2, Github, Linkedin } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { site, socialLinks } from "@/data/site"
import SectionHeading from "./section-heading"

export default function Contact() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        throw new Error("Error sending message")
      }

      toast({
        title: t("contact.success.title") as string,
        description: t("contact.success.message") as string,
      })
      form.reset()
    } catch {
      toast({
        title: t("contact.error.title") as string,
        description: t("contact.error.message") as string,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const linkedin = socialLinks.find((link) => link.icon === "linkedin")
  const github = socialLinks.find((link) => link.icon === "github")

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title={t("contact.title") as string} description={t("contact.description") as string} />
        <div className="mx-auto max-w-5xl mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.form.title") as string}</CardTitle>
                <CardDescription>{t("contact.form.description") as string}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name") as string}</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email") as string}</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.form.message") as string}</Label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("contact.form.sending") as string}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t("contact.form.submit") as string}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.info.title") as string}</CardTitle>
                <CardDescription>{t("contact.info.description") as string}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("contact.info.email") as string}</h3>
                    <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground hover:text-primary">
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("contact.info.location") as string}</h3>
                    <p className="text-sm text-muted-foreground">{site.location.es}</p>
                  </div>
                </div>
                {linkedin && (
                  <div className="flex items-start space-x-4">
                    <Linkedin className="h-6 w-6 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a
                        href={linkedin.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {linkedin.href.replace("https://www.", "")}
                      </a>
                    </div>
                  </div>
                )}
                {github && (
                  <div className="flex items-start space-x-4">
                    <Github className="h-6 w-6 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a
                        href={github.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {github.href.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
