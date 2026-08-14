import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Shield, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050B18]/85 backdrop-blur-xl'>
      <nav
        aria-label='Navegação principal'
        className='mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-10'
      >
        <a
          href='#inicio'
          onClick={closeMenu}
          className='flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
          aria-label='JurisPag — início'
        >
          <span className='flex size-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#183A72] to-[#08162F] shadow-[0_0_30px_rgba(200,155,60,.25)] sm:size-11'>
            <Shield size={22} aria-hidden='true' className='text-[#E1BF72]' />
          </span>

          <span>
            <span className='block text-xl font-black text-white sm:text-2xl'>
              Juris<span className='text-[#E1BF72]'>Pag</span>
            </span>
            <span className='hidden text-xs text-slate-400 sm:block'>
              Gestão financeira jurídica
            </span>
          </span>
        </a>

        <div className='hidden items-center gap-7 lg:flex'>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='rounded-md text-sm font-semibold text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='hidden items-center gap-3 md:flex'>
          <a
            href='#como-funciona'
            className='rounded-full border border-[#E1BF72]/40 px-5 py-2.5 font-bold text-[#E1BF72] transition hover:bg-[#E1BF72] hover:text-[#08162F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
          >
            Demonstração
          </a>

          <a
            href='#contato'
            className='flex items-center gap-2 rounded-full bg-linear-to-r from-[#C89B3C] to-[#E1BF72] px-6 py-2.5 font-black text-[#08162F] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
          >
            Teste grátis
            <ArrowRight size={18} aria-hidden='true' />
          </a>
        </div>

        <button
          type='button'
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls='menu-mobile'
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className='flex size-11 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72] md:hidden'
        >
          {open ? <X size={22} aria-hidden='true' /> : <Menu size={22} aria-hidden='true' />}
        </button>
      </nav>

      <div
        id='menu-mobile'
        aria-hidden={!open}
        className={`overflow-hidden border-white/10 bg-[#050B18]/95 transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-96 border-t opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-col gap-2 px-5 py-5'>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              className='rounded-xl px-4 py-3 font-semibold text-slate-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
            >
              {link.label}
            </a>
          ))}

          <a
            href='#contato'
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
            className='mt-2 flex items-center justify-center gap-2 rounded-full bg-[#E1BF72] px-5 py-3 font-black text-[#08162F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
          >
            Teste grátis
            <ArrowRight size={18} aria-hidden='true' />
          </a>
        </div>
      </div>
    </header>
  );
}
