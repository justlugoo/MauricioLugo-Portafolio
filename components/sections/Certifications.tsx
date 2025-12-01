"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Shield, Network, Zap, Box, BookOpen, Target, Rocket, type LucideIcon } from "lucide-react"
import Link from "next/link"
import certificationsData from "@/data/certifications.json"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const certIconMap: Record<string, LucideIcon> = {
  shield: Shield,
  network: Network,
  zap: Zap,
  box: Box,
}

const inProgressIconMap: Record<string, LucideIcon> = {
  target: Target,
  rocket: Rocket,
}

export function Certifications() {
  const { credlyProfile, googleSkillsBoostProfile, certifications, courses, inProgress } = certificationsData

  return (
    <section id="certifications" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <SectionTitle
            title="Certificaciones & Cursos"
            subtitle="Aprendizaje continuo y validación de conocimientos"
            align="center"
          />
        </ScrollReveal>

        {/* In Progress Certifications - Grid 2 columns */}
        {inProgress && inProgress.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inProgress.map((cert, idx) => {
                const Icon = inProgressIconMap[cert.icon as keyof typeof inProgressIconMap] || Target
                return (
                  <ScrollReveal key={cert.id} delay={0.1 + idx * 0.05}>
                    <Card className="group relative overflow-hidden border-0 bg-transparent h-full">
                      {/* Gradient border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-[1px]">
                        <div className="absolute inset-0 rounded-2xl bg-card/90 backdrop-blur-sm" />
                      </div>

                      {/* Progress bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-t-2xl" />

                      <div className="relative p-6 lg:p-8 h-full flex flex-col">
                        <div className="flex items-start gap-4 flex-grow">
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg" />
                              <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/30">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <Badge className="mb-2 bg-primary/10 text-primary border-primary/30 rounded-full px-3 py-0.5 text-xs">
                              En Progreso
                            </Badge>
                            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                              {cert.name}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {cert.status}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        )}

        {/* Google Cloud Badges */}
        <ScrollReveal delay={0.2}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Insignias de Google Cloud
            </h3>
            <p className="text-muted-foreground">
              Validación de habilidades prácticas en la nube
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {certifications.map((cert, idx) => {
            const Icon = certIconMap[cert.icon] || Shield
            return (
              <ScrollReveal key={cert.id} delay={0.25 + idx * 0.05}>
                <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:scale-[1.02]">
                  <div className="p-6 text-center flex flex-col items-center h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    {/* Name */}
                    <h4 className="font-semibold text-foreground text-sm leading-tight mb-2 flex-grow group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>

                    {/* Issuer */}
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Learning Paths */}
        <ScrollReveal delay={0.4}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Rutas de Aprendizaje
            </h3>
            <p className="text-muted-foreground">
              Cursos y especializaciones completadas
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {courses.map((course, idx) => (
            <ScrollReveal key={course.id} delay={0.45 + idx * 0.05}>
              <Card className="group relative overflow-hidden border border-border/40 hover:border-primary/20 transition-all duration-300 bg-card/30 backdrop-blur-sm h-full flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className="font-semibold text-foreground text-base leading-tight mb-3 flex-grow group-hover:text-primary transition-colors">
                    {course.name}
                  </h4>

                  {/* Provider */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {course.provider}
                  </p>

                  {/* Link */}
                  <Link
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto group/link"
                  >
                    Ver curso
                    <ExternalLink className="ml-1.5 h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* CTAs - Two buttons */}
        <ScrollReveal delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-base font-medium"
            >
              <Link href={credlyProfile} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver perfil en Credly
              </Link>
            </Button>

            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-foreground hover:text-primary px-8 py-6 rounded-full transition-all duration-300 text-base font-medium"
            >
              <Link href={googleSkillsBoostProfile} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver perfil en Skills Boost
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
