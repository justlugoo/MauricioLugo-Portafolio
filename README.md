# 🚀 Portfolio de Mauricio Lugo

Portfolio personal desarrollado con **Next.js 15.2.4**, **React 19**, **TypeScript** y **Tailwind CSS**, siguiendo las mejores prácticas de desarrollo web moderno.

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15.2.4** - Framework de React con App Router
- **React 19** - Biblioteca de UI moderna
- **TypeScript 5.8.3** - Tipado estático para JavaScript
- **Tailwind CSS 3.4.17** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de UI modernos y accesibles
- **Lucide React** - Iconos SVG optimizados
- **Radix UI** - Componentes primitivos accesibles

### Backend & Herramientas
- **pnpm** - Gestor de paquetes rápido y eficiente
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

### Características del Portfolio
- ✅ **Responsive Design** - Adaptable a todos los dispositivos
- ✅ **Server Components** - Optimización de rendimiento
- ✅ **TypeScript Estricto** - Type safety en toda la aplicación
- ✅ **SEO Optimizado** - Metadata y estructura semántica
- ✅ **Accesibilidad** - Cumple con estándares WCAG
- ✅ **Animaciones Suaves** - Transiciones y efectos visuales
- ✅ **Gradientes Personalizados** - Tema Claude con acentos naranjas

## 📁 Estructura del Proyecto

```
portfolio/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con ThemeProvider
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales con temas claro/oscuro
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de shadcn/ui
│   ├── sections/         # Secciones del portfolio
│   │   ├── hero-section.tsx      # Sección principal con botón CV
│   │   ├── about-section.tsx     # Información personal
│   │   ├── education-section.tsx # Educación y cursos
│   │   ├── skills-section.tsx    # Habilidades técnicas
│   │   ├── projects-section.tsx  # Proyectos destacados
│   │   └── contact-section.tsx   # Formulario de contacto
│   ├── header.tsx        # Navegación principal
│   ├── footer.tsx        # Pie de página
│   ├── theme-provider.tsx # Proveedor de temas
│   └── theme-toggle.tsx  # Toggle de modo oscuro
├── data/                 # Datos del portfolio
│   └── portfolio-data.ts # Información personal, proyectos y CV
├── types/                # Definiciones de TypeScript
│   └── portfolio.ts      # Tipos del portfolio
├── lib/                  # Utilidades
│   └── utils.ts          # Funciones auxiliares
├── public/               # Archivos estáticos
└── hooks/                # Hooks personalizados
```

## 🎨 Secciones del Portfolio

### 🏠 Hero Section
- Presentación personal con llamadas a la acción
- **Botón CV** con enlace a Google Drive
- Enlaces a redes sociales y contacto
- Animación de scroll suave

### 👨‍💻 Sobre Mí
- Historia profesional y personal
- Objetivos y aspiraciones
- Intereses y hobbies

### 🎓 Educación y Cursos
- Formación académica actual
- Cursos en progreso
- Desarrollo profesional continuo

### 💪 Habilidades
- Tecnologías Backend
- Tecnologías Frontend
- Herramientas de desarrollo
- Diseño

### 🚀 Proyectos Destacados
- **LeadsManager**: Gestión integral de clientes potenciales (FastAPI + React)
- **Apero**: E-commerce de bebidas personalizables (Django + MySQL)
- **Task Manager API**: API REST con arquitectura MVC (FastAPI)
- **Plataforma RNI**: Frontend para gestión de relaciones (React + TypeScript)

### 📞 Contacto
- Formulario de contacto funcional
- Información de contacto directa
- Enlaces a redes sociales

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado), npm, yarn o bun

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Justlugoo/portfolio.git
cd portfolio
```

2. **Instalar dependencias (recomendado: pnpm)**
```bash
pnpm install
```

3. **Ejecutar en desarrollo**
```bash
pnpm dev
```

4. **Abrir en el navegador**
```
http://localhost:3000 (o 3001 si 3000 está ocupado)
```

### Scripts Disponibles

```bash
pnpm dev          # Servidor de desarrollo
pnpm build        # Build de producción
pnpm start        # Servidor de producción
pnpm lint         # Linter ESLint
```

## 🎨 Personalización

### Modificar Información Personal
Edita el archivo `data/portfolio-data.ts` para actualizar:
- Información de contacto
- Proyectos y experiencia
- Habilidades y tecnologías
- Enlaces sociales
- **URL del CV** (Google Drive)

### Cambiar Colores y Temas
Modifica `app/globals.css` para personalizar:
- Paleta de colores
- Variables CSS para temas claro y oscuro
- Gradientes personalizados

### Agregar Nuevas Secciones
1. Crear componente en `components/sections/`
2. Definir tipos en `types/portfolio.ts`
3. Agregar datos en `data/portfolio-data.ts`
4. Importar en `app/page.tsx`

## 📱 Responsive Design

El portfolio está optimizado para:
- 📱 **Mobile**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+
- 🖥️ **Large Desktop**: 1440px+


## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request
## 📞 Contacto

- **Email**: maurogranados31@gmail.com
- **GitHub**: [@Justlugoo](https://github.com/Justlugoo)
- **LinkedIn**: [Mauricio Lugo](https://linkedin.com/in/justlugoo)
- **Portfolio**: [mauricio-portfolio.vercel.app](https://mauricio-portfolio.vercel.app)

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐
