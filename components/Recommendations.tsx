import React from 'react';
import { ExternalLink, ArrowRight, Quote } from 'lucide-react';

const recommendations = [
    {
        author: "Name Placeholder 1",
        role: "Role Placeholder 1",
        text: "This is a placeholder for your first recommendation. Since I couldn't access LinkedIn automatically, please update this text with the real recommendation! Sonakhi is an incredible writer...",
    },
    {
        author: "Name Placeholder 2",
        role: "Role Placeholder 2",
        text: "This is a placeholder for your second recommendation. Please update this with the real text from your LinkedIn profile.",
    },
    {
        author: "Name Placeholder 3",
        role: "Role Placeholder 3",
        text: "This is a placeholder for your third recommendation. Please update this with the real text from your LinkedIn profile.",
    }
];

const Recommendations: React.FC = () => {
    return (
        <section className="py-20 bg-[#f3f2ee]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            Words from <span className="italic font-light text-stone-500">kind humans</span>
                        </h2>
                        <p className="font-sans text-stone-600 text-lg md:text-xl font-light">
                            Don't just take my word for it. Here's what others have to say.
                        </p>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/sonakhi-malla-rumi/details/recommendations/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-stone-900 hover:text-stone-500 transition-colors"
                    >
                        Read all on LinkedIn
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {recommendations.map((rec, index) => (
                        <a
                            key={index}
                            href="https://www.linkedin.com/in/sonakhi-malla-rumi/details/recommendations/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink className="w-5 h-5 text-stone-300 group-hover:text-stone-900 transition-colors" />
                            </div>
                            <Quote className="w-8 h-8 text-stone-200 mb-6 group-hover:text-stone-900 transition-colors" />

                            <p className="font-sans text-stone-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                                "{rec.text}"
                            </p>

                            <div>
                                <h4 className="font-serif font-medium text-stone-900">{rec.author}</h4>
                                <p className="font-sans text-xs text-stone-500 mt-1">{rec.role}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
