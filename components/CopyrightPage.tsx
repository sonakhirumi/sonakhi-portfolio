import React from 'react';
import { Mail, Copyright, ShieldCheck, Image as ImageIcon, Heart } from 'lucide-react';

const CopyrightPage: React.FC = () => {
    return (
        <div className="bg-[#faf9f6] min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header Section */}
                <div className="border-b border-stone-200 pb-12 mb-16">
                    <h1 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6">Copyright & Usage.</h1>
                    <p className="text-stone-500 text-lg italic font-light">
                        Respecting the art of storytelling and intellectual labour.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Main Copyright Notice */}
                    <section className="space-y-6">
                        <div className="space-y-6 text-stone-700 leading-relaxed font-light text-lg">
                            <p className="font-bold text-stone-900">© Sonakhi Malla (Rumi) 2026. All rights reserved.</p>
                            <p>
                                Unless otherwise stated, every poem, essay, reflection, article, and piece of writing on this website is the original work of Sonakhi Malla, writing under the pen name <span className="text-stone-900 font-medium italic underline decoration-stone-200 underline-offset-4">Sonakhi Rumi</span>.
                                These words are protected by copyright law and may not be copied, reproduced, distributed, published, translated, archived, or transmitted in any form or by any means, digital or physical, without prior written permission.
                            </p>
                        </div>
                    </section>

                    {/* Personal Sharing */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 text-stone-900 mb-2">
                            <ShieldCheck className="w-5 h-5" />
                            <h2 className="text-xs font-black uppercase tracking-[0.3em]">Personal Sharing</h2>
                        </div>
                        <div className="space-y-6 text-stone-700 leading-relaxed font-light">
                            <p>Short excerpts (up to 150 words) may be shared for non-commercial purposes only, provided that:</p>
                            <ul className="space-y-4 ml-6 list-disc marker:text-stone-300">
                                <li>Full and clear credit is given to <span className="text-stone-900 font-medium">Sonakhi Malla (Rumi)</span></li>
                                <li>A direct link to the original page is included</li>
                                <li>The text is not altered, edited, or presented out of context</li>
                            </ul>
                        </div>
                    </section>

                    {/* Prohibited */}
                    <section className="bg-stone-100/50 p-8 md:p-12 rounded-3xl space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-stone-400">What Is Not Allowed</h2>
                        <ul className="grid md:grid-cols-2 gap-8 text-sm text-stone-600 font-medium">
                            <li className="flex gap-4">
                                <span className="text-stone-300">01</span>
                                <span>Republishing full pieces</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-stone-300">02</span>
                                <span>Using the work for commercial or promotional purposes</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-stone-300">03</span>
                                <span>Posting the content on other websites, blogs, or social platforms as standalone material</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-stone-300">04</span>
                                <span>Creating derivative works based on the writing</span>
                            </li>
                        </ul>
                    </section>

                    {/* Subjective Reflections */}
                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-stone-900">Personal Nature of the Content</h2>
                        <div className="text-stone-700 leading-relaxed font-light space-y-4">
                            <p>
                                Most pieces on this website are rooted in personal experience, memory, observation, and emotional interpretation. They are subjective reflections, not statements of fact or an intent to defame, harm, or misrepresent any individual, group, or institution.
                            </p>
                            <p>
                                If any content feels uncomfortable, inaccurate, or closely identifiable in a way that causes concern, you are welcome to reach out. I remain open to adding context, making edits where appropriate, or removing the piece after thoughtful review.
                            </p>
                        </div>
                    </section>

                    {/* Visuals */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 text-stone-900 mb-2">
                            <ImageIcon className="w-5 h-5" />
                            <h2 className="text-xs font-black uppercase tracking-[0.3em]">Images & Visual Material</h2>
                        </div>
                        <p className="text-stone-700 leading-relaxed font-light italic">
                            Unless mentioned otherwise, all images and visual elements on this website are either owned by Sonakhi Malla (Rumi), used with permission, or shared with proper credit.
                            If you are the rightful owner of any image and would like it to be credited, edited, or removed, please reach out and the request will be addressed promptly and respectfully.
                        </p>
                    </section>

                    {/* Contact CTA */}
                    <section className="pt-12 border-t border-stone-200">
                        <div className="bg-stone-900 text-white p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-center md:text-left space-y-2">
                                <h3 className="font-serif text-3xl">Permissions & Collaborations</h3>
                                <p className="text-stone-400 text-sm font-light">For republication requests, translations, or print use.</p>
                            </div>
                            <a
                                href="mailto:sonakhirumi@gmail.com"
                                className="flex items-center gap-3 px-8 py-4 bg-white text-stone-900 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform"
                            >
                                <Mail className="w-4 h-4" />
                                <span>sonakhirumi@gmail.com</span>
                            </a>
                        </div>
                    </section>

                    {/* Final Note */}
                    <footer className="text-center pt-8">
                        <div className="flex justify-center mb-4">
                            <Heart className="w-6 h-6 text-stone-300" />
                        </div>
                        <p className="font-serif text-xl text-stone-500 italic">
                            "Please honour the time, care, and truth that went into these words."
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default CopyrightPage;
