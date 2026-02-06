type PersonSchemaInput = {
  canonicalUrl: string;
  name: string;
  jobTitle: string;
  description: string;
  sameAs: string[];
  alternateName?: string[];
  imageUrl?: string;
};

export function buildPersonSchema(input: PersonSchemaInput) {
  const {
    canonicalUrl,
    name,
    jobTitle,
    description,
    sameAs,
    alternateName,
    imageUrl,
  } = input;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: canonicalUrl,
    jobTitle,
    description,
    sameAs,
  };

  if (alternateName?.length) schema.alternateName = alternateName;
  if (imageUrl) schema.image = imageUrl;

  return schema;
}
