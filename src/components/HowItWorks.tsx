import { CreditCard, TrendingUp, Users } from 'lucide-react';

import { GlowBlob } from './GlowBlob';
import { SectionTitle } from './SectionTitle';
import { StepCard } from './StepCard';

import type { Step } from '../scroll/types';

const STEPS: Step[] = [
  {
    icon: <Users size={30} />,
    title: 'Cadastre seu escritório',
    text: 'Configure rapidamente sua empresa, equipes e clientes.',
  },
  {
    icon: <CreditCard size={30} />,
    title: 'Automatize cobranças',
    text: 'Boletos, PIX e notificações enviados automaticamente.',
  },
  {
    icon: <TrendingUp size={30} />,
    title: 'Acompanhe resultados',
    text: 'Visualize métricas e indicadores em tempo real.',
  },
];

export function HowItWorks() {
  return (
    <section
      className='
        relative
        overflow-hidden

        bg-[#050B18]

        py-20
        sm:py-28
        lg:py-36
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


          -left-40

          top-10

          opacity-30
        '
      />

      <GlowBlob
        className='
          bg-[#C89B3C]

          w-48
          h-48

          sm:w-72
          sm:h-72

          lg:w-[350px]
          lg:h-[350px]


          right-[-100px]

          bottom-0

          opacity-20
        '
      />

      <SectionTitle
        badge='COMO FUNCIONA'
        title='Comece em poucos minutos'
        description={`
          Uma plataforma simples de configurar,
          poderosa para utilizar e pronta para
          crescer junto com seu escritório.
          `}
      />

      <div
        className='
          relative

          max-w-6xl

          mx-auto


          mt-12
          sm:mt-16
          lg:mt-24


          px-5
          sm:px-8
        '
      >
        {/* LINHA CENTRAL */}

        <div
          className='
            absolute

            hidden
            lg:block


            left-1/2

            top-0
            bottom-0


            w-[2px]


            bg-linear-to-b

            from-transparent

            via-[#E1BF72]

            to-transparent


            opacity-70


            rounded-full
          '
        />

        <div
          className='
            space-y-6

            sm:space-y-8

            lg:space-y-0
          '
        >
          {STEPS.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
