import { ChevronUp } from 'lucide-react';

interface ScrollToTopButtonProps {
  visible: boolean;
}

export function ScrollToTopButton({ visible }: ScrollToTopButtonProps) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#08162F] text-[#E1BF72] flex items-center justify-center shadow-xl z-50 transition-all duration-300 hover:scale-110 active:scale-90 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp />
    </button>
  );
}
