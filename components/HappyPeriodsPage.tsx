import React, { useEffect } from 'react';
import { Heart, Play, ExternalLink, Image as ImageIcon, BookOpen, Sparkles, MessageCircle, HeartPulse, Droplets } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white" style={{ isolation: 'isolate' }}>
            {/* Custom Styles for high-end aesthetics */}
            <style>{`
                @keyframes float-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float-subtle {
                    animation: float-subtle 4s ease-in-out infinite;
                }
                
                .text-stroke-red {
                    -webkit-text-stroke: 1px #dc2626;
                    color: transparent;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(220, 38, 38, 0.1);
                }
            `}</style>

            {/* Hero Section: Minimalist & High-Fashion Aesthetic */}
            <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-white border-b border-stone-100">
                {/* Refined Background: Soft red gradients, no weird shapes */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-red-50/30 -skew-x-12 translate-x-20" />
                    <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-red-100/20 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center select-none">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100 bg-white shadow-sm mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
                        <Droplets className="w-4 h-4 text-red-600" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-800">Menstrual Awareness</span>
                    </div>

                    <div className="relative mb-20">
                        <h1 className="font-serif text-[clamp(3.5rem,15vw,9rem)] font-bold text-stone-900 leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            Happy <br />
                            <span className="text-red-600 italic font-medium relative block mt-2">
                                Periods 🩸
                                <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-red-600/20 scale-x-75" />
                            </span>
                        </h1>

                        {/* FLYING CARPET PAD: High-end minimalist execution */}
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[400px] animate-float-subtle pointer-events-none">
                            <div className="relative py-4 px-12 bg-white rounded-full border border-red-100 shadow-[0_20px_50px_-20px_rgba(220,38,38,0.15)] flex items-center justify-between group overflow-hidden">
                                <div className="absolute inset-0 bg-red-50/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {/* Wings: Integrated as subtle side borders */}
                                <div className="w-2 h-12 bg-red-100/50 rounded-full absolute -left-1" />
                                <div className="w-2 h-12 bg-red-100/50 rounded-full absolute -right-1" />

                                <Sparkles className="w-4 h-4 text-red-300" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Pure Awareness</span>
                                <HeartPulse className="w-4 h-4 text-red-300" />
                            </div>
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed mt-16 animate-in fade-in duration-1000 delay-500">
                        A dedicated platform for <span className="text-stone-900 font-medium tracking-tight">menstrual dignity</span> and education.
                        Normalizing the conversation with facts, empathy, and unfiltered storytelling.
                    </p>
                </div>

                {/* Subtle Floating products: Minimalist icons instead of weird shapes */}
                <div className="absolute bottom-10 left-10 hidden xl:block opacity-20 animate-float-subtle">
                    <Droplets className="w-8 h-8 text-red-600" />
                </div>
                <div className="absolute top-40 right-10 hidden xl:block opacity-20 animate-float-subtle" style={{ animationDelay: '1.5s' }}>
                    <Sparkles className="w-8 h-8 text-red-600" />
                </div>
            </section>

            {/* Mission Section: Clean, Editorial Layout */}
            <section className="py-32 px-6 bg-white border-b border-stone-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-1 border-l border-red-600 h-24 hidden lg:block" />
                    <div className="lg:col-span-6 space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600">The Initiative</h2>
                        <h3 className="font-serif text-5xl md:text-6xl text-stone-900 font-bold leading-[0.9] tracking-tighter">
                            Breaking the <br />
                            <span className="text-red-600">Silence Barrier.</span>
                        </h3>
                        <div className="prose prose-stone text-lg text-stone-500 leading-relaxed font-light space-y-6 max-w-xl">
                            <p>
                                Since 2021, I have been actively involved in conducting workshops and awareness sessions across various communities to educate young girls and women about menstrual hygiene.
                            </p>
                            <p>
                                My work focuses on replacing myths with medical facts and shame with a sense of natural pride. Through <span className="text-stone-900 font-medium italic">'Happy Periods'</span>, I've reached hundreds of individuals, providing them with safe spaces to ask questions and seek help.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 pt-10 border-t border-stone-100">
                            <div className="space-y-2">
                                <h4 className="font-bold text-4xl text-stone-900">1000+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-red-600">Lives Empowered</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-4xl text-stone-900">50+</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">Knowledge Hubs</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[4/5] bg-stone-50 rounded-2xl overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-red-50/10 group-hover:bg-red-50/0 transition-colors duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ImageIcon className="w-12 h-12 text-stone-200" />
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 glass-card p-10 rounded-2xl max-w-[280px] shadow-2xl hidden md:block">
                            <Droplets className="w-6 h-6 text-red-600 mb-6" />
                            <p className="font-serif italic text-stone-800 text-xl leading-snug">"Health is a human right, not a whisper."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Gallery: Polished Interaction */}
            <section className="py-32 bg-[#fafafa]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400">Impact Journey</h2>
                            <h3 className="font-serif text-5xl font-bold text-stone-900">Work Portfolio</h3>
                        </div>
                        <div className="text-red-600 text-[10px] font-black uppercase tracking-[0.3em] pb-2">Verified Activism</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            "Community Workshop",
                            "Rural Advocacy",
                            "School Training",
                            "Distribution Drive",
                            "Panel Discussion",
                            "Digital Campaign"
                        ].map((title, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-6 shadow-sm group-hover:shadow-[0_40px_80px_-20px_rgba(220,38,38,0.1)] transition-all duration-700">
                                    <div className="absolute inset-0 bg-stone-50 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-1000">
                                        <ImageIcon className="w-8 h-8 text-stone-200" />
                                    </div>
                                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="font-serif text-2xl font-bold text-stone-900 mb-2">{title}</h4>
                                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">2021 — Present</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources: Ultra-Premium Aesthetic */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-stone-900 rounded-3xl p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-[100px]" />

                        <div className="relative z-10 space-y-16">
                            <div className="flex items-center gap-6">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <BookOpen className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">The Archive</h3>
                            </div>

                            <div className="divide-y divide-white/5">
                                {[
                                    { title: "Menstrual Hygiene Research Paper", date: "June 2023" },
                                    { title: "Grassroots Advocacy Guidelines", date: "Jan 2024" }
                                ].map((link, i) => (
                                    <a key={i} href="#" className="flex items-center justify-between py-8 group">
                                        <div className="space-y-2">
                                            <h4 className="font-serif text-2xl font-bold group-hover:text-red-500 transition-colors">{link.title}</h4>
                                            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{link.date}</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Section: Clean & Powerful */}
            <section className="py-40 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6 space-y-12">
                    <div className="inline-flex items-center justify-center p-5 rounded-full bg-red-50 mb-4">
                        <MessageCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 leading-[0.9] tracking-tighter">
                        Join the <br />
                        <span className="text-red-600 italic">Movement.</span>
                    </h2>
                    <p className="text-xl text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
                        I am available for speaking engagements, workshops, and school sessions.
                        Let's collaborate on ending menstrual poverty.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="/contact" className="px-12 py-5 bg-red-600 text-white font-bold rounded-full hover:bg-stone-900 transition-all shadow-xl shadow-red-200 hover:shadow-stone-200 hover:-translate-y-1 uppercase tracking-widest text-[10px]">
                            Collaborate
                        </a>
                        <a href="mailto:sonakhirumi@gmail.com" className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 hover:text-stone-900 transition-colors underline underline-offset-8">
                            Email Me
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HappyPeriodsPage;
