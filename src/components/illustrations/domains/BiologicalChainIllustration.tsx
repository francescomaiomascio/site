export function BiologicalChainIllustration() {
  return (
    <svg viewBox="0 0 600 240" className="domain-ill domain-ill--biological" aria-hidden="true">
      <path d="M120 170h360" className="domain-ill-line" />
      <g className="domain-ill-chain domain-ill-frame">
        <circle cx="170" cy="170" r="18" />
        <circle cx="270" cy="170" r="18" />
        <circle cx="370" cy="170" r="18" />
      </g>
      <g className="domain-ill-accent domain-ill-node">
        <circle cx="470" cy="170" r="20" />
        <path d="M460 170l8 8 12-15" className="domain-ill-check" />
      </g>
      <g className="domain-ill-seal">
        <circle cx="470" cy="88" r="18" className="domain-ill-frame" />
        <circle cx="470" cy="88" r="10" className="domain-ill-node" />
      </g>
      <circle cx="470" cy="170" r="34" className="domain-ill-pulse" />
    </svg>
  );
}
