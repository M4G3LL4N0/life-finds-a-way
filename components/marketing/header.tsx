"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";

const nav = [
  { href: "/#problem", label: "Problem" },
  { href: "/#pillars", label: "Pillars" },
  { href: "/#mvp-demo", label: "MVP" },
  { href: "/platform", label: "Platform" },
  { href: "/demo", label: "Demo" },
  { href: "/investors", label: "Investors" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:rgb(2_6_12_/0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 flex-col leading-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300/80"
          onClick={() => setOpen(false)}
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-slate-400">
            Frontier systems
          </span>
          <span className="truncate font-serif text-lg tracking-tight text-slate-50 transition-colors group-hover:text-sky-100 sm:text-xl">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/80 xl:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#final-cta"
            className="hidden rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sky-100 shadow-[0_0_0_1px_rgba(56,189,248,0.08)] transition hover:border-sky-300/60 hover:bg-sky-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/80 sm:inline-flex sm:px-4 sm:text-xs"
            onClick={() => setOpen(false)}
          >
            Build
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-100 lg:hidden"
            aria-expanded={open}
            aria-controls="lfaw-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="lfaw-mobile-nav"
          className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-white/10 px-4 py-3 sm:px-6 lg:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-slate-50"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <p className="px-3 pt-2 text-[11px] leading-relaxed text-slate-500">
            Planning and research concepts only — not medical, agricultural, or flight-certified life-support advice.
          </p>
        </nav>
      )}
    </header>
  );
}
