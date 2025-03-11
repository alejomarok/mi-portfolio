"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Define translations
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      name: "John Doe",
      title: "Full Stack Developer",
      description: "I build exceptional and accessible digital experiences for the web.",
      contact: "Contact Me",
      projects: "View Projects",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know me better",
      paragraph1:
        "I'm a passionate full-stack developer with over 5 years of experience building web applications. I specialize in creating responsive, user-friendly interfaces and robust backend systems.",
      paragraph2:
        "My journey in software development began when I was in college, where I discovered my passion for solving problems through code. Since then, I've worked with various technologies and frameworks, always eager to learn and adapt to new challenges.",
      paragraph3:
        "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community events.",
      education: {
        title: "Education",
        degree1: "Master of Computer Science",
        school1: "University of Technology",
        year1: "2015 - 2017",
        degree2: "Bachelor of Software Engineering",
        school2: "State University",
        year2: "2011 - 2015",
      },
      interests: {
        title: "Interests",
        item1: "Web Development & Design",
        item2: "Open Source Contribution",
        item3: "Artificial Intelligence",
        item4: "Hiking & Photography",
      },
    },
    skills: {
      title: "Skills",
      description: "Here are the technologies and tools I work with.",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      mobile: "Mobile",
      design: "Design",
      other: "Other",
    },
    experience: {
      title: "Experience",
      description: "My professional journey and work experience.",
      job1: {
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2020 - Present",
        description:
          "Led the development of responsive web applications using React and Redux. Implemented state management solutions and optimized performance.",
      },
      job2: {
        title: "Backend Developer",
        company: "Data Systems LLC",
        period: "2018 - 2020",
        description:
          "Developed RESTful APIs using Node.js and Express. Designed and maintained database schemas and implemented authentication systems.",
      },
      job3: {
        title: "Full Stack Developer",
        company: "Web Innovations",
        period: "2016 - 2018",
        description:
          "Built full-stack applications using Python, Django, and React. Collaborated with design teams to implement UI/UX improvements.",
      },
    },
    projects: {
      title: "Projects",
      description: "Check out some of my recent work.",
      demo: "Live Demo",
      code: "View Code",
      project1: {
        title: "E-commerce Platform",
        description:
          "A modern e-commerce platform with product management, cart functionality, and payment processing.",
      },
      project2: {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team features.",
      },
      project3: {
        title: "Data Visualization Dashboard",
        description: "An interactive dashboard for visualizing and analyzing complex datasets.",
      },
    },
    contact: {
      title: "Contact Me",
      description: "Have a project in mind? Let's work together!",
      form: {
        title: "Send a Message",
        description: "Fill out the form below and I'll get back to you as soon as possible.",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
      },
      info: {
        title: "Contact Information",
        description: "Feel free to reach out through any of these channels.",
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      success: {
        title: "Message Sent!",
        message: "Thank you for your message. I'll get back to you soon.",
      },
      error: {
        title: "Error",
        message: "There was an error sending your message. Please try again.",
      },
    },
    footer: {
      about: {
        title: "About",
        description: "I'm a passionate developer focused on creating beautiful and functional web experiences.",
      },
      links: {
        title: "Quick Links",
      },
      social: {
        title: "Social Media",
      },
      copyright: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      name: "John Doe",
      title: "Desarrollador Full Stack",
      description: "Construyo experiencias digitales excepcionales y accesibles para la web.",
      contact: "Contáctame",
      projects: "Ver Proyectos",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Conóceme mejor",
      paragraph1:
        "Soy un desarrollador full-stack apasionado con más de 5 años de experiencia construyendo aplicaciones web. Me especializo en crear interfaces responsivas y amigables, y sistemas backend robustos.",
      paragraph2:
        "Mi viaje en el desarrollo de software comenzó cuando estaba en la universidad, donde descubrí mi pasión por resolver problemas a través del código. Desde entonces, he trabajado con varias tecnologías y frameworks, siempre ansioso por aprender y adaptarme a nuevos desafíos.",
      paragraph3:
        "Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o compartiendo mi conocimiento a través de publicaciones en blogs y eventos comunitarios.",
      education: {
        title: "Educación",
        degree1: "Maestría en Ciencias de la Computación",
        school1: "Universidad de Tecnología",
        year1: "2015 - 2017",
        degree2: "Licenciatura en Ingeniería de Software",
        school2: "Universidad Estatal",
        year2: "2011 - 2015",
      },
      interests: {
        title: "Intereses",
        item1: "Desarrollo Web y Diseño",
        item2: "Contribución a Código Abierto",
        item3: "Inteligencia Artificial",
        item4: "Senderismo y Fotografía",
      },
    },
    skills: {
      title: "Habilidades",
      description: "Estas son las tecnologías y herramientas con las que trabajo.",
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de Datos",
      mobile: "Móvil",
      design: "Diseño",
      other: "Otros",
    },
    experience: {
      title: "Experiencia",
      description: "Mi trayectoria profesional y experiencia laboral.",
      job1: {
        title: "Desarrollador Frontend Senior",
        company: "Tech Solutions Inc.",
        period: "2020 - Presente",
        description:
          "Lideré el desarrollo de aplicaciones web responsivas usando React y Redux. Implementé soluciones de gestión de estado y optimicé el rendimiento.",
      },
      job2: {
        title: "Desarrollador Backend",
        company: "Data Systems LLC",
        period: "2018 - 2020",
        description:
          "Desarrollé APIs RESTful usando Node.js y Express. Diseñé y mantuve esquemas de bases de datos e implementé sistemas de autenticación.",
      },
      job3: {
        title: "Desarrollador Full Stack",
        company: "Web Innovations",
        period: "2016 - 2018",
        description:
          "Construí aplicaciones full-stack usando Python, Django y React. Colaboré con equipos de diseño para implementar mejoras de UI/UX.",
      },
    },
    projects: {
      title: "Proyectos",
      description: "Mira algunos de mis trabajos recientes.",
      demo: "Demo en Vivo",
      code: "Ver Código",
      project1: {
        title: "Plataforma de E-commerce",
        description:
          "Una plataforma moderna de comercio electrónico con gestión de productos, funcionalidad de carrito y procesamiento de pagos.",
      },
      project2: {
        title: "App de Gestión de Tareas",
        description:
          "Una aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real y funciones de equipo.",
      },
      project3: {
        title: "Dashboard de Visualización de Datos",
        description: "Un panel interactivo para visualizar y analizar conjuntos de datos complejos.",
      },
    },
    contact: {
      title: "Contáctame",
      description: "¿Tienes un proyecto en mente? ¡Trabajemos juntos!",
      form: {
        title: "Enviar un Mensaje",
        description: "Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.",
        name: "Nombre",
        email: "Correo Electrónico",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
      },
      info: {
        title: "Información de Contacto",
        description: "No dudes en contactarme a través de cualquiera de estos canales.",
        email: "Correo Electrónico",
        phone: "Teléfono",
        location: "Ubicación",
      },
      success: {
        title: "¡Mensaje Enviado!",
        message: "Gracias por tu mensaje. Me pondré en contacto contigo pronto.",
      },
      error: {
        title: "Error",
        message: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
      },
    },
    footer: {
      about: {
        title: "Acerca de",
        description: "Soy un desarrollador apasionado enfocado en crear experiencias web hermosas y funcionales.",
      },
      links: {
        title: "Enlaces Rápidos",
      },
      social: {
        title: "Redes Sociales",
      },
      copyright: "Todos los derechos reservados.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      name: "John Doe",
      title: "Développeur Full Stack",
      description: "Je construis des expériences numériques exceptionnelles et accessibles pour le web.",
      contact: "Me Contacter",
      projects: "Voir les Projets",
    },
    about: {
      title: "À Propos de Moi",
      subtitle: "Apprenez à me connaître",
      paragraph1:
        "Je suis un développeur full-stack passionné avec plus de 5 ans d'expérience dans la construction d'applications web. Je me spécialise dans la création d'interfaces réactives et conviviales, et de systèmes backend robustes.",
      paragraph2:
        "Mon parcours dans le développement logiciel a commencé lorsque j'étais à l'université, où j'ai découvert ma passion pour résoudre des problèmes par le code. Depuis, j'ai travaillé avec diverses technologies et frameworks, toujours désireux d'apprendre et de m'adapter à de nouveaux défis.",
      paragraph3:
        "Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies, de contribuer à des projets open-source ou de partager mes connaissances à travers des articles de blog et des événements communautaires.",
      education: {
        title: "Éducation",
        degree1: "Master en Informatique",
        school1: "Université de Technologie",
        year1: "2015 - 2017",
        degree2: "Licence en Génie Logiciel",
        school2: "Université d'État",
        year2: "2011 - 2015",
      },
      interests: {
        title: "Intérêts",
        item1: "Développement Web et Design",
        item2: "Contribution Open Source",
        item3: "Intelligence Artificielle",
        item4: "Randonnée et Photographie",
      },
    },
    skills: {
      title: "Compétences",
      description: "Voici les technologies et outils avec lesquels je travaille.",
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de Données",
      mobile: "Mobile",
      design: "Design",
      other: "Autres",
    },
    experience: {
      title: "Expérience",
      description: "Mon parcours professionnel et mon expérience de travail.",
      job1: {
        title: "Développeur Frontend Senior",
        company: "Tech Solutions Inc.",
        period: "2020 - Présent",
        description:
          "J'ai dirigé le développement d'applications web responsives en utilisant React et Redux. J'ai implémenté des solutions de gestion d'état et optimisé les performances.",
      },
      job2: {
        title: "Développeur Backend",
        company: "Data Systems LLC",
        period: "2018 - 2020",
        description:
          "J'ai développé des API RESTful en utilisant Node.js et Express. J'ai conçu et maintenu des schémas de base de données et implémenté des systèmes d'authentification.",
      },
      job3: {
        title: "Développeur Full Stack",
        company: "Web Innovations",
        period: "2016 - 2018",
        description:
          "J'ai construit des applications full-stack en utilisant Python, Django et React. J'ai collaboré avec des équipes de design pour implémenter des améliorations UI/UX.",
      },
    },
    projects: {
      title: "Projets",
      description: "Découvrez certains de mes travaux récents.",
      demo: "Démo en Direct",
      code: "Voir le Code",
      project1: {
        title: "Plateforme E-commerce",
        description:
          "Une plateforme e-commerce moderne avec gestion des produits, fonctionnalité de panier et traitement des paiements.",
      },
      project2: {
        title: "Application de Gestion des Tâches",
        description:
          "Une application collaborative de gestion des tâches avec mises à jour en temps réel et fonctionnalités d'équipe.",
      },
      project3: {
        title: "Tableau de Bord de Visualisation de Données",
        description: "Un tableau de bord interactif pour visualiser et analyser des ensembles de données complexes.",
      },
    },
    contact: {
      title: "Me Contacter",
      description: "Vous avez un projet en tête ? Travaillons ensemble !",
      form: {
        title: "Envoyer un Message",
        description: "Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.",
        name: "Nom",
        email: "Email",
        message: "Message",
        submit: "Envoyer le Message",
        sending: "Envoi en cours...",
      },
      info: {
        title: "Informations de Contact",
        description: "N'hésitez pas à me contacter via l'un de ces canaux.",
        email: "Email",
        phone: "Téléphone",
        location: "Emplacement",
      },
      success: {
        title: "Message Envoyé !",
        message: "Merci pour votre message. Je vous répondrai bientôt.",
      },
      error: {
        title: "Erreur",
        message: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
      },
    },
    footer: {
      about: {
        title: "À Propos",
        description:
          "Je suis un développeur passionné qui se concentre sur la création d'expériences web belles et fonctionnelles.",
      },
      links: {
        title: "Liens Rapides",
      },
      social: {
        title: "Réseaux Sociaux",
      },
      copyright: "Tous droits réservés.",
    },
  },
}

// Create context
const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: () => "",
})

// Provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key) => {
    const keys = key.split(".")
    let value = translations[language]

    for (const k of keys) {
      if (value && k in value) {
        value = value[k]
      } else {
        // Fallback to English if translation not found
        let fallback = translations.en
        for (const k of keys) {
          if (fallback && k in fallback) {
            fallback = fallback[k]
          } else {
            return key // Return the key if no translation found
          }
        }
        return fallback
      }
    }

    return value
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hooks
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const useTranslation = () => {
  const { t } = useContext(LanguageContext)
  if (!t) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return { t }
}

