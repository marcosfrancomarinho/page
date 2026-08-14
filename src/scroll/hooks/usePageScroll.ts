import { useEffect, useState } from 'react';

interface PageScrollState {
  progress: number;
  showScrollToTop: boolean;
}

export function usePageScroll(): PageScrollState {
  const [state, setState] = useState<PageScrollState>({
    progress: 0,
    showScrollToTop: false,
  });

  useEffect(() => {
    let frameId: number | null = null;

    const updateScrollState = () => {
      const documentElement = document.documentElement;
      const scrollableHeight =
        documentElement.scrollHeight - documentElement.clientHeight;
      const progress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      setState({
        progress: Math.min(Math.max(progress, 0), 1),
        showScrollToTop: window.scrollY > 500,
      });

      frameId = null;
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return state;
}
