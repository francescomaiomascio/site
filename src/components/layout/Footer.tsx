"use client";

import Link from "next/link";
import Image from "next/image";

const ORG_URL = "https://github.com/yai-labs";
const GITHUB_PROFILE = "https://github.com/framaiomascio";
const X_URL = "https://x.com/framaiomascio";
const LINKEDIN_URL = "https://www.linkedin.com/";
const MEDIUM_URL = "https://medium.com/";

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.74.75 12.24c0 5.2 3.36 9.62 8.02 11.18.59.11.8-.26.8-.57v-2.1c-3.26.73-3.95-1.6-3.95-1.6-.53-1.39-1.3-1.76-1.3-1.76-1.06-.75.08-.74.08-.74 1.17.08 1.78 1.24 1.78 1.24 1.04 1.83 2.73 1.3 3.4.99.1-.77.41-1.3.74-1.6-2.6-.31-5.33-1.35-5.33-6.01 0-1.33.46-2.42 1.22-3.28-.12-.31-.53-1.58.12-3.29 0 0 1-.33 3.3 1.26.96-.27 2-.4 3.03-.4 1.03 0 2.07.14 3.03.4 2.3-1.6 3.3-1.26 3.3-1.26.65 1.71.24 2.98.12 3.29.76.86 1.22 1.95 1.22 3.28 0 4.68-2.73 5.7-5.34 6.01.42.37.79 1.1.79 2.23v3.31c0 .31.21.68.81.57 4.66-1.56 8.02-5.98 8.02-11.18C23.25 5.74 18.27.5 12 .5Z"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.77 7.73L23 22h-6.2l-4.86-6.54L6.2 22H3l7.25-8.3L1 2h6.36l4.4 5.9L18.9 2Zm-1.08 18h1.72L6.28 3.93H4.45L17.82 20Z"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.98h-4V23.5Zm7 0h4v-8.5c0-2.28.43-4.48 3.25-4.48 2.78 0 2.81 2.6 2.81 4.63v8.35h4V14.3c0-4.52-.97-8-6.26-8-2.54 0-4.25 1.39-4.95 2.71h-.05V7.98h-3.8V23.5Z"
      />
    </svg>
  );
}

function IconMedium() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.5 7.2c.03-.3-.08-.6-.3-.8L5 3.9V3.5h6.9l5.3 11.7L21.8 3.5H28v.4l-1.9 1.8c-.16.12-.24.32-.2.52v13.2c-.04.2.04.4.2.52l1.9 1.8v.4h-9.5v-.4l2-1.8c.2-.2.2-.24.2-.52V8.4l-5.6 14.1h-.8L7.5 7.2Z"
        transform="translate(-4 -2)"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="yai-footer" aria-label="Site footer">
      {/* Main grid */}
      <section className="yai-footer-main">
        <div className="yai-footer-shell yai-footer-grid yai-container">
          {/* Left rail */}
          <div className="yai-footer-rail">
            <Link href="/" className="yai-footer-logo" aria-label="YAI Labs home">
              <Image
                src="/yai.png"
                alt="YAI"
                width={26}
                height={26}
                className="yai-footer-logo-icon"
              />
              <span className="yai-footer-logo-mark">YAI</span>
              <span className="yai-footer-logo-sub">Labs</span>
            </Link>

            <div className="yai-footer-social" aria-label="Social">
              <a className="yai-footer-social-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer" aria-label="GitHub">
                <IconGithub />
              </a>
              <a className="yai-footer-social-btn" href={X_URL} target="_blank" rel="noreferrer" aria-label="X">
                <IconX />
              </a>
              <a className="yai-footer-social-btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
              <a className="yai-footer-social-btn" href={MEDIUM_URL} target="_blank" rel="noreferrer" aria-label="Medium">
                <IconMedium />
              </a>
            </div>

            <nav className="yai-footer-rail-links" aria-label="Trust links">
              <Link href="/status">Status</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/security">Security</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/legal">Legal notices</Link>
            </nav>

            <div className="yai-footer-lang">
              <select className="yai-footer-lang-select" defaultValue="en" aria-label="Language">
                <option value="en">English</option>
                <option value="it">Italiano</option>
              </select>
            </div>
          </div>

          {/* Right columns */}
          <div className="yai-footer-cols">
            <div className="yai-footer-col">
              <div className="yai-footer-col-title">Use cases</div>
              <Link href="/#domains">Domains</Link>
              <Link href="/#proof">Proof surfaces</Link>
              <Link href="/#services">Pilot delivery</Link>
              <Link href="/#pricing">Pricing</Link>
            </div>

            <div className="yai-footer-col">
              <div className="yai-footer-col-title">Industries</div>
              <span className="yai-footer-muted">Financial Services</span>
              <span className="yai-footer-muted">Manufacturing</span>
              <span className="yai-footer-muted">Healthcare</span>
              <span className="yai-footer-muted">All industries</span>
            </div>

            <div className="yai-footer-col">
              <div className="yai-footer-col-title">Company</div>
              <Link href="/writing">Writing</Link>
              <Link href="/status">News</Link>
              <a href={ORG_URL} target="_blank" rel="noreferrer">Open source</a>
            </div>

            <div className="yai-footer-col">
              <div className="yai-footer-col-title">Partners</div>
              <span className="yai-footer-muted">Coming soon</span>
              <span className="yai-footer-muted">Cloud</span>
              <span className="yai-footer-muted">Security</span>
              <span className="yai-footer-muted">All partners</span>
            </div>

            <div className="yai-footer-col yai-footer-col--bottom yai-footer-col--compare">
              <div className="yai-footer-col-title">Compare</div>
              <span className="yai-footer-muted">YAI vs. Agents</span>
              <span className="yai-footer-muted">YAI vs. AI apps</span>
              <span className="yai-footer-muted">YAI vs. Workflow tools</span>
            </div>

            <div className="yai-footer-col yai-footer-col--bottom yai-footer-col--connect">
              <div className="yai-footer-col-title">Connect</div>
              <a href="mailto:pilot@yai.foundation">Email</a>
              <a href={X_URL} target="_blank" rel="noreferrer">X</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>

            <div className="yai-footer-col yai-footer-col--bottom yai-footer-col--support">
              <div className="yai-footer-col-title">Support</div>
              <Link href="/docs">Docs</Link>
              <Link href="/security">Security</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
