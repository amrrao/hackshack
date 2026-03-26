import Image from "next/image";

export default function Team() {
  return (
    <div className="mx-auto max-w-4xl bg-black px-6 py-10 text-white">
      
      {/* TITLE */}
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">
        Team
      </h1>

      {/* 2026 */}
      <div className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          2026
        </h2>

        {/* HOST */}
        <div className="mb-6">
          <p className="mb-2 text-sm text-zinc-400">
            Host & Lead Organizer
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/Amrutha.jpg"
              alt="Amrutha Rao"
              width={96}
              height={96}
              className="h-20 w-20 rounded-md object-cover"
            />
            <p className="text-base text-zinc-200">Amrutha Rao</p>
          </div>
        </div>

        {/* TEAM */}
        <div>
          <p className="mb-3 text-sm text-zinc-400">
            Organizational Team Members
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { name: "Zhexuan Li", img: "/Zhexuan.jpg" },
              { name: "Naythan Chan", img: "/Naythan.jpg" },
              { name: "Justin Hou", img: "/Justin.jpg" },
            ].map((person) => (
              <div key={person.name} className="flex items-center gap-3">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={96}
                  height={96}
                  className="h-20 w-20 rounded-md object-cover"
                />
                <p className="text-sm text-zinc-200">{person.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2025 */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          2025
        </h2>

        <p className="mb-2 text-sm text-zinc-400">
          Host & Lead Organizer
        </p>

        <div className="flex items-center gap-3">
          <Image
            src="/Roy.jpg"
            alt="Roy Lee"
            width={96}
            height={96}
            className="h-20 w-20 rounded-md object-cover"
          />
          <p className="text-base text-zinc-200">Roy Lee</p>
        </div>
      </div>
    </div>
  );
}