import React from 'react';
import { MapPin, GraduationCap, Code, Heart, ArrowDown } from 'lucide-react';
import ProfilePicture from '../assets/profile.jpg';

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const AboutMe = () => {
    return (
        <section id="sobremi" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
            {/* Elementos decorativos minimalistas */}
            <div className="absolute top-1/4 left-1/6 w-1 h-24 bg-gradient-to-b from-accent-3/40 to-transparent transform -rotate-12 hidden lg:block"></div>
            <div className="absolute bottom-1/3 right-1/5 w-16 h-1 bg-gradient-to-l from-primary/50 to-transparent hidden lg:block"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header asimétrico */}
                <div className="mb-12 lg:mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-0.5 bg-accent-3"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-glow">
                            Acerca de Mí
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Imagen de perfil - Centrada */}
                    <div className="flex justify-center">
                        <div className="relative max-w-sm">
                            {/* Contenedor de imagen */}
                            <div className="relative">
                                <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-3/20 overflow-hidden border border-foreground/10">
                                    <img 
                                        src={ProfilePicture} 
                                        alt="Mauricio José Lugo Granados" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* Badge flotante minimalista */}
                                <div className="absolute -bottom-3 -right-3 bg-primary/90 text-primary-foreground p-3 rounded-xl backdrop-blur-sm">
                                    <Code className="h-5 w-5" />
                                </div>
                            </div>

                            {/* Info cards minimalistas */}
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-200">
                                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Cartagena, Colombia</p>
                                        <p className="text-xs text-foreground/60">Residente desde 2018</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-200">
                                    <GraduationCap className="h-4 w-4 text-primary flex-shrink-" />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Ing. en Sistemas</p>
                                        <p className="text-xs text-foreground/60">6to Semestre - CURN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contenido principal - Centrado */}
                    <div className="space-y-6 lg:space-y-8">
                        
                       <div className="text-left space-y-6 max-w-xl">
                            {/* Nombre */}
                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                                <span className="text-primary">Mauricio Lugo</span>
                            </h3>

                            {/* Introducción */}
                            <div className="space-y-2">
                                <p className="text-base text-foreground/80 leading-snug">
                                Estudiante de <span className="text-primary font-medium">Ingeniería en Sistemas</span>, apasionado por crear soluciones tecnológicas robustas y escalables.
                                </p>
                                <p className="text-sm text-foreground/60 leading-snug">
                                Venezolano viviendo en Cartagena de Indias, Colombia desde 2018.
                                </p>
                            </div>

                            {/* Especialización técnica */}
                            <div className="space-y-1 pt-4">
                                <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <h4 className="text-base font-semibold text-foreground">Especialización Técnica</h4>
                                </div>
                                <p className="text-sm text-foreground/70 leading-snug">
                                Backend con <span className="text-primary font-medium">Python y FastAPI</span>, usando PostgreSQL como base de datos.
                                </p>
                                <p className="text-sm text-foreground/60 leading-snug">
                                Aprendiendo React y Tailwind para frontend. Explorando el camino hacia DevOps.
                                </p>
                            </div>
                            </div>


                        {/* Mi enfoque */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <Heart className="h-5 w-5 text-accent-3 mt-1 flex-shrink-0" />
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-foreground">Mi Filosofía de Trabajo</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                                            <p className="text-sm text-foreground/70">
                                                <span className="text-primary font-medium">Responsable y comprometido</span> con el cumplimiento de objetivos
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-start gap-2">
                                            <div className="w-1 h-1 bg-accent-3 rounded-full mt-2"></div>
                                            <p className="text-sm text-foreground/70">
                                                Siempre <span className="text-primary font-medium">dispuesto a aprender</span> nuevas tecnologías
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-start gap-2">
                                            <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                                            <p className="text-sm text-foreground/70">
                                                <span className="text-primary font-medium">Colaboración activa</span> en equipo con comunicación efectiva
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to action */}
                        <div className="pt-6 space-y-4">
                            <p className="text-foreground/60">
                                ¿Tienes un proyecto en mente? ¡Construyamos algo increíble juntos!
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button 
                                    onClick={() => scrollToSection('contacto')}
                                    className="cosmic-button"
                                >
                                    Hablemos
                                </button>
                                
                                <button 
                                    onClick={() => scrollToSection('proyectos')}
                                    className="px-6 py-3 rounded-lg border border-foreground/20 text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                                >
                                    Ver Proyectos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator - posicionado asimétricamente */}
            <div className="absolute bottom-8 right-8">
                <button
                    onClick={() => scrollToSection('habilidades')}
                    className="flex items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors duration-200 group"
                    aria-label="Continuar hacia habilidades"
                >
                    <span className="text-xs uppercase tracking-wider">Siguiente</span>
                    <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
                </button>
            </div>

            {/* Gradiente de transición */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </section>
    );
};