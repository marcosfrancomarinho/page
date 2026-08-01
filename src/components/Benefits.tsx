import { Bell, CreditCard, Shield, Sparkles, TrendingUp, Users } from 'lucide-react';
import { GlowBlob } from './GlowBlob';
import { SectionTitle } from './SectionTitle';
import { FeatureCard } from './FeatureCard';
import type { Feature } from '../scroll/types';

const FEATURES: Feature[] = [
  {
    icon: <CreditCard size={34} />,
    title: 'Cobrança Inteligente',
    text: 'Emita cobranças automaticamente,\nenvie lembretes e acompanhe cada\npagamento em tempo real.',
  },
  {
    icon: <TrendingUp size={34} />,
    title: 'Relatórios Completos',
    text: 'Visualize gráficos,\nindicadores e métricas\nfinanceiras instantaneamente.',
  },
  {
    icon: <Users size={34} />,
    title: 'Gestão de Clientes',
    text: 'Centralize informações,\nhistórico financeiro\ne andamento de cada cliente.',
  },
  {
    icon: <Bell size={34} />,
    title: 'Notificações',
    text: 'Receba alertas sobre\nvencimentos, atrasos\ne novas movimentações.',
  },
  {
    icon: <Shield size={34} />,
    title: 'Segurança',
    text: 'Dados protegidos,\nbackups automáticos\ne criptografia avançada.',
  },
  {
    icon: <Sparkles size={34} />,
    title: 'Automação',
    text: 'Economize horas de trabalho\nautomatizando processos\nrepetitivos.',
  },
];

export function Benefits() {
  return (
    <section className="relative py-36 overflow-hidden bg-white">
      <GlowBlob className="bg-[#183A72] w-[420px] h-[420px] -left-40 top-20" />
      <GlowBlob className="bg-[#C89B3C] w-[350px] h-[350px] right-0 bottom-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          badge="POR QUE ESCOLHER"
          title="Tudo que seu escritório precisa"
          description={'Automatize tarefas repetitivas,\nreduza erros e acompanhe toda\na saúde financeira em um único lugar.'}
        />

        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} delay={(i % 3) * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
