import { CreditCard, TrendingUp, Users } from 'lucide-react';

import type { Feature } from '../scroll/types';

import { FeatureCard } from './FeatureCard';
import { GlowBlob } from './GlowBlob';
import { SectionTitle } from './SectionTitle';

const FEATURES: Feature[] = [
  {
    icon: <CreditCard size={30} />,
    title: 'Cobranças automáticas',
    text: 'Envie lembretes e acompanhe cada recebimento sem planilhas.',
  },
  {
    icon: <TrendingUp size={30} />,
    title: 'Caixa em tempo real',
    text: 'Veja o que entrou, o que vence e onde agir em uma única tela.',
  },
  {
    icon: <Users size={30} />,
    title: 'Clientes organizados',
    text: 'Centralize contratos, parcelas e histórico financeiro.',
  },
];

export function Benefits() {
  return (
    <section id='recursos' className='relative overflow-hidden bg-[#050B18] py-16 sm:py-20 lg:py-24'>
      <GlowBlob className='-left-40 top-10 h-72 w-72 bg-[#183A72] opacity-25 lg:h-[420px] lg:w-[420px]' />

      <div className='relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <SectionTitle
          badge='SIMPLES E COMPLETO'
          title='Menos tarefas. Mais controle.'
          description='O essencial para cuidar do financeiro sem complicar a rotina do escritório.'
        />

        <div className='mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3 lg:gap-7'>
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
