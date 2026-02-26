import React, { useState, useEffect } from 'react';

const HappyPeriodsPreloader: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);
    const loadingTexts = [
        "Breaking the silence...",
        "Normalising the talk...",
        "Advocating with empathy..."
    ];

    useEffect(() => {
        // MATCHED EXACTLY with the original Preloader effect timing (600ms)
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf9f6]">
            <div className="relative w-64 h-64 flex flex-col items-center justify-center">

                {/* Minimalist Static Blood Drop */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#880808]">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" />
                    </svg>
                </div>

            </div>

            {/* Loading Text */}
            <div className="mt-8 overflow-hidden h-6 w-full text-center flex justify-center px-4">
                <p
                    key={textIndex}
                    className="text-[10px] font-black uppercase tracking-[0.4em] text-[#880808] animate-fade-in-out whitespace-nowrap sm:whitespace-normal"
                >
                    {loadingTexts[textIndex]}
                </p>
            </div>

            <style>{`
                @keyframes fade-in-out {
                    0%, 100% { opacity: 0; transform: translateY(10px); }
                    20%, 80% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-out { 
                    animation: fade-in-out 0.6s ease-in-out; 
                }
            `}</style>
        </div>
    );
};

export default HappyPeriodsPreloader;
