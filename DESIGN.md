---
name: Mauricio Lugo, Portafolio
description: Un informe técnico sereno en blanco y tinta pizarra, con un hilo espectral de un píxel que marca solo lo activo.
colors:
  paper: "#ffffff"
  mist: "#f4f6f8"
  ink: "#2a3541"
  ink-2: "#4c5865"
  ink-3: "#5f6c79"
  rule: "#e2e6ea"
  rule-strong: "#c6cdd5"
  field: "#7b8794"
  accent: "#5645b5"
  accent-ink: "#ffffff"
  band-mint: "#a7e3cf"
  band-rose: "#e6a7c2"
  band-violet: "#8b7bd8"
  selection: "#e5e0fa"
  error: "#a3221b"
typography:
  display:
    fontFamily: "Hanken Grotesk Variable, Segoe UI, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 1.5rem + 6.4vw, 6rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Hanken Grotesk Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.45rem + 1.9vw, 2.75rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Hanken Grotesk Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.25rem + 0.55vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Hanken Grotesk Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.12rem + 0.55vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Hanken Grotesk Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Hanken Grotesk Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  focus: "2px"
  sm: "4px"
  md: "6px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 3.5rem)"
  section: "clamp(3rem, 2.2rem + 3.5vw, 5.5rem)"
  col-gap: "3rem"
  row-gap: "2.25rem"
  page: "72rem"
  measure: "62ch"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.5rem"
    height: "2.9rem"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.5rem"
    height: "2.9rem"
  button-quiet-hover:
    textColor: "{colors.accent}"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.8rem 1rem"
  menu-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "0.65rem 1.15rem"
  menu-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    size: "2.9rem"
---

# Design System: Mauricio Lugo, Portafolio

## Overview

**Creative North Star: "El informe con borde de nube"**

Un perfil de ingeniería leído como un informe sereno. La página es blanca, el texto es tinta pizarra acromática y el único color vive en hilos de un píxel (menta, rosa y violeta) que recuerdan el borde iridiscente de una nube. El hilo no decora: marca lo activo, es decir la sección que se está leyendo, el ítem que se explora y la marca del índice. La jerarquía se construye con peso tipográfico (300, 400, 500, 600), nunca con color de texto.

La densidad es holgada y editorial: una sola columna de lectura de 72rem como máximo, reglas finas que separan en lugar de tarjetas, y secciones alternas en un gris azulado apenas más frío que dan ritmo sin cajas. Cada sección lleva una figura abstracta de trazo fino que responde al scroll; ninguna lleva información. El sistema evita los recursos de terminal, el neón y las tarjetas iguales, y un tono que prometa más de lo que el perfil es todavía.

**Key Characteristics:**
- Fondo blanco con alternancia de gris azulado frío; solo tema claro (`color-scheme: light`).
- Texto acromático; el énfasis es de peso, no de color.
- Una sola familia variable, Hanken Grotesk, en cuatro pesos.
- Reglas de 1px como estructura; sin sombras.
- El color aparece solo como hilo espectral y como violeta oscurecido en enlaces y foco.
- Figuras de contorno de 1px por sección, ligadas al scroll.

## Colors

Paleta acromática de pizarra sobre blanco, con un único acento violeta oscurecido y tres tonos de hilo que nunca rellenan superficies ni colorean texto.

### Primary
- **Violeta de foco** (`accent`, #5645b5): color de hover de enlaces y botones, anillo de foco (2px), cursor de texto y borde de campo enfocado. Es el violeta del espectro oscurecido para pasar contraste sobre blanco y sobre el gris.

### Secondary
- **Hilo menta** (`band-mint`, #a7e3cf), **hilo rosa** (`band-rose`, #e6a7c2) y **hilo violeta** (`band-violet`, #8b7bd8): solo trazos de 1 a 1.25px. Se combinan como degradado `--spectrum` a 90deg (menta, rosa, violeta) en reglas, marcas de navegación, y como contornos individuales en las figuras y el borde de nube del hero. Son demasiado claros para texto.

### Neutral
- **Papel** (`paper`, #ffffff): fondo base, campos, menú y botón de menú.
- **Bruma** (`mist`, #f4f6f8): fondo de las secciones `--tint` (Experiencia, Educación, Tecnologías) y hover de la barra media.
- **Tinta pizarra** (`ink`, #2a3541): texto principal, botón primario, títulos.
- **Tinta 2** (`ink-2`, #4c5865): subtítulos, descripciones, enlaces de navegación en reposo.
- **Tinta 3** (`ink-3`, #5f6c79): metadatos, etiquetas, pie, listas en línea, marcador de posición.
- **Regla** (`rule`, #e2e6ea): reglas de sección, separadores suaves, pie.
- **Regla fuerte** (`rule-strong`, #c6cdd5): reglas superiores de ítems, subrayado de enlaces, borde del menú, scrollbar.
- **Campo** (`field`, #7b8794): borde de campos y del botón quieto; elegido para ≥3:1 sobre blanco y sobre bruma.
- **Error** (`error`, #a3221b): borde de un campo inválido y texto del mensaje de error; 6,9:1 sobre el gris de fondo.
- **Selección** (`selection`, #e5e0fa): fondo de texto seleccionado.

### Named Rules
**The Thread-Only Rule.** El color de matiz (menta, rosa, violeta) solo existe como trazo de 1px; nunca como relleno de superficie, fondo de chip ni color de texto.

**The Weight-Not-Hue Rule.** El énfasis en texto se hace con peso, no con color.

**The Quiet Accent Rule.** El violeta oscurecido aparece solo en estados interactivos y de foco; en reposo la página es acromática.

## Typography

**Display Font:** Hanken Grotesk Variable (con Segoe UI, system-ui, Helvetica Neue, Arial)
**Body Font:** Hanken Grotesk Variable (misma familia)
**Label/Mono Font:** la misma familia; no hay monoespaciada.

**Character:** Una sola grotesca variable, cálida y precisa. Los títulos grandes a peso 300 dan aire de informe; el cuerpo a 400 es cómodo; las etiquetas a 600 en versalitas separadas sostienen el rigor sin color.

### Hierarchy
- **Display** (300, clamp(3rem, 1.5rem + 6.4vw, 6rem), 1, -0.03em): solo el nombre en el hero, máx. 11ch.
- **Headline** (300, clamp(1.875rem, 1.45rem + 1.9vw, 2.75rem), 1.1, -0.02em): título de cada sección.
- **Title** (500, `--fs-h3` clamp(1.375rem, 1.25rem + 0.55vw, 1.75rem), 1.2, -0.01em): títulos de ítems; el proyecto principal sube a 400 y a `--fs-feature` clamp(1.625rem, 1.3rem + 1.3vw, 2.375rem). En Certificaciones baja a clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem).
- **Lead** (400, `--fs-lead` clamp(1.25rem, 1.12rem + 0.55vw, 1.5rem), 1.4 a 1.5): rol del hero y disponibilidad en Contacto.
- **Body** (400, `--fs-base` clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem), 1.65): texto general; subtítulo de sección en 44ch máx.
- **Body-sm** (400, `--fs-sm` 0.9375rem, 1.5 a 1.6): logros, descripciones, listas, enlaces con flecha (a 500).
- **Label** (600, `--fs-xs` 0.8125rem, 0.12em, mayúsculas, ink-3): fechas y metadatos (`.meta`, también en las marcas de proyecto).

### Named Rules
**The Weight Ladder Rule.** 300 para títulos de gran tamaño, 400 para cuerpo, 500 para títulos de ítem y enlaces, 600 para etiquetas y énfasis en línea. No se introducen otros pesos ni otra familia.

**The Measure Rule.** El texto corrido se limita con `--measure` (62ch) o menos; la escala fluida se mantiene dentro de los `clamp()` definidos, sin tamaños fijos nuevos.

## Layout

Una sola página de siete secciones (Hero, Experiencia, Proyectos, Educación, Certificaciones, Tecnologías, Contacto) dentro de `.container`: ancho `min(100% - 2 * gutter, 72rem)` con gutter fluido (1.25rem a 3.5rem). Cada sección tiene padding vertical fluido de 3rem a 5.5rem y abre con una regla de 1px del ancho del contenedor (el hero no la lleva). Las secciones alternan fondo: Hero blanco, Experiencia bruma, Proyectos blanco, Certificaciones bruma, Tecnologías blanco, Contacto bruma.

Las rejillas de contenido (`.cols--2`, `--3`, `--4`) usan gap de 2.25rem por 3rem; pasan a 2 columnas desde 44rem y a 3 o 4 desde 64rem. Proyectos pone el principal a ancho completo (1.5fr / 1fr desde 56rem) y Contacto divide info y formulario (1fr / 1.25fr desde 56rem). El hero coloca el nombre a la izquierda con tres datos en fila (desde 40rem) y dos acciones; a la derecha, desde 56rem, tres hilos diagonales ocupan desde el 46% del ancho.

**Navegación responsiva** (la navegación es fija y no tiene fondo de página):
- **≥75rem:** índice lateral de marcas en el margen izquierdo, centrado en vertical. Cada enlace es un trazo de 1rem que crece (1.6rem al hover, 2rem activo) y se llena con el espectro en la sección activa; el nombre aparece al hover o foco y asoma un instante al cargar.
- **48rem a 74.99rem:** barra rectangular compacta centrada arriba, con borde de 1px, esquinas de 6px, enlaces separados por reglas finas y el hilo espectral bajo el enlace activo.
- **<48rem:** botón cuadrado de 2.9rem arriba a la derecha que abre un menú desplegable en columna; el activo pesa 600. Sin JavaScript, el menú queda visible en varias líneas.

`scroll-padding-top` de 5rem; desplazamiento suave solo con `prefers-reduced-motion: no-preference`.

## Elevation & Depth

Plano por definición: no hay una sola sombra en la base de código. La profundidad se transmite con alternancia tonal (blanco contra bruma), reglas de 1px y la opacidad de las figuras (0.4 a 0.5 en reposo, 0.85 a 1 cuando su sección está activa).

### Named Rules
**The No-Shadow Rule.** Ninguna superficie lleva `box-shadow`; la separación es regla, tono o espacio.

**The Active-Section Rule.** Solo una sección está activa a la vez (la que cruza la franja central de la ventana): su regla superior se ilumina con el espectro y su figura sube de opacidad.

## Shapes

Esquinas rectas o de 6px; los botones de acción son píldora (999px). Campos de formulario, menú desplegable, barra media y botón de menú usan 6px; el enlace de salto usa 4px y el anillo de foco 2px. Las superficies de contenido (ítems, secciones) no llevan esquinas ni bordes de caja: se delimitan por una regla superior de 1px. Las viñetas de lista son un trazo de 0.65rem por 1px, no un símbolo, y los separadores en línea son un punto medio (·). Los iconos son SVG de línea del componente `Icon` (menú, cerrar, archivo, flecha arriba-derecha).

## Components

### Buttons
- **Shape:** píldora (999px), alto mínimo 2.9rem, padding 0.7rem 1.5rem, texto 0.9375rem a 500.
- **Primary:** fondo tinta (#2a3541), texto blanco, borde 1px del mismo color.
- **Hover / Focus:** el fondo y el borde pasan al violeta de foco y el texto sigue blanco; transición 0.2s `--ease-out`. Foco: anillo 2px violeta con 3px de separación. Deshabilitado: fondo ink-3 y cursor `progress`.
- **Quiet:** transparente, texto tinta, borde `field`; al hover texto y borde pasan al violeta.

### Enlaces
Subrayado de 1px en regla fuerte, desplazado 0.22em; al hover el texto y el subrayado pasan al violeta. El enlace con flecha (`.link-arrow`, 500) mueve su icono 2px arriba a la derecha al hover.

### Ítems (contenedor de contenido)
Sin fondo ni borde de caja. Regla superior de 1px en regla fuerte; al hover o foco interno, un hilo espectral la recorre de izquierda a derecha en 0.7s. Padding superior de 1.5rem. Es el contenedor de experiencias, proyectos, certificaciones y categorías de tecnologías.

### Inputs / Fields
- **Style:** borde 1px `field`, fondo blanco, esquinas 6px, padding 0.8rem 1rem, texto 1rem; etiqueta superior a 500 en ink-2; marcador en ink-3.
- **Focus:** anillo 2px violeta con borde violeta. Hover: borde ink-2.
- **Error:** borde en `error` cuando es inválido tras la interacción; el mensaje de estado usa el mismo rojo.

### Navigation
Ver Layout para los tres modos. Enlaces en 0.9375rem (0.8125rem a 500 en el índice), ink-2 en reposo y ink al hover o activo (`aria-current`); el activo se refuerza con el hilo espectral, y en móvil también con peso 600.

### Hilo espectral (firma)
Reglas de sección (`.section::after`) e ítem (`.item::after`) de 1px con el degradado `--spectrum`, que entra con `scaleX` desde la izquierda (1.1s en la sección activa, 0.7s en ítems, 0.6s en navegación). Es el único código de «activo» del sistema.

### Figuras abstractas
Contornos de 1px (`non-scaling-stroke`) en menta, rosa y violeta, `aria-hidden`, sin información. Una por sección, cada una en un rincón distinto y animada por el scroll (avanzan al bajar, retroceden al subir, se detienen al parar):
- **Ondas** (Experiencia, arriba a la derecha; Contacto, abajo a la izquierda): 7 anillos que nacen en la esquina, se expanden y se desvanecen.
- **Gotas** (Proyectos): círculos que ascienden como condensación; los grandes, más rápido.
- **Escalera** (Educación, abajo a la derecha): tres escaleras paralelas que ascienden con el scroll; se repiten cada escalón, así que el movimiento no tiene costuras.
- **Engranajes** (Certificaciones): tres engranajes encajados que giran juntos, en el margen izquierdo desde 87rem con máscara que los desvanece antes de llegar al texto.
- **Franja de ondas** (Tecnologías): tres ondas a todo el ancho pegadas al borde inferior, cuyo recorrido crece al acercarse.
- **Borde de nube** (Hero): tres curvas diagonales que se dibujan con una animación de entrada de 1.8s.

Con `prefers-reduced-motion: reduce` el script de figuras no se inicia (quedan en su estado de reposo) y se eliminan las transiciones del hilo, el índice y las figuras; la animación de entrada del borde de nube solo corre con `no-preference`.

## Do's and Don'ts

### Do:
- **Do** usar blanco (#ffffff) y bruma (#f4f6f8) en alternancia como único cambio de fondo entre secciones.
- **Do** enfatizar con peso (300, 400, 500, 600) y mantener el texto en ink, ink-2 o ink-3.
- **Do** separar contenido con reglas de 1px (`rule` o `rule-strong`) en lugar de cajas.
- **Do** reservar menta, rosa y violeta para trazos de 1 a 1.25px y para el degradado `--spectrum`.
- **Do** usar `accent` (#5645b5) solo para hover, foco y cursor.
- **Do** usar esquinas de 6px en controles, píldora en botones de acción, y rectas en todo lo demás.
- **Do** dar a cada figura nueva un contorno de 1px, `aria-hidden`, sin información, ligada al scroll y estática con `prefers-reduced-motion: reduce`.
- **Do** mantener el contraste de bordes de control en ≥3:1 (`field` #7b8794).

### Don't:
- **Don't** rellenar superficies, chips o texto con menta, rosa o violeta claros.
- **Don't** añadir `box-shadow`, tarjetas iguales con borde y fondo, ni degradados rellenos.
- **Don't** introducir otra familia tipográfica, otros pesos, ni tamaños fijos fuera de la escala `--fs-*`.
- **Don't** añadir un tema oscuro: el sistema es solo claro.
- **Don't** recargar la página con recursos de terminal o neón, tipografía monoespaciada ni tarjetas intercambiables.
- **Don't** usar el espectro como decoración permanente: marca solo lo activo (sección, ítem explorado, enlace actual).
