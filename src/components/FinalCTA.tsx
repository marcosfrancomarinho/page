import { ArrowRight } from 'lucide-react';
import { GlowBlob } from './GlowBlob';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-36 bg-[#F5F7FA]">
      <GlowBlob className="bg-[#183A72] w-[500px] h-[500px] left-1/2 -translate-x-1/2" />

      <Reveal className="relative z-10 max-w-5xl mx-auto px-8 py-20 rounded-[40px] bg-gradient-to-br from-[#08162F] via-[#183A72] to-[#08162F] text-center shadow-[0_40px_100px_rgba(8,22,47,.3)]">
        <h2 className="text-5xl font-black text-white">Pronto para transformar seu escritório?</h2>

        <p className="mt-8 text-xl text-gray-300 leading-9 max-w-2xl mx-auto">
          Centralize pagamentos, automatize cobranças e acompanhe sua operação em tempo real.
        </p>

        <button className="mt-12 px-10 py-5 rounded-full bg-[#E1BF72] text-[#08162F] font-black text-lg flex items-center gap-3 mx-auto transition-transform hover:scale-105 active:scale-95">
          Solicitar Demonstração
          <ArrowRight size={20} />
        </button>
      </Reveal>
    </section>
  );
}
