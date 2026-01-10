import { TopBar } from "./TopBar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-root">
      <TopBar />

      <main className="site-main" role="main">
        {children}
      </main>

      <Footer />
    </div>
  );
}
