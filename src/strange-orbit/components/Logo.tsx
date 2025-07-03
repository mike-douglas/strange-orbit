import Image from 'next/image';

export default function Logo() {
  return (
    <Image src="/images/logo.png" alt="Strange Orbit" width={0} height={0} sizes="100vw" style={{ width: '150px', height: 'auto' }} />
  )
}