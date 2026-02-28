import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, ArrowRight, Clock, Hammer } from 'lucide-react';
import { Article } from '../types';

const BASE_URL = 'https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2';

const CHARACTERS = [
  // English
  'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z',
  // Hindi
  'अ', 'आ', 'क', 'ख', 'ग', 'घ', 'च', 'छ', 'ज', 'झ', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह',
  // Odia
  'ଅ', 'ଆ', 'କ', 'ଖ', 'ଗ', 'ଘ', 'ଚ', 'ଛ', 'ଜ', 'ଝ', 'ଟ', 'ଠ', 'ଡ', 'ଢ', 'ଣ', 'ତ', 'ଥ', 'ଦ', 'ଧ', 'ନ', 'ପ', 'ଫ', 'ବ', 'ଭ', 'ମ', 'ଯ', 'ର', 'ଲ', 'ଳ', 'ଶ', 'ଷ', 'ସ', 'ହ'
];

const AllArticlesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category: routeCategory } = useParams();
  const navigate = useNavigate();

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
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

        // Fetch categories first to help resolve casing
        const catRes = await fetch(`${BASE_URL}/categories?hide_empty=true&_=${Date.now()}`);
        const catsData = await catRes.json();
        let actualCategories = [];
        if (Array.isArray(catsData)) {
          const processedCats = catsData
            .filter((c: any) => c.name.toLowerCase() !== 'hindi')
            .map((c: any) => {
              if (c.name.toLowerCase() === 'odia') return { ...c, name: 'ଓଡ଼ିଆ' };
              if (c.name.toLowerCase() === 'english') return { ...c, name: 'English' };
              return c;
            })
            .sort((a: any, b: any) => {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();

              // Helper to check for Devanagari script
              const isDevanagari = (s: string) => /[\u0900-\u097F]/.test(s);

              // 1. English first
              if (nameA === 'english' && nameB !== 'english') return -1;
              if (nameA !== 'english' && nameB === 'english') return 1;

              // 2. Hindi (Devanagari) second
              if (isDevanagari(nameA) && !isDevanagari(nameB)) return -1;
              if (!isDevanagari(nameA) && isDevanagari(nameB)) return 1;

              // 3. Odia third
              if (nameA === 'ଓଡ଼ିଆ' && nameB !== 'ଓଡ଼ିଆ') return 1; // Actually logic below handles remaining order if needed, but let's stick to simple priority

              return 0;
            });

          setCategories(processedCats);
          actualCategories = processedCats;
        }

        let initialCategory = 'All';
        const paramCategory = routeCategory || searchParams.get('category');

        if (paramCategory) {
          // Find the correctly-cased category name from the list
          const match = actualCategories.find(c => c.name.toLowerCase() === paramCategory.toLowerCase());
          if (match) {
            initialCategory = match.name;
          } else if (paramCategory.toLowerCase() === 'all') {
            initialCategory = 'All';
          }
        }
        setSelectedCategory(initialCategory);

        const postRes = await fetch(`${BASE_URL}/posts?_embed&per_page=100&_=${Date.now()}`);
        const postsData = await postRes.json();

        const mapped: Article[] = postsData.map((post: any) => {
          const terms = post._embedded?.['wp:term']?.[0] || [];
          const catName = terms.length > 0 ? terms[0].name : 'STORY';

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

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  const updateCategory = (catName: string) => {
    setSelectedCategory(catName);
    if (catName === 'All') {
      navigate('/my-archive');
    } else {
      navigate(`/my-archive/${catName.toLowerCase()}`);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#f8f7f4] border-b border-stone-100 pt-16 pb-16 relative overflow-hidden">
        {/* Falling Letters Animation */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => {
            const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            const left = Math.random() * 100;
            const duration = 3 + Math.random() * 4; // 3-7s duration
            const delay = Math.random() * 5;
            const size = 10 + Math.random() * 14; // 10-24px
            const opacity = 0.1 + Math.random() * 0.2; // 0.1-0.3 opacity (subtle)

            return (
              <span
                key={i}
                className="absolute text-stone-400 font-serif"
                style={{
                  left: `${left}%`,
                  top: -30,
                  fontSize: `${size}px`,
                  opacity: opacity,
                  animation: `fall ${duration}s linear ${delay}s infinite`
                }}
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
        `}</style>

        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            {/* Left: Title */}
            <div className="space-y-3">
              <h1 className="font-serif text-6xl md:text-8xl text-stone-900 leading-none">My Archive.</h1>
              <p className="text-stone-500 text-lg max-w-xl font-light italic">
                Words and a lot of me.
              </p>
            </div>

            {/* Right: Filters — aligned to bottom */}
            <div className="flex flex-wrap gap-2 lg:justify-end lg:pb-2">
              <button
                onClick={() => updateCategory('All')}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === 'All'
                  ? 'bg-stone-900 text-white shadow-xl scale-105'
                  : 'bg-white text-stone-400 hover:text-stone-900 border border-stone-200'
                  }`}
              >
                All Archives
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => updateCategory(cat.name)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat.name
                    ? 'bg-stone-900 text-white shadow-xl scale-105'
                    : 'bg-white text-stone-400 hover:text-stone-900 border border-stone-200'
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="animate-pulse space-y-6">
                <div className="aspect-[16/10] bg-stone-100 rounded-2xl"></div>
                <div className="h-6 bg-stone-100 w-3/4 rounded"></div>
                <div className="h-16 bg-stone-100 w-full rounded"></div>
              </div>
            ))}
          </div>
        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {selectedCategory === 'English' && (
              <div className="col-span-full mb-2 mt-4">
                <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
                  <h3 className="font-serif text-3xl md:text-4xl text-stone-900">break my heart 💔 ⚠️ open wounds</h3>
                </div>
              </div>
            )}

            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="group block space-y-4"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 shadow-md">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 text-[8px] font-black uppercase tracking-widest text-stone-900 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 text-[9px] font-bold tracking-widest text-stone-400 uppercase">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {article.date}</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {article.readTime}</span>
                    </div>

                    <h4 className="font-serif text-2xl text-stone-900 group-hover:text-stone-600 transition-colors">
                      {article.title}
                    </h4>

                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-24 text-center">
                <p className="font-serif text-2xl text-stone-300 italic">No articles found in this category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div >
  );
};

export default AllArticlesPage;
