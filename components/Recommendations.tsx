import React from 'react';
import { ExternalLink, ArrowRight, Quote } from 'lucide-react';

const recommendations = [
    {
        author: "Aditi Gupta",
        role: "Co-founder Menstrupedia, TruBuddy",
        text: "Sonakhi leads the writers’ team at Menstrupedia with focus and dedication. Her biggest strength is that she never loses sight of her goals. She is meticulous in her research and has a great ability to turn complex information into valuable learning points for our readers. She is an empathetic leader who not only maintains high-quality work but also helps her team grow and achieve their goals. Sonakhi is a problem solver, a keen listener, and always open to learning. She ensures clear communication, which makes working with her easy and efficient. Her leadership is nurturing, creating a space where writers can sharpen their skills and improve. At the same time, she keeps pushing herself by learning new skills and taking on new challenges. Balancing a full-time job, leading a team, and completing her master’s degree is a true testament to her dedication. Sonakhi is truly an asset, and I’m grateful to be working with her.",
        authorLink: "https://www.linkedin.com/in/aditiguptamenstrupedia/",
        sourceLink: "https://www.linkedin.com/in/sonakhi-malla-rumi/details/recommendations/"
    },
    {
        author: "Soumyadeep Pramanik",
        role: "Aspiring Writer",
        text: "What I really liked about her session was how she was breaking down the complex points to me in a simple manner. She basically clarified all my doubts regarding writing. Thank you so much",
        authorLink: "https://topmate.io/sonakhirumi",
        sourceLink: "https://topmate.io/sonakhirumi"
    },
    {
        author: "Anish Juwarkar",
        role: "Gubblebums | XIM Bhubaneswar | GEC Goa",
        text: "I am pleased to recommend Sonakhi as an outstanding professional who has showcased tremendous growth during her tenure with us. Starting as a Content Writer Intern, Sonakhi swiftly progressed to a part-time and later a full-time role as a Junior Content Writer. Throughout this journey, she demonstrated exceptional skills in handling diverse client projects and crafting both long and short-form content. Sonakhi also made valuable contributions to brand management, always maintaining a professional attitude and actively seeking growth through constructive feedback. A dedicated and insightful team member, I highly endorse Sonakhi.",
        authorLink: "https://www.linkedin.com/in/anishjuwarkar/",
        sourceLink: "https://www.linkedin.com/in/sonakhi-malla-rumi/details/recommendations/"
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
                        Read more on LinkedIn
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {recommendations.map((rec, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 relative flex flex-col h-full"
                        >
                            <Quote className="w-8 h-8 text-stone-200 mb-6" />

                            <div className="flex-grow">
                                <p className="font-sans text-stone-600 text-sm md:text-base leading-relaxed mb-2 line-clamp-4">
                                    "{rec.text}"
                                </p>
                                <a
                                    href={rec.sourceLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-stone-400 hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-colors inline-block mb-8"
                                >
                                    Read more
                                </a>
                            </div>

                            <div>
                                <a
                                    href={rec.authorLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-serif font-medium text-stone-900 hover:text-stone-500 transition-colors inline-flex items-center gap-1 group"
                                >
                                    {rec.author}
                                    <ExternalLink className="w-3 h-3 text-stone-300 group-hover:text-stone-500 transition-colors opacity-0 group-hover:opacity-100" />
                                </a>
                                <p className="font-sans text-xs text-stone-500 mt-1">{rec.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
