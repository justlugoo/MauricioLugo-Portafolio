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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 md:py-40 overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {/* Main Heading - MASSIVE Typography */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none text-foreground">
          {personalData.name}
        </h1>

        {/* Title & Tagline Container */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-medium">
            {personalData.title}
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
            {personalData.tagline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            onClick={() => scrollToElement("#experience")}
            className="text-lg px-8 py-7 rounded-full bg-primary hover:bg-primary/90 min-w-[200px] shadow-lg hover:shadow-xl transition-all"
          >
            Ver Trabajo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-7 rounded-full border-2 min-w-[200px] hover:bg-secondary transition-all"
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
