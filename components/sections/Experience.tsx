"use client"

import { SectionTitle } from "@/components/shared/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, CheckCircle2, Calendar } from "lucide-react"
import experienceData from "@/data/experience.json"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Experience() {
  const featured = experienceData.filter((exp) => exp.featured)
  const others = experienceData.filter((exp) => !exp.featured)

  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            title="Experiencia"
            subtitle="Trayectoria profesional y logros destacados"
            align="left"
          />
        </ScrollReveal>

        {/* Featured Experience */}
        <div className="space-y-8 mb-20">
          {featured.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={idx * 0.1}>
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-[2rem] overflow-hidden bg-card">
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Role & Company */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div>
                        <h3 className="text-3xl font-medium text-foreground mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="pt-4">
                        <div className="text-5xl font-bold text-primary/20">
                          {exp.durationShort}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="lg:col-span-8 space-y-8">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          Logros Clave
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-secondary/50 p-4 rounded-2xl">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/80 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-sm px-4 py-1.5 rounded-full font-normal bg-secondary hover:bg-secondary/80"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Other Experience */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((exp, idx) => (
              <ScrollReveal key={exp.id} delay={idx * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-all rounded-[2rem] bg-card h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <h4 className="text-xl font-medium text-foreground mb-1">
                        {exp.position}
                      </h4>
                      <p className="text-lg text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs rounded-full px-3 py-1 font-normal border-border/60">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
