import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ChevronRight } from 'lucide-react';
import { Article } from '../types';

const BASE_URL = 'https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2';

const Articles: React.FC = () => {
  const [categories, setCategories] = useState<{ id: number, name: string }[]>([]);
  const [categoryPosts, setCategoryPosts] = useState<Record<number, Article[]>>({});
  const [isLoading, setIsLoading] = useState(true);

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
    const fetchContent = async () => {
      try {
        setIsLoading(true);
        const catRes = await fetch(`${BASE_URL}/categories?hide_empty=true&_=${Date.now()}`);
        const catsData = await catRes.json();

        if (!Array.isArray(catsData)) return;

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
            const isDevanagari = (s: string) => /[\u0900-\u097F]/.test(s);

            if (nameA === 'english' && nameB !== 'english') return -1;
            if (nameA !== 'english' && nameB === 'english') return 1;

            if (isDevanagari(nameA) && !isDevanagari(nameB)) return -1;
            if (!isDevanagari(nameA) && isDevanagari(nameB)) return 1;

            if (nameA === 'ଓଡ଼ିଆ' && nameB !== 'ଓଡ଼ିଆ') return 1;

            return 0;
          });

        setCategories(processedCats);

        const postsMap: Record<number, Article[]> = {};

        await Promise.all(catsData.map(async (cat: any) => {
          const postRes = await fetch(`${BASE_URL}/posts?categories=${cat.id}&per_page=3&_embed&_=${Date.now()}`);
          const postsData = await postRes.json();

          if (Array.isArray(postsData)) {
            postsMap[cat.id] = postsData.map((post: any) => ({
              id: post.id.toString(),
              title: stripHtml(post.title.rendered),
              excerpt: stripHtml(post.excerpt.rendered).substring(0, 120) + '...',
              category: cat.name.toUpperCase(),
              date: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              readTime: calculateReadTime(post.content.rendered),
              imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || `https://picsum.photos/800/600?random=${post.id}`,
            }));
          }
        }));

        setCategoryPosts(postsMap);
      } catch (err) {
        console.error("Content fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {[1, 2].map((i) => (
          <div key={i} className="animate-pulse space-y-8">
            <div className="h-10 bg-stone-200 w-1/4 rounded"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-64 bg-stone-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-24">
      {categories.map((cat) => {
        const posts = categoryPosts[cat.id] || [];
        if (posts.length === 0) return null;

        return (
          <div key={cat.id} className="space-y-10">
            <div className="flex items-center justify-between border-b border-stone-200 pb-6">
              <h3 className="font-serif text-3xl md:text-4xl text-stone-900">{cat.name}</h3>
              <Link
                to={`/my-archive?category=${encodeURIComponent(cat.name.toLowerCase())}`}
                className="flex items-center space-x-2 text-stone-500 hover:text-stone-900 transition-colors text-xs font-bold uppercase tracking-widest"
              >
                <span>View All</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((article) => (
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
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
