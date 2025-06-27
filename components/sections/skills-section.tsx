import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/portfolio-data"
import type { Skill } from "@/types/portfolio"
import { 
  Star, 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Wrench,
  FileCode,
  Layers,
  Zap,
  GitBranch,
  Shield,
  FileText,
  Server,
  Settings,
  Brush,
  Eye,
  Monitor
} from "lucide-react"

const skillIcons: Record<string, React.ComponentType<any>> = {
  // Backend
  "FastAPI": Zap,
  "Python": FileCode,
  "Django": Layers,
  "SQLAlchemy": Database,
  "PostgreSQL": Database,
  "MySQL": Database,
  "SQLite": Database,
  
  // Frontend
  "React": Layers,
  "TypeScript": FileCode,
  "Next.js": Layers,
  "JavaScript": FileCode,
  "HTML": FileText,
  "CSS": FileText,
  
  // Tools
  "Git": GitBranch,
  "Swagger UI": Eye,
  "Pydantic": FileCode,
  "JWT": Shield,
  
  // Design
  "Bootstrap": Brush,
  "Tailwind CSS": Brush,
}

const skillCategories = {
  frontend: { name: "Frontend", icon: Monitor, color: "text-blue-500" },
  backend: { name: "Backend", icon: Server, color: "text-green-500" },
  tools: { name: "Herramientas", icon: Wrench, color: "text-purple-500" },
  design: { name: "Diseño", icon: Palette, color: "text-pink-500" },
}

function SkillCard({
  category,
  categorySkills,
}: {
  category: keyof typeof skillCategories
  categorySkills: Skill[]
}) {
  const CategoryIcon = skillCategories[category].icon
  const categoryColor = skillCategories[category].color

  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <CategoryIcon className={`h-6 w-6 ${categoryColor}`} />
          <CardTitle className="text-xl">{skillCategories[category].name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center gap-3 min-h-[220px]">
          {categorySkills.map((skill) => {
            const SkillIcon = skillIcons[skill.name] || FileCode
            const isFavorite = skill.name === "FastAPI"
            
            return (
              <div 
                key={skill.name} 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border w-full max-w-xs transition-all duration-200 hover:shadow-md ${
                  isFavorite 
                    ? "bg-primary/10 border-primary/20" 
                    : "bg-muted/30 border-border hover:bg-muted/50"
                }`}
              >
                <SkillIcon className={`h-5 w-5 min-w-[20px] min-h-[20px] ${
                  isFavorite ? "text-primary" : "text-muted-foreground"
                }`} />
                <span className={`text-sm font-medium ${
                  isFavorite ? "text-primary" : "text-foreground"
                }`}>
                  {skill.name}
                </span>
                {isFavorite && <Star className="h-3 w-3 text-primary fill-current ml-auto" />}
              </div>
            )
          })}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Habilidades</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Tecnologías y herramientas que practico. <span className="text-primary font-semibold">FastAPI</span> es mi stack favorito.
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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
