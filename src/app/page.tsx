"use client";

import { Section } from "@/components/layout/Section";
import Image from "next/image";

const PILOT_MAILTO =
  "mailto:pilot@yai.foundation?subject=YAI%20Pilot%20-%2014%20Days";
const DOCS_URL = "https://github.com/yai-labs/yai/tree/main/docs";
const GITHUB_URL = "https://github.com/yai-labs/yai";

function ExternalAnchor(props: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={props.href}
      className={props.className}
      target="_blank"
      rel="noreferrer"
      aria-label={props.ariaLabel}
    >
      {props.children}
    </a>
  );
}

function HeroStackCarousel() {
  const items = [
    { label: "Linux", src: "/stack/linux.png" },
    { label: "GitHub", src: "/stack/github.png" },
    { label: "Docker", src: "/stack/docker.png" },
    { label: "Amazon S3", src: "/stack/s3.png" },
    { label: "Kubernetes", src: "/stack/kubernetes.svg", svg: true },
  ] as const;

  const loop = [...items, ...items];

  return (
    <div className="hero-stack" aria-label="Works with your stack">
      <div className="hero-stack-marquee" aria-label="Integration surfaces">
        <div className="hero-stack-track" role="list" aria-hidden="true">
          {loop.map((it, idx) => (
            <div
              key={`${it.label}-${idx}`}
              className="hero-stack-logo"
              role="listitem"
              aria-label={it.label}
              title={it.label}
            >
              <Image
                className="hero-stack-img"
                src={it.src}
                alt={it.label}
                width={240}
                height={80}
                sizes="(max-width: 980px) 140px, 180px"
                unoptimized={"svg" in it && Boolean(it.svg)}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function HomeHero() {
  return (
    <Section id="top" variant="hero" className="home-hero">
      <div className="home-hero-inner home-center">
        <div className="home-hero-content">
          <h1 className="home-h1">
              <span className="home-h1-top">Make execution</span>
              <span className="home-h1-bottom">predictable.</span>
          </h1>

          <p className="home-lede">
            Governed execution for systems that act — constraints first, proof preserved.
          </p>

          <div className="home-cta" aria-label="Primary actions">
            <ExternalAnchor
              className="button button--primary"
              href={DOCS_URL}
              ariaLabel="Try via docs"
            >
              Try YAI
            </ExternalAnchor>

            <a className="button button--ghost" href={PILOT_MAILTO}>
              Book pilot
            </a>
          </div>
        </div>

        <HeroStackCarousel />

      </div>
    </Section>
  );
}

/* ===== the rest stays as-is for now ===== */

function Split(props: {
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="home-split">
      <div className="home-split-left">
        <h2 className="home-h2">{props.title}</h2>
        <p className="home-sub">{props.subtitle}</p>
      </div>
      <div className="home-split-right">{props.children}</div>
    </div>
  );
}

function Tile(props: { title: string; body: string; href?: string; cta?: string }) {
  const inner = (
    <>
      <div className="home-tile-title">{props.title}</div>
      <div className="home-tile-body">{props.body}</div>
      {props.href && props.cta ? <div className="home-tile-cta">{props.cta} →</div> : null}
    </>
  );

  if (props.href) return <a className="home-tile" href={props.href}>{inner}</a>;
  return <div className="home-tile">{inner}</div>;
}

function DomainCard(props: { label: string; title: string; body: string; href?: string }) {
  return (
    <a className="domain-card" href={props.href ?? "#start"}>
      <div className="domain-label">{props.label}</div>
      <div className="domain-title">{props.title}</div>
      <div className="domain-body">{props.body}</div>
    </a>
  );
}

function DomainsGrid() {
  const items = [
    { label: "Digital", title: "Data egress & pipelines", body: "Control outbound effects, storage and telemetry.", href: "#start" },
    { label: "Physical", title: "Devices & actuators", body: "Safe commands, explicit constraints, deterministic outcomes.", href: "#start" },
    { label: "Biological", title: "Chain of custody", body: "Integrity, provenance, and controlled procedures.", href: "#start" },
    { label: "Institutional", title: "Procedures & authorization", body: "Policy-backed actions with traceable decisions.", href: "#start" },
    { label: "Economic", title: "Transactions & approvals", body: "Deterministic authorization and audit-grade evidence.", href: "#start" },
    { label: "Operational", title: "Incidents & response", body: "Containment actions with proof-led execution.", href: "#start" },
    { label: "Cognitive", title: "Publishing & content", body: "Enforcement surfaces for knowledge work.", href: "#start" },
    { label: "Scientific", title: "Reproducibility locks", body: "Parameter integrity, replayability, and proof.", href: "#start" },
    { label: "Environmental", title: "Telemetry integrity", body: "Trusted signals and verifiable monitoring.", href: "#start" },
  ];

  return (
    <div className="domains-grid" aria-label="Domains">
      {items.map((x) => (
        <DomainCard key={x.label} {...x} />
      ))}
    </div>
  );
}

function IntegrationsLogos() {
  const items = [
    { label: "GitHub", src: "/stack/github.png" },
    { label: "Docker", src: "/stack/docker.png" },
    { label: "Kubernetes", src: "/stack/kubernetes.svg", svg: true },
    { label: "Linux", src: "/stack/linux.png" },
    { label: "Amazon S3", src: "/stack/s3.png" },
  ] as const;

  return (
    <div className="home-integrations-logos" aria-label="Integration surfaces">
      {items.map((it) => (
        <div key={it.label} className="home-integrations-logo" title={it.label} aria-label={it.label}>
          <Image
            src={it.src}
            alt={it.label}
            width={180}
            height={56}
            className="home-integrations-img"
            unoptimized={"svg" in it && Boolean(it.svg)}
          />
        </div>
      ))}
    </div>
  );
}

function Quickstart() {
  return (
    <div className="home-code" aria-label="Quickstart">
      <div className="home-code-head">
        <div className="home-code-title">Start building in minutes</div>
        <ExternalAnchor href={DOCS_URL} className="button button--link" ariaLabel="Open quickstart">
          Explore docs
        </ExternalAnchor>
      </div>
      <pre className="home-code-pre">
        <code>{`# verify
tools/bin/yai-verify list

# run (example)
yai ws create --id demo
yai run --ws demo --plan ./plans/demo.yml

# inspect proof surfaces
yai proof --ws demo --latest`}</code>
      </pre>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Section id="domains" className="home-block">
        <div className="home-section-head">
          <h2 className="home-h2">
            Govern action in real <span className="accent">environments</span>
          </h2>
        </div>
        <DomainsGrid />
      </Section>

      <Section id="faster" className="home-block">
        <Split
          title={<>Think fast. Build <span className="accent">safer</span>.</>}
          subtitle="Enforce constraints at execution time, and keep a record you can verify afterward."
        >
          <div className="home-tiles">
            <Tile title="Deterministic outcomes" body="Same inputs follow the same decision paths. Behavior is stable under constraints." />
            <Tile title="Fail-closed boundaries" body="External effects are explicit. When rules don’t match, execution stops or quarantines." />
            <Tile title="Verifiable history" body="Traces and artifacts are produced as part of delivery — replayable, not reconstructive." />
          </div>
        </Split>
      </Section>

      <Section id="deploy" className="home-block">
        <Split
          title={<>Fit into real <span className="accent">environments</span>.</>}
          subtitle="Deploy locally, in CI, or at the edge — without rewriting your stack."
        >
          <div className="home-tiles home-tiles--3">
            <Tile title="Pilot in your environment" body="One real workflow. Tight scope. Proof-led output your team can keep." href={PILOT_MAILTO} cta="Book pilot" />
            <Tile title="Self-hosted by default" body="Local-first execution surfaces designed for predictable behavior and traceability." href={DOCS_URL} cta="Read docs" />
            <Tile title="Open-source foundation" body="Specs, runbooks, milestone packs, and reproducible verification are public." href={GITHUB_URL} cta="View repository" />
          </div>
        </Split>
      </Section>

      <Section id="stack" className="home-block">
        <Split
          title={<>Integrates where <span className="accent">actions</span> happen.</>}
          subtitle="YAI wraps pipelines, scripts, and device-side execution — with verifiable proof surfaces."
        >
          <IntegrationsLogos />
        </Split>
      </Section>

      <Section id="start" className="home-block">
        <Split
          title="Proof-led by design."
          subtitle="Documentation and verification surfaces are first-class. If it can’t be verified, it doesn’t ship."
        >
          <Quickstart />
        </Split>
      </Section>

    </>
  );
}
