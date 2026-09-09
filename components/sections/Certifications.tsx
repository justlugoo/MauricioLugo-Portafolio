"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { TerminalPrompt } from "@/components/shared/TerminalPrompt"
import { Button } from "@/components/ui/button"
import { ExternalLink, Shield, Zap, type LucideIcon } from "lucide-react"
import Link from "next/link"
import certificationsData from "@/data/certifications.json"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const certIconMap: Record<string, LucideIcon> = {
  shield: Shield,
  zap: Zap,
}

export function Certifications() {
  const { credlyProfile, certifications, inProgress } = certificationsData

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            index="03"
            title="Certificaciones"
            subtitle="Aprendizaje continuo y validación de conocimientos"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <TerminalPrompt command="ls ~/certs" />
        </ScrollReveal>

        {inProgress && inProgress.length > 0 && (
          <ScrollReveal delay={0.1}>
            <div className="mb-8 flex flex-wrap gap-3">
              {inProgress.map((cert) => (
                <div
                  key={cert.id}
                  className="border border-primary/40 px-4 py-2 font-mono text-xs text-foreground/80"
                >
                  <span className="text-primary uppercase tracking-wide">En progreso</span>
                  {" — "}
                  {cert.name}
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
            {certifications.map((cert) => {
              const Icon = certIconMap[cert.icon] || Shield
              return (
                <Link
                  key={cert.id}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-background hover:bg-secondary/40 transition-colors p-6 flex items-start gap-4"
                >
                  <div className="shrink-0 w-11 h-11 border border-primary/40 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground font-semibold text-lg leading-tight">
                      {cert.name}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                    <span className="font-mono text-xs text-primary inline-flex items-center gap-1.5 group-hover:underline underline-offset-4">
                      Ver credencial
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              className="rounded-none font-mono text-sm uppercase tracking-wide h-11 px-6 border-border hover:bg-secondary"
            >
              <Link href={credlyProfile} target="_blank" rel="noopener noreferrer">
                Ver perfil en Credly
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
