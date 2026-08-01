import { GlowBlob } from './GlowBlob';

const PRODUCT_LINKS: string[] = ['Recursos', 'Planos', 'Integrações', 'API'];

const COMPANY_LINKS: string[] = ['Sobre', 'Contato', 'Blog', 'Carreiras'];

export function Footer() {
  return (
    <footer
      className='
        relative
        overflow-hidden

        bg-[#08162F]

        pt-16
        sm:pt-20
        lg:pt-24

        pb-8
      '
    >
      <GlowBlob
        className='
          bg-[#183A72]

          w-64
          h-64

          sm:w-96
          sm:h-96

          lg:w-[450px]
          lg:h-[450px]

          left-1/2
          -translate-x-1/2

          opacity-50
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
          sm:gap-12
        '
      >
        {/* BRAND */}
        <div className='sm:col-span-2 lg:col-span-1'>
          <h2
            className='
              text-2xl
              sm:text-3xl

              font-black
              text-white
            '
          >
            Juris
            <span className='text-[#E1BF72]'>Pag</span>
          </h2>

          <p
            className='
              mt-4
              sm:mt-6

              text-sm
              sm:text-base

              text-gray-400

              leading-7
            '
          >
            Plataforma inteligente para gestão financeira de escritórios de advocacia.
          </p>
        </div>

        {/* PRODUTO */}
        <div>
          <h4
            className='
            text-white
            font-bold
            mb-4
            sm:mb-6
          '
          >
            Produto
          </h4>

          <ul
            className='
            space-y-3
            sm:space-y-4
            text-gray-400
            text-sm
            sm:text-base
          '
          >
            {PRODUCT_LINKS.map((link) => (
              <li
                key={link}
                className='
                  cursor-pointer
                  hover:text-[#E1BF72]
                  transition
                '
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* EMPRESA */}
        <div>
          <h4
            className='
            text-white
            font-bold
            mb-4
            sm:mb-6
          '
          >
            Empresa
          </h4>

          <ul
            className='
            space-y-3
            sm:space-y-4
            text-gray-400
            text-sm
            sm:text-base
          '
          >
            {COMPANY_LINKS.map((link) => (
              <li
                key={link}
                className='
                  cursor-pointer
                  hover:text-[#E1BF72]
                  transition
                '
              >
                {link}
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
            mb-4
            sm:mb-6
          '
          >
            Contato
          </h4>

          <div
            className='
            space-y-3
            text-sm
            sm:text-base
            text-gray-400
          '
          >
            <p>contato@jurispag.com</p>

            <p>+55 (11) 99999-9999</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        className='
          relative
          z-10

          mt-12
          sm:mt-16
          lg:mt-20

          mx-5
          sm:mx-8

          border-t
          border-white/10

          pt-6
          sm:pt-8

          text-center

          text-xs
          sm:text-sm

          text-gray-500
        '
      >
        © {new Date().getFullYear()} JurisPag. Todos os direitos reservados.
      </div>
    </footer>
  );
}
