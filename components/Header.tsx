"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-cream sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide text-charcoal hover:text-sienna transition-colors"
        >
          Paira&apos;s Paintings
        </Link>
        <nav>
          <ul className="flex gap-6 sm:gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[15px] font-sans transition-colors ${
                    pathname === href
                      ? "text-sienna"
                      : "text-charcoal/70 hover:text-charcoal"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="petal-chain mx-6" aria-hidden="true" />
    </header>
  );
}
