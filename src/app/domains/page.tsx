import { DomainsGridSection } from "@/components/home/DomainsGrid";

export default function DomainsIndexPage() {
  return (
    <main className="section">
      <div className="section-inner">
        <h1 className="home-h2">Domains</h1>
        <p className="home-sub">Select a domain to explore its execution surface.</p>
        <p className="home-sub">Full catalog coming next.</p>
        <DomainsGridSection featuredOnly={false} showAllLink={false} />
      </div>
    </main>
  );
}
