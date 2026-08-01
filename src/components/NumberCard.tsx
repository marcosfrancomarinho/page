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
        group
        relative
        overflow-hidden

        text-center

        rounded-3xl

        bg-white/[0.04]

        border
        border-white/10

        backdrop-blur-xl

        p-6
        sm:p-8
        lg:p-10

        shadow-[0_20px_50px_rgba(0,0,0,.25)]

        transition-all
        duration-500

        hover:-translate-y-3

        hover:border-[#E1BF72]/40

        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{
        transitionDelay: visible ? `${index * 150}ms` : '0ms',
      }}
    >
      {/* GLOW */}
      <div
        className='
          absolute
          inset-0

          bg-gradient-to-br
          from-[#C89B3C]/10
          to-transparent

          opacity-0

          group-hover:opacity-100

          transition-opacity
        '
      />

      <div className='relative z-10'>
        <h2
          className='
            text-4xl
            sm:text-5xl

            font-black

            bg-gradient-to-r
            from-[#C89B3C]
            to-[#E1BF72]

            bg-clip-text
            text-transparent

            animate-pulse-scale
          '
        >
          {value}
        </h2>

        <p
          className='
            mt-3
            sm:mt-4

            text-sm
            sm:text-lg

            text-gray-400

            font-medium
          '
        >
          {label}
        </p>
      </div>
    </div>
  );
}
