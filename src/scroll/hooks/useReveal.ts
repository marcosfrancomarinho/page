import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Reveals an element once it enters the viewport.
 * After revealing, the observer disconnects.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = {},
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);

  const optionsRef = useRef(options);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    const element = ref.current;

    if (!element || visible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        ...optionsRef.current,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [visible]);

  return [ref, visible];
}
