import Link from "next/link";
import { MountainIcon } from "./Icons";

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Smarter Medication Management</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                MyGLP helps you stay on track with your GLP-1 medication. Set smart reminders, log your doses, and
                never miss a beat.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <MountainIcon className="mr-2 inline-block h-4 w-4" />
                Customizable notifications for your shot schedule.
              </li>
              <li>
                <MountainIcon className="mr-2 inline-block h-4 w-4" />
                Track your progress with weight, side effect, and mood monitoring.
              </li>
              <li>
                <MountainIcon className="mr-2 inline-block h-4 w-4" />
                View historical data to understand trends and insights.
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
