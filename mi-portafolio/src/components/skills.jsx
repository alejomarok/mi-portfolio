import { useTranslation } from "../lib/i18n"
import { Card, CardContent } from "./ui/card"
import { Code, Database, Palette, Server, Smartphone, Terminal } from "lucide-react"

export default function Skills() {
  const { t } = useTranslation()

  const skills = [
    {
      category: t("skills.frontend"),
      icon: <Code className="h-8 w-8 mb-2" />,
      items: ["HTML/CSS", "JavaScript", "React", "Redux", "Tailwind CSS"],
    },
    {
      category: t("skills.backend"),
      icon: <Server className="h-8 w-8 mb-2" />,
      items: ["Node.js", "Express", "Python", "Django", "PHP"],
    },
    {
      category: t("skills.database"),
      icon: <Database className="h-8 w-8 mb-2" />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
      category: t("skills.mobile"),
      icon: <Smartphone className="h-8 w-8 mb-2" />,
      items: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      category: t("skills.design"),
      icon: <Palette className="h-8 w-8 mb-2" />,
      items: ["UI/UX", "Figma", "Adobe XD", "Photoshop", "Illustrator"],
    },
    {
      category: t("skills.other"),
      icon: <Terminal className="h-8 w-8 mb-2" />,
      items: ["Git", "Docker", "CI/CD", "AWS", "Vercel"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("skills.title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("skills.description")}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  {skill.icon}
                  <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center justify-center">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

