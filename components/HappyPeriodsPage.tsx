import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, MessageCircle } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 1:1 METICULOUS RECREATIONS FROM THE REFERENCE IMAGE
    const IconPadWavy = () => ( // Top Left
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 6c0-1 1-2 5-2s5 1 5 2v12c0 1-1 2-5 2s-5-1-5-2V6z" />
            <path d="M5 10c-1 0-2 1-2 2s1 2 2 2m14-4c1 0 2 1 2 2s-1 2-2 2" />
            <path d="M10 8c0 2 0 6 0 8m4-8c0 2 0 6 0 8" strokeDasharray="1 2" />
        </svg>
    );

    const IconTamponSpiral = () => ( // Middle Left
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M10 5h4v10c0 1-1 2-2 2s-2-1-2-2V5z" />
            <path d="M10 8l4 2m-4 2l4 2m-4 1.5l2.5 1" />
            <path d="M12 17c0 1-1 3-3 4" />
        </svg>
    );

    const IconCup = () => ( // Middle Row 2 - THE CUP
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 5h10v1c0 0.5-0.5 1-1 1H8c-0.5 0-1-0.5-1-1V5z" fill="currentColor" fillOpacity="0.05" />
            <path d="M7 6l1 6c0.5 2 2 3 4 3s3.5-1 4-3l1-6" />
            <path d="M8 9h8m-7 3h6" opacity="0.5" />
            <path d="M12 15v3m-2 2h4" />
        </svg>
    );

    const IconAnatomy = () => ( // Middle Right - UTERUS
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 12c-2-2-4-2-6-1m12 1c-2-2-4-2-6-1" />
            <path d="M12 12v7m-2 0h4" />
            <path d="M5 11c-1-1-2 0-2 1s1 2 2 1" />
            <path d="M19 11c1-1 2 0 2 1s-1 2-2 1" />
        </svg>
    );

    const IconBodyCramps = () => ( // Bottom Row 3 - BODY
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M8 5c1 3 1 10 0 14m8-14c-1 3-1 10 0 14" />
            <path d="M9 14h6l-1 3h-4l-1-3z" />
            <path d="M4 8l1-1 1 1m13 0l1-1 1 1" />
            <circle cx="12" cy="11" r="0.5" fill="currentColor" />
        </svg>
    );

    const IconCalendar = () => ( // Bottom Right
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="6" width="12" height="12" rx="1.5" />
            <path d="M6 10h12M9 4v4m6-4v4" />
            <circle cx="9" cy="14" r="0.5" fill="currentColor" />
            <circle cx="12" cy="14" r="0.5" fill="currentColor" />
            <circle cx="15" cy="14" r="0.5" fill="currentColor" />
        </svg>
    );

    const IconMeds = () => ( // Bottom Row 2
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="6" y="6" width="12" height="12" rx="2" transform="rotate(10 12 12)" />
            <circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" />
            <circle cx="10" cy="14" r="1" /><circle cx="14" cy="14" r="1" />
        </svg>
    );

    const IconLiner = () => ( // Top Row 3
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 5c-2.5 0-3.5 2-3.5 4.5s1 2.5 1 2.5s-1 1-1 3s1.5 4 3.5 4s3.5-2 3.5-4s-1-1-1-3s1 0 1-2.5s-1-4.5-3.5-4.5z" />
            <path d="M12 8v8" strokeDasharray="1 2" opacity="0.5" />
        </svg>
    );

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // VASTLY INCREASED DENSITY AND VISIBILITY
    const icons = [IconPadWavy, IconTamponSpiral, IconCup, IconAnatomy, IconBodyCramps, IconCalendar, IconMeds, IconLiner];
    const scattered = Array.from({ length: 40 }).map((_, i) => ({
        l: `${Math.random() * 90 + 5}%`,
        t: `${Math.random() * 90 + 5}%`,
        r: `${Math.random() * 360}deg`,
        i: icons[i % icons.length],
        s: 50 + Math.random() * 30
    }));

    return (
        <div className="min-h-screen bg-white relative" style={{ isolation: 'isolate' }}>
            {/* HIGH CONTRAST BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-25">
                {scattered.map((s, idx) => (
                    <div
                        key={idx}
                        className="absolute text-stone-600"
                        style={{ left: s.l, top: s.t, transform: `rotate(${s.r})`, width: `${s.s}px`, height: `${s.s}px` }}
                    >
                        <s.i />
                    </div>
                ))}
            </div>

            <div className="relative z-10">
                <style>{`
                    .text-stroke-red { -webkit-text-stroke: 1.5px #880808; color: white; }
                `}</style>

                {/* Main Content */}
                <section className="min-h-[85vh] flex flex-col items-center justify-center p-6 text-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100 bg-white/95 backdrop-blur-sm shadow-sm mb-12 animate-slide-up">
                        <BloodDropSolid className="w-3.5 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-800">Reboot of Thoughts on Menstruation</span>
                    </div>

                    <h1 className="font-serif text-[clamp(2.5rem,11vw,8rem)] font-bold tracking-tighter leading-none flex items-center gap-2 md:gap-6 justify-center">
                        <span className="text-stroke-red">Happy</span>{' '}
                        <span className="text-[#880808] italic">Periods</span>
                        <div className="w-[0.8em] h-[1em]"><BloodDropSolid className="w-full h-full" /></div>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed mt-16">
                        Let's make our world <span className="text-[#880808] font-bold tracking-tight">PERIOD FRIENDLY!</span>
                    </p>
                </section>

                <section className="py-32 px-6 bg-white/60 backdrop-blur-sm border-t border-stone-100">
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

                <section className="py-32 bg-white/60 backdrop-blur-sm text-center border-t border-stone-50">
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
