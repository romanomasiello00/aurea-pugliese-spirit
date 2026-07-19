import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Aurea Tequila" },
      { name: "description", content: "Aurea Tequila terms of use." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/legal/terms" },
    ],
    links: [{ rel: "canonical", href: "/legal/terms" }],
  }),
  component: () => (
    <section className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
      <p className="eyebrow mb-6">Legal</p>
      <h1 className="font-display text-5xl text-navy mb-10 italic">Terms</h1>
      <div className="space-y-6 text-navy/80 leading-relaxed">
        <p>
          Aurea Tequila is intended for adults of legal drinking age. By entering this site you
          confirm that you have reached the legal drinking age in your country.
        </p>
        <p>Please enjoy Aurea responsibly.</p>
      </div>
    </section>
  ),
});
