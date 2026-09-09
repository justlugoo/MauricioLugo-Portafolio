"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import personalData from "@/data/personal.json"
import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { useSectionPager } from "@/hooks/useSectionPager"

export function Hero() {
  const { goToId } = useSectionPager()

  return (
    <>
      <AnimatedBackground />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <p className="font-mono text-sm text-primary mb-6">
          <span className="text-muted-foreground">$</span> whoami
        </p>

        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          {personalData.name}
          <span className="cursor-blink text-primary">_</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 mb-6">
          {personalData.title}
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10 border-l-2 border-border pl-4">
          {personalData.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => goToId("experience")}
            className="rounded-none px-6 h-11 font-mono text-sm uppercase tracking-wide bg-primary hover:bg-primary/90"
          >
            Ver Trabajo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="rounded-none px-6 h-11 font-mono text-sm uppercase tracking-wide border-border hover:bg-secondary"
            asChild
          >
            <Link href={personalData.cv.url} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
