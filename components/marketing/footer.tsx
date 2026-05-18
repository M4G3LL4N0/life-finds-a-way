import Link from "next/link";

import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[color:rgb(2_4_8)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl space-y-4">
          <p className="font-serif text-2xl text-slate-50">{site.name}</p>
          <p className="text-sm leading-relaxed text-slate-400">{site.positioning}</p>
          <p className="text-sm text-slate-500">{site.tagline}</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.2em] text-slate-500">
            <Link className="hover:text-slate-300" href="/platform">
              Platform
            </Link>
            <Link className="hover:text-slate-300" href="/demo">
              Demo
            </Link>
            <Link className="hover:text-slate-300" href="/investors">
              Investors
            </Link>
            <Link className="hover:text-slate-300" href="/#manifesto">
              Manifesto
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4 text-sm text-slate-400">
          <Link
            href={`mailto:${site.contactEmail}`}
            className="w-fit text-sky-200 underline-offset-4 hover:text-sky-100 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/80"
          >
            {site.contactEmail}
          </Link>
          <p className="text-xs text-slate-500">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
