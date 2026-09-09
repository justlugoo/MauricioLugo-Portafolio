"use client"

import { forwardRef, type ReactNode } from "react"

interface SectionSlideProps {
  id: string
  children: ReactNode
}

export const SectionSlide = forwardRef<HTMLDivElement, SectionSlideProps>(
  ({ id, children }, ref) => {
    return (
      <div id={id} ref={ref} className="h-[100dvh] w-full overflow-y-auto">
        <div className="relative min-h-full flex flex-col justify-center px-6 pt-20 pb-16">
          {children}
        </div>
      </div>
    )
  }
)

SectionSlide.displayName = "SectionSlide"
