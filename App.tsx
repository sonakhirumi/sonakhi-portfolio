import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import HappyPeriodsPreloader from './components/HappyPeriodsPreloader';
import ScrollIndicator from './components/ScrollIndicator';

// Code splitting for better initial load time
const Hero = lazy(() => import('./components/Hero'));
const Recommendations = lazy(() => import('./components/Recommendations'));
const About = lazy(() => import('./components/About'));
const ArticlePage = lazy(() => import('./components/ArticlePage'));
const AllArticlesPage = lazy(() => import('./components/AllArticlesPage'));
const Contacts = lazy(() => import('./components/Contact'));
const HappyPeriodsPage = lazy(() => import('./components/HappyPeriodsPage'));
const CopyrightPage = lazy(() => import('./components/CopyrightPage'));

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
  <>
    <Hero />
    <Recommendations />
  </>
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
    // Reduced from 3600ms to 2400ms for snappier feel while maintaining impact
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
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

    // Reduced from 2400ms to 1200ms for faster initial entry
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isAppLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#faf9f6] animate-in fade-in duration-1000">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow pt-20">
        <Suspense fallback={<div className="min-h-screen bg-[#faf9f6]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/my-archive" element={<AllArticlesPage />} />
            <Route path="/my-archive/:category" element={<AllArticlesPage />} />
            <Route path="/my-archive/:category/:subcategory" element={<AllArticlesPage />} />
            <Route path="/happy-periods" element={<HappyPeriodsRoute />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/copyright" element={<CopyrightPage />} />
          </Routes>
        </Suspense>
      </main>
      <ScrollIndicator />
      <Footer />
    </div>
  );
};

export default App;
