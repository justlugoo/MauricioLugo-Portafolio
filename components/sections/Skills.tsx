"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { SkillBadge } from "@/components/shared/SkillBadge"
import { Server, Monitor, Wrench, Cloud, type LucideIcon } from "lucide-react"
import skillsData from "@/data/skills.json"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  monitor: Monitor,
  wrench: Wrench,
  cloud: Cloud,
}

export function Skills() {
  const sortedCategories = skillsData.categories.sort((a, b) => a.order - b.order)

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            index="05"
            title="Tecnologías"
            subtitle="Herramientas y frameworks con los que construyo soluciones"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {sortedCategories.map((category) => {
              const Icon = iconMap[category.icon] || Server

              return (
                <div key={category.id} className="bg-background p-6">
                  <h3 className="font-mono text-sm uppercase tracking-wide text-foreground mb-4 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} size="sm" />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
