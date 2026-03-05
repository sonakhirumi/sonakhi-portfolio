import React, { useState } from 'react';
import NoteInteractions from './NoteInteractions';

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
    const filteredNotes = category.toLowerCase() === 'all'
        ? notesData
        : notesData.filter(n => n.category.toLowerCase() === category.toLowerCase());

    if (filteredNotes.length === 0) return null;

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
                {filteredNotes.map((note, idx) => (
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
      snap-center md:snap-none aspect-square md:aspect-auto
      ${floatClass}
    `}>
            <div className="space-y-4 flex-1 flex flex-col min-h-0">
                <div className="text-[9px] uppercase font-bold tracking-widest text-stone-400 flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    <span>{note.date}</span>
                    <span className="hidden sm:inline">&middot;</span>
                    <span>{note.time}</span>
                </div>
                <div className="flex-1 overflow-y-auto custom-thin-scroll pr-2 min-h-0 relative">
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
