"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#why", label: "Why LenderKart" },
  { href: "/#setup", label: "Full setup" },
  { href: "/#summit", label: "Web Summit" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "glass border-b hairline" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="shrink-0"
          aria-label="LenderKart home"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-[22px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-white/65 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-lime px-5 py-2.5 text-[14px] font-semibold text-plum-deep transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Book an intro call
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-[10px] w-[18px]">
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  open ? "top-[4px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  open ? "top-[4px] -rotate-45" : "top-[9px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t hairline bg-ink px-5 pb-8 pt-4 md:hidden"
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b hairline py-4 font-display text-lg font-semibold text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          onClick={() => setOpen(false)}
          className="mt-6 block rounded-full bg-lime px-5 py-3.5 text-center font-semibold text-plum-deep"
        >
          Book an intro call
        </Link>
      </div>
    </header>
  );
}
