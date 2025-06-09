import React from 'react';
import { ExternalLink, Github, ShoppingCart, Home, Calendar, Code2, Database, Layers } from 'lucide-react';
import AperoImage from "../assets/Apero.png";

export const Projects = () => {
    const projects = [
        {
            title: "Apero Ecommerce",
            description: "Plataforma de e-commerce completa con gestión de productos, carrito y procesamiento de pedidos.",
            technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
            githubUrl: "https://github.com/justlugoo/Apero-ecommerce",
            icon: <ShoppingCart className="h-6 w-6" />,
            date: "2024-11",
            dateDisplay: "Nov 2024",
            featured: true,
            imageUrl: AperoImage,
        },
        {
            title: "Furnique Ecommerce",
            description: "Tienda online especializada en muebles con catálogo avanzado y gestión de inventario.",
            technologies: ["Python", "Django", "SQLite", "Bootstrap"],
            githubUrl: "https://github.com/justlugoo/Furnique",
            icon: <Home className="h-6 w-6" />,
            date: "2024-09",
            dateDisplay: "Sep 2024",
            featured: false,
        }
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    const getTechIcon = (tech) => {
        if (tech.toLowerCase().includes('python')) return <Code2 className="h-4 w-4" />;
        if (tech.toLowerCase().includes('django')) return <Layers className="h-4 w-4" />;
        if (tech.toLowerCase().includes('sql')) return <Database className="h-4 w-4" />;
        return <Code2 className="h-4 w-4" />;
    };

    return (
        <section id="proyectos" className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
            {/* Elementos decorativos minimalistas - similar al Hero */}
            <div className="absolute top-1/4 left-1/6 w-1 h-24 bg-gradient-to-b from-accent-3/60 to-transparent transform -rotate-12 hidden lg:block"></div>
            <div className="absolute bottom-1/3 right-1/5 w-20 h-1 bg-gradient-to-l from-primary/40 to-transparent hidden lg:block"></div>
            <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-accent-3 rounded-full hidden lg:block"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header asimétrico */}
                <div className="mb-16 lg:mb-20">
                    <div className="max-w-4xl">
                        {/* Status indicator */}
                        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Portfolio</span>
                        </div>

                        {/* Título asimétrico */}
                        <div className="space-y-3 mb-8">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glow leading-tight">
                                Proyectos
                            </h2>
                            
                            {/* Línea separadora estilo Hero */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-0.5 bg-primary"></div>
                                <span className="text-base sm:text-lg font-medium text-foreground/80">
                                    Desarrollo Web
                                </span>
                                <div className="flex-1 h-px bg-gradient-to-r from-foreground/20 to-transparent max-w-32"></div>
                            </div>
                        </div>

                        {/* Descripción asimétrica */}
                        <div className="max-w-xl">
                            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                                Enfocado en <span className="text-primary font-medium">soluciones e-commerce</span>
                            </p>
                            <p className="text-base text-foreground/60 leading-relaxed pl-4 border-l-2 border-foreground/10">
                                Desarrollo de plataformas escalables con Django y arquitecturas robustas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid asimétrico de proyectos */}
                <div className="space-y-12 lg:space-y-16">
                    {projects.map((project, index) => (
                        <div 
                            key={`project-${index}`}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                            }`}
                        >
                            {/* Contenido del proyecto - Layout asimétrico */}
                            <div className={`lg:col-span-7 space-y-6 ${
                                index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-5'
                            }`}>
                                
                                {/* Header del proyecto */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 p-3 bg-foreground/5 rounded-lg text-foreground/60">
                                            {project.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                                                    {project.title}
                                                </h3>
                                                {project.featured && (
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-foreground/50">
                                                <Calendar className="h-4 w-4" />
                                                <span>{project.dateDisplay}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Descripción */}
                                <div className="space-y-4">
                                    <p className="text-base text-foreground/70 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Stack tecnológico minimalista */}
                                <div className="space-y-3">
                                    <h4 className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
                                        Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <div 
                                                key={techIndex}
                                                className="flex items-center gap-2 px-3 py-1.5 bg-foreground/5 rounded-md text-sm text-foreground/70 hover:bg-foreground/10 transition-colors duration-200"
                                            >
                                                {getTechIcon(tech)}
                                                <span>{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Acciones */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-button flex items-center justify-center gap-2"
                                        aria-label={`Ver código de ${project.title}`}
                                    >
                                        <Github className="h-5 w-5" />
                                        <span>Ver Código</span>
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-lg border border-foreground/20 text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
                                            aria-label={`Ver demo de ${project.title}`}
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                            <span>Ver Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Panel lateral/visual - Asimétrico */}
                            <div className={`lg:col-span-4 ${
                                index % 2 === 0 ? 'lg:col-start-9' : 'lg:col-start-1'
                            }`}>
                                
                                {/* Preview del proyecto */}
                                <div className="relative aspect-[7/4] w-full rounded-lg overflow-hidden bg-gradient-to-br from-foreground/5 via-card/30 to-foreground/5 border border-foreground/10">
                                    {project.imageUrl ? (
                                        <img 
                                            src={project.imageUrl} 
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-foreground/30 mb-3">
                                                    {project.icon}
                                                </div>
                                                <p className="text-xs text-foreground/40 font-medium">Preview</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Info adicional asimétrica */}
                                <div className="space-y-4 mt-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-xs text-foreground/50 uppercase tracking-wide mb-1">Tipo</p>
                                            <p className="text-sm text-foreground/70">E-commerce Platform</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3 ml-4">
                                        <div className="w-1 h-1 bg-accent-3 rounded-full mt-2"></div>
                                        <div>
                                            <p className="text-xs text-foreground/50 uppercase tracking-wide mb-1">Estado</p>
                                            <p className="text-sm text-foreground/70">Completado</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action minimalista */}
                <div className="mt-20 lg:mt-24">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                                    ¿Tienes un proyecto en mente?
                                </h3>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="w-8 h-0.5 bg-primary"></div>
                                    <span className="text-sm font-medium text-foreground/60">
                                        Colaboremos
                                    </span>
                                    <div className="w-8 h-0.5 bg-accent-3"></div>
                                </div>
                            </div>
                            
                            <p className="text-base text-foreground/60 leading-relaxed max-w-md mx-auto">
                                Siempre estoy interesado en nuevos desafíos y oportunidades de desarrollo.
                            </p>
                            
                            <div className="pt-4">
                                <a
                                    href="#contacto"
                                    className="cosmic-button inline-flex items-center gap-2"
                                >
                                    <span>Conversemos</span>
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradiente de transición igual al Hero */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </section>
    );
};