import type { NavItem, SocialLink } from "./types"

export const site = {
  name: "Alejo Marcó",
  role: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  location: {
    es: "Córdoba, Argentina",
    en: "Córdoba, Argentina",
  },
  email: "alejom1999@gmail.com",
  phone: "+54 3571 662505",
  whatsappUrl: "https://wa.me/5493571662505",
  resumeUrl: "/cv/alejo-marco-fullstack-es.pdf",
  resumeEnUrl: "/cv/alejo-marco-fullstack-en.pdf",
  resumeTextUrl: "/cv/alejo-marco-fullstack-es.txt",
  resumeEnTextUrl: "/cv/alejo-marco-fullstack-en.txt",
}

export const navigation: NavItem[] = [
  { href: "#experience", label: { es: "Experiencia", en: "Experience" } },
  { href: "#projects", label: { es: "Proyectos", en: "Projects" } },
  { href: "#about", label: { es: "Perfil", en: "About" } },
  { href: "#skills", label: { es: "Stack", en: "Stack" } },
]

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/alejomarok", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alejo-marcó-3ba973221", icon: "linkedin" },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
]
