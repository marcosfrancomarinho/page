import { Benefits } from './components/Benefits';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { GlobalStyles } from './components/GlobalStyles';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Numbers } from './components/Numbers';

export default function App() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-[#050B18] text-white selection:bg-[#E1BF72] selection:text-[#08162F]'>
      <GlobalStyles />

      <a
        href='#conteudo'
        className='sr-only fixed top-3 left-3 z-[10000] rounded-lg bg-[#E1BF72] px-4 py-3 font-bold text-[#08162F] focus:not-sr-only'
      >
        Ir para o conteúdo
      </a>

      <Navbar />

      <main id='conteudo' tabIndex={-1}>
        <Hero />
        <Benefits />
        <Numbers />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
