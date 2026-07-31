import { useEffect, useState, type FormEvent } from "react";
import { useTranslation } from "@/lib/i18n";
import { RESERVE_EMAIL, products, type Product } from "@/lib/products";

interface Props {
  open: boolean;
  onClose: () => void;
  product: Product;
}

export function ReserveDialog({ open, onClose, product }: Props) {
  const { t, locale } = useTranslation();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const inputCls =
    "w-full bg-transparent border-b border-navy/20 py-2.5 text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const expression = String(fd.get("expression") || product.name);
    const body = [
      `${t("shop.form.name")}: ${fd.get("name")}`,
      `${t("shop.form.email")}: ${fd.get("email")}`,
      `${t("shop.form.expression")}: ${expression}`,
      `${t("shop.form.quantity")}: ${fd.get("quantity")}`,
      "",
      String(fd.get("message") || ""),
    ].join("\n");
    const href = `mailto:${RESERVE_EMAIL}?subject=${encodeURIComponent(
      `Aurea — ${t("shop.form.subject")}: ${expression}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        className="fade-up relative w-full max-w-lg max-h-full overflow-y-auto border border-gold/30 bg-crema px-8 py-10 md:px-12"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-[11px] uppercase tracking-[0.3em] text-navy/40 hover:text-gold"
        >
          ✕
        </button>

        {sent ? (
          <div className="py-10 text-center">
            <p className="eyebrow mb-5">Aurea</p>
            <p className="font-display text-3xl italic text-navy">{t("shop.form.success")}</p>
            <p className="mt-4 text-sm leading-relaxed text-navy/60">
              {t("shop.form.successBody")}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 text-[11px] uppercase tracking-[0.3em] text-gold hover:text-navy"
            >
              {t("shop.form.close")}
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow mb-4">{t("shop.reserve")}</p>
            <h2 className="font-display text-3xl italic text-navy">
              Aurea {product.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/60">{t("shop.form.intro")}</p>

            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="eyebrow mb-2 block" htmlFor="r-name">
                    {t("shop.form.name")}
                  </label>
                  <input id="r-name" name="name" required maxLength={100} className={inputCls} />
                </div>
                <div>
                  <label className="eyebrow mb-2 block" htmlFor="r-email">
                    {t("shop.form.email")}
                  </label>
                  <input
                    id="r-email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="eyebrow mb-2 block" htmlFor="r-expression">
                    {t("shop.form.expression")}
                  </label>
                  <select
                    id="r-expression"
                    name="expression"
                    defaultValue={product.name}
                    className={inputCls + " cursor-pointer appearance-none"}
                  >
                    {products.map((p) => (
                      <option key={p.slug} value={p.name}>
                        {p.name} — {p.subtitle[locale]}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="eyebrow mb-2 block" htmlFor="r-quantity">
                    {t("shop.form.quantity")}
                  </label>
                  <input
                    id="r-quantity"
                    name="quantity"
                    type="number"
                    min={1}
                    max={99}
                    defaultValue={1}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className="eyebrow mb-2 block" htmlFor="r-message">
                  {t("shop.form.message")}
                </label>
                <textarea
                  id="r-message"
                  name="message"
                  rows={4}
                  maxLength={1200}
                  className={inputCls + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-4 bg-navy px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-crema transition-colors hover:bg-gold hover:text-navy"
              >
                {t("shop.form.submit")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <p className="text-center text-[9px] uppercase tracking-[0.3em] text-navy/35">
                {t("shop.form.note")}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
