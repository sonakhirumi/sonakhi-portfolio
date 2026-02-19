import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, ArrowRight, Clock, Hammer } from 'lucide-react';
import { Article } from '../types';

const BASE_URL = 'https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2';

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
      <div className="bg-[#f8f7f4] border-b border-stone-100 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
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

      <div className="max-w-7xl mx-auto px-6 py-24">
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

          <div className="flex flex-col items-center justify-center py-24 gap-8">
            <div className="p-8 bg-stone-100 rounded-full animate-bounce-slow">
              <Hammer className="w-12 h-12 text-stone-400" />
            </div>
            <div className="text-center space-y-4 max-w-lg">
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">Under Construction.</h2>
              <p className="font-serif italic text-stone-500 text-lg">Check back soon.</p>
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default AllArticlesPage;
