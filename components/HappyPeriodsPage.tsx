import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, MessageCircle } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 1:1 RECREATIONS OF THE 11 ICONS FROM THE REFERENCE IMAGE
    const IconCup = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M7 6c0 0 0 0.5 0.5 1s9.5 0.5 10 0s0.5-1 0.5-1H7z" />
            <path d="M7 7c0.5 3 2 6 5 6s4.5-3 5-6" />
            <path d="M12 13v3m-2 0.5h4" />
        </svg>
    );

    const IconCalendar = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <rect x="6" y="7" width="12" height="11" rx="1" />
            <path d="M8 5v4M11 5v4M14 5v4M17 5v4M6 11h12" />
            <path d="M13 14.5c0 1-0.8 1.5-1.5 1.5s-1.5-0.5-1.5-1.5s1.5-3 1.5-3s1.5 2 1.5 3z" />
        </svg>
    );

    const IconUterus = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M12 11c-2-2-5-2-7 0c-1 1 0 2.5 1.5 2c1-0.5 2.5-0.5 3.5 1c1 1.5 1 3 2 3s1-1.5 2-3c1-1.5 2.5-1.5 3.5-1c1.5 0.5 2.5-1 1.5-2c-2-2-5-2-7 0z" />
            <path d="M12 11v8m-2 0h4" />
        </svg>
    );

    const IconPad = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M9 5h6c3 0 3 4 3 7s0 7-3 7H9c-3 0-3-4-3-7s0-7 3-7z" strokeDasharray="1 2" />
            <path d="M11.5 11c0 0.5-0.4 1-1 1s-1-0.5-1-1s1-2 1-2s1 1.5 1 2z" />
        </svg>
    );

    const IconBlister = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <rect x="6" y="5" width="12" height="14" rx="2" transform="rotate(15 12 12)" />
            <circle cx="10" cy="9" r="0.8" /><circle cx="14" cy="10" r="0.8" />
            <circle cx="10" cy="13" r="0.8" /><circle cx="14" cy="14" r="0.8" />
            <circle cx="10" cy="17" r="0.8" /><circle cx="14" cy="18" r="0.8" />
        </svg>
    );

    const IconTissue = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <rect x="6" y="11" width="12" height="8" rx="1" />
            <path d="M8 11c0-2.5 1.5-4 4-4s4 1.5 4 4" />
            <path d="M10 7c0-1.5 1-2.5 2-2.5s2 1 2 2.5" opacity="0.4" />
        </svg>
    );

    const IconPill = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <circle cx="8" cy="12" r="3.5" />
            <path d="M6 12h4" />
            <rect x="13" y="9" width="4" height="9" rx="2" transform="rotate(-35 15 13.5)" />
            <path d="M14 11.5l3 2" />
        </svg>
    );

    const IconDrops = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M10 13c0 1.2-1 2-1.8 2s-1.8-0.8-1.8-2s1.8-3.5 1.8-3.5s1.8 2.3 1.8 3.5z" />
            <path d="M18 15c0 1.2-1 2-1.8 2s-1.8-0.8-1.8-2s1.8-3.5 1.8-3.5s1.8 2.3 1.8 3.5z" />
        </svg>
    );

    const IconPhone = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <rect x="7" y="4" width="10" height="16" rx="2" />
            <path d="M13 11c0 1-0.8 1.5-1.5 1.5S10 12 10 11s1.5-3 1.5-3s1.5 2 1.5 3z" />
            <circle cx="12" cy="18" r="0.5" fill="currentColor" />
        </svg>
    );

    const IconLiner = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M12 5c-2.5 0-3.5 2-3.5 4.5s1 2.5 1 2.5s-1 1-1 3.5c0 2.5 1.5 4.5 3.5 4.5s3.5-2 3.5-4.5c0-2.5-1-3.5-1-3.5s1 0 1-2.5s-1-4.5-3.5-4.5z" />
        </svg>
    );

    const IconTampon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <rect x="10" y="5" width="4" height="11" rx="2" transform="rotate(-15 12 10.5)" />
            <path d="M11 6l2 0.5M10.5 9l2 0.5M10 12l2 1" opacity="0.6" />
            <path d="M12 15c-0.5 1.5-1.5 3-3 4" />
        </svg>
    );

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // PROFESSIONAL SCATTERED WALLPAPER PATTERN
    const icons = [IconCup, IconCalendar, IconUterus, IconPad, IconBlister, IconTissue, IconPill, IconDrops, IconPhone, IconLiner, IconTampon];
    const wallpaper = Array.from({ length: 20 }).map((_, i) => ({
        l: `${(i * 20) % 100}%`,
        t: `${(Math.floor(i / 5) * 25) + (Math.random() * 10)}%`,
        r: `${Math.random() * 30 - 15}deg`,
        Icon: icons[i % icons.length],
        size: 70
    }));

    return (
        <div className="min-h-screen bg-white relative" style={{ isolation: 'isolate' }}>
            {/* BACKGROUND: GREY CIRCULAR ICONS WALLPAPER */}
            <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-[0.22]">
                {wallpaper.map((s, idx) => (
                    <div
                        key={idx}
                        className="absolute flex items-center justify-center rounded-full border border-stone-100 bg-stone-50/30"
                        style={{ left: s.l, top: s.t, transform: `rotate(${s.r})`, width: s.size, height: s.size }}
                    >
                        <div className="text-stone-400 w-3/5 h-3/5">
                            <s.Icon />
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative z-10">
                <style>{`
                    .text-stroke-red { -webkit-text-stroke: 1.5px #880808; color: white; }
                    @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                    .animate-slide-up { animation: slide-up 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
                `}</style>

                {/* Main Hero Content */}
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

                <section className="py-32 px-6 bg-white/70 backdrop-blur-sm border-t border-stone-100">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
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

                <section className="py-32 bg-white/70 backdrop-blur-sm text-center border-t border-stone-50">
                    <div className="max-w-3xl mx-auto px-6 space-y-12">
                        <div className="inline-flex p-5 rounded-3xl bg-red-50 mb-4 items-center justify-center animate-bounce"><MessageCircle className="w-10 h-10 text-[#880808] inverse" /></div>
                        <h2 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter leading-none">Let's <span className="text-[#880808] italic">Collaborate.</span></h2>
                        <div className="pt-8"><a href="/contact" className="px-14 py-6 bg-[#880808] text-white font-bold rounded-full hover:bg-stone-900 transition-all shadow-xl uppercase tracking-widest text-[10px]">GET IN TOUCH</a></div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HappyPeriodsPage;
