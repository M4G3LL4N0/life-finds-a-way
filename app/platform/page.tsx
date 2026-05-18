import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import type { ReactNode } from "react";
import Link from "next/link";

import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { mvpModules, mvpUserFlow, platformPillars } from "@/content/platform";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform",
  description: `${site.name} platform pillars, MVP modules, and user flow for closed-loop biological survival systems.`,
};

function Panel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
        {title}
      </h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
        {children}
      </div>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <MarketingLayout>
      <main id="main" className="flex-1">
      <SubpageVisual variant="default" />
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl space-y-6 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300/80">
              Platform
            </p>
            <h1 className="font-serif text-4xl text-slate-50 sm:text-5xl">
              {site.positioning}
            </h1>
            <p className="max-w-3xl text-lg text-slate-400">{site.description}</p>
            <Link
              href="/demo"
              className="inline-flex w-fit rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 hover:border-white/30"
            >
              Open demo concept
            </Link>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[color:rgb(2_4_9)]">
          <div className="mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl text-slate-50">Pillars</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {platformPillars.map((pillar) => (
                <Panel key={pillar.title} title={pillar.title}>
                  <p>{pillar.body}</p>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl text-slate-50">MVP modules</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Panel title="Core modules">
                <ul className="space-y-2">
                  {mvpModules.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
              <Panel title="Canonical user flow">
                <ol className="list-decimal space-y-2 pl-5">
                  {mvpUserFlow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </Panel>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
