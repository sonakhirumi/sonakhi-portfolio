
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
        <path d="M13.7367 5.86062L12.0001 0L10.2635 5.86062H8.32917C7.65217 5.86062 7.22818 6.59364 7.56743 7.17743L9.04308 9.71718L6.4254 9.17517C5.7484 9.03494 5.20146 9.71363 5.51869 10.3015L8.9142 16.5912H5.66986C4.99286 16.5912 4.56887 17.3242 4.90812 17.908L10.6625 24H13.3375L19.0919 17.908C19.4311 17.3242 19.0071 16.5912 18.3301 16.5912H15.0858L18.4813 10.3015C18.7985 9.71363 18.2516 9.03494 17.5746 9.17517L14.9569 9.71718L16.4326 7.17743C16.7718 6.59364 16.3478 5.86062 15.6708 5.86062H13.7367V5.86062Z" />
    </svg>
);

const TopmateIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M12.0002 0.800049C5.81467 0.800049 0.800232 5.81448 0.800232 12C0.800232 18.1856 5.81467 23.2001 12.0002 23.2001C18.1858 23.2001 23.2002 18.1856 23.2002 12C23.2002 5.81448 18.1858 0.800049 12.0002 0.800049ZM13.8863 16.3768C13.8863 16.3768 11.8385 16.3768 10.1141 16.3768C9.53982 16.3768 9.07431 15.9113 9.07431 15.337V8.66311C9.07431 8.08883 9.53982 7.62332 10.1141 7.62332H13.8863C14.4606 7.62332 14.9261 8.08883 14.9261 8.66311V15.337C14.9261 15.9113 14.4606 16.3768 13.8863 16.3768Z" />
    </svg>
);

const Contact: React.FC = () => {
    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/sonakhi-malla-rumi', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com/sonakhi_rumi', label: 'Instagram' },
        { icon: Facebook, href: 'https://www.facebook.com/sonakhi.rumi', label: 'Facebook' },
        { icon: LinktreeIcon, href: 'https://linktr.ee/sonakhirumi', label: 'Linktree' },
        { icon: TopmateIcon, href: 'https://topmate.io/sonakhirumi', label: 'Topmate' },
    ];

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-32 pb-24 px-6 flex flex-col items-center justify-center">
            <div className="max-w-3xl w-full space-y-16 text-center">

                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-tight">
                        Get in Touch
                    </h1>

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
