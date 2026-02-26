import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, MessageCircle } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 1:1 FAITHFUL RECREATIONS OF THE 12 ICONS FROM THE REFERENCE IMAGE
    const Icon1 = () => ( // Top Left: Pad with wavy outer wings and stitch lines
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 5h10c2.5 0 2.5 4 2.5 7s0 7-2.5 7H7c-2.5 0-2.5-4-2.5-7s0-7 2.5-7z" />
            <path d="M4.5 9c-1.5 0-2 1.5-2 3s0.5 3 2 3M19.5 9c1.5 0 2 1.5 2 3s-0.5 3-2 3" />
            <path d="M10 8v8M14 8v8" strokeDasharray="1 2" strokeOpacity="0.6" />
        </svg>
    );

    const Icon2 = () => ( // Top Row 2: Pad with simple rectangular wings
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M8 4h8c2.5 0 3 4 3 8s-0.5 8-3 8H8c-2.5 0-3-4-3-8s0.5-8 3-8z" />
            <path d="M5 10h-2v4h2M19 10h2v4h-2" />
        </svg>
    );

    const Icon3 = () => ( // Top Row 3: Small peanut-shaped liner
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 5c-2.5 0-3.5 2-3.5 4.5s1 2.5 1 2.5s-1 1-1 3s1.5 4 3.5 4s3.5-2 3.5-4s-1-1-1-3s1 0 1-2.5s-1-4.5-3.5-4.5z" />
        </svg>
    );

    const Icon4 = () => ( // Top Right: Large heart-ish shaped pad
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 20s-5-2-5-6s2-5 5-5s5 1 5 5s0 6-5 6z" />
            <path d="M9 13s1 1 3 1s3-1 3-1" strokeDasharray="1 1" />
        </svg>
    );

    const Icon5 = () => ( // Middle Row 1: Spiral tampon with string
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-30)">
            <rect x="10" y="4" width="4" height="11" rx="2" />
            <path d="M10 7l4 2M10 10l4 2M10 13l4 2" />
            <path d="M12 15s-0.5 2-2 4" />
        </svg>
    );

    const Icon6 = () => ( // Middle Row 2: Menstrual Cup (Flat rim, tapering body, short stem)
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 5h10l-1 6c-0.5 3-4 3-4 3s-3.5 0-4-3L7 5z" />
            <path d="M7 7h10" />
            <path d="M12 14v3" />
            <path d="M10.5 17h3" />
        </svg>
    );

    const Icon7 = () => ( // Middle Row 3: Dotted oval pad
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(45)">
            <ellipse cx="12" cy="12" rx="9" ry="5" />
            <path d="M8 12s2 1 4 1s4-1 4-1" strokeDasharray="1 2" />
        </svg>
    );

    const Icon8 = () => ( // Middle Right: Uterus with ovaries
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 13c-2-2-5-2-7 0m14 0c-2-2-5-2-7 0" />
            <path d="M12 13v6" />
            <path d="M10 19h4" />
            <circle cx="5" cy="13" r="1.5" />
            <circle cx="19" cy="13" r="1.5" />
        </svg>
    );

    const Icon9 = () => ( // Bottom Row 1: Applicator tampon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-45)">
            <rect x="10" y="4" width="4" height="10" rx="1" />
            <path d="M9 14h6" />
            <path d="M12 14v6" />
        </svg>
    );

    const Icon10 = () => ( // Bottom Row 2: 6-pill blister pack
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(15)">
            <rect x="6" y="5" width="12" height="14" rx="2" />
            <circle cx="9" cy="8" r="1" /><circle cx="15" cy="8" r="1" />
            <circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" />
            <circle cx="9" cy="16" r="1" /><circle cx="15" cy="16" r="1" />
        </svg>
    );

    const Icon11 = () => ( // Bottom Row 3: Waistline with cramps
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M8 6c1 4 1 8 0 14M16 6c-1 4-1 8 0 14" />
            <path d="M9 15h6l-1 3h-4l-1-3z" />
            <path d="M4 10l1-1 1 1M20 10l-1-1-1 1" />
        </svg>
    );

    const Icon12 = () => ( // Bottom Right: Calendar with droplets
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="6" width="12" height="12" rx="1" />
            <path d="M6 10h12M9 4v4M15 4v4" />
            <circle cx="9" cy="14" r="0.5" fill="black" /><circle cx="12" cy="14" r="0.5" fill="black" /><circle cx="15" cy="14" r="0.5" fill="black" />
        </svg>
    );

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // DENSE SCATTERED POSITIONS
    const scattered = [
        { l: '3%', t: '8%', r: '15deg', i: Icon1 }, { l: '20%', t: '15%', r: '-10deg', i: Icon2 },
        { l: '38%', t: '12%', r: '45deg', i: Icon3 }, { l: '55%', t: '22%', r: '-30deg', i: Icon4 },
        { l: '72%', t: '10%', r: '120deg', i: Icon5 }, { l: '88%', t: '18%', r: '10deg', i: Icon6 },
        { l: '10%', t: '32%', r: '-15deg', i: Icon7 }, { l: '28%', t: '45%', r: '33deg', i: Icon8 },
        { l: '45%', t: '35%', r: '200deg', i: Icon9 }, { l: '62%', t: '48%', r: '12deg', i: Icon10 },
        { l: '80%', t: '38%', r: '-45deg', i: Icon11 }, { l: '94%', t: '52%', r: '80deg', i: Icon12 },
        { l: '15%', t: '65%', r: '-10deg', i: Icon1 }, { l: '32%', t: '58%', r: '350deg', i: Icon4 },
        { l: '50%', t: '72%', r: '25deg', i: Icon6 }, { l: '68%', t: '65%', r: '-12deg', i: Icon8 },
        { l: '85%', t: '78%', r: '150deg', i: Icon2 }, { l: '5%', t: '85%', r: '40deg', i: Icon10 },
        { l: '22%', t: '92%', r: '-20deg', i: Icon3 }, { l: '40%', t: '82%', r: '95deg', i: Icon6 },
        { l: '58%', t: '95%', r: '15deg', i: Icon11 }, { l: '75%', t: '88%', r: '-45deg', i: Icon5 },
        { l: '92%', t: '92%', r: '10deg', i: Icon7 }, { l: '50%', t: '45%', r: '-110deg', i: Icon9 }
    ];

    return (
        <div className="min-h-screen bg-white relative" style={{ isolation: 'isolate' }}>
            {/* BACKGROUND SCATTERED ICONS */}
            <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-[0.22]">
                {scattered.map((s, idx) => (
                    <div
                        key={idx}
                        className="absolute text-stone-500"
                        style={{ left: s.l, top: s.t, transform: `rotate(${s.r})`, width: '55px', height: '55px' }}
                    >
                        <s.i />
                    </div>
                ))}
            </div>

            <div className="relative z-10">
                <style>{`
                    .text-stroke-red { -webkit-text-stroke: 1.5px #880808; color: white; }
                    @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                    .animate-slide-up { animation: slide-up 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
                `}</style>

                {/* Hero section */}
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

                {/* Content sections with transparency */}
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

                {/* Footer Section */}
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
