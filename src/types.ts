/** Tipos del contenido en `data/*.json`. */

export interface Personal {
  name: string
  title: string
  tagline: string
  /** Frase del Hero; `**así**` marca el texto con más peso. */
  mission: string
  /** Valor de «enfoque» en el Hero. */
  focus: string
  bio: string
  location: string
  locationDetail: string
  availability: string
  avatar: string
  email: string
  phone: string
  social: { github: string; linkedin: string; website: string }
  cv: { url: string; title: string; description: string }
  highlights: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  category: string
  featured: boolean
  inDevelopment: boolean
  isGroupProject: boolean
  private?: boolean
  links: { github?: string; demo?: string }
  year: string
}

export interface ExperienceEntry {
  id: string
  company: string
  position: string
  duration: string
  durationShort: string
  description: string
  achievements: string[]
  technologies: string[]
  type: string
  current: boolean
  featured: boolean
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
  id: string
  name: string
  icon: string
  order: number
  featured: boolean
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
