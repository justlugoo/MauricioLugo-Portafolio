"use client"

import { useState } from "react"
import type React from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      toast.success("¡Mensaje enviado con éxito! Te responderé pronto.", {
        icon: <CheckCircle className="h-4 w-4" />,
      })
      setFormData({ name: "", email: "", message: "" })
    } catch {
      toast.error("Error al enviar el mensaje. Por favor, intenta de nuevo.", {
        icon: <AlertCircle className="h-4 w-4" />,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          Nombre
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Jose Gonzalez"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-none border-border focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="josegonzales@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-none border-border focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          Mensaje
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe tu idea, tus objetivos y cómo puedo ayudarte..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="rounded-none border-border focus:border-primary resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 rounded-none font-mono text-sm uppercase tracking-wide"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Enviando...
          </span>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Enviar mensaje
          </>
        )}
      </Button>
    </form>
  )
}
