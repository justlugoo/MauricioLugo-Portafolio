"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { SkillBadge } from "@/components/shared/SkillBadge"
import { Separator } from "@/components/ui/separator"
import { Server, Monitor, Wrench, Palette, Cloud } from "lucide-react"
import skillsData from "@/data/skills.json"

const iconMap: Record<string, any> = {
  server: Server,
  monitor: Monitor,
  wrench: Wrench,
  palette: Palette,
  cloud: Cloud,
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Tecnologías"
          subtitle="Herramientas y frameworks con los que construyo el futuro"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.categories
            .sort((a, b) => a.order - b.order)
            .map((category) => {
              const Icon = iconMap[category.icon] || Server
              return (
                <div key={category.id} className="bg-secondary/30 rounded-[2rem] p-8 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-background rounded-2xl shadow-sm">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-medium text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} size="md" />
                    ))}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
