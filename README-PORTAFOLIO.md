# 🚀 Portfolio Mauricio Lugo - DevOps & Cloud Architect

Portfolio profesional diseñado con estilo Google About, enfocado en DevOps, Cloud Engineering y Backend Development.

---

## ✨ Características Implementadas

### 🎨 Diseño Google About
- ✅ Tipografía masiva (80-96px en títulos)
- ✅ Espaciado generoso entre secciones
- ✅ Colores minimalistas (Google Blue como acento)
- ✅ Animaciones sutiles y transiciones suaves
- ✅ Hero full-screen con scroll indicator
- ✅ Personal branding optimizado para DevOps/Cloud

### 📱 Secciones
1. **Hero** - Presentación impactante con tagline y highlights
2. **About** - Historia profesional con enfoque en valor y objetivos
3. **Experience** - Experiencia en 38 Grados Lab con logros destacados
4. **Projects** - Proyectos con enfoque DevOps/Cloud
5. **Skills** - Stack técnico categorizado (Cloud, Backend, Frontend, Tools)
6. **Certifications** - Google Cloud badges y certificaciones en progreso
7. **Contact** - Formulario funcional + información de contacto

### 💾 Sistema de Datos
- **JSON-based**: Todo el contenido en archivos JSON fáciles de editar
- **Type-safe**: TypeScript para prevenir errores
- **Modular**: Separación clara de datos y presentación

---

## 🛠️ Pasos Pendientes para Completar

### 1. Agregar Links de Certificaciones Google Cloud

Edita `data/certifications.json` y reemplaza los `PLACEHOLDER_URL_X` con tus links reales:

```json
{
  "certifications": [
    {
      "id": "1",
      "name": "Cloud Security Fundamentals",
      "credentialUrl": "TU_LINK_AQUI", // ← Cambiar esto
      ...
    }
  ]
}
```

**¿Dónde encontrar los links?**
1. Ve a [Google Cloud Skills Boost](https://www.cloudskillsboost.google/)
2. Inicia sesión con tu cuenta
3. Ve a "Public Profile" o "My Badges"
4. Copia el link de cada badge/certification

**Formato del link:** Usualmente es algo como:
```
https://www.cloudskillsboost.google/public_profiles/xxxxx/badges/xxxxx
```

---

### 2. Agregar Imágenes de Proyectos

Necesitas agregar/actualizar estas imágenes en `public/images/projects/`:

#### **Esenciales:**
```bash
public/images/projects/
├── leads-manager.png      # ✅ Ya existe
├── apero.png              # ✅ Ya existe
├── devops-toolkit.png     # ⚠️ NUEVO - Necesitas crear
├── api-template.png       # ⚠️ NUEVO - Necesitas crear
└── fastapi.png            # ✅ Ya existe
```

#### **Sugerencias para las imágenes nuevas:**

**devops-toolkit.png:**
- Screenshot de terminal con scripts/código
- Diagrama de flujo CI/CD
- Collage de logos (Terraform, Docker, GCP, GitHub Actions)

**api-template.png:**
- Screenshot de documentación Swagger/OpenAPI
- Diagrama de arquitectura Cloud Run
- Terminal mostrando deployment logs

#### **Herramientas recomendadas para crear imágenes:**
- **Excalidraw** (https://excalidraw.com/) - Diagramas simples
- **Carbon** (https://carbon.now.sh/) - Screenshots de código bonitos
- **Figma** - Diseño profesional
- **Canva** - Templates rápidos

---

### 3. Opcional: Badges de Certificaciones

Si quieres mostrar los badges oficiales de Google Cloud:

1. Descarga los badges desde tu perfil de Google Cloud Skills Boost
2. Guárdalos en `public/images/badges/`:
   ```bash
   public/images/badges/
   ├── gcp-security.png
   ├── gcp-networking.png
   ├── gcp-cloudrun.png
   └── gcp-gke.png
   ```
3. Los componentes ya están configurados para usarlos

---

### 4. Actualizar Metadata de SEO

Edita `app/layout.tsx` (línea ~15) para agregar la metadataBase:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://mauricio-portfolio.vercel.app'), // ← Agregar esto
  title: config.site.title,
  // ...resto del código
}
```

---

## 📝 Cómo Actualizar Contenido

### Actualizar Información Personal
```bash
code data/personal.json
```

Campos editables:
- `tagline` - Frase principal del hero
- `bio` - Descripción corta
- `highlights` - 4 logros principales
- `availability` - Estado de disponibilidad

### Agregar un Nuevo Proyecto
```bash
code data/projects.json
```

Agregar entrada:
```json
{
  "id": "5",
  "title": "Tu Proyecto",
  "description": "Descripción corta...",
  "tags": ["Docker", "GCP"],
  "featured": true,
  "image": "/images/projects/tu-imagen.png",
  "links": {
    "github": "https://github.com/..."
  },
  "devopsHighlights": [
    "Containerización con Docker",
    "Deploy en Cloud Run"
  ]
}
```

### Actualizar Experiencia
```bash
code data/experience.json
```

Puedes editar:
- `achievements` - Lista de logros
- `technologies` - Stack usado
- `durationShort` - Actualizar meses

### Agregar Certificación
```bash
code data/certifications.json
```

En el array `certifications`, agregar:
```json
{
  "id": "5",
  "name": "Nueva Certificación",
  "issuer": "Google Cloud",
  "category": "nueva-categoria",
  "date": "2025",
  "credentialUrl": "https://...",
  "skills": ["Skill 1", "Skill 2"]
}
```

---

## 🚀 Comandos Útiles

```bash
# Desarrollo local
pnpm dev

# Build para producción
pnpm build

# Ver build local
pnpm start

# Linter
pnpm lint
```

---

## 🎨 Personalización de Colores

Si quieres cambiar el esquema de colores de Google Blue a otro:

**Archivo:** `app/globals.css` (línea ~34-37)

```css
/* Cambiar estos valores */
--google-blue-500: 217 89% 51%;  /* Color principal */
--google-blue-700: 217 83% 45%;  /* Color oscuro */
```

**Ejemplos de paletas:**
- **Green:** `142 71% 45%` (Google Green)
- **Red:** `4 90% 58%` (Google Red)
- **Purple:** `261 51% 51%` (Material Purple)

---

## 📸 Assets Recomendados (Opcional pero de Alto Impacto)

### Alta Prioridad:
1. **Diagrama de Arquitectura GCP** - Muestra tu expertise visual
2. **Screenshot de 38 Grados Lab** - Si tienes permiso
3. **Badges de Certificaciones** - Credibilidad visual

### Media Prioridad:
4. **Logo de 38 Grados Lab** - Para la sección de experiencia
5. **Hero Background** - Patrón sutil o gradiente animado
6. **OG Image** - Para compartir en redes (1200x630px)

### Baja Prioridad:
7. **Favicon personalizado** - Reemplazar el default
8. **Screenshots de proyectos** - Múltiples imágenes por proyecto

---

## 🔗 Links Importantes

- **Google Cloud Skills Boost:** https://www.cloudskillsboost.google/
- **Credly (si usas):** https://www.credly.com/
- **Vercel Deploy:** https://vercel.com/

---

## 📋 Checklist de Lanzamiento

- [ ] Agregar links de certificaciones en `data/certifications.json`
- [ ] Crear/agregar imágenes de proyectos faltantes
- [ ] Actualizar `metadataBase` en `app/layout.tsx`
- [ ] Probar en móvil (responsive)
- [ ] Probar tema oscuro/claro
- [ ] Probar formulario de contacto
- [ ] Verificar links externos
- [ ] Revisar ortografía en todos los textos
- [ ] Build final (`pnpm build`)
- [ ] Deploy a Vercel
- [ ] Compartir link en LinkedIn/GitHub

---

## 💡 Próximas Mejoras Sugeridas

1. **Blog Section** - Artículos técnicos sobre DevOps/Cloud
2. **Case Studies** - Proyectos con análisis profundo
3. **Testimonials** - Referencias de colegas/clientes
4. **Analytics** - Google Analytics o Vercel Analytics
5. **Scroll Animations** - Fade in al hacer scroll
6. **Dark Mode Toggle Animation** - Transición más suave

---

## 🐛 Troubleshooting

### El build falla
```bash
# Limpiar cache
rm -rf .next node_modules
pnpm install
pnpm build
```

### Imágenes no aparecen
- Verifica que están en `public/images/`
- El path debe empezar con `/` (ej: `/images/projects/imagen.png`)

### Links de certificaciones no funcionan
- Asegúrate que tu perfil de Google Cloud Skills Boost es público
- Usa el link completo con `https://`

---

## 📞 Soporte

Si tienes dudas sobre cómo actualizar algo específico, revisa:
1. Este README
2. Los comentarios en los archivos JSON
3. Los archivos en `types/index.ts` para ver la estructura de datos

---

**¡Tu portafolio está listo para impresionar reclutadores!** 🎉

Solo falta agregar tus links de certificaciones y las imágenes de proyectos.
