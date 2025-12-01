// Personal Information
export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  bio: string
  location: string
  locationDetail: string
  availability: string
  avatar: string
  email: string
  phone: string
  social: {
    github: string
    linkedin: string
    website: string
  }
  cv: {
    url: string
    title: string
    description: string
  }
  headline: {
    main: string
    sub: string
  }
  highlights: string[]
}

// Projects
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'devops'
  featured: boolean
  inDevelopment: boolean
  isGroupProject: boolean
  devopsHighlights?: string[]
  links: {
    github?: string
    demo?: string
  }
  year: string
  techStack?: {
    backend?: string[]
    frontend?: string[]
    devops?: string[]
    iac?: string[]
    scripting?: string[]
    'ci-cd'?: string[]
    cloud?: string[]
  }
}

// Skills
export interface SkillCategory {
  id: string
  name: string
  icon: string
  order: number
  featured: boolean
  skills: string[]
}

export interface SkillsData {
  categories: SkillCategory[]
}

// Experience
export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  durationShort: string
  description: string
  achievements: string[]
  technologies: string[]
  type: 'freelance' | 'academic' | 'professional'
  current: boolean
  featured: boolean
}

// Certifications
export interface Certification {
  id: string
  name: string
  issuer: string
  category: string
  date: string
  credentialUrl: string
  badgeUrl: string
  skills: string[]
  featured: boolean
}

export interface CertificationInProgress {
  id: string
  name: string
  issuer: string
  expectedDate: string
  status: string
  progress: number
  description: string
}

export interface CertificationsData {
  certifications: Certification[]
  inProgress: CertificationInProgress[]
  stats: {
    total: number
    categories: Record<string, number>
  }
}

// Education
export interface University {
  id: string
  institution: string
  degree: string
  level: string
  duration: string
  previousDegree: string
  description: string
  status: 'completed' | 'in_progress'
  type: 'university'
}

export interface Course {
  id: string
  name: string
  platform: string
  duration: string
  description: string
  status: 'completed' | 'in_progress'
  certificateUrl: string | null
  progress?: number
}

export interface EducationData {
  university: University
  courses: Course[]
}

// Site Configuration
export interface SiteConfig {
  site: {
    name: string
    title: string
    description: string
    url: string
    locale: string
    author: string
  }
  theme: {
    defaultMode: 'light' | 'dark'
    primaryColor: string
    accentColor: string
  }
  features: {
    darkMode: boolean
    animations: boolean
    emailContact: boolean
    analytics: boolean
  }
  navigation: NavigationItem[]
  seo: {
    keywords: string[]
    ogImage: string
    twitterHandle: string
  }
}

export interface NavigationItem {
  name: string
  href: string
  order: number
}
