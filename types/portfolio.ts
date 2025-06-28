export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  inDevelopment?: boolean
  isGroupProject?: boolean
}

export interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "tools" | "design"
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
}
