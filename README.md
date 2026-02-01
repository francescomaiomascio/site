# site

Personal hub and routing surface.

This repository powers my personal website: a stable entry point that maps work across platforms (GitHub, Medium, Gumroad) without turning the site into the “homepage” of any single project.

The goal is simple: make the work navigable.

---

## What this site is

- A **routing surface** for systems work: identity, authority, traceability, execution structure.
- A curated index of projects, writing series, and artifacts.
- A long-lived interface focused on **context + navigation** (not hype).

---

## What this site is not

- Not a publishing platform (long-form writing lives on Medium).
- Not a sales platform (products and checkout live on Gumroad).
- Not an ICE dashboard or runtime surface (ICE remains defined by its own repositories).
- No backend, no accounts, no tracking-first UX assumptions.

---

## Canonical sources

The site links out to canonical sources on purpose.

- GitHub (code + work log): https://github.com/francescomaiomascio
- Medium (writing): https://medium.com/@francescomaiomascio
- LinkedIn (public updates): https://www.linkedin.com/in/francesco-maiomascio/
- Gumroad (artifacts): https://maiomascio.gumroad.com

---

## Repository scope

This repo contains:

- website source code
- routing and layout
- presentational components
- a small **declarative content layer** (`src/content`) used to map:
  - current focus
  - projects
  - writing series
  - canonical external links

It does not contain:

- ICE runtime code or core logic
- governance authority for any project
- standards or enforcement logic

Authority lives in the canonical repositories.  
This site only **routes and explains**.

---

## Design stance

- clarity over marketing
- structure over decoration
- navigation over noise
- durability over trend

---

## Tech

- Framework: Next.js
- Deployment: Cloudflare Pages
- Rendering: static / hybrid as needed

No backend services are required.

---

## License

MIT — see `LICENSE`.
