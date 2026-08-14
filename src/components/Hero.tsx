import { ArrowRight, CheckCircle2, Play, Sparkles } from 'lucide-react';

import { useReveal } from '../scroll/hooks/useReveal';

import { Dashboard } from './Dashboard';
import { GlowBlob } from './GlowBlob';

const TRUST_POINTS = ['14 dias grátis', 'Sem cartão', 'Configuração rápida'];

export function Hero() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id='inicio'
      aria-labelledby='hero-title'
      className='relative overflow-hidden bg-[#050B18] pt-28 pb-16 sm:pt-36 sm:pb-20 lg:min-h-screen lg:pt-40 lg:pb-24'
    >
      <GlowBlob className='-top-40 -left-40 h-72 w-72 bg-[#183A72] opacity-40 lg:h-[600px] lg:w-[600px]' />
      <GlowBlob className='top-20 right-[-100px] h-56 w-56 bg-[#C89B3C] opacity-30 lg:h-[400px] lg:w-[400px]' />

      <div
        className='absolute inset-0 opacity-[0.035]'
        style={{
          backgroundImage:
            'linear-gradient(#E1BF72 1px,transparent 1px),linear-gradient(90deg,#E1BF72 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10'>
        <div ref={ref}>
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-[#E1BF72]/20 bg-[#E1BF72]/10 px-4 py-2 text-sm font-bold text-[#E1BF72] transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            <Sparkles size={16} aria-hidden='true' />
            Financeiro jurídico sob controle
          </span>

          <h1
            id='hero-title'
            className={`mt-6 max-w-2xl text-4xl leading-[1.05] font-black tracking-tight text-white transition-all delay-100 duration-700 sm:text-5xl lg:text-7xl ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            Receba em dia.
            <span className='block bg-linear-to-r from-[#E1BF72] via-[#FFD43B] to-[#C89B3C] bg-clip-text text-transparent'>
              Cresça com previsibilidade.
            </span>
          </h1>

          <p
            className={`mt-6 max-w-xl text-base leading-7 text-slate-300 transition-all delay-200 duration-700 sm:text-xl sm:leading-8 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            Automatize cobranças, organize clientes e enxergue o caixa do seu escritório em tempo real.
          </p>

          <div
            className={`mt-8 flex flex-col gap-3 transition-all delay-300 duration-700 sm:flex-row ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            <a
              href='#contato'
              className='flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#C89B3C] to-[#E1BF72] px-8 py-4 font-black text-[#08162F] shadow-[0_15px_45px_rgba(225,191,114,.2)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
            >
              Testar grátis
              <ArrowRight size={19} aria-hidden='true' />
            </a>
            <a
              href='#demonstracao'
              className='flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
            >
              <Play size={18} aria-hidden='true' />
              Ver demonstração
            </a>
          </div>

          <ul className='mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400'>
            {TRUST_POINTS.map((point) => (
              <li key={point} className='flex items-center gap-2'>
                <CheckCircle2 size={16} aria-hidden='true' className='text-[#E1BF72]' />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div id='demonstracao' className='scroll-mt-28'>
          <Dashboard />
        </div>
      </div>
    </section>
  );
}
