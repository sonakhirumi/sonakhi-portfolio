import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, MessageCircle } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 12 ICONS - TRACED FAITHFULLY FROM REFERENCE IMAGE
    const IconPadWavy = () => ( // Row 1, Col 1
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M8 4h8c2 0 2 4 2 8s0 8-2 8H8c-2 0-2-4-2-8s0-8 2-8z" />
            <path d="M4 10c-1 0-2 1-2 2s1 2 2 2" />
            <path d="M20 10c1 0 2 1 2 2s-1 2-2 2" />
            <path d="M10 7v10m4-10v10" strokeDasharray="1 2" strokeOpacity="0.5" />
        </svg>
    );

    const IconTamponSpiral = () => ( // Row 2, Col 1
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="10" y="3" width="4" height="12" rx="1.5" />
            <path d="M10 6l4 3m-4 2l4 3m-4 1l2 1.5" />
            <path d="M13 15c1 2 0 4-2 6" />
        </svg>
    );

    const IconCup = () => ( // Row 2, Col 2
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M6 4h12v1.5c0 0.5-0.5 1-1 1H7c-0.5 0-1-0.5-1-1V4z" />
            <path d="M7 6.5l1 5c0.5 2 2 3.5 4 3.5s3.5-1.5 4-3.5l1-5" />
            <path d="M12 15v3.5" />
            <path d="M10 17.5h4" />
        </svg>
    );

    const IconAnatomy = () => ( // Row 2, Col 4
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 11c-2-2-5-2-7 0m14 0c-2-2-5-2-7 0" />
            <path d="M12 11v9" />
            <circle cx="5" cy="11.5" r="1.5" />
            <circle cx="19" cy="11.5" r="1.5" />
        </svg>
    );

    const IconBodyCramps = () => ( // Row 3, Col 3
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 6c2 4 2 10 0 14m10-14c-2 4-2 10 0 14" />
            <path d="M9 15h6l-1 4H10l-1-4z" />
            <path d="M4 11l1-1 1 1m13 0l1-1 1 1" />
            <circle cx="12" cy="12" r="0.5" fill="currentColor" />
        </svg>
    );

    const IconCalendar = () => ( // Row 3, Col 4
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="6" width="12" height="12" rx="1" />
            <path d="M6 10h12M9 4v4m6-4v4" />
            <circle cx="9" cy="14" r="0.8" fill="currentColor" />
            <circle cx="12" cy="14" r="0.8" fill="currentColor" />
            <circle cx="15" cy="14" r="0.8" fill="currentColor" />
        </svg>
    );

    const IconLiner = () => ( // Row 1, Col 3
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 4c-3 0-4.5 2-4.5 5s1.5 3.5 1.5 3.5s-1.5 1-1.5 3s2 4.5 4.5 4.5s4.5-2.5 4.5-4.5s-1.5-1-1.5-3s1.5-1 1.5-3.5s-1.5-5-4.5-5z" />
        </svg>
    );

    const IconPills = () => ( // Row 3, Col 2
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="5" width="12" height="14" rx="2" transform="rotate(15 12 12)" />
            <circle cx="9" cy="9" r="1.2" /><circle cx="15" cy="10" r="1.2" />
            <circle cx="10" cy="15" r="1.2" /><circle cx="16" cy="16" r="1.2" />
        </svg>
    );

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // SPARSE SCATTERING - AS USER PREFERRED
    const iconPool = [IconPadWavy, IconTamponSpiral, IconCup, IconAnatomy, IconBodyCramps, IconCalendar, IconLiner, IconPills];
    const scattered = [
        { l: '5%', t: '10%', r: '15deg', i: IconPadWavy },
        { l: '25%', t: '15%', r: '-20deg', i: IconTamponSpiral },
        { l: '50%', t: '8%', r: '45deg', i: IconCup },
        { l: '80%', t: '12%', r: '-10deg', i: IconAnatomy },
        { l: '15%', t: '35%', r: '120deg', i: IconBodyCramps },
        { l: '40%', t: '45%', r: '30deg', i: IconCalendar },
        { l: '65%', t: '38%', r: '-45deg', i: IconLiner },
        { l: '90%', t: '42%', r: '15deg', i: IconPills },
        { l: '10%', t: '65%', r: '-30deg', i: IconCup },
        { l: '35%', t: '75%', r: '180deg', i: IconPadWavy },
        { l: '60%', t: '68%', r: '12deg', i: IconAnatomy },
        { l: '85%', t: '72%', r: '-15deg', i: IconTamponSpiral },
        { l: '20%', t: '90%', r: '95deg', i: IconCalendar },
        { l: '50%', t: '88%', r: '-40deg', i: IconBodyCramps },
        { l: '80%', t: '92%', r: '25deg', i: IconPills }
    ];

    return (
        <div className="min-h-screen bg-white relative" style={{ isolation: 'isolate' }}>
            {/* BACKGROUND SCATTERED ICONS */}
            <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-20">
                {scattered.map((s, idx) => (
                    <div
                        key={idx}
                        className="absolute text-stone-500"
                        style={{ left: s.l, top: s.t, transform: `rotate(${s.r})`, width: '50px', height: '50px' }}
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
