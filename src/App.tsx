import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Bell, Check, ChevronUp, CreditCard, Shield, Sparkles, TrendingUp, Users } from 'lucide-react';

// =========================================================================
// Por que este arquivo mudou:
// O código original dependia de "framer-motion", "react-countup" e
// "react-helmet-async". Esses pacotes NÃO existem neste ambiente de
// artifacts (só React + lucide-react + algumas libs específicas estão
// disponíveis), por isso o preview quebrava com erros de import.
// Abaixo, recriei os mesmos efeitos (fade/scroll reveal, contagem
// animada, flutuação, barra de progresso de scroll) usando apenas
// React puro (useState/useEffect/IntersectionObserver) e CSS.
// =========================================================================

// ================= HOOK: revela elementos ao entrar na tela =================

function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

// ================= HOOK: contagem animada (substitui react-countup) =================

function useCountUp(end, visible, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = null;
    let frame;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [visible, end, duration]);

  return value;
}

// ================= COMPONENTES BASE =================

function GlowBlob({ className }) {
  return <div className={`absolute rounded-full blur-[120px] opacity-50 pointer-events-none ${className}`} />;
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ badge, title, description }) {
  return (
    <Reveal className="text-center max-w-3xl mx-auto">
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E1BF72]/20 text-[#C89B3C] font-bold text-sm">
        <Sparkles size={16} />
        {badge}
      </span>

      <h2 className="mt-6 text-5xl md:text-6xl font-black tracking-tight text-[#08162F] leading-tight">{title}</h2>

      <p className="mt-6 text-lg leading-8 text-[#8D97A8] whitespace-pre-line">{description}</p>
    </Reveal>
  );
}

function MiniCard({ icon, title, value }) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] bg-white border border-[#E9EDF4] p-5 shadow-[0_15px_40px_rgba(8,22,47,.08)] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03]">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-white/40 -skew-x-[25deg] animate-shimmer" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-[#08162F] text-[#E1BF72] flex items-center justify-center mb-4">{icon}</div>

        <p className="text-sm font-semibold text-[#8D97A8]">{title}</p>

        <h3 className="mt-2 text-3xl font-black text-[#08162F]">{value}</h3>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, text, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative overflow-hidden rounded-[32px] bg-white border border-[#E8ECF3] p-10 shadow-[0_18px_50px_rgba(8,22,47,.08)] transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02]">
        <div className="w-16 h-16 rounded-[18px] bg-gradient-to-br from-[#0F2345] to-[#183A72] text-[#E1BF72] flex items-center justify-center shadow-xl mb-7 group-hover:scale-110 transition">
          {icon}
        </div>

        <h3 className="text-2xl font-black text-[#08162F] mb-5">{title}</h3>

        <p className="text-[#8D97A8] leading-8 whitespace-pre-line">{text}</p>
      </div>
    </Reveal>
  );
}

// ================= NAVBAR =================

function Navbar() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`backdrop-blur-2xl bg-[#08162F]/70 border-b border-white/10 transition-all duration-700 ${
          loaded ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#183A72] to-[#08162F] flex items-center justify-center shadow-[0_0_35px_rgba(200,155,60,.45)]">
              <Shield size={24} className="text-[#E1BF72]" />
            </div>

            <div>
              <h1 className="text-2xl font-black text-white">
                Juris<span className="text-[#E1BF72]">Pag</span>
              </h1>

              <p className="text-xs text-gray-400">Gestão Jurídica Inteligente</p>
            </div>
          </div>

          <div className="hidden lg:flex gap-10">
            {['Recursos', 'Benefícios', 'Planos', 'Depoimentos'].map((item) => (
              <a key={item} href="#" className="text-gray-300 font-semibold hover:text-white transition">
                {item}
              </a>
            ))}
          </div>

          <button className="rounded-full px-7 py-3 bg-gradient-to-r from-[#C89B3C] to-[#E1BF72] text-[#08162F] font-black flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
            Teste Grátis
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}

// ================= HERO =================

function Hero() {
  const [ref, visible] = useReveal({ threshold: 0.1 });
  const clientes = useCountUp(500, visible);
  const pagamentos = useCountUp(120, visible);
  const eficiencia = useCountUp(98, visible);

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] pt-28 pb-36">
      <GlowBlob className="bg-[#183A72] w-[550px] h-[550px] -top-48 -left-48" />
      <GlowBlob className="bg-[#C89B3C] w-[420px] h-[420px] top-10 right-0" />

      <div
        className="absolute inset-0 opacity-[.05]"
        style={{
          backgroundImage: 'linear-gradient(#08162F 1px,transparent 1px),linear-gradient(90deg,#08162F 1px,transparent 1px)',
          backgroundSize: '45px 45px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXTO */}
        <div ref={ref}>
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'}`}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-[#E1BF72]/20 text-[#C89B3C] font-bold">
              <Sparkles size={18} />
              Plataforma Jurídica Inteligente
            </span>
          </div>

          <h1
            className={`mt-8 text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#08162F] transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
          >
            Transforme a
            <span className="block bg-gradient-to-r from-[#183A72] via-[#C89B3C] to-[#183A72] bg-clip-text text-transparent">
              gestão financeira do seu escritório
            </span>
          </h1>

          <p
            className={`mt-8 text-xl leading-9 text-[#8D97A8] max-w-xl transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
          >
            Automatize cobranças, acompanhe pagamentos, reduza inadimplência e tenha controle completo da saúde
            financeira do seu escritório.
          </p>

          <div
            className={`mt-12 flex flex-wrap gap-5 transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
          >
            <button className="rounded-full px-8 py-4 bg-[#08162F] text-white font-bold flex items-center gap-3 shadow-xl transition-transform hover:scale-105 active:scale-95">
              Começar Agora
              <ArrowRight size={18} />
            </button>

            <button className="rounded-full border-2 border-[#C89B3C] px-8 py-4 font-bold text-[#08162F] hover:bg-[#C89B3C] hover:text-white transition">
              Ver Demonstração
            </button>
          </div>

          {/* ESTATÍSTICAS */}
          <div
            className={`mt-16 grid grid-cols-3 gap-6 transition-all duration-700 delay-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
          >
            <MiniCard icon={<Users size={22} />} title="Clientes" value={`${clientes}+`} />
            <MiniCard icon={<CreditCard size={22} />} title="Pagamentos" value={`${pagamentos}K`} />
            <MiniCard icon={<TrendingUp size={22} />} title="Eficiência" value={`${eficiencia}%`} />
          </div>
        </div>

        {/* DASHBOARD */}
        <Dashboard />
      </div>
    </section>
  );
}

// ================= DASHBOARD =================

function Dashboard() {
  const [ref, visible] = useReveal({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative">
      <div className="absolute -inset-10 bg-[#183A72]/20 blur-[80px] rounded-full" />

      <div
        className={`relative rounded-[32px] bg-white border border-[#E1E5ED] overflow-hidden shadow-[0_35px_90px_rgba(8,22,47,.18)] animate-float transition-all duration-700 ${
          visible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-[8deg]'
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-8 py-6 border-b">
          <div>
            <p className="text-sm text-gray-400">Dashboard</p>
            <h3 className="text-2xl font-black text-[#08162F]">Visão Geral</h3>
          </div>

          <Bell className="text-[#C89B3C]" />
        </div>

        <div className="p-8">
          <div className="grid grid-cols-3 gap-5">
            <MiniCard icon={<Users size={20} />} title="Clientes" value="542" />
            <MiniCard icon={<TrendingUp size={20} />} title="Receita" value="R$ 182k" />
            <MiniCard icon={<CreditCard size={20} />} title="Pagamentos" value="98%" />
          </div>

          {/* GRAFICO */}
          <div className="mt-10 h-64 rounded-3xl bg-[#F5F7FA] flex items-end justify-around px-8 overflow-hidden">
            {[35, 60, 45, 90, 70, 110, 85].map((height, index) => (
              <div
                key={index}
                className="w-10 rounded-t-xl bg-gradient-to-t from-[#08162F] via-[#183A72] to-[#E1BF72] transition-all ease-out"
                style={{
                  height: visible ? `${height * 2}px` : '0px',
                  transitionDuration: '800ms',
                  transitionDelay: `${index * 150}ms`,
                }}
              />
            ))}
          </div>

          {/* BARRAS */}
          <div className="mt-10 space-y-6">
            {[
              ['Cobranças', 92],
              ['Pagamentos', 76],
              ['Clientes', 88],
            ].map(([name, value]) => (
              <div key={name}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-[#08162F]">{name}</span>
                  <span className="text-[#C89B3C] font-bold">{value}%</span>
                </div>

                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#183A72] to-[#E1BF72] transition-all duration-[1300ms] ease-out"
                    style={{ width: visible ? `${value}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NOTIFICAÇÃO */}
      <div className="absolute -right-6 top-16 bg-[#08162F] rounded-2xl px-5 py-4 text-white shadow-2xl animate-bob">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C89B3C] flex items-center justify-center">
            <Check size={18} />
          </div>

          <div>
            <p className="font-bold">Pagamento Recebido</p>
            <p className="text-sm text-gray-300">+ R$ 8.450,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= BENEFÍCIOS =================

function Benefits() {
  const features = [
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
          {features.map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} delay={(i % 3) * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ================= NÚMEROS =================

function NumberCard({ value, label, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`text-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: visible ? `${index * 150}ms` : '0ms' }}
    >
      <h2 className="text-5xl font-black text-[#E1BF72] animate-pulse-scale">{value}</h2>
      <p className="mt-4 text-lg text-gray-300">{label}</p>
    </div>
  );
}

function Numbers() {
  const stats = [
    ['500+', 'Escritórios'],
    ['120 mil', 'Pagamentos'],
    ['98%', 'Satisfação'],
    ['24/7', 'Suporte'],
  ];

  return (
    <section className="relative py-28 bg-[#08162F] overflow-hidden">
      <GlowBlob className="bg-[#183A72] w-[500px] h-[500px] left-1/2 -translate-x-1/2 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {stats.map(([value, label], index) => (
          <NumberCard key={label} value={value} label={label} index={index} />
        ))}
      </div>
    </section>
  );
}

// ================= COMO FUNCIONA =================

function StepCard({ step, index }) {
  const [ref, visible] = useReveal();
  const fromLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex mb-20 ${fromLeft ? 'lg:justify-start' : 'lg:justify-end'} transition-all duration-700 ${
        visible ? 'opacity-100 translate-x-0' : `opacity-0 ${fromLeft ? '-translate-x-20' : 'translate-x-20'}`
      }`}
      style={{ transitionDelay: visible ? `${index * 150}ms` : '0ms' }}
    >
      <div className="lg:w-[46%] bg-white rounded-[30px] border border-[#E6EBF3] p-10 shadow-[0_20px_60px_rgba(8,22,47,.12)]">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#08162F] to-[#183A72] text-[#E1BF72] flex items-center justify-center mb-6">
          {step.icon}
        </div>

        <h3 className="text-3xl font-black text-[#08162F] mb-4">{step.title}</h3>

        <p className="text-[#8D97A8] leading-8 text-lg">{step.text}</p>
      </div>

      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#C89B3C] items-center justify-center font-black text-white shadow-xl">
        {index + 1}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
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

  return (
    <section className="relative py-36 overflow-hidden bg-[#F5F7FA]">
      <GlowBlob className="bg-[#183A72] w-[450px] h-[450px] -left-40 top-10" />
      <GlowBlob className="bg-[#C89B3C] w-[380px] h-[380px] right-0 bottom-0" />

      <SectionTitle
        badge="COMO FUNCIONA"
        title="Comece em poucos minutos"
        description={'Uma plataforma simples de configurar,\npoderosa para utilizar e pronta para\ncrescer junto com seu escritório.'}
      />

      <div className="relative max-w-6xl mx-auto mt-24 px-6">
        <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C89B3C] via-[#183A72] to-[#08162F] rounded-full" />

        {steps.map((step, index) => (
          <StepCard key={step.title} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}

// ================= DEPOIMENTOS =================

function Testimonials() {
  const testimonials = [
    {
      name: 'Mariana Costa',
      office: 'Costa Advocacia',
      text: 'Reduzimos mais de 60% da inadimplência em poucos meses.',
    },
    {
      name: 'Ricardo Almeida',
      office: 'Almeida & Associados',
      text: 'Hoje temos total controle dos pagamentos e recebimentos.',
    },
    {
      name: 'Fernanda Lima',
      office: 'FL Advogados',
      text: 'Economizamos horas de trabalho toda semana.',
    },
  ];

  return (
    <section className="relative py-36 overflow-hidden bg-[#08162F]">
      <GlowBlob className="bg-[#183A72] w-[500px] h-[500px] -left-40 top-20" />
      <GlowBlob className="bg-[#C89B3C] w-[350px] h-[350px] right-0 bottom-0" />

      <SectionTitle
        badge="QUEM USA"
        title="Escritórios que cresceram com a JurisPag"
        description={'Mais produtividade,\nmenos inadimplência\ne muito mais controle financeiro.'}
      />

      <div className="max-w-7xl mx-auto mt-20 px-6 grid lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 150}>
            <div className="rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-transform duration-300 hover:-translate-y-3 hover:scale-[1.03]">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              <p className="text-gray-200 leading-8 text-lg">"{item.text}"</p>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C89B3C] to-[#E1BF72] flex items-center justify-center text-[#08162F] font-black text-xl">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <p className="text-gray-400">{item.office}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ================= CTA FINAL =================

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-36 bg-[#F5F7FA]">
      <GlowBlob className="bg-[#183A72] w-[500px] h-[500px] left-1/2 -translate-x-1/2" />

      <Reveal className="relative z-10 max-w-5xl mx-auto px-8 py-20 rounded-[40px] bg-gradient-to-br from-[#08162F] via-[#183A72] to-[#08162F] text-center shadow-[0_40px_100px_rgba(8,22,47,.3)]">
        <h2 className="text-5xl font-black text-white">Pronto para transformar seu escritório?</h2>

        <p className="mt-8 text-xl text-gray-300 leading-9 max-w-2xl mx-auto">
          Centralize pagamentos, automatize cobranças e acompanhe sua operação em tempo real.
        </p>

        <button className="mt-12 px-10 py-5 rounded-full bg-[#E1BF72] text-[#08162F] font-black text-lg flex items-center gap-3 mx-auto transition-transform hover:scale-105 active:scale-95">
          Solicitar Demonstração
          <ArrowRight size={20} />
        </button>
      </Reveal>
    </section>
  );
}

// ================= FOOTER =================

function Footer() {
  return (
    <footer className="relative bg-[#08162F] pt-24 pb-10 overflow-hidden">
      <GlowBlob className="bg-[#183A72] w-[450px] h-[450px] left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-3xl font-black text-white">
            Juris<span className="text-[#E1BF72]">Pag</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Plataforma inteligente para gestão financeira de escritórios de advocacia.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Produto</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Recursos</li>
            <li>Planos</li>
            <li>Integrações</li>
            <li>API</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Empresa</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Sobre</li>
            <li>Contato</li>
            <li>Blog</li>
            <li>Carreiras</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contato</h4>
          <p className="text-gray-400">contato@jurispag.com</p>
          <p className="text-gray-400 mt-3">+55 (11) 99999-9999</p>
        </div>
      </div>

      <div className="relative z-10 mt-20 border-t border-white/10 pt-8 text-center text-gray-500">
        © {new Date().getFullYear()} JurisPag. Todos os direitos reservados.
      </div>
    </footer>
  );
}

// ================= APP PRINCIPAL =================

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(progress);
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="font-sans">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bob {
          animation: bob 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-120%) skewX(-25deg); }
          60%, 100% { transform: translateX(220%) skewX(-25deg); }
        }
        .animate-shimmer {
          animation: shimmer 3.2s ease-in-out infinite;
        }
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        .animate-pulse-scale {
          animation: pulseScale 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-bob, .animate-shimmer, .animate-pulse-scale {
            animation: none !important;
          }
          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Barra de progresso */}
      <div
        className="fixed top-0 left-0 h-1 z-[999] bg-gradient-to-r from-[#183A72] via-[#C89B3C] to-[#E1BF72] origin-left"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar />

      <div className="h-20" />

      <Hero />
      <Benefits />
      <Numbers />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#08162F] text-[#E1BF72] flex items-center justify-center shadow-xl z-50 transition-all duration-300 hover:scale-110 active:scale-90 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp />
      </button>
    </div>
  );
}