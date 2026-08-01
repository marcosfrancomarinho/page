import { GlowBlob } from './GlowBlob';
import { NumberCard } from './NumberCard';
import type { Stat } from '../scroll/types';

const STATS: Stat[] = [
  {
    value: '500+',
    label: 'Escritórios ativos',
  },
  {
    value: '120 mil',
    label: 'Pagamentos processados',
  },
  {
    value: '98%',
    label: 'Satisfação dos clientes',
  },
  {
    value: '24/7',
    label: 'Suporte disponível',
  },
];

export function Numbers() {
  return (
    <section
      className='
        relative
        overflow-hidden

        bg-[#050B18]

        py-20
        sm:py-28
      '
    >
      <GlowBlob
        className='
          bg-[#183A72]

          w-72
          h-72

          sm:w-[450px]
          sm:h-[450px]

          left-1/2
          -translate-x-1/2

          top-0

          opacity-30
        '
      />

      <div
        className='
          relative
          z-10

          max-w-7xl
          mx-auto

          px-5
          sm:px-8
        '
      >
        {/* TITLE */}
        <div
          className='
            text-center

            max-w-3xl

            mx-auto

            mb-12
            sm:mb-16
          '
        >
          <span
            className='
              inline-flex

              px-4
              py-2

              rounded-full

              bg-[#E1BF72]/10

              text-[#E1BF72]

              text-sm

              font-bold
            '
          >
            RESULTADOS
          </span>

          <h2
            className='
              mt-5

              text-3xl
              sm:text-5xl

              font-black

              text-white
            '
          >
            Números que mostram
            <span className='text-[#E1BF72]'> o impacto</span>
          </h2>

          <p
            className='
              mt-4

              text-gray-400

              text-base
              sm:text-lg
            '
          >
            Tecnologia para simplificar a rotina financeira de escritórios jurídicos.
          </p>
        </div>

        {/* CARDS */}
        <div
          className='
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-5
            lg:gap-8
          '
        >
          {STATS.map((stat, index) => (
            <NumberCard key={stat.label} value={stat.value} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
