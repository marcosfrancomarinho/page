import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  delay?: number;
}

export function FeatureCard({ icon, title, text, delay = 0 }: FeatureCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="group relative overflow-hidden rounded-[32px] bg-white border border-[#E8ECF3] p-10 shadow-[0_18px_50px_rgba(8,22,47,.08)] transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02]">
        <div className="w-16 h-16 rounded-[18px] bg-gradient-to-br from-[#0F2345] to-[#183A72] text-[#E1BF72] flex items-center justify-center shadow-xl mb-7 group-hover:scale-110 transition">
          {icon}
        </div>

        <h3 className="text-2xl font-black text-[#08162F] mb-5">{title}</h3>

        <p className="text-[#8D97A8] leading-8 whitespace-pre-line">{text}</p>
      </div>
    </Reveal>
  );
}
