import Hero from "../components/hero"
import AboutMe from "../components/about-me"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Contact from "../components/contact"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

