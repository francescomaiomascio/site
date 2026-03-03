"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { DomainsGridSection } from "@/components/home/DomainsGrid";
import Image from "next/image";

const PILOT_MAILTO =
  "mailto:pilot@yai.foundation?subject=YAI%20Pilot%20-%2014%20Days";
const DOCS_URL = "/docs";

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
              <span className="home-h1-bottom">predictable</span>
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

function IntegrationsLogos() {
  const items = [
    { label: "GitHub", src: "/stack/github-icon.png" },
    { label: "Docker", src: "/stack/docker-icon.png" },
    { label: "Kubernetes", src: "/stack/kubernetes-icon.png" },
    { label: "OpenTelemetry", src: "/stack/OpenTelemetry.png" },
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
  const snippets = {
    bash: `<span class="tok-com"># yai-cli quick usage (repo: yai-cli/README.md)</span>
<span class="tok-cmd">./dist/bin/yai</span> <span class="tok-arg">root status</span>
<span class="tok-cmd">./dist/bin/yai</span> <span class="tok-arg">root ping</span>
<span class="tok-cmd">./dist/bin/yai</span> <span class="tok-arg">kernel ws list</span>
<span class="tok-cmd">./dist/bin/yai</span> <span class="tok-arg">engine --ws dev status</span>

<span class="tok-com"># governance gates (repo: yai/tools/bin)</span>
<span class="tok-cmd">tools/bin/yai-verify</span> <span class="tok-arg">list</span>
<span class="tok-cmd">tools/bin/yai-verify</span> <span class="tok-arg">core</span>
<span class="tok-cmd">tools/bin/yai-proof-check</span>`,
    c: `<span class="tok-com">/* yai-sdk executor flow (repo: yai-sdk/include + src/ops/executor.c) */</span>
<span class="tok-kw">const char</span>* argv[] = { <span class="tok-str">"status"</span> };
<span class="tok-kw">yai_exec_request_t</span> req = {
  .command_id = <span class="tok-str">"yai.root.ping"</span>,
  .argc = <span class="tok-num">1</span>,
  .argv = argv,
  .json_mode = <span class="tok-num">1</span>
};

<span class="tok-kw">yai_exec_result_t</span> out = { <span class="tok-num">0</span> };
<span class="tok-kw">int</span> rc = <span class="tok-fn">yai_sdk_execute</span>(&req, &out);
<span class="tok-fn">printf</span>(<span class="tok-str">"rc=%d code=%d msg=%s\\n"</span>, rc, out.code, out.message ? out.message : <span class="tok-str">""</span>);`,
    json: `<span class="tok-com">// decision record excerpt (repo: yai-ops/evidence/.../decision_records.pretty.json)</span>
{
  <span class="tok-key">"event"</span>: { <span class="tok-key">"type"</span>: <span class="tok-str">"network.egress.connect"</span>, <span class="tok-key">"source"</span>: <span class="tok-str">"rt001-curl-live"</span> },
  <span class="tok-key">"decision"</span>: {
    <span class="tok-key">"outcome"</span>: <span class="tok-str">"deny"</span>,
    <span class="tok-key">"reason_code"</span>: <span class="tok-str">"EGRESS_DEST_NOT_CONTRACTED"</span>,
    <span class="tok-key">"baseline_id"</span>: <span class="tok-str">"baseline-deny"</span>
  },
  <span class="tok-key">"enforcement"</span>: { <span class="tok-key">"result"</span>: <span class="tok-str">"blocked"</span> },
  <span class="tok-key">"metrics"</span>: { <span class="tok-key">"time_to_contain_ms"</span>: <span class="tok-num">0</span>, <span class="tok-key">"bytes_exfiltrated"</span>: <span class="tok-num">0</span> }
}`,
    yaml: `<span class="tok-com"># wave item excerpt (repo: yai-ops/.../wave/wave.yaml)</span>
<span class="tok-key">id</span>: <span class="tok-str">WAVE-1</span>
<span class="tok-key">launch_id</span>: <span class="tok-str">SC102-WAVE1-LAUNCH</span>
<span class="tok-key">scenario</span>: <span class="tok-str">SC-102</span>
<span class="tok-key">selection_policy</span>: <span class="tok-str">selected-runs-only</span>
<span class="tok-key">items</span>:
  - <span class="tok-key">trial_id</span>: <span class="tok-str">RT-0.1-001-D1-EGRESS-CURL</span>
    <span class="tok-key">pack_id</span>: <span class="tok-str">D1-digital/egress-v1</span>
    <span class="tok-key">baseline_contract_ref</span>: <span class="tok-str">.../baseline-deny.json</span>
    <span class="tok-key">run_cmds</span>:
      - <span class="tok-key">path</span>: <span class="tok-str">.../run-three.sh</span>`,
    make: `<span class="tok-com"># build + gates (repo: yai/Makefile)</span>
<span class="tok-kw">build</span>: boot root kernel engine
<span class="tok-kw">dist</span>: build
<span class="tok-kw">bundle</span>: dist
  <span class="tok-cmd">tools/bin/yai-bundle</span>

<span class="tok-kw">verify</span>:
  <span class="tok-cmd">./tools/bin/yai-verify</span>

<span class="tok-kw">proof-verify</span>:
  <span class="tok-cmd">tools/bin/yai-proof-check</span>`,
  } as const;

  const tabs = [
    { id: "bash", label: "BASH" },
    { id: "c", label: "C" },
    { id: "json", label: "JSON" },
    { id: "yaml", label: "YAML" },
    { id: "make", label: "MAKE" },
  ] as const;

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("bash");

  return (
    <div className="home-code" aria-label="Quickstart">
      <div className="home-code-head home-code-head--stack">
        <div className="home-code-tabs" role="tablist" aria-label="Quickstart languages">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`home-code-tab ${activeTab === tab.id ? "is-active" : ""}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <pre className="home-code-pre">
        <code dangerouslySetInnerHTML={{ __html: snippets[activeTab] }} />
      </pre>
    </div>
  );
}

function DeployCard(props: { title: string; lines: [string, string]; href: string; cta: string }) {
  return (
    <Link href={props.href} className="deploy-card">
      <h3 className="deploy-card__title">{props.title}</h3>
      <p className="deploy-card__body">
        <span>{props.lines[0]}</span>
        <span>{props.lines[1]}</span>
      </p>
      <span className="deploy-card__cta">{props.cta} →</span>
    </Link>
  );
}

function DeployAnywhere() {
  return (
    <div className="home-deploy">
      <header className="home-section-head">
        <p className="home-h2 home-section-title">Deploy  <span className="accent">anywhere</span></p>
        <p className="home-sub">
          Run YAI alongside your systems — enforce contracts before external effects.
        </p>
      </header>
      <div className="deploy-grid">
        <DeployCard
          title="Sidecar / Gateway"
          lines={[
            "Attach to services and pipelines.",
            "Preflight actions before network, storage, or actuators.",
          ]}
          href="/docs/patterns"
          cta="See patterns"
        />
        <DeployCard
          title="On-prem / Air-gapped"
          lines={[
            "Keep data and proofs local.",
            "Pinned registries, deterministic runs, evidence bundles on disk.",
          ]}
          href="/docs/deploy"
          cta="Read deployment guide"
        />
        <DeployCard
          title="Embedded / SDK"
          lines={[
            "Integrate at the edge.",
            "C/C++/Rust SDK, minimal footprint, fail-closed enforcement.",
          ]}
          href="/docs/sdk"
          cta="Browse SDK"
        />
      </div>
    </div>
  );
}

function IntegrateInMinutes() {
  return (
    <div className="home-integrate">
      <header className="home-section-head">
        <p className="home-h2 home-section-title">Start building in  <span className="accent">minutes</span></p>
      </header>
      <Quickstart />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Section id="domains" className="home-block">
        <div className="home-section-head">
          <p className="home-h2 home-section-title">
            Govern action in real <span className="accent">environments</span>
          </p>
          <p className="home-sub">Start with one workflow, then expand across domains.</p>
        </div>
        <DomainsGridSection featuredOnly showAllLink />
      </Section>

      <Section id="faster" className="home-block">
        <DeployAnywhere />
      </Section>

      <Section id="stack" className="home-block">
        <div className="home-stack-split">
          <IntegrationsLogos />
          <div className="home-section-head home-stack-copy">
            <p className="home-h2 home-section-title">
              Integrates where <span className="accent">actions</span> happen
            </p>
            <p className="home-sub">
              YAI wraps pipelines, scripts, and device-side execution with verifiable proof surfaces.
            </p>
          </div>
        </div>
      </Section>

      <Section id="deploy" className="home-block">
        <IntegrateInMinutes />
      </Section>

    </>
  );
}
