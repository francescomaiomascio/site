export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner site-shell">
        <div className="site-footer-copy">
          <p>
            © {year} Francesco Maiomascio · Personal hub and public routing surface.
          </p>

          <p>
            This site maps projects and writing across platforms.
            Canonical content lives on external sources.
          </p>
        </div>

        <nav className="site-footer-links" aria-label="Footer">
          <a
            href="https://github.com/francescomaiomascio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@francescomaiomascio"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
          <a
            href="https://maiomascio.gumroad.com"
            target="_blank"
            rel="noreferrer"
          >
            Gumroad
          </a>
          <a
            href="https://www.linkedin.com/in/francesco-maiomascio/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
