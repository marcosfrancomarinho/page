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

        bg-[#08162F]

        text-[#E1BF72]

        flex
        items-center
        justify-center

        shadow-[0_10px_30px_rgba(8,22,47,.35)]

        z-50

        transition-all
        duration-300

        hover:scale-110

        active:scale-90

        focus:outline-none
        focus:ring-4
        focus:ring-[#E1BF72]/30

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
