"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
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
    <section id="certifications" className="py-16 md:py-20 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            index="05"
            title="Certificaciones"
            subtitle="Aprendizaje continuo y validación de conocimientos"
          />
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
          <div className="border-t border-border">
            {certifications.map((cert) => {
              const Icon = certIconMap[cert.icon] || Shield
              return (
                <div
                  key={cert.id}
                  className="py-5 border-b border-border flex items-center justify-between gap-4 flex-wrap"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>

                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-primary hover:underline underline-offset-4 inline-flex items-center gap-1.5 shrink-0"
                  >
                    Ver credencial
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
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
    </section>
  )
}
