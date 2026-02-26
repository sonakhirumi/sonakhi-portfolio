import React, { useEffect } from 'react';
import { Heart, Play, ExternalLink, Image as ImageIcon, BookOpen, Sparkles, MessageCircle, HeartPulse, Droplets } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Custom Blood Drop Component
    const BloodDrop = ({ className }: { className?: string }) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // Simple Pad Icon SVG for the rain
    const PadIcon = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 40 20" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="30" height="10" rx="5" />
            <rect x="0" y="8" width="8" height="4" rx="2" />
            <rect x="32" y="8" width="8" height="4" rx="2" />
        </svg>
    );

    return (
        <div className="min-h-screen bg-white" style={{ isolation: 'isolate' }}>
            {/* Custom Styles */}
            <style>{`
                .text-blood-red { color: #880808; }
                .bg-blood-red { background-color: #880808; }
                .text-stroke-red {
                    -webkit-text-stroke: 1.5px #880808;
                    color: white;
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                @keyframes fall {
                    0% { transform: translateY(-50px) rotate(0deg); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(800px) rotate(20deg); opacity: 0; }
                }
                .animate-fall {
                    animation: fall linear infinite;
                }
            `}</style>

            {/* Rain of Period Products Animation */}
            <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0">
                {Array.from({ length: 40 }).map((_, i) => {
                    const left = Math.random() * 100;
                    const duration = 4 + Math.random() * 6;
                    const delay = Math.random() * 8;
                    const size = 12 + Math.random() * 20;
                    const opacity = 0.05 + Math.random() * 0.15;
                    const rotation = Math.random() * 360;

                    // Randomly choose between BloodDrop, PadIcon, and Sparkles
                    const type = Math.floor(Math.random() * 3);

                    return (
                        <div
                            key={i}
                            className="absolute animate-fall"
                            style={{
                                left: `${left}%`,
                                top: -50,
                                transform: `rotate(${rotation}deg)`,
                                width: `${size}px`,
                                height: `${size}px`,
                                color: i % 2 === 0 ? '#880808' : '#fee2e2', // Alternate between blood red and very soft red
                                opacity: opacity,
                                animationDuration: `${duration}s`,
                                animationDelay: `${delay}s`,
                            }}
                        >
                            {type === 0 ? <BloodDrop className="w-full h-full" /> :
                                type === 1 ? <PadIcon className="w-full h-full" /> :
                                    <Sparkles className="w-full h-full" />}
                        </div>
                    );
                })}
            </div>

            {/* Hero Section: Reduced heights and padding */}
            <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-white border-b border-stone-100 py-12">
                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-100 bg-white mb-6 shadow-sm animate-fade-in-up">
                        <BloodDrop className="w-2.5 h-3 text-[#880808]" />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-800">Reboot of Thoughts on Menstruation</span>
                    </div>

                    <div className="relative animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h1 className="font-serif text-[clamp(2.5rem,9vw,6.5rem)] font-bold tracking-tighter whitespace-nowrap leading-none flex items-center gap-2 md:gap-4 justify-center">
                            <span className="text-stroke-red">Happy</span>{' '}
                            <span className="text-[#880808] italic">Periods</span>
                            <BloodDrop className="w-[0.7em] h-[0.9em] text-[#880808]" />
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed mt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Let's make our world <span className="text-[#880808] font-bold tracking-tight">PERIOD FRIENDLY!</span>
                    </p>
                </div>
            </section>

            {/* Mission Section: Tightened layout */}
            <section className="py-16 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-1 border-l-2 border-[#880808] h-24 hidden lg:block" />
                    <div className="lg:col-span-6 space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#880808]">The Impact</h2>
                        <h3 className="font-serif text-3xl md:text-5xl text-stone-900 font-bold leading-tight">
                            Breaking the Silence Barrier.
                        </h3>
                        <div className="prose prose-stone text-base text-stone-500 leading-relaxed font-light space-y-4">
                            <p>
                                Since 2021, I have been actively involved in conducting workshops and awareness sessions across various communities to educate young girls and women about menstrual hygiene.
                            </p>
                            <p>
                                My work focuses on replacing myths with medical facts and shame with a sense of natural pride. Through <span className="text-stone-900 font-medium italic">'Happy Periods'</span>, I've reached hundreds of individuals.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-stone-100">
                            <div className="space-y-1">
                                <h4 className="font-bold text-3xl text-stone-900">1000+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-[#880808]">Individuals reached</p>
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-3xl text-stone-900">50+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">Knowledge Hubs</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="aspect-square bg-stone-50 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-stone-100 scale-95 hover:scale-100 transition-transform duration-500">
                            <div className="absolute inset-0 flex items-center justify-center bg-red-50/20">
                                <ImageIcon className="w-10 h-10 text-stone-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section: Reduced spacing */}
            <section className="py-16 bg-[#fafafa]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 font-sans mb-2">Portfolio</h2>
                        <h3 className="font-serif text-3xl font-bold text-stone-900 uppercase tracking-tighter">Work Sessions</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Community Workshop",
                            "Rural Advocacy",
                            "School Training",
                            "Distribution Drive",
                            "Panel Discussion",
                            "Digital Campaign"
                        ].map((title, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-4 shadow-sm border border-stone-100 group-hover:border-[#880808]/20 transition-all duration-300">
                                    <div className="absolute inset-0 bg-stone-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                        <ImageIcon className="w-7 h-7 text-stone-200" />
                                    </div>
                                </div>
                                <h4 className="font-serif text-xl font-bold text-stone-900">{title}</h4>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mt-1">2021 — PRESENT</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section: Compressed */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-[#880808] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]" />

                        <div className="relative z-10 space-y-8">
                            <h3 className="font-serif text-3xl font-bold tracking-tight">The Archive</h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Menstrual Hygiene Report", type: "PDF" },
                                    { title: "Grassroots Guidelines", type: "DOC" }
                                ].map((link, i) => (
                                    <a key={i} href="#" className="flex items-center justify-between p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white hover:text-[#880808] transition-all group">
                                        <div>
                                            <h4 className="text-base font-bold group-hover:text-[#880808] transition-colors">{link.title}</h4>
                                            <p className="text-[10px] uppercase tracking-widest opacity-50 block mt-1">{link.type}</p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA: Compact */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6 space-y-6">
                    <div className="inline-flex p-3 rounded-2xl bg-red-50 mb-2 items-center justify-center">
                        <MessageCircle className="w-8 h-8 text-[#880808]" />
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                        Let's <span className="text-[#880808] italic">Collaborate.</span>
                    </h2>
                    <p className="text-base text-stone-500 font-light max-w-md mx-auto leading-relaxed">
                        Available for sessions in schools, communities, and rural centers. Join the movement.
                    </p>
                    <div className="pt-4">
                        <a href="/contact" className="px-10 py-4 bg-[#880808] text-white font-bold rounded-full hover:bg-stone-900 transition-all shadow-lg text-sm">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HappyPeriodsPage;
