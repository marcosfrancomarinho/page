import type { ReactNode } from 'react';
import { useReveal } from '../scroll/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function Reveal({ children, delay = 0, className = '', direction = 'up' }: RevealProps) {
  const [ref, visible] = useReveal<HTMLDivElement>({
    threshold: 0.15,
  });

  const hiddenPosition = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all

        duration-700

        ease-[cubic-bezier(.16,1,.3,1)]

        will-change-transform

        ${
          visible
            ? `
              opacity-100
              translate-x-0
              translate-y-0
            `
            : `
              opacity-0
              ${hiddenPosition[direction]}
            `
        }

        ${className}
      `}
      style={{
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}
