import { Section } from "@/components/layout/Section";

export default function AboutPage() {
  return (
    <div className="about-page">
      <Section id="about-intro" className="section--about" snap={false}>
        <div className="container narrow">
          <h1>About</h1>

          <p>
            I work on complex software systems that are expected to run, adapt,
            and remain accountable over time.
          </p>

          <p>
            My focus is not on models or features, but on how systems execute,
            evolve, and remain governable under real constraints.
          </p>
        </div>
      </Section>

      <Section id="about-focus" className="section--about" snap={false}>
        <div className="container narrow">
          <h2>What I do NOT focus on</h2>

          <p>I am not primarily interested in:</p>

          <ul>
            <li>prompt engineering as a product strategy</li>
            <li>short-lived agent demos</li>
            <li>benchmark-driven model optimization</li>
            <li>intelligence treated as a black box</li>
          </ul>
        </div>
      </Section>

      <Section id="about-method" className="section--about" snap={false}>
        <div className="container narrow">
          <h2>Method — Execution as a first-class concern</h2>

          <p>
            I treat intelligence as an execution problem, not a model problem.
          </p>

          <p>
            My work starts from the assumption that any intelligent system,
            to be meaningful, must expose:
          </p>

          <ul>
            <li>explicit execution lifecycles</li>
            <li>traceable decision paths</li>
            <li>constrained and auditable side effects</li>
            <li>memory as a governed artifact</li>
            <li>the possibility of inspection and replay over time</li>
          </ul>
        </div>
      </Section>

      <Section id="about-architecture" className="section--about" snap={false}>
        <div className="container narrow">
          <h2>Architectural stance — Constraints over capability</h2>

          <p>
            I approach system design from an architectural perspective.
          </p>

          <p>
            I am interested in constraints, invariants, and responsibility
            boundaries more than in raw capability.
          </p>

          <p>
            In my work, architecture is not a diagram but a set of enforceable
            rules that shape what a system is allowed to do.
          </p>
        </div>
      </Section>

      <Section id="about-approach" className="section--about" snap={false} withFooter>
        <div className="container narrow">
          <h2>Principles — Working axioms</h2>

          <p>I consistently prioritize:</p>

          <ul>
            <li>architectural coherence over feature accumulation</li>
            <li>governance over convenience</li>
            <li>inspectability over opacity</li>
            <li>long-term maintainability over short-term optimization</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
