import React, { useState, useEffect } from 'react';
import NoteInteractions from './NoteInteractions';

const BASE_URL = 'https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2';

export interface NoteSnippet {
    id: string;
    category: string;
    date: string;
    time: string;
    content: string;
    author: string;
    size: 'small' | 'medium' | 'large';
}

export const notesData: NoteSnippet[] = [
    {
        id: '1',
        category: 'English',
        date: '14th May 2023',
        time: 'Sunday, 5:00 am',
        content: "I am crippled by love. The love that I will never experience. The absence of its gentle embrace, subtle gaze, and empowering title. To be swoon away with their hands in mine is an honour i am not worthy of. I look at love from a distance that saves it from my need and filth. I wish love attainment, I wish love prosperity. And on some weak days i wish love selfishly for me.",
        author: '-Sonakhi Rumi',
        size: 'medium'
    }
];

export const FloatingNotes: React.FC<{ category: string }> = ({ category }) => {
    const [notes, setNotes] = useState<NoteSnippet[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                setIsLoading(true);
                // 1. Fetch categories to find the "Musing" one for this language
                const catRes = await fetch(`${BASE_URL}/categories?per_page=100&_=${Date.now()}`);
                const cats = await catRes.json();

                if (!Array.isArray(cats)) {
                    setNotes(notesData.filter(n => category.toLowerCase() === 'all' || n.category.toLowerCase() === category.toLowerCase()));
                    return;
                }

                // Search for "Musing English", "Musing Hindi", etc.
                const targetName = `Musing ${category}`.toLowerCase();
                const matchedCat = cats.find(c => c.name.toLowerCase() === targetName || c.name.toLowerCase() === category.toLowerCase());

                if (!matchedCat) {
                    // Fallback to local data if no WP category found yet
                    setNotes(notesData.filter(n => category.toLowerCase() === 'all' || n.category.toLowerCase() === category.toLowerCase()));
                    return;
                }

                // 2. Fetch posts from this category
                const postRes = await fetch(`${BASE_URL}/posts?categories=${matchedCat.id}&_embed&per_page=20&_=${Date.now()}`);
                const posts = await postRes.json();

                if (Array.isArray(posts)) {
                    const wpNotes: NoteSnippet[] = posts.map(post => ({
                        id: post.id.toString(),
                        category: category,
                        date: new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
                        time: new Date(post.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
                        content: post.content.rendered.replace(/<[^>]*>/g, '').trim(), // Strip HTML
                        author: '-Sonakhi Rumi',
                        size: post.content.rendered.length > 300 ? 'large' : post.content.rendered.length > 150 ? 'medium' : 'small'
                    }));
                    setNotes(wpNotes);
                } else {
                    setNotes([]);
                }
            } catch (err) {
                console.error("Musing fetch error:", err);
                setNotes(notesData.filter(n => category.toLowerCase() === 'all' || n.category.toLowerCase() === category.toLowerCase()));
            } finally {
                setIsLoading(false);
            }
        };

        fetchNotes();
    }, [category]);

    if (isLoading) return <div className="py-8 animate-pulse flex gap-6 overflow-x-auto"><div className="w-80 h-80 bg-stone-100 rounded-2xl shrink-0"></div><div className="w-80 h-80 bg-stone-100 rounded-2xl shrink-0"></div></div>;

    if (notes.length === 0) return null;

    return (
        <div className="py-8">
            <style>{`
        @keyframes customFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-custom-float-0 { animation: customFloat 6s ease-in-out infinite; }
        .animate-custom-float-1 { animation: customFloat 5s ease-in-out infinite 1s; }
        .animate-custom-float-2 { animation: customFloat 7s ease-in-out infinite 2s; }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .custom-thin-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-thin-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-thin-scroll::-webkit-scrollbar-thumb {
          background-color: #e5e5e5;
          border-radius: 20px;
        }
      `}</style>
            <div className="flex md:flex-wrap gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar items-start">
                {notes.map((note, idx) => (
                    <NoteBubble key={note.id} note={note} index={idx} />
                ))}
            </div>
        </div>
    );
};

const NoteBubble: React.FC<{ note: NoteSnippet; index: number }> = ({ note, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentThreshold = 180;
    const shouldTruncate = note.content.length > contentThreshold;
    const displayContent = (!isExpanded && shouldTruncate)
        ? note.content.slice(0, contentThreshold) + '...'
        : note.content;

    const floatClass = `animate-custom-float-${index % 3}`;

    return (
        <div className={`
      relative bg-white border border-stone-200 shadow-sm rounded-2xl p-6 lg:p-8 flex flex-col justify-between
      transition-all duration-500 hover:shadow-lg hover:-translate-y-2 group
      ${note.size === 'small' ? 'md:w-[300px] md:h-auto' : ''}
      ${note.size === 'medium' ? 'md:w-[380px] md:h-auto' : ''}
      ${note.size === 'large' ? 'md:w-[460px] md:h-auto' : ''}
      w-[85vw] sm:w-[60vw] shrink-0 md:shrink-0
      snap-center md:snap-none ${isExpanded ? 'h-auto' : 'aspect-square'} md:aspect-auto
      ${floatClass}
    `}>
            <div className="space-y-4 flex-1 flex flex-col min-h-0">
                <div className="text-[9px] uppercase font-bold tracking-widest text-stone-400 flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    <span>{note.date}</span>
                    <span className="hidden sm:inline">&middot;</span>
                    <span>{note.time}</span>
                </div>
                <div className={`flex-1 ${isExpanded ? '' : 'overflow-y-auto'} custom-thin-scroll pr-2 min-h-0 relative`}>
                    <p className={`font-serif text-stone-700 leading-relaxed ${note.size === 'small' ? 'text-base' : note.size === 'medium' ? 'text-lg' : 'text-xl'} whitespace-pre-wrap`}>
                        <span className="md:hidden">{isExpanded ? note.content : displayContent}</span>
                        <span className="hidden md:inline">{note.content}</span>
                    </p>
                </div>
            </div>
            <div className="mt-4 flex items-end justify-between pt-4 border-t border-stone-100 shrink-0">
                <span className="text-xs font-semibold italic text-stone-500">{note.author}</span>
                {shouldTruncate && (
                    <button
                        className="md:hidden text-[10px] font-bold uppercase tracking-wider text-stone-800 underline decoration-stone-300 underline-offset-4"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Less' : 'More'}
                    </button>
                )}
            </div>

            <NoteInteractions noteId={note.id} content={note.content} />
        </div>
    )
}

export default FloatingNotes;
