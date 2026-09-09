"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import personalData from "@/data/personal.json"
import config from "@/data/config.json"
import { scrollToElement } from "@/lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-foreground">{personalData.name}</span>
            <span className="mx-2 text-border">/</span>
            {personalData.title}
          </div>

          <div className="flex gap-5">
            {personalData.social.github && (
              <Link
                href={personalData.social.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
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
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
            <Link
              href={`mailto:${personalData.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-muted-foreground">
          <p>© {currentYear} — todos los derechos reservados</p>

          <div className="flex gap-6 flex-wrap justify-center">
            {config.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToElement(item.href)}
                className="hover:text-primary transition-colors uppercase tracking-wide"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
