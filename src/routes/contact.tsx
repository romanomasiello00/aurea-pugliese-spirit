import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { useTranslation } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aurea Tequila" },
      {
        name: "description",
        content:
          "Write to Aurea for general enquiries, distribution, press or hospitality.",
      },
      { property: "og:title", content: "Contact — Aurea Tequila" },
      {
        property: "og:description",
        content:
          "Write to Aurea for enquiries about the brand, distribution, hospitality or press.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(150),
  category: z.enum(["info", "distribution", "press", "hospitality"]),
  message: z.string().trim().min(10).max(2000),
});

type Status = "idle" | "sending" | "sent" | "error";

function ContactPage() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        map[issue.path.join(".")] = issue.message;
      }
      setErrors(map);
      return;
    }
    setStatus("sending");
    // Persist locally as a fallback and simulate submission.
    // Wiring to Cloud + Resend is planned as follow-up.
    try {
      const key = "aurea:contact-log";
      const prev = JSON.parse(localStorage.getItem(key) || "[]");
      prev.push({ ...parsed.data, at: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(prev));
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full bg-transparent border-b border-navy/20 py-3 text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors";

  return (
    <section className="pt-24 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow mb-6">{t("contact.eyebrow")}</p>
          <h1 className="font-display text-5xl md:text-6xl text-navy mb-6 italic">
            {t("contact.title")}
          </h1>
          <p className="text-navy/70 max-w-xl mx-auto leading-relaxed">{t("contact.intro")}</p>
        </div>

        {status === "sent" ? (
          <div className="text-center py-16 border border-gold/40 rounded-md bg-soft-white/50">
            <p className="font-display text-3xl italic text-navy mb-4">{t("contact.success")}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 text-[11px] uppercase tracking-[0.3em] text-gold hover:text-navy transition-colors"
            >
              ← Write another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="eyebrow block mb-3" htmlFor="name">
                  {t("contact.name")}
                </label>
                <input id="name" name="name" required className={inputCls} maxLength={100} />
                {errors.name && (
                  <p className="mt-2 text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="eyebrow block mb-3" htmlFor="email">
                  {t("contact.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputCls}
                  maxLength={255}
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="eyebrow block mb-3" htmlFor="category">
                {t("contact.category")}
              </label>
              <select
                id="category"
                name="category"
                defaultValue="info"
                className={inputCls + " appearance-none cursor-pointer"}
              >
                <option value="info">{t("contact.category.info")}</option>
                <option value="distribution">{t("contact.category.distribution")}</option>
                <option value="press">{t("contact.category.press")}</option>
                <option value="hospitality">{t("contact.category.hospitality")}</option>
              </select>
            </div>

            <div>
              <label className="eyebrow block mb-3" htmlFor="subject">
                {t("contact.subject")}
              </label>
              <input id="subject" name="subject" required className={inputCls} maxLength={150} />
              {errors.subject && (
                <p className="mt-2 text-xs text-destructive">{errors.subject}</p>
              )}
            </div>

            <div>
              <label className="eyebrow block mb-3" htmlFor="message">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className={inputCls + " resize-none"}
                maxLength={2000}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-navy/40">
                Hecho en México · Imported to Puglia
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-navy text-crema text-[11px] font-medium uppercase tracking-[0.3em] transition-colors hover:bg-gold hover:text-navy disabled:opacity-60"
              >
                {status === "sending" ? t("contact.sending") : t("contact.submit")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {status === "error" && (
              <p className="text-center text-destructive text-sm">{t("contact.error")}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
