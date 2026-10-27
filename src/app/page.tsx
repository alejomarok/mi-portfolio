import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"

export default function Home() {
  return <main id="main-content">
    <Hero />
    <Experience />
    <Projects />
    <About />
    <Skills />
    <Education />
    <Contact canSend={Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS)} />
  </main>
}
