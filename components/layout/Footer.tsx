import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import personalData from "@/data/personal.json"
import { PagerCounter, PagerProgressBar } from "@/components/layout/PagerProgress"

export function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 h-12 border-t border-border bg-background">
      <PagerProgressBar />
      <div className="h-[calc(3rem-2px)] max-w-5xl mx-auto px-6 flex items-center justify-between">
        <PagerCounter />

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
