import React, { useState, useEffect } from 'react';

const HappyPeriodsPreloader: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);
    const loadingTexts = [
        "Breaking the silence...",
        "Normalising the talk...",
        "Advocating with empathy..."
    ];

    useEffect(() => {
        // Slow down timing to 1200ms
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf9f6] px-4">
            {/* Wrapper to align both items closely and center to screen */}
            <div className="flex flex-col items-center justify-center gap-6 mt-[-40px]">

                {/* Minimalist Static Blood Drop */}
                <div className="flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#880808]">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" />
                    </svg>
                </div>

                {/* Loading Text */}
                <div className="overflow-hidden h-6 w-full text-center flex justify-center">
                    <p
                        key={textIndex}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-[#880808] animate-fade-in-out whitespace-nowrap sm:whitespace-normal"
                    >
                        {loadingTexts[textIndex]}
                    </p>
                </div>

            </div>

            <style>{`
                @keyframes fade-in-out {
                    0%, 100% { opacity: 0; transform: translateY(10px); }
                    20%, 80% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-out { 
                    animation: fade-in-out 1.2s ease-in-out; 
                }
            `}</style>
        </div>
    );
};

export default HappyPeriodsPreloader;
