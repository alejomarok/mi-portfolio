import type { ProjectItem } from "./types"

export const projects: ProjectItem[] = [
  {
    "id": "chaioboutique",
    "slug": "chaioboutique",
    "name": "Chaioboutique",
    "subtitle": {
      "es": "Tienda, inventario y punto de venta conectados",
      "en": "Connected storefront, inventory, and point of sale"
    },
    "category": {
      "es": "E-commerce",
      "en": "E-commerce"
    },
    "discipline": {
      "es": "Gestión comercial y e-commerce",
      "en": "Retail management & e-commerce"
    },
    "shortDescription": {
      "es": "Un sistema de gestión comercial que conecta catálogo, inventario, pedidos y punto de venta con la tienda online de una marca de moda.",
      "en": "A retail management system connecting catalog, inventory, orders, and point of sale with a fashion brand’s online store."
    },
    "problem": {
      "es": "La venta online, el stock y la operación de un local necesitan compartir información sin fragmentar la experiencia de clientes y administradores.",
      "en": "Online sales, stock, and in-store operations need shared information without fragmenting the customer and administrator experience."
    },
    "solution": {
      "es": "Una aplicación modular con tienda pública, cuentas de clientes, administración y punto de venta. La identidad editorial de la marca acompaña el recorrido desde la colección hasta el checkout.",
      "en": "A modular application with a public storefront, customer accounts, administration, and point of sale. The brand’s editorial identity follows the journey from collection to checkout."
    },
    "users": {
      "es": "Clientes de la tienda, personal de ventas y administradores del negocio.",
      "en": "Store customers, sales staff, and business administrators."
    },
    "role": {
      "es": "Desarrollo de la experiencia de tienda y de los flujos de gestión: arquitectura modular en Next.js, interfaces de catálogo, cuentas, inventario y venta, integradas con la capa de datos y autenticación.",
      "en": "Development of the storefront experience and management flows: modular Next.js architecture, catalog, account, inventory, and sales interfaces integrated with data and authentication."
    },
    "contribution": {
      "es": "Desarrollo Full Stack y arquitectura de producto",
      "en": "Full Stack development & product architecture"
    },
    "features": {
      "es": [
        "Tienda pública y catálogo",
        "Cuentas de clientes",
        "Inventario y administración",
        "Punto de venta",
        "Flujo de checkout e integración con Mercado Pago",
        "Validación de formularios en cliente y servidor"
      ],
      "en": [
        "Public storefront and catalog",
        "Customer accounts",
        "Inventory and administration",
        "Point of sale",
        "Checkout flow and Mercado Pago integration",
        "Client and server form validation"
      ]
    },
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "React Hook Form",
      "Zod",
      "Vitest",
      "Playwright"
    ],
    "previewStack": [
      "Next.js",
      "TypeScript",
      "PostgreSQL"
    ],
    "highlights": {
      "es": [
        "Catálogo, inventario y pedidos en una aplicación",
        "Punto de venta conectado con la operación online"
      ],
      "en": [
        "Catalog, inventory, and orders in one application",
        "Point of sale connected to online operations"
      ]
    },
    "architecture": {
      "es": "Monolito modular en Next.js App Router con React y TypeScript, PostgreSQL con Prisma, sesiones con Better Auth y separación entre áreas públicas, cuentas, administración y POS.",
      "en": "A modular monolith using Next.js App Router, React, and TypeScript, PostgreSQL with Prisma, Better Auth sessions, and separated storefront, account, admin, and POS areas."
    },
    "challenges": {
      "es": "Compartir reglas de catálogo, inventario, pedidos y ventas entre tienda y POS. Validar los datos tanto en formularios como en el servidor, manteniendo áreas y permisos separados según la tarea.",
      "en": "Sharing catalog, inventory, order, and sales rules across storefront and POS. Validating data in both forms and server operations while separating areas and permissions by task."
    },
    "value": {
      "es": "Una base compartida para operar la venta presencial y online. Catálogo, stock y pedidos se relacionan dentro de la misma aplicación, dando al equipo una visión más ordenada de la actividad comercial.",
      "en": "A shared foundation for in-store and online sales. Catalog, stock, and orders are related within the same application, giving the team a more organized view of retail operations."
    },
    "year": "",
    "coverVariant": "warm",
    "screenshotTodo": {
      "es": "",
      "en": ""
    },
    "featured": true,
    "displayOrder": 2,
    "image": "/projects/chaioboutique-storefront.webp",
    "logo": "/projects/chaioboutique-logo.png",
    "workflow": {
      "es": [
        "Administrar catálogo y stock",
        "Recibir pedido o venta",
        "Gestionar la operación",
        "Seguir el pedido"
      ],
      "en": [
        "Manage catalog and stock",
        "Receive order or sale",
        "Process the transaction",
        "Track the order"
      ]
    },
    "managementModules": {
      "es": [
        {
          "title": "Catálogo e inventario",
          "description": "Productos y disponibilidad se gestionan desde un área administrativa, con PostgreSQL y Prisma como base de la información comercial."
        },
        {
          "title": "Dos canales, una operación",
          "description": "La tienda pública y el punto de venta conviven en la misma aplicación. Las áreas de pedidos y ventas conectan el recorrido del cliente con el trabajo interno."
        },
        {
          "title": "Reglas y accesos claros",
          "description": "Cuentas, sesiones y permisos delimitan las tareas. Formularios y operaciones de servidor validan los datos antes de incorporarlos al flujo comercial."
        }
      ],
      "en": [
        {
          "title": "Catalog and inventory",
          "description": "Products and availability are managed in an administrative area, with PostgreSQL and Prisma underpinning retail data."
        },
        {
          "title": "Two channels, one operation",
          "description": "The public store and point of sale share one application. Order and sales areas connect the customer journey to internal work."
        },
        {
          "title": "Clear rules and access",
          "description": "Accounts, sessions, and permissions define responsibilities. Forms and server operations validate data before it enters the retail workflow."
        }
      ]
    }
  },
  {
    "id": "gamaan",
    "slug": "gamaan",
    "name": "GAMAAN",
    "image": "/projects/gamaan.webp",
    "logo": "/projects/gamaan-logo.png",
    "brandMark": "/projects/gamaan-mark.png",
    "discipline": {
      "es": "Gestión de créditos y operaciones",
      "en": "Credit & operations management"
    },
    "contribution": {
      "es": "Producto completo, de la idea al despliegue",
      "en": "End-to-end product, from concept to deployment"
    },
    "previewStack": [
      "React",
      "TypeScript",
      "Firebase"
    ],
    "highlights": {
      "es": [
        "Simulación, solicitud y seguimiento de créditos",
        "Tres roles con recorridos y permisos propios"
      ],
      "en": [
        "Credit simulation, application, and tracking",
        "Three roles with dedicated journeys and permissions"
      ]
    },
    "subtitle": {
      "es": "Plataforma financiera y de gestión de créditos",
      "en": "Financial management and credit platform"
    },
    "category": {
      "es": "Proyecto personal / freelance",
      "en": "Personal / freelance project"
    },
    "shortDescription": {
      "es": "Producto digital completo para simular, solicitar y administrar créditos, con sitio público y paneles internos con roles diferenciados.",
      "en": "A complete digital product for simulating, requesting, and managing credits, with a public site and internal panels for different roles."
    },
    "problem": {
      "es": "Una institución financiera necesitaba llevar sus operaciones de crédito — simulación, solicitud, evaluación y seguimiento — a un producto digital coherente, en lugar de procesos manuales dispersos entre distintos canales.",
      "en": "A financial institution needed to bring its credit operations — simulation, application, evaluation, and follow-up — into a coherent digital product, instead of manual processes spread across different channels."
    },
    "solution": {
      "es": "Diseñé y construí GAMAAN como una plataforma con un sitio institucional público y un área privada con control de acceso por rol, cubriendo todo el recorrido: desde la simulación de un crédito hasta la administración de solicitudes y créditos aprobados.",
      "en": "I designed and built GAMAAN as a platform with a public institutional site and a private area with role-based access control, covering the full journey: from simulating a credit to administering applications and approved credits."
    },
    "users": {
      "es": "Personas que solicitan un crédito, agencias que operan como intermediarias, y administradores internos que evalúan y gestionan solicitudes.",
      "en": "People applying for credit, partner agencies acting as intermediaries, and internal administrators who evaluate and manage applications."
    },
    "role": {
      "es": "Responsable único del producto: definición funcional, flujos de usuario, arquitectura de la aplicación, desarrollo frontend, integración con Firebase, modelado de datos, flujos administrativos y despliegue.",
      "en": "Sole owner of the product: product definition, functional analysis, user flows, application architecture, frontend development, Firebase integration, data modeling, administrative workflows, and deployment."
    },
    "features": {
      "es": [
        "Sitio institucional público",
        "Simulador de crédito",
        "Préstamos personales",
        "Préstamos con garantía / prendarios",
        "Flujos de crédito hipotecario",
        "Operaciones de descuento e intercambio de cheques",
        "Formulario público de solicitud de crédito",
        "Flujo de evaluación de solicitudes",
        "Alta de usuario tras la aprobación",
        "Panel administrativo",
        "Rol de agencia",
        "Rol de usuario estándar",
        "Permisos basados en rol",
        "Gestión de estado de solicitudes y créditos",
        "Notificaciones por email",
        "Login, registro y recuperación de contraseña",
        "Gestión de solicitudes y créditos aprobados",
        "Dashboards orientados al negocio"
      ],
      "en": [
        "Public institutional website",
        "Credit simulator",
        "Personal loans",
        "Secured / collateral-backed loans",
        "Mortgage-related credit workflows",
        "Check-discounting / check-exchange operations",
        "Public credit application form",
        "Application evaluation workflow",
        "User creation after approval",
        "Administrative panel",
        "Agency role",
        "Standard user role",
        "Role-based permissions",
        "Application and credit status management",
        "Email notifications",
        "Login, registration, and password recovery",
        "Management of requests and approved credits",
        "Business-oriented dashboards"
      ]
    },
    "technologies": [
      "React",
      "Vite",
      "TypeScript",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Storage",
      "EmailJS",
      "Vercel"
    ],
    "architecture": {
      "es": "Aplicación de una sola página (SPA) con un área pública de marketing/simulación y un área autenticada protegida por rol (usuario, agencia, administrador), usando Cloud Firestore como backend y reglas de seguridad para controlar el acceso a los datos.",
      "en": "Single-page application with a public marketing/simulation area and an authenticated area gated by role (user, agency, admin), using Cloud Firestore as the backend with security rules controlling data access."
    },
    "challenges": {
      "es": "Traducir un flujo financiero con múltiples estados (solicitud, evaluación, aprobación, seguimiento) en un modelo de datos claro, y sostener permisos coherentes entre tres roles distintos sin duplicar lógica.",
      "en": "Translating a financial workflow with multiple states (application, evaluation, approval, follow-up) into a clear data model, and keeping permissions consistent across three distinct roles without duplicating logic."
    },
    "value": {
      "es": "Un circuito compartido para solicitantes, agencias y administradores: cada solicitud tiene un estado y cada rol sabe qué puede hacer. La información acompaña la operación desde la simulación hasta el seguimiento del crédito.",
      "en": "A shared workflow for applicants, agencies, and administrators: every application has a status, and every role knows what it can do. Information follows the operation from simulation through credit tracking."
    },
    "year": "2024",
    "coverVariant": "primary",
    "screenshotTodo": {
      "es": "",
      "en": ""
    },
    "featured": true,
    "displayOrder": 3,
    "workflow": {
      "es": [
        "Simular y solicitar",
        "Revisar solicitud",
        "Aprobar y habilitar acceso",
        "Gestionar el crédito"
      ],
      "en": [
        "Simulate and apply",
        "Review application",
        "Approve and grant access",
        "Manage the credit"
      ]
    },
    "managementModules": {
      "es": [
        {
          "title": "Solicitudes ordenadas",
          "description": "La solicitud pública se convierte en un registro que puede evaluarse y seguirse. Los estados explicitan qué está pendiente y qué ya avanzó."
        },
        {
          "title": "Cada rol, su trabajo",
          "description": "Usuarios, agencias y administradores tienen recorridos y permisos diferenciados para consultar, presentar o gestionar operaciones."
        },
        {
          "title": "De la aprobación al seguimiento",
          "description": "El alta posterior a la aprobación conecta la solicitud con el área privada. Los paneles reúnen solicitudes y créditos para continuar la gestión."
        }
      ],
      "en": [
        {
          "title": "Organized applications",
          "description": "A public application becomes a record that can be reviewed and tracked. Statuses clarify what is pending and what has progressed."
        },
        {
          "title": "A workflow for each role",
          "description": "Users, agencies, and administrators have distinct journeys and permissions to view, submit, or manage operations."
        },
        {
          "title": "From approval to follow-up",
          "description": "User creation after approval connects the application to the private workspace. Dashboards bring applications and credits together for ongoing management."
        }
      ]
    }
  },
  {
    "id": "autoglobal",
    "slug": "autoglobal",
    "name": "AutoGlobal",
    "image": "/projects/autoglobal.webp",
    "logo": "/projects/autoglobal-logo.png",
    "discipline": {
      "es": "Gestión de concesionaria y catálogo",
      "en": "Dealership management & catalog"
    },
    "contribution": {
      "es": "Catálogo, panel administrativo y conexión con Firebase",
      "en": "Catalog, admin dashboard & Firebase integration"
    },
    "previewStack": [
      "React",
      "Firebase",
      "Material UI"
    ],
    "highlights": {
      "es": [
        "Altas, edición, reservas y ventas de vehículos",
        "Stock, reportes y estadísticas de consultas"
      ],
      "en": [
        "Vehicle creation, editing, reservations, and sales",
        "Stock, reports, and inquiry analytics"
      ]
    },
    "subtitle": {
      "es": "Plataforma digital para concesionaria multimarca",
      "en": "Digital platform for a multi-brand vehicle dealership"
    },
    "category": {
      "es": "Proyecto personal / freelance",
      "en": "Personal / freelance project"
    },
    "shortDescription": {
      "es": "Catálogo público conectado con un panel de vehículos, stock, reservas, ventas y estadísticas para ordenar la operación de una concesionaria multimarca.",
      "en": "A public catalog connected to a dashboard for vehicles, stock, reservations, sales, and analytics, bringing order to a multi-brand dealership’s operations."
    },
    "problem": {
      "es": "Una concesionaria necesita saber qué vehículos tiene disponibles, cuáles están reservados o vendidos y qué publicaciones generan interés. El catálogo público y la información de gestión deben mantenerse conectados para evitar actualizaciones dispersas.",
      "en": "A dealership needs to know which vehicles are available, reserved, or sold, and which listings attract interest. Its public catalog and management data need to stay connected to avoid scattered updates."
    },
    "solution": {
      "es": "Un sistema con catálogo público y administración autenticada. El equipo carga y edita vehículos, gestiona estados comerciales y consulta stock, ventas y métricas de interés desde un panel conectado con Firebase.",
      "en": "A system with a public catalog and authenticated administration. The team creates and edits vehicle records, manages sales statuses, and reviews stock, sales, and interest metrics through a Firebase-connected dashboard."
    },
    "users": {
      "es": "El equipo de la concesionaria que administra la oferta y los clientes que consultan vehículos disponibles.",
      "en": "The dealership team managing its inventory and customers browsing available vehicles."
    },
    "role": {
      "es": "Desarrollo de la experiencia pública y administrativa: componentes reutilizables, formularios de vehículos, gestión de estados, paneles de stock y estadísticas, integrados con autenticación y datos de Firebase.",
      "en": "Development of the public and administrative experience: reusable components, vehicle forms, status management, stock and analytics dashboards, integrated with Firebase authentication and data."
    },
    "features": {
      "es": [
        "Catálogo público y detalle de vehículos",
        "Altas, edición y eliminación de vehículos",
        "Gestión de reservas, ventas y stock disponible",
        "Dashboard con filtros por período",
        "Estadísticas de visitas y consultas por WhatsApp",
        "Exportación a PDF y Excel",
        "Acceso administrativo por rol",
        "Navegación responsive"
      ],
      "en": [
        "Public catalog and vehicle detail pages",
        "Vehicle creation, editing, and deletion",
        "Reservations, sales, and available stock management",
        "Dashboard with date-range filters",
        "Page-view and WhatsApp inquiry analytics",
        "PDF and Excel exports",
        "Role-based administrative access",
        "Responsive navigation"
      ]
    },
    "technologies": [
      "React",
      "JavaScript",
      "Material UI",
      "Firebase",
      "React Router",
      "Tailwind CSS"
    ],
    "architecture": {
      "es": "Aplicación React con React Router, interfaz pública y rutas administrativas protegidas. Firebase Authentication valida la sesión y Firestore concentra vehículos y datos de gestión. Componentes y utilidades compartidas sostienen catálogo, panel y reportes.",
      "en": "A React application with React Router, public pages, and protected administrative routes. Firebase Authentication validates sessions, while Firestore holds vehicle and management data. Shared components and utilities support the catalog, dashboard, and reports."
    },
    "challenges": {
      "es": "Mantener consistencia entre catálogo y estados de gestión, comprobar la sesión y el rol antes de abrir el panel y separar la carga de stock de la analítica para que una falla en métricas no bloquee la información operativa.",
      "en": "Keeping the catalog consistent with management statuses, checking sessions and roles before opening the dashboard, and loading stock independently from analytics so a metrics failure does not block operational information."
    },
    "value": {
      "es": "Una misma base para publicar vehículos y gestionar su ciclo comercial. El equipo puede consultar disponibilidad, registrar cambios y analizar el interés del catálogo mientras mantiene conectadas la atención al cliente y la operación interna.",
      "en": "One foundation for publishing vehicles and managing their sales lifecycle. The team can check availability, record changes, and analyze catalog interest while keeping customer service connected to internal operations."
    },
    "year": "2024",
    "coverVariant": "warm",
    "screenshotTodo": {
      "es": "",
      "en": ""
    },
    "featured": true,
    "displayOrder": 1,
    "workflow": {
      "es": [
        "Cargar vehículo",
        "Publicar catálogo",
        "Gestionar reserva o venta",
        "Consultar stock y resultados"
      ],
      "en": [
        "Create vehicle record",
        "Publish listing",
        "Manage reservation or sale",
        "Review stock and results"
      ]
    },
    "managementModules": {
      "es": [
        {
          "title": "Un inventario conectado",
          "description": "Alta y edición de fichas, imágenes y datos del vehículo. La información de administración alimenta el catálogo que consulta el cliente."
        },
        {
          "title": "Estados que ordenan la venta",
          "description": "Disponibles, reservados y vendidos permiten distinguir la oferta activa y seguir el ciclo comercial de cada unidad."
        },
        {
          "title": "Información para decidir",
          "description": "Panel con stock, antigüedad de vehículos, ventas por período y métricas de interés. Reportes exportables para trabajar fuera del sistema."
        }
      ],
      "en": [
        {
          "title": "Connected inventory",
          "description": "Create and edit vehicle records, images, and specifications. Administrative data feeds the catalog customers browse."
        },
        {
          "title": "Statuses that organize sales",
          "description": "Available, reserved, and sold vehicles distinguish active inventory and make each unit’s sales lifecycle visible."
        },
        {
          "title": "Information for decisions",
          "description": "A dashboard with stock, vehicle age, sales by period, and interest metrics. Exportable reports support work outside the system."
        }
      ]
    }
  },
  {
    "id": "pactum",
    "slug": "pactum",
    "name": "Pactum",
    "image": "/projects/pactum.webp",
    "logo": "/projects/pactum-logo.png",
    "brandMark": "/projects/pactum-mark.png",
    "discipline": {
      "es": "Gestión de trámites y documentación",
      "en": "Case & document management"
    },
    "contribution": {
      "es": "Aplicación Full Stack y flujos administrativos",
      "en": "Full Stack application & administrative workflows"
    },
    "previewStack": [
      "Next.js",
      "React",
      "Firebase"
    ],
    "highlights": {
      "es": [
        "Solicitudes guiadas y seguimiento de trámites",
        "Área privada con formularios y autenticación"
      ],
      "en": [
        "Guided requests and service tracking",
        "Private workspace with forms and authentication"
      ]
    },
    "subtitle": {
      "es": "El recorrido de un trámite, llevado a la web",
      "en": "The service journey, brought to the web"
    },
    "category": {
      "es": "Proyecto personal",
      "en": "Personal project"
    },
    "shortDescription": {
      "es": "Sistema de gestión de trámites con solicitudes guiadas, revisión administrativa, documentación y seguimiento por estados en un área privada.",
      "en": "A case management system with guided requests, administrative review, documents, and status tracking in a private workspace."
    },
    "problem": {
      "es": "Un trámite necesita datos completos, documentación ordenada y una secuencia de revisión comprensible. Cuando esas piezas quedan dispersas, es difícil saber qué falta, quién debe actuar y cuál es el próximo paso.",
      "en": "A case needs complete data, organized documents, and a clear review sequence. When those pieces are scattered, it is difficult to know what is missing, who needs to act, and what comes next."
    },
    "solution": {
      "es": "Un expediente digital con formularios validados, área privada y un circuito administrativo de revisión, definición de costos, pagos y documentación. Cada cambio relevante se registra en el historial del trámite.",
      "en": "A digital case file with validated forms, a private workspace, and an administrative workflow for review, cost definition, payments, and documents. Relevant changes are recorded in the case timeline."
    },
    "users": {
      "es": "Clientes que inician y siguen sus solicitudes, y personal administrativo que revisa datos y coordina el avance del trámite.",
      "en": "Clients submitting and tracking requests, and administrative staff reviewing information and coordinating case progress."
    },
    "role": {
      "es": "Desarrollo con Next.js, autenticación, formularios y servicios de datos. Implementación de rutas protegidas y flujos de administración con estados, documentos e historial de acciones.",
      "en": "Development with Next.js, authentication, forms, and data services. Implementation of protected routes and administrative workflows with statuses, documents, and an action timeline."
    },
    "features": {
      "es": [
        "Solicitudes y formularios validados",
        "Revisión administrativa y estados de trámite",
        "Gestión de documentación y firmantes",
        "Historial de acciones por expediente",
        "Definición de costos y seguimiento de pagos",
        "Autenticación y rutas protegidas",
        "Panel privado para clientes y administración",
        "Soporte de tema claro y oscuro"
      ],
      "en": [
        "Requests and validated forms",
        "Administrative review and case statuses",
        "Document and signer management",
        "Action timeline per case",
        "Cost definition and payment tracking",
        "Authentication and protected routes",
        "Private workspace for clients and administrators",
        "Light and dark theme support"
      ]
    },
    "technologies": [
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "React Hook Form",
      "Zod",
      "Tailwind CSS"
    ],
    "architecture": {
      "es": "Next.js con rutas públicas y privadas, Firebase Authentication y servicios de servidor con Firebase Admin. Firestore organiza los trámites y su historial; las transiciones de estado se definen de forma explícita y los formularios se validan con Zod.",
      "en": "Next.js with public and private routes, Firebase Authentication, and server services using Firebase Admin. Firestore organizes cases and timelines; status transitions are explicitly defined, and forms are validated with Zod."
    },
    "challenges": {
      "es": "Traducir un proceso de muchas etapas a transiciones permitidas y acciones claras para cada rol. Mantener documentos, datos y estados relacionados permite identificar pendientes y reconstruir lo ocurrido en cada expediente.",
      "en": "Translating a multi-stage process into permitted transitions and clear actions for each role. Keeping documents, data, and statuses related helps identify pending work and reconstruct each case’s history."
    },
    "value": {
      "es": "Un lugar compartido para conocer el estado de una solicitud, revisar lo pendiente y ordenar la documentación. El flujo hace visible el próximo paso tanto para el cliente como para quien administra el trámite.",
      "en": "A shared place to check a request’s status, review pending work, and organize documents. The workflow makes the next step visible to both the client and the person managing the case."
    },
    "year": "",
    "coverVariant": "slate",
    "screenshotTodo": {
      "es": "",
      "en": ""
    },
    "featured": true,
    "displayOrder": 4,
    "workflow": {
      "es": [
        "Recibir solicitud",
        "Revisar datos y costos",
        "Coordinar documentación y pago",
        "Validar y cerrar trámite"
      ],
      "en": [
        "Receive request",
        "Review data and costs",
        "Coordinate documents and payment",
        "Validate and close the case"
      ]
    },
    "managementModules": {
      "es": [
        {
          "title": "Un expediente por solicitud",
          "description": "Los datos y documentos se agrupan alrededor del trámite. El cliente puede consultar su gestión y el equipo administrativo revisar lo que necesita completar."
        },
        {
          "title": "Un circuito con reglas",
          "description": "Revisión, costos, pago y documentación se organizan por estados con transiciones permitidas. Cada etapa habilita acciones concretas para el siguiente paso."
        },
        {
          "title": "Historial y trazabilidad",
          "description": "Las acciones relevantes quedan en una línea de tiempo. El equipo puede entender cómo llegó el expediente a su estado actual y qué requiere atención."
        }
      ],
      "en": [
        {
          "title": "One file per request",
          "description": "Data and documents are grouped around the case. Clients can track their requests while administrative staff review what still needs to be completed."
        },
        {
          "title": "A workflow with rules",
          "description": "Review, costs, payment, and documents follow statuses with permitted transitions. Each stage enables concrete actions for the next step."
        },
        {
          "title": "History and traceability",
          "description": "Relevant actions are recorded in a timeline. The team can understand how a case reached its current status and what requires attention."
        }
      ]
    }
  }
]
