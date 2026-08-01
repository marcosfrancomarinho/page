import { ArrowRight } from 'lucide-react';
import { GlowBlob } from './GlowBlob';

const PRODUCT_LINKS = ['Recursos', 'Benefícios', 'Como funciona'];

export function Footer() {
  return (
    <footer
      className='
        relative
        overflow-hidden

        bg-[#050B18]

        pt-16
        sm:pt-20
        lg:pt-24

        pb-8
      '
    >
      <GlowBlob
        className='
          bg-[#183A72]

          w-72
          h-72

          sm:w-96
          sm:h-96

          lg:w-[450px]
          lg:h-[450px]

          left-1/2
          -translate-x-1/2

          top-0

          opacity-25
        '
      />

      <div
        className='
          relative
          z-10

          max-w-7xl

          mx-auto

          px-5
          sm:px-8
          lg:px-10


          grid

          grid-cols-1

          sm:grid-cols-2

          lg:grid-cols-4


          gap-10
        '
      >
        {/* MARCA */}

        <div
          className='
            sm:col-span-2
            lg:col-span-2
          '
        >
          <h2
            className='
              text-3xl

              font-black

              text-white
            '
          >
            Juris
            <span className='text-[#E1BF72]'>Pag</span>
          </h2>

          <p
            className='
              mt-5

              max-w-sm

              text-gray-400

              leading-7
            '
          >
            Gestão financeira inteligente para escritórios que querem mais controle e produtividade.
          </p>

          <button
            className='
              mt-7

              flex
              items-center
              gap-2


              rounded-full

              px-6
              py-3


              bg-[#E1BF72]

              text-[#08162F]

              font-bold


              transition

              hover:scale-105
            '
          >
            Testar grátis
            <ArrowRight size={18} />
          </button>
        </div>

        {/* RECURSOS */}

        <div>
          <h4
            className='
              text-white

              font-bold

              mb-5
            '
          >
            Plataforma
          </h4>

          <ul
            className='
              space-y-4

              text-gray-400
            '
          >
            {PRODUCT_LINKS.map((item) => (
              <li
                key={item}
                className='
                  hover:text-[#E1BF72]

                  transition

                  cursor-pointer
                '
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTATO */}

        <div>
          <h4
            className='
              text-white

              font-bold

              mb-5
            '
          >
            Contato
          </h4>

          <div
            className='
              space-y-3

              text-gray-400
            '
          >
            <p>contato@jurispag.com</p>

            <p>+55 (11) 99999-9999</p>
          </div>
        </div>
      </div>

      <div
        className='
          relative
          z-10


          mt-14
          sm:mt-20


          mx-5
          sm:mx-8


          border-t

          border-white/10


          pt-6


          text-center


          text-sm


          text-gray-500
        '
      >
        © {new Date().getFullYear()} JurisPag. Todos os direitos reservados.
      </div>
    </footer>
  );
}
