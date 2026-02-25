
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Languages, Quote, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {

  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;

  const numberToWords = (num: number): string => {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    return words[num] || num.toString();
  };

  const yearsWords = numberToWords(yearsExperience);



  return (
    <div className="relative min-h-auto md:min-h-screen flex flex-col justify-start lg:justify-start pt-2 lg:pt-10 bg-[#faf9f6] overflow-hidden">
      {/* Background Texture & Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')` }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f3f2ee] hidden lg:block"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start pb-4 md:pb-10">

        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-10 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">


          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-stone-900 leading-[0.95] tracking-tight animate-in fade-in slide-in-from-left-8 duration-1000">
            Let me help you <br className="hidden lg:block" />
            find the <span className="relative">
              right <span className="italic font-light text-stone-400">words</span>.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-stone-200 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>

          {/* Mobile-Only Image Placement - Between Title and Intro */}
          <div className="block lg:hidden w-full relative aspect-[1/1.2] max-w-[240px] self-start ml-6 my-16 group">
            {/* Stamp Container - Mobile */}
            <div className="absolute inset-0 bg-[#fdf9f0] shadow-2xl overflow-hidden"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at 8px 8px, transparent 6px, black 6.1px)',
                WebkitMaskSize: '16px 16px',
                WebkitMaskPosition: '-8px -8px',
                maskImage: 'radial-gradient(circle at 8px 8px, transparent 6px, black 6.1px)',
                maskSize: '16px 16px',
                maskPosition: '-8px -8px'
              }}>

              {/* Flowers Layer - Mobile */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <img src="https://img.icons8.com/color/96/sunflower.png" className="absolute bottom-4 left-2 w-20 h-20 rotate-[-15deg]" alt="flower" />
                <img src="https://img.icons8.com/color/96/sunflower.png" className="absolute top-10 right-2 w-16 h-16 rotate-[20deg]" alt="flower" />
                <img src="https://img.icons8.com/color/96/sunflower.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-80" alt="flower" />
              </div>

              {/* Subject Layer - Mobile */}
              <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
                <img
                  src="https://live-sonakhi-rumi.pantheonsite.io/wp-content/uploads/2025/12/MoBuzz-Posting-Ideas-7.jpg"
                  alt="Sonakhi Malla"
                  className="w-full h-full object-cover object-top scale-[1.3] grayscale brightness-110 contrast-125 mb-[-5%]"
                  style={{ objectPosition: 'center 8%', clipPath: 'ellipse(42% 48% at 50% 48%)' }}
                />
              </div>
            </div>

            {/* Mobile Dialogue Bubble - Repositioned to Side */}
            <div className="absolute -top-16 -right-12 bg-white shadow-xl rounded-2xl p-4 border border-stone-100 w-[170px] z-30 animate-bounce-slow">
              <div className="absolute bottom-[-10px] left-[30px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
              <p className="font-serif italic text-[11px] text-stone-800 leading-snug mb-3">
                "5+ years of making words work harder."
              </p>
              <div className="h-px w-8 bg-stone-300 mb-2"></div>
              <a
                href="https://topmate.io/sonakhirumi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[8px] font-black uppercase tracking-wider text-stone-400 hover:text-stone-900 transition-colors"
              >
                LET'S CONNECT <ExternalLink className="w-2 h-2" />
              </a>
            </div>
          </div>



          {/* Hero Text Content - Updated v3 */}
          <p className="font-sans text-base md:text-lg text-stone-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
            Hi, I'm <a href="/about" className="text-stone-900 font-medium hover:text-stone-600 transition-colors">Sonakhi Malla (Rumi)</a>, your obsessive overthinking connoisseur who <span className="text-stone-900 font-medium">writes</span>, <span className="text-stone-900 font-medium">edits</span>, <span className="text-stone-900 font-medium">translates</span>, and <span className="text-stone-900 font-medium">guides</span> fellow budding word lovers discovering their voice.{' '}
            <Link to="/about" className="inline-flex items-center gap-1 text-sm text-stone-400 font-medium underline underline-offset-4 decoration-stone-200 hover:text-stone-900 hover:decoration-stone-900 transition-all">
              know more <ArrowRight className="w-3 h-3" />
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-6 sm:space-y-0 sm:space-x-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 w-full justify-center lg:justify-start">
            <Link
              to="/my-archive"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white overflow-hidden rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-stone-900/20"
            >
              <span className="relative z-10 font-bold text-xs uppercase tracking-widest flex items-center">
                Enter my Archive
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-stone-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>

            <div className="flex items-center space-x-3 text-stone-400 sm:self-center">
              <div className="p-2 border border-stone-200 rounded-full transition-colors">
                <Languages className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Link to="/my-archive/english" className="hover:text-stone-900 transition-colors p-2">ENG</Link>
                <span>•</span>
                <Link to="/my-archive/hindi" className="hover:text-stone-900 transition-colors p-2">HIN</Link>
                <span>•</span>
                <Link to="/my-archive/odia" className="hover:text-stone-900 transition-colors p-2">ODI</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:col-span-5 relative lg:h-auto lg:flex items-center justify-center animate-in fade-in zoom-in duration-1000 mt-4 lg:mt-0 px-4">
          <div className="relative w-full aspect-[4/5] lg:h-[550px] max-sm group">
            {/* Stamp Container - Desktop */}
            <div className="absolute inset-0 bg-[#fdf9f0] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at 10px 10px, transparent 8px, black 8.1px)',
                WebkitMaskSize: '20px 20px',
                WebkitMaskPosition: '-10px -10px',
                maskImage: 'radial-gradient(circle at 10px 10px, transparent 8px, black 8.1px)',
                maskSize: '20px 20px',
                maskPosition: '-10px -10px'
              }}>

              {/* Sunflowers Layer - Desktop */}
              <div className="absolute inset-0 z-0 flex items-center justify-center scale-110 pointer-events-none">
                <img src="https://img.icons8.com/color/144/sunflower.png" className="absolute bottom-[-10px] left-[-10px] w-48 h-48 rotate-[-15deg] brightness-110" alt="flower" />
                <img src="https://img.icons8.com/color/144/sunflower.png" className="absolute top-10 right-[-10px] w-40 h-40 rotate-[25deg] brightness-110" alt="flower" />
                <img src="https://img.icons8.com/color/144/sunflower.png" className="absolute top-1/4 left-[-20px] w-32 h-32 rotate-[40deg] opacity-70" alt="flower" />
                <img src="https://img.icons8.com/color/144/sunflower.png" className="absolute bottom-[-20px] right-[-20px] w-56 h-56 rotate-[-10deg] brightness-110" alt="flower" />
              </div>

              {/* Subject Layer - Desktop */}
              <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
                <img
                  src="https://live-sonakhi-rumi.pantheonsite.io/wp-content/uploads/2025/12/MoBuzz-Posting-Ideas-7.jpg"
                  alt="Sonakhi Malla"
                  className="w-full h-full object-cover object-top scale-[1.3] grayscale brightness-110 contrast-125 mb-[-5%]"
                  style={{ objectPosition: 'center 8%', clipPath: 'ellipse(40% 45% at 50% 45%)' }}
                />
              </div>
            </div>

            {/* Floating Dialogue Bubble - Repositioned to Top-Side */}
            <div className="absolute -top-16 -left-20 p-6 md:p-8 bg-white shadow-2xl rounded-3xl w-[100%] max-w-[285px] border border-stone-50 block animate-bounce-slow z-30">
              <div className="absolute bottom-[-20px] left-[100px] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>

              <Quote className="w-6 h-6 md:w-8 md:h-8 text-stone-100 mb-3 md:mb-4" />
              <p className="font-serif italic text-base md:text-lg text-stone-800 leading-snug mb-4">
                "Words that work harder so you don't have to."
              </p>
              <div className="h-px w-12 bg-stone-900 mb-3"></div>
              <a
                href="https://topmate.io/sonakhirumi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 hover:underline transition-all duration-300 group/link"
              >
                LET'S CONNECT
                <ExternalLink className="w-3 h-3 group-hover/link:text-stone-900 transition-colors" />
              </a>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 border-2 border-dashed border-stone-200 rounded-full -z-10 group-hover:scale-105 transition-transform duration-700 opacity-20"></div>
          </div>
        </div>
      </div>



      {/* Force rebuild */}

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translate(var(--tw-translate-x), 0); }
          50% { transform: translate(var(--tw-translate-x), -15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
