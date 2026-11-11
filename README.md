# Portafolio de Mauricio Lugo

Mi portafolio personal: un sitio de una sola página donde presento mi perfil, mi experiencia y los proyectos en los que he trabajado. Está publicado en [mauricio-lugo-portafolio.vercel.app](https://mauricio-lugo-portafolio.vercel.app).

## Contenido del sitio

La página se organiza en seis secciones:

- Inicio
- Experiencia
- Proyectos
- Certificaciones
- Tecnologías
- Contacto

El contacto incluye un formulario que envía el mensaje por correo.

## Tecnologías

| Para qué | Qué se usa |
|---|---|
| Framework | [Astro](https://astro.build) |
| Lenguaje | TypeScript |
| Estilos | CSS propio, sin librerías de estilos |
| Tipografía | Hanken Grotesk, alojada en el propio sitio |
| Formulario de contacto | [EmailJS](https://www.emailjs.com) |
| Métricas | Vercel Analytics y Speed Insights |
| Despliegue | [Vercel](https://vercel.com) |

## Estructura del proyecto

```
.
├── data/                 Contenido del sitio en archivos JSON
├── public/               Favicon e imagen para compartir el enlace
├── src/
│   ├── components/       Secciones y piezas de la página
│   ├── icons/            Íconos SVG
│   ├── layouts/          Estructura base del HTML y SEO
│   ├── pages/            Página principal
│   ├── scripts/          Comportamiento en TypeScript
│   ├── styles/           Estilos globales
│   └── types.ts          Tipos del contenido
├── astro.config.ts       Configuración de Astro
├── DESIGN.md             Sistema visual: colores, tipografía y componentes
├── package.json
└── tsconfig.json
```

## Cómo ejecutarlo

### Requisitos

- Node.js 22.23.4 o superior
- [pnpm](https://pnpm.io/installation)

### Instalación

```bash
git clone git@github.com:justlugoo/MauricioLugo-Portafolio.git
cd MauricioLugo-Portafolio
pnpm install
```

### Variables de entorno

Copia el archivo de ejemplo y completa las claves de EmailJS:

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `PUBLIC_EMAILJS_SERVICE_ID` | Identificador del servicio de EmailJS |
| `PUBLIC_EMAILJS_TEMPLATE_ID` | Identificador de la plantilla del mensaje |
| `PUBLIC_EMAILJS_PUBLIC_KEY` | Clave pública de EmailJS |

Sin estas variables el sitio funciona igual, pero el formulario de contacto no puede enviar mensajes.

### Comandos

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo en `http://localhost:4321` |
| `pnpm check` | Revisa los tipos de TypeScript |
| `pnpm build` | Revisa los tipos y genera el sitio en `dist/` |
| `pnpm preview` | Sirve el sitio ya compilado para probarlo |

## Editar el contenido

Todo el texto del sitio está en la carpeta `data/`, separado del código:

| Archivo | Contenido |
|---|---|
| `personal.json` | Nombre, presentación, ubicación y enlaces personales |
| `experience.json` | Experiencia profesional |
| `projects.json` | Proyectos |
| `certifications.json` | Certificaciones y cursos |
| `skills.json` | Tecnologías por categoría |
| `sections.json` | Títulos y subtítulos de cada sección |
| `config.json` | Datos de SEO y navegación |

Para actualizar la información basta con editar esos archivos; no hace falta tocar los componentes.

## Despliegue

El sitio se despliega en Vercel. Las tres variables `PUBLIC_EMAILJS_*` deben estar configuradas en el proyecto de Vercel para que el formulario de contacto funcione en producción.
