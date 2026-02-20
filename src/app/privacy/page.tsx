import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for maiomascio.dev.",
  alternates: { canonical: "https://www.maiomascio.dev/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="container narrow">
      <h1>Privacy Policy</h1>
      <p className="muted">Last updated: February 6, 2026</p>

      <h2>Data Controller</h2>
      <p>
        Francesco Maiomascio (data controller). Contact: <strong>UPDATE_EMAIL_HERE</strong>.
      </p>

      <h2>What We Collect</h2>
      <ul>
        <li>Essential technical data required to operate the site.</li>
        <li>Analytics data only if you consent (aggregated usage, no sensitive data).</li>
        <li>Marketing/ads data only if you consent (for measurement and attribution).</li>
      </ul>

      <h2>Purposes & Legal Bases</h2>
      <ul>
        <li>Site operation and security (legitimate interest).</li>
        <li>Analytics (consent).</li>
        <li>Ads/marketing measurement (consent).</li>
      </ul>

      <h2>Retention</h2>
      <p>
        Consent preferences are stored locally on your device. Third-party tools
        (if enabled by consent) retain data according to their policies.
      </p>

      <h2>Sharing</h2>
      <p>
        We share data with service providers only when you consent to analytics
        or ads. Providers may include Google (GA4/Ads) via Google Tag Manager.
      </p>

      <h2>Your Rights</h2>
      <p>
        You can withdraw consent at any time. Contact the data controller for
        access, deletion, or other requests.
      </p>
    </main>
  );
}
