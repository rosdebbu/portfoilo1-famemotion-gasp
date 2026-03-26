"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 2.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-8 md:px-12 py-6 mix-blend-difference"
    >
      <Link
        href="/"
        className="text-sm text-white tracking-wider font-medium cursor-none"
      >
        © Code by Debjit
      </Link>
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link text-sm tracking-wide cursor-none transition-colors duration-300 ${
              pathname === link.href
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
