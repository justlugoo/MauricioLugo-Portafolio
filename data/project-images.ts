// Configuración de imágenes para proyectos
// Coloca las imágenes en: public/images/projects/
// Y agrega la referencia aquí

export const projectImages = {
  // LeadsManager
  "1": "/images/projects/leads-manager.png",
  
  // Apero
  "2": "/images/projects/apero.png",
  
  // Task Manager API
  "3": "/images/projects/fastapi.png",
  
  // Plataforma RNI
  "4": "/images/projects/indevelopment.png",
} as const

// Función helper para obtener la imagen de un proyecto
export function getProjectImage(projectId: string): string {
  return projectImages[projectId as keyof typeof projectImages] || "/placeholder.svg"
} 