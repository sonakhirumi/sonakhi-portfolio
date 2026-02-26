import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, MessageCircle } from 'lucide-react';

// Trigger Rebuild - Happy Periods Redesign
const HappyPeriodsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 11 FAITHFUL RECREATIONS FROM THE NEW REFERENCE IMAGE
    const IconCup = () => ( // Row 1, Col 1: Rounded funnel cup
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M6 5c1 0 11 0 12 0c0 1-1 4-3 6c-1 1-2 2-3 2s-2-1-3-2c-2-2-3-5-3-6z" />
            <path d="M12 13v2m-1 0h2" />
        </svg>
    );

    const IconCalendar = () => ( // Row 1, Col 2: Spiral calendar with droplet
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="6" width="12" height="12" rx="1.5" />
            <path d="M8 4l0 4M11 4l0 4M14 4l0 4M17 4l0 4" />
            <path d="M6 10h12" />
            <path d="M14 14c0 1.5-1 2.5-2 2.5s-2-1-2-2.5s2-4 2-4s2 2.5 2 4z" />
        </svg>
    );

    const IconUterus = () => ( // Row 1, Col 3: Accurate anatomy
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 10c-2-2.5-6-2.5-8 0c0 1 1 2 2 1.5c1-1 2.5-1 3 0c1 2 1 4 3 4s2-2 3-4c0.5-1 2-1 3 0c1 0.5 2-0.5 2-1.5c-2-2.5-6-2.5-8 0z" />
            <path d="M12 10v9M10 19h4" />
        </svg>
    );

    const IconPadDrop = () => ( // Row 1, Col 4: Dotted pad with droplet
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 5h6c3 0 3 4 3 7s0 7-3 7H9c-3 0-3-4-3-7s0-7 3-7z" strokeDasharray="1 2" />
            <path d="M14 13c0 1.5-1 2.5-2 2.5s-2-1-2-2.5s2-4 2-4s2 2.5 2 4z" />
        </svg>
    );

    const IconBlister = () => ( // Row 1, Col 5: Blister pack
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(30)">
            <rect x="6" y="5" width="12" height="14" rx="2" />
            <circle cx="9" cy="8" r="1" /><circle cx="15" cy="8" r="1" />
            <circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" />
            <circle cx="9" cy="16" r="1" /><circle cx="15" cy="16" r="1" />
        </svg>
    );

    const IconTissue = () => ( // Row 1, Col 6: Tissue box
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="10" width="12" height="8" rx="1" />
            <path d="M8 10c0-2 1-4 4-4s4 2 4 4" />
            <path d="M9 6c0-2 1-3 3-3s3 1 3 3" opacity="0.5" />
        </svg>
    );

    const IconPillCapsule = () => ( // Row 2, Col 1: Pill and Capsule
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="8" cy="12" r="4" />
            <path d="M6 12h4" />
            <rect x="13" y="8" width="4" height="10" rx="2" transform="rotate(-30 15 13)" />
            <path d="M14 11l3 1.5" />
        </svg>
    );

    const IconDoubleDrops = () => ( // Row 2, Col 2: Two droplets
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M10 12c0 1.5-1 2.5-2 2.5s-2-1-2-2.5s2-4 2-4s2 2.5 2 4z" />
            <path d="M18 14c0 1.5-1 2.5-2 2.5s-2-1-2-2.5s2-4 2-4s2 2.5 2 4z" />
        </svg>
    );

    const IconApp = () => ( // Row 2, Col 3: Phone app with droplet
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="7" y="4" width="10" height="16" rx="2" />
            <path d="M14 13c0 1.5-1 2.5-2 2.5s-2-1-2-2.5s2-4 2-4s2 2.5 2 4z" />
            <circle cx="12" cy="18" r="0.5" fill="currentColor" />
        </svg>
    );

    const IconLinerSide = () => ( // Row 2, Col 4: Simple liner
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(20)">
            <path d="M12 4c-3 0-4 2-4 5s1 4 1 4s-1 1-1 3c0 3 2 5 4 5s4-2 4-5c0-2-1-3-1-3s1-1 1-4c0-3-1-5-4-5z" />
        </svg>
    );

    const IconTamponNew = () => ( // Row 2, Col 5: Ridged tampon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-15)">
            <rect x="10" y="4" width="4" height="12" rx="2" />
            <path d="M11 4v12M13 4v12M12 4v12" opacity="0.6" />
            <path d="M12 16c0 2-1 4-3 5" />
        </svg>
    );

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // SPARSE SCATTERING - AS USER PREFERRED
    const scattered = [
        { l: '6%', t: '8%', r: '15deg', i: IconCup },
        { l: '22%', t: '18%', r: '-10deg', i: IconCalendar },
        { l: '45%', t: '12%', r: '35deg', i: IconUterus },
        { l: '70%', t: '15%', r: '-25deg', i: IconPadDrop },
        { l: '88%', t: '22%', r: '10deg', i: IconBlister },
        { l: '12%', t: '40%', r: '45deg', i: IconTissue },
        { l: '35%', t: '52%', r: '-15deg', i: IconPillCapsule },
        { l: '58%', t: '42%', r: '20deg', i: IconDoubleDrops },
        { l: '82%', t: '45%', r: '120deg', i: IconApp },
        { l: '10%', t: '65%', r: '-40deg', i: IconLinerSide },
        { l: '38%', t: '75%', r: '12deg', i: IconTamponNew },
        { l: '62%', t: '68%', r: '180deg', i: IconCup },
        { l: '85%', t: '72%', r: '-30deg', i: IconCalendar },
        { l: '20%', t: '90%', r: '25deg', i: IconUterus },
        { l: '52%', t: '88%', r: '-15deg', i: IconPadDrop },
        { l: '80%', t: '92%', r: '95deg', i: IconBlister },
    ];

    return (
        <div className="min-h-screen bg-white relative" style={{ isolation: 'isolate' }}>
            {/* BACKGROUND SCATTERED ICONS */}
            <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-20">
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

                {/* Main Content */}
                <section className="min-h-[85vh] flex flex-col items-center justify-center p-6 text-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100 bg-white/95 backdrop-blur-sm shadow-sm mb-12 animate-slide-up">
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
                        </div>
                    </div>
                </section>

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
