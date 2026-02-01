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
  const primaryProjects = Array.isArray(projects) ? projects.slice(0, 1) : [];
  const primaryWriting = Array.isArray(writing) ? writing.slice(0, 1) : [];
  const focusItem = Array.isArray(currentFocus) ? currentFocus[0] : undefined;
  const primaryPaths = [
    {
      href: "/projects",
      title: "Projects",
      description: "Artifacts",
      detail: "Systems, tools, and standards in active development.",
    },
    {
      href: "/writing",
      title: "Writing",
      description: "Thinking",
      detail: "Notes, essays, and governance frames in progress.",
    },
    {
      href: "/status",
      title: "Status",
      description: "Now",
      detail: "Current signals, milestones, and operational state.",
    },
    {
      href: "/about",
      title: "About",
      description: "Identity",
      detail: "Background, approach, and research orientation.",
    },
  ];

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

      <Section id="paths" width="narrow">
        <h2>What you can explore</h2>
        <div className="nav-cards">
          {primaryPaths.map((item) => (
            <Link key={item.href} href={item.href} className="nav-card">
              <span className="nav-card-title">{item.title}</span>
              <span className="nav-card-meta">{item.description}</span>
              <span className="nav-card-detail">{item.detail}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="focus" width="narrow">
        <h2>Current focus</h2>
        {focusItem ? (
          <div className="focus-block">
            <p>
              <strong>{focusItem.title}</strong>
              {focusItem.description ? ` — ${focusItem.description}` : null}
            </p>
            {Array.isArray(focusItem.highlights) &&
              focusItem.highlights.length > 0 && (
                <ul>
                  {focusItem.highlights.slice(0, 3).map((b, i) => (
                    <li key={`${focusItem.title}-${i}`}>{b}</li>
                  ))}
                </ul>
              )}
          </div>
        ) : (
          <p>Focus areas are being updated.</p>
        )}
      </Section>

      {(primaryProjects.length > 0 || primaryWriting.length > 0) && (
        <Section id="signals" width="narrow">
          <h2>Signals</h2>
          <div className="signals-list">
            {primaryProjects.map((p) => (
              <div key={p.id ?? p.name} className="signals-item">
                <span className="signals-label">Project</span>
                <span className="signals-value">
                  {p.name}
                  {p.description ? ` — ${p.description}` : null}
                </span>
              </div>
            ))}
            {primaryWriting.map((w) => (
              <div key={w.id ?? w.title} className="signals-item">
                <span className="signals-label">Writing</span>
                <span className="signals-value">
                  {w.title}
                  {w.series ? ` — ${w.series}` : null}
                </span>
              </div>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
