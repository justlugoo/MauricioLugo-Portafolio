"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import personalData from "@/data/personal.json"
import config from "@/data/config.json"
import { scrollToElement } from "@/lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-medium text-foreground mb-2">{personalData.name}</h3>
            <p className="text-muted-foreground">
              DevOps Engineer & Cloud Architect
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-6">
            {personalData.social.github && (
              <Link
                href={personalData.social.github}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
            )}
            {personalData.social.linkedin && (
              <Link
                href={personalData.social.linkedin}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            )}
            <Link
              href={`mailto:${personalData.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <Separator className="my-12 bg-border/60" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>
            © {currentYear} {personalData.name}
          </p>

          <div className="flex gap-8">
            {config.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToElement(item.href)}
                className="hover:text-foreground transition-colors"
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
