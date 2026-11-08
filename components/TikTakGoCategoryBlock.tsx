import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Folder, FolderOpen, Play, Youtube } from 'lucide-react';
import { TIKTAKGO_CHAPTERS, TikTakGoChapter } from '../data/tiktakgoData';

const TIKTAKGO_DISCLAIMER_SHORT = `The educational videos and curriculum materials displayed here are copyrighted works belonging to TikTakGo, a brand of Menstrupedia Technologies Private Limited. Included for portfolio purposes only.`;

const TikTakGoDisclaimerFull: React.FC = () => (
  <div className="space-y-4">
    <p>
      TikTakGo is an educational gaming platform that is designed to be your bite-sized learning companion to help CBSE Class 10 students master Mathematics through intuitive visual storytelling, problem-solving techniques, and gamified challenges. You can watch the complete series and support the platform on{' '}
      <a href="https://www.youtube.com/@tiktakgo" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline cursor-pointer">YouTube</a>{' '}
      or visit <a href="https://tiktakgo.com/" target="_blank" rel="noopener noreferrer" className="text-[#0056D2] font-bold hover:underline cursor-pointer">tiktakgo.com</a>.
    </p>
    <p>
      All video lessons, curriculum structures, and visual learning materials displayed here are copyrighted works of{' '}
      <a href="https://tiktakgo.com/" target="_blank" rel="noopener noreferrer" className="text-[#0056D2] font-bold hover:underline cursor-pointer">TikTakGo</a>,
      a brand of <a href="https://menstrupedia.com/" target="_blank" rel="noopener noreferrer" className="text-[#E14262] font-bold hover:underline cursor-pointer">Menstrupedia Technologies Private Limited</a>,
      which retains all intellectual property and distribution rights. They are presented solely for portfolio purposes to highlight my contributions as a Content Developer for educational game-based learning modules.
    </p>
  </div>
);

const ChapterFolderItem: React.FC<{ chapter: TikTakGoChapter }> = ({ chapter }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-stone-200/80 rounded-xl overflow-hidden bg-white shadow-xs transition-all hover:border-stone-300">
      {/* Folder Header */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3.5 bg-stone-50/70 hover:bg-stone-100/80 transition-colors text-left gap-3"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-lg bg-blue-50 text-[#0056D2] shrink-0">
            {isOpen ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#0056D2]/10 text-[#0056D2]">
                Chapter {chapter.chapterNumber}
              </span>
              <span className="text-sm font-semibold text-stone-800 truncate">
                {chapter.chapterTitle}
              </span>
            </div>
            <p className="text-[11px] text-stone-400 mt-0.5">
              {chapter.videos.length} {chapter.videos.length === 1 ? 'lesson video' : 'lesson videos'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={chapter.playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            title="Open playlist on YouTube"
            className="p-1.5 text-stone-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <span className="text-stone-400">
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </div>
      </button>

      {/* Videos List */}
      {isOpen && (
        <div className="p-4 bg-white border-t border-stone-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {chapter.videos.map((vid, idx) => (
              <a
                key={vid.id}
                href={vid.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-lg border border-stone-100 overflow-hidden bg-stone-50/40 hover:bg-stone-50 hover:border-blue-200 transition-all shadow-2xs hover:shadow-sm"
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
                  <span className="absolute bottom-1.5 right-1.5 bg-black/75 text-[10px] text-white px-1.5 py-0.5 rounded font-mono">
                    #{idx + 1}
                  </span>
                </div>
                {/* Title */}
                <div className="p-2.5 flex-1 flex flex-col justify-between">
                  <p className="text-xs font-medium text-stone-800 line-clamp-2 group-hover:text-[#0056D2] transition-colors leading-snug">
                    {vid.title}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-stone-400">
                    <span className="flex items-center gap-1 text-red-600 font-semibold">
                      <Youtube className="w-3 h-3" /> YouTube
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-stone-700">
                      Watch <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const TikTakGoCategoryBlock: React.FC<{ defaultOpen?: boolean }> = ({ defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [disclaimerExpanded, setDisclaimerExpanded] = useState(false);
  const totalVideos = TIKTAKGO_CHAPTERS.reduce((sum, ch) => sum + ch.videos.length, 0);

  return (
    <div className="border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
      {/* Header / Toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-4 bg-stone-50 hover:bg-stone-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <a
            href="https://tiktakgo.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="shrink-0 flex items-center gap-2 group"
          >
            <span className="font-extrabold text-xl tracking-tight text-stone-900 group-hover:text-[#0056D2] transition-colors">
              TikTakGo
            </span>
          </a>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
            {totalVideos} videos
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.youtube.com/@tiktakgo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-full transition-colors"
          >
            <Youtube className="w-3.5 h-3.5" /> @tiktakgo
          </a>
          <span className="text-stone-400">
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </div>
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
              {disclaimerExpanded ? 'Show less ?' : 'Read more ?'}
            </button>
          </div>

          {/* Section description */}
          <div className="flex items-center justify-between pb-1 border-b border-stone-100">
            <div>
              <h3 className="font-serif text-lg text-stone-900">Class X CBSE Maths</h3>
              <p className="text-xs text-stone-500">
                Chapter-wise interactive learning concept videos created for the TikTakGo curriculum. Click on any chapter folder to browse the lessons.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@tiktakgo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#0056D2] hover:underline flex items-center gap-1 shrink-0"
            >
              Visit Channel <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Chapter Folders */}
          <div className="space-y-3">
            {TIKTAKGO_CHAPTERS.map(ch => (
              <ChapterFolderItem key={ch.chapterNumber} chapter={ch} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
