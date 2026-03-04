import React, { useEffect } from 'react';
import { ExternalLink, Image as ImageIcon, MessageCircle } from 'lucide-react';

const HappyPeriodsPage: React.FC = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const BloodDropSolid = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="#880808" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 7.5-12.5 7.5-12.5s7.5 8.358 7.5 12.5c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
    );

    return (
        <div className="bg-white relative">
            <div className="relative z-10 w-full flex flex-col items-center">
                <style>{`
                    .text-stroke-red { -webkit-text-stroke: 1.5px #880808; color: white; }
                    @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                    .animate-slide-up { animation: slide-up 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
                `}</style>

                {/* Main Hero Content */}
                <section className="w-full max-w-4xl flex flex-col items-center justify-center pt-8 pb-8 md:pt-16 md:pb-20 px-6 text-center mx-auto min-h-0">
                    <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-red-100 bg-white shadow-sm mb-6 animate-slide-up max-w-[90vw]">
                        <BloodDropSolid className="w-3 h-3.5" />
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tight md:tracking-[0.2em] text-stone-800 text-center leading-tight">Reboot of Thoughts on Menstruation</span>
                    </div>

                    <h1 className="font-serif text-[clamp(2.5rem,11vw,8rem)] font-bold tracking-tighter leading-none flex items-center gap-2 md:gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <span className="text-stroke-red">Happy</span>{' '}
                        <span className="text-[#880808] italic">Periods</span>
                        <div className="w-[0.8em] h-[1em]"><BloodDropSolid className="w-full h-full" /></div>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed mt-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        Let's make our world <span className="text-[#880808] font-bold tracking-tight">PERIOD FRIENDLY!</span>
                    </p>
                </section>

                {/* About Reboot Section */}
                <section className="w-full py-14 lg:py-24 px-6 md:px-12 lg:px-20 bg-white border-t border-stone-100">
                    <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-1 border-l-2 border-[#880808] h-32 hidden lg:block" />
                        <div className="lg:col-span-11 space-y-10">
                            <h2 className="font-serif text-4xl md:text-6xl text-[#880808] font-bold leading-tight tracking-tighter">Our Story.</h2>

                            <div className="prose prose-stone max-w-none text-base md:text-lg text-stone-500 leading-relaxed font-light space-y-6 [&_p]:text-justify">
                                <img
                                    src="https://live-sonakhi-rumi.pantheonsite.io/wp-content/uploads/2026/03/PicsArt_07-14-10.52.26.png"
                                    alt="Reboot Journey"
                                    className="w-32 h-32 md:w-48 lg:w-72 lg:h-72 rounded-full object-cover float-left mr-5 md:mr-10 mb-2 md:mb-6 shadow-xl"
                                />
                                <p>
                                    <span className="text-[#880808] font-medium italic">Reboot of Thoughts on Menstruation</span>, also known as <span className="text-[#880808] font-medium italic">Happy Periods</span>, began on <span className="text-[#880808] font-medium italic">15 July 2018</span> by me (Sonakhi) with the aim of starting open conversations about menstruation and challenging the silence that surrounds it.
                                </p>
                                <p>
                                    The idea grew from a very personal experience. My first period itself was not frightening because there had already been some conversations about menstruation at home. However, what followed reflected the reality many menstruators face—restrictions, silence, and hesitation around a completely natural process. The moment that made all this unfathomable was getting my periods while writing one of my papers for 10th board examinations. The panic, the discomfort, and the hesitation to talk about it made an already stressful situation even harder. That experience raised a simple but powerful question: <span className="text-[#880808] font-medium italic">why should something so natural cause so much fear and silence?</span> That question eventually led to the beginning of Reboot.
                                </p>

                                <div className={`${isExpanded ? 'block' : 'hidden lg:block'} animate-in fade-in duration-700 space-y-6`}>
                                    <p>
                                        What started as a small initiative gradually grew with the support of the Odisha State Bharat Scout and Guides, the Bharat Scouts and Guides, the World Association of Girl Guides and Girl Scouts, and many volunteers and organisations who believed in the need for menstrual awareness.
                                    </p>
                                    <p>
                                        One of the first activities under the initiative was <span className="text-[#880808] font-medium italic">"Reboot 100 Takes,"</span> a project that recorded interviews with people from different age groups, genders, and social backgrounds about their thoughts and experiences related to menstruation. These conversations helped initiate discussions that many people had never had before. Alongside these interviews, we also received <span className="text-[#880808] font-medium italic">more than 100 support videos</span> from people around the world, amplifying the message of period positivity.
                                    </p>
                                    <p>
                                        Over time, the initiative expanded through <span className="text-[#880808] font-medium italic">educational sessions</span>, <span className="text-[#880808] font-medium italic">street plays</span>, and <span className="text-[#880808] font-medium italic">awareness programmes in schools</span>, colleges, camps, and communities, along with continuous <span className="text-[#880808] font-medium italic">engagement through social media</span> platforms.
                                    </p>
                                    <p>
                                        Over time, Reboot evolved into a more structured initiative focused on creating a period-friendly environment for menstruators. Our work centres on addressing <span className="text-[#880808] font-medium italic">period poverty</span>, which we divide into four key areas:
                                    </p>

                                    <ul className="list-disc pl-5 my-6 space-y-2 text-stone-500">
                                        <li><span className="text-[#880808] font-medium italic">Poverty of information</span></li>
                                        <li><span className="text-[#880808] font-medium italic">Poverty of emotional support</span></li>
                                        <li><span className="text-[#880808] font-medium italic">Poverty of sanitary products</span></li>
                                        <li><span className="text-[#880808] font-medium italic">Poverty of healthcare</span></li>
                                    </ul>

                                    <p>
                                        At present, the main focus remains on <span className="text-[#880808] font-medium italic">poverty of information</span>, because access to accurate menstrual education is often the first step toward addressing the other challenges related to menstrual health.
                                    </p>
                                    <p>
                                        In recognition of this work, Reboot of Thoughts on Menstruation was chosen <span className="text-[#880808] font-medium italic">as one of the three Olave Award winners</span> by the World Association of Girl Guides and Girl Scouts (WAGGGS) under the <span className="text-[#880808] font-medium italic">“Be the Difference” theme</span> of the <span className="text-[#880808] font-medium italic">2018–2020 triennium</span>. It remains the only project from India to have received this award to date, highlighting the global impact of the initiative.
                                    </p>
                                    <p className="text-xl mt-4">
                                        Through conversations, education, and community engagement, Reboot continues to work towards a future where menstruation is understood, respected, and spoken about without hesitation.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="lg:hidden text-[#880808] font-bold text-sm uppercase tracking-widest border-b border-[#880808] hover:opacity-70 transition-opacity mt-4 block"
                                >
                                    {isExpanded ? 'Read Less' : 'Read Our Story'}
                                </button>
                                <div className="clear-both"></div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w-full py-32 bg-white text-center border-t border-stone-50">
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
