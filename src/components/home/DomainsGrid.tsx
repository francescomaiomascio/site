import Link from "next/link";
import { DOMAINS, type DomainCard } from "@/content/domains";
import { DomainIllustration, type DomainIllustrationKind } from "@/components/illustrations/DomainIllustration";

function illustrationKindFromSlug(slug: string): DomainIllustrationKind {
  if (slug === "physical-actuators") return "physical";
  if (slug === "digital-egress") return "digital";
  if (slug === "biological-custody") return "biological";
  if (slug === "economic-transactions") return "economic";
  if (slug === "operational-response") return "operational";
  if (slug === "institutional-authority") return "institutional";
  return "scientific";
}

function DomainCardTile({ card }: { card: DomainCard }) {
  return (
    <Link
      href={card.href}
      className={`domains-card domains-card--${card.variant}`}
      data-accent={card.accent}
      data-variant={card.variant}
    >
      <span className="domains-card-affordance" aria-hidden="true">↗</span>
      <DomainIllustration kind={illustrationKindFromSlug(card.slug)} />
      <div className="domains-card-copy">
        <div className="domains-card-top">
          {card.kicker ? <span className="domains-card-kicker">{card.kicker}</span> : null}
        </div>

        <h3 className="domains-card-title">{card.title}</h3>
        <p className="domains-card-desc">
          {card.descriptionLead} <strong>{card.emphasis}</strong> {card.descriptionTail}
        </p>

        {card.variant === "hero" && card.bullets?.length ? (
          <ul className="domains-card-bullets">
            {card.bullets.slice(0, 3).map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </Link>
  );
}

type DomainsGridSectionProps = {
  featuredOnly?: boolean;
  showAllLink?: boolean;
};

export function DomainsGridSection(props: DomainsGridSectionProps = {}) {
  const { featuredOnly = true, showAllLink = true } = props;
  const cards = featuredOnly
    ? (() => {
        const featured = DOMAINS.filter((card) => card.featured);
        const bySlug = new Map(featured.map((card) => [card.slug, card]));
        const homeOrder = [
          "physical-actuators",
          "digital-egress",
          "biological-custody",
          "economic-transactions",
          "operational-response",
          "institutional-authority",
          "scientific-reproducibility",
        ];
        return homeOrder
          .map((slug) => bySlug.get(slug))
          .filter((card): card is DomainCard => Boolean(card));
      })()
    : DOMAINS;
  const gridClass = featuredOnly ? "domains-grid domains-grid--home" : "domains-grid domains-grid--catalog";

  return (
    <div className="domains-grid-wrap">
      <div className={gridClass} aria-label="Domain cards">
        {cards.map((card) => (
          <DomainCardTile key={card.slug} card={card} />
        ))}
      </div>
      {showAllLink ? (
        <div className="domains-grid-more">
          <Link href="/domains" className="domains-grid-more-link">
            View all domains →
          </Link>
        </div>
      ) : null}
    </div>
  );
}
