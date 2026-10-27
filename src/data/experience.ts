import type { ExperienceItem, Localized } from "./types"

export const professionalHighlights: {title: Localized<string>; description: Localized<string>}[] = [
  {
    title: {es:"Oracle y lógica de negocio", en:"Oracle & business logic"},
    description: {es:"Desarrollo y optimización de consultas, procedimientos, funciones y paquetes en SQL y PL/SQL. Datos y reglas que sostienen los procesos administrativos de las empresas.", en:"SQL and PL/SQL query, procedure, function, and package development and optimization. Data and rules supporting business administration."},
  },
  {
    title: {es:"Liderazgo técnico", en:"Technical leadership"},
    description: {es:"Guía al equipo, revisión de código y análisis funcional. Trabajo con desarrolladores, soporte y clientes para convertir requerimientos en soluciones mantenibles.", en:"Team guidance, code reviews, and functional analysis. Working with developers, support teams, and clients to turn requirements into maintainable solutions."},
  },
  {
    title: {es:"Resolución en producción", en:"Production problem solving"},
    description: {es:"Investigación de incidentes, análisis de causas y dependencias, implementación de mejoras y validación de cambios sobre software empresarial crítico.", en:"Incident investigation, root-cause and dependency analysis, improvements, and change validation in business-critical software."},
  },
  {
    title: {es:"Ingeniería inversa y modernización", en:"Reverse engineering & modernization"},
    description: {es:"Comprensión de sistemas Centura y Gupta con 20 a 30 años de historia y documentación limitada. Modernización gradual de áreas seleccionadas con React.", en:"Understanding Centura and Gupta systems with 20 to 30 years of history and limited documentation. Gradual modernization of selected areas with React."},
  },
]

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
