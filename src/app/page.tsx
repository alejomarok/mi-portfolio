import Hero from "@/components/hero"
import About from "@/components/about"
import Strengths from "@/components/strengths"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Methodology from "@/components/methodology"
import Education from "@/components/education"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Strengths />
      <Experience />
      <Projects />
      <Skills />
      <Methodology />
      <Education />
      <Contact />
    </main>
  )
}
