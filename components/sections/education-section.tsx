import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education, courses } from "@/data/portfolio-data"
import { GraduationCap, BookOpen } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Educación y Cursos</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Mi formación académica y desarrollo profesional continuo
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Educación */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Educación</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{edu.duration}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Cursos  </h3>
            </div>
            <div className="space-y-4">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>{course.platform}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{course.duration}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
