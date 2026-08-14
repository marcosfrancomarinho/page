const STATS = [
  { value: '500+', label: 'escritórios ativos' },
  { value: '120 mil', label: 'pagamentos processados' },
  { value: '98%', label: 'de satisfação' },
];

export function Numbers() {
  return (
    <section aria-label='Resultados da JurisPag' className='bg-[#050B18] px-5 py-10 sm:px-8 sm:py-14'>
      <div className='mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:grid-cols-3'>
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className='border-b border-white/10 px-6 py-7 text-center last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0'
          >
            <strong className='block text-3xl font-black text-[#E1BF72] sm:text-4xl'>{stat.value}</strong>
            <span className='mt-1 block text-sm text-slate-400'>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
