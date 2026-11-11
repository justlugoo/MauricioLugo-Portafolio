import type { CSSProperties } from "react"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import personalData from "@/data/personal.json"
import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { TerminalWindow } from "@/components/shared/TerminalWindow"
import { GoToSectionButton } from "@/components/layout/GoToSectionButton"

/** Posición en la cascada de entrada (ver `.reveal-up` en globals.css). */
const step = (i: number) => ({ "--i": i }) as CSSProperties

/** Resalta en el color primario el texto entre `**`. */
function Highlighted({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-primary">
        {part}
      </span>
    ) : (
      part
    )
  )
}

export function Hero() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <TerminalWindow title="mauricio@lugo — zsh — 80x24">
          <p style={step(0)} className="reveal-up font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> whoami
          </p>
          <h1
            style={step(1)}
            className="reveal-up font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-1 leading-tight"
          >
            {personalData.name}
            <span className="cursor-blink text-primary">_</span>
          </h1>
          <p style={step(2)} className="reveal-up text-lg md:text-xl text-foreground/80 mb-6">
            {personalData.title}
          </p>

          <p style={step(3)} className="reveal-up font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> cat mision.txt
          </p>
          <p
            style={step(4)}
            className="reveal-up text-base md:text-lg text-foreground/90 leading-relaxed mb-6 max-w-xl"
          >
            <Highlighted text={personalData.mission} />
          </p>

          <p style={step(5)} className="reveal-up font-mono text-sm text-primary mb-2">
            <span className="text-muted-foreground">$</span> cat status.json
          </p>
          <div
            style={step(6)}
            className="reveal-up border border-border grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border font-mono text-xs mb-8"
          >
            <div className="p-3">
              <span className="block mb-1 text-muted-foreground">ubicación</span>
              <span className="text-foreground">{personalData.location}</span>
            </div>
            <div className="p-3">
              <span className="block mb-1 text-muted-foreground">enfoque</span>
              <span className="text-foreground">{personalData.focus}</span>
            </div>
            <div className="p-3">
              <span className="block mb-1 text-muted-foreground">estado</span>
              <span className="text-primary">{personalData.availability}</span>
            </div>
          </div>

          <div style={step(7)} className="reveal-up flex flex-wrap gap-4">
            <GoToSectionButton
              sectionId="projects"
              className="rounded-none px-6 h-11 font-mono text-sm uppercase tracking-wide bg-primary hover:bg-primary/90"
            >
              Ver Trabajo
              <ArrowRight className="ml-2 h-4 w-4" />
            </GoToSectionButton>

            <Button
              variant="outline"
              className="rounded-none px-6 h-11 font-mono text-sm uppercase tracking-wide border-border hover:bg-secondary"
              asChild
            >
              <Link href={personalData.cv.url} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Ver CV
              </Link>
            </Button>
          </div>
        </TerminalWindow>
      </div>
    </>
  )
}
