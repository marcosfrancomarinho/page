import React, { useEffect, useRef, useState } from "react";

/**
 * JurisPag — Landing Page
 * Inspirado em contaazul.com: azul vibrante, amarelo de contraste,
 * tipografia grande e redonda, muita animação.
 *
 * Estilização 100% Tailwind CSS. Requer Tailwind já configurado no projeto.
 * As poucas coisas que o Tailwind não cobre por padrão (fontes do Google
 * e @keyframes customizados) ficam no <style> no fim do arquivo — cole
 * esse bloco no seu index.css se preferir tirar daqui.
 */

/* ------------------------------------------------------------------ */
/* Hook: revela um elemento com fade/slide quando entra na viewport   */
/* ------------------------------------------------------------------ */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

/* ------------------------------------------------------------------ */
/* Hook: conta de 0 até um valor-alvo quando o elemento aparece       */
/* ------------------------------------------------------------------ */
function useCountUp(target: number, visible: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);

  return value;
}

/* ------------------------------------------------------------------ */
/* Classe utilitária para o efeito de reveal (fade + slide-up)        */
/* ------------------------------------------------------------------ */
const revealCls = (visible: boolean) =>
  `transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;

const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`${revealCls(visible)} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Dados */
/* ------------------------------------------------------------------ */
type Feature = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M3 3v18h18M7 15l4-5 3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Fluxo de recebimentos",
    text: "Veja o que entra, o que atrasa e o que ainda vai vencer, em um painel só.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path
          d="M21 11.5a8.4 8.4 0 01-8.9 8.4 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8A8.5 8.5 0 0112.5 3h.5a8.5 8.5 0 018 8.5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Cobrança automática",
    text: "Lembretes por WhatsApp e e-mail antes do vencimento, sem precisar lembrar.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Acordos e parcelas",
    text: "Cadastre um acordo, quebre em parcelas e acompanhe até a última.",
  },
];

const LOGOS = [
  "Nogueira Advocacia",
  "Ribeiro & Bastos",
  "Salgado Sociedade",
  "Cartório Almeida",
  "Costa & Martins",
  "Ferreira Associados",
];

const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 94, suffix: "%", label: "de adimplência média na plataforma" },
  { value: 340, suffix: "+", label: "escritórios usando o JurisPag" },
  { value: 12, suffix: "h/mês", label: "economizadas com cobrança automática" },
];

/* ------------------------------------------------------------------ */
/* App */
/* ------------------------------------------------------------------ */
export default function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const statsBlock = useReveal<HTMLDivElement>();

  const onHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px, y: py });
  };

  return (
    <div className="bg-white text-[#0a1f2c] font-['Inter',_system-ui,_sans-serif] overflow-x-hidden">
      {/* ---------------- NAV ---------------- */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#0a1f44]/[0.06]">
        <div className="max-w-[1180px] mx-auto px-7 py-4 flex items-center gap-7">
          <a href="#top" className="flex items-center gap-2 font-['Baloo_2',_sans-serif] font-extrabold text-xl text-[#0a1f44]">
            <span className="w-3 h-3 rounded-[4px] bg-gradient-to-br from-[#ffc93c] to-[#2f5cff]" />
            JurisPag
          </a>
          <div className="hidden md:flex gap-7 flex-1 justify-center">
            <a href="#produto" className="text-sm font-semibold text-[#31446e]/85 hover:opacity-100 hover:text-[#31446e]">
              Produto
            </a>
            <a href="#numeros" className="text-sm font-semibold text-[#31446e]/85 hover:opacity-100 hover:text-[#31446e]">
              Números
            </a>
            <a href="#depoimento" className="text-sm font-semibold text-[#31446e]/85 hover:opacity-100 hover:text-[#31446e]">
              Clientes
            </a>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-[#0a1f44] text-white font-bold text-[13.5px] px-5 py-2.5 transition-all hover:bg-[#123a8c] active:scale-95"
          >
            Testar grátis
          </a>
        </div>
      </nav>

      {/* ---------------- HERO ---------------- */}
      <header
        id="top"
        ref={heroRef}
        onMouseMove={onHeroMove}
        className="relative overflow-hidden pt-24 px-7 bg-gradient-to-b from-[#eef2ff] via-[#f4f7ff] to-[#f4f7ff]"
      >
        <div
          className="absolute w-[340px] h-[340px] -top-32 -right-20 rounded-full opacity-55 blur-[2px] animate-[float_11s_ease-in-out_infinite] transition-transform duration-300 ease-out bg-[radial-gradient(circle_at_30%_30%,#2f5cff,#5b7fff_70%)]"
          style={{ transform: `translate(${tilt.x * 30}px, ${tilt.y * 30}px)` }}
        />
        <div
          className="absolute w-[220px] h-[220px] bottom-10 -left-16 rounded-full opacity-55 blur-[2px] animate-[float_8s_ease-in-out_infinite_.6s] transition-transform duration-300 ease-out bg-[radial-gradient(circle_at_30%_30%,#ffc93c,#ffe08a_70%)]"
          style={{ transform: `translate(${tilt.x * -22}px, ${tilt.y * -22}px)` }}
        />
        <div
          className="absolute w-[130px] h-[130px] top-32 left-[8%] rounded-full opacity-35 blur-[2px] animate-[float_7s_ease-in-out_infinite_1.1s] transition-transform duration-300 ease-out bg-[radial-gradient(circle_at_30%_30%,#2f5cff,#8fa4ff_70%)]"
          style={{ transform: `translate(${tilt.x * 16}px, ${tilt.y * -16}px)` }}
        />

        <div className="relative max-w-[720px] mx-auto text-center pb-24">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 bg-white border border-[#2f5cff]/[0.18] text-[#123a8c] text-[13px] font-bold px-4 py-2 rounded-full mb-6 shadow-[0_8px_20px_rgba(47,92,255,0.08)]">
              ✦ Feito para advocacia e cartórios
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-['Baloo_2',_sans-serif] font-bold text-[38px] sm:text-[52px] md:text-[68px] leading-[1.05] tracking-[-1.5px] text-[#0a1f44] mb-5">
              Juntos, a gente
              <br />
              <span className="bg-gradient-to-r from-[#2f5cff] via-[#5b7fff] to-[#ffc93c] bg-clip-text text-transparent">
                dá conta
              </span>{" "}
              do seu
              <br />
              caixa jurídico.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg leading-relaxed text-[#4a5a78] max-w-[520px] mx-auto mb-8">
              Honorários, acordos e parcelas organizados em um só lugar. O JurisPag cobra automaticamente e te
              mostra exatamente quanto vai entrar este mês.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex gap-4 justify-center flex-wrap mb-14">
              <a
                href="#cta"
                className="inline-flex items-center rounded-full bg-[#ffc93c] text-[#0a1f2c] font-bold text-base px-8 py-4 shadow-[0_10px_26px_rgba(255,201,60,0.5)] transition-all hover:shadow-[0_14px_34px_rgba(255,201,60,0.65)] hover:-translate-y-0.5 active:scale-95"
              >
                Testar grátis
              </a>
              <a
                href="#produto"
                className="inline-flex items-center rounded-full bg-white text-[#123a8c] font-bold text-base px-8 py-4 border-2 border-[#dbe3f7] transition-all hover:border-[#2f5cff] hover:text-[#2f5cff] active:scale-95"
              >
                Ver como funciona
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="relative bg-white rounded-[28px] p-6 max-w-[420px] mx-auto shadow-[0_40px_90px_rgba(10,31,68,0.16)] animate-[cardFloat_6s_ease-in-out_infinite]">
              <div className="flex items-start justify-between mb-4">
                <div className="text-left">
                  <span className="block text-xs text-[#7a88a3] mb-1">Recebido este mês</span>
                  <strong className="font-['Baloo_2',_sans-serif] text-2xl font-extrabold text-[#0a1f44]">
                    R$ 132.980
                  </strong>
                </div>
                <span className="text-[11.5px] font-bold text-[#2f9e6f] bg-[#2f9e6f]/10 px-2.5 py-1.5 rounded-full">
                  ● 94% em dia
                </span>
              </div>
              <div className="flex items-end gap-1.5 h-16">
                {[38, 55, 44, 70, 60, 88, 76].map((h, i) => (
                  <i
                    key={i}
                    className={`flex-1 rounded-t-md animate-[grow_.9s_cubic-bezier(0.2,0.8,0.2,1)_both] ${
                      i >= 5 ? "bg-gradient-to-b from-[#ffe08a] to-[#ffc93c]" : "bg-gradient-to-b from-[#5b7fff] to-[#2f5cff]"
                    }`}
                    style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <svg className="relative block w-full h-20 -mt-px" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C320,120 1120,0 1440,64 L1440,120 L0,120 Z" fill="#f4f7ff" />
        </svg>
      </header>

      {/* ---------------- MARQUEE ---------------- */}
      <section className="bg-[#f4f7ff] py-6 overflow-hidden border-b border-[#0a1f44]/5">
        <div className="w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex gap-14 w-max animate-[marquee_22s_linear_infinite]">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span key={i} className="font-['Baloo_2',_sans-serif] font-bold text-[17px] text-[#8896b5] whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section id="produto" className="max-w-[1080px] mx-auto px-7 py-24">
        <Reveal className="text-center mb-14">
          <span className="block text-[12.5px] font-extrabold tracking-[1.2px] uppercase text-[#2f5cff] mb-3">
            Produto
          </span>
          <h2 className="font-['Baloo_2',_sans-serif] text-[28px] md:text-[40px] leading-[1.15] tracking-[-1px] text-[#0a1f44]">
            Tudo que sai e entra da
            <br />
            banca,{" "}
            <span className="relative inline-block">
              <span className="absolute left-0 right-0 bottom-0.5 h-3 bg-[#ffc93c]/55 -z-10 rounded" />
              num só lugar.
            </span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <div className="bg-[#f4f7ff] rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(10,31,68,0.12)] hover:bg-white">
                <div className="w-[52px] h-[52px] rounded-2xl grid place-items-center mb-5 bg-gradient-to-br from-[#2f5cff] to-[#5b7fff] text-white">
                  <span className="w-6 h-6">{f.icon}</span>
                </div>
                <h3 className="font-['Baloo_2',_sans-serif] text-lg text-[#0a1f44] mb-2">{f.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-[#5b6b82] m-0">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section id="numeros" className="max-w-[1080px] mx-auto px-7 py-24">
        <div
          ref={statsBlock.ref}
          className="relative overflow-hidden rounded-[40px] bg-[#0a1f44] text-white p-12 md:p-16 bg-[radial-gradient(circle_at_85%_0%,rgba(255,201,60,0.14),transparent_45%),radial-gradient(circle_at_5%_100%,rgba(47,92,255,0.3),transparent_45%)]"
        >
          <div className="relative grid md:grid-cols-3 gap-8 text-center">
            {STATS.map((s, i) => (
              <StatBlock key={s.label} {...s} visible={statsBlock.visible} delay={i * 140} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIAL ---------------- */}
      <section id="depoimento" className="max-w-[1080px] mx-auto px-7 py-24">
        <Reveal className="max-w-[640px] mx-auto text-center relative">
          <svg className="w-[52px] mx-auto mb-4" viewBox="0 0 40 32" fill="none">
            <path
              d="M0 32V19.7C0 8.4 6.4 1.4 16.6 0l1.6 5.2c-6 1.6-9 5.4-9 10.2h9V32H0zm22.4 0V19.7C22.4 8.4 28.8 1.4 39 0l1.6 5.2c-6 1.6-9 5.4-9 10.2h9V32H22.4z"
              fill="#2f5cff"
              opacity=".18"
            />
          </svg>
          <p className="font-['Baloo_2',_sans-serif] text-[20px] md:text-[28px] leading-snug text-[#0a1f44] mb-7">
            Parei de perguntar quem tinha pagado. Abro o painel e já sei o que entrou, o que atrasou e o que
            falta cobrar.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="w-11 h-11 rounded-full grid place-items-center font-extrabold text-sm text-white bg-gradient-to-br from-[#2f5cff] to-[#5b7fff]">
              CN
            </span>
            <div className="flex flex-col text-left text-[13.5px]">
              <strong className="text-[#0a1f44]">Dra. Camila Nogueira</strong>
              <span className="text-[#7a88a3]">Nogueira Advocacia</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section id="cta" className="max-w-[1080px] mx-auto px-7 py-24">
        <Reveal className="relative overflow-hidden text-center rounded-[32px] bg-gradient-to-br from-[#123a8c] to-[#2f5cff] text-white px-8 py-16">
          <div className="absolute w-[340px] h-[340px] rounded-full opacity-30 -top-36 -right-24 animate-[float_10s_ease-in-out_infinite] bg-[radial-gradient(circle,#ffc93c,transparent_70%)]" />
          <h2 className="relative font-['Baloo_2',_sans-serif] text-[28px] md:text-[40px] mb-3">
            Seu escritório{" "}
            <span className="bg-gradient-to-r from-[#2f5cff] via-[#5b7fff] to-[#ffc93c] bg-clip-text text-transparent">
              no azul
            </span>
            <br />
            começa aqui.
          </h2>
          <p className="relative text-base text-[#d7deff] mb-7">Sem cartão de crédito. Leva menos de 5 minutos pra começar.</p>
          <a
            href="#"
            className="relative inline-flex items-center rounded-full bg-[#ffc93c] text-[#0a1f2c] font-bold text-base px-8 py-4 shadow-[0_10px_26px_rgba(255,201,60,0.5)] transition-all hover:shadow-[0_14px_34px_rgba(255,201,60,0.65)] hover:-translate-y-0.5 active:scale-95"
          >
            Testar grátis por 14 dias
          </a>
        </Reveal>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="max-w-[1080px] mx-auto px-7 pt-10 pb-14 flex items-center justify-between flex-wrap gap-3.5 border-t border-[#0a1f44]/10">
        <span className="flex items-center gap-2 font-['Baloo_2',_sans-serif] font-extrabold text-[17px] text-[#0a1f44]">
          <span className="w-3 h-3 rounded-[4px] bg-gradient-to-br from-[#ffc93c] to-[#2f5cff]" />
          JurisPag
        </span>
        <span className="text-[13px] text-[#8896b5]">© 2026 JurisPag. Todos os direitos reservados.</span>
      </footer>

      {/* Google Fonts + @keyframes que o Tailwind não tem por padrão.
          Se preferir, mova este bloco para o seu index.css / index.html. */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes float{0%,100%{translate:0 0}50%{translate:0 -22px}}
        @keyframes cardFloat{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-12px) rotate(1deg)}}
        @keyframes grow{from{transform:scaleY(0);transform-origin:bottom}to{transform:scaleY(1)}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

        @media (prefers-reduced-motion: reduce){
          *{animation-duration:.01ms !important;transition-duration:.01ms !important}
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-componente: bloco de estatística animada                       */
/* ------------------------------------------------------------------ */
const StatBlock: React.FC<{
  value: number;
  suffix: string;
  label: string;
  visible: boolean;
  delay: number;
}> = ({ value, suffix, label, visible, delay }) => {
  const count = useCountUp(value, visible);
  return (
    <div className={revealCls(visible)} style={{ transitionDelay: `${delay}ms` }}>
      <span className="block font-['Baloo_2',_sans-serif] font-extrabold text-[34px] md:text-[52px] text-[#ffc93c] tracking-[-1px]">
        {count}
        {suffix}
      </span>
      <span className="block text-sm text-[#c3cee8] mt-2">{label}</span>
    </div>
  );
};
