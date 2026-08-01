import { useReveal } from '../scroll/hooks/useReveal';
import type { Step } from '../scroll/types';

interface StepCardProps {
  step: Step;
  index: number;
}

export function StepCard({ step, index }: StepCardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  const fromLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex mb-20 ${fromLeft ? 'lg:justify-start' : 'lg:justify-end'} transition-all duration-700 ${
        visible ? 'opacity-100 translate-x-0' : `opacity-0 ${fromLeft ? '-translate-x-20' : 'translate-x-20'}`
      }`}
      style={{ transitionDelay: visible ? `${index * 150}ms` : '0ms' }}
    >
      <div className="lg:w-[46%] bg-white rounded-[30px] border border-[#E6EBF3] p-10 shadow-[0_20px_60px_rgba(8,22,47,.12)]">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#08162F] to-[#183A72] text-[#E1BF72] flex items-center justify-center mb-6">
          {step.icon}
        </div>

        <h3 className="text-3xl font-black text-[#08162F] mb-4">{step.title}</h3>

        <p className="text-[#8D97A8] leading-8 text-lg">{step.text}</p>
      </div>

      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#C89B3C] items-center justify-center font-black text-white shadow-xl">
        {index + 1}
      </div>
    </div>
  );
}
