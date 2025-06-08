import { Code, Database, Settings, Zap, Lightbulb, Users, Clock, MessageCircle } from 'lucide-react';

export const Skills = () => {
    const skillCategories = [
        {
            title: "Lenguajes de Programación",
            icon: <Code className="h-6 w-6" />,
            skills: ["Python", "JavaScript", "SQL"]
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
        <section id="habilidades" className="min-h-screen flex items-center justify-center px-4 py-20 bg-card/20">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
                        Habilidades Técnicas
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Especializado en desarrollo backend con Python, complementado con conocimientos 
                        en frontend y bases de datos para crear soluciones completas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="gradient-border p-6 card-glow">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground">
                                    {category.title}
                                </h3>
                            </div>
                            
                            <div className="grid gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div 
                                        key={skillIndex}
                                        className="flex items-center space-x-3 text-foreground/90 hover:text-foreground transition-colors duration-200"
                                    >
                                        <div className="w-2 h-2 bg-primary rounded-full opacity-80"></div>
                                        <span className="font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-8 text-primary">
                        Habilidades Blandas
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {softSkills.map((skill, index) => (
                            <div 
                                key={index} 
                                className="gradient-border p-6 text-center card-glow group"
                            >
                                <div className="flex justify-center mb-3 text-primary group-hover:text-primary/80 transition-colors duration-300">
                                    {skill.icon}
                                </div>
                                <p className="text-foreground/80 font-medium group-hover:text-foreground transition-colors duration-300">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};