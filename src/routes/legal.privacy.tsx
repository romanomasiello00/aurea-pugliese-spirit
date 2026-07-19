import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Aurea Tequila" },
      { name: "description", content: "Aurea Tequila privacy notice." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/legal/privacy" },
    ],
    links: [{ rel: "canonical", href: "/legal/privacy" }],
  }),
  component: () => (
    <section className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
      <p className="eyebrow mb-6">Legal</p>
      <h1 className="font-display text-5xl text-navy mb-10 italic">Privacy</h1>
      <div className="space-y-6 text-navy/80 leading-relaxed">
        <p>
          Aurea Tequila respects your privacy. This page is a placeholder for the full privacy
          notice, which will be published shortly.
        </p>
        <p>
          Any personal data submitted via the contact form is used only to respond to your
          enquiry and is never shared with third parties.
        </p>
      </div>
    </section>
  ),
});
