import { Benefits } from './components/Benefits';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { GlobalStyles } from './components/GlobalStyles';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
import { Numbers } from './components/Numbers';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Testimonials } from './components/Testimonials';
import { usePageScroll } from './scroll/hooks/usePageScroll';

export default function App() {
  const { progress, showScrollToTop } = usePageScroll();

  return (
    <div className='min-h-screen overflow-x-hidden bg-[#050B18] text-white selection:bg-[#E1BF72] selection:text-[#08162F]'>
      <GlobalStyles />

      <a
        href='#conteudo'
        className='sr-only fixed top-3 left-3 z-[10000] rounded-lg bg-[#E1BF72] px-4 py-3 font-bold text-[#08162F] focus:not-sr-only'
      >
        Ir para o conteúdo
      </a>

      <ScrollProgressBar progress={progress} />
      <Navbar />

      <main id='conteudo' tabIndex={-1}>
        <section id='inicio' aria-labelledby='hero-title'>
          <Hero />
        </section>

        <Benefits />
        <Numbers />

        <section id='como-funciona' aria-label='Como a JurisPag funciona'>
          <HowItWorks />
        </section>

        <section id='depoimentos' aria-label='Depoimentos de clientes'>
          <Testimonials />
        </section>

        <FinalCTA />
      </main>

      <Footer />
      <ScrollToTopButton visible={showScrollToTop} />
    </div>
  );
}
