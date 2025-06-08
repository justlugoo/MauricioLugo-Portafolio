import { MapPin, GraduationCap, Code, Heart } from 'lucide-react';
import ProfilePicture from '../assets/profile.jpg';

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const AboutMe = () => {
    return (
        <section id="sobremi" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
                        Acerca de Mí
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40 border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                            <img src={ProfilePicture} alt="Mi foto de perfil" />
                            
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full">
                                <Code className="h-8 w-8" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-primary">
                                ¡Hola! Soy Mauricio José Lugo Granados
                            </h3>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                Estudiante de 6to semestre de Ingeniería en Sistemas en la Corporación Universitaria Rafael Núñez. 
                                Soy venezolano y resido en Cartagena de Indias, Colombia desde 2018.
                            </p>
                            <p className="text-foreground/70 leading-relaxed">
                                Como desarrollador, me especializo principalmente en <span className="text-primary font-medium">backend con Python y FastAPI</span>, 
                                complementado con bases de datos PostgreSQL. Actualmente estoy expandiendo mis conocimientos en React y Tailwind
                                para desarrollo frontend.
                            </p>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="gradient-border p-4">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="font-medium text-foreground">Ubicación</p>
                                        <p className="text-sm text-foreground/70">Cartagena, Colombia</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="gradient-border p-4">
                                <div className="flex items-center space-x-3">
                                    <GraduationCap className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="font-medium text-foreground">Educación</p>
                                        <p className="text-sm text-foreground/70">6to Semestre Ing. Sistemas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="mt-8">
                            <div className="flex items-start space-x-3">
                                <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Mi Enfoque</h4>
                                    <p className="text-foreground/70 leading-relaxed">
                                        Me considero una persona <span className="text-primary">responsable y comprometida</span> con 
                                        el cumplimiento de objetivos. Siempre estoy <span className="text-primary">dispuesto a aprender</span> nuevas 
                                        tecnologías y <span className="text-primary">colaborar</span> activamente en equipo, aportando tanto 
                                        mis capacidades técnicas como mis habilidades de comunicación.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                            <p className="text-foreground/60 mb-4">
                                ¿Tienes un proyecto en mente? ¡Hablemos!
                            </p>
                            <button 
                                onClick={() => scrollToSection('contacto')}
                                className="cosmic-button inline-block"
                            >
                                Contactar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};