import type { ExperienceItem } from "./types"

export const experience: ExperienceItem[] = [
  {
    id: "recursos-informaticos",
    role: {
      es: "Líder Técnico / Analista Programador",
      en: "Technical Lead / Analyst Programmer",
    },
    company: "Recursos Informáticos",
    location: { es: "Córdoba, Argentina", en: "Córdoba, Argentina" },
    period: { es: "2023 — Presente", en: "2023 — Present" },
    summary: {
      es: "Combino liderazgo técnico, desarrollo y análisis funcional sobre software empresarial crítico construido con Centura y OpenText Gupta Team Developer, con módulos y aplicaciones de entre 20 y 30 años de antigüedad. Buena parte del trabajo consiste en analizar sistemas con documentación limitada o inexistente, entender su comportamiento real a través del código, la base de datos Oracle y los flujos de producción, y proponer mejoras sin poner en riesgo procesos de los que dependen múltiples empresas.",
      en: "I combine technical leadership, development, and functional analysis on business-critical software built with Centura and OpenText Gupta Team Developer, including modules and applications between 20 and 30 years old. Much of the work involves analyzing systems with limited or nonexistent documentation, understanding their real behavior through code, the Oracle database, and production workflows, and proposing improvements without putting processes that multiple companies depend on at risk.",
    },
    responsibilityGroups: [
      {
        title: {
          es: "Análisis de sistemas legacy y reingeniería",
          en: "Legacy system analysis & reverse engineering",
        },
        items: {
          es: [
            "Análisis de sistemas con documentación limitada o inexistente para entender su comportamiento real",
            "Ingeniería inversa de código legacy, lógica de base de datos, reglas de negocio, integraciones y dependencias",
            "Análisis de riesgos y dependencias antes de modificar sistemas maduros en producción",
            "Adaptación de soluciones compartidas entre distintas empresas y contextos de negocio",
          ],
          en: [
            "Analysis of systems with limited or nonexistent documentation to understand their real behavior",
            "Reverse engineering of legacy code, database logic, business rules, integrations, and dependencies",
            "Risk and dependency analysis before changing mature production systems",
            "Adaptation of shared solutions across different companies and business contexts",
          ],
        },
      },
      {
        title: {
          es: "Base de datos Oracle y lógica de negocio",
          en: "Oracle database & business logic",
        },
        items: {
          es: [
            "Desarrollo en Oracle con SQL y PL/SQL",
            "Optimización y mantenimiento de consultas, procedimientos, funciones, paquetes y lógica de negocio",
            "Trabajo con reportes, procesos de impresión, exportación de datos, etiquetas y flujos administrativos",
          ],
          en: [
            "Oracle database development using SQL and PL/SQL",
            "Optimization and maintenance of queries, procedures, functions, packages, and business logic",
            "Work with reports, printing processes, data exports, labels, and administrative workflows",
          ],
        },
      },
      {
        title: {
          es: "Liderazgo técnico y colaboración",
          en: "Technical leadership & collaboration",
        },
        items: {
          es: [
            "Liderazgo técnico de un equipo de desarrollo que trabaja con aplicaciones Centura y Gupta Team Developer",
            "Revisión de código y guía técnica para otros desarrolladores",
            "Colaboración con analistas, desarrolladores, soporte, líderes de proyecto y clientes",
            "Análisis funcional y técnico de nuevos requerimientos",
          ],
          en: [
            "Technical leadership of a development team working with Centura and Gupta Team Developer applications",
            "Code reviews and technical guidance for other developers",
            "Collaboration with analysts, developers, support teams, project leaders, and clients",
            "Functional and technical analysis of new requirements",
          ],
        },
      },
      {
        title: {
          es: "Producción y modernización",
          en: "Production support & modernization",
        },
        items: {
          es: [
            "Investigación y resolución de incidentes de producción",
            "Diseño e implementación de mejoras en módulos existentes",
            "Soporte técnico durante testing, despliegue y post-implementación",
            "Modernización progresiva de áreas seleccionadas del sistema hacia tecnologías web modernas como React",
          ],
          en: [
            "Investigation and resolution of production incidents",
            "Design and implementation of improvements in existing modules",
            "Technical support during testing, deployment, and post-implementation stages",
            "Progressive modernization of selected system areas toward modern web technologies such as React",
          ],
        },
      },
    ],
    stack: [
      "Oracle PL/SQL",
      "SQL",
      "Centura / OpenText Gupta Team Developer",
      "SQLBase",
      "React (modernización)",
      "Jira",
      "Git",
    ],
  },
]
