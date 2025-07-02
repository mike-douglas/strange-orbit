import Image from 'next/image';

export default function SiteFooter() {
  return (
    <section>
      <div>
        &copy; 2025 Strange Orbit, LLC
      </div>
      <Image src="https://placehold.co/150x150" alt="LLC Icon" width={150} height={150} />
    </section>
  );
}