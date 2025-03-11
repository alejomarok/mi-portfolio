"use client"

import { useState } from "react"
import { useTranslation } from "../lib/i18n"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { toast } from "../hooks/use-toast"

export default function Contact() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    try {
      // Simulate sending email
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Email data:", { name, email, message })

      toast({
        title: t("contact.success.title"),
        description: t("contact.success.message"),
      })
      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.message"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("contact.title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("contact.description")}</p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.form.title")}</CardTitle>
                <CardDescription>{t("contact.form.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name")}</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email")}</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.info.title")}</CardTitle>
                <CardDescription>{t("contact.info.description")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("contact.info.email")}</h3>
                    <p className="text-sm text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("contact.info.phone")}</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("contact.info.location")}</h3>
                    <p className="text-sm text-muted-foreground">New York, NY, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

