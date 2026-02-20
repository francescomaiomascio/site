export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function GlobalErrorPage() {
  return (
    <main style={{ padding: "3rem", fontFamily: "sans-serif" }}>
      <h1>Unexpected error</h1>
      <p>The site encountered an unexpected error while rendering.</p>
    </main>
  );
}
