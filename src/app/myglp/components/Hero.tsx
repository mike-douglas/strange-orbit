import Image from "next/image";
import { Button } from "./Button";

function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
          Mental Health App
        </p>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          Find Your Calm
          <br />
          Master Your Mind
          <br />
          Live Your Best Life
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Calmia is the all-in-one mental wellness app that empowers you to
          track your progress, connect with experts, and cultivate lasting
          inner peace. Your journey to a healthier mind starts here.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button href="#" variant="primary">
          Download on the App Store
        </Button>
        <Button href="#" variant="secondary">
          Play video
        </Button>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <Image
      alt="Hero"
      className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
      height="550"
      src="https://placehold.co/550x550/png"
      width="550"
    />
  );
}

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
