import React, { useEffect } from 'react';
import { Heart, Play, ExternalLink, Image as ImageIcon, BookOpen, Sparkles, MessageCircle, HeartPulse, Droplets } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Realistic Product Outlines (Grey Outlines)
    const CupOutline = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M6 4c0 0 0 9 6 9s6-9 6-9H6z" />
            <path d="M12 13v4" />
            <circle cx="12" cy="18" r="1.5" />
            <path d="M7 4a12 12 0 0 1 10 0" />
        </svg>
    );
    const TamponOutline = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="9" y="3" width="6" height="12" rx="3" />
            <path d="M12 15s-1 3 0 6" />
            <path d="M10 6h4M10 9h4" />
        </svg>
    );
    const PantyOutline = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M3 6h18l-2 5c-1 4-3 7-7 7s-6-3-7-7L3 6z" />
            <path d="M3 6c3 1 6 2 9 2s6-1 9-2" />
        </svg>
    );
    const DiscOutline = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <ellipse cx="12" cy="11" rx="9" ry="5" />
            <ellipse cx="12" cy="12" rx="7" ry="2.5" />
            <path d="M3 11c0 3 4 6 9 6s9-3 9-6" />
        </svg>
    );
    const PadOutline = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M8 3h8a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8z" />
            <path d="M8 13h8a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8z" />
            <path d="M5 10c0-2 2-2 3-2h8c1 0 3 0 3 2s-2 2-3 2H8c-1 0-3 0-3-2z" />
        </svg>
    );
    const HeatBagOutline = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 7h10v12a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V7z" />
            <path d="M10 3h4v4h-4V3z" />
            <path d="M8 10h8M8 14h8M8 18h8" />
        </svg>
    );
    const BloodDropOutline = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    return (
        <div className="min-h-screen bg-white relative overflow-hidden" style={{ isolation: 'isolate' }}>
            {/* BACKGROUND WALLPAPER: Darker Grey Outlines for better visibility */}
            <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-[0.07]">
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-20 p-10 mt-10">
                    {Array.from({ length: 96 }).map((_, i) => {
                        const icons = [
                            <CupOutline key="c" />, <TamponOutline key="t" />,
                            <PantyOutline key="p" />, <DiscOutline key="d" />,
                            <PadOutline key="pa" />, <HeatBagOutline key="h" />,
                            <BloodDropOutline key="b" />
                        ];
                        const icon = icons[i % icons.length];
                        const rotation = (i * 15) % 360;
                        return (
                            <div
                                key={i}
                                className="text-stone-500 transform"
                                style={{ transform: `rotate(${rotation}deg)`, width: '36px', height: '36px' }}
                            >
                                {icon}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Custom Styles */}
            <style>{`
                .text-blood-red { color: #880808; }
                .text-stroke-red {
                    -webkit-text-stroke: 1.5px #880808;
                    color: white;
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(25px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-transparent py-24 z-10">
                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100 bg-white/90 backdrop-blur-sm shadow-sm mb-12 animate-fade-in-up">
                        <BloodDropSolid className="w-3.5 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-800">Reboot of Thoughts on Menstruation</span>
                    </div>

                    <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h1 className="font-serif text-[clamp(2.5rem,10vw,7.5rem)] font-bold tracking-tighter whitespace-nowrap leading-none flex items-center gap-2 md:gap-4 justify-center">
                            <span className="text-stroke-red">Happy</span>{' '}
                            <span className="text-[#880808] italic">Periods</span>
                            <div className="w-[0.8em] h-[1em]">
                                <BloodDropSolid className="w-full h-full" />
                            </div>
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Let's make our world <span className="text-[#880808] font-bold tracking-tight">PERIOD FRIENDLY!</span>
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-6 bg-white/90 backdrop-blur-xs relative z-10 border-t border-stone-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-1 border-l-2 border-[#880808] h-32 hidden lg:block" />
                    <div className="lg:col-span-6 space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#880808]">The Impact</h2>
                        <h3 className="font-serif text-4xl md:text-6xl text-stone-900 font-bold leading-tight tracking-tighter">
                            Breaking the <br />
                            Silence Barrier.
                        </h3>
                        <div className="prose prose-stone text-lg text-stone-500 leading-relaxed font-light space-y-6">
                            <p>
                                Since 2021, I have been actively involved in conducting workshops and awareness sessions across various communities to educate young girls and women about menstrual hygiene.
                            </p>
                            <p>
                                My work focuses on replacing myths with medical facts and shame with a sense of natural pride. Through <span className="text-stone-900 font-medium italic">'Happy Periods'</span>, I've reached hundreds of individuals.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 pt-10 border-t border-stone-100">
                            <div>
                                <h4 className="font-bold text-4xl text-stone-900">1000+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-[#880808]">Individuals reached</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-4xl text-stone-900">50+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">Knowledge Hubs</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="aspect-square bg-stone-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-stone-100 group transition-transform duration-700 hover:scale-[1.02]">
                            <div className="absolute inset-0 flex items-center justify-center bg-red-50/20">
                                <ImageIcon className="w-12 h-12 text-stone-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 bg-[#fafafa]/90 backdrop-blur-xs relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 font-sans mb-4">Portfolio</h2>
                        <h3 className="font-serif text-5xl font-bold text-stone-900 uppercase tracking-tighter">Work Sessions</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            "Community Workshop", "Rural Advocacy",
                            "School Training", "Distribution Drive",
                            "Panel Discussion", "Digital Campaign"
                        ].map((title, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-square bg-white rounded-2xl overflow-hidden mb-6 shadow-sm border border-stone-100 group-hover:border-[#880808]/20 transition-all duration-700">
                                    <div className="absolute inset-0 bg-stone-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                        <ImageIcon className="w-10 h-10 text-stone-200" />
                                    </div>
                                </div>
                                <h4 className="font-serif text-2xl font-bold text-stone-900 mb-1">{title}</h4>
                                <p className="text-xs font-bold uppercase tracking-widest text-stone-400">2021 — PRESENT</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Archive Section */}
            <section className="py-24 bg-white relative z-10">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-[#880808] rounded-[2.5rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />

                        <div className="relative z-10 space-y-16">
                            <h3 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">The Archive</h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    { title: "Menstrual Hygiene Research Paper", type: "PDF" },
                                    { title: "Grassroots Advocacy Guidelines", type: "DOC" }
                                ].map((link, i) => (
                                    <a key={i} href="#" className="flex items-center justify-between p-10 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-[#880808] transition-all group">
                                        <div>
                                            <h4 className="text-xl font-bold transition-colors">{link.title}</h4>
                                            <p className="text-xs uppercase tracking-widest opacity-50 block mt-2">{link.type}</p>
                                        </div>
                                        <ExternalLink className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-white text-center relative z-10 border-t border-stone-50">
                <div className="max-w-3xl mx-auto px-6 space-y-12">
                    <div className="inline-flex p-5 rounded-3xl bg-red-50 mb-4 items-center justify-center animate-bounce">
                        <MessageCircle className="w-10 h-10 text-[#880808]" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter leading-none">
                        Let's <span className="text-[#880808] italic">Collaborate.</span>
                    </h2>
                    <p className="text-xl text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
                        Join hands to empower and educate. I am available for sessions in schools, communities, and rural centers.
                    </p>
                    <div className="pt-8">
                        <a href="/contact" className="px-14 py-6 bg-[#880808] text-white font-bold rounded-full hover:bg-stone-900 transition-all shadow-xl shadow-red-900/10 uppercase tracking-widest text-[10px]">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HappyPeriodsPage;
