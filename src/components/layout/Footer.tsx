export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner site-shell">
        <span className="site-footer-meta">© {year} Francesco Maiomascio</span>

        <nav className="site-footer-center" aria-label="Footer">
          <a href="/status" className="footer-link-status">Status</a>
          <a href="/security">Security</a>
          <a href="/privacy">Privacy</a>
          <a href="/cookie-policy">Cookies</a>
          <a href="/docs">Docs</a>
        </nav>

        <nav className="site-footer-right" aria-label="Footer secondary">
          <a href="/links">Links</a>
        </nav>
      </div>
    </footer>
  );
}
