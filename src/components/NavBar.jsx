import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Inicializar tema
        try {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'dark') {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark'); 
            } else {
                setIsDarkMode(false);
                document.documentElement.classList.remove('dark');
            }
        } catch (error) {
            console.warn('localStorage no disponible:', error);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        try {
            if (isDarkMode) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIsDarkMode(false);
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDarkMode(true);
            }
        } catch (error) {
            console.warn('Error al guardar tema:', error);
            if (isDarkMode) {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            } else {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            }
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
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            isScrolled 
                ? 'bg-card/80 backdrop-blur-md border-b border-border shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a 
                            href="#inicio" 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#inicio');
                            }}
                            className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300"
                        >
                            Mauricio Lugo
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {/* Navigation Links */}
                            <div className="flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                        className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    </a>
                                ))}
                            </div>
                            
                            {/* Desktop Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-card/80 backdrop-blur-sm text-foreground border border-border/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_10px_rgba(139,_92,_246,_0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                {isDarkMode ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-card/80 backdrop-blur-sm text-foreground border border-border/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 focus:outline-none"
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-300"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                        ? 'max-h-64 opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-sm rounded-lg mt-2 border border-border">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className="text-foreground/80 hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md hover:bg-primary/10"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};