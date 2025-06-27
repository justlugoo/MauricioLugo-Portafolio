"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { cvInfo } from "@/data/portfolio-data"

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-claude-dark-100/20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Hola, soy <span className="claude-text-gradient">Mauricio Lugo</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            Estudiante de Tecnología en desarrollo de Sistemas de información y Software, especializado en desarrollo
            Backend con Python, FastAPI. Apasionado por crear soluciones de software eficientes y escalables.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#projects">Ver Proyectos</Link>
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={cvInfo.url} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                {cvInfo.title}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="#contact">Contactar</Link>
            </Button>
          </div>
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-6">
            <Link
              href="https://github.com/Justlugoo"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/justlugoo"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:maurogranados31@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}
