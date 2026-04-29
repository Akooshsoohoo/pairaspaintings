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
    <header className="bg-cream border-b border-bark/20 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-2xl tracking-wide text-charcoal hover:text-bark transition-colors"
        >
          Debasree Paira
        </Link>
        <nav>
          <ul className="flex gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm tracking-widest uppercase font-sans transition-colors ${
                    pathname === href
                      ? "text-bark border-b border-bark pb-0.5"
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
    </header>
  );
}
