import { ArrowRight } from 'lucide-react';

import { GlowBlob } from './GlowBlob';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section
      id='contato'
      aria-labelledby='cta-title'
      className='relative overflow-hidden bg-[#050B18] px-5 py-16 sm:px-8 sm:py-24'
    >
      <GlowBlob className='top-0 left-1/2 h-72 w-72 -translate-x-1/2 bg-[#183A72] opacity-30 sm:h-96 sm:w-96' />

      <Reveal className='relative z-10 mx-auto max-w-4xl rounded-3xl border border-[#E1BF72]/20 bg-linear-to-br from-[#0D1B33] via-[#183A72] to-[#08162F] px-6 py-12 text-center shadow-[0_35px_100px_rgba(0,0,0,.4)] sm:px-12 sm:py-16'>
        <span className='text-sm font-bold tracking-[0.2em] text-[#E1BF72]'>COMECE AGORA</span>

        <h2 id='cta-title' className='mt-4 text-3xl leading-tight font-black text-white sm:text-5xl'>
          Seu escritório no azul começa hoje.
        </h2>

        <p className='mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg'>
          Experimente a JurisPag por 14 dias e transforme a forma como você recebe.
        </p>

        <a
          href='mailto:contato@jurispag.com?subject=Quero%20testar%20a%20JurisPag'
          className='mx-auto mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#C89B3C] to-[#E1BF72] px-8 py-4 text-base font-black text-[#08162F] shadow-[0_15px_40px_rgba(225,191,114,.25)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-fit sm:px-10 sm:text-lg'
        >
          Testar grátis por 14 dias
          <ArrowRight size={20} aria-hidden='true' />
        </a>

        <p className='mt-4 text-sm text-slate-400'>Sem cartão de crédito. Leva menos de 5 minutos.</p>
      </Reveal>
    </section>
  );
}
