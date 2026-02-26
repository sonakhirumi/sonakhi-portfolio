import React, { useEffect } from 'react';
import { Heart, Play, ExternalLink, Image as ImageIcon, BookOpen, Sparkles, MessageCircle, HeartPulse, Droplets } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white" style={{ isolation: 'isolate' }}>
            {/* Custom Styles for this page */}
            <style>{`
                .text-blood-red { color: #dc2626; }
                .bg-pure-white { background-color: #ffffff; }
                .border-red-glow { border-color: #fca5a5; }
                
                @keyframes float-carpet {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(1deg); }
                }
                .animate-float-carpet {
                    animation: float-carpet 4s ease-in-out infinite;
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(5px, -10px); }
                }
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .pad-carpet {
                    width: 300px;
                    height: 100px;
                    background: white;
                    border-radius: 50px;
                    position: relative;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05), inset 0 0 15px rgba(220, 38, 38, 0.05);
                    border: 2px solid #fee2e2;
                }
                .pad-wing-left {
                    position: absolute;
                    width: 60px;
                    height: 40px;
                    background: white;
                    left: -20px;
                    top: 30px;
                    border-radius: 20px 0 0 20px;
                    border-left: 2px solid #fee2e2;
                    border-top: 2px solid #fee2e2;
                    border-bottom: 2px solid #fee2e2;
                }
                .pad-wing-right {
                    position: absolute;
                    width: 60px;
                    height: 40px;
                    background: white;
                    right: -20px;
                    top: 30px;
                    border-radius: 0 20px 20px 0;
                    border-right: 2px solid #fee2e2;
                    border-top: 2px solid #fee2e2;
                    border-bottom: 2px solid #fee2e2;
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white border-b border-red-50 py-20">
                {/* Background Blood Drops/Abstract Red elements (NO PINK) */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-[10%] w-64 h-64 bg-red-100/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-red-50/50 rounded-full blur-[100px]" />
                </div>

                {/* Floating Products Decoration */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    {/* Tiny Tampon 1 */}
                    <div className="absolute top-[15%] left-[20%] animate-float-slow opacity-40">
                        <div className="w-4 h-12 bg-white border border-red-100 rounded-full shadow-sm" />
                        <div className="w-[1px] h-8 bg-red-200 mx-auto" />
                    </div>
                    {/* Tiny Cup 1 */}
                    <div className="absolute top-[25%] right-[25%] animate-float-slow opacity-40" style={{ animationDelay: '1s' }}>
                        <div className="w-8 h-10 border-2 border-red-100 rounded-t-lg rounded-b-[40%] bg-white/50" />
                        <div className="w-1 h-3 bg-red-100 mx-auto" />
                    </div>
                    {/* Tiny Pad 1 */}
                    <div className="absolute bottom-[20%] left-[15%] animate-float-slow opacity-30" style={{ animationDelay: '2s' }}>
                        <div className="w-12 h-6 bg-white border border-red-50 rounded-full shadow-sm" />
                    </div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full shadow-sm border border-red-100 mb-8 animate-in fade-in zoom-in duration-700">
                        <Sparkles className="w-4 h-4 text-red-600" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-700">Awareness Initiative</span>
                    </div>

                    <div className="relative mb-24">
                        <h1 className="font-serif text-6xl md:text-9xl font-bold text-stone-900 leading-[0.8] tracking-tighter mb-4 flex items-center justify-center gap-4">
                            Happy <br className="md:hidden" />
                            <span className="text-red-600 italic relative">
                                Periods 🩸
                            </span>
                        </h1>

                        {/* THE FLYING CARPET PAD */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 animate-float-carpet">
                            <div className="pad-carpet flex items-center justify-center">
                                <span className="text-red-50/50 font-serif italic text-sm tracking-widest uppercase">Safe & Soft</span>
                                <div className="pad-wing-left"></div>
                                <div className="pad-wing-right"></div>
                                {/* Stitching detail */}
                                <div className="absolute inset-4 border border-dashed border-red-50/30 rounded-[40px] pointer-events-none"></div>
                            </div>
                            {/* Carpet Shadow */}
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-4 bg-stone-900/5 blur-xl rounded-full scale-x-150"></div>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed mt-16">
                        A red & white journey towards dignity.
                        Documenting years of advocacy for menstrual health with <span className="text-red-600 font-medium">unfiltered truth</span>.
                    </p>
                </div>
            </section>

            {/* Mission Section (Red/White Only) */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-red-600"></div>
                            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-stone-400">The Mission</h2>
                        </div>
                        <h3 className="font-serif text-4xl md:text-5xl text-stone-900 font-bold leading-tight">
                            Redefining the <br />
                            <span className="text-red-600">Blood</span> Conversation.
                        </h3>
                        <div className="prose prose-stone text-lg text-stone-600 leading-relaxed font-light space-y-6">
                            <p>
                                Since 2021, I have been actively involved in conducting workshops and awareness sessions across various communities to educate young girls and women about menstrual hygiene.
                            </p>
                            <p>
                                My work focuses on replacing myths with medical facts and shame with a sense of natural pride. Through 'Happy Periods', I've reached hundreds of individuals, providing them with safe spaces to ask questions and seek help.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-100">
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <h4 className="font-black text-3xl text-red-600">1000+</h4>
                                <p className="text-[10px] uppercase tracking-widest text-red-800 font-bold mt-1">Lives Impacted</p>
                            </div>
                            <div className="border border-stone-100 p-6 rounded-2xl">
                                <h4 className="font-black text-3xl text-stone-900">50+</h4>
                                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mt-1">Sessions Held</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[3/4] rounded-[2.5rem] bg-stone-50 overflow-hidden shadow-2xl transition-transform duration-700 border-[12px] border-white ring-1 ring-red-50">
                            <div className="absolute inset-0 flex items-center justify-center bg-red-50/20">
                                <ImageIcon className="w-16 h-16 text-red-200" />
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-red-100 max-w-[240px] shadow-red-900/5">
                            <Droplets className="w-8 h-8 text-red-600 mb-4" />
                            <p className="font-serif italic text-stone-800 text-lg">"Making health a priority, not a secret."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Section */}
            <section className="py-24 bg-red-50/30 border-t border-red-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold text-stone-900">Work in Action</h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
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
                            <div key={idx} className="group relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-red-600/20">
                                <div className="absolute inset-0 bg-stone-50 flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-1000">
                                    <ImageIcon className="w-10 h-10 text-stone-200" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100">
                                    <p className="text-white/80 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">Impact Session</p>
                                    <h4 className="text-white font-serif text-2xl font-bold">{title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources (Red Background) */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-red-600 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-50" />

                        <div className="relative z-10 space-y-12">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md border border-white/20">
                                    <BookOpen className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-serif text-3xl md:text-5xl font-bold">The Archive</h3>
                            </div>

                            <div className="grid gap-4">
                                {[
                                    { title: "Menstrual Equity Report 2023", size: "1.2 MB" },
                                    { title: "Safe Hygiene Practices Guide", size: "850 KB" }
                                ].map((doc, i) => (
                                    <a key={i} href="#" className="flex items-center justify-between p-6 rounded-2xl bg-white/10 hover:bg-white transition-all group border border-white/10 hover:border-transparent">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-red-50 flex items-center justify-center text-white group-hover:text-red-600 font-bold text-xs transition-colors">PDF</div>
                                            <div>
                                                <h4 className="font-bold text-lg group-hover:text-red-900 transition-colors">{doc.title}</h4>
                                                <p className="text-xs text-white/50 group-hover:text-red-900/40 transition-colors uppercase tracking-widest">{doc.size}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:text-red-600 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA (Pure Red & White) */}
            <section className="py-32 bg-white text-center border-t border-red-50">
                <div className="max-w-3xl mx-auto px-6 space-y-10">
                    <div className="inline-flex p-4 bg-red-50 rounded-2xl border border-red-100">
                        <MessageCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight">
                        Spread the <span className="text-red-600">Awareness.</span>
                    </h2>
                    <p className="text-lg text-stone-500 font-light max-w-xl mx-auto">
                        I travel to schools and rural hubs to conduct sessions.
                        Let's collaborate to end the stigma using <span className="text-stone-900 font-medium">facts and empathy</span>.
                    </p>
                    <div className="pt-6">
                        <a href="/contact" className="px-16 py-6 bg-red-600 text-white font-bold rounded-full hover:bg-stone-900 transition-all shadow-xl shadow-red-200 hover:shadow-stone-200 hover:-translate-y-1 block sm:inline-block uppercase tracking-widest text-xs">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HappyPeriodsPage;
