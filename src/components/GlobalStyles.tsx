export function GlobalStyles() {
  return (
    <style>{`

      /* FLOAT */
      @keyframes float {
        0%, 100% {
          transform: translate3d(0, 0, 0);
        }

        50% {
          transform: translate3d(0, -12px, 0);
        }
      }


      .animate-float {
        animation: float 5s ease-in-out infinite;
        will-change: transform;
      }



      /* BOB */
      @keyframes bob {
        0%, 100% {
          transform: translate3d(0, 0, 0);
        }

        50% {
          transform: translate3d(0, -10px, 0);
        }
      }


      .animate-bob {
        animation: bob 3s ease-in-out infinite;
        will-change: transform;
      }



      /* SHIMMER */
      @keyframes shimmer {

        0% {
          transform: translate3d(-120%,0,0) skewX(-25deg);
        }

        60%,100% {
          transform: translate3d(220%,0,0) skewX(-25deg);
        }

      }


      .animate-shimmer {

        animation: shimmer 3.2s ease-in-out infinite;

        will-change: transform;

        overflow: hidden;

      }



      /* PULSE */
      @keyframes pulseScale {

        0%,100% {
          transform: scale(1);
        }

        50% {
          transform: scale(1.06);
        }

      }


      .animate-pulse-scale {

        animation: pulseScale 2s ease-in-out infinite;

        will-change: transform;

      }



      /* REVEAL */
      @keyframes fadeUp {

        from {
          opacity: 0;
          transform: translate3d(0,30px,0);
        }


        to {
          opacity:1;
          transform: translate3d(0,0,0);
        }

      }


      .animate-fade-up {

        animation: fadeUp .8s ease-out forwards;

      }




      /* MOBILE PERFORMANCE */
      @media(max-width:640px){

        .animate-float{
          animation-duration:7s;
        }


        .animate-bob{
          animation-duration:5s;
        }


        .animate-pulse-scale{
          animation-duration:4s;
        }

      }



      /* ACESSIBILIDADE */
      @media (prefers-reduced-motion: reduce) {

        *,
        *::before,
        *::after {

          animation-duration:0.01ms !important;

          animation-iteration-count:1 !important;

          transition-duration:0.01ms !important;

          scroll-behavior:auto !important;

        }

      }


    `}</style>
  );
}
