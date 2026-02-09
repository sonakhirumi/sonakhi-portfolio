
import React from 'react';
import { Languages, PenTool, Fingerprint, Compass } from 'lucide-react';

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

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16">

        {/* Left Side: Creative Manifesto (Sticky Container) */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-28 space-y-12 py-4">
            <div className="relative p-10 bg-[#f3f2ee] rounded-3xl overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e9e8e4] rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>

              <div className="relative space-y-8">
                <div className="w-12 h-px bg-stone-900"></div>
                <h4 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight italic">
                  "Words are not just symbols; they are the architecture of our shared reality."
                </h4>
                <p className="text-stone-500 text-sm leading-relaxed font-light">
                  My writing process is anchored in the belief that every narrative deserves a voice that is both academically rigorous and humanly resonant.
                </p>

                <div className="space-y-6 pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 p-2 bg-white rounded-lg shadow-sm">
                      <Fingerprint className="w-4 h-4 text-stone-900" />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-stone-900 mb-1">Authenticity</h5>
                      <p className="text-xs text-stone-500">Unearthing the unique 'DNA' of every story.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 p-2 bg-white rounded-lg shadow-sm">
                      <Compass className="w-4 h-4 text-stone-900" />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-stone-900 mb-1">Precision</h5>
                      <p className="text-xs text-stone-500">Navigating complex cultural contexts with ease.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 border-l border-stone-100">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-300 block mb-4">Core Competencies</span>
              <div className="flex flex-wrap gap-2">
                {['Investigative journalism', 'Content Strategy', 'Ghostwriting', 'UX Copy', 'Script Development', 'Cultural Criticism'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-stone-400 border border-stone-100 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Narrative (Condensed Content) */}
        <div className="lg:col-span-7 space-y-12 py-4">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">Sonakhi Malla (Rumi)</h2>
            </div>

          </div>

          <div className="prose prose-stone max-w-none space-y-6 text-stone-600 leading-relaxed text-base md:text-lg font-light">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-stone-900">
              With over <strong>{yearsWords} years</strong> of professional experience in creating meaningful content across diverse formats and age groups, my work spans <strong>content writing, copywriting, ghostwriting, script writing, editing, visual storytelling, UX writing,</strong> and <strong>trilingual translation</strong> across English, Hindi, and Odia.
            </p>
            <p>
              I have contributed to a wide range of projects that require both creative intuition and editorial clarity to shape compelling narratives and build brand voices that feel honest and human. My focus remains on bridge-building between complex data and human wisdom.
            </p>
            <p>
              I am currently exploring opportunities that provide the creative space to spend more time with words and challenge me to broaden my horizon in the ever-evolving landscape of digital storytelling.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 pt-12 border-t border-stone-100">
            <div className="group space-y-4">
              <div className="inline-flex items-center justify-center p-3 bg-stone-900 text-white rounded-xl transition-transform group-hover:-translate-y-1">
                <Languages className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-stone-900 mb-2">Trilingual Fluency</h4>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  Seamless localization and transcreation across <span className="text-stone-900 font-medium">English, Hindi, and Odia</span>. Preserving nuance across linguistic borders.
                </p>
              </div>
            </div>

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
          </div>

          <div className="flex items-center justify-between pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-stone-${i * 100 + 100}`}></div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-900 flex items-center justify-center text-[10px] text-white font-bold">
                {displayYears}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Professional Experience</span>
              <span className="font-serif italic text-stone-900">Industry seasoned since {startYear}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
