import { DROPLETS, GEARS, RIPPLE_COUNT, droplet, gearAngles, rippleRing, smooth } from "./figure-math"

type Draw = (decor: HTMLElement, scroll: number) => void

const shapes = (decor: HTMLElement) => Array.from(decor.querySelectorAll<SVGElement>("svg > *"))

const draw: Record<string, Draw> = {
  /** Experiencia: las ondas se expanden al bajar y se recogen al subir. */
  ripples(decor, scroll) {
    shapes(decor).forEach((el, i) => {
      if (i >= RIPPLE_COUNT) return
      const { r, opacity } = rippleRing(i, scroll)
      el.setAttribute("r", r.toFixed(1))
      el.setAttribute("stroke-opacity", opacity.toFixed(3))
    })
  },

  /** Proyectos: gotas que ascienden como condensación y descienden al volver. */
  droplets(decor, scroll) {
    shapes(decor).forEach((el, i) => {
      if (i >= DROPLETS.length) return
      const { x, y, opacity } = droplet(i, scroll)
      el.setAttribute("cx", x.toFixed(1))
      el.setAttribute("cy", y.toFixed(1))
      el.setAttribute("stroke-opacity", opacity.toFixed(3))
    })
  },

  /** Certificaciones: los tres engranajes giran juntos, encajados. */
  gears(decor, scroll) {
    const angles = gearAngles(scroll)
    decor.querySelectorAll<SVGGElement>("svg > g").forEach((gear, i) => {
      if (i >= GEARS.length) return
      const { cx, cy } = GEARS[i]
      gear.setAttribute("transform", `translate(${cx.toFixed(2)} ${cy.toFixed(2)}) rotate(${angles[i].toFixed(2)})`)
    })
  },

  /** Tecnologías: el recorrido de las ondas se alarga al acercarse y se acorta al alejarse. */
  waves(decor) {
    const top = decor.getBoundingClientRect().top
    const reveal = smooth(0, 1, (window.innerHeight - top) / (window.innerHeight * 0.7))
    decor.style.setProperty("--reveal", reveal.toFixed(3))
  },
}

/**
 * Anima las figuras según el scroll: avanzan al bajar, retroceden al subir y
 * se quedan quietas cuando se deja de desplazar. Solo se redibujan las visibles.
 */
export function initFigures(): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  const decors = Array.from(document.querySelectorAll<HTMLElement>("[data-figure]"))
  const visible = new Set<HTMLElement>()
  let queued = false

  const frame = () => {
    queued = false
    const scroll = window.scrollY
    visible.forEach((decor) => draw[decor.dataset.figure ?? ""]?.(decor, scroll))
  }

  const schedule = () => {
    if (queued) return
    queued = true
    requestAnimationFrame(frame)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const decor = entry.target as HTMLElement
        if (entry.isIntersecting) visible.add(decor)
        else visible.delete(decor)
      }
      schedule()
    },
    { rootMargin: "200px 0px" },
  )

  decors.forEach((decor) => observer.observe(decor))
  window.addEventListener("scroll", schedule, { passive: true })
  window.addEventListener("resize", schedule)
  schedule()
}
