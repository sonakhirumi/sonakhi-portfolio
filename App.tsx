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
import HappyPeriodsPage from './components/HappyPeriodsPage';
import HappyPeriodsPreloader from './components/HappyPeriodsPreloader';

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
  <section className="pt-0 pb-14 lg:py-14 bg-white">
    <About />
  </section>
);

// Custom loader for Happy Periods
const HappyPeriodsRoute: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3600ms gives exactly enough time for 3 phrases at 1200ms each
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HappyPeriodsPreloader />;
  }
  return <HappyPeriodsPage />;
};

const App: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // If we land directly on happy-periods, don't show the global writer preloader, 
    // let its own route component handle it.
    if (location.pathname === '/happy-periods') {
      setIsAppLoading(false);
      return;
    }

    // Initial loading delay for brand impact (global)
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

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
          <Route path="/happy-periods" element={<HappyPeriodsRoute />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/contact" element={<Contacts />} />


        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
