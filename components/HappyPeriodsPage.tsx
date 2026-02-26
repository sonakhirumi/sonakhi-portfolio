import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, MessageCircle } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // ------------------------------------------------------------------------
    // HIGH-QUALITY, CUSTOM VECTOR ICONS (Refined)
    // ------------------------------------------------------------------------

    const IconCup = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 6c0-1.12.9-2 2-2h10c1.1 0 2 .88 2 2v2c0 4.42-3.58 8-8 8s-8-3.58-8-8V6z" />
            <path d="M12 16v4M10 20h4M5 8h14" opacity="0.8" />
        </svg>
    );

    const IconPad = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="3" width="10" height="18" rx="5" />
            <path d="M7 8H4.5C3.12 8 2 9.12 2 10.5v3C2 14.88 3.12 16 4.5 16H7" />
            <path d="M17 8h2.5c1.38 0 2.5 1.12 2.5 2.5v3c0 1.38-1.12 2.5-2.5 2.5H17" />
            <path d="M12 8v8" strokeDasharray="2 2" opacity="0.6" />
        </svg>
    );

    const IconTampon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <g transform="rotate(20 12 12)">
                <rect x="8" y="3" width="8" height="13" rx="4" />
                <path d="M12 16v2M12 18c-1.5 1-1.5 2.5 0 3.5s-1.5 2.5 0 3.5M8 8h8M8 11h8" opacity="0.8" />
            </g>
        </svg>
    );

    const IconPanty = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M3 6c0 4.5 1.5 12 6 14 1 .45 2.5.5 3 .5s2-.05 3-.5c4.5-2 6-9.5 6-14M7 20C5 17 4.2 13 4 10M17 20c2-3 2.8-7 3-10" opacity="0.8" />
        </svg>
    );

    const IconHotWaterBottle = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="7" width="12" height="15" rx="4" />
            <path d="M9 7V4h6v3M10 2h4M9 11h6M9 15h6M9 19h6" opacity="0.8" />
        </svg>
    );

    const IconPillPack = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(15 12 12)" />
            <line x1="12" y1="4" x2="12" y2="20" opacity="0.5" transform="rotate(15 12 12)" />
            <circle cx="8" cy="8" r="1.5" transform="rotate(15 12 12)" />
            <circle cx="16" cy="8" r="1.5" transform="rotate(15 12 12)" />
            <circle cx="8" cy="16" r="1.5" transform="rotate(15 12 12)" />
            <circle cx="16" cy="16" r="1.5" transform="rotate(15 12 12)" />
        </svg>
    );

    const IconUterus = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 16v5M9 21h6" />
            <path d="M16 11c0-2-1.5-3.5-3.5-3.5h-1C9.5 7.5 8 9 8 11c0 2 1.5 3 2.5 4L12 16l1.5-1c1-1 2.5-2 2.5-4z" />
            <path d="M8 11c-2 0-4-1-4-1s-1.5-1-1.5-2.5S4 5 5 5s2.5 1 2.5 2.5c0 1-1 2-1 2" />
            <path d="M16 11c2 0 4-1 4-1s1.5-1 1.5-2.5S20 5 19 5s-2.5 1-2.5 2.5c0 1 1 2 1 2" />
            <circle cx="5" cy="5" r="1.5" fill="currentColor" fillOpacity="0.3" stroke="none" />
            <circle cx="19" cy="5" r="1.5" fill="currentColor" fillOpacity="0.3" stroke="none" />
        </svg>
    );

    const IconCalendarDrop = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" opacity="0.5" />
            <path d="M12 12.5c-1.5 0-3 1.5-3 3.5S10.5 19.5 12 19.5s3-1.5 3-3.5-3-3.5-3-3.5z" />
        </svg>
    );

    const IconDrop = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
    );

    // ------------------------------------------------------------------------
    // PLACEMENT RULE: EXTREME EDGES ONLY (Left 5-15% and Right 85-95%)
    // This perfectly frames the content without *ever* touching the text
    // ------------------------------------------------------------------------
    const scatteredIcons = [
        // --- LEFT COLUMN (Marginal) ---
        { l: '8%', t: '15%', r: '15deg', Icon: IconCup, size: 56 },
        { l: '12%', t: '32%', r: '-12deg', Icon: IconPad, size: 60 },
        { l: '6%', t: '55%', r: '25deg', Icon: IconTampon, size: 56 },
        { l: '10%', t: '75%', r: '-10deg', Icon: IconUterus, size: 64 },
        { l: '14%', t: '90%', r: '18deg', Icon: IconHotWaterBottle, size: 56 },

        // --- RIGHT COLUMN (Marginal) ---
        { l: '88%', t: '18%', r: '-15deg', Icon: IconCalendarDrop, size: 62 },
        { l: '92%', t: '38%', r: '12deg', Icon: IconPillPack, size: 56 },
        { l: '85%', t: '60%', r: '-8deg', Icon: IconPanty, size: 64 },
        { l: '90%', t: '82%', r: '20deg', Icon: IconDrop, size: 50 },
        { l: '86%', t: '96%', r: '-25deg', Icon: IconPad, size: 56 },
    ];

    return (
        <div className="min-h-screen bg-white relative" style={{ isolation: 'isolate' }}>

            {/* BACKGROUND: FRAMED MARGINAL ICONS ONLY */}
            <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden h-full">
                {scatteredIcons.map((s, idx) => (
                    <div
                        key={idx}
                        className="fixed flex items-center justify-center text-stone-300 opacity-[0.55]"
                        style={{
                            left: s.l,
                            top: s.t,
                            transform: `rotate(${s.r})`,
                            width: s.size,
                            height: s.size
                        }}
                    >
                        <s.Icon />
                    </div>
                ))}
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <style>{`
                    .text-stroke-red { -webkit-text-stroke: 1.5px #880808; color: white; }
                    @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                    .animate-slide-up { animation: slide-up 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
                `}</style>

                {/* Main Hero Content */}
                <section className="min-h-[85vh] w-full max-w-4xl flex flex-col items-center justify-center p-6 text-center mx-auto">
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

                <section className="w-full py-32 px-6 bg-white/80 backdrop-blur-md border-t border-stone-100">
                    <div className="max-w-4xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-1 border-l-2 border-[#880808] h-32 hidden lg:block" />
                        <div className="lg:col-span-11 space-y-10">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#880808]">The Impact</h2>
                            <h3 className="font-serif text-4xl md:text-6xl text-stone-900 font-bold leading-tight tracking-tighter">Breaking the Silence Barrier.</h3>
                            <div className="prose prose-stone text-lg text-stone-500 leading-relaxed font-light space-y-6">
                                <p>Since 2021, I have been actively involved in conducting workshops and awareness sessions across various communities to educate young girls and women about menstrual hygiene.</p>
                                <p>My work focuses on replacing myths with medical facts and shame with a sense of natural pride. Through <span className="text-stone-900 font-medium italic">'Happy Periods'</span>, I've reached hundreds of individuals.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-32 bg-white/80 backdrop-blur-md text-center border-t border-stone-50">
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
