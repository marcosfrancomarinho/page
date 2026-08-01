import { useEffect, useState } from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Numbers } from './/components/Numbers';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(progress);
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="font-sans">
      <GlobalStyles />
      <ScrollProgressBar progress={scrollProgress} />

      <Navbar />
      <div className="h-20" />

      <Hero />
      <Benefits />
      <Numbers />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />

      <ScrollToTopButton visible={showTop} />
    </div>
  );
}
