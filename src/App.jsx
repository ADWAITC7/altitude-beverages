import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductGrid from './components/ProductGrid';
import BrandText from './components/BrandText';
import ShopSection from './components/ShopSection';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import './styles/App.css'; 

const HomeExperience = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
        {/* Fixed background element - won't push content down */}
        <BrandText /> 
        
        {/* Foreground scrolling content */}
        <div className="relative z-10">
          <Hero />
          <Marquee />
          <ProductGrid />
          <ShopSection />
        </div>
      </div>
    </PageTransition>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeExperience />} />
        <Route path="/shop" element={<PageTransition><ShopPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth background transition from charcoal to slate gray
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.8, 1], // Fades near the bottom of the page
    ['#0a0a0a', '#0a0a0a', '#1e293b']
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <motion.div 
        style={{ backgroundColor }}
        className="app-container relative min-h-screen text-white font-sans overflow-x-hidden"
      >
        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" />}
        </AnimatePresence>
        
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;