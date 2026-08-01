import { ArrowRight, CreditCard, Sparkles, TrendingUp, Users } from 'lucide-react';

import { useReveal } from '../scroll/hooks/useReveal';
import { useCountUp } from '../scroll/hooks/useCountUp';

import { GlowBlob } from './GlowBlob';
import { MiniCard } from './MiniCard';
import { Dashboard } from './Dashboard';

export function Hero() {
  const [ref, visible] = useReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  const clientes = useCountUp(500, visible);
  const pagamentos = useCountUp(120, visible);
  const eficiencia = useCountUp(98, visible);

  return (
    <section
      className='
        relative
        overflow-hidden

        bg-[#F5F7FA]

        pt-24
        sm:pt-28

        pb-20
        sm:pb-28
        lg:pb-36
      '
    >
      <GlowBlob
        className='
          bg-[#183A72]

          w-72
          h-72

          sm:w-96
          sm:h-96

          lg:w-[550px]
          lg:h-[550px]

          -top-32
          -left-32
        '
      />

      <GlowBlob
        className='
          bg-[#C89B3C]

          w-56
          h-56

          sm:w-72
          sm:h-72

          lg:w-[420px]
          lg:h-[420px]

          top-10
          right-[-80px]
        '
      />

      {/* GRID BACKGROUND */}
      <div
        className='
          absolute
          inset-0
          opacity-[.04]
        '
        style={{
          backgroundImage: 'linear-gradient(#08162F 1px,transparent 1px),linear-gradient(90deg,#08162F 1px,transparent 1px)',

          backgroundSize: '45px 45px',
        }}
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
          lg:grid-cols-2

          gap-14
          lg:gap-16

          items-center
        '
      >
        {/* TEXTO */}
        <div ref={ref}>
          <div
            className={`
              transition-all
              duration-700

              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'}
            `}
          >
            <span
              className='
                inline-flex
                items-center
                gap-2

                rounded-full

                px-4
                sm:px-5

                py-2

                bg-[#E1BF72]/20

                text-[#C89B3C]

                text-sm
                sm:text-base

                font-bold
              '
            >
              <Sparkles size={17} />
              Plataforma Jurídica Inteligente
            </span>
          </div>

          <h1
            className={`
              mt-6
              sm:mt-8

              text-4xl
              sm:text-5xl
              lg:text-7xl

              font-black

              leading-[1.05]

              tracking-tight

              text-[#08162F]

              transition-all
              duration-700
              delay-150

              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'}
            `}
          >
            Transforme a
            <span
              className='
                block

                bg-linear-to-r

                from-[#183A72]
                via-[#C89B3C]
                to-[#183A72]

                bg-clip-text

                text-transparent
              '
            >
              gestão financeira do seu escritório
            </span>
          </h1>

          <p
            className={`
              mt-6
              sm:mt-8

              text-base
              sm:text-xl

              leading-7
              sm:leading-9

              text-[#8D97A8]

              max-w-xl

              transition-all
              duration-700
              delay-300

              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'}
            `}
          >
            Automatize cobranças, acompanhe pagamentos, reduza inadimplência e tenha controle completo da saúde financeira do seu
            escritório.
          </p>

          {/* BUTTONS */}
          <div
            className={`
              mt-8
              sm:mt-12

              flex
              flex-col
              sm:flex-row

              gap-4

              transition-all
              duration-700
              delay-500

              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'}
            `}
          >
            <button
              className='
                w-full
                sm:w-auto

                rounded-full

                px-8
                py-4

                bg-[#08162F]

                text-white

                font-bold

                flex
                justify-center
                items-center

                gap-3

                shadow-xl

                transition-transform

                hover:scale-105

                active:scale-95
              '
            >
              Começar Agora
              <ArrowRight size={18} />
            </button>

            <button
              className='
                w-full
                sm:w-auto

                rounded-full

                border-2

                border-[#C89B3C]

                px-8
                py-4

                font-bold

                text-[#08162F]

                transition

                hover:bg-[#C89B3C]

                hover:text-white
              '
            >
              Ver Demonstração
            </button>
          </div>

          {/* STATS */}
          <div
            className={`
              mt-12
              sm:mt-16

              grid

              grid-cols-1
              sm:grid-cols-3

              gap-4
              sm:gap-6

              transition-all
              duration-700
              delay-700

              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'}
            `}
          >
            <MiniCard icon={<Users size={20} />} title='Clientes' value={`${clientes}+`} />

            <MiniCard icon={<CreditCard size={20} />} title='Pagamentos' value={`${pagamentos}K`} />

            <MiniCard icon={<TrendingUp size={20} />} title='Eficiência' value={`${eficiencia}%`} />
          </div>
        </div>

        {/* DASHBOARD */}
        <div className='lg:mt-0'>
          <Dashboard />
        </div>
      </div>
    </section>
  );
}
