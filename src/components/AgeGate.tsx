import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { AureaMark } from "./AureaMark";

const STORAGE_KEY = "aurea:age-verified";

export function AgeGate() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"loading" | "gated" | "granted" | "denied">("loading");

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "granted") setStatus("granted");
      else setStatus("gated");
    } catch {
      setStatus("gated");
    }
  }, []);

  if (status === "loading" || status === "granted") return null;

  const grant = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "granted");
    } catch {
      /* noop */
    }
    setStatus("granted");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-crema fade-in"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,27,61,0.06)_100%)]" />
      <div className="relative w-full max-w-lg mx-4 text-center">
        <AureaMark className="mx-auto size-16 mb-8" />
        <p className="eyebrow mb-6">Aurea · Tequila · Puglia</p>
        <h2
          id="age-gate-title"
          className="font-display text-4xl md:text-5xl font-medium text-navy mb-6 text-balance"
        >
          {status === "denied" ? t("age.rejected") : t("age.title")}
        </h2>

        {status === "gated" && (
          <>
            <p className="text-navy/70 max-w-md mx-auto leading-relaxed mb-10">{t("age.body")}</p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-navy/50 mb-6">
              {t("age.question")}
            </p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={grant}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-navy text-crema text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:bg-gold hover:text-navy"
              >
                {t("age.yes")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button
                type="button"
                onClick={() => setStatus("denied")}
                className="px-6 py-3 border border-navy/20 text-navy text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:border-navy hover:bg-navy/5"
              >
                {t("age.no")}
              </button>
            </div>
          </>
        )}

        <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-navy/40">
          {t("age.disclaimer")}
        </p>
      </div>
    </div>
  );
}
