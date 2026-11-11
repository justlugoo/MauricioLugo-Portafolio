# Portafolio de Mauricio Lugo

Sitio personal de una sola página, con identidad de terminal y navegación horizontal por secciones a pantalla completa. Publicado en [mauricio-portfolio.vercel.app](https://mauricio-portfolio.vercel.app).

## Stack

- Next.js 15 (App Router), React 19 y TypeScript
- Tailwind CSS 3 con tokens de color como variables CSS (`app/globals.css`), tema claro y oscuro con `next-themes`
- Componentes base de shadcn/ui (`components/ui/`) sobre Radix
- Framer Motion solo para la aparición al hacer scroll (`ScrollReveal`)
- EmailJS para el formulario de contacto
- Vercel Analytics y Speed Insights

## Cómo está armado

Casi todo es **Server Components**: las secciones se renderizan en el servidor y su contenido llega completo en el HTML. Solo son componentes de cliente las piezas que necesitan estado o eventos:

| Componente de cliente | Para qué |
|---|---|
| `hooks/useSectionPager.tsx` | Estado de la sección activa; rueda horizontal, teclado y gestos táctiles |
| `components/layout/PagerTrack.tsx` | Desplaza el carril horizontal |
| `components/layout/PagerProgress.tsx` | Barra y contador del pie de página |
| `components/layout/PagerEdgeControls.tsx` | Flechas laterales |
| `components/layout/GoToSectionButton.tsx` | Botón que salta a una sección |
| `components/layout/Header.tsx`, `ThemeToggle.tsx`, `ThemeProvider.tsx` | Menú móvil y tema |
| `components/sections/ContactForm.tsx` | Formulario y envío con EmailJS |
| `components/ui/ScrollReveal.tsx` | Animación de entrada |

Regla: si un componente no necesita estado ni eventos, no lleva `"use client"`. Cuando una sección necesite interactividad, se extrae la parte interactiva a un componente pequeño en lugar de marcar la sección entera.

```
app/                 layout, página y estilos globales
components/
  layout/            header, footer, pager y tema
  sections/          Hero, Experience, Projects, Certifications, Skills, Contact
  shared/            piezas reutilizables (ProjectCard, SkillBadge, TerminalWindow…)
  ui/                base shadcn/ui y ScrollReveal
data/                contenido del sitio en JSON (ver abajo)
hooks/               useSectionPager
lib/                 utilidades e iconos de tecnologías
types/               tipos del contenido
```

## Contenido

Todo el texto del sitio vive en `data/*.json`; los componentes solo lo leen. Para cambiar información personal, proyectos, experiencia, certificaciones o tecnologías se editan esos archivos, sin tocar componentes. Los metadatos de SEO y la navegación están en `data/config.json`.

## Desarrollo

Requiere Node.js 20 o superior y [pnpm](https://pnpm.io/installation).

```bash
pnpm install
cp .env.example .env.local   # completar las claves de EmailJS
pnpm dev                     # http://localhost:3000
```

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción; falla ante errores de tipos o de lint |
| `pnpm start` | Sirve el build de producción |
| `pnpm lint` | ESLint |

Sin las variables `NEXT_PUBLIC_EMAILJS_*` el sitio funciona, pero el formulario de contacto no envía.

## Despliegue

Vercel. Las variables de `.env.example` se configuran en el proyecto de Vercel.
