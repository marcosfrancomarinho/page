interface GlowBlobProps {
  className?: string;
}

export function GlowBlob({ className = '' }: GlowBlobProps) {
  return <div className={`absolute rounded-full blur-[120px] opacity-50 pointer-events-none ${className}`} />;
}
