import Image from "next/image";

export default function Year2025() {
  return (
    <div className="mx-auto w-full max-w-4xl bg-black px-4 py-8 text-white sm:px-6 sm:py-10 md:flex md:h-[calc(100dvh-112px)] md:flex-col md:justify-center md:py-0 md:-translate-y-14">
      <h1 className="mb-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        2025
      </h1>
      <p className="mb-5 text-sm text-zinc-400 sm:mb-6 sm:text-base">
        Founding year of Hack Shack.
      </p>

      <section className="mb-6 sm:mb-8">
        <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">2025 Event Photo</h2>
        <div>
          <Image
            src="/2025.png"
            alt="Hack Shack 2025"
            width={1600}
            height={900}
            className="h-auto w-full max-w-sm rounded-lg object-cover sm:max-w-md"
            priority
          />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-white sm:mb-4 sm:text-xl">
          Sponsors
        </h2>
        <ul className="grid gap-3 md:grid-cols-2">
          <li className="rounded-lg border border-white/15 bg-white/5 p-4 text-zinc-100">
            Columbia in Tech
          </li>
          <li className="rounded-lg border border-white/15 bg-white/5 p-4 text-zinc-100">
            Rho
          </li>
        </ul>
      </section>
    </div>
  );
}
