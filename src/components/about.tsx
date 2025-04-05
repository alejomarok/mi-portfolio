"use client"

import { useTranslation } from "@/lib/i18n"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("about.title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("about.subtitle")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/profile.png"
              alt="About Me"
              width={600}
              height={600}
              className="object-cover w-full h-full transition-transform img-hover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{t("about.greeting")}</h3>
            <p className="text-lg">{t("about.bio1")}</p>
            <p className="text-lg">{t("about.bio2")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">{t("about.details.title")}</h4>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">{t("about.details.name.label")}: </span>
                    <span>{t("about.details.name.value")}</span>
                  </li>
                  <li>
                    <span className="font-medium">{t("about.details.age.label")}: </span>
                    <span>{t("about.details.age.value")}</span>
                  </li>
                  <li>
                    <span className="font-medium">{t("about.details.location.label")}: </span>
                    <span>{t("about.details.location.value")}</span>
                  </li>
                  <li>
                    <span className="font-medium">{t("about.details.experience.label")}: </span>
                    <span>{t("about.details.experience.value")}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">{t("about.interests.title")}</h4>
                <ul className="space-y-2">
                  <li>{t("about.interests.item1")}</li>
                  <li>{t("about.interests.item2")}</li>
                  <li>{t("about.interests.item3")}</li>
                  <li>{t("about.interests.item4")}</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild>
                <a href="#" download>
                  <FileText className="mr-2 h-4 w-4" />
                  {t("about.downloadCV")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

