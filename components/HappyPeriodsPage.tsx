import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, MessageCircle } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ACCURATE ICON RECREATIONS FROM THE REFERENCE IMAGE
    const Icon1 = () => ( // Pad with wavy wings
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 5h10c2 0 2 4 2 7s0 7-2 7H7c-2 0-2-4-2-7s0-7 2-7z" />
            <path d="M5 10c-1.5-0.5-2.5 1-2.5 2s1 2.5 2.5 2M19 10c1.5-0.5 2.5 1 2.5 2s-1 2.5-2.5 2" />
            <path d="M9 8v8M12 8v8M15 8v8" strokeDasharray="1 2" />
        </svg>
    );

    const Icon2 = () => ( // Pad with square wings
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M8 4h8c2 0 3 3 3 8s-1 8-3 8H8c-2 0-3-3-3-8s1-8 3-8z" />
            <path d="M5 10h-2v4h2M19 10h2v4h-2" />
            <circle cx="12" cy="12" r="4" strokeDasharray="1 1" />
        </svg>
    );

    const Icon3 = () => ( // Peanut/Liner
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 4c-3 0-4 2-4 5s1 3 1 3s-1 1-1 3s1 5 4 5s4-2 4-5s-1-1-1-3s1-1 1-3s-1-5-4-5z" />
            <path d="M12 7v10" strokeDasharray="1 2" />
        </svg>
    );

    const Icon4 = () => ( // Tampon Spiral 1
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M10 4h4v11c0 1-1 2-2 2s-2-1-2-2V4z" />
            <path d="M10 7l4 2M10 10l4 2" />
            <path d="M12 17c0 2-1 4-3 5" />
        </svg>
    );

    const Icon5 = () => ( // Tampon Spiral 2
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="10" y="4" width="4" height="12" rx="2" transform="rotate(20 12 10)" />
            <path d="M12 7l3 1M11 11l3 1" />
            <path d="M13 16c0 2-1 4-2 5" />
        </svg>
    );

    const Icon6 = () => ( // Menstrual Cup
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M6 4h12c0 5-2 9-6 9s-6-4-6-9z" />
            <path d="M6 7h12M12 13v4M10 17h4" />
        </svg>
    );

    const Icon7 = () => ( // Angled Pad
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-30)">
            <path d="M7 5h10c2 0 2 4 2 7s0 7-2 7H7c-2 0-2-4-2-7s0-7 2-7z" />
            <path d="M9 8h6M9 12h6M9 16h6" strokeDasharray="1 2" />
        </svg>
    );

    const Icon8 = () => ( // Uterus
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 11c-2-2-5-2-7 0m14 0c-2-2-5-2-7 0" />
            <path d="M12 11v8M9 19h6" />
            <circle cx="4" cy="11" r="1" />
            <circle cx="20" cy="11" r="1" />
        </svg>
    );

    const Icon9 = () => ( // Tampon/Applicator
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M10 4h4v12h-4z" />
            <path d="M9 16h6" />
            <path d="M12 16v5" />
        </svg>
    );

    const Icon10 = () => ( // Blister Pack
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="5" width="12" height="14" rx="2" />
            <circle cx="9" cy="9" r="1" /><circle cx="15" cy="9" r="1" />
            <circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" />
            <circle cx="9" cy="15" r="1" /><circle cx="15" cy="15" r="1" />
        </svg>
    );

    const Icon11 = () => ( // Cramps/Body
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 10c2 2 2 6 0 10M17 10c-2 2-2 6 0 10" />
            <path d="M9 14h6l-1 4H10l-1-4z" />
            <path d="M4 6l1-1 1 1M20 6l-1-1-1 1" />
            <circle cx="12" cy="12" r="0.5" fill="currentColor" />
        </svg>
    );

    const Icon12 = () => ( // Calendar
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="5" y="5" width="14" height="14" rx="1" />
            <path d="M5 10h14M8 3v4M16 3v4" />
            <circle cx="9" cy="14" r="0.8" fill="currentColor" />
            <circle cx="12" cy="14" r="0.8" fill="currentColor" />
            <circle cx="15" cy="14" r="0.8" fill="currentColor" />
        </svg>
    );

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // DENSE SCATTERED POSITIONS
    const scattered = [
        { l: '3%', t: '8%', r: '15deg', i: Icon1 }, { l: '18%', t: '22%', r: '-10deg', i: Icon4 },
        { l: '35%', t: '12%', r: '45deg', i: Icon8 }, { l: '52%', t: '28%', r: '-30deg', i: Icon12 },
        { l: '68%', t: '15%', r: '120deg', i: Icon3 }, { l: '85%', t: '32%', r: '10deg', i: Icon6 },
        { l: '92%', t: '10%', r: '-15deg', i: Icon10 }, { l: '5%', t: '35%', r: '33deg', i: Icon2 },
        { l: '22%', t: '48%', r: '200deg', i: Icon11 }, { l: '40%', t: '42%', r: '12deg', i: Icon5 },
        { l: '58%', t: '55%', r: '-45deg', i: Icon9 }, { l: '75%', t: '38%', r: '80deg', i: Icon1 },
        { l: '88%', t: '45%', r: '-10deg', i: Icon7 }, { l: '12%', t: '62%', r: '350deg', i: Icon4 },
        { l: '28%', t: '75%', r: '25deg', i: Icon12 }, { l: '45%', t: '65%', r: '-12deg', i: Icon8 },
        { l: '62%', t: '78%', r: '150deg', i: Icon2 }, { l: '78%', t: '62%', r: '40deg', i: Icon10 },
        { l: '95%', t: '85%', r: '-20deg', i: Icon3 }, { l: '8%', t: '88%', r: '95deg', i: Icon6 },
        { l: '25%', t: '92%', r: '15deg', i: Icon11 }, { l: '42%', t: '82%', r: '-45deg', i: Icon5 },
        { l: '58%', t: '95%', r: '10deg', i: Icon7 }, { l: '75%', t: '88%', r: '-110deg', i: Icon9 },
        { l: '88%', t: '92%', r: '25deg', i: Icon1 }, { l: '50%', t: '5%', r: '-15deg', i: Icon12 }
    ];

    return (
        <div className="min-h-screen bg-white relative" style={{ isolation: 'isolate' }}>
            {/* FULL VISIBILITY SCATTERED BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-20">
                {scattered.map((s, idx) => (
                    <div
                        key={idx}
                        className="absolute text-stone-500"
                        style={{ left: s.l, top: s.t, transform: `rotate(${s.r})`, width: '60px', height: '60px' }}
                    >
                        <s.i />
                    </div>
                ))}
            </div>

            {/* Content Sections with subtle transparency to show background */}
            <div className="relative z-10">
                <style>{`
                    .text-stroke-red { -webkit-text-stroke: 1.5px #880808; color: white; }
                    @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                    .animate-slide-up { animation: slide-up 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
                `}</style>

                {/* Hero */}
                <section className="min-h-[85vh] flex flex-col items-center justify-center p-6 text-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100 bg-white shadow-sm mb-12 animate-slide-up">
                        <BloodDropSolid className="w-3.5 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-800">Reboot of Thoughts on Menstruation</span>
                    </div>

                    <h1 className="font-serif text-[clamp(2.5rem,11vw,8rem)] font-bold tracking-tighter leading-none flex items-center gap-2 md:gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <span className="text-stroke-red">Happy</span>{' '}
                        <span className="text-[#880808] italic">Periods</span>
                        <div className="w-[0.8em] h-[1em]"><BloodDropSolid className="w-full h-full" /></div>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed mt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        Let's make our world <span className="text-[#880808] font-bold tracking-tight">PERIOD FRIENDLY!</span>
                    </p>
                </section>

                {/* Impact */}
                <section className="py-32 px-6 bg-white/70 backdrop-blur-sm border-t border-stone-100">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-1 border-l-2 border-[#880808] h-32 hidden lg:block" />
                        <div className="lg:col-span-6 space-y-10">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#880808]">The Impact</h2>
                            <h3 className="font-serif text-4xl md:text-6xl text-stone-900 font-bold leading-tight tracking-tighter">Breaking the Silence Barrier.</h3>
                            <div className="prose prose-stone text-lg text-stone-500 leading-relaxed font-light space-y-6">
                                <p>Since 2021, I have been actively involved in conducting workshops and awareness sessions across various communities to educate young girls and women about menstrual hygiene.</p>
                                <p>My work focuses on replacing myths with medical facts and shame with a sense of natural pride. Through <span className="text-stone-900 font-medium italic">'Happy Periods'</span>, I've reached hundreds of individuals.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-stone-100">
                                <div><h4 className="font-bold text-4xl text-stone-900">1000+</h4><p className="text-[9px] font-black uppercase tracking-widest text-[#880808]">Individuals reached</p></div>
                                <div><h4 className="font-bold text-4xl text-stone-900">50+</h4><p className="text-[9px] font-black uppercase tracking-widest text-stone-400">Knowledge Hubs</p></div>
                            </div>
                        </div>
                        <div className="lg:col-span-5"><div className="aspect-square bg-stone-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-stone-100"><div className="absolute inset-0 flex items-center justify-center bg-red-50/20"><ImageIcon className="w-12 h-12 text-stone-200" /></div></div></div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-32 bg-white/70 backdrop-blur-sm text-center border-t border-stone-50">
                    <div className="max-w-3xl mx-auto px-6 space-y-12">
                        <div className="inline-flex p-5 rounded-3xl bg-red-50 mb-4 items-center justify-center animate-bounce"><MessageCircle className="w-10 h-10 text-[#880808]" /></div>
                        <h2 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter leading-none">Let's <span className="text-[#880808] italic">Collaborate.</span></h2>
                        <div className="pt-8"><a href="/contact" className="px-14 py-6 bg-[#880808] text-white font-bold rounded-full hover:bg-stone-900 transition-all shadow-xl uppercase tracking-widest text-[10px]">GET IN TOUCH</a></div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HappyPeriodsPage;
