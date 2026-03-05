import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Article } from '../types';
import FloatingNotes from './FloatingNotes';

const BASE_URL = 'https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2';
const TRUBUDDY_LOGO = 'https://trubuddy.me/assets/comic-subscription/trubuddy-logo.svg';

const CHARACTERS = [
  'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z',
  'अ', 'आ', 'क', 'ख', 'ग', 'घ', 'च', 'छ', 'ज', 'झ', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह',
  'ଅ', 'ଆ', 'କ', 'ଖ', 'ଗ', 'ଘ', 'ଚ', 'ଛ', 'ଜ', 'ଝ', 'ଟ', 'ଠ', 'ଡ', 'ଢ', 'ଣ', 'ତ', 'ଥ', 'ଦ', 'ଧ', 'ନ', 'ପ', 'ଫ', 'ବ', 'ଭ', 'ମ', 'ଯ', 'ର', 'ଲ', 'ଳ', 'ଶ', 'ଷ', 'ସ', 'ହ'
];

interface BookItem {
  slug: string;
  title: string;
  image: string;
  url: string;
  language: string;
}

// ── Portfolio Categories ──
// Add new categories here in future. Each has a label, logo, and books array.
interface PortfolioCategory {
  id: string;
  label: string;
  logo: string;
  logoAlt: string;
  siteUrl: string;
  books: BookItem[];
}

const TRUBUDDY_BOOKS: BookItem[] = [
  { slug: 'needs-vs-wants', title: 'Needs vs Wants: Gulu Values Money', image: 'https://trubuddy.me/assets/Covers/5.webp', url: 'https://trubuddy.me/c/needs-vs-wants', language: 'English' },
  { slug: 'use-internet-safely', title: 'How to Use the Internet Safely', image: 'https://trubuddy.me/assets/Covers/25.webp', url: 'https://trubuddy.me/c/use-internet-safely', language: 'English' },
  { slug: 'using-time-smart', title: 'Using Time the Smart Way', image: 'https://trubuddy.me/assets/Covers/18.webp', url: 'https://trubuddy.me/c/using-time-smart', language: 'English' },
  { slug: 'friends-shape-us', title: 'How Friends Shape Us', image: 'https://trubuddy.me/assets/Covers/12.webp', url: 'https://trubuddy.me/c/friends-shape-us', language: 'English' },
  { slug: 'talk-confidently', title: 'How to Talk Confidently', image: 'https://trubuddy.me/assets/Covers/6.webp', url: 'https://trubuddy.me/c/talk-confidently', language: 'English' },
  { slug: 'messy-to-organised', title: 'From Messy to Organised', image: 'https://trubuddy.me/assets/Covers/23.webp', url: 'https://trubuddy.me/c/messy-to-organised', language: 'English' },
  { slug: 'bounce-from-failure', title: 'Bounce Back from Failure', image: 'https://trubuddy.me/assets/Covers/11.webp', url: 'https://trubuddy.me/c/bounce-from-failure', language: 'English' },
  { slug: 'deal-with-challenges', title: 'How to Deal with Challenges', image: 'https://trubuddy.me/assets/Covers/26.webp', url: 'https://trubuddy.me/c/deal-with-challenges', language: 'English' },
  { slug: 'good-eating-habits', title: 'Eating Habits for Good Health', image: 'https://trubuddy.me/assets/Covers/24.webp', url: 'https://trubuddy.me/c/good-eating-habits', language: 'English' },
  { slug: 'overcome-screen-addiction', title: 'Mira Overcomes Screen Addiction', image: 'https://trubuddy.me/assets/Covers/30.webp', url: 'https://trubuddy.me/c/overcome-screen-addiction', language: 'English' },
  { slug: 'art-make-friends', title: 'The Art of Making Friends', image: 'https://trubuddy.me/assets/Covers/20.webp', url: 'https://trubuddy.me/c/art-make-friends', language: 'English' },
  { slug: 'talk-about-mistake', title: 'Made a Mistake? How to Talk About It', image: 'https://trubuddy.me/assets/Covers/15.webp', url: 'https://trubuddy.me/c/talk-about-mistake', language: 'English' },
  { slug: 'learn-about-money', title: 'Learn about Money with Gulu', image: 'https://trubuddy.me/assets/Covers/21.webp', url: 'https://trubuddy.me/c/learn-about-money', language: 'English' },
  { slug: 'junk-food-truth', title: 'Gulu Finds the Truth about Junk Food', image: 'https://trubuddy.me/assets/Covers/16.webp', url: 'https://trubuddy.me/c/junk-food-truth', language: 'English' },
  { slug: 'memorisation-made-easy', title: 'Memorisation Made Easy', image: 'https://trubuddy.me/assets/Covers/14.webp', url: 'https://trubuddy.me/c/memorisation-made-easy', language: 'English' },
  { slug: 'learns-healthy-food', title: 'Mira Learns about Healthy Food', image: 'https://trubuddy.me/assets/Covers/22.webp', url: 'https://trubuddy.me/c/learns-healthy-food', language: 'English' },
  { slug: 'good-habits', title: 'How to Stick to Good Habits', image: 'https://trubuddy.me/assets/Covers/8.webp', url: 'https://trubuddy.me/c/good-habits', language: 'English' },
  { slug: 'handle-cash-safely', title: 'Mira Learns to Handle Cash Safely', image: 'https://trubuddy.me/assets/Covers/19.webp', url: 'https://trubuddy.me/c/handle-cash-safely', language: 'English' },
  { slug: 'how-to-read', title: 'How to Read for Better Learning', image: 'https://trubuddy.me/assets/Covers/2.webp', url: 'https://trubuddy.me/c/how-to-read', language: 'English' },
  { slug: 'how-build-willpower', title: 'How to Build Willpower', image: 'https://trubuddy.me/assets/Covers/17.webp', url: 'https://trubuddy.me/c/how-build-willpower', language: 'English' },
];

const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: 'trubuddy',
    label: 'TruBuddy',
    logo: TRUBUDDY_LOGO,
    logoAlt: 'TruBuddy',
    siteUrl: 'https://trubuddy.me',
    books: TRUBUDDY_BOOKS,
  },
  // ← Add future categories here, e.g. { id: 'hindi-press', label: 'Hindi Press', logo: '...', books: [...] }
];

// ── Book Card ──
const BookCard: React.FC<{ book: BookItem }> = ({ book }) => (
  <a href={book.url} target="_blank" rel="noopener noreferrer" className="group block">
    <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 bg-[#f5f5f0]">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/50 transition-all duration-300 flex items-center justify-center">
        <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
          Read <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </div>
    <div className="mt-2.5 space-y-0.5 px-0.5">
      <p className="text-xs font-semibold text-stone-700 leading-snug line-clamp-2 group-hover:text-stone-900 transition-colors">
        {book.title}
      </p>
    </div>
  </a>
);

// ── Under Construction Banner ──
const UnderConstruction: React.FC<{ message?: string }> = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-20 px-6 text-center space-y-4 border border-dashed border-stone-200 rounded-2xl bg-stone-50">
    <span className="text-4xl">🚧</span>
    <p className="font-serif text-xl text-stone-500 italic">Under Construction</p>
    {message && <p className="text-xs text-stone-400 max-w-xs leading-relaxed">{message}</p>}
    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-300">Coming soon</p>
  </div>
);

// ── Portfolio Category Block (collapsible) ──
const DISCLAIMER_SHORT = `The books and visual materials displayed here are copyrighted works belonging to TruBuddy, a brand of Menstrupedia Technologies Private Limited. Included for portfolio purposes only.`;
const DISCLAIMER_FULL = `The books and visual materials displayed in this section are copyrighted works belonging to TruBuddy, a brand of Menstrupedia Technologies Private Limited.

These materials are included here solely for portfolio and presentation purposes to highlight my contributions as part of the creative team. I currently work with the organisation as a Senior Content Developer, and have been involved in the development of these books as part of my professional responsibilities. My contributions appear in the credit sections under my pen name Sonakhi Rumi.

All intellectual property rights, including copyrights and distribution rights, remain with TruBuddy / Menstrupedia Technologies Private Limited.

TruBuddy books are thoughtfully designed self-development comics for children, combining storytelling, relatable characters, and engaging visuals to support emotional learning, confidence building, and life skills in young readers. If these books resonate with you, I strongly encourage supporting the work by purchasing the original titles through TruBuddy's website.`;

const PortfolioCategoryBlock: React.FC<{ category: PortfolioCategory; language: string; defaultOpen?: boolean }> = ({ category, language, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [disclaimerExpanded, setDisclaimerExpanded] = useState(false);

  const filtered = language === 'All' ? category.books : category.books.filter(b => b.language === language);
  if (filtered.length === 0) return null;

  // First row = 6 books on xl, 5 on lg, 4 on md, 3 on sm, 2 on mobile
  // We'll show 6 as the conservative "first row" max
  const FIRST_ROW = 6;
  const visibleBooks = showAllBooks ? filtered : filtered.slice(0, FIRST_ROW);

  return (
    <div className="border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
      {/* Header / Toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-4 bg-stone-50 hover:bg-stone-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <a
            href={category.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="shrink-0"
          >
            <img
              src={category.logo}
              alt={category.logoAlt}
              className="h-7 object-contain hover:opacity-75 transition-opacity"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </a>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
            {filtered.length} {filtered.length === 1 ? 'book' : 'books'}
          </span>
        </div>
        <span className="text-stone-400">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>

      {open && (
        <div className="p-6 pt-4 space-y-5">
          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4 text-xs text-stone-600 leading-relaxed space-y-2">
            <p className="font-bold text-[10px] uppercase tracking-widest text-amber-700">Disclaimer</p>
            <p className="whitespace-pre-line text-justify">
              {disclaimerExpanded ? DISCLAIMER_FULL : DISCLAIMER_SHORT}
            </p>
            <button
              onClick={() => setDisclaimerExpanded(d => !d)}
              className="text-[10px] font-bold uppercase tracking-widest text-amber-600 hover:text-amber-800 transition-colors underline underline-offset-4"
            >
              {disclaimerExpanded ? 'Show less ↑' : 'Read more ↓'}
            </button>
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {visibleBooks.map(book => <BookCard key={book.slug} book={book} />)}
          </div>

          {/* See more / less */}
          {filtered.length > FIRST_ROW && (
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setShowAllBooks(s => !s)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-stone-200 bg-white text-[10px] font-bold uppercase tracking-widest text-stone-500 hover:border-stone-900 hover:text-stone-900 transition-all"
              >
                {showAllBooks
                  ? <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
                  : <><ChevronDown className="w-3.5 h-3.5" /> See all {filtered.length} books</>
                }
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ── Main Page ──
const AllArticlesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { category: routeCategory, subcategory: routeSubcategory } = useParams();
  const navigate = useNavigate();

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'all' | 'portfolio' | 'musings'>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [categories, setCategories] = useState<{ id: number, name: string }[]>([]);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const text = stripHtml(content);
    const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;
    return `${Math.ceil(wordCount / wordsPerMinute)} min read`;
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        const catRes = await fetch(`${BASE_URL}/categories?_=${Date.now()}`);
        const catsData = await catRes.json();
        let actualCategories: { id: number, name: string }[] = [];
        if (Array.isArray(catsData)) {
          const processed = catsData
            .filter((c: any) => !['hindi', 'uncategorized'].includes(c.name.toLowerCase()))
            .map((c: any) => {
              if (c.name.toLowerCase() === 'odia') return { ...c, name: 'ଓଡ଼ିଆ' };
              if (c.name.toLowerCase() === 'english') return { ...c, name: 'English' };
              return c;
            })
            .sort((a: any, b: any) => {
              const isDevanagari = (s: string) => /[\u0900-\u097F]/.test(s);
              if (a.name.toLowerCase() === 'english') return -1;
              if (b.name.toLowerCase() === 'english') return 1;
              if (isDevanagari(a.name) && !isDevanagari(b.name)) return -1;
              if (!isDevanagari(a.name) && isDevanagari(b.name)) return 1;
              return 0;
            });
          setCategories(processed);
          actualCategories = processed;
        }

        const paramCategory = routeCategory || searchParams.get('category');
        if (paramCategory) {
          const lp = paramCategory.toLowerCase();
          if (['portfolio', 'musings', 'professional', 'personal'].includes(lp)) {
            setViewMode(lp === 'professional' || lp === 'portfolio' ? 'portfolio' : 'musings');
            // Check subcategory for language
            if (routeSubcategory) {
              const sub = actualCategories.find(c => c.name.toLowerCase() === routeSubcategory.toLowerCase());
              if (sub) setSelectedLanguage(sub.name);
            } else {
              setSelectedLanguage('All');
            }
          } else {
            const match = actualCategories.find(c => c.name.toLowerCase() === lp);
            if (match) setSelectedLanguage(match.name);
            else if (lp === 'all') setSelectedLanguage('All');
          }
        }

        const postRes = await fetch(`${BASE_URL}/posts?_embed&per_page=100&_=${Date.now()}`);
        const postsData = await postRes.json();
        const mapped: Article[] = postsData.map((post: any) => {
          const terms = post._embedded?.['wp:term']?.[0] || [];
          let catName = terms.length > 0 ? terms[0].name : 'STORY';
          if (catName.toLowerCase() === 'english') catName = 'English';
          if (catName.toLowerCase() === 'odia') catName = 'ଓଡ଼ିଆ';
          return {
            id: post.id.toString(),
            title: stripHtml(post.title.rendered),
            excerpt: stripHtml(post.excerpt.rendered).substring(0, 160) + '...',
            category: catName,
            date: new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            readTime: calculateReadTime(post.content.rendered),
            imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || `https://picsum.photos/800/600?random=${post.id}`,
          };
        });
        setArticles(mapped);
      } catch (err) {
        console.error("Archive fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllData();
  }, [searchParams, routeCategory]);

  const updateFilter = (mode: 'all' | 'portfolio' | 'musings', lang: string) => {
    setViewMode(mode);
    setSelectedLanguage(lang);
    if (mode === 'all') navigate('/my-archive');
    else navigate(`/my-archive/${mode}${lang !== 'All' ? `/${lang.toLowerCase()}` : ''}`);
  };

  return (
    <div className="bg-white min-h-[80vh]">
      {/* ── Header ── */}
      <div className="bg-[#f8f7f4] border-b border-stone-100 pt-10 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => {
            const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            return (
              <span key={i} className="absolute text-stone-400 font-serif"
                style={{ left: `${Math.random() * 100}%`, top: -30, fontSize: `${10 + Math.random() * 14}px`, opacity: 0.1 + Math.random() * 0.2, animation: `fall ${3 + Math.random() * 4}s linear ${Math.random() * 5}s infinite` }}>
                {char}
              </span>
            );
          })}
        </div>
        <style>{`
          @keyframes fall { 0%{transform:translateY(-20px) rotate(0deg);} 100%{transform:translateY(600px) rotate(10deg);} }
          .animate-fadeIn { animation: fadeIn 0.35s ease-out forwards; }
          @keyframes fadeIn { from{opacity:0;transform:translateY(6px);} to{opacity:1;transform:translateY(0);} }
        `}</style>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-3">
              <h1 className="font-serif text-6xl md:text-8xl text-stone-900 leading-none">My Archive.</h1>
              <p className="text-stone-500 text-lg max-w-xl font-light italic">Words and a lot of me.</p>
            </div>

            <div className="flex flex-col gap-5 lg:items-end">
              {/* Primary Tabs */}
              <div className="flex flex-wrap gap-2 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 shadow-inner">
                {(['all', 'portfolio', 'musings'] as const).map(mode => (
                  <button key={mode}
                    onClick={() => updateFilter(mode, 'All')}
                    className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.18em] transition-all ${viewMode === mode ? 'bg-white text-stone-900 shadow-md' : 'text-stone-400 hover:text-stone-900'}`}>
                    {mode === 'all' ? 'All Archives' : mode}
                  </button>
                ))}
              </div>

              {/* Language sub-filters */}
              {viewMode !== 'all' && (
                <div className="flex flex-wrap items-center gap-3 animate-fadeIn">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Language:</span>
                  <div className="flex flex-wrap gap-2">
                    {['All', ...categories.map(c => c.name)].map(lang => (
                      <button key={lang}
                        onClick={() => setSelectedLanguage(lang)}
                        className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${selectedLanguage === lang ? 'bg-stone-900 text-white shadow-md' : 'bg-white text-stone-400 border border-stone-200 hover:border-stone-900'}`}>
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse space-y-3">
                <div className="aspect-[3/4] bg-stone-100 rounded-xl" />
                <div className="h-4 bg-stone-100 w-3/4 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ── PORTFOLIO ── */}
            {(viewMode === 'all' || viewMode === 'portfolio') && (
              <section className="space-y-5">
                {viewMode === 'all' && (
                  <div className="flex items-center gap-4">
                    <h2 className="font-serif text-3xl text-stone-900">Portfolio</h2>
                    <div className="flex-1 h-px bg-stone-100" />
                    <button onClick={() => updateFilter('portfolio', 'All')}
                      className="text-[9px] font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
                      View all →
                    </button>
                  </div>
                )}
                {/* Category blocks — add more PORTFOLIO_CATEGORIES entries for future categories */}
                {PORTFOLIO_CATEGORIES.map(cat => (
                  <PortfolioCategoryBlock
                    key={cat.id}
                    category={cat}
                    language={selectedLanguage}
                    defaultOpen={true}
                  />
                ))}
                {/* Show Under Construction for languages that have no portfolio content yet */}
                {selectedLanguage !== 'All' && selectedLanguage !== 'English' && (
                  <UnderConstruction message={`${selectedLanguage} portfolio content is being curated. It'll be here when ready.`} />
                )}
              </section>
            )}

            {/* ── MUSINGS ── */}
            {(viewMode === 'all' || viewMode === 'musings') && (
              <section className="space-y-5">
                {viewMode === 'all' && (
                  <div className="flex items-center gap-4">
                    <h2 className="font-serif text-3xl text-stone-900">Musings</h2>
                    <div className="flex-1 h-px bg-stone-100" />
                    <button onClick={() => updateFilter('musings', 'All')}
                      className="text-[9px] font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
                      View all →
                    </button>
                  </div>
                )}

                {/*
                  TODO [HIDDEN — UNHIDE WHEN READY]:
                  The English musing "Crippled by Love" exists in local data (notesData in FloatingNotes.tsx)
                  and is intentionally hidden here until the user asks to make it public.
                  To restore: replace the <UnderConstruction /> below with <FloatingNotes category={selectedLanguage} />
                */}
                <UnderConstruction message="Musings are being curated. They'll be here when ready." />

              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllArticlesPage;
