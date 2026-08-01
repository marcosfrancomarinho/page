import { GlowBlob } from './GlowBlob';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import type { Testimonial } from '../scroll/types';

const TESTIMONIALS: Testimonial[] = [
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

export function Testimonials() {
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
        {TESTIMONIALS.map((item, index) => (
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
