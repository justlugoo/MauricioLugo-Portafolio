"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import config from "@/data/config.json"
import { cn } from "@/lib/utils"
import { useSectionPager } from "@/hooks/useSectionPager"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { sections, activeIndex, goToId } = useSectionPager()
  const navigation = config.navigation.sort((a, b) => a.order - b.order)

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    goToId(href.replace("#", ""))
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 h-14">
        {/* Logo - terminal prompt style */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="font-mono text-sm hover:text-primary transition-colors"
        >
          <span className="text-muted-foreground">mauricio@lugo</span>
          <span className="text-primary">:~$</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {navigation.map((item, idx) => {
            const isActive = sections[activeIndex] === item.href.replace("#", "")
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "group font-mono text-xs uppercase tracking-wide transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className={isActive ? "text-primary" : "text-primary/70"}>
                  {String(idx + 1).padStart(2, "0")}.
                </span>{" "}
                <span
                  className={cn(
                    "underline-offset-4 decoration-primary",
                    isActive ? "underline" : "group-hover:underline"
                  )}
                >
                  {item.name}
                </span>
              </button>
            )
          })}
          <div className="pl-4 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-background border-t border-border lg:hidden">
          <div className="flex flex-col">
            {navigation.map((item, idx) => {
              const isActive = sections[activeIndex] === item.href.replace("#", "")
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-left font-mono text-lg py-4 px-6 border-b border-border transition-colors",
                    isActive
                      ? "text-primary bg-secondary/50"
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  )}
                >
                  <span className="text-primary/70">{String(idx + 1).padStart(2, "0")}.</span>{" "}
                  {item.name}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
