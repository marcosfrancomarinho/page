interface GlowBlobProps {
  className?: string;
}

export function GlowBlob({ className = '' }: GlowBlobProps) {
  return (
    <div
      className={`
        absolute

        rounded-full

        blur-[80px]
        sm:blur-[110px]
        lg:blur-[140px]


        opacity-30
        sm:opacity-40
        lg:opacity-50


        pointer-events-none


        -z-0


        mix-blend-screen


        animate-glow


        will-change-transform


        ${className}
      `}
    />
  );
}
