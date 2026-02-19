import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import AllArticlesPage from './components/AllArticlesPage';
import Preloader from './components/Preloader';
import Contacts from './components/Contact';
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Home: React.FC = () => (
  <Hero />
);

const AboutPage: React.FC = () => (
  <section className="py-14 bg-white">
    <About />
  </section>
);

const App: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    // Initial loading delay for brand impact
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] animate-in fade-in duration-1000">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/my-archive" element={<AllArticlesPage />} />
          <Route path="/my-archive/:category" element={<AllArticlesPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
