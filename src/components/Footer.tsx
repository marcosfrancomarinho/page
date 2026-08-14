export function Footer() {
  return (
    <footer className='border-t border-white/10 bg-[#050B18] px-5 py-8 sm:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left'>
        <a
          href='#inicio'
          className='rounded-lg text-2xl font-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
        >
          Juris<span className='text-[#E1BF72]'>Pag</span>
        </a>

        <p className='text-sm text-slate-500'>
          © {new Date().getFullYear()} JurisPag. Gestão financeira para escritórios jurídicos.
        </p>

        <a
          href='mailto:contato@jurispag.com'
          className='rounded text-sm font-semibold text-slate-400 transition hover:text-[#E1BF72] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1BF72]'
        >
          contato@jurispag.com
        </a>
      </div>
    </footer>
  );
}
