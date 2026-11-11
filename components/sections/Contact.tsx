import Link from "next/link"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { TerminalPrompt } from "@/components/shared/TerminalPrompt"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { ContactForm } from "@/components/sections/ContactForm"
import personalData from "@/data/personal.json"

export function Contact() {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionTitle index="05" title="Contacto" />
        </ScrollReveal>

        <ScrollReveal delay={0.03}>
          <TerminalPrompt command="curl -X POST /contact" />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="inline-flex items-center gap-2 border border-primary/40 px-4 py-2 mb-10 font-mono text-xs uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary">{personalData.availability}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="border border-border p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left - Contact Info */}
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5" /> correo
                  </p>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {personalData.email}
                  </a>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> ubicación
                  </p>
                  <p className="text-foreground font-medium">
                    {personalData.locationDetail}
                  </p>
                </div>

                <div className="pt-6 border-t border-border flex gap-3">
                  <Link
                    href={personalData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 border border-border hover:border-primary/60 hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={personalData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 border border-border hover:border-primary/60 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
