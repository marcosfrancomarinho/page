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

        bg-[#F5F7FA]
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

          left-1/2
          -translate-x-1/2

          opacity-60
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
          from-[#08162F]
          via-[#183A72]
          to-[#08162F]

          text-center

          shadow-[0_30px_80px_rgba(8,22,47,.3)]
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
          Pronto para transformar seu escritório?
        </h2>

        <p
          className='
            mt-5
            sm:mt-8

            text-base
            sm:text-lg
            lg:text-xl

            text-gray-300

            leading-7
            sm:leading-9

            max-w-2xl
            mx-auto
          '
        >
          Centralize pagamentos, automatize cobranças e acompanhe sua operação em tempo real.
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

            bg-[#E1BF72]

            text-[#08162F]

            font-black

            text-base
            sm:text-lg

            flex
            items-center
            justify-center

            gap-3

            mx-auto

            transition-transform

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
