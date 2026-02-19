
import React from 'react';
import { Languages, PenTool, ExternalLink } from 'lucide-react';

const HERO_IMAGE = 'https://live-sonakhi-rumi.pantheonsite.io/wp-content/uploads/2025/12/MoBuzz-Posting-Ideas-7.jpg';

const About: React.FC = () => {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;

  const numberToWords = (num: number): string => {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    return words[num] || num.toString();
  };

  const yearsWords = numberToWords(yearsExperience);
  const displayYears = `${yearsExperience}+`;

  /* ─── Shared sub-components ─────────────────────────── */

  const AboutMeBlock = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">About Me</h2>
      </div>
      <div className="prose prose-stone max-w-none space-y-3 text-stone-600 leading-relaxed text-base font-light">
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-stone-900">
          I have spent the last five years working with words across content, copy, scripts, UX, editing, visual storytelling, and translation. I have learnt to move between forms without losing what matters.
        </p>
        <p>
          Writing was manifested for me long before I developed my sense of self. I continue to choose it with intention because words help me breathe. They let me place the weight on my chest onto paper. When I began writing for others, my goal was simple: to help people find the right words!
        </p>
        <p>
          Now I am at a place where I want to challenge myself and take up projects that broaden my horizons. I also want to mentor writers who are still figuring out if they are allowed to call themselves writers. Because I was that person too. Some days, I still am.
        </p>
        <p>
          If you are looking for someone who not only knows how to write but ensures that your words move people, not just fill space, whether you need content, editing, translation, or just someone to tell you your writing does not suck—I am here.
        </p>
        <div className="font-medium text-stone-900 mt-2">
          <a
            href="https://topmate.io/sonakhirumi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex items-center gap-2 text-stone-900 hover:underline underline-offset-4 decoration-stone-900 transition-all cursor-pointer"
          >
            Let's spend some time with words together.
            <ExternalLink className="w-4 h-4 text-stone-400" />
          </a>
        </div>
      </div>
    </div>
  );

  const IndustryProBlock = () => (
    <div className="flex items-center justify-between pt-2 px-2">
      <div className="flex -space-x-3">
        {[1, 2, 3].map(i => (
          <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-stone-${i * 100 + 100}`}></div>
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-900 flex items-center justify-center text-[10px] text-white font-bold">
          {displayYears}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Industry Professional</span>
        <span className="font-serif italic text-stone-900">Since {startYear}</span>
      </div>
    </div>
  );

  const CoreCompetenciesBlock = () => (
    <div className="relative p-8 bg-[#f3f2ee] rounded-3xl overflow-hidden group border border-stone-100 shadow-sm">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e9e8e4] rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
      <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 block mb-6">Core Competencies</span>
      <div className="relative z-10 flex flex-wrap gap-2">
        {['Content Writing', 'Copywriting', 'Script Writing', 'UX Writing', 'Editing', 'Visual Storytelling', 'Translation', 'Mentorship'].map((skill) => (
          <span key={skill} className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-stone-600 bg-white/60 backdrop-blur-sm border border-stone-200/50 rounded-full shadow-sm hover:bg-white transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const TrilingualBlock = () => (
    <div className="group space-y-4">
      <div className="inline-flex items-center justify-center p-3 bg-stone-900 text-white rounded-xl transition-transform group-hover:-translate-y-1">
        <Languages className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-stone-900 mb-2">Trilingual Fluency</h4>
        <p className="text-sm text-stone-500 leading-relaxed font-light">
          Seamless localisation and transcreation across <span className="text-stone-900 font-medium">English, Hindi, and Odia</span>. Keeping the meaning, mood, and magic intact.
        </p>
      </div>
    </div>
  );

  const FormatVersatilityBlock = () => (
    <div className="group space-y-4">
      <div className="inline-flex items-center justify-center p-3 bg-white border border-stone-200 text-stone-900 rounded-xl transition-transform group-hover:-translate-y-1 shadow-sm">
        <PenTool className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-stone-900 mb-2">Format Versatility</h4>
        <p className="text-sm text-stone-500 leading-relaxed font-light">
          From long-form editorial features and scripts to micro-copy and visual brand strategy. Adaptive tone for every medium.
        </p>
      </div>
    </div>
  );

  const AboutThisSpaceBlock = () => (
    <div className="relative p-8 bg-[#f3f2ee] rounded-3xl overflow-hidden group border border-stone-100 shadow-sm">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e9e8e4] rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
      <div className="relative space-y-8">
        <div className="w-12 h-px bg-stone-900"></div>
        <div className="space-y-4">
          <h5 className="text-[10px] font-black uppercase tracking-widest text-stone-900 mb-2">About this space</h5>
          <p className="text-sm text-stone-600 leading-relaxed font-light">
            This website is a quiet home for my words. My poems, personal essays, opinions, and reflections live at the center of it. Alongside them, you can also find ways to connect with me, including a dedicated section for my professional work and collaborations.
          </p>
          <p className="text-sm text-stone-900 font-medium italic">
            Read what calls you. Reach out if something feels like it was meant for you.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6">

      {/* MOBILE LAYOUT (lg:hidden) */}
      {/* overflow-hidden clips image to this section — no footer bleed */}
      <div className="lg:hidden relative overflow-hidden -mx-6 px-6">

        {/* Background image: absolute, fills full About section height, face stays at top */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
          <img
            src={HERO_IMAGE}
            alt=""
            className="w-full h-full object-cover object-top"
            style={{ opacity: 0.30, filter: 'grayscale(10%)' }}
          />
          {/* Gradient overlay: lighter at top (face visible), heavier at bottom */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.70) 100%)' }}
          />
        </div>

        {/* Content scrolls over the background image */}
        <div className="relative z-10 space-y-6 pt-1 pb-4 [&_p]:text-justify [&_p]:leading-relaxed">

          {/* 1. About Me */}
          <AboutMeBlock />

          {/* 2. Industry Professional */}
          <IndustryProBlock />

          {/* 3. Core Competencies */}
          <CoreCompetenciesBlock />

          {/* 4. Trilingual Fluency */}
          <div className="border-t border-stone-100/60 pt-4">
            <TrilingualBlock />
          </div>

          {/* 5. Format Versatility */}
          <FormatVersatilityBlock />

          {/* 6. About this space */}
          <AboutThisSpaceBlock />
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (hidden lg:grid) ─────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-12">

        {/* Left Side: Creative Manifesto (Sticky Container) */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-28 space-y-6 py-4 h-full flex flex-col justify-start">
            <AboutThisSpaceBlock />
            <CoreCompetenciesBlock />
            <IndustryProBlock />
          </div>
        </div>

        {/* Right Side: Professional Narrative */}
        <div className="lg:col-span-7 space-y-6 py-4">
          <AboutMeBlock />
          <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-stone-100 !mt-6">
            <TrilingualBlock />
            <FormatVersatilityBlock />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
