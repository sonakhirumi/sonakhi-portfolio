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
        <p>
          Hi, I'm Sonakhi Malla (Rumi), an obsessive overthinking connoisseur who writes, edits, translates, and guides fellow budding word lovers discovering their voice.
        </p>
        <p>
          I have spent the last <span className="font-semibold text-stone-900">five years</span> working with words across <span className="font-semibold text-stone-900">content, copy, scripts, UX writing, visual storytelling, game content, and educational material development</span>. I have learnt to move between forms and languages—<span className="font-semibold text-stone-900">English, Hindi, and Odia</span>—without losing what matters.
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

  const ExperienceBlock = () => (
    <div className="space-y-6 md:space-y-10 mt-16 md:mt-24">
      <div className="flex items-center space-x-3 md:space-x-5">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-stone-900 rounded-full"></div>
        <h2 className="text-xl sm:text-2xl md:text-5xl font-black uppercase tracking-widest text-stone-900">Experience</h2>
      </div>

      <div className="space-y-12 md:space-y-16">

        {/* Menstrupedia */}
        <div className="relative pl-6 md:pl-8 border-l border-stone-200 space-y-4">
          <div className="absolute w-3 h-3 bg-stone-900 rounded-full -left-[6.5px] top-1.5 md:top-2 border-4 border-[#faf9f6]"></div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-stone-900">Content Developer, Senior Content Developer</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base text-stone-500 font-medium tracking-wide mt-1 gap-1 sm:gap-3">
              <span className="uppercase font-bold text-stone-800">Menstrupedia</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>2023 - Present</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <ul className="space-y-2 md:space-y-3 text-stone-600 font-light text-base md:text-lg list-disc pl-4 marker:text-stone-300">
            <li>Co-created 20+ TruBuddy Comic books over 2.5 years. These books are self-development reads designed for children aged 7–12.</li>
            <li>Leading and mentoring a team of 5 writers. This includes providing editorial feedback on manuscripts to strengthen story structure, tone, and consistency across titles.</li>
            <li>Coordinating the drafting, editing, and revision process for multiple titles. This ensures that manuscripts move smoothly toward publication.</li>
            <li>Handling website content and UX writing. This work focuses on improving clarity, structure, and reader engagement across digital platforms.</li>
            <li>Building and maintaining the writer onboarding handbook. It helps new writers understand the publishing workflow and maintain consistent quality.</li>
            <li>Ghostwriting founder bios and brand narratives. These pieces are used across company communication and brand platforms.</li>
            <li>Overseeing English to Hindi translation projects and line editing 5 Hindi editions of TruBuddy books.</li>
            <li>Currently developing new stories for a younger reader segment (ages 4–6) to support the expansion of the TruBuddy publishing list.</li>
            <li>Creating curriculum-aligned educational game content. Current work focuses on material based on CBSE Class 10 Mathematics concepts.</li>
          </ul>
        </div>

        {/* Translator */}
        <div className="relative pl-6 md:pl-8 border-l border-stone-200 space-y-4">
          <div className="absolute w-3 h-3 bg-stone-300 rounded-full -left-[6.5px] top-1.5 md:top-2 border-4 border-[#faf9f6]"></div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-stone-900">Translator</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base text-stone-500 font-medium tracking-wide mt-1 gap-1 sm:gap-3">
              <span className="uppercase font-bold text-stone-800">Independent · Freelance</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>Oct 2023 - Present</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>Remote</span>
            </div>
          </div>
          <ul className="space-y-2 md:space-y-3 text-stone-600 font-light text-base md:text-lg list-disc pl-4 marker:text-stone-300">
            <li>Translating TruBuddy comic books from English to Hindi as part of an ongoing project.</li>
            <li>Translated a Menstrupedia mini comic from English to Odia, maintaining tone, flow, and accessibility for regional readers.</li>
          </ul>
        </div>

        {/* Gubblebums */}
        <div className="relative pl-6 md:pl-8 border-l border-stone-200 space-y-4">
          <div className="absolute w-3 h-3 bg-stone-300 rounded-full -left-[6.5px] top-1.5 md:top-2 border-4 border-[#faf9f6]"></div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-stone-900">Intern - Junior Content Writer</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base text-stone-500 font-medium tracking-wide mt-1 gap-1 sm:gap-3">
              <span className="uppercase font-bold text-stone-800">Gubblebums</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>Feb 2022 - May 2023</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>Remote</span>
            </div>
          </div>
          <ul className="space-y-2 md:space-y-3 text-stone-600 font-light text-base md:text-lg list-disc pl-4 marker:text-stone-300">
            <li>Wrote content for brands across varied niches, including brand books, blogs, captions, website content, ad copies, review responses, YouTube descriptions, and product listings.</li>
            <li>Applied SEO strategies such as keyword research, Quora publishing, backlinking, guest posting, Pinterest pin creation, and directory/product listings.</li>
            <li>Collaborated with clients and creative teams for brand management, including scheduling photoshoots, coordinating feedback, and managing deliverables.</li>
            <li>Handled social media content and scheduling for platforms like Facebook and Instagram.</li>
            <li>Compiled regular performance reports on keyword rankings, Google Ads performance, and social media insights.</li>
          </ul>
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
          <ExperienceBlock />
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ─────────────────────── */}
      <div className="hidden lg:block py-10 relative z-10 [&_p]:text-justify [&_p]:leading-relaxed">
        <AboutMeBlock />
        <ExperienceBlock />
      </div>
    </div>
  );
};

export default About;
