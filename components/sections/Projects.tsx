"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { TerminalPrompt } from "@/components/shared/TerminalPrompt"
import { ProjectCard } from "@/components/shared/ProjectCard"
import projectsDataRaw from "@/data/projects.json"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import type { Project } from "@/types"

const projectsData = projectsDataRaw as Project[]

export function Projects() {
  const spotlight = projectsData.find((p) => p.featured)
  const rest = projectsData.filter((p) => !p.featured)

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            index="02"
            title="Proyectos"
            subtitle="Algunas de las soluciones que he desarrollado usando tecnologías modernas"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <TerminalPrompt command="ls -la ~/proyectos" />
        </ScrollReveal>

        {spotlight && (
          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <ProjectCard project={spotlight} featured />
            </div>
          </ScrollReveal>
        )}

        {rest.length > 0 && (
          <ScrollReveal delay={0.15}>
            <div className="border-t border-border">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  )
}
