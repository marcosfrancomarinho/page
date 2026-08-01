import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Shield, X } from 'lucide-react';

const NAV_ITEMS = ['Recursos', 'Benefícios', 'Planos', 'Depoimentos'] as const;

export function Navbar() {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 30);

    return () => clearTimeout(t);
  }, []);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div
        className={`
          backdrop-blur-2xl
          bg-[#08162F]/70

          border-b
          border-white/10

          transition-all
          duration-700

          ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
        `}
      >
        <div
          className='
            max-w-7xl
            mx-auto

            px-4
            sm:px-6
            lg:px-8

            h-16
            sm:h-20

            flex
            items-center
            justify-between
          '
        >
          {/* LOGO */}
          <div className='flex items-center gap-2 sm:gap-3'>
            <div
              className='
                w-10
                h-10

                sm:w-12
                sm:h-12

                rounded-xl
                sm:rounded-2xl

                bg-linear-to-br

                from-[#183A72]
                to-[#08162F]

                flex
                items-center
                justify-center

                shadow-[0_0_35px_rgba(200,155,60,.45)]
              '
            >
              <Shield size={20} className='text-[#E1BF72]' />
            </div>

            <div>
              <h1
                className='
                  text-xl
                  sm:text-2xl

                  font-black

                  text-white
                '
              >
                Juris
                <span className='text-[#E1BF72]'>Pag</span>
              </h1>

              <p
                className='
                  hidden
                  sm:block

                  text-xs
                  text-gray-400
                '
              >
                Gestão Jurídica Inteligente
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className='hidden lg:flex gap-10'>
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href='#'
                className='
                  text-gray-300

                  font-semibold

                  hover:text-white

                  transition
                '
              >
                {item}
              </a>
            ))}
          </div>

          {/* ACTION */}
          <div className='flex items-center gap-3'>
            <button
              className='
                hidden
                sm:flex

                rounded-full

                px-6
                py-3

                bg-linear-to-r

                from-[#C89B3C]
                to-[#E1BF72]

                text-[#08162F]

                font-black

                items-center

                gap-2

                transition-transform

                hover:scale-105

                active:scale-95
              '
            >
              Teste Grátis
              <ArrowRight size={18} />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className='
                lg:hidden

                w-10
                h-10

                rounded-xl

                bg-white/10

                flex
                items-center
                justify-center

                text-white
              '
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden

            overflow-hidden

            transition-all
            duration-300

            ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div
            className='
              px-5
              pb-6

              flex
              flex-col

              gap-5
            '
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href='#'
                className='
                  text-gray-300

                  font-semibold

                  hover:text-white
                '
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <button
              className='
                sm:hidden

                rounded-full

                py-3

                bg-[#E1BF72]

                text-[#08162F]

                font-black

                flex
                justify-center
                items-center

                gap-2
              '
            >
              Teste Grátis
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
