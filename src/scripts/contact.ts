import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY

type FormState = "idle" | "sending" | "success" | "error"

/** Formulario de contacto: envío con EmailJS y mensajes de estado accesibles. */
export function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]")
  const submit = form?.querySelector<HTMLButtonElement>("[data-submit]")
  const status = form?.querySelector<HTMLElement>("[data-status]")
  if (!form || !submit || !status) return

  const fallbackEmail = form.dataset.email ?? ""

  const setState = (state: FormState, message = "") => {
    status.dataset.state = state
    status.textContent = message
    submit.disabled = state === "sending"
    submit.textContent = state === "sending" ? "Enviando…" : "Enviar mensaje"
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault()
    if (!form.reportValidity()) return

    setState("sending")

    const data = new FormData(form)
    const templateParams = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      time: new Date().toLocaleString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    }

    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("Faltan las variables PUBLIC_EMAILJS_*")
      }
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      form.reset()
      setState("success", "¡Mensaje enviado con éxito! Te responderé pronto.")
    } catch {
      setState(
        "error",
        `No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a ${fallbackEmail}.`,
      )
    }
  })
}
