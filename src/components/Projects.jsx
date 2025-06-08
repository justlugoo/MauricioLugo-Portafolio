import { ExternalLink, Github, ShoppingCart, Calculator, Home, Calendar, Code, Star } from 'lucide-react';

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
            // imageUrl: "/images/apero-project.jpg", // Agregar tu imagen aquí
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
            // imageUrl: "/images/furnique-project.jpg", // Agregar tu imagen aquí
        }
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Componente para mostrar imagen del proyecto
    const ProjectImage = ({ project }) => (
        <div className="relative w-full h-48 bg-card/50 rounded-xl overflow-hidden border border-border/30">
            {project.imageUrl ? (
                <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            ) : (
                // Placeholder mientras agregas tus imágenes
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="text-center">
                        <div className="text-primary mb-2">
                            {project.icon}
                        </div>
                        <p className="text-sm text-foreground/60">Imagen del proyecto</p>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <section id="proyectos" className="min-h-screen flex items-center justify-center px-4 py-20 bg-card/10">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
                        Proyectos Destacados
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className={`gradient-border p-6 card-glow group ${
                                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                            }`}
                        >
                            {/* Imagen del proyecto */}
                            <ProjectImage project={project} />

                            {/* Contenido */}
                            <div className="mt-6 space-y-4">
                                {/* Header con fecha */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        {project.title}
                                        {project.featured && (
                                            <Star className="h-4 w-4 text-primary fill-current" />
                                        )}
                                    </h3>
                                    <div className="flex items-center gap-1 text-xs text-foreground/60">
                                        <Calendar className="h-3 w-3" />
                                        {project.dateDisplay}
                                    </div>
                                </div>

                                {/* Descripción más corta */}
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 bg-border/20 text-foreground/60 text-xs rounded-full">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 pt-2">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 bg-card/50 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-lg border border-border/50 text-sm group-hover:border-primary/30"
                                    >
                                        <Github className="h-4 w-4" />
                                        <span>Código</span>
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-lg text-sm"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};