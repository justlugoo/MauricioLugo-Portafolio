/** Menú plegable de la barra superior (solo pantallas chicas). */
export function initMenu(): void {
  const button = document.querySelector<HTMLButtonElement>("[data-menu-button]")
  const menu = document.querySelector<HTMLElement>("[data-menu]")
  if (!button || !menu) return

  const setOpen = (open: boolean) => {
    button.setAttribute("aria-expanded", String(open))
    menu.dataset.open = String(open)
  }

  button.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true")
  })

  menu.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) setOpen(false)
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setOpen(false)
      button.focus()
    }
  })

  // Al pasar a pantalla ancha el menú vuelve a su estado normal
  window.matchMedia("(min-width: 48rem)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false)
  })
}
