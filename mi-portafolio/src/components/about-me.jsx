import { useTranslation } from "../lib/i18n"

export default function AboutMe() {
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
        <div className="mx-auto max-w-3xl mt-12 space-y-6">
          <p className="text-lg">{t("about.paragraph1")}</p>
          <p className="text-lg">{t("about.paragraph2")}</p>
          <p className="text-lg">{t("about.paragraph3")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-bold mb-3">{t("about.education.title")}</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium">{t("about.education.degree1")}</div>
                  <div className="text-muted-foreground">{t("about.education.school1")}</div>
                  <div className="text-sm text-muted-foreground">{t("about.education.year1")}</div>
                </li>
                <li>
                  <div className="font-medium">{t("about.education.degree2")}</div>
                  <div className="text-muted-foreground">{t("about.education.school2")}</div>
                  <div className="text-sm text-muted-foreground">{t("about.education.year2")}</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{t("about.interests.title")}</h3>
              <ul className="space-y-2">
                <li>{t("about.interests.item1")}</li>
                <li>{t("about.interests.item2")}</li>
                <li>{t("about.interests.item3")}</li>
                <li>{t("about.interests.item4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

