import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Play, Youtube } from 'lucide-react';
import { TIKTAKGO_CHAPTERS, TikTakGoChapter } from '../data/tiktakgoData';

const TIKTAKGO_DISCLAIMER_SHORT = `The educational videos and curriculum materials displayed here are copyrighted works belonging to TikTakGo, a brand of Menstrupedia Technologies Private Limited. Included for portfolio purposes only.`;

const TikTakGoDisclaimerFull: React.FC = () => (
  <div className="space-y-4">
    <p>
      TikTakGo is an educational gaming platform that is designed to be your bite-sized learning companion to help CBSE Class 10 students master Mathematics through intuitive visual storytelling, problem-solving techniques, and gamified challenges. You can watch the complete series and support the platform on{' '}
      <a href="https://www.youtube.com/@tiktakgo" target="_blank" rel="noopener noreferrer" className="text-[#0056D2] font-bold hover:underline cursor-pointer">YouTube</a>{' '}
      or visit <a href="https://tiktakgo.com/" target="_blank" rel="noopener noreferrer" className="text-[#0056D2] font-bold hover:underline cursor-pointer">tiktakgo.com</a>.
    </p>
    <p>
      All video lessons, curriculum structures, and visual learning materials displayed here are copyrighted works of{' '}
      <a href="https://tiktakgo.com/" target="_blank" rel="noopener noreferrer" className="text-[#0056D2] font-bold hover:underline cursor-pointer">TikTakGo</a>,
      a brand of <a href="https://menstrupedia.com/" target="_blank" rel="noopener noreferrer" className="text-[#0056D2] font-bold hover:underline cursor-pointer">Menstrupedia Technologies Private Limited</a>,
      which retains all intellectual property and distribution rights. They are presented solely for portfolio purposes to highlight my contributions as a Content Developer for educational game-based learning modules.
    </p>
  </div>
);

export const TikTakGoCategoryBlock: React.FC<{ defaultOpen?: boolean }> = ({ defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [disclaimerExpanded, setDisclaimerExpanded] = useState(false);
  const [activeChapterNum, setActiveChapterNum] = useState<number>(1);
  const totalVideos = TIKTAKGO_CHAPTERS.reduce((sum, ch) => sum + ch.videos.length, 0);

  const activeChapter = TIKTAKGO_CHAPTERS.find(c => c.chapterNumber === activeChapterNum) || TIKTAKGO_CHAPTERS[0];

  return (
    <div className="border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
      {/* Header / Toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-4 bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <a
            href="https://tiktakgo.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="shrink-0 flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
          >
            <span
              className="text-2xl tracking-tight font-extrabold transition-opacity hover:opacity-85"
              style={{
                fontFamily: "'Lexend', sans-serif",
                color: '#0056D2',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              TikTakGo
          </span>
          </a>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
            {totalVideos} videos
        </span>
        </div>
        <span className="text-stone-400">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>

      {open && (
        <div className="p-6 pt-4 space-y-5">
          {/* Disclaimer & Copyright Statement */}
          <div className="bg-blue-50/60 border border-blue-100 rounded-xl px-5 py-4 text-xs text-stone-600 leading-relaxed space-y-2">
            <p className="font-bold text-[10px] uppercase tracking-widest text-[#0056D2]">Disclaimer</p>
            <div className="whitespace-pre-line text-justify">
              {disclaimerExpanded ? <TikTakGoDisclaimerFull /> : TIKTAKGO_DISCLAIMER_SHORT}
            </div>
            <button
              onClick={() => setDisclaimerExpanded(d => !d)}
              className="text-[10px] font-bold uppercase tracking-widest text-[#0056D2] hover:text-blue-900 transition-colors underline underline-offset-4 cursor-pointer"
            >
              {disclaimerExpanded ? 'Show less ↑' : 'Read more ↓'}
            </button>
          </div>

          {/* Section description */}
          <div className="flex items-center justify-between pb-1 border-b border-stone-100">
            <h3 className="font-serif text-lg text-stone-900">Class X CBSE Maths</h3>
            <a
              href="https://www.youtube.com/@tiktakgo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#0056D2] hover:underline flex items-center gap-1 shrink-0"
            >
              Visit Channel <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Master-Detail / Side-by-Side Two-Panel Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            {/* Left: Chapter Selector Sidebar (5 cols) */}
            <div className="md:col-span-5 lg:col-span-4 space-y-1.5 border border-stone-200/80 rounded-2xl p-2.5 bg-stone-50/50 max-h-[620px] overflow-y-auto">
              <div className="px-2 py-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-stone-400">
                <span>All Chapters</span>
                <span>Select to view</span>
              </div>
              {TIKTAKGO_CHAPTERS.map(ch => {
                const isSelected = ch.chapterNumber === activeChapterNum;
                return (
                  <button
                    key={ch.chapterNumber}
                    onClick={() => setActiveChapterNum(ch.chapterNumber)}
                    className={`w-full flex items-center px-3.5 py-2.5 rounded-xl transition-all text-left gap-2.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0056D2] text-white shadow-sm font-semibold'
                        : 'bg-white hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-100'
                    }`}
                  >
                    <span className={`text-xs font-mono font-bold shrink-0 ${isSelected ? 'text-blue-100' : 'text-stone-400'}`}>
                      {ch.chapterNumber}.
                  </span>
                    <span className="text-xs truncate block font-medium">
                      {ch.chapterTitle}
                  </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Active Chapter Video Lessons (7 cols) */}
            <div className="md:col-span-7 lg:col-span-8 border border-stone-200/80 rounded-2xl p-5 bg-white shadow-2xs">
              {/* Active Chapter Header */}
              <div className="flex items-start justify-between pb-4 border-b border-stone-100 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#0056D2]/10 text-[#0056D2]">
                      Chapter {activeChapter.chapterNumber} of 14
                  </span>
                    <span className="text-xs text-stone-400">
                      {activeChapter.videos.length} {activeChapter.videos.length === 1 ? 'lesson video' : 'lesson videos'}
                  </span>
                  </div>
                  <h4 className="font-serif text-xl text-stone-900 font-semibold mt-1">
                    {activeChapter.chapterTitle}
                  </h4>
                </div>
                <a
                  href={activeChapter.playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] font-bold text-[#0056D2] hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3.5 py-1.5 rounded-full transition-colors shrink-0 cursor-pointer"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-600" /> Open Playlist <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Video Grid for Active Chapter */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[520px] overflow-y-auto pr-1">
                {activeChapter.videos.map((vid, idx) => (
                  <a
                    key={vid.id}
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border border-stone-100 overflow-hidden bg-stone-50/40 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden bg-stone-900/10">
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-[10px] text-white px-1.5 py-0.5 rounded font-mono">
                        Lesson {idx + 1}
                    </span>
                    </div>

                    {/* Title */}
                    <div className="p-3 flex-1 flex flex-col justify-between">
                      <p className="text-xs font-semibold text-stone-800 line-clamp-2 group-hover:text-[#0056D2] transition-colors leading-snug">
                        {vid.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
