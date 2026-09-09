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
          <div className="mb-10 border border-border grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border font-mono text-sm">
            <div className="p-4">
              <span className="block mb-1 text-muted-foreground">location</span>
              <span className="text-foreground">{personalData.location}</span>
            </div>
            <div className="p-4">
              <span className="block mb-1 text-muted-foreground">focus</span>
              <span className="text-foreground">Backend &amp; Cloud</span>
            </div>
            <div className="p-4">
              <span className="block mb-1 text-muted-foreground">status</span>
              <span className="text-primary">{personalData.availability}</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl font-light">
            {personalData.bio}
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}
