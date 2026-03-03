import Link from "next/link";

export default function DocsPatternsPage() {
  return (
    <main className="section">
      <div className="section-inner">
        <h1>Patterns</h1>
        <p>Reference patterns for sidecar, gateway, and enforcement flows are coming next.</p>
        <p>Full catalog coming next.</p>
        <p>
          <Link href="/docs">Back to docs</Link>
        </p>
      </div>
    </main>
  );
}
