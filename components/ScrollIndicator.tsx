import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const bottomPosition = document.documentElement.scrollHeight - 150; // threshold for footer

            // Show if not at the bottom AND page is scrollable
            if (document.documentElement.scrollHeight > window.innerHeight + 50) {
                if (scrollPosition >= bottomPosition) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(false);
            }
        };

        // Delay initial check slightly to allow DOM to render and heights to calculate
        const timer = setTimeout(handleScroll, 500);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToNext = () => {
        window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToNext}
            className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 p-2 md:p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-stone-200 text-stone-500 hover:text-stone-900 hover:scale-110 transition-all duration-300 animate-bounce cursor-pointer group"
            aria-label="Scroll down"
        >
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
        </button>
    );
};

export default ScrollIndicator;
