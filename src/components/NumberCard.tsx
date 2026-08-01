import { useReveal } from '../scroll/hooks/useReveal';

interface NumberCardProps {
  value: string;
  label: string;
  index: number;
}

export function NumberCard({ value, label, index }: NumberCardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`
        text-center

        rounded-2xl
        sm:rounded-3xl

        bg-white/5

        border
        border-white/10

        backdrop-blur-xl

        p-5
        sm:p-8
        lg:p-10

        transition-all
        duration-500

        hover:-translate-y-3
        hover:scale-105

        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{
        transitionDelay: visible ? `${index * 150}ms` : '0ms',
      }}
    >
      <h2
        className='
          text-3xl
          sm:text-4xl
          lg:text-5xl

          font-black

          text-[#E1BF72]

          animate-pulse-scale
        '
      >
        {value}
      </h2>

      <p
        className='
          mt-2
          sm:mt-4

          text-sm
          sm:text-lg

          text-gray-300
        '
      >
        {label}
      </p>
    </div>
  );
}
