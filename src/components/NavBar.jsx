import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        // Inicializar tema sin localStorage
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    };

    const navItems = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Sobre mí', href: '#sobremi' },
        { name: 'Habilidades', href: '#habilidades' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Contacto', href: '#contacto' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
            isScrolled 
                ? 'bg-background/70 backdrop-blur-xl border-b border-foreground/10' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Logo - Asimétrico con punto decorativo */}
                    <div className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-primary rounded-full transition-all duration-300 group-hover:scale-125"></div>
                        <a 
                            href="#inicio" 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#inicio');
                            }}
                            className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300"
                        >
                            Mauricio Lugo
                        </a>
                    </div>

                    {/* Desktop Navigation - Layout asimétrico */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center space-x-1">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className={`
                                        px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground 
                                        transition-all duration-300 rounded-lg hover:bg-foreground/5
                                        relative group
                                        ${index === 1 ? 'ml-4' : ''}
                                        
                                    `}
                                >
                                    {item.name}
                                    {/* Underline sutil */}
                                    <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </a>
                            ))}
                        </div>
                        
                        {/* Separador minimalista */}
                        <div className="w-px h-4 bg-foreground/20 mx-6"></div>
                        
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-300 group"
                        >
                            <div className="relative">
                                {isDarkMode ? (
                                    <Sun className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                                ) : (
                                    <Moon className="h-4 w-4 group-hover:-rotate-12 transition-transform duration-300" />
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                        >
                            {isDarkMode ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                        >
                            <div className="relative">
                                {isMenuOpen ? (
                                    <X className="h-5 w-5 rotate-90 transition-transform duration-200" />
                                ) : (
                                    <Menu className="h-5 w-5 transition-transform duration-200" />
                                )}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation - Diseño asimétrico */}
                <div className={`md:hidden transition-all duration-300 ease-out ${
                    isMenuOpen 
                        ? 'max-h-64 opacity-100 translate-y-0' 
                        : 'max-h-0 opacity-0 -translate-y-2 overflow-hidden'
                }`}>
                    <div className="py-4 space-y-1">
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={`
                                    block py-3 text-foreground/70 hover:text-foreground transition-all duration-200
                                    border-l-2 border-transparent hover:border-primary hover:pl-4
                                    ${index % 2 === 0 ? 'pl-4' : 'pl-8'}
                                `}
                                style={{
                                    transitionDelay: `${index * 50}ms`
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Línea decorativa sutil */}
            {isScrolled && (
                <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            )}
        </nav>
    );
};