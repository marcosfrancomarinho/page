import type { ReactNode } from 'react';

interface MiniCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export function MiniCard({ icon, title, value }: MiniCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] bg-white border border-[#E9EDF4] p-5 shadow-[0_15px_40px_rgba(8,22,47,.08)] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03]">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-white/40 -skew-x-[25deg] animate-shimmer" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-[#08162F] text-[#E1BF72] flex items-center justify-center mb-4">{icon}</div>

        <p className="text-sm font-semibold text-[#8D97A8]">{title}</p>

        <h3 className="mt-2 text-3xl font-black text-[#08162F]">{value}</h3>
      </div>
    </div>
  );
}
