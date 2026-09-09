"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import personalData from "@/data/personal.json"

export function About() {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionTitle index="01" title="Sobre mí" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-mono text-sm text-primary mb-6">
            <span className="text-muted-foreground">$</span> cat mision.txt
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-snug mb-12 max-w-2xl">
            Construyo <span className="text-primary">backend confiable</span> y doy soporte a
            arquitecturas <span className="text-primary">cloud que escalan</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="border border-border grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border font-mono text-sm">
            <div className="p-4">
              <span className="block mb-1 text-muted-foreground">ubicación</span>
              <span className="text-foreground">{personalData.location}</span>
            </div>
            <div className="p-4">
              <span className="block mb-1 text-muted-foreground">enfoque</span>
              <span className="text-foreground">Backend &amp; Cloud</span>
            </div>
            <div className="p-4">
              <span className="block mb-1 text-muted-foreground">estado</span>
              <span className="text-primary">{personalData.availability}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
