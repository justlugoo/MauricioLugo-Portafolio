# Imágenes de Proyectos

Esta carpeta contiene las imágenes de los proyectos del portfolio.

## Estructura de archivos

Coloca aquí las imágenes de tus proyectos con los siguientes nombres:

- `leads-manager.jpg` - Para el proyecto LeadsManager
- `apero.jpg` - Para el proyecto Apero
- `task-manager-api.jpg` - Para el proyecto Task Manager API
- `plataforma-rni.jpg` - Para el proyecto Plataforma RNI

## Especificaciones recomendadas

- **Formato**: JPG, PNG, WebP
- **Tamaño**: 800x600 píxeles o similar (aspect ratio 4:3)
- **Peso**: Máximo 500KB por imagen
- **Calidad**: Buena calidad pero optimizada para web

## Cómo agregar nuevas imágenes

1. Coloca la imagen en esta carpeta con el nombre correspondiente
2. Actualiza el archivo `data/project-images.ts` agregando la nueva entrada
3. La imagen se mostrará automáticamente en la sección de proyectos

## Ejemplo de configuración

```typescript
// En data/project-images.ts
export const projectImages = {
  "1": "/images/projects/leads-manager.jpg",
  "2": "/images/projects/apero.jpg",
  // Agregar nueva entrada aquí
  "5": "/images/projects/nuevo-proyecto.jpg",
}
``` 