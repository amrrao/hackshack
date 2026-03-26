export default function Year2026() {
  return (
    <div className="mx-auto w-full max-w-4xl bg-black px-4 py-8 text-white sm:px-6 sm:py-10">
      <h1 className="mb-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        2026
      </h1>
      <p className="mb-6 text-sm text-zinc-400 sm:mb-8 sm:text-base">
        Hack Shack 2026 will take place from March 27th-29th.
      </p>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-white sm:mb-4 sm:text-xl">
          Sponsors
        </h2>
        <ul className="grid gap-3 md:grid-cols-2">
          <li className="rounded-lg border border-white/15 bg-white/5 p-4 text-zinc-100">
            Columbia in Tech
          </li>
          <li className="rounded-lg border border-white/15 bg-white/5 p-4 text-zinc-100">
            J20 Ventures
          </li>
        </ul>
      </section>
    </div>
  );
}
