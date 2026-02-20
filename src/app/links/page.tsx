import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Links",
  description: "Official links for Francesco Maiomascio.",
  alternates: { canonical: "https://www.maiomascio.dev/links" },
};

const LINKS: Array<{
  label: string;
  url: string;
  note: string;
  iconUrl: string;
  iconAlt?: string;
  tone: string;
}> = [
  {
    label: "Website",
    url: "https://www.maiomascio.dev/",
    note: "Canonical home.",
    iconUrl: "/icon.png",
    iconAlt: "Website",
    tone: "website",
  },
  {
    label: "GitHub",
    url: "https://github.com/francescomaiomascio",
    note: "Repositories, releases, and system work.",
    iconUrl: "https://readmecodegen.vercel.app/api/social-icon?name=github&theme=dark&size=20",
    tone: "github",
  },
  {
    label: "Hugging Face",
    url: "https://huggingface.co/francescomaiomascio",
    note: "Models, datasets, and experiments.",
    iconUrl: "https://readmecodegen.vercel.app/api/social-icon?name=huggingface&theme=dark&size=20",
    tone: "huggingface",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/francescomaiomascio/",
    note: "Professional profile.",
    iconUrl: "https://readmecodegen.vercel.app/api/social-icon?name=linkedin&theme=dark&size=20",
    tone: "linkedin",
  },
  {
    label: "Stack Overflow",
    url: "https://stackoverflow.com/users/30851581/francesco-maiomascio",
    note: "Answers and technical trail.",
    iconUrl: "https://readmecodegen.vercel.app/api/social-icon?name=stackoverflow&theme=dark&size=20",
    tone: "stackoverflow",
  },
  {
    label: "X",
    url: "https://x.com/framaiomascio",
    note: "Short updates and threads.",
    iconUrl: "https://readmecodegen.vercel.app/api/social-icon?name=x&theme=dark&size=20",
    tone: "x",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@francescomaiomascio_dev",
    note: "Talks, demos, and walkthroughs.",
    iconUrl: "https://readmecodegen.vercel.app/api/social-icon?name=youtube&theme=dark&size=20",
    tone: "youtube",
  },
  {
    label: "Gumroad",
    url: "https://francescomaiomascio.gumroad.com",
    note: "Products, assets, and releases.",
    iconUrl: "https://readmecodegen.vercel.app/api/social-icon?name=gumroad&theme=dark&size=20",
    tone: "gumroad",
  },
  {
    label: "Bluesky",
    url: "https://bsky.app/profile/maiomascio.dev",
    note: "Alternative social stream.",
    iconUrl: "https://readmecodegen.vercel.app/api/social-icon?name=bluesky&theme=dark&size=20",
    tone: "bluesky",
  },
  // Aggiungi qui SOLO i link che vuoi far emergere su Google.
];

export default function LinksPage() {
  return (
    <main className="links-page">
      <div className="links-shell">
        <header className="links-header">
          <p className="links-kicker">Official links</p>
          <h1>Official links</h1>
          <p className="links-subtitle">
            Verified profiles and canonical references for Francesco Maiomascio.
          </p>
        </header>

        <ul className="links-list">
          {LINKS.map((l) => (
            <li key={l.url} className={`links-card links-card--${l.tone}`}>
              <div className="links-card-inner">
                <Image
                  src={l.iconUrl}
                  alt={l.iconAlt ?? ""}
                  width={24}
                  height={24}
                  className="links-icon"
                  unoptimized={l.iconUrl.startsWith("http")}
                />
                <div className="links-copy">
                  <a
                    className="links-label"
                    href={l.url}
                    target="_blank"
                    rel="me noopener noreferrer"
                  >
                    {l.label}
                  </a>
                  <div className="links-note">{l.note}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
