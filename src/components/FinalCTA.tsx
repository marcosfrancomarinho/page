import { ArrowRight } from 'lucide-react';

import { GlowBlob } from './GlowBlob';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section
      id='contato'
      aria-labelledby='cta-title'
      className='relative overflow-hidden bg-[#050B18] px-5 py-20 sm:px-8 sm:py-28 lg:py-36'
    >
      <GlowBlob className='top-10 left-1/2 h-72 w-72 -translate-x-1/2 bg-[#183A72] opacity-30 sm:h-96 sm:w-96 lg:h-[520px] lg:w-[520px]' />
      <GlowBlob className='right-0 bottom-0 h-48 w-48 bg-[#C89B3C] opacity-20' />

      <Reveal className='relative z-10 mx-auto max-w-5xl rounded-3xl border border-white/10 bg-linear-to-br from-[#0D1B33] via-[#183A72] to-[#08162F] px-5 py-12 text-center shadow-[0_40px_120px_rgba(0,0,0,.45)] sm:px-10 sm:py-16 lg:rounded-[40px] lg:px-20 lg:py-20'>
        <span className='text-sm font-bold tracking-[0.2em] text-[#E1BF72]'>
          COMECE AGORA
        </span>

        <h2
          id='cta-title'
          className='mt-4 text-3xl leading-tight font-black text-white sm:text-4xl lg:text-5xl'
        >
          Pronto para simplificar sua gestão financeira?
        </h2>

        <p className='mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl'>
          Automatize cobranças, organize clientes e tenha controle financeiro em uma visão clara.
        </p>

        <a
          href='mailto:contato@jurispag.com?subject=Solicitação%20de%20demonstração'
          className='mx-auto mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#C89B3C] to-[#E1BF72] px-8 py-4 text-base font-black text-[#08162F] shadow-[0_15px_40px_rgba(225,191,114,.25)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:mt-10 sm:w-fit sm:px-10 sm:text-lg'
        >
          Solicitar demonstração
          <ArrowRight size={20} aria-hidden='true' />
        </a>

        <p className='mt-4 text-sm text-slate-400'>Sem compromisso e com atendimento personalizado.</p>
      </Reveal>
    </section>
  );
}
