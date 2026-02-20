"use client";

export const dynamic = "force-dynamic";

export default function GlobalError() {
  return (
    <html>
      <body>
        <main style={{ padding: "3rem", fontFamily: "sans-serif" }}>
          <h1>Unexpected error</h1>
          <p>The site encountered an unexpected error while rendering.</p>
        </main>
      </body>
    </html>
  );
}
