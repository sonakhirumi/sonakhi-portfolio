import React, { useEffect } from 'react';
import { Heart, Play, ExternalLink, Image as ImageIcon, BookOpen, Sparkles, MessageCircle, HeartPulse, Droplets } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white" style={{ isolation: 'isolate' }}>
            {/* Custom Styles */}
            <style>{`
                .text-blood-red { color: #880808; }
                .bg-blood-red { background-color: #880808; }
                .text-stroke-red {
                    -webkit-text-stroke: 2px #880808;
                    color: white;
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>

            {/* Hero Section: Refined Text Stroke & Blood Drop Emoji */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-white border-b border-stone-100 py-24">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-red-50/10 -skew-x-12" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
                    {/* Awareness Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-white mb-12 shadow-sm animate-fade-in-up">
                        <Droplets className="w-3.5 h-3.5 text-[#880808]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-800">Menstrual Advocacy</span>
                    </div>

                    {/* UPDATED TITLE: "Happy" with red stroke, and the real Blood Drop Emoji */}
                    <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h1 className="font-serif text-[clamp(2.5rem,10vw,7.5rem)] font-bold tracking-tighter whitespace-nowrap leading-none">
                            <span className="text-stroke-red">Happy</span>{' '}
                            <span className="text-[#880808] italic">Periods 🩸</span>
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Empowering lives through <span className="text-stone-900 font-medium tracking-tight">menstrual health</span> education.
                        Normalizing the conversation with precision, empathy, and truth.
                    </p>

                    {/* Minimalist Accent */}
                    <div className="mt-12 opacity-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <Sparkles className="w-6 h-6 text-[#880808]" />
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-1 border-l-2 border-[#880808] h-32 hidden lg:block" />
                    <div className="lg:col-span-6 space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#880808]">The Impact</h2>
                        <h3 className="font-serif text-4xl md:text-5xl text-stone-900 font-bold leading-tight tracking-tight">
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
                            <div className="space-y-2">
                                <h4 className="font-bold text-4xl text-stone-900">1000+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-[#880808]">Individuals reached</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-4xl text-stone-900">50+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">Knowledge Hubs</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-square bg-stone-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-stone-100">
                            <div className="absolute inset-0 flex items-center justify-center bg-red-50/30">
                                <ImageIcon className="w-12 h-12 text-stone-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-[#fafafa]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 font-sans mb-4">Portfolio</h2>
                        <h3 className="font-serif text-4xl font-bold text-stone-900 uppercase tracking-tighter">Work Sessions</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Community Workshop",
                            "Rural Advocacy",
                            "School Training",
                            "Distribution Drive",
                            "Panel Discussion",
                            "Digital Campaign"
                        ].map((title, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-square bg-white rounded-2xl overflow-hidden mb-6 shadow-sm border border-stone-100 group-hover:border-[#880808]/20 transition-all duration-500">
                                    <div className="absolute inset-0 bg-stone-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                        <ImageIcon className="w-8 h-8 text-stone-200" />
                                    </div>
                                </div>
                                <h4 className="font-serif text-2xl font-bold text-stone-900">{title}</h4>
                                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mt-1">2021 — PRESENT</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-[#880808] rounded-3xl p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-[100px]" />

                        <div className="relative z-10 space-y-12">
                            <h3 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">The Archive</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: "Menstrual Hygiene Report", type: "PDF" },
                                    { title: "Grassroots Guidelines", type: "DOC" }
                                ].map((link, i) => (
                                    <a key={i} href="#" className="flex items-center justify-between p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-[#880808] transition-all group">
                                        <div>
                                            <h4 className="text-lg font-bold group-hover:text-[#880808] transition-colors">{link.title}</h4>
                                            <p className="text-xs uppercase tracking-widest opacity-50 block mt-1">{link.type}</p>
                                        </div>
                                        <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-white text-center border-t border-stone-100">
                <div className="max-w-3xl mx-auto px-6 space-y-10">
                    <div className="inline-flex p-4 rounded-3xl bg-red-50 mb-4 items-center justify-center">
                        <MessageCircle className="w-10 h-10 text-[#880808]" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 tracking-tight leading-tight">
                        Collaborate on an <br />
                        <span className="text-[#880808] italic">Awareness Session.</span>
                    </h2>
                    <p className="text-lg text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
                        Join hands to empower and educate. I am available for sessions in schools, communities, and rural centers.
                    </p>
                    <div className="pt-6">
                        <a href="/contact" className="px-14 py-5 bg-[#880808] text-white font-bold rounded-full hover:bg-stone-900 transition-all shadow-xl shadow-red-900/10">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HappyPeriodsPage;
