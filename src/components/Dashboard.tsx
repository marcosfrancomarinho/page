import { Bell, Check, CreditCard, TrendingUp, Users } from 'lucide-react';
import { useReveal } from '../scroll/hooks/useReveal';
import { MiniCard } from './MiniCard';

const CHART_BARS: number[] = [35, 60, 45, 90, 70, 110, 85];

interface ProgressBarData {
  name: string;
  value: number;
}

const PROGRESS_BARS: ProgressBarData[] = [
  { name: 'Cobranças', value: 92 },
  { name: 'Pagamentos', value: 76 },
  { name: 'Clientes', value: 88 },
];

export function Dashboard() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div ref={ref} className='relative w-full'>
      <div
        className='
        absolute
        -inset-5
        sm:-inset-10
        bg-[#183A72]/20
        blur-[60px]
        sm:blur-[80px]
        rounded-full
      '
      />

      <div
        className={`
          relative
          rounded-3xl
          sm:rounded-4xl
          bg-white
          border
          border-[#E1E5ED]
          overflow-hidden
          shadow-[0_25px_70px_rgba(8,22,47,.15)]
          transition-all
          duration-700

          ${visible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-[-5deg]'}
        `}
      >
        {/* HEADER */}
        <div
          className='
          flex
          justify-between
          items-center
          px-5
          py-5
          sm:px-8
          sm:py-6
          border-b
        '
        >
          <div>
            <p className='text-xs sm:text-sm text-gray-400'>Dashboard</p>

            <h3
              className='
              text-xl
              sm:text-2xl
              font-black
              text-[#08162F]
            '
            >
              Visão Geral
            </h3>
          </div>

          <Bell size={22} className='text-[#C89B3C]' />
        </div>

        <div
          className='
          p-5
          sm:p-8
        '
        >
          {/* MINI CARDS */}
          <div
            className='
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            sm:gap-5
          '
          >
            <MiniCard icon={<Users size={18} />} title='Clientes' value='542' />

            <MiniCard icon={<TrendingUp size={18} />} title='Receita' value='R$ 182k' />

            <MiniCard icon={<CreditCard size={18} />} title='Pagamentos' value='98%' />
          </div>

          {/* CHART */}
          <div
            className='
            mt-8
            sm:mt-10
            h-48
            sm:h-64
            rounded-3xl
            bg-[#F5F7FA]
            flex
            items-end
            justify-around
            px-4
            sm:px-8
            overflow-hidden
            gap-2
          '
          >
            {CHART_BARS.map((height, index) => (
              <div
                key={index}
                className='
                  w-5
                  sm:w-8
                  lg:w-10
                  rounded-t-xl
                  bg-linear-to-t
                  from-[#08162F]
                  via-[#183A72]
                  to-[#E1BF72]
                  transition-all
                  ease-out
                '
                style={{
                  height: visible ? `${height * (window.innerWidth < 640 ? 1.2 : 2)}px` : '0px',

                  transitionDuration: '800ms',
                  transitionDelay: `${index * 150}ms`,
                }}
              />
            ))}
          </div>

          {/* PROGRESS */}
          <div
            className='
            mt-8
            sm:mt-10
            space-y-5
            sm:space-y-6
          '
          >
            {PROGRESS_BARS.map(({ name, value }) => (
              <div key={name}>
                <div
                  className='
                  flex
                  justify-between
                  mb-2
                  text-sm
                  sm:text-base
                '
                >
                  <span className='font-bold text-[#08162F]'>{name}</span>

                  <span
                    className='
                    text-[#C89B3C]
                    font-bold
                  '
                  >
                    {value}%
                  </span>
                </div>

                <div
                  className='
                  h-2.5
                  sm:h-3
                  bg-gray-200
                  rounded-full
                  overflow-hidden
                '
                >
                  <div
                    className='
                      h-full
                      rounded-full
                      bg-linear-to-r
                      from-[#183A72]
                      to-[#E1BF72]
                      transition-all
                      duration-[1300ms]
                      ease-out
                    '
                    style={{
                      width: visible ? `${value}%` : '0%',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NOTIFICATION */}
      <div
        className='
        absolute

        right-2
        sm:-right-6

        top-8
        sm:top-16

        bg-[#08162F]
        rounded-2xl

        px-4
        py-3
        sm:px-5
        sm:py-4

        text-white
        shadow-2xl
        animate-bob

        scale-90
        sm:scale-100
      '
      >
        <div className='flex gap-3'>
          <div
            className='
            w-9
            h-9
            sm:w-10
            sm:h-10
            rounded-xl
            bg-[#C89B3C]
            flex
            items-center
            justify-center
          '
          >
            <Check size={16} />
          </div>

          <div>
            <p
              className='
              text-sm
              sm:text-base
              font-bold
            '
            >
              Pagamento Recebido
            </p>

            <p
              className='
              text-xs
              sm:text-sm
              text-gray-300
            '
            >
              + R$ 8.450,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
