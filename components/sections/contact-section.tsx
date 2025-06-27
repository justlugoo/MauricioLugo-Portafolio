"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import { contactInfo } from "@/data/portfolio-data"
import { toast } from "sonner"
import emailjs from '@emailjs/browser'


export function ContactSection() {
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
        time: new Date().toLocaleString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      toast.success("¡Mensaje enviado con éxito! Te responderé pronto.", {
        icon: <CheckCircle className="h-4 w-4" />,
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error('Error al enviar email:', error)
      toast.error("Error al enviar el mensaje. Por favor, intenta de nuevo.", {
        icon: <AlertCircle className="h-4 w-4" />,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contacto</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>No dudes en contactarme por cualquiera de estos medios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              {contactInfo.phone && (
                <div className="flex items-center space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">{contactInfo.location}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Envíame un Mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderé lo antes posible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensaje
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
