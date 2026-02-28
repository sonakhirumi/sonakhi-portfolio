import React from 'react';
import { ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const AboutMeBlock = () => (
    <div className="space-y-6 md:space-y-10">
      <div className="flex items-center space-x-3 md:space-x-5">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-stone-900 rounded-full"></div>
        <h2 className="text-xl sm:text-2xl md:text-5xl font-black uppercase tracking-widest text-stone-900">About Me</h2>
      </div>
      <div className="prose prose-stone max-w-none space-y-5 md:space-y-8 text-stone-600 leading-relaxed text-base md:text-xl font-light">
        <p className="first-letter:text-6xl md:first-letter:text-7xl first-letter:font-serif first-letter:mr-4 first-letter:float-left first-letter:text-stone-900">
          I have spent the last <span className="font-semibold text-stone-900">five years</span> working with words across <span className="font-semibold text-stone-900">content, copy, scripts, UX, editing, visual storytelling, and translation</span>. I have learnt to move between forms and languages—<span className="font-semibold text-stone-900">English, Hindi, and Odia</span>—without losing what matters.
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
        <div className="font-medium text-stone-900 mt-8 md:mt-12">
          <a
            href="https://topmate.io/sonakhirumi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex items-center gap-2 text-stone-900 hover:text-stone-500 hover:underline underline-offset-4 decoration-stone-900 transition-all cursor-pointer"
          >
            Let's spend some time with words together.
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-stone-400" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* ─── MOBILE LAYOUT ─────────────────────────────────────── */}
      <div className="lg:hidden relative">
        <div className="relative z-10 space-y-6 pb-4 text-stone-800 [&_p]:text-justify [&_p]:leading-relaxed [&_h2]:text-stone-900">
          <AboutMeBlock />
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ─────────────────────── */}
      <div className="hidden lg:block py-10 relative z-10 [&_p]:text-justify [&_p]:leading-relaxed">
        <AboutMeBlock />
      </div>
    </div>
  );
};

export default About;
