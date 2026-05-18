/** Internal brand system — Life Finds A Way */
export const brand = {
  positioning: "The operating system for biological survival beyond Earth.",
  tone: [
    "Precise, calm, and evidence-forward.",
    "Cinematic restraint — glow as signal, not decoration.",
    "Speak to operators, scientists, and capital with the same respect.",
  ],
  colors: {
    void: "#020308",
    deepBlack: "#03060c",
    deepNavy: "#050b18",
    spaceBlue: "#0c1a2e",
    oxygenCyan: "#38bdf8",
    bioGreen: "#34d399",
    mutedAmber: "#d4a574",
    mist: "#94a3b8",
  },
  typography: {
    display: "IBM Plex Serif — confident headlines with editorial spacing.",
    body: "IBM Plex Sans — legible technical prose at long read lengths.",
    data: "IBM Plex Mono — metrics, labels, and instrument readouts.",
  },
  motif: [
    "Orbital rings and closed loops as honest diagrams, not decoration.",
    "Glass panels with single-pixel borders and soft inner light.",
    "Grid overlays that imply measurement, not sci-fi HUD noise.",
  ],
  uiRules: [
    "One primary action per view; secondary actions stay quiet.",
    "Sections breathe: generous vertical rhythm, clear anchors.",
    "Motion is subtle: fades, slow spins, hover lift — respect reduced motion.",
    "Never imply flight certification or customer logos without facts.",
  ],
  sectionPatterns: [
    "Eyebrow → headline → supporting copy → evidence cards.",
    "Alternate band backgrounds between void and deep navy for rhythm.",
    "End major arcs with a manifesto or thesis before the CTA band.",
  ],
} as const;
