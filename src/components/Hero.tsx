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

        bg-[#050B18]

        pt-24
        sm:pt-32

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

          lg:w-[600px]
          lg:h-[600px]

          -top-40
          -left-40

          opacity-40
        '
      />

      <GlowBlob
        className='
          bg-[#C89B3C]

          w-56
          h-56

          lg:w-[400px]
          lg:h-[400px]

          top-20

          right-[-100px]

          opacity-30
        '
      />

      {/* GRID */}

      <div
        className='
          absolute
          inset-0

          opacity-[0.04]

        '
        style={{
          backgroundImage: `
          linear-gradient(#E1BF72 1px,transparent 1px),
          linear-gradient(90deg,#E1BF72 1px,transparent 1px)
          `,
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
          lg:gap-20


          items-center
        '
      >
        {/* TEXTO */}

        <div ref={ref}>
          <span
            className={`
              inline-flex
              items-center
              gap-2

              rounded-full

              px-5
              py-2

              bg-[#E1BF72]/10

              border
              border-[#E1BF72]/20

              text-[#E1BF72]

              font-bold

              text-sm


              transition-all
              duration-700

              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <Sparkles size={16} aria-hidden='true' />
            Plataforma Jurídica Inteligente
          </span>

          <h1
            id='hero-title'
            className={`
              mt-8

              text-4xl
              sm:text-5xl
              lg:text-7xl


              font-black

              leading-[1.05]

              tracking-tight


              text-white


              transition-all

              duration-700

              delay-150


              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}

            `}
          >
            Controle financeiro
            <span
              className='
                block

                bg-linear-to-r

                from-[#183A72]

                via-[#E1BF72]

                to-[#183A72]


                bg-clip-text

                text-transparent
              '
            >
              inteligente para seu escritório
            </span>
          </h1>

          <p
            className={`
              mt-6

              text-base

              sm:text-xl


              leading-8


              text-slate-400


              max-w-xl


              transition-all

              duration-700

              delay-300


              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}

            `}
          >
            Automatize cobranças, acompanhe pagamentos e tenha uma visão completa da saúde financeira do seu escritório.
          </p>

          <div
            className={`
              mt-10

              flex

              flex-col

              sm:flex-row


              gap-4


              transition-all

              duration-700

              delay-500


              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}

            `}
          >
            <a
              href='#contato'
              className='
                rounded-full

                px-8

                py-4


                bg-linear-to-r

                from-[#C89B3C]

                to-[#E1BF72]


                text-[#08162F]


                font-black


                flex

                justify-center

                items-center


                gap-3


                animate-button-glow


                hover:scale-105

                transition
              '
            >
              Testar Grátis
              <ArrowRight size={18} aria-hidden='true' />
            </a>

            <a
              href='#como-funciona'
              className='
                rounded-full

                px-8

                py-4


                border

                border-white/20


                text-white


                font-bold


                hover:bg-white/10


                transition
              '
            >
              Ver Demonstração
            </a>
          </div>

          <div
            className='
              mt-12

              grid

              grid-cols-1

              sm:grid-cols-3


              gap-4
            '
          >
            <MiniCard icon={<Users size={20} />} title='Clientes' value={`${clientes}+`} />

            <MiniCard icon={<CreditCard size={20} />} title='Pagamentos' value={`${pagamentos}K`} />

            <MiniCard icon={<TrendingUp size={20} />} title='Eficiência' value={`${eficiencia}%`} />
          </div>
        </div>

        {/* DASHBOARD */}

        <Dashboard />
      </div>
    </section>
  );
}
