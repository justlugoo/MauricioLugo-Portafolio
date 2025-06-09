import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import CV from '../Documents/MauricioJLugoGranadosCV.pdf'; 


export const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Elemento decorativo minimalista */}
      <div className="absolute top-1/3 right-1/4 w-1 h-32 bg-gradient-to-b from-primary/60 to-transparent transform rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-1/5 w-24 h-1 bg-gradient-to-r from-accent-3/40 to-transparent hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contenido principal - Asimétrico */}
          <div className="lg:col-span-7 lg:col-start-2 space-y-6 sm:space-y-8">
            
            {/* Status indicator */}
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <div className="w-2 h-2 bg-accent-3 rounded-full animate-pulse"></div>
              <span>Disponible para colaborar</span>
            </div>

            {/* Título principal con layout creativo */}
            <div className="space-y-3">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl text-foreground/70 font-light">
                  Hola, soy
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glow leading-tight">
                  Mauricio Lugo
                </h2>
              </div>
              
              {/* Línea separadora creativa */}
              <div className="flex items-center gap-4 my-6">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-base sm:text-lg font-medium text-foreground">
                  Desarrollador Backend
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-foreground/20 to-transparent"></div>
              </div>
            </div>

            {/* Descripción con espaciado asimétrico */}
            <div className="max-w-md space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Estudiante de <span className="text-primary font-medium">Ingeniería en Sistemas</span>
              </p>
              
              <p className="text-base text-foreground/60 leading-relaxed pl-4 border-l-2 border-foreground/10">
                Enfocado en desarrollo backend y arquitectura de APIs con FastAPI. 
                Explorando el futuro en DevOps.
              </p>
            </div>

            {/* Acciones principales */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="cosmic-button"
              >
                Ver Proyectos
              </button>
              
              <button 
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-3 rounded-lg border border-foreground/20 text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                Hablemos
              </button>
            </div>
          </div>

          {/* Panel lateral minimalista */}
          <div className="lg:col-span-3 lg:col-start-10 space-y-6">
            
            {/* Enlaces sociales con layout vertical creativo */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
                Contacto
              </h3>
              
              <div className="space-y-3">
                <a
                  href="https://github.com/justlugoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-all duration-200 group"
                >
                  <Github size={18} className="text-foreground/60 group-hover:text-foreground transition-colors" />
                  <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                    GitHub
                  </span>
                </a>
                
                <a
                  href="https://linkedin.com/in/justlugoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-all duration-200 group"
                >
                  <Linkedin size={18} className="text-foreground/60 group-hover:text-accent-1 transition-colors" />
                  <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                    LinkedIn
                  </span>
                </a>
                
                <a
                  href="mailto:maurogranados31@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-all duration-200 group"
                >
                  <Mail size={18} className="text-foreground/60 group-hover:text-accent-3 transition-colors" />
                  <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                    Email
                  </span>
                </a>
              </div>
            </div>

            {/* CV Download */}
            <div className="pt-6 border-t border-foreground/10">
              <a
                href={CV}
                download
                className="flex items-center justify-center gap-2 w-full p-3 rounded-lg border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-200"
              >
                <Download size={16} />
                <span className="text-sm">Descargar CV</span>
              </a>
            </div>

            {/* Info adicional con diseño asimétrico */}
            <div className="space-y-3 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wide mb-1">Enfoque</p>
                  <p className="text-sm text-foreground/70">APIs escalables y sistemas robustos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 ml-6">
                <div className="w-1 h-1 bg-accent-3 rounded-full mt-2"></div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wide mb-1">Stack</p>
                  <p className="text-sm text-foreground/70">FastAPI, Python, REST APIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - posicionado de manera asimétrica */}
      <div className="absolute bottom-8 left-8">
        <button
          onClick={() => scrollToSection('sobremi')}
          className="flex items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors duration-200 group"
          aria-label="Scroll hacia abajo"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>

      {/* Gradiente de transición */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};