import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gray';
}

export default function Logo({ className, variant }: LogoProps) {
  const src = variant ? `/images/logo-${variant}.png` : '/images/logo.png';

  return (
    <Image
      src={src}
      alt="Strange Orbit"
      width={0}
      height={0}
      sizes="100vw"
      style={className == null ? { width: '150px', height: 'auto' } : {}}
      className={className}
    />
  );
}