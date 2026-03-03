export function DigitalEgressIllustration() {
  return (
    <svg viewBox="0 0 600 240" className="domain-ill domain-ill--digital" aria-hidden="true">
      <g className="domain-ill-grid" opacity="0.2">
        <path d="M80 70v136M170 70v136M260 70v136M350 70v136M440 70v136M530 70v136" />
        <path d="M70 92h470M70 128h470M70 164h470M70 200h470" />
      </g>
      <path d="M82 184C130 164 180 148 234 160C278 170 330 128 382 136C426 144 468 112 520 118" className="domain-ill-trace" />
      <g className="domain-ill-node domain-ill-packets">
        <circle cx="132" cy="162" r="6" />
        <circle cx="292" cy="146" r="6" />
        <circle cx="462" cy="120" r="7" />
      </g>
      <g className="domain-ill-packet-travel">
        <circle cx="84" cy="184" r="4" className="domain-ill-node" />
        <circle cx="98" cy="180" r="3" className="domain-ill-node is-2" />
      </g>
    </svg>
  );
}
