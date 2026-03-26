"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [yearsOpen, setYearsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setYearsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isYearsActive = pathname === "/years/2026" || pathname === "/years/2025";

  return (
    <nav className="border-b border-white/10 bg-black px-6 py-4">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-white font-semibold text-lg tracking-wide hover:text-zinc-300 transition-colors"
        >
          HACK SHACK
        </Link>

        <ul className="ml-auto flex items-center gap-8 text-sm">
          <li className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setYearsOpen(!yearsOpen)}
              className={`flex items-center gap-1 text-zinc-200 hover:text-white transition-colors ${
                isYearsActive ? "font-semibold" : ""
              }`}
            >
              Years
              <span className="text-sm">{yearsOpen ? "▲" : "▼"}</span>
            </button>

            {yearsOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 rounded border border-white/10 bg-black py-1 shadow-lg">
                <Link
                  href="/years/2026"
                  onClick={() => setYearsOpen(false)}
                  className={`block px-4 py-2 text-zinc-200 hover:bg-white/10 hover:text-white ${
                    pathname === "/years/2026" ? "font-semibold bg-white/10 text-white" : ""
                  }`}
                >
                  2026
                </Link>
                <Link
                  href="/years/2025"
                  onClick={() => setYearsOpen(false)}
                  className={`block px-4 py-2 text-zinc-200 hover:bg-white/10 hover:text-white ${
                    pathname === "/years/2025" ? "font-semibold bg-white/10 text-white" : ""
                  }`}
                >
                  2025
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/team"
              className={`text-zinc-200 hover:text-white transition-colors ${
                pathname === "/team" ? "font-semibold" : ""
              }`}
            >
              Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}