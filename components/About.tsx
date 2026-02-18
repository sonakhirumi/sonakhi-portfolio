
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
          <div className="lg:sticky lg:top-28 space-y-8 py-4 h-full flex flex-col justify-start">
            <div className="relative p-10 bg-[#f3f2ee] rounded-3xl overflow-hidden group border border-stone-100 shadow-sm">
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

          </div>
        </div>

        {/* Right Side: Professional Narrative (Condensed Content) */}
        <div className="lg:col-span-7 space-y-8 py-4">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">About Me</h2>
            </div>

          </div>



          <div className="prose prose-stone max-w-none space-y-4 text-stone-600 leading-relaxed text-base md:text-lg font-light">
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
            <p className="font-medium text-stone-900">
              Let’s spend some time with words together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-stone-100 !mt-6">
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

          <div className="flex items-center justify-between pt-4">
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


        </div>
      </div>
    </div>
  );
};

export default About;
