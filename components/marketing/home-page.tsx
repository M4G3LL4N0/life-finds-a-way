import Link from "next/link";
import type { ReactNode } from "react";

import { brand } from "@/content/brand";
import {
  investorThesis,
  roadmapPhases,
} from "@/content/investor";
import {
  mvpModules,
  mvpUserFlow,
  platformPillars,
} from "@/content/platform";
import { useCases } from "@/content/use-cases";
import { site } from "@/lib/site";

import { ClosedLoopDiagram } from "./closed-loop-diagram";
import { MvpDemoConcept } from "./mvp-demo-concept";

function SectionTitle({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-serif text-3xl leading-tight text-slate-50 sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
        {title}
      </h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
        {children}
      </div>
    </div>
  );
}

export function HomeMain() {
  return (
    <main id="main" className="flex-1">
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(212,165,116,0.06),transparent_35%),linear-gradient(180deg,rgba(2,6,12,0)_0%,#03060c_68%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-400">
              {site.positioning}
            </p>
            <div className="space-y-6">
              <h1
                id="hero-heading"
                className="font-serif text-4xl leading-[1.05] text-slate-50 sm:text-5xl lg:text-6xl"
              >
                {site.tagline}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-400">
                AI systems for growing food, producing medicine, recycling waste,
                balancing habitats, and keeping life alive in space and extreme
                environments.
              </p>
              <p className="max-w-xl text-base leading-relaxed text-slate-500">
                {site.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/platform"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
              >
                Explore the platform
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center justify-center rounded-full border border-amber-300/25 bg-amber-500/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-50 transition hover:border-amber-200/40 hover:bg-amber-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200/80"
              >
                View investor thesis
              </Link>
            </div>
            <dl className="grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Design
                </dt>
                <dd className="mt-2 text-sm text-slate-300">
                  Closed-loop coupling across food, air, water, waste, and
                  medicine pathways.
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Simulate
                </dt>
                <dd className="mt-2 text-sm text-slate-300">
                  Scenario libraries with explicit constraints and traceable
                  recommendations.
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Operate
                </dt>
                <dd className="mt-2 text-sm text-slate-300">
                  Interfaces for crews, scientists, and programs — not dashboard
                  theater.
                </dd>
              </div>
            </dl>
          </div>
          <ClosedLoopDiagram />
        </div>
      </section>

      <section
        id="problem"
        aria-labelledby="problem-title"
        className="border-b border-white/10 bg-[color:rgb(2_4_9)]"
      >
        <div className="mx-auto max-w-6xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            id="problem-title"
            eyebrow="The problem"
            title="Space and extreme environments make biology fragile."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            <p className="lg:col-span-2 text-lg leading-relaxed text-slate-400">
              Every gram, watt, liter, and molecule matters. Food, oxygen, water,
              waste, medicine, and microbes must work as a single system — not as
              disconnected vendor silos. When coupling is ignored, habitats fail
              quietly until they fail catastrophically.
            </p>
            <Panel title="What breaks first">
              <ul className="space-y-2">
                <li>Water margins under thermal and crop stress</li>
                <li>Oxygen balance vs. incomplete carbon loops</li>
                <li>Waste streams that poison nutrient cycles</li>
                <li>Medicine and biomanufacturing readiness vs. logistics reality</li>
              </ul>
            </Panel>
          </div>
        </div>
      </section>

      <section
        id="solution"
        aria-labelledby="solution-title"
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-6xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            id="solution-title"
            eyebrow="The solution"
            title="Life Finds A Way models and optimizes closed-loop biological systems with AI."
          />
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            We unify crop physiology, life-support chemistry, hydraulics, energy,
            and biomanufacturing constraints so teams can simulate, compare, and
            defend interventions before they commit hardware, crew time, or
            capital.
          </p>
        </div>
      </section>

      <section
        id="pillars"
        aria-labelledby="pillars-title"
        className="border-b border-white/10 bg-[color:rgb(2_4_9)]"
      >
        <div className="mx-auto max-w-6xl space-y-12 px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            id="pillars-title"
            eyebrow="Platform pillars"
            title="One OS layer across agriculture, life support, habitat biology, and medicine."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformPillars.map((pillar) => (
              <Panel key={pillar.title} title={pillar.title}>
                <p>{pillar.body}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section
        id="mvp-demo"
        aria-labelledby="mvp-title"
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-6xl space-y-12 px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              id="mvp-title"
              eyebrow="MVP demo architecture"
              title="A mission room preview of the survival model — structured, legible, honest."
            />
            <Link
              href="/demo"
              className="w-fit rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 transition hover:border-white/30 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/80"
            >
              Full-screen demo layout
            </Link>
          </div>
          <MvpDemoConcept />
          <div className="grid gap-8 lg:grid-cols-2">
            <Panel title="Core modules (MVP scope)">
              <ul className="space-y-2">
                {mvpModules.map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </Panel>
            <Panel title="User flow">
              <ol className="list-decimal space-y-2 pl-5">
                {mvpUserFlow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </Panel>
          </div>
        </div>
      </section>

      <section
        id="use-cases"
        aria-labelledby="use-cases-title"
        className="border-b border-white/10 bg-[color:rgb(2_4_9)]"
      >
        <div className="mx-auto max-w-6xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            id="use-cases-title"
            eyebrow="Use cases"
            title="Programs where survival systems are the pacing function."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <Panel key={item.title} title={item.title}>
                <p>{item.body}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section
        id="investor-thesis"
        aria-labelledby="investor-title"
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-6xl space-y-12 px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              id="investor-title"
              eyebrow="Investor thesis"
              title="Why this becomes infrastructure — not a feature slide."
            />
            <Link
              href="/investors"
              className="w-fit rounded-full border border-amber-300/25 bg-amber-500/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-50 transition hover:border-amber-200/40 hover:bg-amber-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200/80"
            >
              Deck-ready outline
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Panel title="Why now">
              <ul className="space-y-3">
                {investorThesis.whyNow.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Panel>
            <Panel title="Why AI">
              <ul className="space-y-3">
                {investorThesis.whyAI.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Panel>
            <Panel title="Why space biology">
              <ul className="space-y-3">
                {investorThesis.whySpaceBiology.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Panel>
            <Panel title="Why dual-use & infrastructure">
              <ul className="space-y-3">
                {[...investorThesis.whyDualUse, ...investorThesis.whyInfrastructure].map(
                  (t) => (
                    <li key={t}>{t}</li>
                  ),
                )}
              </ul>
            </Panel>
          </div>
        </div>
      </section>

      <section
        id="roadmap"
        aria-labelledby="roadmap-title"
        className="border-b border-white/10 bg-[color:rgb(2_4_9)]"
      >
        <div className="mx-auto max-w-6xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            id="roadmap-title"
            eyebrow="Roadmap"
            title="Phased depth — ship the OS before chasing every sensor."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {roadmapPhases.map((phase) => (
              <Panel key={phase.phase} title={`${phase.phase}: ${phase.title}`}>
                <p>{phase.body}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section
        id="manifesto"
        aria-labelledby="manifesto-title"
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-6xl space-y-8 px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle
            id="manifesto-title"
            eyebrow="Brand manifesto"
            title="Life does not survive because conditions are perfect. Life survives because systems adapt."
          />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <p className="text-lg leading-relaxed text-slate-400">
              Our work is to make those adaptations legible, testable, and
              operable — for lunar nights, Mars transits, orbital labs, and
              Earth analogs where logistics fail first.
            </p>
            <Panel title="Brand guardrails">
              <ul className="space-y-2 text-slate-400">
                {brand.tone.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </section>

      <section
        id="final-cta"
        aria-labelledby="final-cta-title"
        className="border-b border-white/10 bg-gradient-to-b from-[#040914] to-[#020308]"
      >
        <div className="mx-auto max-w-6xl space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2
            id="final-cta-title"
            className="font-serif text-3xl text-slate-50 sm:text-4xl"
          >
            Build the survival layer for the next frontier.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Partner with us to stress-test your habitat assumptions, align crews
            and scientists on one model, and export evidence your stakeholders
            can trust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/platform"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
            >
              Explore the platform
            </Link>
            <Link
              href={`mailto:${site.contactEmail}?subject=Life%20Finds%20A%20Way%20%E2%80%94%20partner%20conversation`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:border-white/30 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/80"
            >
              Email the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
