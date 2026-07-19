import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { AureaMark } from "./AureaMark";
import { LanguageSwitcher } from "./LanguageSwitcher";

const linkCls =
  "relative text-[10px] font-medium uppercase tracking-[0.25em] text-navy transition-colors hover:text-gold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-500 hover:after:w-full";

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "bg-crema/85 backdrop-blur-md border-b border-navy/5"
          : "bg-crema/0")
      }
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-8">
        {/* Left nav (desktop) */}
        <div className="hidden md:flex gap-8 flex-1 justify-start">
          <Link to="/story" className={linkCls}>
            {t("nav.story")}
          </Link>
          <Link to="/expression" className={linkCls}>
            {t("nav.expression")}
          </Link>
        </div>

        {/* Center wordmark */}
        <Link to="/" className="flex flex-col items-center gap-1 group" aria-label="Aurea home">
          <AureaMark className="size-7 transition-transform duration-700 group-hover:rotate-12" />
          <span className="font-display text-xl md:text-2xl font-medium tracking-[0.35em] text-navy uppercase leading-none">
            Aurea
          </span>
        </Link>

        {/* Right nav (desktop) */}
        <div className="hidden md:flex gap-8 flex-1 justify-end items-center">
          <Link to="/craft" className={linkCls}>
            {t("nav.craft")}
          </Link>
          <Link to="/contact" className={linkCls}>
            {t("nav.contact")}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex-1 flex justify-end"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={
                "block h-px w-6 bg-navy transition-transform " +
                (open ? "translate-y-[3px] rotate-45" : "")
              }
            />
            <span
              className={
                "block h-px w-6 bg-navy transition-transform " +
                (open ? "-translate-y-[3px] -rotate-45" : "")
              }
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-navy/5 bg-crema/95 backdrop-blur-md">
          <div className="px-6 py-8 flex flex-col gap-6 items-center">
            {[
              { to: "/story", label: t("nav.story") },
              { to: "/expression", label: t("nav.expression") },
              { to: "/craft", label: t("nav.craft") },
              { to: "/contact", label: t("nav.contact") },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-[11px] font-medium uppercase tracking-[0.3em] text-navy hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher className="pt-4" />
          </div>
        </div>
      )}
    </header>
  );
}
