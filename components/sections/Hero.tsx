"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { scrollToElement } from "@/lib/utils"
import personalData from "@/data/personal.json"
import { AnimatedBackground } from "@/components/ui/AnimatedBackground"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 md:py-24 overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-foreground">
          {personalData.name}
        </h1>

        {/* Title & Tagline Container */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-primary font-medium">
            {personalData.title}
          </p>

          <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
            {personalData.tagline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            onClick={() => scrollToElement("#experience")}
            className="text-base px-7 py-6 rounded-full bg-primary hover:bg-primary/90 min-w-[180px] shadow-md hover:shadow-lg transition-all"
          >
            Ver Trabajo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-base px-7 py-6 rounded-full border-2 min-w-[180px] hover:bg-secondary transition-all"
            asChild
          >
            <Link href={personalData.cv.url} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
