"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Target } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import personalData from "@/data/personal.json"

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Image Container */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary rounded-[2.5rem] transform rotate-3 scale-105" />
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-secondary shadow-xl flex items-center justify-center">
                  <Image
                    src={personalData.avatar}
                    alt="Mauricio Lugo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
                Ingeniería <br />
                <span className="text-muted-foreground">de Sistemas.</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>{personalData.bio}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Info Cards */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm bg-secondary/50 hover:bg-secondary transition-colors rounded-3xl">
              <CardContent className="p-10 flex items-start gap-6">
                <div className="p-4 bg-background rounded-2xl shadow-sm">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Ubicación</h3>
                  <p className="text-muted-foreground text-lg">Colombia (Disponible Remoto)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-secondary/50 hover:bg-secondary transition-colors rounded-3xl">
              <CardContent className="p-10 flex items-start gap-6">
                <div className="p-4 bg-background rounded-2xl shadow-sm">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Enfoque</h3>
                  <p className="text-muted-foreground text-lg">Backend & Cloud Engineering</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
