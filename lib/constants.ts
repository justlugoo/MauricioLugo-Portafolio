// Animation durations (ms)
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const

// Breakpoints (matches Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Google-style colors
export const COLORS = {
  google: {
    blue: {
      50: '#e8f0fe',
      500: '#1a73e8',
      700: '#1967d2',
    },
    red: {
      500: '#ea4335',
    },
    yellow: {
      500: '#fbbc04',
    },
    green: {
      500: '#34a853',
    },
    gray: {
      50: '#f8f9fa',
      100: '#f1f3f4',
      200: '#e8eaed',
      600: '#5f6368',
      700: '#3c4043',
      900: '#202124',
    },
  },
} as const

// Social media icons mapping
export const SOCIAL_ICONS = {
  github: 'Github',
  linkedin: 'Linkedin',
  twitter: 'Twitter',
  website: 'Globe',
} as const

// Project categories
export const PROJECT_CATEGORIES = {
  fullstack: 'Full Stack',
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
} as const
