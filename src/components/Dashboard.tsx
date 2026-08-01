import { Bell, Check, CreditCard, TrendingUp, Users } from 'lucide-react';
import { useReveal } from '../scroll/hooks/useReveal';
import { MiniCard } from './MiniCard';

const CHART_BARS: number[] = [35, 60, 45, 90, 70, 110, 85];

interface ProgressBarData {
  name: string;
  value: number;
}

const PROGRESS_BARS: ProgressBarData[] = [
  { name: 'Cobranças', value: 92 },
  { name: 'Pagamentos', value: 76 },
  { name: 'Clientes', value: 88 },
];

export function Dashboard() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative">
      <div className="absolute -inset-10 bg-[#183A72]/20 blur-[80px] rounded-full" />

      <div
        className={`relative rounded-[32px] bg-white border border-[#E1E5ED] overflow-hidden shadow-[0_35px_90px_rgba(8,22,47,.18)] animate-float transition-all duration-700 ${
          visible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-[8deg]'
        }`}
      >
        <div className="flex justify-between items-center px-8 py-6 border-b">
          <div>
            <p className="text-sm text-gray-400">Dashboard</p>
            <h3 className="text-2xl font-black text-[#08162F]">Visão Geral</h3>
          </div>

          <Bell className="text-[#C89B3C]" />
        </div>

        <div className="p-8">
          <div className="grid grid-cols-3 gap-5">
            <MiniCard icon={<Users size={20} />} title="Clientes" value="542" />
            <MiniCard icon={<TrendingUp size={20} />} title="Receita" value="R$ 182k" />
            <MiniCard icon={<CreditCard size={20} />} title="Pagamentos" value="98%" />
          </div>

          <div className="mt-10 h-64 rounded-3xl bg-[#F5F7FA] flex items-end justify-around px-8 overflow-hidden">
            {CHART_BARS.map((height, index) => (
              <div
                key={index}
                className="w-10 rounded-t-xl bg-gradient-to-t from-[#08162F] via-[#183A72] to-[#E1BF72] transition-all ease-out"
                style={{
                  height: visible ? `${height * 2}px` : '0px',
                  transitionDuration: '800ms',
                  transitionDelay: `${index * 150}ms`,
                }}
              />
            ))}
          </div>

          <div className="mt-10 space-y-6">
            {PROGRESS_BARS.map(({ name, value }) => (
              <div key={name}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-[#08162F]">{name}</span>
                  <span className="text-[#C89B3C] font-bold">{value}%</span>
                </div>

                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#183A72] to-[#E1BF72] transition-all duration-[1300ms] ease-out"
                    style={{ width: visible ? `${value}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -right-6 top-16 bg-[#08162F] rounded-2xl px-5 py-4 text-white shadow-2xl animate-bob">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C89B3C] flex items-center justify-center">
            <Check size={18} />
          </div>

          <div>
            <p className="font-bold">Pagamento Recebido</p>
            <p className="text-sm text-gray-300">+ R$ 8.450,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
