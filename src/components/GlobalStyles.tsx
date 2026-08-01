export function GlobalStyles() {
  return (
    <style>{`

      /* FLOAT DASHBOARD */
      @keyframes float {

        0%,100% {
          transform: translate3d(0,0,0);
        }

        50% {
          transform: translate3d(0,-14px,0);
        }

      }


      .animate-float {

        animation: float 6s ease-in-out infinite;

        will-change: transform;

      }




      /* NOTIFICATION */
      @keyframes bob {

        0%,100% {
          transform: translate3d(0,0,0);
        }

        50% {
          transform: translate3d(0,-12px,0);
        }

      }


      .animate-bob {

        animation: bob 4s ease-in-out infinite;

        will-change: transform;

      }





      /* SHIMMER CARD */
      @keyframes shimmer {


        0% {

          transform:
            translate3d(-120%,0,0)
            skewX(-25deg);

        }


        60%,100% {

          transform:
            translate3d(220%,0,0)
            skewX(-25deg);

        }


      }



      .animate-shimmer {

        animation:
          shimmer 3.5s ease-in-out infinite;

        will-change: transform;

      }







      /* GOLD PULSE */

      @keyframes pulseScale {


        0%,100% {

          transform:scale(1);

        }


        50% {

          transform:scale(1.05);

        }


      }



      .animate-pulse-scale {

        animation:
          pulseScale 3s ease-in-out infinite;

        will-change:transform;

      }








      /* GLOW PREMIUM */

      @keyframes glow {


        0%,100% {

          opacity:.35;

        }


        50% {

          opacity:.65;

        }

      }



      .animate-glow {

        animation:
          glow 4s ease-in-out infinite;

      }







      /* BUTTON LIGHT */

      @keyframes buttonGlow {


        0%,100% {

          box-shadow:
          0 0 0 rgba(225,191,114,0);

        }


        50% {

          box-shadow:
          0 0 35px rgba(225,191,114,.35);

        }

      }



      .animate-button-glow {

        animation:
          buttonGlow 3s ease-in-out infinite;

      }







      /* REVEAL */

      @keyframes fadeUp {


        from {

          opacity:0;

          transform:
          translate3d(0,40px,0);

        }



        to {

          opacity:1;

          transform:
          translate3d(0,0,0);

        }


      }



      .animate-fade-up {

        animation:
        fadeUp .8s cubic-bezier(.16,1,.3,1)
        forwards;

      }








      /* MOBILE */

      @media(max-width:640px){


        .animate-float {

          animation-duration:8s;

        }



        .animate-bob {

          animation-duration:6s;

        }



        .animate-button-glow {

          animation:none;

        }


      }







      /* REDUZIR MOVIMENTO */

      @media (prefers-reduced-motion: reduce) {


        *,
        *::before,
        *::after {


          animation-duration:
          .01ms !important;


          animation-iteration-count:
          1 !important;


          transition-duration:
          .01ms !important;


          scroll-behavior:
          auto !important;


        }


      }


    `}</style>
  );
}
