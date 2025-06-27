import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/portfolio-data"
import type { Skill } from "@/types/portfolio"
import { Star } from "lucide-react"

const skillCategories = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Herramientas",
  design: "Diseño",
}

function SkillCard({
  category,
  categorySkills,
}: {
  category: keyof typeof skillCategories
  categorySkills: Skill[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{skillCategories[category]}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categorySkills.map((skill) => (
            <div key={skill.name} className="relative">
              {skill.name === "FastAPI" ? (
                <Badge variant="default" className="bg-primary text-primary-foreground flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  {skill.name}
                </Badge>
              ) : (
                <Badge variant="secondary">{skill.name}</Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function SkillsSection() {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Habilidades</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Tecnologías y herramientas que practico</p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <SkillCard
              key={category}
              category={category as keyof typeof skillCategories}
              categorySkills={categorySkills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
