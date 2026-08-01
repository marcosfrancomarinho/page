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
          w-full

          lg:w-[46%]

          bg-white

          rounded-3xl
          lg:rounded-[30px]

          border
          border-[#E6EBF3]

          p-5
          sm:p-7
          lg:p-10

          shadow-[0_15px_50px_rgba(8,22,47,.10)]

          transition-transform

          hover:-translate-y-2
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

            from-[#08162F]
            to-[#183A72]

            text-[#E1BF72]

            flex
            items-center
            justify-center

            mb-4
            sm:mb-6
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

            text-[#08162F]

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

            text-[#8D97A8]

            leading-6
            sm:leading-8
          '
        >
          {step.text}
        </p>
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

          bg-[#C89B3C]

          items-center
          justify-center

          font-black

          text-white

          shadow-xl
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

          bg-[#C89B3C]

          flex
          items-center
          justify-center

          text-white

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
