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
      <div
        className='
          group
          relative
          overflow-hidden

          rounded-3xl

          bg-[#0D1B33]

          border
          border-white/10

          p-5
          sm:p-7
          lg:p-10

          shadow-[0_20px_60px_rgba(0,0,0,.35)]

          transition-all
          duration-300

          hover:-translate-y-3
          hover:border-[#C89B3C]/40
          hover:shadow-[0_25px_80px_rgba(200,155,60,.15)]
        '
      >
        {/* brilho no hover */}
        <div
          className='
            absolute
            inset-0

            bg-linear-to-br
            from-[#183A72]/20
            to-[#C89B3C]/10

            opacity-0

            group-hover:opacity-100

            transition
            duration-500
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
              w-12
              h-12

              sm:w-14
              sm:h-14

              lg:w-16
              lg:h-16


              rounded-2xl

              bg-linear-to-br

              from-[#183A72]

              to-[#08162F]


              text-[#E1BF72]


              flex
              items-center
              justify-center


              shadow-[0_10px_30px_rgba(24,58,114,.4)]


              mb-5
              sm:mb-7


              group-hover:scale-110

              transition
            '
          >
            {icon}
          </div>

          {/* TITLE */}
          <h3
            className='
              text-xl
              sm:text-2xl

              font-black

              text-white

              mb-3
              sm:mb-5
            '
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className='
              text-sm
              sm:text-base

              text-slate-400

              leading-6
              sm:leading-8

              whitespace-pre-line
            '
          >
            {text}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
