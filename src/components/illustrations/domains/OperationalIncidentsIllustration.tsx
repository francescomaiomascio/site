export function OperationalIncidentsIllustration() {
  return (
    <svg viewBox="0 0 600 240" className="domain-ill domain-ill--operational" aria-hidden="true">
      <g className="domain-ill-grid" opacity="0.2">
        <path d="M80 76v138M170 76v138M260 76v138M350 76v138M440 76v138M530 76v138" />
        <path d="M70 102h470M70 138h470M70 174h470M70 210h470" />
      </g>
      <path d="M84 190L150 162L214 174L290 136L360 148L430 122L514 142" className="domain-ill-trace" />
      <g className="domain-ill-node">
        <circle cx="150" cy="162" r="7" />
        <circle cx="290" cy="136" r="7" />
        <circle cx="430" cy="122" r="8" />
      </g>
      <rect x="250" y="118" width="82" height="44" rx="6" className="domain-ill-quarantine" />
      <circle cx="290" cy="136" r="22" className="domain-ill-incident-pulse" />
    </svg>
  );
}
