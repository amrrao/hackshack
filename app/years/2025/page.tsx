export default function Year2025() {
  return (
    <div className="mx-auto max-w-4xl bg-white px-6 py-12">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-[#0a1929]">
        2025
      </h1>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold text-[#0a1929]">Photo</h2>
        <div className="rounded-lg border border-[#dbe4ef] bg-[#f8fafc] p-4">
          <div className="flex aspect-[16/9] w-full items-center justify-center rounded-md border border-[#dbe4ef] bg-white text-sm text-[#64748b]">
            Photo placeholder
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-[#0a1929]">
          Sponsors
        </h2>
        <ul className="grid gap-3 md:grid-cols-2">
          <li className="rounded-lg border border-[#dbe4ef] bg-blue-200 p-4 text-[#334155]">
            Columbia in Tech
          </li>
          <li className="rounded-lg border border-[#dbe4ef] bg-blue-200 p-4 text-[#334155]">
            Rho
          </li>
        </ul>
      </section>
    </div>
  );
}
