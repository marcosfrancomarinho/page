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

        bg-[#F5F7FA]

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

          lg:w-[450px]
          lg:h-[450px]

          -left-32
          top-10
        '
      />

      <GlowBlob
        className='
          bg-[#C89B3C]

          w-52
          h-52

          sm:w-72
          sm:h-72

          lg:w-[380px]
          lg:h-[380px]

          right-[-80px]
          bottom-0
        '
      />

      <SectionTitle
        badge='COMO FUNCIONA'
        title='Comece em poucos minutos'
        description={
          'Uma plataforma simples de configurar,\npoderosa para utilizar e pronta para\ncrescer junto com seu escritório.'
        }
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
        {/* LINHA DESKTOP */}
        <div
          className='
            absolute

            hidden
            lg:block

            left-1/2

            top-0
            bottom-0

            w-1

            bg-linear-to-b

            from-[#C89B3C]
            via-[#183A72]
            to-[#08162F]

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
