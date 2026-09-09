"use client"

import { useState } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { TerminalPrompt } from "@/components/shared/TerminalPrompt"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"
import personalData from "@/data/personal.json"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import Link from "next/link"

export function Contact() {
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
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionTitle index="05" title="Contacto" />
        </ScrollReveal>

        <ScrollReveal delay={0.03}>
          <TerminalPrompt command="curl -X POST /contact" />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="inline-flex items-center gap-2 border border-primary/40 px-4 py-2 mb-10 font-mono text-xs uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary">{personalData.availability}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="border border-border p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left - Contact Info */}
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5" /> correo
                  </p>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {personalData.email}
                  </a>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> ubicación
                  </p>
                  <p className="text-foreground font-medium">
                    {personalData.locationDetail}
                  </p>
                </div>

                <div className="pt-6 border-t border-border flex gap-3">
                  <Link
                    href={personalData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 border border-border hover:border-primary/60 hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={personalData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 border border-border hover:border-primary/60 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div>
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
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
