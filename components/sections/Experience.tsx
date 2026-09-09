"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { SkillBadge } from "@/components/shared/SkillBadge"
import experienceData from "@/data/experience.json"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Experience() {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            index="02"
            title="Experiencia"
            subtitle="Trayectoria profesional y logros destacados"
          />
        </ScrollReveal>

        <div className="border-t border-border">
          {experienceData.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={idx * 0.1}>
              <div className="py-8 border-b border-border grid grid-cols-1 md:grid-cols-[170px_1fr] gap-4 md:gap-8">
                <div className="font-mono text-xs text-primary uppercase tracking-wide">
                  {exp.duration}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {exp.position}
                  </h3>
                  <p className="text-muted-foreground mb-5">{exp.company}</p>

                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                        <span className="font-mono text-primary shrink-0">›</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <SkillBadge key={tech} skill={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
