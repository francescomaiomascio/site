"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  CONSENT_VERSION,
  ConsentState,
  nowISO,
  readConsentFromStorage,
  writeConsentToStorage,
} from "@/lib/consent";

type Props = {
  ownerEmail: string;
  policyHrefPrivacy: string;
  policyHrefCookie: string;
  gtmId?: string;
  onConsentChange?: (c: ConsentState) => void;
};

function applyGtagConsent(c: ConsentState) {
  const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
  if (!gtag) return;

  const analytics = c.analytics ? "granted" : "denied";
  const ads = c.ads ? "granted" : "denied";

  gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  });
}

export default function CookieBanner(props: Props) {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    const c = readConsentFromStorage();
    if (!c) {
      setOpen(true);
      return;
    }
    setAnalytics(!!c.analytics);
    setAds(!!c.ads);
    setConsent(c);
    applyGtagConsent(c);
    props.onConsentChange?.(c);
  }, []);

  useEffect(() => {
    function handleOpen() {
      const c = readConsentFromStorage();
      if (c) {
        setAnalytics(!!c.analytics);
        setAds(!!c.ads);
        setConsent(c);
      }
      setOpen(true);
      setManage(true);
    }

    window.addEventListener("ice:open-consent", handleOpen as EventListener);
    return () => {
      window.removeEventListener("ice:open-consent", handleOpen as EventListener);
    };
  }, []);

  function save(c: ConsentState) {
    writeConsentToStorage(c);
    applyGtagConsent(c);
    props.onConsentChange?.(c);
    setConsent(c);
    setOpen(false);
    setManage(false);
  }

  function acceptAll() {
    save({
      necessary: true,
      analytics: true,
      ads: true,
      timestamp: nowISO(),
      version: CONSENT_VERSION,
    });
  }

  function essentialOnly() {
    save({
      necessary: true,
      analytics: false,
      ads: false,
      timestamp: nowISO(),
      version: CONSENT_VERSION,
    });
  }

  function savePreferences() {
    save({
      necessary: true,
      analytics,
      ads,
      timestamp: nowISO(),
      version: CONSENT_VERSION,
    });
  }

  const shouldLoadGtm = !!props.gtmId && (consent?.analytics || consent?.ads);

  return (
    <>
      {shouldLoadGtm ? (
        <Script
          id="gtm"
          src={`https://www.googletagmanager.com/gtm.js?id=${props.gtmId}`}
          strategy="afterInteractive"
        />
      ) : null}

      {!open ? null : (
        <div
          role="dialog"
          aria-live="polite"
          className="cookie-banner"
          style={{
            position: "fixed",
            left: 16,
            right: 16,
            bottom: 16,
            zIndex: 9999,
            borderRadius: 16,
            padding: 16,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(10,10,12,0.82)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            color: "rgba(255,255,255,0.92)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 820 }}>
              <div
                style={{
                  fontWeight: 650,
                  letterSpacing: 0.2,
                  marginBottom: 6,
                }}
              >
                Cookies & tracking preferences
              </div>
              <div style={{ opacity: 0.85, lineHeight: 1.45, fontSize: 14 }}>
                We use essential storage for security and basic site operation.
                With your consent, we also use analytics to understand usage and
                (optionally) marketing to measure ads performance. You can change
                your choice at any time in{" "}
                <a
                  href={props.policyHrefCookie}
                  style={{ textDecoration: "underline", color: "inherit" }}
                >
                  Cookie Policy
                </a>
                .
              </div>
              <div style={{ marginTop: 8, opacity: 0.7, fontSize: 13 }}>
                Data controller: {props.ownerEmail}. See{" "}
                <a
                  href={props.policyHrefPrivacy}
                  style={{ textDecoration: "underline", color: "inherit" }}
                >
                  Privacy Policy
                </a>
                .
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button onClick={() => setManage((v) => !v)} style={btnSecondary}>
                Manage
              </button>
              <button onClick={essentialOnly} style={btnSecondary}>
                Essential only
              </button>
              <button onClick={acceptAll} style={btnPrimary}>
                Accept all
              </button>
            </div>
          </div>

          {manage && (
            <div
              style={{
                marginTop: 14,
                paddingTop: 12,
                borderTop: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <ToggleRow
                title="Essential"
                desc="Required for security and basic site operation."
                checked={true}
                disabled
                onChange={() => {}}
              />
              <ToggleRow
                title="Analytics"
                desc="Helps measure usage and improve content."
                checked={analytics}
                onChange={setAnalytics}
              />
              <ToggleRow
                title="Marketing"
                desc="Helps measure ad performance and retargeting (Google Ads)."
                checked={ads}
                onChange={setAds}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 10,
                }}
              >
                <button onClick={savePreferences} style={btnPrimary}>
                  Save preferences
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

function ToggleRow(props: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "10px 0",
      }}
    >
      <div>
        <div style={{ fontWeight: 600 }}>{props.title}</div>
        <div style={{ opacity: 0.8, fontSize: 13 }}>{props.desc}</div>
      </div>
      <label
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          opacity: props.disabled ? 0.7 : 1,
        }}
      >
        <input
          type="checkbox"
          checked={props.checked}
          disabled={props.disabled}
          onChange={(e) => props.onChange(e.target.checked)}
        />
      </label>
    </div>
  );
}

const btnPrimary: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.10)",
  color: "rgba(255,255,255,0.95)",
  fontWeight: 650,
};

const btnSecondary: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.20)",
  color: "rgba(255,255,255,0.9)",
  fontWeight: 600,
};
