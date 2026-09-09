"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import personalData from "@/data/personal.json"
import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { TerminalWindow } from "@/components/shared/TerminalWindow"
import { useSectionPager } from "@/hooks/useSectionPager"

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function Hero() {
  const { goToId } = useSectionPager()

  return (
    <>
      <AnimatedBackground />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <TerminalWindow title="mauricio@lugo — zsh — 80x24">
          <motion.div initial="hidden" animate="visible" variants={container}>
            <motion.p variants={item} className="font-mono text-sm text-primary mb-2">
              <span className="text-muted-foreground">$</span> whoami
            </motion.p>
            <motion.h1
              variants={item}
              className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-1 leading-tight"
            >
              {personalData.name}
              <span className="cursor-blink text-primary">_</span>
            </motion.h1>
            <motion.p variants={item} className="text-lg md:text-xl text-foreground/80 mb-6">
              {personalData.title}
            </motion.p>

            <motion.p variants={item} className="font-mono text-sm text-primary mb-2">
              <span className="text-muted-foreground">$</span> cat mision.txt
            </motion.p>
            <motion.p
              variants={item}
              className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6 max-w-xl"
            >
              Diseño y construyo <span className="text-primary">sistemas completos</span>: backend
              sólido y <span className="text-primary">arquitectura cloud propia</span>.
            </motion.p>

            <motion.p variants={item} className="font-mono text-sm text-primary mb-2">
              <span className="text-muted-foreground">$</span> cat status.json
            </motion.p>
            <motion.div
              variants={item}
              className="border border-border grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border font-mono text-xs mb-8"
            >
              <div className="p-3">
                <span className="block mb-1 text-muted-foreground">ubicación</span>
                <span className="text-foreground">{personalData.location}</span>
              </div>
              <div className="p-3">
                <span className="block mb-1 text-muted-foreground">enfoque</span>
                <span className="text-foreground">Backend &amp; Cloud</span>
              </div>
              <div className="p-3">
                <span className="block mb-1 text-muted-foreground">estado</span>
                <span className="text-primary">{personalData.availability}</span>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button
                onClick={() => goToId("projects")}
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
                  <FileText className="mr-2 h-4 w-4" />
                  Ver CV
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </TerminalWindow>
      </div>
    </>
  )
}
