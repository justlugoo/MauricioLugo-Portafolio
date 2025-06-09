import { Code, Database, Settings, Zap, Lightbulb, Users, Clock, MessageCircle, Star } from 'lucide-react';

export const Skills = () => {
    const skillCategories = [
        {
            title: "Lenguajes de Programación",
            icon: <Code className="h-6 w-6" />,
            skills: ["Python", "JavaScript", "SQL"],
            primary: true
        },
        {
            title: "Frameworks & Librerías",
            icon: <Zap className="h-6 w-6" />,
            skills: ["FastAPI", "Django", "React"]
        },
        {
            title: "Bases de Datos",
            icon: <Database className="h-6 w-6" />,
            skills: ["PostgreSQL", "MySQL"]
        },
        {
            title: "Herramientas & Otros",
            icon: <Settings className="h-6 w-6" />,
            skills: ["Git & GitHub", "PyCharm", "VSCode", "CLI"]
        }
    ];

    const softSkills = [
        {
            name: "Aprendizaje Continuo",
            icon: <Lightbulb className="h-5 w-5" />
        },
        {
            name: "Trabajo en Equipo",
            icon: <Users className="h-5 w-5" />
        },
        {
            name: "Responsabilidad",
            icon: <Clock className="h-5 w-5" />
        },
        {
            name: "Comunicación Efectiva",
            icon: <MessageCircle className="h-5 w-5" />
        }
    ];

    return (
        <section id="habilidades" className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
            {/* Elementos decorativos minimalistas */}
            <div className="absolute top-1/3 right-1/4 w-1 h-32 bg-gradient-to-b from-accent-3/60 to-transparent transform rotate-12 hidden lg:block"></div>
            <div className="absolute bottom-1/4 left-1/5 w-24 h-1 bg-gradient-to-r from-primary/40 to-transparent hidden lg:block"></div>
            <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full hidden lg:block"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header asimétrico */}
                <div className="mb-16 lg:mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        
                        {/* Contenido principal - Asimétrico */}
                        <div className="lg:col-span-8 lg:col-start-2 space-y-6">
                            
                            {/* Status indicator */}
                            <div className="flex items-center gap-2 text-sm text-foreground/60">
                                <div className="w-2 h-2 bg-accent-3 rounded-full"></div>
                                <span>Stack Tecnológico</span>
                            </div>

                            {/* Título asimétrico */}
                            <div className="space-y-3">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glow leading-tight">
                                    Habilidades
                                </h2>
                                
                                {/* Línea separadora estilo Hero */}
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-0.5 bg-primary"></div>
                                    <span className="text-base sm:text-lg font-medium text-foreground/80">
                                        Backend Developer
                                    </span>
                                    <div className="flex-1 h-px bg-gradient-to-r from-foreground/20 to-transparent max-w-32"></div>
                                </div>
                            </div>

                            {/* Descripción asimétrica */}
                            <div className="max-w-xl space-y-4">
                                <p className="text-lg text-foreground/80 leading-relaxed">
                                    Especializado en <span className="text-primary font-medium">desarrollo backend</span>
                                </p>
                                
                                <p className="text-base text-foreground/60 leading-relaxed pl-4 border-l-2 border-foreground/10">
                                    Experiencia en APIs escalables, bases de datos y arquitecturas robustas con Python y frameworks modernos.
                                </p>
                            </div>
                        </div>

                        {/* Panel lateral minimalista */}
                        <div className="lg:col-span-3 lg:col-start-10 space-y-4">
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
                                    Enfoque Principal
                                </h3>
                                <div className="flex items-start gap-3">
                                    <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                                    <div>
                                        <p className="text-sm text-foreground/70">APIs con FastAPI</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1 h-1 bg-accent-3 rounded-full mt-2"></div>
                                    <div>
                                        <p className="text-sm text-foreground/70">Arquitecturas escalables</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills técnicos - Layout asimétrico */}
                <div className="space-y-8 lg:space-y-12">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start ${
                                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                            }`}
                        >
                            {/* Contenido de la categoría */}
                            <div className={`lg:col-span-7 space-y-4 ${
                                index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-5'
                            }`}>
                                
                                {/* Header de categoría */}
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 p-3 bg-foreground/5 rounded-lg text-foreground/60">
                                        {category.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                                {category.title}
                                            </h3>
                                            {category.primary && (
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Lista de skills */}
                                <div className="space-y-3 pl-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div 
                                            key={skillIndex}
                                            className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors duration-200"
                                        >
                                            <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                                            <span className="font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Elemento visual lateral */}
                            <div className={`lg:col-span-4 ${
                                index % 2 === 0 ? 'lg:col-start-9' : 'lg:col-start-1'
                            }`}>
                                <div className="relative aspect-square max-w-32 mx-auto lg:mx-0">
                                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-foreground/5 via-card/30 to-foreground/5 border border-foreground/10 flex items-center justify-center">
                                        <div className="text-foreground/30">
                                            {category.icon}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills - Sección minimalista */}
                <div className="mt-20 lg:mt-24">
                    <div className="max-w-4xl mx-auto">
                        
                        {/* Header de soft skills */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                                <div className="w-2 h-2 bg-accent-1 rounded-full"></div>
                                <span>Competencias</span>
                            </div>
                            
                            <div className="space-y-3">
                                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                                    Habilidades Blandas
                                </h3>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-0.5 bg-accent-1"></div>
                                    <span className="text-sm font-medium text-foreground/60">
                                        Desarrollo Personal
                                    </span>
                                    <div className="flex-1 h-px bg-gradient-to-r from-foreground/20 to-transparent max-w-24"></div>
                                </div>
                            </div>
                        </div>

                        {/* Grid de soft skills */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {softSkills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className="space-y-3 p-4 hover:bg-foreground/5 rounded-lg transition-colors duration-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-foreground/60">
                                            {skill.icon}
                                        </div>
                                        <div className="w-1 h-1 bg-accent-1 rounded-full"></div>
                                    </div>
                                    <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Filosofía de trabajo */}
                <div className="mt-16 lg:mt-20">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
                                    <Star className="h-4 w-4" />
                                    <span>Filosofía</span>
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                                    Código limpio, soluciones escalables
                                </h4>
                            </div>
                            
                            <p className="text-base text-foreground/60 leading-relaxed max-w-md mx-auto">
                                Creo en el desarrollo iterativo y la mejora continua para crear sistemas robustos y mantenibles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradiente de transición */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </section>
    );
};