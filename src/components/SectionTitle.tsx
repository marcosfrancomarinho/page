import { Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

interface SectionTitleProps {
  badge: string;
  title: string;
  description: string;
}

export function SectionTitle({ badge, title, description }: SectionTitleProps) {
  return (
    <Reveal className="text-center max-w-3xl mx-auto">
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E1BF72]/20 text-[#C89B3C] font-bold text-sm">
        <Sparkles size={16} />
        {badge}
      </span>

      <h2 className="mt-6 text-5xl md:text-6xl font-black tracking-tight text-[#08162F] leading-tight">{title}</h2>

      <p className="mt-6 text-lg leading-8 text-[#8D97A8] whitespace-pre-line">{description}</p>
    </Reveal>
  );
}
