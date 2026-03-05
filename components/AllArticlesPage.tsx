import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock, Hammer, ExternalLink } from 'lucide-react';
import { Article } from '../types';
import FloatingNotes, { notesData } from './FloatingNotes';

const BASE_URL = 'https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2';

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

const TRUBUDDY_BOOKS: BookItem[] = [
  { slug: 'needs-vs-wants', title: 'Needs vs Wants: Gulu Values Money', image: 'https://trubuddy.me/assets/Meta-data/5.jpg?version=18012025', url: 'https://trubuddy.me/c/needs-vs-wants', language: 'English' },
  { slug: 'use-internet-safely', title: 'How to Use the Internet Safely', image: 'https://trubuddy.me/assets/Meta-data/25.jpg?version=18012025', url: 'https://trubuddy.me/c/use-internet-safely', language: 'English' },
  { slug: 'using-time-smart', title: 'Using Time the Smart Way', image: 'https://trubuddy.me/assets/Meta-data/18.jpg?version=18012025', url: 'https://trubuddy.me/c/using-time-smart', language: 'English' },
  { slug: 'friends-shape-us', title: 'How Friends Shape Us', image: 'https://trubuddy.me/assets/Meta-data/12.jpg?version=18012025', url: 'https://trubuddy.me/c/friends-shape-us', language: 'English' },
  { slug: 'talk-confidently', title: 'How to Talk Confidently', image: 'https://trubuddy.me/assets/Meta-data/6.jpg?version=18012025', url: 'https://trubuddy.me/c/talk-confidently', language: 'English' },
  { slug: 'messy-to-organised', title: 'From Messy to Organised', image: 'https://trubuddy.me/assets/Meta-data/23.jpg?version=18012025', url: 'https://trubuddy.me/c/messy-to-organised', language: 'English' },
  { slug: 'bounce-from-failure', title: 'Bounce Back from Failure', image: 'https://trubuddy.me/assets/Meta-data/11.jpg?version=18012025', url: 'https://trubuddy.me/c/bounce-from-failure', language: 'English' },
  { slug: 'deal-with-challenges', title: 'How to Deal with Challenges', image: 'https://trubuddy.me/assets/Meta-data/26.jpg?version=18012025', url: 'https://trubuddy.me/c/deal-with-challenges', language: 'English' },
  { slug: 'good-eating-habits', title: 'Eating Habits for Good Health', image: 'https://trubuddy.me/assets/Meta-data/24.jpg?version=18012025', url: 'https://trubuddy.me/c/good-eating-habits', language: 'English' },
  { slug: 'overcome-screen-addiction', title: 'Mira Overcomes Screen Addiction', image: 'https://trubuddy.me/assets/Meta-data/30.jpg?version=18012025', url: 'https://trubuddy.me/c/overcome-screen-addiction', language: 'English' },
  { slug: 'art-make-friends', title: 'The Art of Making Friends', image: 'https://trubuddy.me/assets/Meta-data/20.jpg?version=18012025', url: 'https://trubuddy.me/c/art-make-friends', language: 'English' },
  { slug: 'talk-about-mistake', title: 'Made a Mistake? How to Talk About It', image: 'https://trubuddy.me/assets/Meta-data/15.jpg?version=18012025', url: 'https://trubuddy.me/c/talk-about-mistake', language: 'English' },
  { slug: 'learn-about-money', title: 'Learn about Money with Gulu', image: 'https://trubuddy.me/assets/Meta-data/21.jpg?version=18012025', url: 'https://trubuddy.me/c/learn-about-money', language: 'English' },
  { slug: 'junk-food-truth', title: 'Gulu Finds the Truth about Junk Food', image: 'https://trubuddy.me/assets/Meta-data/16.jpg?version=18012025', url: 'https://trubuddy.me/c/junk-food-truth', language: 'English' },
  { slug: 'memorisation-made-easy', title: 'Memorisation Made Easy', image: 'https://trubuddy.me/assets/Meta-data/14.jpg?version=18012025', url: 'https://trubuddy.me/c/memorisation-made-easy', language: 'English' },
  { slug: 'learns-healthy-food', title: 'Mira Learns about Healthy Food', image: 'https://trubuddy.me/assets/Meta-data/22.jpg?version=18012025', url: 'https://trubuddy.me/c/learns-healthy-food', language: 'English' },
  { slug: 'good-habits', title: 'How to Stick to Good Habits', image: 'https://trubuddy.me/assets/Meta-data/8.jpg?version=18012025', url: 'https://trubuddy.me/c/good-habits', language: 'English' },
  { slug: 'handle-cash-safely', title: 'Mira Learns to Handle Cash Safely', image: 'https://trubuddy.me/assets/Meta-data/19.jpg?version=18012025', url: 'https://trubuddy.me/c/handle-cash-safely', language: 'English' },
  { slug: 'how-to-read', title: 'How to Read for Better Learning', image: 'https://trubuddy.me/assets/Meta-data/2.jpg?version=18012025', url: 'https://trubuddy.me/c/how-to-read', language: 'English' },
  { slug: 'how-build-willpower', title: 'How to Build Willpower', image: 'https://trubuddy.me/assets/Meta-data/17.jpg?version=18012025', url: 'https://trubuddy.me/c/how-build-willpower', language: 'English' },
];

const AllArticlesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { category: routeCategory } = useParams();
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
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);

        const catRes = await fetch(`${BASE_URL}/categories?_=${Date.now()}`);
        const catsData = await catRes.json();
        let actualCategories: { id: number, name: string }[] = [];
        if (Array.isArray(catsData)) {
          const processedCats = catsData
            .filter((c: any) => {
              const name = c.name.toLowerCase();
              return name !== 'hindi' && name !== 'uncategorized';
            })
            .map((c: any) => {
              if (c.name.toLowerCase() === 'odia') return { ...c, name: 'ଓଡ଼ିଆ' };
              if (c.name.toLowerCase() === 'english') return { ...c, name: 'English' };
              return c;
            })
            .sort((a: any, b: any) => {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();
              const isDevanagari = (s: string) => /[\u0900-\u097F]/.test(s);
              if (nameA === 'english' && nameB !== 'english') return -1;
              if (nameA !== 'english' && nameB === 'english') return 1;
              if (isDevanagari(nameA) && !isDevanagari(nameB)) return -1;
              if (!isDevanagari(nameA) && isDevanagari(nameB)) return 1;
              return 0;
            });

          setCategories(processedCats);
          actualCategories = processedCats;
        }

        const paramCategory = routeCategory || searchParams.get('category');
        if (paramCategory) {
          const lowerParam = paramCategory.toLowerCase();
          if (lowerParam === 'portfolio' || lowerParam === 'musings' || lowerParam === 'professional' || lowerParam === 'personal') {
            const mappedMode: 'portfolio' | 'musings' = (lowerParam === 'professional' || lowerParam === 'portfolio') ? 'portfolio' : 'musings';
            setViewMode(mappedMode);
            setSelectedLanguage('All');
          } else {
            const match = actualCategories.find(c => c.name.toLowerCase() === paramCategory.toLowerCase());
            if (match) {
              setSelectedLanguage(match.name);
            } else if (paramCategory.toLowerCase() === 'all') {
              setSelectedLanguage('All');
            }
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

  // Filter books for portfolio
  const filteredBooks = selectedLanguage === 'All'
    ? TRUBUDDY_BOOKS
    : TRUBUDDY_BOOKS.filter(b => b.language === selectedLanguage);

  const updateFilter = (mode: 'all' | 'portfolio' | 'musings', lang: string) => {
    setViewMode(mode);
    setSelectedLanguage(lang);
    if (mode === 'all') {
      navigate('/my-archive');
    } else {
      const path = lang === 'All' ? mode : `${mode}/${lang.toLowerCase()}`;
      navigate(`/my-archive/${path}`);
    }
  };

  return (
    <div className="bg-white min-h-[80vh]">
      <div className="bg-[#f8f7f4] border-b border-stone-100 pt-10 pb-12 relative overflow-hidden">
        {/* Falling Letters Animation */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => {
            const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            const left = Math.random() * 100;
            const duration = 3 + Math.random() * 4;
            const delay = Math.random() * 5;
            const size = 10 + Math.random() * 14;
            const opacity = 0.1 + Math.random() * 0.2;
            return (
              <span
                key={i}
                className="absolute text-stone-400 font-serif"
                style={{ left: `${left}%`, top: -30, fontSize: `${size}px`, opacity, animation: `fall ${duration}s linear ${delay}s infinite` }}
              >
                {char}
              </span>
            );
          })}
        </div>
        <style>{`
          @keyframes fall {
            0% { transform: translateY(-20px) rotate(0deg); }
            100% { transform: translateY(600px) rotate(10deg); }
          }
          .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-3">
              <h1 className="font-serif text-6xl md:text-8xl text-stone-900 leading-none">My Archive.</h1>
              <p className="text-stone-500 text-lg max-w-xl font-light italic">Words and a lot of me.</p>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              {/* Primary Tabs */}
              <div className="flex bg-stone-100 p-1.5 rounded-full border border-stone-200 shadow-inner">
                <button
                  onClick={() => updateFilter('all', 'All')}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${viewMode === 'all' ? 'bg-white text-stone-900 shadow-md scale-105' : 'text-stone-400 hover:text-stone-900'}`}
                >
                  All Archives
                </button>
                <button
                  onClick={() => updateFilter('portfolio', 'All')}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${viewMode === 'portfolio' ? 'bg-white text-stone-900 shadow-md scale-105' : 'text-stone-400 hover:text-stone-900'}`}
                >
                  portfolio
                </button>
                <button
                  onClick={() => updateFilter('musings', 'All')}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${viewMode === 'musings' ? 'bg-white text-stone-900 shadow-md scale-105' : 'text-stone-400 hover:text-stone-900'}`}
                >
                  musings
                </button>
              </div>

              {/* Language sub-filters */}
              {viewMode !== 'all' && (
                <div className="flex items-center gap-4 animate-fadeIn">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Language:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedLanguage('All')}
                      className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${selectedLanguage === 'All' ? 'bg-stone-900 text-white shadow-md' : 'bg-white text-stone-400 border border-stone-200 hover:border-stone-900'}`}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedLanguage(cat.name)}
                        className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${selectedLanguage === cat.name ? 'bg-stone-900 text-white shadow-md' : 'bg-white text-stone-400 border border-stone-200 hover:border-stone-900'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="animate-pulse space-y-3">
                <div className="aspect-[3/4] bg-stone-100 rounded-xl"></div>
                <div className="h-4 bg-stone-100 w-3/4 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ── PORTFOLIO BOOKS ── */}
            {(viewMode === 'all' || viewMode === 'portfolio') && (
              <div className="space-y-8">
                {viewMode === 'all' && (
                  <div className="flex items-center gap-4">
                    <h2 className="font-serif text-3xl text-stone-900">Portfolio</h2>
                    <div className="flex-1 h-px bg-stone-100"></div>
                    <button onClick={() => updateFilter('portfolio', 'All')} className="text-[9px] font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
                      View all →
                    </button>
                  </div>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {filteredBooks.map((book) => (
                    <a
                      key={book.slug}
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500 bg-stone-100">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/60 transition-all duration-300 flex items-end p-3">
                          <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                            Read <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1">
                        <p className="text-xs font-semibold text-stone-700 leading-snug line-clamp-2 group-hover:text-stone-900 transition-colors">
                          {book.title}
                        </p>
                        <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">TruBuddy</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* ── MUSINGS ── */}
            {(viewMode === 'all' || viewMode === 'musings') && (
              <div className={`space-y-8 ${viewMode === 'all' ? 'mt-16 pt-16 border-t border-stone-100' : ''}`}>
                {viewMode === 'all' && (
                  <div className="flex items-center gap-4">
                    <h2 className="font-serif text-3xl text-stone-900">Musings</h2>
                    <div className="flex-1 h-px bg-stone-100"></div>
                    <button onClick={() => updateFilter('musings', 'All')} className="text-[9px] font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
                      View all →
                    </button>
                  </div>
                )}
                <FloatingNotes category={selectedLanguage} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllArticlesPage;
