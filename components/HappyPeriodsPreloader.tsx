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

                {/* Minimalist Blood Drop Animation */}
                <div className="relative w-16 h-24 flex items-center justify-center mb-8">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#880808] absolute top-2 animate-drop-fall">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" />
                    </svg>

                    {/* Ripple effects below the drop */}
                    <div className="absolute bottom-0 w-8 h-2 border-2 border-[#880808]/40 rounded-[50%] animate-ripple-1"></div>
                    <div className="absolute bottom-[-4px] w-12 h-3 border border-[#880808]/20 rounded-[50%] animate-ripple-2"></div>
                </div>

                {/* Loading Text */}
                <div className="h-10 flex items-center justify-center text-center w-full">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#880808] animate-fade-in-out text-balance">
                        {loadingTexts[textIndex]}
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes drop-fall {
                    0% { transform: translateY(-20px) scale(0.9); opacity: 0; }
                    40% { transform: translateY(0) scale(1); opacity: 1; }
                    80% { transform: translateY(4px) scale(1.1, 0.9); opacity: 0.8; }
                    100% { transform: translateY(8px) scale(1); opacity: 0; }
                }
                @keyframes ripple-1 {
                    0%, 70% { transform: scale(0.5); opacity: 0; }
                    85% { transform: scale(1.5); opacity: 1; }
                    100% { transform: scale(2); opacity: 0; }
                }
                @keyframes ripple-2 {
                    0%, 75% { transform: scale(0.5); opacity: 0; }
                    90% { transform: scale(1.2); opacity: 0.8; }
                    100% { transform: scale(1.8); opacity: 0; }
                }
                @keyframes fade-in-out {
                    0%, 100% { opacity: 0; transform: translateY(5px); }
                    20%, 80% { opacity: 1; transform: translateY(0); }
                }
                
                .animate-drop-fall { animation: drop-fall 2.4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
                .animate-ripple-1 { animation: ripple-1 2.4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
                .animate-ripple-2 { animation: ripple-2 2.4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
                .animate-fade-in-out { animation: fade-in-out 0.8s ease-in-out; }
            `}</style>
        </div>
    );
};

export default HappyPeriodsPreloader;
