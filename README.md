<h1 align="center">💳 JurisPag</h1>

<p align="center">
  Landing page responsiva para uma plataforma de gestão financeira voltada a escritórios jurídicos.
</p>

<p align="center">
  <a href="https://page-seven-hazel.vercel.app"><strong>Ver demonstração</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111827" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
</p>

## Sobre o projeto

A **JurisPag** apresenta uma solução fictícia para automatizar cobranças, acompanhar pagamentos e organizar a gestão financeira de escritórios de advocacia.

O projeto foi desenvolvido com foco em conversão, hierarquia visual, componentes reutilizáveis, responsividade e acessibilidade.

## Principais recursos

- Hero com proposta de valor e indicadores animados;
- benefícios organizados em cards;
- dashboard financeiro ilustrativo;
- fluxo de funcionamento;
- métricas e prova social;
- depoimentos;
- chamadas para ação;
- navegação responsiva;
- barra de progresso e retorno ao topo;
- animações com suporte a `prefers-reduced-motion`;
- navegação por teclado e foco visível;
- metadados básicos para SEO e compartilhamento.

## Tecnologias

- React 19;
- TypeScript;
- Vite;
- Tailwind CSS 4;
- Lucide React;
- React Helmet Async.

## Estrutura

```text
src/
├── components/       # Seções e componentes visuais
├── scroll/
│   ├── hooks/        # Scroll, reveal e contadores
│   └── types.ts      # Tipos compartilhados
├── App.tsx           # Composição da página
├── index.css         # Entrada do Tailwind CSS
└── main.tsx          # Inicialização da aplicação
```

## Executando localmente

```bash
git clone https://github.com/marcosfrancomarinho/page.git
cd page
npm install
npm run dev
```

Acesse o endereço informado pelo Vite no terminal.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Valida o TypeScript e gera o build |
| `npm run lint` | Executa a análise estática |
| `npm run preview` | Visualiza localmente o build |

## Acessibilidade

A interface inclui HTML em português, landmarks semânticos, skip link, rótulos para controles, estado acessível do menu mobile, navegação por teclado e redução de movimento conforme a preferência do sistema.

## Autor

Desenvolvido por [Marcos Marinho](https://github.com/marcosfrancomarinho).
