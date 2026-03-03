import Link from "next/link";
import { DOMAINS } from "@/content/domains";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return DOMAINS.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export default async function DomainSlugPage({ params }: Props) {
  const { slug } = await params;
  const domain = DOMAINS.find((item) => item.slug === slug);

  if (!domain) {
    return (
      <main className="section">
        <div className="section-inner">
          <h1 className="home-h2">Domain not found</h1>
          <p className="home-sub">The requested domain page is not available yet.</p>
          <Link href="/domains" className="button button--ghost">Back to domains</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="section-inner">
        <p className="domains-card-kicker">{domain.kicker}</p>
        <h1 className="home-h2">{domain.title}</h1>
        <p className="home-sub">
          {domain.descriptionLead} <strong>{domain.emphasis}</strong> {domain.descriptionTail}
        </p>
        <p className="home-sub">Domain detail page coming soon.</p>
        <Link href="/domains" className="button button--ghost">Back to domains</Link>
      </div>
    </main>
  );
}
