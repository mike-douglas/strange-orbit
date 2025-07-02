import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Strange Orbit LLC</h1>
      <p className="text-lg mb-8">Welcome to the home of my apps. Here are some of the projects I've been working on:</p>
      <ul className="space-y-4">
        <li>
          <Link href="/myglp" className="text-blue-500 hover:underline">
            MyGLP
          </Link>
        </li>
        <li>
          <Link href="/anime-create" className="text-blue-500 hover:underline">
            Anime Create
          </Link>
        </li>
        <li>
          <Link href="/dine-divvy" className="text-blue-500 hover:underline">
            Dine Divvy
          </Link>
        </li>
        <li>
          <Link href="/shipkit" className="text-blue-500 hover:underline">
            ShipKit
          </Link>
        </li>
      </ul>
    </main>
  );
}
