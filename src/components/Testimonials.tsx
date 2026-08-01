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

          w-72
          h-72

          lg:w-[520px]
          lg:h-[520px]

          -left-40
          top-10

          opacity-30
        '
      />

      <GlowBlob
        className='
          bg-[#C89B3C]

          w-52
          h-52

          lg:w-[380px]
          lg:h-[380px]

          right-[-100px]

          bottom-0

          opacity-20
        '
      />

      <SectionTitle
        badge='DEPOIMENTOS'
        title='Empresas que simplificaram sua gestão'
        description={'Mais controle financeiro,\nmenos tarefas manuais\ne mais tempo para crescer.'}
      />

      <div
        className='
          max-w-7xl

          mx-auto

          mt-12
          sm:mt-16
          lg:mt-20

          px-5
          sm:px-8

          grid

          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3

          gap-5
          sm:gap-8
        '
      >
        {TESTIMONIALS.map((item, index) => (
          <Reveal key={item.name} delay={index * 150}>
            <div
              className='
                group

                relative

                overflow-hidden

                rounded-3xl

                lg:rounded-[36px]

                border

                border-white/10

                bg-white/5

                backdrop-blur-xl

                p-6
                sm:p-8
                lg:p-10

                shadow-[0_20px_60px_rgba(0,0,0,.35)]

                transition-all

                duration-300

                hover:-translate-y-3

                hover:border-[#E1BF72]/40
              '
            >
              {/* HOVER GLOW */}
              <div
                className='
                  absolute
                  inset-0

                  bg-linear-to-br

                  from-[#183A72]/20

                  to-[#C89B3C]/10

                  opacity-0

                  group-hover:opacity-100

                  transition-opacity
                '
              />

              <div className='relative z-10'>
                {/* STARS */}
                <div
                  className='
                    flex
                    gap-1

                    mb-5
                  '
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className='
                        text-[#E1BF72]
                        text-lg
                      '
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* TEXT */}
                <p
                  className='
                    text-gray-300

                    text-sm
                    sm:text-base
                    lg:text-lg

                    leading-7
                    sm:leading-8
                  '
                >
                  "{item.text}"
                </p>

                {/* USER */}
                <div
                  className='
                    flex
                    items-center

                    gap-4

                    mt-8
                  '
                >
                  <div
                    className='
                      w-14
                      h-14

                      rounded-full

                      bg-linear-to-br

                      from-[#E1BF72]

                      to-[#C89B3C]

                      flex
                      items-center
                      justify-center

                      text-[#08162F]

                      font-black

                      text-xl

                      shadow-[0_0_25px_rgba(225,191,114,.25)]
                    '
                  >
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4
                      className='
                        text-white

                        font-bold

                        text-base
                      '
                    >
                      {item.name}
                    </h4>

                    <p
                      className='
                        text-gray-400

                        text-sm
                      '
                    >
                      {item.office}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
