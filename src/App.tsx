import { useEffect, useState } from 'react';

import { GlobalStyles } from './components/GlobalStyles';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Numbers } from './components/Numbers';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const doc = document.documentElement;

        const scrollable = doc.scrollHeight - doc.clientHeight;

        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

        setScrollProgress(progress);

        setShowTop(window.scrollY > 500);

        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className='
        min-h-screen

        overflow-x-hidden

        bg-[#050B18]

        text-white

        selection:bg-[#E1BF72]

        selection:text-[#08162F]
      '
    >
      <GlobalStyles />

      <ScrollProgressBar progress={scrollProgress} />

      <Navbar />

      {/* OFFSET NAVBAR */}
      <div
        className='
          h-16

          sm:h-20
        '
      />

      <main>
        <section id='inicio'>
          <Hero />
        </section>

        <section id='recursos'>
          <Benefits />
        </section>

        <Numbers />

        <section id='como-funciona'>
          <HowItWorks />
        </section>

        <section id='depoimentos'>
          <Testimonials />
        </section>

        <FinalCTA />
      </main>

      <Footer />

      <ScrollToTopButton visible={showTop} />
    </div>
  );
}
