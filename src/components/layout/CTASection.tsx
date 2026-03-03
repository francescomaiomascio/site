"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <section className="yai-prefooter-cta" aria-label="Get started">
      <div className="yai-footer-shell">
        <h2 className="yai-prefooter-title">Get started</h2>
        <p className="yai-prefooter-sub">
          Speak with a YAI expert and design governed execution for production systems.
        </p>
        <div className="yai-prefooter-actions">
          <Link className="button button--primary" href="/#products">
            Try YAI
          </Link>
          <a
            className="button button--ghost"
            href="mailto:pilot@yai.foundation?subject=Book%20Pilot%20-%20YAI%2014-Day"
          >
            Book pilot
          </a>
        </div>
      </div>
    </section>
  );
}
