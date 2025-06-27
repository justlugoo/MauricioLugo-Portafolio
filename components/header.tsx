"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    if (!mobileMenuOpen) return
    
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      // No cerrar si se hace clic en el botón toggle o en el menú
      if (
        menuRef.current && 
        !menuRef.current.contains(target) &&
        !(target as Element).closest('[aria-label*="menú"]')
      ) {
        setMobileMenuOpen(false)
      }
    }
    
    // Usar un pequeño delay para evitar conflictos con el click del botón
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside)
    }, 100)
    
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    
    // Pequeño delay para permitir que el menú se cierre antes del scroll
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <button 
            onClick={() => handleNavClick("#hero")}
            className="-m-1.5 p-1.5 text-xl font-bold hover:text-primary transition-colors"
          >
            Portfolio
          </button>
        </div>

        <div className="flex lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="fixed left-0 top-full z-40 w-full bg-background/95 backdrop-blur-2xl shadow-2xl border-t animate-in slide-in-from-top-2 duration-200"
        >
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="w-full text-left px-6 py-4 text-base font-semibold text-foreground hover:bg-muted/60 transition-colors border-b border-border/50 last:border-b-0"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}