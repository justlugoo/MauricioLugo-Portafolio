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
    <section id="skills" className="py-32 px-6 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <SectionTitle
            title="Tecnologías"
            subtitle="Herramientas y frameworks con los que construyo soluciones"
            align="center"
          />
        </ScrollReveal>

        {/* Uniform Grid - All same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Server

            return (
              <ScrollReveal key={category.id} delay={idx * 0.1}>
                <div className="group relative h-full">
                  {/* Card with fixed structure */}
                  <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm">

                    {/* Subtle hover background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-8 flex flex-col h-full">
                      {/* Header - Fixed height */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300 flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.name}
                        </h3>
                      </div>

                      {/* Skills - Flexible height with consistent spacing */}
                      <div className="flex flex-wrap gap-2 flex-grow">
                        {category.skills.map((skill) => (
                          <SkillBadge key={skill} skill={skill} size="sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
