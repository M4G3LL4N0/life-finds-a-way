import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import Link from "next/link";

import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { deckOutline } from "@/content/investor";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investor thesis",
  description:
    "Why now, why AI, why space biology, dual-use Earth and space markets, and roadmap for Life Finds A Way.",
};

export default function InvestorsPage() {
  return (
    <MarketingLayout>
      <main id="main" className="flex-1">
      <SubpageVisual variant="default" />
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(212,165,116,0.12),transparent_45%),#03060c]">
          <div className="mx-auto max-w-6xl space-y-6 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/80">
              Investor thesis
            </p>
            <h1 className="font-serif text-4xl text-slate-50 sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="max-w-3xl text-lg text-slate-400">{site.description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/#mvp-demo"
                className="rounded-full bg-sky-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-sky-300"
              >
                View MVP demo
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 hover:border-white/30"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[color:rgb(2_4_9)]">
          <div className="mx-auto max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl text-slate-50">Deck-ready storyline</h2>
            <ol className="grid gap-6 md:grid-cols-2">
              {deckOutline.map((slide, index) => (
                <li
                  key={slide.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="font-mono text-xs text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                    {slide.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {slide.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
