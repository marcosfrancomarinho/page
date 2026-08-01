import { useReveal } from '../scroll/hooks/useReveal';
import type { Step } from '../scroll/types';

interface StepCardProps {
  step: Step;
  index: number;
}

export function StepCard({ step, index }: StepCardProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({
    threshold: 0.15,
  });

  const fromLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        relative

        flex

        mb-8
        sm:mb-12
        lg:mb-20

        justify-center

        lg:${fromLeft ? 'justify-start' : 'justify-end'}

        transition-all

        duration-700

        ${
          visible
            ? 'opacity-100 translate-x-0'
            : `
              opacity-0

              lg:${fromLeft ? '-translate-x-20' : 'translate-x-20'}

              translate-y-8
            `
        }
      `}
      style={{
        transitionDelay: visible ? `${index * 150}ms` : '0ms',
      }}
    >
      <div
        className='
          group

          relative

          overflow-hidden

          w-full

          lg:w-[46%]

          bg-white/5

          backdrop-blur-xl

          rounded-3xl
          lg:rounded-[32px]

          border

          border-white/10

          p-5
          sm:p-7
          lg:p-10

          shadow-[0_20px_60px_rgba(0,0,0,.35)]

          transition-all

          duration-300

          hover:-translate-y-2

          hover:border-[#E1BF72]/40
        '
      >
        {/* GLOW HOVER */}
        <div
          className='
            absolute

            inset-0

            bg-linear-to-br

            from-[#183A72]/20

            to-[#C89B3C]/10

            opacity-0

            group-hover:opacity-100

            transition-opacity
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

              from-[#183A72]

              to-[#08162F]

              text-[#E1BF72]

              flex

              items-center
              justify-center

              mb-4
              sm:mb-6

              shadow-[0_0_30px_rgba(225,191,114,.15)]
            '
          >
            {step.icon}
          </div>

          {/* TITLE */}
          <h3
            className='
              text-xl
              sm:text-2xl
              lg:text-3xl

              font-black

              text-white

              mb-3
              sm:mb-4
            '
          >
            {step.title}
          </h3>

          {/* TEXT */}
          <p
            className='
              text-sm
              sm:text-base
              lg:text-lg

              text-gray-400

              leading-6
              sm:leading-8
            '
          >
            {step.text}
          </p>
        </div>
      </div>

      {/* NUMBER DESKTOP */}
      <div
        className='
          hidden

          lg:flex

          absolute

          left-1/2

          -translate-x-1/2

          w-16
          h-16

          rounded-full

          bg-linear-to-br

          from-[#C89B3C]

          to-[#E1BF72]

          items-center
          justify-center

          font-black

          text-[#08162F]

          shadow-[0_0_40px_rgba(225,191,114,.35)]
        '
      >
        {index + 1}
      </div>

      {/* NUMBER MOBILE */}
      <div
        className='
          absolute

          -top-4

          left-5

          lg:hidden

          w-9
          h-9

          rounded-full

          bg-[#E1BF72]

          flex

          items-center
          justify-center

          text-[#08162F]

          text-sm

          font-black

          shadow-lg
        '
      >
        {index + 1}
      </div>
    </div>
  );
}
