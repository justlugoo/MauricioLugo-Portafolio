import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PagerEdgeControls } from "@/components/layout/PagerEdgeControls"
import { PagerTrack } from "@/components/layout/PagerTrack"
import { SectionSlide } from "@/components/layout/SectionSlide"
import { Hero } from "@/components/sections/Hero"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Certifications } from "@/components/sections/Certifications"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"
import { SectionPagerProvider } from "@/hooks/useSectionPager"

const SECTION_IDS = [
  "hero",
  "experience",
  "projects",
  "certifications",
  "skills",
  "contact",
]

export default function HomePage() {
  return (
    <SectionPagerProvider sections={SECTION_IDS}>
      <main className="fixed inset-0 overflow-hidden">
        <Header />
        <PagerTrack>
          <SectionSlide id="hero">
            <Hero />
          </SectionSlide>
          <SectionSlide id="experience">
            <Experience />
          </SectionSlide>
          <SectionSlide id="projects">
            <Projects />
          </SectionSlide>
          <SectionSlide id="certifications">
            <Certifications />
          </SectionSlide>
          <SectionSlide id="skills">
            <Skills />
          </SectionSlide>
          <SectionSlide id="contact">
            <Contact />
          </SectionSlide>
        </PagerTrack>
        <PagerEdgeControls />
        <Footer />
      </main>
    </SectionPagerProvider>
  )
}
