import { CreditCard, TrendingUp, Users } from 'lucide-react';
import { GlowBlob } from './GlowBlob';
import { SectionTitle } from './SectionTitle';
import { StepCard } from './StepCard';
import type { Step } from '../scroll/types';

const STEPS: Step[] = [
  {
    icon: <Users size={34} />,
    title: 'Cadastre seu escritório',
    text: 'Configure rapidamente sua empresa, equipes e clientes.',
  },
  {
    icon: <CreditCard size={34} />,
    title: 'Automatize cobranças',
    text: 'Boletos, PIX e notificações enviados automaticamente.',
  },
  {
    icon: <TrendingUp size={34} />,
    title: 'Acompanhe resultados',
    text: 'Visualize métricas e indicadores em tempo real.',
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-36 overflow-hidden bg-[#F5F7FA]">
      <GlowBlob className="bg-[#183A72] w-[450px] h-[450px] -left-40 top-10" />
      <GlowBlob className="bg-[#C89B3C] w-[380px] h-[380px] right-0 bottom-0" />

      <SectionTitle
        badge="COMO FUNCIONA"
        title="Comece em poucos minutos"
        description={
          'Uma plataforma simples de configurar,\npoderosa para utilizar e pronta para\ncrescer junto com seu escritório.'
        }
      />

      <div className="relative max-w-6xl mx-auto mt-24 px-6">
        <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C89B3C] via-[#183A72] to-[#08162F] rounded-full" />

        {STEPS.map((step, index) => (
          <StepCard key={step.title} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
