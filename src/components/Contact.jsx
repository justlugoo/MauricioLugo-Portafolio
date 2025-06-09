import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, ArrowDown } from 'lucide-react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Crear enlace mailto con los datos del formulario
        const mailtoLink = `mailto:maurogranados31@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
    };

    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5" />,
            title: "Email",
            content: "maurogranados31@gmail.com",
            link: "mailto:maurogranados31@gmail.com",
            accent: "text-primary"
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            title: "Ubicación",
            content: "Cartagena de Indias, Colombia",
            link: null,
            accent: "text-accent-3"
        },
        {
            icon: <Linkedin className="h-5 w-5" />,
            title: "LinkedIn",
            content: "/in/justlugoo",
            link: "https://www.linkedin.com/in/justlugoo/",
            accent: "text-accent-1"
        },
        {
            icon: <Github className="h-5 w-5" />,
            title: "GitHub",
            content: "@justlugoo",
            link: "https://github.com/justlugoo",
            accent: "text-foreground"
        }
    ];

    return (
        <section id="contacto" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
            {/* Elementos decorativos minimalistas */}
            <div className="absolute top-1/6 right-1/3 w-1 h-20 bg-gradient-to-b from-primary/40 to-transparent transform rotate-45 hidden lg:block"></div>
            <div className="absolute bottom-1/4 left-1/4 w-20 h-1 bg-gradient-to-r from-accent-3/30 to-transparent hidden lg:block"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header asimétrico */}
                <div className="mb-12 lg:mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-0.5 bg-primary"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-glow">
                            Contacto
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent"></div>
                    </div>
                    
                    <div className="max-w-2xl">
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            ¿Tienes una idea de proyecto o quieres colaborar?
                        </p>
                        <p className="text-base text-foreground/60 leading-relaxed pl-4 mt-2 border-l-2 border-foreground/10">
                            Envíame un mensaje y estaré encantado de hablar contigo!
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Formulario de contacto */}
                    <div className="space-y-6">
                        {/* Status indicator */}
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <div className="w-2 h-2 bg-accent-3 rounded-full animate-pulse"></div>
                            <span>Respuesta en 24-48 horas</span>
                        </div>
                        
                        <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 lg:p-8">
                            <h3 className="text-xl font-semibold mb-6 text-foreground">
                                Envíame un Mensaje
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                                            Nombre *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background/50 border border-foreground/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background/50 border border-foreground/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                                        Asunto *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-background/50 border border-foreground/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                                        placeholder="¿De qué quieres hablar?"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-background/50 border border-foreground/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
                                        placeholder="Cuéntame sobre tu proyecto o idea..."
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="cosmic-button w-full flex items-center justify-center gap-2"
                                >
                                    <Send className="h-4 w-4" />
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">
                                Información de Contacto
                            </h3>
                            <div className="space-y-3">
                                <p className="text-foreground/70 leading-relaxed">
                                    Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                                </p>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    Si tienes un proyecto interesante o simplemente quieres conectar, 
                                    no dudes en contactarme.
                                </p>
                            </div>
                        </div>

                        {/* Contact cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="p-4 rounded-lg bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-200 group">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${info.accent} bg-current/10 flex-shrink-0`}>
                                            <div className={`${info.accent}`}>
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-medium text-foreground text-sm">
                                                {info.title}
                                            </p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`${info.accent} hover:opacity-80 transition-opacity duration-200 text-sm break-all`}
                                                >
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-foreground/70 text-sm break-all">
                                                    {info.content}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};