export const platformPillars = [
  {
    title: "Space Agriculture",
    body: "Photoperiod, CO₂ coupling, cultivar risk, and edible yield per watt in constrained volumes.",
  },
  {
    title: "Closed-Loop Life Support",
    body: "Oxygen, water, waste, and nutrient cycles modeled jointly with explicit mass balance.",
  },
  {
    title: "Habitat Biology",
    body: "Microbial stability, plant stress, and crew-facing operational envelopes in one graph.",
  },
  {
    title: "Microgravity Medicine",
    body: "Biomanufacturing pathways, batch readiness, and logistics for pharma R&D scenarios.",
  },
  {
    title: "Earth Resilience",
    body: "Polar, desert, and logistics-starved analogs where the physics rhymes with deep space.",
  },
  {
    title: "Terraforming Research",
    body: "Long-horizon experiments framed as staged hypotheses — never fantasy cosplay.",
  },
] as const;

export const mvpModules = [
  "Habitat Simulator",
  "Crop Optimization Engine",
  "Closed-Loop Resource Modeler",
  "Medicine / Biomanufacturing Planner",
  "Risk + Resilience Dashboard",
  "Mission Scenario Library",
] as const;

export const mvpUserFlow = [
  "Select environment",
  "Choose mission or facility constraints",
  "Input crop, biology, and resource assumptions",
  "Generate survival model",
  "Review risk, yield, oxygen, water, and medicine insights",
  "Receive AI recommendations with provenance",
] as const;
