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
  registerSectionRef: (index: number) => (el: HTMLDivElement | null) => void
}

const SectionPagerContext = createContext<SectionPagerContextValue | null>(null)

const TRANSITION_LOCK_MS = 700
const WHEEL_THRESHOLD = 24
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
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const touchStartY = useRef<number | null>(null)

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

  const registerSectionRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      sectionRefs.current[index] = el
    },
    []
  )

  useEffect(() => {
    const getEdges = () => {
      const container = sectionRefs.current[activeIndexRef.current]
      if (!container) return { atTop: true, atBottom: true }
      const atTop = container.scrollTop <= 1
      const atBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - 1
      return { atTop, atBottom }
    }

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) {
        e.preventDefault()
        return
      }
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return

      const { atTop, atBottom } = getEdges()

      if (e.deltaY > 0 && atBottom) {
        e.preventDefault()
        goTo(activeIndexRef.current + 1)
      } else if (e.deltaY < 0 && atTop) {
        e.preventDefault()
        goTo(activeIndexRef.current - 1)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return
      if (isAnimating.current) return

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault()
        goTo(activeIndexRef.current + 1)
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
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
      touchStartY.current = e.touches[0]?.clientY ?? null
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || isAnimating.current) return
      const endY = e.changedTouches[0]?.clientY ?? touchStartY.current
      const deltaY = touchStartY.current - endY
      touchStartY.current = null
      if (Math.abs(deltaY) < SWIPE_THRESHOLD) return

      const { atTop, atBottom } = getEdges()

      if (deltaY > 0 && atBottom) {
        goTo(activeIndexRef.current + 1)
      } else if (deltaY < 0 && atTop) {
        goTo(activeIndexRef.current - 1)
      }
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
    <SectionPagerContext.Provider
      value={{ sections, activeIndex, goTo, goToId, registerSectionRef }}
    >
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
