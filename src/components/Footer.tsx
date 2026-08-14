import { ArrowRight } from 'lucide-react';

import { GlowBlob } from './GlowBlob';

const PRODUCT_LINKS = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export function Footer() {
  return (
    <footer className='relative overflow-hidden bg-[#050B18] pt-16 pb-8 sm:pt-20 lg:pt-24'>
      <GlowBlob className='top-0 left-1/2 h-72 w-72 -translate-x-1/2 bg-[#183A72] opacity-25 sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px]' />

      <div className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10'>
        <div className='sm:col-span-2'>
          <a
            href='#inicio'
            className='inline-block rounded-lg text-3xl font-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
          >
            Juris<span className='text-[#E1BF72]'>Pag</span>
          </a>

          <p className='mt-5 max-w-sm leading-7 text-slate-400'>
            Gestão financeira inteligente para escritórios que buscam mais controle e produtividade.
          </p>

          <a
            href='#contato'
            className='mt-7 inline-flex items-center gap-2 rounded-full bg-[#E1BF72] px-6 py-3 font-bold text-[#08162F] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
          >
            Testar grátis
            <ArrowRight size={18} aria-hidden='true' />
          </a>
        </div>

        <div>
          <h2 className='mb-5 font-bold text-white'>Plataforma</h2>
          <ul className='space-y-4 text-slate-400'>
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='rounded transition hover:text-[#E1BF72] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='mb-5 font-bold text-white'>Contato</h2>
          <address className='space-y-3 text-slate-400 not-italic'>
            <a className='block transition hover:text-white' href='mailto:contato@jurispag.com'>
              contato@jurispag.com
            </a>
            <a className='block transition hover:text-white' href='tel:+5511999999999'>
              +55 (11) 99999-9999
            </a>
          </address>
        </div>
      </div>

      <div className='relative z-10 mx-5 mt-14 border-t border-white/10 pt-6 text-center text-sm text-slate-500 sm:mx-8 sm:mt-20'>
        © {new Date().getFullYear()} JurisPag. Todos os direitos reservados.
      </div>
    </footer>
  );
}
