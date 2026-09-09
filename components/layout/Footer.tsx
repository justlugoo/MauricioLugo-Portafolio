"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import personalData from "@/data/personal.json"
import { useSectionPager } from "@/hooks/useSectionPager"

export function Footer() {
  const { sections, activeIndex, goTo } = useSectionPager()
  const current = String(activeIndex + 1).padStart(2, "0")
  const total = String(sections.length).padStart(2, "0")

  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 h-12 border-t border-border bg-background/95">
      <div
        className="h-0.5 bg-primary transition-all duration-300 ease-out"
        style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
      />
      <div className="h-[calc(3rem-2px)] max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Sección anterior"
            className="hover:text-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span>
            <span className="text-primary">{current}</span>
            <span className="mx-0.5">/</span>
            {total}
          </span>
          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === sections.length - 1}
            aria-label="Sección siguiente"
            className="hover:text-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="hidden sm:flex gap-4">
          {personalData.social.github && (
            <Link
              href={personalData.social.github}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
          {personalData.social.linkedin && (
            <Link
              href={personalData.social.linkedin}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          )}
          <Link
            href={`mailto:${personalData.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
