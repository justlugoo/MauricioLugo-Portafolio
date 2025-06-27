import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Users, Clock } from "lucide-react"
import { projects } from "@/data/portfolio-data"
import type { Project } from "@/types/portfolio"
import Link from "next/link"
import Image from "next/image"

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-2 right-2 flex gap-2">
          {project.inDevelopment && (
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              En Desarrollo
            </Badge>
          )}
          {project.isGroupProject && (
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-700 dark:text-blue-400 flex items-center gap-1">
              <Users className="h-3 w-3" />
              Grupo
            </Badge>
          )}
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          {project.featured && <Badge variant="default">Destacado</Badge>}
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.githubUrl && project.githubUrl !== "#" && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Código
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver Demo
              </Link>
            </Button>
          )}
          {project.inDevelopment && !project.liveUrl && (
            <Button size="sm" variant="secondary" disabled>
              <Clock className="h-4 w-4 mr-2" />
              Próximamente
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Proyectos</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Una selección de mis trabajos más recientes</p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mx-auto mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Proyectos Destacados</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="mx-auto mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Otros Proyectos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
