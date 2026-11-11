"use client"

import type { ReactNode } from "react"
import { useSectionPager } from "@/hooks/useSectionPager"

/**
 * Carril horizontal que desplaza las secciones. Es el único punto del
 * contenido que depende del estado del pager; las secciones llegan como
 * `children` ya renderizadas en el servidor.
 */
export function PagerTrack({ children }: { children: ReactNode }) {
  const { activeIndex } = useSectionPager()

  return (
    <div
      className="h-[100dvh] flex transition-transform duration-500"
      style={{
        transform: `translateX(-${activeIndex * 100}dvw)`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  )
}
