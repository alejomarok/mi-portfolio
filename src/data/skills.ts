import type { SkillCategory } from "./types"

// Six balanced categories (3x2 desktop grid). Badges stay to short,
// identifiable technologies; broader professional practices live in each
// category's optional `capabilities` list, rendered as a compact secondary row.
export const skillCategories: SkillCategory[] = [
  {
    id: "oracle-legacy",
    title: { es: "Oracle y Sistemas Legacy", en: "Oracle & Legacy Systems" },
    items: [
      "Oracle PL/SQL",
      "Oracle Database",
      "OpenText Gupta",
      "Centura Team Developer",
      "SQLBase",
      "Reportes QRP",
      "ZPL",
      "Sistemas Legacy",
    ],
    capabilities: {
      es: ["Ingeniería inversa", "Análisis de incidentes en producción", "Modernización de sistemas legacy"],
      en: ["Reverse engineering", "Production incident analysis", "Legacy modernization"],
    },
  },
  {
    id: "backend",
    title: { es: "Backend y APIs", en: "Backend & APIs" },
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Java",
      "Spring Boot",
      "Autenticación",
      "Autorización",
      "Integraciones externas",
    ],
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Vite",
      "Diseño responsivo",
    ],
  },
  {
    id: "databases-cloud",
    title: { es: "Bases de Datos y Cloud", en: "Databases & Cloud" },
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Cloud Firestore",
      "Firebase Authentication",
      "Firebase Storage",
      "Vercel",
    ],
  },
  {
    id: "languages",
    title: { es: "Lenguajes", en: "Languages" },
    items: ["JavaScript", "TypeScript", "SQL", "PL/SQL", "Java", "PHP"],
  },
  {
    id: "tools",
    title: { es: "Herramientas y Prácticas Profesionales", en: "Tools & Professional Practices" },
    items: [
      "Git",
      "GitHub",
      "GitFlow",
      "Jira",
      "Postman",
      "Axios",
      "Visual Studio Code",
      "Testing de APIs",
      "Code Review",
      "Análisis funcional",
      "Documentación técnica",
    ],
  },
]
