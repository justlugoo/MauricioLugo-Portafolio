import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { contactInfo } from "@/data/portfolio-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Mauricio Lugo</h3>
            <p className="text-muted-foreground">
              Desarrollador Backend especializado en Python, FastAPI. Estudiante de Tecnología en desarrollo de Sistemas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Sígueme</h3>
            <div className="flex space-x-4">
              {contactInfo.social.github && (
                <Link
                  href={contactInfo.social.github}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </Link>
              )}
              {contactInfo.social.linkedin && (
                <Link
                  href={contactInfo.social.linkedin}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              )}
              {contactInfo.social.twitter && (
                <Link
                  href={contactInfo.social.twitter}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              )}
              <Link
                href={`mailto:${contactInfo.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {currentYear} Mauricio Jose Lugo Granados.
          </p>
        </div>
      </div>
    </footer>
  )
}
