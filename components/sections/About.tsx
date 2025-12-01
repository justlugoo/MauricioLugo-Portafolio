"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Target } from "lucide-react"
import personalData from "@/data/personal.json"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Container */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary rounded-[2.5rem] transform rotate-3 scale-105" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-secondary shadow-xl flex items-center justify-center">
                {/* Placeholder for avatar */}
                <span className="text-8xl font-bold text-primary/20">ML</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
              DevOps <br />
              <span className="text-muted-foreground">Engineer.</span>
            </h2>

            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                Tecnólogo en Sistemas y estudiante de Ingeniería, apasionado por la
                <span className="text-foreground font-medium"> arquitectura cloud</span> y la automatización.
              </p>
              <p>
                Mi enfoque combina la robustez del <span className="text-foreground font-medium">Backend</span> con
                la eficiencia de <span className="text-foreground font-medium">DevOps</span> para crear
                soluciones escalables y resilientes.
              </p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
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
                <p className="text-muted-foreground text-lg">Cloud Architecture & Automation</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
