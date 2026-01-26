import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, BookmarkCheck, ArrowRight, Check, Send, User, Mail, MessageSquare, MessageCircle } from 'lucide-react';
import { Article } from '../types';

interface Comment {
  id: number;
  author_name: string;
  date: string;
  content: { rendered: string };
  author_avatar_urls?: { [key: string]: string };
}

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [article, setArticle] = useState<Article | null>(null);
  const [suggestedArticles, setSuggestedArticles] = useState<Article[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);

  // Comment Form State
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

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

  const fetchComments = async (postId: string) => {
    try {
      setIsLoadingComments(true);
      const response = await fetch(`https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2/comments?post=${postId}&order=asc&_=${Date.now()}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
    } finally {
      setIsLoadingComments(false);
    }
  };

  const updateMetaTags = (article: Article) => {
    const cleanTitle = article.title.replace(/<[^>]*>?/gm, '');
    const cleanDesc = article.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 160).trim();
    const image = article.imageUrl;

    document.title = `${cleanTitle} | Sonakhi Rumi`;

    const setMeta = (property: string, content: string, attr: 'name' | 'property' = 'property') => {
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', cleanDesc, 'name');
    setMeta('og:title', cleanTitle);
    setMeta('og:description', cleanDesc);
    setMeta('og:image', image);
    setMeta('og:url', window.location.href);
    setMeta('og:type', 'article');
    setMeta('twitter:card', 'summary_large_image', 'name');
  };

  const fetchSuggestions = async (categoryId: number, currentPostId: string) => {
    try {
      setIsLoadingSuggestions(true);
      const response = await fetch(`https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2/posts?categories=${categoryId}&per_page=4&_embed&_=${Date.now()}`);
      if (!response.ok) return;

      const posts = await response.json();
      const filtered = posts
        .filter((p: any) => p.id.toString() !== currentPostId)
        .slice(0, 3)
        .map((post: any) => {
          const terms = post._embedded?.['wp:term']?.[0] || [];
          const catName = terms.length > 0 ? terms[0].name : 'STORY';
          return {
            id: post.id.toString(),
            title: stripHtml(post.title.rendered),
            excerpt: stripHtml(post.excerpt.rendered).substring(0, 100) + '...',
            category: catName.toUpperCase(),
            date: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            readTime: calculateReadTime(post.content.rendered),
            imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || `https://picsum.photos/800/600?random=${post.id}`,
          };
        });
      setSuggestedArticles(filtered);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    const fetchFullArticle = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2/posts/${id}?_embed&_=${Date.now()}`);
        if (!response.ok) throw new Error('Failed to load article');

        const post = await response.json();
        const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];

        const imageUrl = featuredMedia?.source_url || `https://picsum.photos/1200/800?random=${post.id}`;
        const rawCaption = featuredMedia?.caption?.rendered || featuredMedia?.description?.rendered || "";
        const cleanCaption = rawCaption.replace(/<[^>]*>?/gm, '').trim();

        const categories = post._embedded?.['wp:term']?.[0] || [];
        const category = categories.length > 0 ? categories[0].name : 'FEATURED';
        const categoryId = categories.length > 0 ? categories[0].id : null;

        const fetchedArticle: Article = {
          id: post.id.toString(),
          title: post.title.rendered,
          content: post.content.rendered,
          excerpt: post.excerpt.rendered,
          category: category.toUpperCase(),
          date: new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          readTime: calculateReadTime(post.content.rendered),
          imageUrl: imageUrl,
          imageCaption: cleanCaption,
        };

        setArticle(fetchedArticle);
        updateMetaTags(fetchedArticle);

        if (categoryId) {
          fetchSuggestions(categoryId, id);
        }

        fetchComments(id);

        const bookmarks = JSON.parse(localStorage.getItem('sonakhi_bookmarks') || '[]');
        setIsBookmarked(bookmarks.includes(id));
      } catch (err) {
        setError("The requested article could not be retrieved from the journal archive.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFullArticle();
    window.scrollTo(0, 0);

    return () => {
      document.title = 'Sonakhi Malla (Rumi) | Professional Portfolio';
    };
  }, [id]);

  const triggerToast = (message: string) => {
    setShowToast(message);
    setTimeout(() => setShowToast(null), 3000);
  };

  const handleShare = async () => {
    if (!article) return;
    const cleanTitle = article.title.replace(/<[^>]*>?/gm, '');
    const shareUrl = window.location.href;
    const shareData = { title: cleanTitle, url: shareUrl };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        triggerToast("Link copied to clipboard");
      }
    } catch (err) {
      triggerToast("Sharing failed");
    }
  };

  const handleBookmark = () => {
    if (!id) return;
    const bookmarks = JSON.parse(localStorage.getItem('sonakhi_bookmarks') || '[]');
    let newBookmarks;
    if (isBookmarked) {
      newBookmarks = bookmarks.filter((bId: string) => bId !== id);
      triggerToast("Removed from saved stories");
    } else {
      newBookmarks = [...bookmarks, id];
      triggerToast("Story saved to library");
    }
    localStorage.setItem('sonakhi_bookmarks', JSON.stringify(newBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!article || isSubmittingComment) return;

    setIsSubmittingComment(true);
    try {
      const response = await fetch('https://live-sonakhi-rumi.pantheonsite.io/wp-json/headless/v1/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post_id: parseInt(article.id),
          name: commentName,
          email: commentEmail,
          content: commentContent
        })
      });

      const data = await response.json();
      if (response.ok) {
        triggerToast("Comment submitted for review.");
        setCommentName('');
        setCommentEmail('');
        setCommentContent('');
        // Refresh comments list
        fetchComments(article.id);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Comment Error:', err);
      triggerToast("Error posting comment. Please try again.");
    } finally {
      setIsSubmittingComment(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="h-[60vh] bg-stone-100 animate-pulse"></div>
        <div className="max-w-3xl mx-auto w-full pt-16 px-6 space-y-8">
          <div className="h-4 bg-stone-100 w-24 rounded animate-pulse"></div>
          <div className="h-16 bg-stone-100 w-full rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center bg-white">
        <h2 className="font-serif text-3xl mb-4">End of the chapter.</h2>
        <Link to="/" className="text-stone-900 font-bold border-b-2 border-stone-900 pb-1">Return Home</Link>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pb-24 relative">
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-stone-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-3 text-sm font-medium">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{showToast}</span>
          </div>
        </div>
      )}

      <header className="relative h-[50vh] lg:h-[80vh] w-full overflow-hidden bg-stone-900">
        <img src={article.imageUrl} alt={stripHtml(article.title)} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-5xl mx-auto w-full px-6 pb-20 space-y-8">
            <button onClick={() => navigate(-1)} className="group inline-flex items-center space-x-2 text-white/70 hover:text-white">
              <div className="p-2 rounded-full border border-white/20 group-hover:border-white/50"><ArrowLeft className="w-5 h-5" /></div>
              <span className="text-xs font-bold uppercase tracking-widest">Back to Library</span>
            </button>
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-white text-stone-900 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">{article.category}</span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05]" dangerouslySetInnerHTML={{ __html: article.title }} />
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {article.date}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {article.readTime}</div>
              <div className="flex items-center space-x-6 ml-auto">
                <button onClick={handleShare} className="flex items-center space-x-2 hover:text-white"><Share2 className="w-4 h-4" /></button>
                <button onClick={handleBookmark} className={`flex items-center space-x-2 ${isBookmarked ? 'text-amber-400' : 'hover:text-white'}`}>
                  {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-12">
        <div
          className="prose prose-stone prose-lg md:prose-xl max-w-none 
          [&>p]:mb-8 [&>p]:leading-relaxed [&>p]:text-stone-700
          [&>h2]:font-serif [&>h2]:text-4xl [&>h2]:mt-16 [&>h2]:mb-8 [&>h2]:text-stone-900
          [&>blockquote]:border-l-4 [&>blockquote]:border-stone-900 [&>blockquote]:pl-8 [&>blockquote]:italic [&>blockquote]:text-stone-800 [&>blockquote]:text-2xl [&>blockquote]:my-12 [&>blockquote]:font-serif
          [&_img]:rounded-2xl [&_img]:shadow-xl [&_img]:mx-auto"
          dangerouslySetInnerHTML={{ __html: article.content || '' }}
        />

        {/* Comment Section */}
        <div className="mt-32 pt-20 border-t border-stone-100">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-px bg-stone-300"></div>
            <h3 className="font-serif text-3xl text-stone-900 italic">Reflections & Dialogue</h3>
          </div>

          <form onSubmit={handleSubmitComment} className="space-y-10 group mb-20">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4 relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 flex items-center">
                  <User className="w-3 h-3 mr-2" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  placeholder="e.g., Julian Barnes"
                  className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 focus:border-stone-900 outline-none transition-colors font-light placeholder:text-stone-200"
                />
              </div>
              <div className="space-y-4 relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 flex items-center">
                  <Mail className="w-3 h-3 mr-2" /> Email Address
                </label>
                <input
                  type="email"
                  required
                  value={commentEmail}
                  onChange={(e) => setCommentEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 focus:border-stone-900 outline-none transition-colors font-light placeholder:text-stone-200"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 flex items-center">
                <MessageSquare className="w-3 h-3 mr-2" /> Your Reflection
              </label>
              <textarea
                required
                rows={4}
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Share your thoughts on this narrative..."
                className="w-full bg-[#faf9f6] border border-stone-100 rounded-2xl p-6 text-stone-900 focus:border-stone-900 outline-none transition-colors font-light placeholder:text-stone-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmittingComment}
              className="group inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white rounded-full transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              <span className="font-bold text-xs uppercase tracking-widest flex items-center">
                {isSubmittingComment ? 'Sending Reflection...' : 'Publish Reflection'}
                {!isSubmittingComment && <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </span>
            </button>
          </form>

          {/* Existing Comments List */}
          <div className="space-y-16">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 flex items-center">
                <MessageCircle className="w-3 h-3 mr-2" />
                {comments.length} {comments.length === 1 ? 'Reflection' : 'Reflections'} Shared
              </h4>
            </div>

            {isLoadingComments ? (
              <div className="space-y-8">
                {[1, 2].map(i => (
                  <div key={i} className="animate-pulse flex space-x-6">
                    <div className="w-12 h-12 bg-stone-100 rounded-full"></div>
                    <div className="flex-1 space-y-4">
                      <div className="h-4 bg-stone-100 w-1/4 rounded"></div>
                      <div className="h-20 bg-stone-100 w-full rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : comments.length > 0 ? (
              <div className="space-y-12">
                {comments.map((comment) => (
                  <div key={comment.id} className="group animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        {comment.author_avatar_urls?.['96'] ? (
                          <img
                            src={comment.author_avatar_urls['96']}
                            alt={comment.author_name}
                            className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all shadow-sm"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-bold text-sm">
                            {comment.author_name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="flex-grow space-y-3">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-stone-900 text-sm tracking-tight">{comment.author_name}</h5>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-stone-300">
                            {new Date(comment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                        <div
                          className="text-stone-600 font-serif italic text-lg leading-relaxed prose prose-stone prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
                        />
                      </div>
                    </div>
                    <div className="mt-8 ml-18 h-px bg-stone-50"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="font-serif italic text-stone-300 text-xl">The narrative remains open for reflection. Be the first to share.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-32 py-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-6">
            <img src="https://live-sonakhi-rumi.pantheonsite.io/wp-content/uploads/2025/12/MoBuzz-Posting-Ideas-7.jpg" alt="Sonakhi" className="w-16 h-16 rounded-full object-cover shadow-lg" />
            <div>
              <h5 className="font-bold text-stone-900 uppercase text-xs tracking-widest">About the Author</h5>
              <h6 className="font-serif text-lg">Sonakhi Malla (Rumi)</h6>
              <p className="text-stone-500 text-sm italic">Journalist & Cultural Critic</p>
            </div>
          </div>
          <Link to="/" className="group flex items-center space-x-3 text-stone-900 font-bold uppercase tracking-widest">
            <span>Back to Library</span>
            <div className="p-3 bg-stone-900 text-white rounded-full group-hover:translate-x-1 transition-transform"><ArrowRight className="w-4 h-4" /></div>
          </Link>
        </div>

        {!isLoadingSuggestions && suggestedArticles.length > 0 && (
          <div className="pt-24 border-t border-stone-100">
            <h4 className="font-serif text-3xl mb-12">Further Reading</h4>
            <div className="grid sm:grid-cols-3 gap-8">
              {suggestedArticles.map((sug) => (
                <Link key={sug.id} to={`/article/${sug.id}`} className="group space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-stone-100">
                    <img src={sug.imageUrl} alt={sug.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <h5 className="font-serif text-xl group-hover:text-stone-600 transition-colors leading-tight">{sug.title}</h5>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ArticlePage;
