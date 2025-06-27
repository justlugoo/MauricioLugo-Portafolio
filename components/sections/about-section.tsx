import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Sobre mí</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Apasionado por crear soluciones digitales innovadoras
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Mi Historia</h3>
                  <p className="text-muted-foreground mb-4">
                    Soy estudiante de 6to semestre de Tecnología en desarrollo de Sistemas de información y Software
                    (ciclo propedéutico a Ingeniería de sistemas), con una sólida base en desarrollo Backend y
                    experiencia intermedia en Frontend. Mi pasión por la creación de soluciones de software me impulsa a
                    estar en constante aprendizaje.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Me especializo en Python con frameworks como FastAPI, y tengo experiencia en React y TypeScript para el desarrollo frontend. He trabajado en proyectos como LeadsManager, Apero y Task Manager API, aplicando arquitecturas robustas y mejores prácticas.
                  </p>
                  <p className="text-muted-foreground">
                    Mi objetivo profesional es desarrollarme como Full Stack con inclinación hacia el backend,
                    especializándome en DevOps y aspirando a roles de Arquitectura de Software. Tengo nivel de inglés B2
                    y disfruto del análisis crítico, el hip-hop underground y el ajedrez.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
