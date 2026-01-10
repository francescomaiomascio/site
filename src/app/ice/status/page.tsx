export default function Status() {
  return (
    <section>
      <h1>Project Status</h1>

      <p>
        ICE Lab is currently in a <strong>foundational / pre-MVP</strong> phase.
        The focus of development is on stabilizing architecture, lifecycle
        management, and core abstractions before public releases.
      </p>

      <h2>Current Focus</h2>

      <ul>
        <li>
          Definition and stabilization of the ICE runtime lifecycle (preboot,
          orchestration, execution).
        </li>
        <li>
          Development of ICE Studio as the primary Integrated Cognitive
          Environment.
        </li>
        <li>
          Consolidation of agent orchestration, knowledge handling, and local
          computation.
        </li>
        <li>
          Formalization of protocols and network discovery mechanisms.
        </li>
      </ul>

      <h2>What Exists Today</h2>

      <ul>
        <li>
          A functional ICE Studio environment under active development.
        </li>
        <li>
          A unified codebase containing runtime, agents, networking, and UI
          components.
        </li>
        <li>
          An evolving documentation system serving as the single source of
          truth.
        </li>
      </ul>

      <h2>What Is Not Ready Yet</h2>

      <ul>
        <li>Public releases or binary downloads.</li>
        <li>Stable APIs or protocol specifications.</li>
        <li>Separated, standalone modules for each ICE domain.</li>
      </ul>

      <h2>Next Milestones</h2>

      <ul>
        <li>First internal release of ICE Studio.</li>
        <li>
          Progressive extraction of ICE Engine and ICE AI into clearer semantic
          boundaries.
        </li>
        <li>
          Initial public documentation focused on onboarding and core concepts.
        </li>
      </ul>

      <p>
        The project intentionally prioritizes correctness and architectural
        clarity over rapid feature expansion.
      </p>
    </section>
  );
}
