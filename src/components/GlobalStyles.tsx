export function GlobalStyles() {
  return (
    <style>{`
      :root {
        color-scheme: dark;
        scroll-behavior: smooth;
        scroll-padding-top: 6rem;
      }

      body {
        margin: 0;
        min-width: 320px;
        background: #050b18;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
      }

      button,
      a {
        -webkit-tap-highlight-color: transparent;
      }

      @keyframes float {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(0, -12px, 0); }
      }

      @keyframes bob {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(0, -10px, 0); }
      }

      @keyframes shimmer {
        0% { transform: translate3d(-120%, 0, 0) skewX(-25deg); }
        60%, 100% { transform: translate3d(220%, 0, 0) skewX(-25deg); }
      }

      @keyframes pulseScale {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.04); }
      }

      @keyframes glow {
        0%, 100% { opacity: .35; }
        50% { opacity: .6; }
      }

      @keyframes buttonGlow {
        0%, 100% { box-shadow: 0 0 0 rgba(225, 191, 114, 0); }
        50% { box-shadow: 0 0 32px rgba(225, 191, 114, .28); }
      }

      .animate-float { animation: float 7s ease-in-out infinite; }
      .animate-bob { animation: bob 5s ease-in-out infinite; }
      .animate-shimmer { animation: shimmer 4s ease-in-out infinite; }
      .animate-pulse-scale { animation: pulseScale 3s ease-in-out infinite; }
      .animate-glow { animation: glow 4s ease-in-out infinite; }
      .animate-button-glow { animation: buttonGlow 3s ease-in-out infinite; }

      @media (prefers-reduced-motion: reduce) {
        :root { scroll-behavior: auto; }

        *,
        *::before,
        *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: .01ms !important;
        }
      }
    `}</style>
  );
}
