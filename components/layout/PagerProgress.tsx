"use client"

import { useSectionPager } from "@/hooks/useSectionPager"

/** Barra de progreso del pie de página. */
export function PagerProgressBar() {
  const { sections, activeIndex } = useSectionPager()

  return (
    <div
      className="h-0.5 bg-primary transition-all duration-500"
      style={{
        width: `${((activeIndex + 1) / sections.length) * 100}%`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    />
  )
}

/** Contador «01 / 06» del pie de página. */
export function PagerCounter() {
  const { sections, activeIndex } = useSectionPager()
  const current = String(activeIndex + 1).padStart(2, "0")
  const total = String(sections.length).padStart(2, "0")

  return (
    <div className="font-mono text-xs text-muted-foreground">
      <span className="text-primary">{current}</span>
      <span className="mx-0.5">/</span>
      {total}
    </div>
  )
}
