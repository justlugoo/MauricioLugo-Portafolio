import type { Project, Skill, Experience, ContactInfo } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: "1",
    title: "LeadsManager",
    description:
      "Aplicación integral de gestión de clientes potenciales con API RESTful en FastAPI y SQLAlchemy (Python), y frontend moderno en React y TypeScript. Incluye autenticación JWT, CRUD completo, dashboard interactivo y diseño responsivo.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/justlugoo/LeadsManager",
    liveUrl: "https://leads-manager-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Apero: Innovación en Cada Copa",
    description:
      "E-commerce para compra de bebidas personalizables con Django como framework backend y MySQL. Incluye gestión completa de usuarios, personalización de productos, carrito de compras y panel de administración robusto.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/Justlugoo/apero-ecommerce",
    featured: true,
  },
  {
    id: "3",
    title: "Task Manager API",
    description:
      "API REST para gestión de usuarios y tareas desarrollada con FastAPI y arquitectura MVC. Incluye CRUD completo, filtrado avanzado por estado y usuario, y documentación interactiva con Swagger UI.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["FastAPI", "Python", "Pydantic", "SQLite", "Swagger UI"],
    githubUrl: "https://github.com/justlugoo/TASK_MANAGER_API",
    featured: false,
  },
  {
    id: "4",
    title: "Plataforma RNI",
    description:
      "Frontend de plataforma para gestión de relaciones nacionales e internacionales, desarrollado con metodología ágil SCRUM. Proyecto en grupo actualmente en desarrollo, enfocado en crear una solución escalable y eficiente.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "SCRUM"],
    githubUrl: "#",
    featured: false,
    inDevelopment: true,
    isGroupProject: true,
  },
]

export const skills: Skill[] = [
  // Backend
  { name: "FastAPI", level: 0, category: "backend" },
  { name: "Python", level: 0, category: "backend" },
  { name: "Django", level: 0, category: "backend" },
  { name: "SQLAlchemy", level: 0, category: "backend" },
  { name: "PostgreSQL", level: 0, category: "backend" },
  { name: "MySQL", level: 0, category: "backend" },
  { name: "SQLite", level: 0, category: "backend" },

  // Frontend
  { name: "React", level: 0, category: "frontend" },
  { name: "TypeScript", level: 0, category: "frontend" },
  { name: "Next.js", level: 0, category: "frontend" },
  { name: "JavaScript", level: 0, category: "frontend" },
  { name: "HTML", level: 0, category: "frontend" },
  { name: "CSS", level: 0, category: "frontend" },

  // Tools
  { name: "Git", level: 0, category: "tools" },
  { name: "Swagger UI", level: 0, category: "tools" },
  { name: "Pydantic", level: 0, category: "tools" },
  { name: "JWT", level: 0, category: "tools" },

  // Design
  { name: "Bootstrap", level: 0, category: "design" },
  { name: "Tailwind CSS", level: 0, category: "design" },
]

export const experience: Experience[] = [
  {
    id: "1",
    company: "Proyecto Independiente",
    position: "Desarrollador Frontend",
    duration: "En desarrollo - Actualidad",
    description:
      "Desarrollo del Frontend de una plataforma para la gestión de relaciones nacionales e internacionales, utilizando metodología ágil SCRUM. Enfocado en construir una solución escalable y eficiente.",
    technologies: ["React", "TypeScript", "Next.js", "SCRUM"],
  },
  {
    id: "2",
    company: "Proyectos Académicos",
    position: "Desarrollador Full Stack",
    duration: "2024 - Actualidad",
    description:
      "Desarrollo de múltiples proyectos incluyendo LeadsManager, Apero y Task Manager API, aplicando mejores prácticas en desarrollo backend y frontend.",
    technologies: ["Python", "FastAPI", "Django", "React", "TypeScript"],
  },
]

export const contactInfo: ContactInfo = {
  email: "maurogranados31@gmail.com",
  phone: "+57 320 770 4340",
  location: "Cartagena de Indias, Bolívar, Colombia",
  social: {
    github: "https://github.com/Justlugoo",
    linkedin: "https://linkedin.com/in/justlugoo",
    website: "https://mauricio-portfolio.vercel.app",
  },
}

export const cvInfo = {
  url: "https://drive.google.com/file/d/19BGDXoYAhqr1kmVfLSlfv1rYvLEVO2yd/view?usp=sharing",
  title: "CV",
  description: "Curriculum Vitae de Mauricio Jose Lugo Granados",
  fallbackUrl: "/cv-mauricio-lugo.pdf",
}

export const education = [
  {
    id: "1",
    institution: "Universidad/Instituto",
    degree: "Tecnología en desarrollo de Sistemas de información y Software",
    duration: "6to semestre - Ciclo tecnológico",
    description: "Ciclo propedéutico a Ingeniería de sistemas",
  },
]

export const courses = [
  {
    id: "1",
    name: "FastAPI - The Complete Course 2025 (Beginner + Advanced)",
    platform: "Udemy",
    duration: "04/2025 – actualidad",
    description:
      "Desarrollo de APIs RESTful y aplicaciones completas con FastAPI y Python, incluyendo autenticación moderna e implementación de bases de datos.",
  },
  {
    id: "2",
    name: "Marco Web Django",
    platform: "Coursera - Meta",
    duration: "11/2024 – actualidad",
    description:
      "Desarrollo de proyectos web con Django, patrón MVT, administración del sitio y construcción de aplicaciones escalables.",
  },
]
