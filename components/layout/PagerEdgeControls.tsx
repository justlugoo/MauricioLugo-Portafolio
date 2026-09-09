"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSectionPager } from "@/hooks/useSectionPager"

export function PagerEdgeControls() {
  const { activeIndex, sections, goTo } = useSectionPager()

  return (
    <>
      <button
        onClick={() => goTo(activeIndex - 1)}
        disabled={activeIndex === 0}
        aria-label="Sección anterior"
        className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 border border-border bg-background/80 backdrop-blur-sm text-muted-foreground transition-all hover:text-primary hover:border-primary/60 disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => goTo(activeIndex + 1)}
        disabled={activeIndex === sections.length - 1}
        aria-label="Sección siguiente"
        className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 border border-border bg-background/80 backdrop-blur-sm text-muted-foreground transition-all hover:text-primary hover:border-primary/60 disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </>
  )
}
