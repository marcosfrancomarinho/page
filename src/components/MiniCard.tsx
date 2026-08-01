import type { ReactNode } from 'react';

interface MiniCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export function MiniCard({ icon, title, value }: MiniCardProps) {
  return (
    <div
      className='
        group
        relative
        overflow-hidden

        rounded-2xl
        sm:rounded-[22px]

        bg-white

        border
        border-[#E9EDF4]

        p-4
        sm:p-5

        shadow-[0_12px_35px_rgba(8,22,47,.08)]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:scale-[1.03]
      '
    >
      {/* SHIMMER */}
      <div
        className='
          pointer-events-none

          absolute
          top-0
          left-0

          h-full
          w-14

          bg-white/40

          skew-x-[-25deg]

          animate-shimmer

          will-change-transform
        '
      />

      <div
        className='
          relative
          z-10
        '
      >
        {/* ICON */}
        <div
          className='
            w-10
            h-10

            sm:w-12
            sm:h-12

            rounded-xl

            bg-[#08162F]

            text-[#E1BF72]

            flex
            items-center
            justify-center

            mb-3
            sm:mb-4
          '
        >
          {icon}
        </div>

        {/* TITLE */}
        <p
          className='
            text-xs
            sm:text-sm

            font-semibold

            text-[#8D97A8]
          '
        >
          {title}
        </p>

        {/* VALUE */}
        <h3
          className='
            mt-1
            sm:mt-2

            text-2xl
            sm:text-3xl

            font-black

            text-[#08162F]
          '
        >
          {value}
        </h3>
      </div>
    </div>
  );
}
