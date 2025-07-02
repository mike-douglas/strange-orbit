export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from the people who use MyGLP to manage their health journey.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 lg:gap-12 [&>div]:mx-auto">
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="100"
                src="/vercel.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="space-y-2 text-center">
                <p className="text-lg font-semibold">MyGLP has transformed my medication routine!</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Jane D. - MyGLP User</p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="100"
                src="/vercel.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="space-y-2 text-center">
                <p className="text-lg font-semibold">
                  I love the reminders and how easy it is to track my progress.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">John S. - MyGLP User</p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="100"
                src="/vercel.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="space-y-2 text-center">
                <p className="text-lg font-semibold">
                  This app is a game-changer for anyone on GLP-1 medication.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sarah L. - MyGLP User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
