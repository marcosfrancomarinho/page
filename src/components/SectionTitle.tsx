import { Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

interface SectionTitleProps {
  badge: string;
  title: string;
  description: string;
}

export function SectionTitle({ badge, title, description }: SectionTitleProps) {
  return (
    <Reveal
      className='
        text-center

        max-w-3xl

        mx-auto

        px-5
        sm:px-8
      '
    >
      {/* BADGE */}
      <span
        className='
          inline-flex

          items-center

          gap-2

          px-4
          sm:px-5

          py-2

          rounded-full

          bg-[#E1BF72]/10

          border
          border-[#E1BF72]/20

          text-[#E1BF72]

          text-xs
          sm:text-sm

          font-bold

          shadow-[0_0_25px_rgba(225,191,114,.12)]
        '
      >
        <Sparkles size={15} />

        {badge}
      </span>

      {/* TITLE */}
      <h2
        className='
          mt-5
          sm:mt-6

          text-3xl
          sm:text-4xl
          lg:text-6xl

          font-black

          tracking-tight

          leading-tight

          text-white
        '
      >
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p
        className='
          mt-4
          sm:mt-6

          text-base
          sm:text-lg

          leading-7
          sm:leading-8

          text-gray-400

          whitespace-pre-line

          max-w-2xl

          mx-auto
        '
      >
        {description}
      </p>
    </Reveal>
  );
}
