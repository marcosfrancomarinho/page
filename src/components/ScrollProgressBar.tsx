interface ScrollProgressBarProps {
  /** Scroll progress as a fraction between 0 and 1 */
  progress: number;
}

export function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  return (
    <div
      className='
        fixed

        top-0
        left-0

        h-0.5

        w-full

        z-[9999]

        pointer-events-none

        overflow-hidden
      '
    >
      <div
        className='
          h-full

          origin-left

          bg-gradient-to-r

          from-[#183A72]

          via-[#C89B3C]

          to-[#E1BF72]

          shadow-[0_0_10px_rgba(225,191,114,.35)]

          transition-transform

          duration-200

          ease-out
        '
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}
