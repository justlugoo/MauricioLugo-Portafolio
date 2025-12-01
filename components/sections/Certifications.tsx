"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Shield, Network, Zap, Box, Target } from "lucide-react"
import Link from "next/link"
import certificationsData from "@/data/certifications.json"

const iconMap: Record<string, any> = {
  shield: Shield,
  network: Network,
  zap: Zap,
  box: Box,
}

export function Certifications() {
  const { credlyProfile, certifications, inProgress } = certificationsData

  return (
    <section id="certifications" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Certificaciones"
          subtitle="Validación continua de conocimientos y habilidades"
          align="center"
        />

        {/* Google Cloud Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Shield
            return (
              <Card
                key={cert.id}
                className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-[2rem] bg-card"
              >
                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  {/* Icon with background */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Certification Name */}
                  <h3 className="font-medium text-foreground text-lg leading-tight mb-2 flex-grow">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm text-muted-foreground mt-2">
                    {cert.issuer}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* In Progress */}
        {inProgress && (
          <Card className="border-0 shadow-lg mb-16 hover:shadow-xl transition-shadow rounded-[2rem] bg-card overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary/50 to-primary" />
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center animate-pulse">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-2">
                    En Progreso
                  </div>
                  <h3 className="text-3xl font-medium text-foreground">
                    {inProgress.name}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {inProgress.status}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Link href={credlyProfile} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Ver perfil en Credly
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
