/** Tipos del contenido en `data/*.json`. */

export interface Personal {
  name: string
  title: string
  /** Descripción del Hero, bajo el título. */
  summary: string
  /** Valor de «enfoque» en el Hero. */
  focus: string
  location: string
  locationDetail: string
  availability: string
  avatar: string
  email: string
  social: { github: string; linkedin: string; website: string }
  cv: { url: string; title: string; description: string }
}

export interface Project {
  title: string
  description: string
  /** Texto largo; solo lo muestra el proyecto principal. */
  longDescription?: string
  tags: string[]
  featured: boolean
  inDevelopment: boolean
  isGroupProject: boolean
  private?: boolean
  year: string
  links: { github?: string; demo?: string }
}

export interface ExperienceEntry {
  company: string
  position: string
  duration: string
  durationShort: string
  achievements: string[]
  technologies: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  credentialUrl: string
  icon: string
}

export interface CertificationInProgress {
  id: string
  name: string
  status: string
  icon: string
}

export interface SkillCategory {
  name: string
  order: number
  skills: string[]
}

export interface NavigationItem {
  name: string
  href: string
  order: number
}

export interface SectionCopy {
  title: string
  subtitle?: string
}
