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

        bg-white/[0.04]

        border
        border-white/10

        backdrop-blur-xl

        p-4
        sm:p-5

        shadow-[0_20px_50px_rgba(0,0,0,.25)]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-[#C89B3C]/40
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

          bg-white/10

          skew-x-[-25deg]

          animate-shimmer

          opacity-0
          group-hover:opacity-100

          transition-opacity
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
            w-11
            h-11

            sm:w-12
            sm:h-12

            rounded-xl

            bg-gradient-to-br
            from-[#183A72]
            to-[#08162F]

            text-[#E1BF72]

            flex
            items-center
            justify-center

            mb-4

            shadow-[0_0_25px_rgba(200,155,60,.25)]

            transition-transform

            group-hover:scale-110
          '
        >
          {icon}
        </div>

        {/* TITLE */}
        <p
          className='
            text-xs
            sm:text-sm

            font-medium

            text-gray-400
          '
        >
          {title}
        </p>

        {/* VALUE */}
        <h3
          className='
            mt-2

            text-2xl
            sm:text-3xl

            font-black

            text-white
          '
        >
          {value}
        </h3>
      </div>
    </div>
  );
}
