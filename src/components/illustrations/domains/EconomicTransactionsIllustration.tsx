export function EconomicTransactionsIllustration() {
  return (
    <svg viewBox="0 0 600 240" className="domain-ill domain-ill--economic" aria-hidden="true">
      <g className="domain-ill-frame" opacity="0.55">
        <rect x="110" y="160" width="380" height="26" rx="4" />
        <rect x="140" y="130" width="320" height="22" rx="4" />
        <rect x="170" y="104" width="260" height="18" rx="4" />
      </g>
      <path d="M116 196h370" className="domain-ill-line" />
      <g className="domain-ill-ledger-marker">
        <circle cx="220" cy="196" r="7" className="domain-ill-node" />
      </g>
      <g className="domain-ill-accent">
        <rect x="362" y="84" width="56" height="24" rx="6" className="domain-ill-node" />
        <path d="M378 96l7 7 11-14" className="domain-ill-check" />
      </g>
    </svg>
  );
}
