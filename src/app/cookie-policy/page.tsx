import type { Metadata } from "next";
import ManageCookiesButton from "@/components/privacy/ManageCookiesButton";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for maiomascio.dev.",
  alternates: { canonical: "https://www.maiomascio.dev/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <main className="container narrow">
      <h1>Cookie Policy</h1>
      <p className="muted">Last updated: February 6, 2026</p>

      <h2>Categories</h2>
      <ul>
        <li><strong>Essential</strong>: required for security and basic site operation.</li>
        <li><strong>Analytics</strong>: helps measure usage and improve content (optional).</li>
        <li><strong>Marketing</strong>: helps measure ad performance and attribution (optional).</li>
      </ul>

      <h2>Consent</h2>
      <p>
        Analytics and marketing cookies are disabled by default. They are only
        enabled if you provide explicit consent.
      </p>

      <h2>Manage Preferences</h2>
      <p>
        You can change your preferences at any time.
      </p>
      <ManageCookiesButton className="button" />

      <h2>What Happens If You Refuse</h2>
      <p>
        The site continues to work with essential storage only. Optional
        analytics and marketing features remain disabled.
      </p>
    </main>
  );
}
