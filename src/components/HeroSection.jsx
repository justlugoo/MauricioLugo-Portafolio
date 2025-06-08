import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-30">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-32 h-32 sm:w-48 sm:h-48 top-20 left-10 opacity-60"></div>
        <div className="floating-orb w-24 h-24 sm:w-36 sm:h-36 top-40 right-16 opacity-40"></div>
        <div className="morphing-blob w-64 h-64 sm:w-96 sm:h-96 top-32 left-1/4 opacity-30"></div>
        <div className="morphing-blob w-48 h-48 sm:w-80 sm:h-80 bottom-20 right-1/4 opacity-25"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Saludo inicial */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent-1/20 border border-primary/30 text-primary font-medium text-sm sm:text-base backdrop-blur-sm">
            👋 ¡Hola! Soy Mauricio Lugo
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 sm:mb-8">
          <span className="block text-glow mb-2">Desarrollador</span>
          <span className="block text-foreground">Software</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Creando experiencias digitales extraordinarias con 
          <span className="text-primary font-semibold"> código limpio</span> y 
          <span className="text-accent-3 font-semibold"> diseño innovador</span>
        </p>


        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="cosmic-button w-full sm:w-auto order-1 sm:order-none"
          >
            Ver Proyectos
          </button>
          
          <button 
            onClick={() => scrollToSection('contacto')}
            className="w-full sm:w-auto px-6 py-3 sm:px-8 rounded-lg sm:rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 backdrop-blur-sm order-2 sm:order-none"
          >
            Contáctame
          </button>
          
          <a
            href="/cv.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 rounded-lg sm:rounded-xl border border-foreground/20 text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-200 backdrop-blur-sm order-3 sm:order-none"
          >
            <Download size={18} />
            Descargar CV
          </a>
        </div>

        {/* Enlaces sociales */}
        <div className="flex justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <a
            href="https://github.com/justlugoo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-full border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 backdrop-blur-sm"
          >
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
          
          <a
            href="https://linkedin.com/in/justlugoo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-full border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-accent-1/50 hover:bg-accent-1/10 transition-all duration-200 backdrop-blur-sm"
          >
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          
          <a
            href="mailto:maurogranados31@gmail.com"
            className="p-3 sm:p-4 rounded-full border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-accent-3/50 hover:bg-accent-3/10 transition-all duration-200 backdrop-blur-sm"
          >
            <Mail size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Indicador de scroll */}
        <button
          onClick={() => scrollToSection('sobremi')}
          className="animate-bounce mx-auto block p-2 rounded-full border border-foreground/20 text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all duration-200 backdrop-blur-sm"
          aria-label="Scroll hacia abajo"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Gradiente de transición inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};
