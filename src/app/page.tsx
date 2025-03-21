import type { Metadata } from "next"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Professional portfolio showcasing skills, experience and projects",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Skills />
      <Experience />
       <Projects />
      <Contact /> 
    </main>
  )
}
