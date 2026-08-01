import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `end`
 * when the element becomes visible.
 */
export function useCountUp(end: number, visible: boolean, duration = 1500): number {
  const [value, setValue] = useState(0);

  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;

    started.current = true;

    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [visible, end, duration]);

  return value;
}
