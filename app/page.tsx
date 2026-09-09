"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SectionSlide } from "@/components/layout/SectionSlide"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Certifications } from "@/components/sections/Certifications"
import { Contact } from "@/components/sections/Contact"
import { SectionPagerProvider, useSectionPager } from "@/hooks/useSectionPager"

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "certifications",
  "contact",
]

function PagerTrack() {
  const { activeIndex } = useSectionPager()

  return (
    <div
      className="h-[100dvh] flex transition-transform duration-300 ease-out"
      style={{ transform: `translateX(-${activeIndex * 100}dvw)` }}
    >
      <SectionSlide id="hero">
        <Hero />
      </SectionSlide>
      <SectionSlide id="about">
        <About />
      </SectionSlide>
      <SectionSlide id="experience">
        <Experience />
      </SectionSlide>
      <SectionSlide id="projects">
        <Projects />
      </SectionSlide>
      <SectionSlide id="skills">
        <Skills />
      </SectionSlide>
      <SectionSlide id="certifications">
        <Certifications />
      </SectionSlide>
      <SectionSlide id="contact">
        <Contact />
      </SectionSlide>
    </div>
  )
}

export default function HomePage() {
  return (
    <SectionPagerProvider sections={SECTION_IDS}>
      <main className="fixed inset-0 overflow-hidden">
        <Header />
        <PagerTrack />
        <Footer />
      </main>
    </SectionPagerProvider>
  )
}
