export function PhysicalDevicesIllustration() {
  return (
    <svg viewBox="0 0 600 240" className="domain-ill domain-ill--physical" aria-hidden="true">
      <g className="domain-ill-grid" opacity="0.24">
        <path d="M40 176h520" />
      </g>
      <g className="domain-ill-main">
        <rect x="220" y="130" width="16" height="80" className="domain-ill-frame" />
        <rect x="364" y="130" width="16" height="80" className="domain-ill-frame" />
        <path d="M120 170h360" className="domain-ill-line" />
      </g>
      <g className="domain-ill-accent domain-ill-physical-slider">
        <rect x="286" y="138" width="28" height="64" rx="10" className="domain-ill-node" />
        <path d="M292 170l9 9 14-18" className="domain-ill-check" />
      </g>
      <circle cx="300" cy="170" r="32" className="domain-ill-pulse" />
    </svg>
  );
}
