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
          sm:rounded-4xl

          bg-white
          border
          border-[#E8ECF3]

          p-5
          sm:p-7
          lg:p-10

          shadow-[0_15px_40px_rgba(8,22,47,.08)]

          transition-all
          duration-300

          hover:-translate-y-2
          hover:scale-[1.02]
        '
      >
        {/* efeito de brilho no hover */}
        <div
          className='
            absolute
            inset-0
            bg-linear-to-br
            from-[#183A72]/5
            to-[#C89B3C]/5
            opacity-0
            group-hover:opacity-100
            transition
          '
        />

        <div className='relative z-10'>
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
              from-[#0F2345]
              to-[#183A72]

              text-[#E1BF72]

              flex
              items-center
              justify-center

              shadow-xl

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
              text-[#08162F]

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

              text-[#8D97A8]

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
