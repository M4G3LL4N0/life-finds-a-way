import { demoPreview } from "@/content/demo-preview";

function Readout({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 font-mono text-lg text-sky-100">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{detail}</p>
    </div>
  );
}

export function MvpDemoConcept() {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/80">
            Habitat inputs
          </p>
          <p className="mt-2 font-serif text-xl text-slate-50">{demoPreview.scenario}</p>
        </div>
        <div
          role="group"
          aria-label="Illustrative habitat parameters"
          className="grid gap-3 sm:grid-cols-2"
        >
          {demoPreview.inputs.map((row) => (
            <div
              key={row.label}
              className="rounded-xl border border-white/10 bg-[color:rgb(3_8_18_/0.65)] px-4 py-3"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">
                {row.label}
              </p>
              <p className="mt-1 font-mono text-sm text-slate-200">{row.value}</p>
            </div>
          ))}
        </div>
        <p className="text-xs leading-relaxed text-slate-500">
          Values are static illustrations for narrative purposes — not live
          telemetry or certified flight data.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {demoPreview.metrics.map((m) => (
            <Readout
              key={m.label}
              label={m.label}
              value={m.value}
              detail={m.detail}
            />
          ))}
        </div>
        <div className="rounded-3xl border border-emerald-400/15 bg-emerald-500/[0.04] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/90">
            Recommended interventions
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-300">
            {demoPreview.interventions.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
