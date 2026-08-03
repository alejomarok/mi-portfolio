import type { MethodologyStep } from "./types"

export const methodologySteps: MethodologyStep[] = [
  {
    id: "understand",
    title: { es: "Entender el contexto de negocio", en: "Understand the business context" },
    description: {
      es: "Antes de tocar código, entiendo para quién es el sistema, qué proceso de negocio sostiene y qué pasa si algo falla.",
      en: "Before touching code, I understand who the system is for, what business process it supports, and what happens if something breaks.",
    },
  },
  {
    id: "analyze",
    title: { es: "Analizar el sistema existente y sus dependencias", en: "Analyze the existing system and dependencies" },
    description: {
      es: "Reviso código, base de datos y flujos reales para mapear cómo funciona el sistema hoy, más allá de lo que dice la documentación.",
      en: "I review code, database structure, and real flows to map how the system actually works today, beyond what documentation says.",
    },
  },
  {
    id: "risks",
    title: { es: "Identificar riesgos y casos límite", en: "Identify risks and edge cases" },
    description: {
      es: "En sistemas maduros, el riesgo suele estar en lo que no se ve: integraciones, reportes o procesos batch que dependen de un comportamiento puntual.",
      en: "In mature systems, risk usually lives in what isn't obvious: integrations, reports, or batch processes that depend on very specific behavior.",
    },
  },
  {
    id: "design",
    title: { es: "Diseñar una solución mantenible", en: "Design a maintainable solution" },
    description: {
      es: "Priorizo soluciones que otra persona pueda entender y mantener después, no solo que funcionen hoy.",
      en: "I prioritize solutions that someone else can understand and maintain later, not just ones that work today.",
    },
  },
  {
    id: "implement",
    title: { es: "Implementar y probar con cuidado", en: "Implement and test carefully" },
    description: {
      es: "Implemento de forma incremental y pruebo contra los casos reales del negocio, no solo el camino feliz.",
      en: "I implement incrementally and test against real business cases, not just the happy path.",
    },
  },
  {
    id: "validate",
    title: { es: "Validar con usuarios o stakeholders", en: "Validate with users or stakeholders" },
    description: {
      es: "Antes de dar algo por terminado, confirmo con quien usa el sistema que la solución resuelve el problema real.",
      en: "Before calling something done, I confirm with the people who use the system that the solution solves the real problem.",
    },
  },
  {
    id: "support",
    title: { es: "Acompañar el despliegue y la post-producción", en: "Support deployment and post-production behavior" },
    description: {
      es: "Sigo de cerca el comportamiento del sistema después de un cambio, especialmente en procesos críticos.",
      en: "I closely monitor the system's behavior after a change, especially for critical processes.",
    },
  },
  {
    id: "document",
    title: { es: "Documentar los hallazgos relevantes", en: "Document the relevant findings" },
    description: {
      es: "Dejo registro de lo que aprendí sobre el sistema, para que el próximo análisis parta de un poco menos de cero.",
      en: "I leave a record of what I learned about the system, so the next analysis starts from a little less zero.",
    },
  },
]
