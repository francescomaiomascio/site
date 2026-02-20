import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "About Francesco Maiomascio — Software systems, execution, and governance",
  description:
    "I design and study long-running software systems with a focus on execution, governance, and architectural responsibility over time.",
  alternates: { canonical: "https://www.maiomascio.dev/about" },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <Section id="about-intro" className="section--about section--wide">
        <div className="about-section-inner is-wide about-intro-inner">
          <div className="about-content">
            <h1>About — Software systems, execution, and governance</h1>

            <p>
              Complex software systems rarely fail because of missing features.
              They fail when responsibility blurs, execution becomes opaque, and
              change can no longer be traced over time.
            </p>

            <p className="about-intro-central">
              Long-running systems are expected to run continuously, evolve
              under pressure, and remain accountable long after their initial
              deployment. In this context, correctness is not a static property
              established at launch, but a condition that must be preserved
              while the system is operating.
            </p>

            <p className="about-intro-hide-mobile">
              Rather than treating software as a collection of isolated
              components, the focus here is on systems whose behavior unfolds
              over time — systems that must remain inspectable, governable, and
              trustworthy as complexity increases.
            </p>

            <p>
              This page describes an approach to system design where execution
              clarity and architectural constraints are treated as first-class
              requirements, not afterthoughts.
            </p>
          </div>

          <div className="about-intro-aside">
            <div className="about-media">
              <blockquote className="about-quote">
                “Complexity is anything that makes software hard to understand
                or modify.”
                <span>
                  John Ousterhout,{" "}
                  <a
                    href="https://web.stanford.edu/~ouster/cgi-bin/book.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    A Philosophy of Software Design
                  </a>
                </span>
              </blockquote>
            </div>

            <div className="about-references">
              <p>
                <a
                  href="https://web.stanford.edu/~ouster/cgi-bin/book.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ousterhout, J. A. <em>A Philosophy of Software Design</em>,
                  2018.
                </a>
              </p>
              <p>
                <a
                  href="https://ieeexplore.ieee.org/document/1702388"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lehman, M. M. “Laws of Software Evolution”, IEEE, 1980.
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="about-focus" className="section--about section--wide">
        <div className="about-section-inner is-wide">
          <div className="about-content">
            <h2>Focus — Software systems over time</h2>

            <p>
              The behavior of a system after deployment is often more revealing
              than its initial design.
            </p>

            <p>
              What matters is not how software appears at launch, but how it
              behaves while running: how it is operated, modified, observed,
              audited, and corrected when things go wrong. As systems evolve,
              they accumulate state, decisions, and dependencies that
              fundamentally shape their behavior.
            </p>

            <p>
              Many contemporary approaches emphasize speed, iteration, and
              short-term capability. While effective for rapid development,
              these approaches often underrepresent the long-term consequences
              of execution: drift, hidden coupling, and decision paths that
              become difficult—or impossible—to reconstruct.
            </p>

            <p>
              In long-running environments, failures are rarely isolated events.
              They emerge from interactions over time, not from a single defect
              or moment. Understanding how a decision was made—and how its
              effects propagated—frequently matters as much as the outcome
              itself.
            </p>

            <p>
              As complexity increases, systems that obscure execution flow or
              responsibility tend to fail precisely when accountability is most
              needed.
            </p>

            <p>Over time, execution becomes the system.</p>
          </div>

          <div className="about-focus-aside">
            <blockquote className="about-quote">
              “Failure emerges over time, not at a single point.”
              <span>
                Lehman, M. M., <em>Laws of Software Evolution</em>
              </span>
            </blockquote>

            <div className="about-focus-visual">
              <div className="about-focus-visual__axis">TIME →</div>
              <div className="about-focus-visual__axis">
                COMPLEXITY / ENTROPY ↑
              </div>
              <div className="about-focus-visual__markers">
                <span>deploy</span>
                <span>drift</span>
                <span>incident</span>
                <span>refactor</span>
              </div>
            </div>

            <div className="about-references">
              <p>
                <a href="https://doi.org/10.1016/S0020-0190(03)00382-X">
                  Lehman, M. M., Ramil, J. F. — Software Evolution, ACM, 2003
                </a>
              </p>
              <p>
                <a href="https://doi.org/10.1109/TDSC.2004.2">
                  Avizienis, A. et al. — Basic Concepts and Taxonomy of
                  Dependable Systems, IEEE
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="about-method" className="section--about section--wide">
        <div className="about-section-inner is-wide">
          <div className="about-content">
            <h2>Method — Making execution visible</h2>

            <p className="about-method-lead">
              Intelligent systems cannot be evaluated solely by the quality of
              their outputs. Over time, what matters is how behavior is
              produced, constrained, observed, and corrected once a system is
              operating in real conditions.
            </p>

            <h3>From output to behavior</h3>

            <p>
              Models may generate results, but systems enact decisions.
              Once a system performs actions, it accumulates state, introduces
              dependencies, and creates responsibility. If these elements
              remain implicit, reliability degrades — regardless of how capable
              individual components may appear.
            </p>

            <p>
              Short-lived demonstrations often conceal this complexity.
              Long-running systems expose it.
            </p>

            <div className="about-evidence">
              <h3>What must be explicit</h3>
              <ul>
                <li>end-to-end execution lifecycles</li>
                <li>decision paths that can be traced and inspected</li>
                <li>side effects that are constrained and auditable</li>
                <li>memory treated as a governed artifact</li>
                <li>ability to inspect and replay behavior over time</li>
              </ul>
            </div>
          </div>

          <div className="about-media">
            <h3>Visibility as a design requirement</h3>

            <p>
              A system intended to operate beyond a demonstration must make its
              internal behavior observable: how decisions are made, how effects
              propagate, and how change is introduced and reviewed.
            </p>

            <p>
              Visibility is not an implementation detail.
              It is a prerequisite for trust, debugging, and long-term evolution.
            </p>

            <div className="about-diagram">
              <p className="about-diagram__title">Execution Flow</p>
              <p>Decision → State Transition → Side Effect → Audit Point</p>
            </div>

            <p>
              Given these constraints, execution can be reasoned about,
              audited, and evolved safely over time.
            </p>

            <p className="about-quote about-quote--center">
              “Making execution visible is how systems remain accountable as
              they grow.”
            </p>
          </div>
        </div>
      </Section>

      <Section id="about-architecture" className="section--about">
        <div className="about-section-inner">
          <div className="about-content">
            <h2>Architectural stance — Constraints over capability</h2>

            <p>
              Capability alone is rarely the limiting factor in complex systems.
            </p>

            <p>
              Architectural decisions here are approached through constraints,
              invariants, and responsibility boundaries, rather than by
              maximizing what a system can do in the short term.
              Capability-driven designs tend to optimize for immediacy, often at
              the cost of long-term enforceability.
            </p>

            <p>
              Constraint-driven architectures define clear limits:
            </p>

            <ul>
              <li>what actions are permitted</li>
              <li>who is authorized to perform them</li>
              <li>how change is reviewed, audited, and controlled</li>
            </ul>

            <p>
              Architecture, in this view, is not an abstract ideal.
              It is a set of enforceable rules that shapes behavior, limits
              unintended outcomes, and preserves accountability as systems evolve.
            </p>

            <blockquote className="about-quote about-quote--inline">
              “We need to build simple systems if we want to build good systems.”
              <span>— Rich Hickey, Simple Made Easy</span>
            </blockquote>
          </div>

          <div className="about-references">
            <p>Hickey, R. “Simple Made Easy”, 2011.</p>
            <p>
              Parnas, D. L. “On the Criteria To Be Used in Decomposing Systems”,
              1972.
            </p>
          </div>
        </div>
      </Section>

      <Section id="about-approach" className="section--about">
        <div className="about-section-inner">
          <div className="about-content">
            <h2>Principles — Working axioms</h2>

            <p>
              Several principles consistently guide architectural and system
              design decisions:
            </p>

            <ul>
              <li>architectural coherence over feature accumulation</li>
              <li>governance over convenience</li>
              <li>inspectability over opacity</li>
              <li>long-term maintainability over short-term optimization</li>
            </ul>

            <p>
              These are not slogans. They function as operational priorities that
              influence real trade-offs across software architecture, system
              design, and long-running intelligent systems.
            </p>
          </div>

          <div className="about-references">
            <p>ISO/IEC 42010 — Architecture Descriptions.</p>
            <p>
              Sculley, D. et al. “Hidden Technical Debt in ML Systems”, Google.
            </p>
          </div>
        </div>
      </Section>

      <Section id="about-signals" className="section--about section--wide">
        <div className="about-section-inner is-wide">
          <div className="about-content">
            <h2>Signals — Evidence of work</h2>

            <p>This approach is not theoretical.</p>

            <p>
              It is applied across public projects, technical writing, and
              ongoing experiments focused on system behavior, governance, and
              observability.
            </p>

            <p>
              Concrete entry points live in <strong>Projects</strong> and{" "}
              <strong>Writing</strong>, where these ideas are tested, stressed,
              and refined in practice.
            </p>
          </div>

          <div className="about-signals-media">
            <div className="about-signals-block">
              <h3>GitHub activity</h3>
              <p>Commit rhythm over time.</p>
            </div>

            <div className="about-signals-block">
              <h3>Pinned repositories</h3>
              <p>Core systems and operational status.</p>
            </div>

            <div className="about-signals-block">
              <h3>System map</h3>
              <p>Repository graph, dependencies, and evolution.</p>
            </div>
          </div>

          <div className="about-references">
            <p>GitHub public repositories.</p>
            <p>Technical essays and long-form writing linked internally.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
