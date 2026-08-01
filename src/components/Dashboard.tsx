import { Bell, Check, CreditCard, TrendingUp, Users } from 'lucide-react';

import { useReveal } from '../scroll/hooks/useReveal';
import { MiniCard } from './MiniCard';

const CHART_BARS = [35, 60, 45, 90, 70, 110, 85];

const PROGRESS_BARS = [
  {
    name: 'Cobranças',
    value: 92,
  },
  {
    name: 'Pagamentos',
    value: 76,
  },
  {
    name: 'Clientes',
    value: 88,
  },
];

export function Dashboard() {
  const [ref, visible] = useReveal<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className='
        relative
        w-full
      '
    >
      <div
        className='
          absolute
          -inset-10

          bg-[#183A72]/30

          blur-[90px]

          rounded-full
        '
      />

      <div
        className={`
          relative

          rounded-3xl

          bg-[#0D1B33]

          border
          border-white/10

          overflow-hidden

          shadow-[0_30px_100px_rgba(0,0,0,.45)]

          transition-all
          duration-700


          ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
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
            border-white/10
          '
        >
          <div>
            <p
              className='
                text-xs
                text-slate-400
              '
            >
              Dashboard
            </p>

            <h3
              className='
                text-xl
                sm:text-2xl

                font-black

                text-white
              '
            >
              Visão Geral
            </h3>
          </div>

          <Bell size={22} className='text-[#E1BF72]' />
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
            '
          >
            <MiniCard icon={<Users size={18} />} title='Clientes' value='542' />

            <MiniCard icon={<TrendingUp size={18} />} title='Receita' value='182k' />

            <MiniCard icon={<CreditCard size={18} />} title='Pagamentos' value='98%' />
          </div>

          {/* GRAFICO */}
          <div
            className='
              mt-8

              h-48
              sm:h-64

              rounded-3xl

              bg-[#08162F]

              border
              border-white/5

              flex
              items-end
              justify-around

              px-5
              sm:px-8

              overflow-hidden
            '
          >
            {CHART_BARS.map((height, index) => (
              <div
                key={index}
                className='
                  w-5
                  sm:w-8

                  rounded-t-xl

                  bg-linear-to-t

                  from-[#183A72]

                  via-[#C89B3C]

                  to-[#E1BF72]

                  transition-all

                  duration-700
                '
                style={{
                  height: visible ? `${height * 1.5}px` : '0px',

                  transitionDelay: `${index * 120}ms`,
                }}
              />
            ))}
          </div>

          {/* BARRAS */}
          <div
            className='
              mt-8

              space-y-6
            '
          >
            {PROGRESS_BARS.map((item) => (
              <div key={item.name}>
                <div
                  className='
                    flex
                    justify-between

                    mb-2
                  '
                >
                  <span
                    className='
                      text-sm
                      font-bold

                      text-white
                    '
                  >
                    {item.name}
                  </span>

                  <span
                    className='
                      text-sm
                      font-bold

                      text-[#E1BF72]
                    '
                  >
                    {item.value}%
                  </span>
                </div>

                <div
                  className='
                    h-2.5

                    bg-white/10

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
                    '
                    style={{
                      width: visible ? `${item.value}%` : '0%',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NOTIFICACAO */}
      <div
        className='
          hidden
          sm:block

          absolute

          -right-6

          top-16

          bg-[#08162F]

          border
          border-white/10

          rounded-2xl

          px-5
          py-4

          text-white

          shadow-2xl

          animate-bob
        '
      >
        <div
          className='
            flex
            gap-3
          '
        >
          <div
            className='
              w-10
              h-10

              rounded-xl

              bg-[#C89B3C]

              flex
              items-center
              justify-center

              text-[#08162F]
            '
          >
            <Check size={18} />
          </div>

          <div>
            <p className='font-bold'>Pagamento Recebido</p>

            <p className='text-sm text-slate-400'>+ R$ 8.450,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
