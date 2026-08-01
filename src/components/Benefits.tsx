import { Bell, CreditCard, Shield, Sparkles, TrendingUp, Users } from 'lucide-react';

import { GlowBlob } from './GlowBlob';
import { SectionTitle } from './SectionTitle';
import { FeatureCard } from './FeatureCard';
import type { Feature } from '../scroll/types';

const FEATURES: Feature[] = [
  {
    icon: <CreditCard size={32} />,
    title: 'Cobrança Inteligente',
    text: 'Emita cobranças automaticamente,\nenvie lembretes e acompanhe cada\npagamento em tempo real.',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Relatórios Completos',
    text: 'Visualize gráficos,\nindicadores e métricas\nfinanceiras instantaneamente.',
  },
  {
    icon: <Users size={32} />,
    title: 'Gestão de Clientes',
    text: 'Centralize informações,\nhistórico financeiro\ne andamento de cada cliente.',
  },
  {
    icon: <Bell size={32} />,
    title: 'Notificações',
    text: 'Receba alertas sobre\nvencimentos, atrasos\ne novas movimentações.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Segurança',
    text: 'Dados protegidos,\nbackups automáticos\ne criptografia avançada.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Automação',
    text: 'Economize horas de trabalho\nautomatizando processos\nrepetitivos.',
  },
];

export function Benefits() {
  return (
    <section
      className='
        relative 
        overflow-hidden 
        bg-white
        py-20
        sm:py-28
        lg:py-36
      '
    >
      <GlowBlob
        className='
          bg-[#183A72]
          w-56
          h-56
          sm:w-72
          sm:h-72
          lg:w-[420px]
          lg:h-[420px]
          -left-28
          top-10
          opacity-40
        '
      />

      <GlowBlob
        className='
          bg-[#C89B3C]
          w-48
          h-48
          sm:w-64
          sm:h-64
          lg:w-[350px]
          lg:h-[350px]
          right-[-80px]
          bottom-0
          opacity-40
        '
      />

      <div
        className='
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
        '
      >
        <SectionTitle
          badge='POR QUE ESCOLHER'
          title='Tudo que seu escritório precisa'
          description={'Automatize tarefas repetitivas,\nreduza erros e acompanhe toda\na saúde financeira em um único lugar.'}
        />

        <div
          className='
            mt-12
            sm:mt-16
            lg:mt-20

            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-5
            sm:gap-6
            lg:gap-8
          '
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              delay={(index % 3) * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
