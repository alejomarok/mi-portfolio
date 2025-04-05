"use client"

import { useTranslation } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Palette, Server, Smartphone, Terminal } from "lucide-react"
import PixelCard from './pixelcard';

export default function Skills() {
  const { t } = useTranslation()

  const skills = [
    {
      category: t("skills.frontend"),
      icon: <Code className="h-8 w-8 mb-2" />,
      items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 justify-items-center">
        {skills.map((skill, index) => (
          <PixelCard
  key={index}
  variant="blue"
  className="relative overflow-hidden min-h-[280px] sm:min-h-[300px] transform transition-transform duration-300 hover:scale-[1.03]"
>

 <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4 md:p-6">
   {skill.icon}
   <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">{skill.category}</h3>
   <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
     {skill.items.map((item, i) => (
       <li key={i} className="flex items-center justify-center">
         {item}
       </li>
     ))}
   </ul>
 </div>
</PixelCard>

))}


        </div>
      </div>
    </section>
  )
}

