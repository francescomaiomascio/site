"use client";

import { Section } from "@/components/layout/Section";

const PILOT_MAILTO =
  "mailto:pilot@yai.foundation?subject=Book%20Pilot%20-%20YAI%2014-Day";

const DOCS_URL = "https://github.com/yai-labs/yai/tree/main/docs";
const PROOF_URL = "/#proof"; // se poi vuoi farlo bene: crea /proof page e metti "/proof"
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

function Hero() {
  return (
    <section id="hero" className="hero2" aria-label="YAI Labs hero">
      <div className="hero2-bg" aria-hidden="true">
        <div className="hero2-bg-ice" />
        <div className="hero2-bg-violet" />
        <div className="hero2-bg-overlay" />
      </div>

      <div className="hero2-inner">
        <div className="hero2-head">
          <h1>Governed AI execution for production systems.</h1>
          <p className="hero2-subhead">
            YAI Labs builds execution infrastructure where policy is enforced fail-closed,
            decisions are reason-coded, and evidence is audit-ready.
          </p>
        </div>

        <div className="hero2-grid">
          <div className="hero2-left">
            <p className="hero2-kicker">YAI Labs</p>

            <p className="hero2-lead">
              AI in production needs governance you can verify.
            </p>

            <div className="hero2-points" role="list" aria-label="Core principles">
              <div className="hero2-point" role="listitem">
                <div className="hero2-point-title">Fail-closed boundaries</div>
                <div className="hero2-point-body">
                  No hidden side-effects. External effects are explicitly allowed or denied.
                </div>
              </div>

              <div className="hero2-point" role="listitem">
                <div className="hero2-point-title">Deterministic paths</div>
                <div className="hero2-point-body">
                  Same inputs → same decisions, with reason codes and replayable evidence.
                </div>
              </div>

              <div className="hero2-point" role="listitem">
                <div className="hero2-point-title">Audit-ready artifacts</div>
                <div className="hero2-point-body">
                  Policy baselines, manifests, and runs packaged for verification.
                </div>
              </div>
            </div>

            <div className="hero2-cta" aria-label="Primary actions">
              <a className="button button--primary" href={PILOT_MAILTO}>
                Book Pilot
              </a>
              <a className="button button--ghost" href="#services">
                Explore services
              </a>
              <ExternalAnchor className="button button--link" href={DOCS_URL} ariaLabel="Open docs">
                Read docs
              </ExternalAnchor>
            </div>

            <div className="hero2-mini">
              <span className="hero2-mini-label">Open-source</span>
              <ExternalAnchor href={GITHUB_URL} ariaLabel="Open GitHub repository">
                GitHub repository →
              </ExternalAnchor>
            </div>
          </div>

          {/* Right side: “company strip” + not a bundle */}
          <aside className="hero2-right" aria-label="Signals">
            <div className="hero2-signal">
              <div className="hero2-signal-title">Built for production</div>
              <div className="hero2-signal-body">
                Governed execution surfaces designed for CI/CD, audit, and operations.
              </div>
            </div>

            <div className="hero2-signal">
              <div className="hero2-signal-title">Proof-led</div>
              <div className="hero2-signal-body">
                Reproducible verification over claims. Evidence over screenshots.
              </div>
            </div>

            <div className="hero2-partners">
              <div className="hero2-partners-title">Compatibility / signals</div>
              <div className="hero2-logos" aria-label="Partner logos placeholder">
                <div className="hero2-logo">OTEL</div>
                <div className="hero2-logo">S3</div>
                <div className="hero2-logo">GitHub</div>
                <div className="hero2-logo">K8s</div>
              </div>
              <div className="hero2-partners-note">
                Replace with real partnerships / integrations when ready.
              </div>
            </div>
          </aside>
        </div>

        <div className="hero2-hint">
          <a href="#how" className="hero2-hint-link">
            ↓ How it works
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* HOW (no cards) */}
      <Section id="how" className="section--projects project-section">
        <section className="yai-launch">
          <p className="yai-launch-kicker">How it works</p>
          <h2>Contract → Decision → Evidence</h2>
          <p className="yai-launch-subtitle">
            A governed runtime flow where policy is pinned to contracts, enforced at execution,
            and emitted as evidence you can replay.
          </p>

          <div className="howline" role="list" aria-label="Flow">
            <div className="howline-item" role="listitem">
              <div className="howline-title">Contract</div>
              <div className="howline-body">Defines allowed effects and constraints.</div>
            </div>
            <div className="howline-arrow" aria-hidden="true">→</div>
            <div className="howline-item" role="listitem">
              <div className="howline-title">Decision</div>
              <div className="howline-body">Enforces policy with reason codes.</div>
            </div>
            <div className="howline-arrow" aria-hidden="true">→</div>
            <div className="howline-item" role="listitem">
              <div className="howline-title">Evidence</div>
              <div className="howline-body">Pins artifacts for replay and audit.</div>
            </div>
          </div>
        </section>
      </Section>

      {/* PROOF teaser ONLY (no bundle in homepage) */}
      <Section id="proof" className="section--projects project-section">
        <section className="yai-launch">
          <p className="yai-launch-kicker">Proof</p>
          <h2>Reproducible verification, not marketing claims.</h2>
          <p className="yai-launch-subtitle">
            We publish proof surfaces as versioned artifacts. If it can’t be verified, it doesn’t ship.
          </p>

          <div className="proof-teaser">
            <div className="proof-teaser-left">
              <div className="proof-teaser-title">Launch Proof</div>
              <div className="proof-teaser-body">
                A deterministic verification bundle demonstrating allow/deny outcomes on the same contract.
              </div>
            </div>
            <div className="proof-teaser-actions">
              <a className="button button--primary" href={PROOF_URL}>
                View proof
              </a>
              <ExternalAnchor className="button button--ghost" href={DOCS_URL} ariaLabel="Open docs">
                Read docs
              </ExternalAnchor>
            </div>
          </div>
        </section>
      </Section>

      {/* SERVICES (still 3, but calmer) */}
      <Section id="services" className="section--projects project-section">
        <section className="yai-launch">
          <p className="yai-launch-kicker">Services</p>
          <h2>Proof-led delivery for production teams.</h2>
          <p className="yai-launch-subtitle">
            Short cycles focused on policy, enforcement, and evidence your org can keep.
          </p>

          <div className="service-list" role="list">
            <div className="service-item" role="listitem">
              <div className="service-title">14-Day Design Partner Pilot</div>
              <div className="service-body">
                One real workflow in your environment. Policy contract + enforcement + evidence report.
              </div>
              <a className="service-cta" href={PILOT_MAILTO}>Book Pilot →</a>
            </div>

            <div className="service-item" role="listitem">
              <div className="service-title">Assurance Pack (Audit Readiness)</div>
              <div className="service-body">
                Evidence review, governance gap mapping, and remediation checklist aligned to controls.
              </div>
              <a className="service-cta" href={PILOT_MAILTO}>Request scope →</a>
            </div>

            <div className="service-item" role="listitem">
              <div className="service-title">Production Change Guard</div>
              <div className="service-body">
                Guardrails for policy changes and effects: fail-closed enforcement with traceable outcomes.
              </div>
              <a className="service-cta" href={PILOT_MAILTO}>Discuss deployment →</a>
            </div>
          </div>
        </section>
      </Section>

      {/* Footer block stays as you already have it in your Section with footer */}
      <Section id="yai-launch-footer" className="section--projects project-section yai-launch-section" withFooter>
        
      </Section>
    </>
  );
}