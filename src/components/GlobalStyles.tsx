export function GlobalStyles() {
  return (
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      .animate-float {
        animation: float 5s ease-in-out infinite;
      }
      @keyframes bob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-bob {
        animation: bob 3s ease-in-out infinite;
      }
      @keyframes shimmer {
        0% { transform: translateX(-120%) skewX(-25deg); }
        60%, 100% { transform: translateX(220%) skewX(-25deg); }
      }
      .animate-shimmer {
        animation: shimmer 3.2s ease-in-out infinite;
      }
      @keyframes pulseScale {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.06); }
      }
      .animate-pulse-scale {
        animation: pulseScale 2s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .animate-float, .animate-bob, .animate-shimmer, .animate-pulse-scale {
          animation: none !important;
        }
        * {
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  );
}
