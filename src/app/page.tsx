// src/app/page.tsx
import { Section } from "@/components/layout/Section";
import Link from "next/link";

import { currentFocus } from "@/content/focus";
import { primaryLinks } from "@/content/links";
import { projects } from "@/content/projects";
import { writing } from "@/content/writing";

function safeUrl(url?: string) {
  if (!url) return null;
  try {
    // Ensure absolute URL (canonical outbound links should be absolute)
    // This will throw on invalid URLs.
    new URL(url);
    return url;
  } catch {
    return null;
  }
}

export default function HomePage() {
  // Optional “preview” signals (no deep content; just routing hints)
  const primaryProjects = Array.isArray(projects) ? projects.slice(0, 3) : [];
  const primaryWriting = Array.isArray(writing) ? writing.slice(0, 3) : [];
  const focusItems = Array.isArray(currentFocus) ? currentFocus : [];

  const external = primaryLinks
    .map((link) => ({ label: link.label, url: safeUrl(link.href) }))
    .filter((x) => x.url);

  return (
    <>
      <Section id="hero" variant="hero">
        <div className="hero-content">
          <header className="hero-header">
            <h1>Francesco Maiomascio</h1>
            <p className="hero-subtitle">
              I build governable software systems: identity, authority, traceability.
            </p>
          </header>

          <div className="hero-thesis">
            <p>
              This site is a routing surface: it maps projects and writing across platforms
              and points to canonical sources.
            </p>
          </div>
        </div>
      </Section>

      <Section id="focus" width="narrow">
        <h2>Current focus</h2>
        {focusItems.length > 0 ? (
          focusItems.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {Array.isArray(item.highlights) && item.highlights.length > 0 && (
                <ul>
                  {item.highlights.slice(0, 5).map((b, i) => (
                    <li key={`${item.title}-${i}`}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <p>Focus areas are being updated.</p>
        )}
      </Section>

      <Section id="paths" width="narrow">
        <h2>Navigate</h2>

        <ul>
          <li>
            <Link href="/projects">Projects</Link> — what exists and where it lives
          </li>
          <li>
            <Link href="/writing">Writing</Link> — series and essays (canonical links)
          </li>
          <li>
            <Link href="/about">About</Link> — identity and approach
          </li>
          <li>
            <Link href="/status">Status</Link> — updates and current state
          </li>
        </ul>
      </Section>

      {(primaryProjects.length > 0 || primaryWriting.length > 0) && (
        <Section id="signals" width="narrow">
          <h2>Signals</h2>

          {primaryProjects.length > 0 && (
            <>
              <h3>Active projects</h3>
              <ul>
                {primaryProjects.map((p) => (
                  <li key={p.id ?? p.name}>
                    <strong>{p.name}</strong>
                    {p.description ? ` — ${p.description}` : null}
                  </li>
                ))}
              </ul>
            </>
          )}

          {primaryWriting.length > 0 && (
            <>
              <h3>Recent writing</h3>
              <ul>
                {primaryWriting.map((w) => (
                  <li key={w.id ?? w.title}>
                    <strong>{w.title}</strong>
                    {w.series ? ` — ${w.series}` : null}
                  </li>
                ))}
              </ul>
            </>
          )}

          <p>
            Details live in <Link href="/projects">/projects</Link> and{" "}
            <Link href="/writing">/writing</Link>.
          </p>
        </Section>
      )}

      {external.length > 0 && (
        <Section id="links" width="narrow">
          <h2>Canonical links</h2>
          <ul>
            {external.map((x) => (
              <li key={x.label}>
                <a href={x.url!} target="_blank" rel="noreferrer">
                  {x.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
