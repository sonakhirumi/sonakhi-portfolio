import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, BookOpen, Sparkles, MessageCircle, HeartPulse, Droplets } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ICONS REPRODUCED FAITHFULLY FROM THE REFERENCE IMAGE
    const PadWavy = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
            <path d="M5 10c-1 0-2 1-2 2s1 2 2 2M19 10c1 0 2 1 2 2s-1 2-2 2" />
            <path d="M10 7v10M14 7v10" strokeDasharray="1 1.5" />
        </svg>
    );

    const PadRect = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 4h6c4 0 4 4 4 8s0 8-4 8H9c-4 0-4-4-4-8s0-8 4-8z" />
            <path d="M5 10v4M19 10v4" />
            <circle cx="12" cy="12" r="4" strokeDasharray="1 2" />
        </svg>
    );

    const Liner = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 4c-3 0-5 2-5 5v6c0 3 2 5 5 5s5-2 5-5V9c0-3-2-5-5-5z" />
            <path d="M10 8c0 0 1 1 2 1s2-1 2-1" />
            <path d="M12 10v6" strokeDasharray="1 2" />
        </svg>
    );

    const TamponSpiral = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M10 4h4v12h-4V4z" rx="2" transform="rotate(15 12 10)" />
            <path d="M10.5 7l3.5 1M11 10.5l3.5 1M11.5 14l2.5 0.5" />
            <path d="M13 16c0 1-1 3-2 5" />
        </svg>
    );

    const MenstrualCup = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 4h10l-1 5c-1 4-4 4-4 4s-3 0-4-4L7 4z" />
            <path d="M7 7h10M12 13v4" />
            <path d="M10 17h4" />
        </svg>
    );

    const Anatomy = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 11c-2-2-5-2-7 0m14 0c-2-2-5-2-7 0" />
            <path d="M12 11v8M10 19h4" />
            <circle cx="5" cy="11" r="1.5" />
            <circle cx="19" cy="11" r="1.5" />
        </svg>
    );

    const BlisterPack = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="5" width="12" height="14" rx="2" transform="rotate(-15 12 12)" />
            <circle cx="9" cy="9" r="1" />
            <circle cx="15" cy="10" r="1" />
            <circle cx="13" cy="14" r="1" />
            <circle cx="10" cy="16" r="1" />
        </svg>
    );

    const Cramps = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 4c2 3 2 7 0 16M17 4c-2 3-2 7 0 16" />
            <path d="M8 15h8l-1 4H9l-1-4z" />
            <circle cx="12" cy="10" r="0.5" fill="currentColor" />
            <path d="M4 8l1-1 1 1M20 8l-1-1-1 1" />
        </svg>
    );

    const CalendarIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="6" width="12" height="12" rx="1" />
            <path d="M8 4v4M16 4v4M6 10h12" />
            <circle cx="10" cy="14" r="0.8" fill="currentColor" />
            <circle cx="14" cy="14" r="0.8" fill="currentColor" />
        </svg>
    );

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // Truly scattered and unique positions for the 9 restored icons
    const iconStyles = [
        { left: '4%', top: '6%', rotate: '12deg', icon: PadWavy },
        { left: '15%', top: '15%', rotate: '-18deg', icon: TamponSpiral },
        { left: '28%', top: '8%', rotate: '35deg', icon: Liner },
        { left: '42%', top: '25%', rotate: '-45deg', icon: MenstrualCup },
        { left: '58%', top: '10%', rotate: '95deg', icon: Anatomy },
        { left: '72%', top: '18%', rotate: '15deg', icon: BlisterPack },
        { left: '88%', top: '5%', rotate: '-25deg', icon: Cramps },
        { left: '94%', top: '32%', rotate: '55deg', icon: CalendarIcon },
        { left: '6%', top: '42%', rotate: '210deg', icon: PadRect },
        { left: '22%', top: '38%', rotate: '15deg', icon: Anatomy },
        { left: '35%', top: '55%', rotate: '-110deg', icon: TamponSpiral },
        { left: '52%', top: '45%', rotate: '72deg', icon: PadWavy },
        { left: '68%', top: '38%', rotate: '-15deg', icon: MenstrualCup },
        { left: '82%', top: '52%', rotate: '140deg', icon: BlisterPack },
        { left: '92%', top: '75%', rotate: '22deg', icon: Liner },
        { left: '12%', top: '68%', rotate: '-40deg', icon: PadRect },
        { left: '28%', top: '82%', rotate: '88deg', icon: Cramps },
        { left: '45%', top: '72%', rotate: '12deg', icon: CalendarIcon },
        { left: '62%', top: '88%', rotate: '-150deg', icon: PadWavy },
        { left: '78%', top: '78%', rotate: '45deg', icon: Anatomy },
        { left: '5%', top: '92%', rotate: '20deg', icon: Liner },
        { left: '95%', top: '95%', rotate: '-75deg', icon: TamponSpiral },
        { left: '50%', top: '95%', rotate: '180deg', icon: PadRect },
    ];

    return (
        <div className="min-h-screen bg-white relative overflow-hidden" style={{ isolation: 'isolate' }}>
            {/* BACKGROUND WALLPAPER: FAITHFUL REPRODUCTIONS SCATTERED */}
            <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-[0.14]">
                {iconStyles.map((style, i) => (
                    <div
                        key={i}
                        className="absolute text-stone-500"
                        style={{
                            left: style.left,
                            top: style.top,
                            transform: `rotate(${style.rotate})`,
                            width: '48px',
                            height: '48px'
                        }}
                    >
                        <style.icon />
                    </div>
                ))}
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

            {/* Content Section (Remains unchanged in branding) */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-transparent py-24 z-10">
                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100 bg-white/95 backdrop-blur-sm shadow-sm mb-12 animate-fade-in-up tracking-tight">
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
            <section className="py-24 px-6 bg-white/95 backdrop-blur-xs relative z-10 border-t border-stone-50">
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

            {/* Final CTA (Condensed for this update) */}
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
