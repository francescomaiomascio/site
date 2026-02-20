export type ConsentState = {
  necessary: true;
  analytics: boolean;
  ads: boolean;
  timestamp: string;
  version: number;
};

export const CONSENT_KEY = "ice_consent_v1";
export const CONSENT_VERSION = 1;

export const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  ads: false,
  timestamp: new Date(0).toISOString(),
  version: CONSENT_VERSION,
};

export function readConsentFromStorage(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed || parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsentToStorage(consent: ConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

export function nowISO() {
  return new Date().toISOString();
}
