import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Wrench, ArrowUpRight } from "lucide-react"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return <FeaturedProjectCard project={project} />
  }

  return <CompactProjectCard project={project} />
}

// Featured Project - Horizontal Layout
function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative overflow-hidden border-0 bg-transparent">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-border via-border/50 to-transparent p-[1px] group-hover:from-primary/30 group-hover:via-primary/10 transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl bg-card/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden min-h-[400px]">

        {/* Image Section - Left */}
        <div className="relative h-full min-h-[350px] lg:min-h-full overflow-hidden order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent z-10 opacity-30" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Floating Badge */}
          {project.featured && (
            <div className="absolute bottom-6 left-6 z-20">
              <Badge className="bg-primary hover:bg-primary text-primary-foreground border-0 rounded-full px-4 py-2 shadow-lg shadow-primary/20 backdrop-blur-sm text-sm font-medium">
                Destacado
              </Badge>
            </div>
          )}
        </div>

        {/* Content Section - Right */}
        <div className="relative p-8 lg:p-10 flex flex-col justify-center order-1 lg:order-2">

          {/* Status Badge */}
          {project.inDevelopment && (
            <Badge variant="secondary" className="w-fit mb-4 bg-secondary/80 backdrop-blur-sm border border-border/40 rounded-full px-3 py-1.5 text-foreground/80 shadow-sm">
              <Wrench className="h-3.5 w-3.5 mr-2" />
              En desarrollo
            </Badge>
          )}

          {/* Title */}
          <h3 className="text-4xl lg:text-5xl font-bold mb-5 text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
            {project.title}
            <ArrowUpRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
          </h3>

          {/* Description */}
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 font-light max-w-xl">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-sm font-medium rounded-lg px-3 py-1 bg-primary/5 text-foreground/80 border-primary/20 hover:bg-primary/10 hover:border-primary/30 hover:text-foreground transition-all duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 flex-wrap">
            {project.links.github && project.links.github !== "#" && (
              <Link
                href={project.links.github}
                className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 text-foreground font-medium border border-border"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                Ver Código
              </Link>
            )}
            {project.links.demo && (
              <Link
                href={project.links.demo}
                className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 text-primary-foreground font-medium shadow-md shadow-primary/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Demo
                <ExternalLink size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

// Compact Project Card - Vertical Layout
function CompactProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative overflow-hidden border-0 bg-transparent h-full flex flex-col transition-transform duration-300 hover:scale-[1.01]">

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-border via-border/50 to-transparent p-[1px] group-hover:from-primary/30 group-hover:via-primary/10 transition-all duration-300">
        <div className="absolute inset-0 rounded-2xl bg-card/70 backdrop-blur-sm" />
      </div>

      {/* Content Wrapper */}
      <div className="relative h-full flex flex-col rounded-2xl overflow-hidden">

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent z-10 opacity-60" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            {project.inDevelopment && (
              <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm border border-border/40 rounded-full px-3 py-1 text-xs">
                <Wrench className="h-3 w-3 mr-1" />
                En desarrollo
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground line-clamp-2 leading-relaxed text-sm mb-5 font-light">
            {project.description}
          </p>

          {/* Tags - Show all */}
          <div className="flex flex-wrap gap-2 mb-5 mt-auto">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs rounded-lg px-2.5 py-1 bg-primary/5 border-border/50 text-muted-foreground group-hover:border-primary/20 group-hover:bg-primary/10 transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/30">
            {project.links.github && project.links.github !== "#" && (
              <Link
                href={project.links.github}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-1.5 rounded-lg bg-secondary/50 group-hover/link:bg-secondary transition-colors">
                  <Github size={16} />
                </div>
                Código
              </Link>
            )}
            {project.links.demo && (
              <Link
                href={project.links.demo}
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors ml-auto group/link font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
                <div className="p-1.5 rounded-lg bg-primary/10 group-hover/link:bg-primary/15 transition-colors">
                  <ExternalLink size={16} />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
