"use client"

import { useState } from "react"
import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react"
import { SectionTitle } from "@/components/shared/SectionTitle"
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
    } catch (error) {
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
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <ScrollReveal>
          <SectionTitle
            title="Trabajemos juntos"
            subtitle="Estoy disponible para nuevos proyectos y colaboraciones"
            align="center"
          />
        </ScrollReveal>

        {/* Main Card */}
        <ScrollReveal delay={0.1}>
          <Card className="group relative overflow-hidden border-0 bg-transparent">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-border/50 to-transparent p-[1px]">
              <div className="absolute inset-0 rounded-3xl bg-card/80 backdrop-blur-xl" />
            </div>

            <div className="relative p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left - Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      Contáctame
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Cuéntame sobre tu interes y cómo puedo ayudarte.
                    </p>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email</p>
                        <a
                          href={`mailto:${personalData.email}`}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {personalData.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
                        <p className="text-foreground font-medium">
                          {personalData.locationDetail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">También puedes encontrarme en</p>
                    <div className="flex gap-3">
                      <Link
                        href={personalData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary hover:bg-primary/10 border border-border/40 hover:border-primary/30 transition-all group/social"
                      >
                        <Github className="h-5 w-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                      </Link>
                      <Link
                        href={personalData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary hover:bg-primary/10 border border-border/40 hover:border-primary/30 transition-all group/social"
                      >
                        <Linkedin className="h-5 w-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right - Contact Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nombre Completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jose Gonzalez"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-xl border-border/50 bg-background/50 hover:bg-background focus:bg-background hover:border-primary/30 focus:border-primary/50 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
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
                        className="h-12 rounded-xl border-border/50 bg-background/50 hover:bg-background focus:bg-background hover:border-primary/30 focus:border-primary/50 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
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
                        className="rounded-xl border-border/50 bg-background/50 hover:bg-background focus:bg-background hover:border-primary/30 focus:border-primary/50 transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 font-medium"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Respondo todos los mensajes en menos de 24 horas
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
