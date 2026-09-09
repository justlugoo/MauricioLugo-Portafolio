"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import personalData from "@/data/personal.json"
import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { useSectionPager } from "@/hooks/useSectionPager"

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function Hero() {
  const { goToId } = useSectionPager()

  return (
    <>
      <AnimatedBackground />

      {/* Oversized watermark, purely decorative */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 bottom-0 translate-x-[10%] translate-y-[18%] font-mono font-bold text-foreground/[0.04] text-[28vw] leading-none"
      >
        {"</>"}
      </span>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 max-w-3xl mx-auto w-full"
      >
        <motion.p variants={item} className="font-mono text-sm text-primary mb-6">
          <span className="text-muted-foreground">$</span> whoami
        </motion.p>

        <motion.h1
          variants={item}
          className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-5 leading-[0.95]"
        >
          {personalData.name}
          <span className="cursor-blink text-primary">_</span>
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6">
          {personalData.title}
        </motion.p>

        <motion.p
          variants={item}
          className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10 border-l-2 border-primary/50 pl-4"
        >
          {personalData.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Button
            onClick={() => goToId("projects")}
            className="rounded-none px-6 h-12 font-mono text-sm uppercase tracking-wide bg-primary hover:bg-primary/90"
          >
            Ver Trabajo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="rounded-none px-6 h-12 font-mono text-sm uppercase tracking-wide border-border hover:bg-secondary"
            asChild
          >
            <Link href={personalData.cv.url} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </>
  )
}
