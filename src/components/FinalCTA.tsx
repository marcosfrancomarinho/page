import { ArrowRight } from 'lucide-react';

import { GlowBlob } from './GlowBlob';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section
      className='
        relative
        overflow-hidden

        py-20
        sm:py-28
        lg:py-36

        bg-[#050B18]
      '
    >
      <GlowBlob
        className='
          bg-[#183A72]

          w-72
          h-72

          sm:w-96
          sm:h-96

          lg:w-[520px]
          lg:h-[520px]

          left-1/2
          -translate-x-1/2

          top-10

          opacity-30
        '
      />

      <GlowBlob
        className='
          bg-[#C89B3C]

          w-48
          h-48

          right-0
          bottom-0

          opacity-20
        '
      />

      <Reveal
        className='
          relative
          z-10

          max-w-5xl

          mx-auto

          mx-5
          sm:mx-8


          px-5
          sm:px-10
          lg:px-20


          py-12
          sm:py-16
          lg:py-20


          rounded-3xl

          lg:rounded-[40px]


          bg-linear-to-br

          from-[#0D1B33]

          via-[#183A72]

          to-[#08162F]


          border
          border-white/10


          text-center


          shadow-[0_40px_120px_rgba(0,0,0,.45)]
        '
      >
        <h2
          className='
            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-black

            leading-tight

            text-white
          '
        >
          Pronto para simplificar sua gestão financeira?
        </h2>

        <p
          className='
            mt-5
            sm:mt-8

            text-base
            sm:text-lg
            lg:text-xl

            text-slate-300

            leading-7
            sm:leading-9

            max-w-2xl

            mx-auto
          '
        >
          Automatize cobranças, organize clientes e tenha controle total do seu escritório.
        </p>

        <button
          className='
            mt-8
            sm:mt-12


            w-full
            sm:w-auto


            px-8
            sm:px-10


            py-4
            sm:py-5


            rounded-full


            bg-linear-to-r

            from-[#C89B3C]

            to-[#E1BF72]


            text-[#08162F]


            font-black


            text-base
            sm:text-lg


            flex
            items-center
            justify-center


            gap-3


            mx-auto


            shadow-[0_15px_40px_rgba(225,191,114,.25)]


            transition-all


            hover:scale-105


            active:scale-95
          '
        >
          Solicitar Demonstração
          <ArrowRight size={20} />
        </button>
      </Reveal>
    </section>
  );
}
