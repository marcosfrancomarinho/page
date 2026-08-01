import { ArrowRight, CreditCard, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useReveal } from '../scroll/hooks/useReveal';
import { useCountUp } from '../scroll/hooks/useCountUp';
import { GlowBlob } from './GlowBlob';
import { MiniCard } from './MiniCard';
import { Dashboard } from './Dashboard';

export function Hero() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const clientes = useCountUp(500, visible);
  const pagamentos = useCountUp(120, visible);
  const eficiencia = useCountUp(98, visible);

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] pt-28 pb-36">
      <GlowBlob className="bg-[#183A72] w-[550px] h-[550px] -top-48 -left-48" />
      <GlowBlob className="bg-[#C89B3C] w-[420px] h-[420px] top-10 right-0" />

      <div
        className="absolute inset-0 opacity-[.05]"
        style={{
          backgroundImage:
            'linear-gradient(#08162F 1px,transparent 1px),linear-gradient(90deg,#08162F 1px,transparent 1px)',
          backgroundSize: '45px 45px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXTO */}
        <div ref={ref}>
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'}`}>
            <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-[#E1BF72]/20 text-[#C89B3C] font-bold">
              <Sparkles size={18} />
              Plataforma Jurídica Inteligente
            </span>
          </div>

          <h1
            className={`mt-8 text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#08162F] transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
          >
            Transforme a
            <span className="block bg-gradient-to-r from-[#183A72] via-[#C89B3C] to-[#183A72] bg-clip-text text-transparent">
              gestão financeira do seu escritório
            </span>
          </h1>

          <p
            className={`mt-8 text-xl leading-9 text-[#8D97A8] max-w-xl transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
          >
            Automatize cobranças, acompanhe pagamentos, reduza inadimplência e tenha controle completo da saúde
            financeira do seu escritório.
          </p>

          <div
            className={`mt-12 flex flex-wrap gap-5 transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
          >
            <button className="rounded-full px-8 py-4 bg-[#08162F] text-white font-bold flex items-center gap-3 shadow-xl transition-transform hover:scale-105 active:scale-95">
              Começar Agora
              <ArrowRight size={18} />
            </button>

            <button className="rounded-full border-2 border-[#C89B3C] px-8 py-4 font-bold text-[#08162F] hover:bg-[#C89B3C] hover:text-white transition">
              Ver Demonstração
            </button>
          </div>

          {/* ESTATÍSTICAS */}
          <div
            className={`mt-16 grid grid-cols-3 gap-6 transition-all duration-700 delay-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
          >
            <MiniCard icon={<Users size={22} />} title="Clientes" value={`${clientes}+`} />
            <MiniCard icon={<CreditCard size={22} />} title="Pagamentos" value={`${pagamentos}K`} />
            <MiniCard icon={<TrendingUp size={22} />} title="Eficiência" value={`${eficiencia}%`} />
          </div>
        </div>

        {/* DASHBOARD */}
        <Dashboard />
      </div>
    </section>
  );
}
