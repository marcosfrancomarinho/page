import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Shield, X } from 'lucide-react';

export function Navbar() {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 30);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div
        className={`
          backdrop-blur-xl

          bg-[#050B18]/80

          border-b
          border-white/10

          transition-all
          duration-700

          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
        `}
      >
        <div
          className='
            max-w-7xl
            mx-auto

            px-5
            sm:px-8

            h-20

            flex
            items-center
            justify-between
          '
        >
          {/* LOGO */}
          <div className='flex items-center gap-3'>
            <div
              className='
                w-11
                h-11

                rounded-2xl

                bg-gradient-to-br
                from-[#183A72]
                to-[#08162F]

                flex
                items-center
                justify-center

                shadow-[0_0_35px_rgba(200,155,60,.35)]
              '
            >
              <Shield size={23} className='text-[#E1BF72]' />
            </div>

            <div>
              <h1
                className='
                  text-2xl
                  font-black
                  text-white
                '
              >
                Juris
                <span className='text-[#E1BF72]'>Pag</span>
              </h1>

              <p className='hidden sm:block text-xs text-gray-400'>Gestão financeira jurídica</p>
            </div>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className='hidden md:flex items-center gap-4'>
            <button
              className='
                px-6
                py-3

                rounded-full

                border
                border-[#E1BF72]/40

                text-[#E1BF72]

                font-bold

                hover:bg-[#E1BF72]
                hover:text-[#08162F]

                transition
              '
            >
              Demonstração
            </button>

            <button
              className='
                px-7
                py-3

                rounded-full

                bg-gradient-to-r
                from-[#C89B3C]
                to-[#E1BF72]

                text-[#08162F]

                font-black

                flex
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
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className='
              md:hidden

              w-11
              h-11

              rounded-xl

              bg-white/10

              text-white

              flex
              items-center
              justify-center
            '
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden

            overflow-hidden

            transition-all
            duration-300

            ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div
            className='
              px-5
              pb-6

              flex
              flex-col
              gap-3
            '
          >
            <button
              className='
                w-full

                py-3

                rounded-full

                border
                border-[#E1BF72]/40

                text-[#E1BF72]

                font-bold
              '
            >
              Demonstração
            </button>

            <button
              className='
                w-full

                py-3

                rounded-full

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
