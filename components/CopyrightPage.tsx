import React from 'react';
import { Mail, Copyright, ShieldCheck, Image as ImageIcon, Heart } from 'lucide-react';

const CopyrightPage: React.FC = () => {
    return (
        <div className="bg-[#faf9f6] min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header Section */}
                <div className="border-b border-stone-200 pb-8 mb-12">
                    <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-4">Copyright & Usage.</h1>
                    <p className="text-stone-500 text-base md:text-lg italic font-light">
                        Respecting the art of storytelling and intellectual labour.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Main Copyright Notice */}
                    <section className="space-y-4">
                        <div className="space-y-4 text-stone-700 leading-relaxed font-light text-lg">
                            <p className="font-bold text-stone-900">© Sonakhi Malla (Rumi) 2026. All rights reserved.</p>
                            <p>
                                Unless otherwise stated, every poem, essay, reflection, article, and piece of writing on this website is the original work of Sonakhi Malla, writing under the pen name <span className="text-stone-900 font-medium italic underline decoration-stone-200 underline-offset-4">Sonakhi Rumi</span>.
                                These words are protected by copyright law and may not be copied, reproduced, distributed, published, translated, archived, or transmitted in any form or by any means, digital or physical, without prior written permission.
                            </p>
                        </div>
                    </section>

                    {/* Personal Sharing */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-stone-900 mb-1">
                            <ShieldCheck className="w-5 h-5" />
                            <h2 className="text-xs font-black uppercase tracking-[0.2em]">Personal Sharing</h2>
                        </div>
                        <div className="space-y-4 text-stone-700 leading-relaxed font-light text-lg">
                            <p>Short excerpts (up to 150 words) may be shared for non-commercial purposes only, provided that:</p>
                            <ul className="space-y-3 ml-2">
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 bg-stone-200 rounded-full mt-2.5 shrink-0"></span>
                                    <span>Full and clear credit to <span className="text-stone-900 font-medium">Sonakhi Malla (Rumi)</span></span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 bg-stone-200 rounded-full mt-2.5 shrink-0"></span>
                                    <span>Direct link to the original page included</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 bg-stone-200 rounded-full mt-2.5 shrink-0"></span>
                                    <span>Text remains unaltered, edited, or presented out of context</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Prohibited */}
                    <section className="bg-stone-100/40 p-8 md:p-10 rounded-2xl space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">What Is Not Allowed</h2>
                        <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4 text-stone-600 font-medium">
                            <li className="flex gap-3 pb-3 border-b border-stone-200/50">
                                <span className="text-stone-300 font-serif italic">01</span>
                                <span className="text-base">Republishing full pieces</span>
                            </li>
                            <li className="flex gap-3 pb-3 border-b border-stone-200/50">
                                <span className="text-stone-300 font-serif italic">02</span>
                                <span className="text-base">Commercial or promotional use</span>
                            </li>
                            <li className="flex gap-3 pb-3 border-b border-stone-200/50">
                                <span className="text-stone-300 font-serif italic">03</span>
                                <span className="text-base">Standalone material on other platforms</span>
                            </li>
                            <li className="flex gap-3 pb-3 border-b border-stone-200/50">
                                <span className="text-stone-300 font-serif italic">04</span>
                                <span className="text-base">Creating derivative works</span>
                            </li>
                        </ul>
                    </section>

                    {/* Subjective Reflections */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-stone-900 uppercase">Personal Nature of the Content</h2>
                        <div className="text-stone-700 leading-relaxed font-light text-lg space-y-4">
                            <p>
                                Most pieces on this website are rooted in personal experience, memory, and emotional interpretation. They are subjective reflections, not statements of fact or an intent to harm or misrepresent.
                            </p>
                            <p>
                                I remain open to adding context, making edits, or removing pieces after thoughtful review. Please reach out if any content causes concern.
                            </p>
                        </div>
                    </section>

                    {/* Visuals */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-stone-900 mb-1">
                            <ImageIcon className="w-5 h-5" />
                            <h2 className="text-xs font-black uppercase tracking-[0.2em]">Images & Visual Material</h2>
                        </div>
                        <p className="text-stone-700 leading-relaxed font-light italic text-base">
                            Unless mentioned otherwise, all images and visual elements on this website are either owned by Sonakhi Malla (Rumi), used with permission, or shared with proper credit.
                            If you are the rightful owner of any image and would like it to be credited, edited, or removed, please reach out and the request will be addressed promptly and respectfully.
                        </p>
                    </section>

                    {/* Permissions CTA - Restored Standalone */}
                    <section className="pt-8">
                        <div className="bg-stone-900 text-white p-8 md:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-center md:text-left space-y-2">
                                <h3 className="font-serif text-2xl md:text-3xl">Permissions & Collaborations</h3>
                                <p className="text-stone-400 text-sm font-light">For republication requests, translations, or print use.</p>
                            </div>
                            <a
                                href="mailto:sonakhirumi@gmail.com"
                                className="flex items-center gap-3 px-8 py-4 bg-white text-stone-900 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-stone-100 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span>sonakhirumi@gmail.com</span>
                            </a>
                        </div>
                    </section>

                    {/* Final Note */}
                    <footer className="text-center pt-8">
                        <div className="flex justify-center mb-3">
                            <Heart className="w-5 h-5 text-stone-300" />
                        </div>
                        <p className="font-serif text-lg text-stone-500 italic max-w-md mx-auto">
                            "Please honour the time, care, and truth that went into these words."
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default CopyrightPage;
