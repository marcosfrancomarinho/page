import { GlowBlob } from './GlowBlob';

const PRODUCT_LINKS: string[] = ['Recursos', 'Planos', 'Integrações', 'API'];
const COMPANY_LINKS: string[] = ['Sobre', 'Contato', 'Blog', 'Carreiras'];

export function Footer() {
  return (
    <footer className="relative bg-[#08162F] pt-24 pb-10 overflow-hidden">
      <GlowBlob className="bg-[#183A72] w-[450px] h-[450px] left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-3xl font-black text-white">
            Juris<span className="text-[#E1BF72]">Pag</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Plataforma inteligente para gestão financeira de escritórios de advocacia.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Produto</h4>
          <ul className="space-y-4 text-gray-400">
            {PRODUCT_LINKS.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Empresa</h4>
          <ul className="space-y-4 text-gray-400">
            {COMPANY_LINKS.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contato</h4>
          <p className="text-gray-400">contato@jurispag.com</p>
          <p className="text-gray-400 mt-3">+55 (11) 99999-9999</p>
        </div>
      </div>

      <div className="relative z-10 mt-20 border-t border-white/10 pt-8 text-center text-gray-500">
        © {new Date().getFullYear()} JurisPag. Todos os direitos reservados.
      </div>
    </footer>
  );
}
