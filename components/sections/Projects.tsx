"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { ProjectCard } from "@/components/shared/ProjectCard"
import projectsData from "@/data/projects.json"

export function Projects() {
  const featured = projectsData.filter((p) => p.featured)
  const other = projectsData.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Proyectos destacados"
          subtitle="Algunas de las soluciones que he desarrollado usando tecnologías modernas"
        />

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        {other.length > 0 && (
          <>
            <h3 className="text-3xl font-bold mb-8 text-foreground mt-16">
              Otros proyectos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {other.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
