import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, BookOpen, Sparkles, MessageCircle, HeartPulse, Droplets } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // CUSTOM SVG ICONS BASED ON THE REFERENCE IMAGE
    const PadIcon1 = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
            <path d="M4 10c-1.5 0-1.5 4 0 4M20 10c1.5 0 1.5 4 0 4" />
            <path strokeDasharray="1 2" d="M9 7v10M15 7v10" />
        </svg>
    );
    const PadIcon2 = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 3h6a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z" />
            <path d="M4 11h2M18 11h2" />
            <circle cx="12" cy="12" r="3" strokeDasharray="1 1" />
        </svg>
    );
    const LinerIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 4c-3.5 0-5 2-5 5v6c0 3 1.5 5 5 5s5-2 5-5V9c0-3-1.5-5-5-5z" />
            <path strokeDasharray="1 2" d="M10 8v8M14 8v8" />
        </svg>
    );
    const TamponIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="10" y="4" width="4" height="11" rx="2" transform="rotate(15 12 12)" />
            <path d="M11 7l3 1M10 10l3 1M9 13l3 1" />
            <path d="M13 15c0 2-1 4-2 6" />
        </svg>
    );
    const CupIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M6 4h12l-1 7c-1 3-2 5-5 5s-4-2-5-5L6 4z" />
            <path d="M6 7h12M7 10h10" />
            <path d="M12 16v3" />
            <rect x="10" y="19" width="4" height="1" rx="0.5" />
        </svg>
    );
    const UterusIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M4 9c2-1 3 1 5 1s3-2 3-2s1 2 3 2s3-2 5-1v2c-2-1-3 1-5 1s-3-2-3-2s-1 2-3 2s-3-2-5-1V9z" />
            <path d="M12 10v8" />
            <path d="M10 18h4" />
        </svg>
    );
    const PantyIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M3 7h18l-1 4c-1 4-3 6-8 6h-1c-5 0-7-2-8-6L3 7z" />
            <path d="M12 11c-1.5 2-3 2-4.5 2M12 11c1.5 2 3 2 4.5 2" strokeDasharray="1 1" />
        </svg>
    );
    const MedicationIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="5" y="5" width="14" height="14" rx="3" transform="rotate(10 12 12)" />
            <circle cx="9" cy="9" r="1.5" />
            <circle cx="15" cy="9" r="1.5" />
            <circle cx="9" cy="15" r="1.5" />
            <circle cx="15" cy="15" r="1.5" />
        </svg>
    );

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // Scattered positions to ensure no sequence
    const scatteredPositions = [
        { left: '2%', top: '5%', rotate: '15deg', icon: LinerIcon },
        { left: '12%', top: '18%', rotate: '-10deg', icon: TamponIcon },
        { left: '25%', top: '8%', rotate: '45deg', icon: PadIcon1 },
        { left: '38%', top: '22%', rotate: '-30deg', icon: CupIcon },
        { left: '55%', top: '12%', rotate: '120deg', icon: UterusIcon },
        { left: '68%', top: '5%', rotate: '10deg', icon: MedicationIcon },
        { left: '85%', top: '25%', rotate: '-15deg', icon: PantyIcon },
        { left: '92%', top: '8%', rotate: '33deg', icon: PadIcon2 },
        { left: '5%', top: '35%', rotate: '200deg', icon: UterusIcon },
        { left: '18%', top: '42%', rotate: '12deg', icon: MedicationIcon },
        { left: '32%', top: '38%', rotate: '-45deg', icon: PadIcon1 },
        { left: '48%', top: '48%', rotate: '80deg', icon: LinerIcon },
        { left: '62%', top: '35%', rotate: '-10deg', icon: TamponIcon },
        { left: '78%', top: '42%', rotate: '350deg', icon: CupIcon },
        { left: '88%', top: '55%', rotate: '25deg', icon: PadIcon2 },
        { left: '10%', top: '65%', rotate: '-12deg', icon: CupIcon },
        { left: '22%', top: '75%', rotate: '150deg', icon: PantyIcon },
        { left: '35%', top: '62%', rotate: '40deg', icon: LinerIcon },
        { left: '52%', top: '78%', rotate: '-20deg', icon: TamponIcon },
        { left: '65%', top: '68%', rotate: '95deg', icon: MedicationIcon },
        { left: '82%', top: '75%', rotate: '15deg', icon: UterusIcon },
        { left: '95%', top: '62%', rotate: '-45deg', icon: PadIcon1 },
        { left: '15%', top: '92%', rotate: '10deg', icon: PadIcon2 },
        { left: '42%', top: '95%', rotate: '-110deg', icon: PantyIcon },
        { left: '72%', top: '92%', rotate: '25deg', icon: LinerIcon },
        { left: '85%', top: '88%', rotate: '-15deg', icon: TamponIcon },
    ];

    return (
        <div className="min-h-screen bg-white relative overflow-hidden" style={{ isolation: 'isolate' }}>
            {/* BACKGROUND WALLPAPER: Scattered Grey Outlines based on Reference Image */}
            <div className="fixed inset-0 pointer-events-none select-none z-0 opacity-[0.12]">
                {scatteredPositions.map((pos, i) => (
                    <div
                        key={i}
                        className="absolute text-stone-500"
                        style={{
                            left: pos.left,
                            top: pos.top,
                            transform: `rotate(${pos.rotate})`,
                            width: '45px',
                            height: '45px'
                        }}
                    >
                        <pos.icon />
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

            {/* Hero Section */}
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

            {/* Portfolio Section */}
            <section className="py-24 bg-[#fafafa]/95 backdrop-blur-xs relative z-10">
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
