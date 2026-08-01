import { GlowBlob } from './GlowBlob';
import { NumberCard } from './NumberCard';
import type { Stat } from '../scroll/types';

const STATS: Stat[] = [
  { value: '500+', label: 'Escritórios' },
  { value: '120 mil', label: 'Pagamentos' },
  { value: '98%', label: 'Satisfação' },
  { value: '24/7', label: 'Suporte' },
];

export function Numbers() {
  return (
    <section
      className='
        relative
        overflow-hidden

        bg-[#08162F]

        py-16
        sm:py-20
        lg:py-28
      '
    >
      <GlowBlob
        className='
          bg-[#183A72]

          w-64
          h-64

          sm:w-96
          sm:h-96

          lg:w-[500px]
          lg:h-[500px]

          left-1/2

          -translate-x-1/2

          opacity-20
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
          lg:px-10

          grid

          grid-cols-1
          xs:grid-cols-2
          lg:grid-cols-4

          gap-4
          sm:gap-6
          lg:gap-10
        '
      >
        {STATS.map((stat, index) => (
          <NumberCard key={stat.label} value={stat.value} label={stat.label} index={index} />
        ))}
      </div>
    </section>
  );
}
