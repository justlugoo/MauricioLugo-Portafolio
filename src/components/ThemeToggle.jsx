import { Moon, Sun } from 'lucide-react'; 
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Verificar si localStorage está disponible
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
    }, []); 

    const toggleTheme = () => {
        try {
            if (isDarkMode) {
                // Cambiar a modo claro
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIsDarkMode(false);
            } else {
                // Cambiar a modo oscuro
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDarkMode(true);
            }
        } catch (error) {
            console.warn('Error al guardar tema:', error);
            // Solo cambiar el estado visual sin localStorage
            if (isDarkMode) {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            } else {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            }
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                // Cambiado: ahora se oculta en móvil y se ajusta la posición
                "fixed hidden md:block top-5 right-5 z-50 p-2 rounded-full transition-all duration-300",
                "bg-card/80 backdrop-blur-sm text-foreground border border-border/50",
                "hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_10px_rgba(139,_92,_246,_0.3)]",
                "focus:outline-none focus:ring-2 focus:ring-primary/50"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6" />
            ) : (
                <Moon className="h-6 w-6" />
            )}
        </button>
    );
}