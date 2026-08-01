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

        bg-[#08162F]

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

          lg:w-[500px]
          lg:h-[500px]

          -left-32
          top-10
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

          right-[-60px]

          bottom-0
        '
      />

      <SectionTitle
        badge='QUEM USA'
        title='Escritórios que cresceram com a JurisPag'
        description={'Mais produtividade,\nmenos inadimplência\ne muito mais controle financeiro.'}
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
                rounded-3xl
                lg:rounded-[34px]

                border

                border-white/10

                bg-white/5

                backdrop-blur-xl

                p-5
                sm:p-8
                lg:p-10

                transition-all

                duration-300

                hover:-translate-y-3

                hover:scale-[1.03]
              '
            >
              {/* STARS */}
              <div
                className='
                  flex
                  gap-1

                  mb-4
                  sm:mb-6
                '
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className='text-sm sm:text-base'>
                    ⭐
                  </span>
                ))}
              </div>

              {/* TEXT */}
              <p
                className='
                  text-gray-200

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

                  gap-3
                  sm:gap-4

                  mt-6
                  sm:mt-8
                '
              >
                <div
                  className='
                    w-12
                    h-12

                    sm:w-16
                    sm:h-16

                    rounded-full

                    bg-linear-to-br

                    from-[#C89B3C]

                    to-[#E1BF72]

                    flex
                    items-center
                    justify-center

                    text-[#08162F]

                    font-black

                    text-lg
                    sm:text-xl
                  '
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4
                    className='
                      text-white

                      font-bold

                      text-sm
                      sm:text-lg
                    '
                  >
                    {item.name}
                  </h4>

                  <p
                    className='
                      text-gray-400

                      text-xs
                      sm:text-base
                    '
                  >
                    {item.office}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
