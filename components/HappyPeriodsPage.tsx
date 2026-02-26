import React, { useEffect } from 'react';
import { Heart, Play, ExternalLink, Image as ImageIcon, BookOpen, Sparkles, MessageCircle, HeartPulse } from 'lucide-react';

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
                .bg-soft-pink { background-color: #FFF5F5; }
                .border-pink-glow { border-color: #FED7D7; }
                .shadow-pink-xl { shadow-color: rgba(254, 215, 215, 0.5); }
            `}</style>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#FFF5F5] border-b border-red-50">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full blur-[120px] opacity-30 animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-[120px] opacity-30" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-red-100 animate-in fade-in zoom-in duration-700">
                        <Sparkles className="w-4 h-4 text-red-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">Awareness Initiative</span>
                    </div>

                    <h1 className="font-serif text-6xl md:text-8xl font-bold text-stone-900 leading-tight tracking-tighter">
                        Happy <span className="text-red-600 italic relative">
                            Periods
                            <svg className="absolute -bottom-2 left-0 w-full h-4 text-red-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="6" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
                        A journey from silence to <span className="text-red-700 font-medium">strength</span>.
                        Documenting years of advocacy for menstrual health and hygiene.
                    </p>

                    <div className="flex justify-center">
                        <Heart className="w-12 h-12 text-red-500 fill-red-500 animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-red-600"></div>
                            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-stone-400">The Mission</h2>
                        </div>
                        <h3 className="font-serif text-4xl md:text-5xl text-stone-900 font-bold leading-tight">
                            Breaking the Taboos, <br />
                            One Discussion at a Time.
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
                            <div>
                                <h4 className="font-black text-2xl text-red-600">1000+</h4>
                                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Women Empowered</p>
                            </div>
                            <div>
                                <h4 className="font-black text-2xl text-red-600">50+</h4>
                                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Sessions Held</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[3/4] rounded-[2.5rem] bg-stone-100 overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 border-[12px] border-pink-50">
                            <div className="absolute inset-0 flex items-center justify-center bg-red-50/50">
                                <ImageIcon className="w-16 h-16 text-red-200" />
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-red-50 max-w-[240px] -rotate-3">
                            <HeartPulse className="w-8 h-8 text-red-500 mb-4" />
                            <p className="font-serif italic text-stone-800 text-lg">"Making health a priority, not a secret."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-[#FFFDFD] border-t border-red-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold text-stone-900">Work in Action</h2>
                        <p className="text-stone-500 uppercase tracking-[0.2em] text-[10px] font-black">Scroll through the journey</p>
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
                            <div key={idx} className="group relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-red-200">
                                <div className="absolute inset-0 bg-stone-50 flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-1000">
                                    <ImageIcon className="w-10 h-10 text-stone-200" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-red-600/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100">
                                    <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">Session</p>
                                    <h4 className="text-white font-serif text-2xl font-bold">{title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-red-600 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-50" />

                        <div className="relative z-10 space-y-12">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                                    <BookOpen className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-serif text-4xl font-bold">Resources & Reports</h3>
                            </div>

                            <div className="grid gap-4">
                                {[
                                    { title: "Menstrual Equity Report 2023", size: "1.2 MB" },
                                    { title: "Safe Hygiene Practices Guide", size: "850 KB" },
                                    { title: "Community Impact Study", size: "2.1 MB" }
                                ].map((doc, i) => (
                                    <a key={i} href="#" className="flex items-center justify-between p-6 rounded-2xl bg-white/10 hover:bg-white/20 transition-all group border border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-600 font-bold text-xs">PDF</div>
                                            <div>
                                                <h4 className="font-bold text-lg">{doc.title}</h4>
                                                <p className="text-xs text-white/50">{doc.size}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-32 bg-soft-pink text-center">
                <div className="max-w-3xl mx-auto px-6 space-y-10">
                    <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm">
                        <MessageCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="font-serif text-5xl font-bold text-stone-900 leading-tight">
                        Want to collaborate on an <br />
                        <span className="text-red-600">Awareness Session?</span>
                    </h2>
                    <p className="text-lg text-stone-600 font-light">
                        I am always open to traveling and conducting sessions for NGOs, schools, and local groups.
                        Let's work together to make menstruation a period of pride.
                    </p>
                    <div className="pt-6">
                        <a href="/contact" className="px-12 py-5 bg-stone-900 text-white font-bold rounded-full hover:bg-red-600 transition-all shadow-xl hover:-translate-y-1 block sm:inline-block">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HappyPeriodsPage;
