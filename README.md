<h1 align="center">💳 JurisPag</h1>

<p align="center">
  Landing page responsiva e focada em conversão para uma plataforma de gestão financeira jurídica.
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

A página foi desenhada para comunicar o valor do produto em poucos segundos e levar o visitante ao teste gratuito, sem rotas adicionais ou excesso de conteúdo.

## Experiência

- Hero com promessa direta e dashboard ilustrativo;
- CTAs de teste grátis e demonstração;
- três benefícios centrais;
- prova numérica compacta;
- CTA final de conversão;
- navegação simples e responsiva;
- animações com suporte a `prefers-reduced-motion`;
- navegação por teclado, foco visível e landmarks semânticos;
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
│   ├── hooks/        # Reveal e animações
│   └── types.ts      # Tipos compartilhados
├── App.tsx           # Composição da landing page
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

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Valida o TypeScript e gera o build |
| `npm run lint` | Executa a análise estática |
| `npm run preview` | Visualiza localmente o build |

## Autor

Desenvolvido por [Marcos Marinho](https://github.com/marcosfrancomarinho).
