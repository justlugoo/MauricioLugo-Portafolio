"use client"

import { useState } from "react"
import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"
import personalData from "@/data/personal.json"

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
      console.error("Error al enviar email:", error)
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
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? Hablemos."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <Card className="lg:col-span-2 border-0 shadow-sm bg-secondary/30 rounded-[2rem]">
            <CardContent className="p-10 space-y-10">
              <div>
                <h3 className="text-2xl font-medium text-foreground mb-2">
                  Información
                </h3>
                <p className="text-muted-foreground">
                  Siempre abierto a nuevas oportunidades y colaboraciones.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-sm">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                {personalData.phone && (
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-sm">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
                      <a
                        href={`tel:${personalData.phone}`}
                        className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                      >
                        {personalData.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-sm">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
                    <p className="text-foreground font-medium text-lg">
                      {personalData.location}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="lg:col-span-3 border-0 shadow-lg rounded-[2rem] bg-card">
            <CardContent className="p-10">
              <h3 className="text-2xl font-medium text-foreground mb-8">
                Envíame un mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium ml-1">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-14 rounded-2xl border-border/50 bg-secondary/20 focus:bg-background transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium ml-1">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 rounded-2xl border-border/50 bg-secondary/20 focus:bg-background transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium ml-1">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-2xl border-border/50 bg-secondary/20 focus:bg-background transition-all resize-none p-4"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-full text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
