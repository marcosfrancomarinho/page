interface GlowBlobProps {
  className?: string;
}

export function GlowBlob({ className = '' }: GlowBlobProps) {
  return (
    <div
      className={`
        absolute
        rounded-full

        blur-[70px]
        sm:blur-[100px]
        lg:blur-[120px]

        opacity-40
        sm:opacity-50

        pointer-events-none

        -z-0

        will-change-transform

        ${className}
      `}
    />
  );
}
