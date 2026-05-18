import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import Link from "next/link";

import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { MvpDemoConcept } from "@/components/marketing/mvp-demo-concept";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demo concept",
  description:
    "Illustrative habitat survival model preview — conceptual UI, not live biological simulation.",
};

export default function DemoPage() {
  return (
    <MarketingLayout>
      <main id="main" className="flex-1">
      <SubpageVisual variant="demo" />
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl space-y-6 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-200/80">
              MVP demo concept
            </p>
            <h1 className="font-serif text-4xl text-slate-50 sm:text-5xl">
              Mission room preview
            </h1>
            <p className="max-w-3xl text-lg text-slate-400">
              {site.name} pairs scientific visualization with decision-grade
              readouts. This layout uses static illustrative values to show how
              crews compare habitat inputs against survival metrics and
              recommended interventions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/platform"
                className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 hover:border-white/30"
              >
                Platform architecture
              </Link>
              <Link
                href="/#mvp-demo"
                className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 hover:border-white/30"
              >
                Context on homepage
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[color:rgb(2_4_9)]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <MvpDemoConcept />
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
