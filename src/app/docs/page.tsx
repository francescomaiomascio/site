import Link from "next/link";

export default function DocsHomePage() {
  return (
    <main className="section">
      <div className="section-inner">
        <h1>Docs</h1>
        <p>Documentation surfaces for deployment, SDK integration, and runtime patterns.</p>
        <ul>
          <li>
            <Link href="/docs/deploy">Deploy guide</Link>
          </li>
          <li>
            <Link href="/docs/sdk">SDK docs</Link>
          </li>
          <li>
            <Link href="/docs/patterns">Execution patterns</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
