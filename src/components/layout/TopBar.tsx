import Link from "next/link";

const PILOT_MAILTO =
  "mailto:pilot@yai.foundation?subject=Book%20Pilot%20-%20YAI%2014-Day";

const DOCS_URL = "https://github.com/yai-labs/yai/tree/main/docs";
const GITHUB_URL = "https://github.com/yai-labs/yai";

export function TopBar() {
  return (
    <header className="topbar" role="banner">
      <nav className="topbar-inner" aria-label="Primary">
        <Link href="/" className="topbar-brand" aria-label="YAI Labs home">
          <span className="topbar-brand-mark">YAI</span>
          <span className="topbar-brand-meta">Governed Execution</span>
        </Link>

        <div className="topbar-links" role="navigation" aria-label="Site">
          <Link href="/#proof" className="topbar-link">
            Proof
          </Link>
          <Link href="/#services" className="topbar-link">
            Services
          </Link>
          <a className="topbar-link" href={DOCS_URL} target="_blank" rel="noreferrer">
            Docs
          </a>
        </div>

        <div className="topbar-actions">
          <a className="topbar-link topbar-link--muted" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button button--primary" href={PILOT_MAILTO}>
            Book Pilot
          </a>
        </div>
      </nav>
    </header>
  );
}