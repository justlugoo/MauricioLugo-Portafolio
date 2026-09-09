import Link from "next/link"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { SkillBadge } from "@/components/shared/SkillBadge"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return <SpotlightProject project={project} />
  }

  return <ProjectRow project={project} />
}

function SpotlightProject({ project }: { project: Project }) {
  return (
    <div className="border border-primary/40 p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3 mb-5 font-mono text-xs uppercase tracking-wide">
        <span className="text-primary">Proyecto principal</span>
        {project.inDevelopment && (
          <span className="border border-primary/50 text-primary px-2 py-0.5">
            En desarrollo
          </span>
        )}
        {project.isGroupProject && (
          <span className="border border-border text-muted-foreground px-2 py-0.5">
            Equipo
          </span>
        )}
        <span className="text-muted-foreground ml-auto">{project.year}</span>
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 flex items-center gap-2">
        {project.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
        {project.longDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <SkillBadge key={tag} skill={tag} size="sm" />
        ))}
      </div>

      <ProjectLinks project={project} />
    </div>
  )
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="py-6 border-b border-border grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8 md:items-start">
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          {project.isGroupProject && (
            <span className="font-mono text-xs border border-border text-muted-foreground px-1.5 py-0.5">
              equipo
            </span>
          )}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-3 max-w-xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <SkillBadge key={tag} skill={tag} size="sm" />
          ))}
        </div>
      </div>

      <div className="md:pt-1 shrink-0">
        <ProjectLinks project={project} compact />
      </div>
    </div>
  )
}

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  const hasGithub = project.links.github && project.links.github !== "#"
  const hasDemo = Boolean(project.links.demo)

  if (!hasGithub && !hasDemo) {
    return null
  }

  return (
    <div className={`flex ${compact ? "flex-row md:flex-col" : "flex-wrap"} gap-4 items-start`}>
      {hasGithub && (
        <Link
          href={project.links.github!}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 font-mono text-sm text-foreground hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" />
          Código
          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </Link>
      )}
      {hasDemo && (
        <Link
          href={project.links.demo!}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 font-mono text-sm text-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          Demo
          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </Link>
      )}
    </div>
  )
}
