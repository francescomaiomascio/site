import Link from "next/link";

export default function DocsDeployPage() {
  return (
    <main className="section">
      <div className="section-inner">
        <h1>Deploy Guide</h1>
        <p>Full deployment runbooks are being consolidated for this surface.</p>
        <p>Full catalog coming next.</p>
        <p>
          <Link href="/docs">Back to docs</Link>
        </p>
      </div>
    </main>
  );
}
