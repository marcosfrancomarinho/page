interface ScrollProgressBarProps {
  /** Scroll progress as a fraction between 0 and 1 */
  progress: number;
}

export function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  return (
    <div
      className="fixed top-0 left-0 h-1 z-[999] bg-gradient-to-r from-[#183A72] via-[#C89B3C] to-[#E1BF72] origin-left"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
