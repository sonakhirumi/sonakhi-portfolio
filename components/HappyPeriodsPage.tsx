import React, { useEffect } from 'react';
import { Heart, Play, ExternalLink, Image as ImageIcon, BookOpen, Sparkles, MessageCircle, HeartPulse, Droplets } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Product Icons as clean SVGs
    const CupIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5v2c0 3.87 3.13 7 7 7s7-3.13 7-7V3zm-7 11c-1.66 0-3 1.34-3 3v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-1.66-1.34-3-3-3z" /></svg>
    );
    const TamponIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10v12H7zM12 14v8M11 22h2" /></svg>
    );
    const PantyIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 4v4c4 0 7 3 10 3s6-3 10-3V4H2zm10 16c-3.31 0-6-2.69-6-6h12c0 3.31-2.69 6-6 6z" /></svg>
    );
    const DiscIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="10" ry="6" /><ellipse cx="12" cy="12" rx="7" ry="3" fill="white" fillOpacity="0.3" /></svg>
    );
    const PadIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="2" width="12" height="20" rx="6" /><path d="M2 10h4v4H2zM18 10h4v4h-4z" /></svg>
    );
    const HeatBagIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h12v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6zm4-4h4v4h-4V2z" /></svg>
    );
    const BloodDrop = () => (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" /></svg>
    );

    return (
        <div className="min-h-screen bg-white" style={{ isolation: 'isolate' }}>
            <style>{`
                .text-blood-red { color: #880808; }
                .text-stroke-red {
                    -webkit-text-stroke: 1.5px #880808;
                    color: white;
                }
                @keyframes fall {
                    0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
                    15% { opacity: 0.8; }
                    85% { opacity: 0.8; }
                    100% { transform: translateY(100vh) rotate(45deg); opacity: 0; }
                }
                .animate-fall {
                    animation: fall linear infinite;
                }
            `}</style>

            {/* HIGH VISIBILITY RAIN OF PRODUCTS */}
            <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0">
                {Array.from({ length: 30 }).map((_, i) => {
                    const left = Math.random() * 100;
                    const duration = 8 + Math.random() * 12;
                    const delay = Math.random() * 15;
                    const size = 20 + Math.random() * 30;
                    const rotation = Math.random() * 360;

                    const products = [
                        <CupIcon key="cup" />,
                        <TamponIcon key="tampon" />,
                        <PantyIcon key="panty" />,
                        <DiscIcon key="disc" />,
                        <PadIcon key="pad" />,
                        <HeatBagIcon key="heat" />,
                        <BloodDrop key="blood" />
                    ];
                    const product = products[i % products.length];

                    return (
                        <div
                            key={i}
                            className="absolute animate-fall flex items-center justify-center"
                            style={{
                                left: `${left}%`,
                                top: -100,
                                transform: `rotate(${rotation}deg)`,
                                width: `${size}px`,
                                height: `${size}px`,
                                color: i % 3 === 0 ? '#880808' : '#dc2626', // Blood red variations
                                opacity: 0.15, // Increased visibility
                                animationDuration: `${duration}s`,
                                animationDelay: `${delay}s`,
                            }}
                        >
                            {product}
                        </div>
                    );
                })}
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-white/50 backdrop-blur-[2px] border-b border-stone-100 py-12">
                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-100 bg-white mb-6 shadow-sm">
                        <BloodDrop />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-800">Reboot of Thoughts on Menstruation</span>
                    </div>

                    <div className="relative">
                        <h1 className="font-serif text-[clamp(2.5rem,9vw,6.5rem)] font-bold tracking-tighter whitespace-nowrap leading-none flex items-center gap-2 md:gap-4 justify-center">
                            <span className="text-stroke-red">Happy</span>{' '}
                            <span className="text-[#880808] italic">Periods</span>
                            <div className="w-[0.75em] h-[0.9em] text-[#880808]">
                                <BloodDrop />
                            </div>
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed mt-8">
                        Let's make our world <span className="text-[#880808] font-bold tracking-tight">PERIOD FRIENDLY!</span>
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-6 bg-white relative z-10">
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
                            <div>
                                <h4 className="font-bold text-3xl text-stone-900">1000+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-[#880808]">Individuals reached</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-3xl text-stone-900">50+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">Knowledge Hubs</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="aspect-square bg-stone-50 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-stone-100 transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute inset-0 flex items-center justify-center bg-red-50/20">
                                <ImageIcon className="w-10 h-10 text-stone-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-[#fafafa] relative z-10">
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
                            <div key={idx} className="group cursor-pointer bg-white p-2 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                <div className="relative aspect-square bg-stone-50 rounded-xl overflow-hidden mb-4 group-hover:bg-red-50 transition-colors">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ImageIcon className="w-7 h-7 text-stone-200 group-hover:text-red-200 transition-colors" />
                                    </div>
                                </div>
                                <h4 className="font-serif text-xl font-bold text-stone-900 px-2">{title}</h4>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mt-1 px-2 pb-2">2021 — PRESENT</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-20 bg-white relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-[#880808] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />

                        <div className="relative z-10 space-y-8">
                            <h3 className="font-serif text-3xl font-bold tracking-tight">The Archive</h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Menstrual Hygiene Report", type: "PDF" },
                                    { title: "Grassroots Guidelines", type: "DOC" }
                                ].map((link, i) => (
                                    <a key={i} href="#" className="flex items-center justify-between p-6 bg-white/10 rounded-xl border border-white/10 hover:bg-white hover:text-[#880808] transition-all group">
                                        <div>
                                            <h4 className="text-base font-bold transition-colors">{link.title}</h4>
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

            {/* Final CTA */}
            <section className="py-24 bg-[#880808] text-white text-center relative z-10">
                <div className="max-w-3xl mx-auto px-6 space-y-8">
                    <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        Empower. Educate. <br />
                        <span className="italic opacity-80">Collaborate.</span>
                    </h2>
                    <p className="text-lg opacity-80 font-light max-w-md mx-auto leading-relaxed">
                        Join the journey to make menstruation a period of pride.
                    </p>
                    <div className="pt-6">
                        <a href="/contact" className="px-12 py-4 bg-white text-[#880808] font-bold rounded-full hover:bg-stone-100 transition-all shadow-xl uppercase tracking-widest text-xs">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HappyPeriodsPage;
