/**
 * Geometría de las figuras abstractas. Se usa en el servidor (estado inicial) y
 * en el navegador (animación ligada al scroll), para que ambos coincidan.
 * El caso base es `scroll = 0`.
 */

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))

/** Envuelve `v` dentro de [min, max). */
export const wrap = (v: number, min: number, max: number) => {
  const span = max - min
  return ((((v - min) % span) + span) % span) + min
}

/** Escalón suave entre `a` y `b`. */
export const smooth = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a), 0, 1)
  return t * t * (3 - 2 * t)
}

/* Ondas (Experiencia): anillos que nacen en la esquina, se expanden y se desvanecen */
export const RIPPLE_COUNT = 7
const RIPPLE_REACH = 250

export function rippleRing(i: number, scroll: number) {
  const t = wrap(i / RIPPLE_COUNT + scroll * 0.0009, 0, 1)
  return {
    r: t * RIPPLE_REACH,
    opacity: Math.min(1, smooth(0, 0.1, t) * (1 - t) ** 0.8 * 1.25),
  }
}

/* Gotas (Proyectos): suben como condensación; las grandes más rápido */
export const DROPLETS = [
  { x: 330, y: 62, r: 26, c: 0, o: 1 },
  { x: 268, y: 118, r: 11, c: 1, o: 1 },
  { x: 372, y: 128, r: 16, c: 2, o: 1 },
  { x: 226, y: 52, r: 6, c: 2, o: 0.9 },
  { x: 300, y: 186, r: 34, c: 1, o: 0.55 },
  { x: 388, y: 24, r: 9, c: 0, o: 0.8 },
  { x: 186, y: 140, r: 4, c: 0, o: 0.8 },
  { x: 232, y: 196, r: 14, c: 2, o: 0.6 },
  { x: 120, y: 90, r: 18, c: 0, o: 0.45 },
  { x: 60, y: 160, r: 7, c: 1, o: 0.6 },
] as const

export function droplet(i: number, scroll: number) {
  const d = DROPLETS[i]
  const y = wrap(d.y - scroll * (0.03 + d.r * 0.003), -20, 260)
  const x = d.x + Math.sin(scroll * 0.003 + i * 1.7) * 5
  const fade = smooth(-20, 20, y) * (1 - smooth(220, 260, y))
  return { x, y, opacity: d.o * fade }
}

/* Engranajes (Certificaciones): tres piezas que engranan de verdad. Cada una
   gira en sentido contrario a su vecina y a una velocidad proporcional a sus
   dientes, así que con el scroll se mueven como un mecanismo real. */
const MODULE = 8 // tamaño del diente: radio primitivo = módulo × dientes / 2
const ADDENDUM = MODULE * 0.5
const DEDENDUM = MODULE * 0.62

interface GearSpec {
  teeth: number
  /** Gira respecto al engranaje anterior: dirección, desde su centro, hacia este. */
  from?: { gear: number; angle: number }
  cx: number
  cy: number
}

const radius = (teeth: number) => (MODULE * teeth) / 2
const rad = (deg: number) => (deg * Math.PI) / 180

/** A es el engranaje grande; B engrana con A y C engrana con B. */
const A: GearSpec = { teeth: 14, cx: 80, cy: 90 }
const B: GearSpec = {
  teeth: 9,
  from: { gear: 0, angle: 35 },
  cx: A.cx + (radius(14) + radius(9)) * Math.cos(rad(35)),
  cy: A.cy + (radius(14) + radius(9)) * Math.sin(rad(35)),
}
const C: GearSpec = {
  teeth: 7,
  from: { gear: 1, angle: 105 },
  cx: B.cx + (radius(9) + radius(7)) * Math.cos(rad(105)),
  cy: B.cy + (radius(9) + radius(7)) * Math.sin(rad(105)),
}

export const GEARS = [A, B, C].map((g) => ({ ...g, r: radius(g.teeth) }))
export const GEAR_TURN = 0.08 // grados de giro del engranaje A por píxel de scroll

/** Fase de diente (0 = diente sobre la línea de centros) de un engranaje hacia `toward`. */
const phase = (theta: number, teeth: number, toward: number) => {
  const pitch = 360 / teeth
  return ((((toward - theta) / pitch) % 1) + 1) % 1
}

/** Ángulos iniciales con los dientes de cada par encajando (diente contra hueco). */
const REST = (() => {
  const theta = [0, 0, 0]
  for (const i of [1, 2]) {
    const from = GEARS[i].from!
    const prev = from.gear
    const towardNext = from.angle // desde el anterior hacia este
    const towardPrev = from.angle + 180 // desde este hacia el anterior
    const prevPhase = phase(theta[prev], GEARS[prev].teeth, towardNext)
    const target = (0.5 - prevPhase + 1) % 1
    theta[i] = towardPrev - (360 / GEARS[i].teeth) * target
  }
  return theta
})()

/** Ángulo (grados) de cada engranaje para un scroll dado. */
export function gearAngles(scroll: number) {
  const turn = scroll * GEAR_TURN
  return GEARS.map((g, i) => {
    // el vecino gira en sentido contrario y con la relación de dientes
    const ratio = GEARS[0].teeth / g.teeth
    const direction = i % 2 === 0 ? 1 : -1
    return REST[i] + direction * turn * ratio
  })
}

/** Contorno de un engranaje centrado en el origen, con los dientes en reposo. */
export function gearPath(teeth: number) {
  const r = radius(teeth)
  const pitch = (Math.PI * 2) / teeth
  const root = r - DEDENDUM
  const tip = r + ADDENDUM
  const pt = (rr: number, a: number) => `${(Math.cos(a) * rr).toFixed(2)} ${(Math.sin(a) * rr).toFixed(2)}`
  const parts: string[] = []
  for (let i = 0; i < teeth; i++) {
    const c = i * pitch
    parts.push(
      `${i === 0 ? "M" : "L"} ${pt(root, c - pitch * 0.3)}`,
      `L ${pt(tip, c - pitch * 0.15)}`,
      `L ${pt(tip, c + pitch * 0.15)}`,
      `L ${pt(root, c + pitch * 0.3)}`,
      `L ${pt(root, c + pitch * 0.5)}`,
    )
  }
  return parts.join(" ") + " Z"
}
