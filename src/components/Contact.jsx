import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

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
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            content: "maurogranados31@gmail.com",
            link: "mailto:maurogranados31@gmail.com"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Ubicación",
            content: "Cartagena de Indias, Colombia",
            link: null
        },
        {
            icon: <Linkedin className="h-6 w-6" />,
            title: "LinkedIn",
            content: "/in/justlugoo",
            link: "https://www.linkedin.com/in/justlugoo/"
        },
        {
            icon: <Github className="h-6 w-6" />,
            title: "GitHub",
            content: "@justlugoo",
            link: "https://github.com/justlugoo"
        }
    ];

    return (
        <section id="contacto" className="min-h-screen flex items-center justify-center px-4 py-20 bg-card/20">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
                        Contacto
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        ¿Tienes una idea de proyecto o quieres colaborar? 
                        Enviame un mensaje y estaré encantado de hablar contigo!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="gradient-border p-6 card-glow">
                        <h3 className="text-2xl font-bold mb-6 text-foreground">
                            Envíame un Mensaje
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                                        Nombre *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                                    Asunto *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                    placeholder="¿De qué quieres hablar?"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                                    Mensaje *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                                    placeholder="Cuéntame sobre tu proyecto o idea..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full cosmic-button flex items-center justify-center gap-2"
                            >
                                <Send className="h-5 w-5" />
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-foreground">
                                Información de Contacto
                            </h3>
                            <p className="text-foreground/70 leading-relaxed mb-8">
                                Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
                                Si tienes un proyecto interesante o simplemente quieres conectar, 
                                no dudes en contactarme.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="gradient-border p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-medium text-foreground">
                                                {info.title}
                                            </p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:text-primary/80 transition-colors duration-300 break-all"
                                                >
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-foreground/70 break-all">
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