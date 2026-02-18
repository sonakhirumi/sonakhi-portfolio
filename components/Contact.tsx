
import React from 'react';
import { Linkedin, Instagram, Facebook, Link2, Calendar, ExternalLink, Mail } from 'lucide-react';

const Contact: React.FC = () => {
    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/sonakhi-malla-rumi', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com/sonakhi_rumi', label: 'Instagram' },
        { icon: Facebook, href: 'https://www.facebook.com/sonakhi.rumi', label: 'Facebook' },
        { icon: Link2, href: 'https://linktr.ee/sonakhirumi', label: 'Linktree' },
        { icon: Calendar, href: 'https://topmate.io/sonakhirumi', label: 'Topmate' },
    ];

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-32 pb-24 px-6 flex flex-col items-center justify-center">
            <div className="max-w-3xl w-full space-y-16 text-center">

                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-tight">
                        Get in Touch
                    </h1>
                    <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
                        Interested in collaborating on editorial features, creative scripts, or brand storytelling? Let's connect across the digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4 p-6 bg-white border border-stone-200 rounded-2xl hover:border-stone-400 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-4 bg-stone-50 text-stone-900 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <social.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-stone-600 group-hover:text-stone-900">
                                {social.label}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                    <a
                        href="https://topmate.io/sonakhirumi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-stone-800 hover:scale-105 transition-all shadow-xl shadow-stone-900/10"
                    >
                        <span>Book a Consultation</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>

                    <div className="mt-12 pt-12 border-t border-stone-200">
                        <a href="mailto:hello@sonakhirumi.com" className="inline-flex items-center space-x-2 text-stone-500 hover:text-stone-900 transition-colors">
                            <Mail className="w-4 h-4" />
                            <span className="text-sm font-medium">hello@sonakhirumi.com</span>
                        </a>
                        <p className="text-xs text-stone-400 mt-4">(Or whatever official email you prefer)</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
