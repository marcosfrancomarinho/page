import { ChevronUp } from 'lucide-react';

interface ScrollToTopButtonProps {
  visible: boolean;
}

export function ScrollToTopButton({ visible }: ScrollToTopButtonProps) {
  return (
    <button
      type='button'
      aria-label='Voltar ao topo'
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      className={`
        fixed

        bottom-5
        right-5

        sm:bottom-8
        sm:right-8

        w-12
        h-12

        sm:w-14
        sm:h-14

        rounded-full

        bg-[#08162F]/80

        backdrop-blur-xl

        border
        border-[#E1BF72]/30

        text-[#E1BF72]

        flex
        items-center
        justify-center

        shadow-[0_0_30px_rgba(225,191,114,.15)]

        z-50

        transition-all
        duration-300

        hover:
        scale-110

        hover:
        border-[#E1BF72]/80

        hover:
        shadow-[0_0_40px_rgba(225,191,114,.35)]

        active:
        scale-90

        focus:outline-none

        focus:ring-4

        focus:ring-[#E1BF72]/20

        ${
          visible
            ? `
              opacity-100
              translate-y-0
            `
            : `
              opacity-0
              translate-y-5
              pointer-events-none
            `
        }
      `}
    >
      <ChevronUp size={22} className='sm:w-6 sm:h-6' />
    </button>
  );
}
