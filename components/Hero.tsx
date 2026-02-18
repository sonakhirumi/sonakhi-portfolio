
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
    <div className="relative min-h-auto md:min-h-screen flex flex-col justify-start lg:justify-start pt-10 lg:pt-10 bg-[#faf9f6] overflow-hidden">
      {/* Background Texture & Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')` }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f3f2ee] hidden lg:block"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start pb-8 md:pb-16">

        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-10 z-10 flex flex-col items-start text-left">


          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-stone-900 leading-[0.95] tracking-tight animate-in fade-in slide-in-from-left-8 duration-1000">
            Let me help you <br className="hidden lg:block" />
            find the <span className="relative">
              right <span className="italic font-light text-stone-400">words</span>.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-stone-200 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>



          {/* Hero Text Content - Updated v3 */}
          <p className="font-sans text-base md:text-lg text-stone-600 font-light leading-relaxed max-w-xl animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
            Hi, I'm <a href="/about" className="text-stone-900 font-medium hover:text-stone-600 transition-colors">Sonakhi Malla (Rumi)</a>, your obsessive overthinking connoisseur who <span className="text-stone-900 font-medium">writes</span>, <span className="text-stone-900 font-medium">edits</span>, <span className="text-stone-900 font-medium">translates</span>, and <span className="text-stone-900 font-medium">guides</span> fellow budding word lovers discovering their voice.{' '}
            <Link to="/about" className="inline-flex items-center gap-1 text-sm text-stone-400 font-medium underline underline-offset-4 decoration-stone-200 hover:text-stone-900 hover:decoration-stone-900 transition-all">
              know more <ArrowRight className="w-3 h-3" />
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Link
              to="/writings"
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
                <Link to="/writings/english" className="hover:text-stone-900 transition-colors p-2">ENG</Link>
                <span>•</span>
                <Link to="/writings/hindi" className="hover:text-stone-900 transition-colors p-2">HIN</Link>
                <span>•</span>
                <Link to="/writings/odia" className="hover:text-stone-900 transition-colors p-2">ODI</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Imagery & Editorial Flourishes */}
        <div className="lg:col-span-5 relative lg:h-auto flex items-start justify-center animate-in fade-in zoom-in duration-1000 mt-4 lg:mt-0">
          <div className="relative w-full aspect-[4/5] lg:h-full max-w-md group mb-12 lg:mb-0">
            {/* Main Image Mask */}
            <div className="absolute inset-0 bg-stone-200 rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] transition-all duration-700">
              <img
                src="https://live-sonakhi-rumi.pantheonsite.io/wp-content/uploads/2025/12/MoBuzz-Posting-Ideas-7.jpg"
                alt="Sonakhi Malla"
                className="w-full h-full object-cover scale-[1.15] group-hover:scale-125 transition-transform duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-60"></div>
            </div>

            {/* Floating Editorial Card - Improved Mobile Position */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:-bottom-10 md:-left-20 md:translate-x-0 p-6 md:p-8 bg-white shadow-2xl rounded-2xl w-[85%] max-w-[280px] md:w-auto border border-stone-100 block animate-bounce-slow z-20">
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-stone-200 mb-3 md:mb-4" />
              <p className="font-serif italic text-base md:text-lg text-stone-800 leading-snug mb-3 md:mb-4">
                5+ years of making words work harder so you don't have to.
              </p>
              <div className="h-px w-12 bg-stone-900 mb-2"></div>
              <a
                href="https://topmate.io/sonakhirumi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 hover:underline transition-all duration-300 group/link"
              >
                LET'S CONNECT
                <ExternalLink className="w-3 h-3 group-hover/link:text-stone-900 transition-colors" />
              </a>
            </div>

            {/* Decorative Geometry */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-stone-300 rounded-tr-3xl -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-6 hidden md:flex items-center space-x-4 text-stone-300 transform -rotate-90 origin-left">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Scroll to Discover</span>
        <div className="w-20 h-px bg-stone-200"></div>
      </div>

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
