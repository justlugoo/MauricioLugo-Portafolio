import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Users, Wrench } from "lucide-react"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-card rounded-3xl h-full flex flex-col">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Status Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {project.featured && (
            <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 rounded-full px-3">
              Destacado
            </Badge>
          )}
          {project.inDevelopment && (
            <Badge variant="secondary" className="backdrop-blur-md bg-background/80 rounded-full px-3">
              <Wrench className="h-3 w-3 mr-1" />
              En desarrollo
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-medium mb-2 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3 leading-relaxed text-base">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm font-normal rounded-full px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="secondary" className="text-sm font-normal rounded-full px-3 py-1">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-6 pt-6 border-t border-border/40">
          {project.links.github && project.links.github !== "#" && (
            <Link
              href={project.links.github}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span className="text-sm font-medium">Código</span>
            </Link>
          )}
          {project.links.demo && (
            <Link
              href={project.links.demo}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
              <span className="text-sm font-medium">Demo</span>
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}
