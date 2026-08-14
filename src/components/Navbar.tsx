import { ArrowRight, Shield } from 'lucide-react';

export function Navbar() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050B18]/85 backdrop-blur-xl'>
      <nav
        aria-label='Navegação principal'
        className='mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-10'
      >
        <a
          href='#inicio'
          className='flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
          aria-label='JurisPag — início'
        >
          <span className='flex size-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#183A72] to-[#08162F] shadow-[0_0_30px_rgba(200,155,60,.25)] sm:size-11'>
            <Shield size={22} aria-hidden='true' className='text-[#E1BF72]' />
          </span>
          <span className='text-xl font-black text-white sm:text-2xl'>
            Juris<span className='text-[#E1BF72]'>Pag</span>
          </span>
        </a>

        <a
          href='#contato'
          className='flex items-center gap-2 rounded-full bg-linear-to-r from-[#C89B3C] to-[#E1BF72] px-5 py-2.5 text-sm font-black text-[#08162F] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:text-base'
        >
          Testar grátis
          <ArrowRight size={18} aria-hidden='true' className='hidden sm:block' />
        </a>
      </nav>
    </header>
  );
}
