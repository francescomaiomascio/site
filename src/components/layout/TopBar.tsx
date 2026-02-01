import Image from "next/image";
import Link from "next/link";
import avatarSrc from "@/app/img/DSC00498.jpg";

export function TopBar() {
  return (
    <header className="site-header">
      <nav className="site-nav site-shell">
        <div className="site-nav-left">
          <div className="site-brand-wrap">
            <Image
              src={avatarSrc}
              alt="Francesco Maiomascio"
              width={36}
              height={36}
              className="site-avatar"
              priority
            />
            <Link href="/" className="site-brand">
              Francesco Maiomascio
            </Link>
          </div>
        </div>

        <div className="site-nav-right">
          <Link href="/projects">Projects</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/status">Status</Link>
          <Link href="/about">About</Link>

          <a
            href="https://github.com/francescomaiomascio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
