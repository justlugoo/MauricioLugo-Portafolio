"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

interface SectionPagerContextValue {
  sections: string[]
  activeIndex: number
  goTo: (index: number) => void
  goToId: (id: string) => void
}

const SectionPagerContext = createContext<SectionPagerContextValue | null>(null)

const TRANSITION_LOCK_MS = 550
const WHEEL_THRESHOLD = 20
const SWIPE_THRESHOLD = 50

export function SectionPagerProvider({
  sections,
  children,
}: {
  sections: string[]
  children: ReactNode
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeIndexRef = useRef(0)
  const isAnimating = useRef(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(sections.length - 1, index))
      if (clamped === activeIndexRef.current) return
      isAnimating.current = true
      activeIndexRef.current = clamped
      setActiveIndex(clamped)
      window.setTimeout(() => {
        isAnimating.current = false
      }, TRANSITION_LOCK_MS)
    },
    [sections.length]
  )

  const goToId = useCallback(
    (id: string) => {
      const idx = sections.indexOf(id)
      if (idx >= 0) goTo(idx)
    },
    [sections, goTo]
  )

  useEffect(() => {
    // Horizontal paging only: a purely vertical gesture always scrolls the
    // active section's own content, never advances the page.
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return
      if (Math.abs(e.deltaX) < WHEEL_THRESHOLD) return
      if (isAnimating.current) {
        e.preventDefault()
        return
      }
      e.preventDefault()
      goTo(activeIndexRef.current + (e.deltaX > 0 ? 1 : -1))
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return
      if (isAnimating.current) return

      if (e.key === "ArrowRight") {
        e.preventDefault()
        goTo(activeIndexRef.current + 1)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        goTo(activeIndexRef.current - 1)
      } else if (e.key === "Home") {
        e.preventDefault()
        goTo(0)
      } else if (e.key === "End") {
        e.preventDefault()
        goTo(sections.length - 1)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      touchStart.current = t ? { x: t.clientX, y: t.clientY } : null
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current || isAnimating.current) return
      const t = e.changedTouches[0]
      const start = touchStart.current
      touchStart.current = null
      if (!t) return

      const deltaX = start.x - t.clientX
      const deltaY = start.y - t.clientY
      if (Math.abs(deltaX) <= Math.abs(deltaY)) return
      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return

      goTo(activeIndexRef.current + (deltaX > 0 ? 1 : -1))
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [goTo, sections.length])

  return (
    <SectionPagerContext.Provider value={{ sections, activeIndex, goTo, goToId }}>
      {children}
    </SectionPagerContext.Provider>
  )
}

export function useSectionPager() {
  const ctx = useContext(SectionPagerContext)
  if (!ctx) {
    throw new Error("useSectionPager must be used within a SectionPagerProvider")
  }
  return ctx
}
