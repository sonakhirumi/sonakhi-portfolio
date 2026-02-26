
import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const loadingTexts = [
    "Gathering thoughts...",
    "Inking the narrative...",
    "Curating the archive...",
    "Crafting clarity..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf9f6]">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Paper Background Effect */}
        <div className="absolute inset-0 bg-[#f3f2ee] rounded-xl transform rotate-3 shadow-sm border border-stone-200/50 scale-75 opacity-50"></div>
        <div className="absolute inset-0 bg-white rounded-xl shadow-md border border-stone-100 scale-75"></div>

        {/* Writing Animation SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-32 h-32 relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* The "Line" being written */}
          <path
            d="M20 65 Q 35 55 50 65 T 80 65"
            stroke="#1c1917"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-write-line"
          />

          {/* The Quill/Pen */}
          <g className="animate-quill-move">
            <path
              d="M48 62 L75 35 C78 32 82 32 85 35 C88 38 88 42 85 45 L58 72 L45 75 L48 62Z"
              fill="#1c1917"
            />
            <path
              d="M72 38 L82 48"
              stroke="#faf9f6"
              strokeWidth="1"
              strokeLinecap="round"
            />
            {/* Feather detail */}
            <path
              d="M75 35 C70 25 60 20 50 25 C55 35 65 35 75 35"
              fill="#1c1917"
              className="opacity-40"
            />
          </g>
        </svg>

        {/* Ink Drip Detail */}
        <div className="absolute bottom-16 w-1 h-1 bg-stone-900 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Loading Text */}
      <div className="mt-8 overflow-hidden h-6 w-full text-center flex justify-center px-4">
        <p
          key={textIndex}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 animate-fade-in-out whitespace-nowrap sm:whitespace-normal"
        >
          {loadingTexts[textIndex]}
        </p>
      </div>

      <style>{`
        @keyframes write-line {
          0% { stroke-dasharray: 0 100; stroke-dashoffset: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { stroke-dasharray: 100 0; stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dasharray: 100 0; stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes quill-move {
          0% { transform: translate(-30px, 10px) rotate(-10deg); opacity: 0; }
          20% { opacity: 1; }
          40% { transform: translate(0px, 0px) rotate(0deg); }
          60% { transform: translate(15px, 5px) rotate(5deg); }
          80% { transform: translate(30px, 0px) rotate(0deg); opacity: 1; }
          100% { transform: translate(40px, -10px) rotate(-10deg); opacity: 0; }
        }
        @keyframes fade-in-out {
          0%, 100% { opacity: 0; transform: translateY(10px); }
          20%, 80% { opacity: 1; transform: translateY(0); }
        }
        .animate-write-line {
          stroke-dasharray: 100;
          animation: write-line 3s infinite ease-in-out;
        }
        .animate-quill-move {
          animation: quill-move 3s infinite ease-in-out;
        }
        .animate-fade-in-out {
          animation: fade-in-out 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
