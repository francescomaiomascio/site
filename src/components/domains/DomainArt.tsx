import type { DomainAccent, DomainArtTemplate } from "@/content/domains";

type DomainArtProps = {
  template: DomainArtTemplate;
  accent: DomainAccent;
  variant: "hero" | "tall" | "wide" | "std";
};

function TraceArt() {
  return (
    <svg viewBox="0 0 260 120" className="domain-art-svg da-template-trace" aria-hidden="true">
      <g className="da-grid" opacity="0.25">
        <path d="M0 24h260M0 48h260M0 72h260M0 96h260" />
        <path d="M26 0v120M78 0v120M130 0v120M182 0v120M234 0v120" />
      </g>
      <g className="da-trace">
        <path d="M14 76L58 58L92 66L128 45L174 56L214 40L246 52" />
      </g>
      <g className="da-node">
        <circle cx="58" cy="58" r="4" />
        <circle cx="128" cy="45" r="4" />
        <circle cx="214" cy="40" r="4" />
      </g>
      <rect x="0" y="0" width="260" height="120" className="da-scan" />
    </svg>
  );
}

function GateArt() {
  return (
    <svg viewBox="0 0 260 120" className="domain-art-svg da-template-gate" aria-hidden="true">
      <path d="M24 66h212" className="da-line" />
      <rect x="84" y="44" width="12" height="44" className="da-frame" />
      <rect x="164" y="44" width="12" height="44" className="da-frame" />
      <rect x="122" y="50" width="16" height="32" rx="6" className="da-node da-gate-marker" />
      <path d="M126 64l4 4 6-8" className="da-check" />
    </svg>
  );
}

function CustodyArt() {
  return (
    <svg viewBox="0 0 260 120" className="domain-art-svg da-template-custody" aria-hidden="true">
      <path d="M36 62h188" className="da-line" />
      <g className="da-chain">
        <circle cx="48" cy="62" r="10" className="da-frame" />
        <circle cx="102" cy="62" r="10" className="da-frame" />
        <circle cx="156" cy="62" r="10" className="da-frame" />
        <circle cx="210" cy="62" r="12" className="da-node" />
      </g>
      <path d="M204 62l4 4 7-9" className="da-check" />
    </svg>
  );
}

export function DomainArt({ template, accent, variant }: DomainArtProps) {
  return (
    <div className={`domains-art domains-art--${variant}`} data-accent={accent} aria-hidden="true">
      <div className="domains-art-bg" />
      {template === "trace" ? <TraceArt /> : null}
      {template === "gate" ? <GateArt /> : null}
      {template === "custody" ? <CustodyArt /> : null}
    </div>
  );
}
