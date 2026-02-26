import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, MessageCircle } from 'lucide-react';

// Import the user's EXACT reference image as a sprite sheet
import iconSprite from '../period-icons-ref.jpg';

const HappyPeriodsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    // EXACT SPATIAL POSITIONS FOR SCATTERING (NO CLUTTER)
    const scattering = [
        { l: '8%', t: '12%', r: '15deg', col: 0, row: 0, size: 70 }, // Cup
        { l: '28%', t: '18%', r: '-5deg', col: 1, row: 0, size: 75 }, // Calendar
        { l: '45%', t: '8%', r: '25deg', col: 2, row: 0, size: 80 },  // Uterus
        { l: '70%', t: '15%', r: '-15deg', col: 3, row: 0, size: 70 }, // Pad w/ Drop
        { l: '88%', t: '25%', r: '10deg', col: 4, row: 0, size: 65 },  // Blister
        { l: '12%', t: '45%', r: '45deg', col: 5, row: 0, size: 75 },  // Tissue
        { l: '35%', t: '52%', r: '-15deg', col: 0, row: 1, size: 70 }, // Pills
        { l: '58%', t: '40%', r: '12deg', col: 1, row: 1, size: 65 },  // Double Drops
        { l: '82%', t: '45%', r: '30deg', col: 2, row: 1, size: 75 },  // Phone App
        { l: '10%', t: '75%', r: '-20deg', col: 3, row: 1, size: 65 }, // Liner (Folded pad)
        { l: '38%', t: '80%', r: '15deg', col: 4, row: 1, size: 70 },  // Tampon
        // We exclude (col: 5, row: 1) which is "the women one" (female symbol)

        // Add a few more repeats of the most iconic ones to fill out the bottom properly
        { l: '60%', t: '70%', r: '-10deg', col: 0, row: 0, size: 65 }, // Cup (repeated)
        { l: '85%', t: '75%', r: '-30deg', col: 1, row: 0, size: 80 }, // Calendar (repeated)
        { l: '20%', t: '85%', r: '25deg', col: 2, row: 0, size: 85 },   // Uterus (repeated)
        { l: '75%', t: '90%', r: '120deg', col: 4, row: 0, size: 70 },  // Blister (repeated)
        { l: '50%', t: '92%', r: '-15deg', col: 3, row: 0, size: 70 }, // Pad w/ Drop (repeated)
    ];

    return (
        <div className="min-h-screen bg-white relative" style={{ isolation: 'isolate' }}>
            {/* 
               We are using the EXACT image passed by the user as a CSS Sprite.
               mix-blend-mode: multiply turns the white/peach background into transparent against the white page! 
               filter: grayscale removes colors, brightness+contrast makes the drawing sharp and clips the off-white background to pure white.
            */}
            <div className="fixed inset-0 pointer-events-none select-none z-0">
                {scattering.map((s, idx) => (
                    <div
                        key={idx}
                        className="absolute"
                        style={{
                            left: s.l,
                            top: s.t,
                            transform: `rotate(${s.r})`,
                            width: `${s.size}px`,
                            height: `${s.size}px`,
                            backgroundImage: `url(${iconSprite})`,
                            backgroundSize: '600% 200%',
                            backgroundPosition: `${s.col * 20}% ${s.row * 100}%`,
                            backgroundRepeat: 'no-repeat',
                            // The magic filter to take the user's sketch and blend it perfectly
                            filter: 'grayscale(100%) brightness(1.2) contrast(1.5)',
                            mixBlendMode: 'multiply',
                            opacity: 0.16
                        }}
                    />
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
