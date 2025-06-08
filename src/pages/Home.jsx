import { StarBackground } from '@/components/StarBackground';
import { NavBar } from '@/components/NavBar';

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <StarBackground />

            {/* NavBar */}
            <NavBar />

            {/* Main Content */}
            <main className="relative z-10">
                {/* Aquí va tu contenido principal */}
                
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-glow opacity-0 animate-fade-in-delay-1">
                            Hola, soy Mauricio
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 opacity-0 animate-fade-in-delay-2">
                            Desarrollador de Software
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-3">
                            <button className="cosmic-button">
                                Ver Proyectos
                            </button>
                            <button className="cosmic-button bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                Contactar
                            </button>
                        </div>
                    </div>
                </section>

                {/* Placeholder sections */}
                <section id="sobremi" className="min-h-screen flex items-center justify-center px-4">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mí</h2>
                        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                            Contenido de la sección sobre mí...
                        </p>
                    </div>
                </section>

                <section id="habilidades" className="min-h-screen flex items-center justify-center px-4">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Habilidades</h2>
                        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                            Contenido de la sección habilidades...
                        </p>
                    </div>
                </section>

                <section id="proyectos" className="min-h-screen flex items-center justify-center px-4">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Proyectos</h2>
                        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                            Contenido de la sección proyectos...
                        </p>
                    </div>
                </section>

                <section id="contacto" className="min-h-screen flex items-center justify-center px-4">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contacto</h2>
                        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                            Contenido de la sección contacto...
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative z-10 py-8 text-center text-foreground/60 border-t border-border/30">
                <p>&copy; 2024 Mauricio Lugo.</p>
            </footer>
        </div>
    );
};