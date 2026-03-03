export function ScientificReproIllustration() {
  return (
    <svg viewBox="0 0 600 240" className="domain-ill domain-ill--scientific" aria-hidden="true">
      <g className="domain-ill-line" opacity="0.62">
        <path d="M130 178h340" />
      </g>
      <g className="domain-ill-wave domain-ill-trace">
        <path d="M130 146c24-12 48-12 72 0s48 12 72 0s48-12 72 0s48 12 72 0" />
      </g>
      <g className="domain-ill-frame" opacity="0.6">
        <path d="M256 120h88a10 10 0 0 1 10 10v24h-108v-24a10 10 0 0 1 10-10Z" />
        <rect x="272" y="154" width="56" height="48" rx="8" />
      </g>
      <g className="domain-ill-accent domain-ill-lock-click">
        <circle cx="300" cy="178" r="10" className="domain-ill-node" />
      </g>
      <g className="domain-ill-hash domain-ill-line" opacity="0.42">
        <path d="M166 98v18M206 98v18M394 98v18M434 98v18" />
      </g>
    </svg>
  );
}
