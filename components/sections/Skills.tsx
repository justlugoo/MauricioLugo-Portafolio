"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { TerminalPrompt } from "@/components/shared/TerminalPrompt"
import { SKILL_ICONS } from "@/lib/skill-icons"
import skillsData from "@/data/skills.json"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Skills() {
  const sortedCategories = skillsData.categories.sort((a, b) => a.order - b.order)

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            index="04"
            title="Tecnologías"
            subtitle="Herramientas y frameworks con los que construyo soluciones"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <TerminalPrompt command="cat stack.yml" />
        </ScrollReveal>

        <div className="space-y-8">
          {sortedCategories.map((category, catIdx) => (
            <ScrollReveal key={category.id} delay={0.1 + catIdx * 0.05}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-4">
                  {category.name}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {category.skills.map((skill) => {
                    const Icon = SKILL_ICONS[skill]
                    return (
                      <div
                        key={skill}
                        className="group aspect-square border border-border hover:border-primary/60 hover:bg-secondary/30 flex flex-col items-center justify-center gap-2 p-2 transition-colors"
                      >
                        {Icon && (
                          <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        )}
                        <span className="font-mono text-[10px] leading-tight text-center text-muted-foreground group-hover:text-foreground line-clamp-2">
                          {skill}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
