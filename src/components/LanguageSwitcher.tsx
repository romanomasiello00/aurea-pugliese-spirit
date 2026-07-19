import { useTranslation, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useTranslation();
  const opts: Locale[] = ["en", "it"];
  return (
    <div
      className={
        "flex gap-2 text-[10px] font-medium uppercase tracking-[0.15em] " + className
      }
    >
      {opts.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(l)}
            className={
              "transition-colors " +
              (locale === l
                ? "text-navy"
                : "text-navy/40 hover:text-navy cursor-pointer")
            }
            aria-pressed={locale === l}
          >
            {l.toUpperCase()}
          </button>
          {i < opts.length - 1 && <span className="text-navy/30">/</span>}
        </span>
      ))}
    </div>
  );
}
