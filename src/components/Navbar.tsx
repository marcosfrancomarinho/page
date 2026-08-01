import { useEffect, useState } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const NAV_ITEMS = ['Recursos', 'Benefícios', 'Planos', 'Depoimentos'] as const;

export function Navbar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`backdrop-blur-2xl bg-[#08162F]/70 border-b border-white/10 transition-all duration-700 ${
          loaded ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#183A72] to-[#08162F] flex items-center justify-center shadow-[0_0_35px_rgba(200,155,60,.45)]">
              <Shield size={24} className="text-[#E1BF72]" />
            </div>

            <div>
              <h1 className="text-2xl font-black text-white">
                Juris<span className="text-[#E1BF72]">Pag</span>
              </h1>

              <p className="text-xs text-gray-400">Gestão Jurídica Inteligente</p>
            </div>
          </div>

          <div className="hidden lg:flex gap-10">
            {NAV_ITEMS.map((item) => (
              <a key={item} href="#" className="text-gray-300 font-semibold hover:text-white transition">
                {item}
              </a>
            ))}
          </div>

          <button className="rounded-full px-7 py-3 bg-gradient-to-r from-[#C89B3C] to-[#E1BF72] text-[#08162F] font-black flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
            Teste Grátis
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
