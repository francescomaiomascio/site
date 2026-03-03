export function InstitutionalProceduresIllustration() {
  return (
    <svg viewBox="0 0 600 240" className="domain-ill domain-ill--institutional" aria-hidden="true">
      <g className="domain-ill-frame">
        <circle cx="300" cy="74" r="16" />
        <circle cx="232" cy="132" r="12" />
        <circle cx="368" cy="132" r="12" />
        <rect x="270" y="170" width="60" height="26" rx="8" />
      </g>
      <g className="domain-ill-line">
        <path d="M300 90v30" />
        <path d="M300 104l-68 24" />
        <path d="M300 104l68 24" />
        <path d="M232 144l68 36" />
      </g>
      <g className="domain-ill-accent domain-ill-authority-path">
        <path d="M300 90v30l-68 24l68 36" className="domain-ill-check" />
      </g>
      <g className="domain-ill-gate-open">
        <rect x="292" y="168" width="16" height="30" rx="8" className="domain-ill-node" />
      </g>
    </svg>
  );
}
