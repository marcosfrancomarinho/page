import {
  Bell,
  CreditCard,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';

import { GlowBlob } from './GlowBlob';
import { SectionTitle } from './SectionTitle';
import { FeatureCard } from './FeatureCard';

import type { Feature } from '../scroll/types';



const FEATURES: Feature[] = [
  {
    icon: <CreditCard size={30} />,
    title: 'Cobranças Inteligentes',
    text: 'Automatize cobranças, lembretes e acompanhe recebimentos.',
  },
  {
    icon: <TrendingUp size={30} />,
    title: 'Visão Financeira',
    text: 'Tenha indicadores claros para tomar decisões melhores.',
  },
  {
    icon: <Users size={30} />,
    title: 'Gestão de Clientes',
    text: 'Centralize clientes, contratos e informações financeiras.',
  },
  {
    icon: <Bell size={30} />,
    title: 'Alertas Automáticos',
    text: 'Receba notificações sobre prazos e movimentações.',
  },
  {
    icon: <Shield size={30} />,
    title: 'Dados Protegidos',
    text: 'Segurança avançada para manter suas informações seguras.',
  },
  {
    icon: <Sparkles size={30} />,
    title: 'Mais Eficiência',
    text: 'Reduza tarefas manuais e aumente sua produtividade.',
  },
];



export function Benefits() {
  return (
    <section
      id="recursos"
      className="
        relative
        overflow-hidden

        bg-[#050B18]

        py-16
        sm:py-24
        lg:py-32
      "
    >


      <GlowBlob
        className="
          bg-[#183A72]

          w-72
          h-72

          lg:w-[450px]
          lg:h-[450px]

          -left-40
          top-20

          opacity-30
        "
      />


      <GlowBlob
        className="
          bg-[#C89B3C]

          w-56
          h-56

          lg:w-[350px]
          lg:h-[350px]

          right-[-120px]

          bottom-0

          opacity-20
        "
      />



      <div
        className="
          relative
          z-10

          max-w-7xl

          mx-auto

          px-5
          sm:px-8
          lg:px-10
        "
      >


        <SectionTitle
          badge="POR QUE ESCOLHER"
          title="Tudo que seu escritório precisa"
          description={
            'Automatize sua operação,\nreduza erros e tenha controle\nfinanceiro em um único lugar.'
          }
        />



        <div
          className="
            mt-12
            sm:mt-16

            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-5
            lg:gap-8
          "
        >

          {FEATURES.map((feature,index)=>(
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