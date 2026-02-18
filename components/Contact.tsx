
import React from 'react';
import { Linkedin, Instagram, Facebook, ExternalLink, Mail } from 'lucide-react';

const LinktreeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" />
    </svg>
);

const TopmateIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 47 46"
        fill="currentColor"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle r="22.5" transform="matrix(1 0 0 -1 23.6152 23)" fill="currentColor" />
        <path d="M33.0038 29.6411C31.5707 31.6672 29.5206 33.1752 27.1598 33.9401C24.7989 34.705 22.254 34.6857 19.905 33.8851C17.5561 33.0844 15.5291 31.5454 14.1269 29.4978C12.7247 27.4503 12.0225 25.0041 12.1251 22.5246C12.2277 20.045 13.1296 17.6652 14.6962 15.7405C16.2627 13.8158 18.4099 12.4495 20.817 11.8456C23.224 11.2418 25.7619 11.4328 28.0515 12.3901C30.341 13.3474 32.2595 15.0197 33.5204 17.1572L23.6152 23L33.0038 29.6411Z" fill="#faf9f6" />
    </svg>
);

const Contact: React.FC = () => {
    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/sonakhi-malla-rumi', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com/sonakhi_rumi', label: 'Instagram' },
        { icon: Facebook, href: 'https://www.facebook.com/sonakhi.rumi', label: 'Facebook' },
        { icon: LinktreeIcon, href: 'https://linktr.ee/sonakhirumi', label: 'Linktree' },
        { icon: TopmateIcon, href: 'https://topmate.io/sonakhirumi', label: 'Topmate' },
        { icon: Mail, href: 'mailto:sonakhirumi@gmail.com', label: 'Email' },
    ];

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-32 pb-24 px-6 flex flex-col items-center justify-center">
            <div className="max-w-3xl w-full space-y-16 text-center">

                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-tight">
                        Get in Touch
                    </h1>

                </div>

                <div className="flex flex-wrap gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
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


                </div>

            </div>
        </div>
    );
};

export default Contact;
