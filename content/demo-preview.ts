/** Illustrative values for the MVP demo concept — not live telemetry. */
export const demoPreview = {
  scenario: "Lunar south pole · pressurized greenhouse module",
  inputs: [
    { label: "Crew load", value: "4 people" },
    { label: "Growth volume", value: "38 m³" },
    { label: "Power budget", value: "22 kW peak" },
    { label: "Water recovery", value: "87% (target 92%)" },
    { label: "CO₂ setpoint", value: "1200 ppm" },
  ],
  metrics: [
    { label: "Crop yield forecast", value: "84%", detail: "vs. target cultivar mix" },
    { label: "Water loop efficiency", value: "0.81", detail: "kg recovered / kg consumed" },
    { label: "Oxygen balance", value: "+6.2%", detail: "72h rolling surplus" },
    { label: "Medicine production readiness", value: "Stage B", detail: "bioreactor feedstock stable" },
    { label: "Survival risk score", value: "Low–Moderate", detail: "dominant driver: water margin" },
  ],
  interventions: [
    "Shift 6% lighting power to root-zone thermal control for 48h to stabilize transpiration.",
    "Introduce alternate cultivar pair to reduce single-strain blight exposure.",
    "Stage brine processor maintenance before next lunar night to recover water margin.",
  ],
} as const;
