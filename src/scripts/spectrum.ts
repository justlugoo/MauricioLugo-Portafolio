/**
 * Marca la sección activa: el hilo espectral recorre su regla superior y
 * se subraya su enlace en la barra. Es el único movimiento del sitio.
 */
export function initSpectrum(): void {
  lightItemsOnTouch()

  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"))
  const links = new Map<string, HTMLAnchorElement>()
  document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]").forEach((link) => {
    links.set(link.dataset.navLink ?? "", link)
  })
  if (sections.length === 0) return

  const activate = (id: string) => {
    sections.forEach((section) => {
      section.dataset.active = String(section.id === id)
    })
    links.forEach((link, key) => {
      if (key === id) link.setAttribute("aria-current", "true")
      else link.removeAttribute("aria-current")
    })
  }

  // Sección activa = la que cruza la franja central de la ventana
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activate(entry.target.id)
      }
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
  )

  sections.forEach((section) => observer.observe(section))
  activate(sections[0].id)
}

/** En pantallas sin cursor, enciende el hilo del ítem que cruza el centro de la ventana. */
function lightItemsOnTouch(): void {
  if (!window.matchMedia("(hover: none)").matches) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        ;(entry.target as HTMLElement).dataset.lit = String(entry.isIntersecting)
      }
    },
    { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
  )

  document.querySelectorAll<HTMLElement>(".item").forEach((item) => observer.observe(item))
}
