import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { cvInfo } from "@/data/portfolio-data"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-claude-dark-100/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hola, soy <span className="claude-text-gradient">Mauricio Lugo</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Estudiante de Tecnología en desarrollo de Sistemas de información y Software, especializado en desarrollo
            Backend con Python, FastAPI. Apasionado por crear soluciones de software eficientes y escalables.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#projects">Ver Proyectos</Link>
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={cvInfo.url} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                {cvInfo.title}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contactar</Link>
            </Button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://github.com/Justlugoo"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/justlugoo"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:maurogranados31@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
