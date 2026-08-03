import type { SkillCategory } from "./types"

// Ordered to foreground the profile's real strengths first: Oracle/legacy
// systems, then databases, then modern full-stack technologies and tooling.
export const skillCategories: SkillCategory[] = [
  {
    id: "enterprise-legacy",
    title: { es: "Sistemas Empresariales y Legacy", en: "Enterprise & Legacy Systems" },
    items: [
      "OpenText Gupta",
      "Centura Team Developer",
      "Oracle PL/SQL",
      "SQLBase",
      "Reportes QRP",
      "Mantenimiento de aplicaciones legacy",
      "Ingeniería inversa",
      "Análisis de incidentes en producción",
      "Generación de etiquetas ZPL e integración con impresoras",
    ],
  },
  {
    id: "databases-cloud",
    title: { es: "Bases de Datos y Cloud", en: "Databases & Cloud" },
    items: [
      "Oracle Database",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Storage",
    ],
  },
  {
    id: "languages",
    title: { es: "Lenguajes", en: "Languages" },
    items: ["JavaScript", "TypeScript", "SQL", "PL/SQL", "Java", "PHP"],
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
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Java y Spring Boot",
      "Desarrollo de lógica de negocio",
      "Autenticación y autorización",
      "Integración con servicios externos",
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas y Flujo de Trabajo", en: "Tools & Workflow" },
    items: [
      "Git",
      "GitHub",
      "GitFlow",
      "Jira",
      "Postman",
      "Axios",
      "Vercel",
      "Visual Studio Code",
      "Testing de APIs",
      "Documentación técnica",
      "Análisis funcional",
      "Code review",
    ],
  },
]
