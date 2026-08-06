import type { Certification } from "./types"

// Ordered by visual priority. Only verified training titles are listed —
// no institutions, dates, credential numbers, or URLs are available yet.
export const certifications: Certification[] = [
  {
    id: "oracle-plsql-21c",
    title: {
      es: "Oracle PL/SQL Development using Oracle 21c",
      en: "Oracle PL/SQL Development using Oracle 21c",
    },
    category: "database",
    featured: true,
  },
  {
    id: "javascript-specialization",
    title: { es: "Especialización en JavaScript", en: "JavaScript Specialization" },
    category: "language",
    featured: true,
  },
  {
    id: "backend-nodejs",
    title: { es: "Desarrollo Backend con Node.js", en: "Backend Development with Node.js" },
    category: "backend",
    featured: true,
  },
  {
    id: "sql-databases",
    title: { es: "Bases de Datos SQL", en: "SQL Databases" },
    category: "database",
    featured: true,
  },
  {
    id: "web-html-css",
    title: { es: "Desarrollo Web con HTML y CSS", en: "Web Development with HTML and CSS" },
    category: "frontend",
  },
  {
    id: "manual-qa-testing",
    title: { es: "Manual QA Testing", en: "Manual QA Testing" },
    category: "testing",
  },
  {
    id: "javascript",
    title: { es: "JavaScript", en: "JavaScript" },
    category: "language",
  },
]
