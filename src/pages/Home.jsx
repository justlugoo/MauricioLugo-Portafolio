import { StarBackground } from '@/components/StarBackground';
import { NavBar } from '@/components/NavBar';
import { HeroSection } from '@/components/HeroSection';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';


export const Home = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <StarBackground />

            {/* NavBar */}
            <NavBar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </main>
      
            {/* Footer */}
            <footer className="relative z-10 py-8 text-center text-foreground/60 border-t border-border/30">
                <p>&copy; 2024 Mauricio Lugo.</p>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 cosmic-button p-3 rounded-full z-50"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} />
                </button>
            )}

        </div>
    );
};