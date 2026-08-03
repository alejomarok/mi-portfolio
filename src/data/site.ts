import type { NavItem, SocialLink } from "./types"

export const site = {
  name: "Alejo Marcó",
  role: {
    es: "Líder Técnico y Desarrollador de Software",
    en: "Technical Lead & Software Developer",
  },
  location: {
    es: "Córdoba, Argentina",
    en: "Córdoba, Argentina",
  },
  email: "alejom1999@gmail.com",
  /**
   * TODO: copy the real CV into public/cv-alejo-marco.pdf — the download
   * button is wired to this path but the file does not exist yet.
   */
  resumeUrl: "/cv-alejo-marco.pdf",
}

export const navigation: NavItem[] = [
  { href: "#home", label: { es: "Inicio", en: "Home" } },
  { href: "#about", label: { es: "Sobre mí", en: "About" } },
  { href: "#experience", label: { es: "Experiencia", en: "Experience" } },
  { href: "#projects", label: { es: "Proyectos", en: "Projects" } },
  { href: "#skills", label: { es: "Habilidades", en: "Skills" } },
  { href: "#contact", label: { es: "Contacto", en: "Contact" } },
]

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/alejomarok", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alejo-marcó-3ba973221", icon: "linkedin" },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
]
