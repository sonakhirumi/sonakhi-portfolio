import React, { useState, useEffect } from 'react';

const HappyPeriodsPreloader: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);
    const loadingTexts = [
        "Breaking the silence...",
        "Normalising the talk...",
        "Advocating with empathy..."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white px-4">
            <div className="relative w-full max-w-sm flex flex-col items-center justify-center">

                {/* Minimalist Static Blood Drop */}
                <div className="relative w-16 h-24 flex items-center justify-center mb-8">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#880808] absolute top-6">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" />
                    </svg>
                </div>

                {/* Loading Text */}
                <div className="h-10 flex items-center justify-center text-center w-full">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#880808] animate-fade-in-out text-balance">
                        {loadingTexts[textIndex]}
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fade-in-out {
                    0%, 100% { opacity: 0; transform: translateY(5px); }
                    20%, 80% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-out { animation: fade-in-out 0.8s ease-in-out; }
            `}</style>
        </div>
    );
};

export default HappyPeriodsPreloader;
