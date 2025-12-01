"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { ProjectCard } from "@/components/shared/ProjectCard"
import projectsDataRaw from "@/data/projects.json"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import type { Project } from "@/types"

const projectsData = projectsDataRaw as Project[]

export function Projects() {
  const featured = projectsData.filter((p) => p.featured)
  const other = projectsData.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <SectionTitle
            title="Proyectos destacados"
            subtitle="Algunas de las soluciones que he desarrollado usando tecnologías modernas"
          />
        </ScrollReveal>

        {/* Featured Project - Hero Card */}
        {featured.length > 0 && (
          <ScrollReveal delay={0.1}>
            <div className="mb-20">
              <ProjectCard project={featured[0]} featured />
            </div>
          </ScrollReveal>
        )}

        {/* Other Featured Projects (if any) */}
        {featured.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {featured.slice(1).map((project, idx) => (
              <ScrollReveal key={project.id} delay={0.1 + idx * 0.1}>
                <ProjectCard project={project} featured />
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Other Projects */}
        {other.length > 0 && (
          <>
            <ScrollReveal>
              <div className="mb-12">
                <h3 className="text-4xl font-bold text-foreground mb-3">
                  Más proyectos
                </h3>
                <p className="text-muted-foreground text-lg font-light">
                  Otros trabajos interesantes
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {other.map((project, idx) => (
                <ScrollReveal key={project.id} delay={idx * 0.1} variant="fade-up">
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
